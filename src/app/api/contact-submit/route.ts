import { NextRequest, NextResponse } from "next/server";
import {
  isValidInternationalPhone,
  normalizeInternationalPhone,
  PHONE_VALIDATION_MESSAGE,
} from "@/lib/phone";
import { verifyTurnstileToken } from "@/lib/turnstile";

const FORM_SUBMIT_URL =
  "https://ywwxvriolxwuqcwjaluh.supabase.co/functions/v1/form-submit/1642b3ec-d3da-4a7c-8b6f-3e64eb0c8d7e";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const token =
      String(formData.get("cf-turnstile-response") || "") ||
      String(formData.get("turnstileToken") || "");

    const ip =
      request.headers.get("cf-connecting-ip") ||
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      null;

    const verified = await verifyTurnstileToken(token, ip);
    if (!verified.ok) {
      return NextResponse.json(
        { ok: false, error: verified.error ?? "Captcha failed." },
        { status: 400 }
      );
    }

    const phone = String(formData.get("phone") || "");
    if (!isValidInternationalPhone(phone)) {
      return NextResponse.json(
        { ok: false, error: PHONE_VALIDATION_MESSAGE },
        { status: 400 }
      );
    }

    // Store a normalized international value (optional + and digits only)
    formData.set("phone", normalizeInternationalPhone(phone));

    // Do not forward captcha fields to the form backend
    formData.delete("cf-turnstile-response");
    formData.delete("turnstileToken");

    const upstream = await fetch(FORM_SUBMIT_URL, {
      method: "POST",
      body: formData,
    });

    if (!upstream.ok) {
      return NextResponse.json(
        { ok: false, error: "Form submit failed. Please try again." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
