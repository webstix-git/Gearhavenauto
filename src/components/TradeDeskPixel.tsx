import Script from "next/script";

/** The Trade Desk universal pixel — MWFB / MWF Gear Haven Auto & Diesel */
export function TradeDeskPixel() {
  return (
    <>
      <Script
        src="https://js.adsrvr.org/up_loader.3.0.0.js"
        strategy="afterInteractive"
      />
      <Script id="ttd-universal-pixel" strategy="afterInteractive">
        {`
          window.ttdConversionEventsLayer = window.ttdConversionEventsLayer || [];
          function ttdConversionEvents() {
            window.ttdConversionEventsLayer.push(arguments);
          }

          ttdConversionEvents("init", {
            advertiserId: "wj1k2wu",
            pixelIds: ["fa2j8md"]
          });

          ttdConversionEvents("event", {
            advertiserId: "wj1k2wu",
            pixelIds: ["fa2j8md"]
          });
        `}
      </Script>
    </>
  );
}
