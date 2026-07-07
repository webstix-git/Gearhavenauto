import type { Metadata } from "next";
import { GetAQuotePage } from "@/components/GetAQuotePage";

export const metadata: Metadata = {
  title: "Get a Quote",
  description:
    "Request a free estimate from Gear Haven Auto & Diesel in Nixa, MO. Tell us about your vehicle and we will follow up with honest pricing.",
  alternates: {
    canonical: "/get-a-quote",
  },
};

export default function Page() {
  return <GetAQuotePage />;
}
