import { HomePage } from "@/components/HomePage";
import { JsonLd } from "@/components/JsonLd";
import { webPageSchema } from "@/lib/structured-data";

export default function Page() {
  return (
    <>
      <JsonLd
        data={webPageSchema({
          path: "/",
          name: "Auto & Diesel Repair in Nixa, MO | Gearhaven",
          description:
            "Trusted auto and diesel repair in Nixa, MO for cars, trucks, and fleets. Honest recommendations, clear answers, and expert work you can count on.",
        })}
      />
      <HomePage />
    </>
  );
}
