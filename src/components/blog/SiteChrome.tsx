import Link from "next/link";
import { GhIcon } from "@/components/GhIcon";
import { FOOTER_LEGAL_LINKS } from "@/lib/footer-legal";
import {
  GH_ICON_CHEVRON,
  GH_ICON_EMAIL,
  GH_ICON_FACEBOOK,
  GH_ICON_LOCATION,
  GH_ICON_PHONE,
} from "@/lib/gh-icons";
import {
  SITE_ADDRESS_LINE1,
  SITE_ADDRESS_LINE2,
  SITE_COPYRIGHT_HTML,
  SITE_FACEBOOK_URL,
} from "@/lib/site-info";

type SiteChromeProps = {
  children: React.ReactNode;
};

export function SiteBreadcrumbs({
  items,
}: {
  items: { label: string; href?: string }[];
}) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="gh-breadcrumb"
      style={{
        background: "#F6F4F0",
        borderBottom: "1px solid #E7E4DD",
      }}
    >
      <div
        style={{
          maxWidth: 1240,
          margin: "0 auto",
          padding: "14px 28px",
          display: "flex",
          alignItems: "center",
          gap: 10,
          fontSize: 14.5,
          color: "#5C6B76",
          flexWrap: "wrap",
        }}
      >
        {items.map((item, i) => (
          <span
            key={item.label}
            style={{ display: "flex", alignItems: "center", gap: 10 }}
          >
            {i > 0 && <GhIcon html={GH_ICON_CHEVRON()} />}
            {item.href ? (
              <Link
                href={item.href}
                style={{ color: "#3E5C76", fontWeight: 600 }}
              >
                {item.label}
              </Link>
            ) : (
              <span style={{ color: "#14202B", fontWeight: 600 }}>
                {item.label}
              </span>
            )}
          </span>
        ))}
      </div>
    </nav>
  );
}

export function SiteFooter() {
  return (
    <footer style={{ background: "#0E1720", color: "#8FA0AD" }}>
      <div
        style={{
          maxWidth: 1240,
          margin: "0 auto",
          padding: "60px 28px 32px",
          display: "grid",
          gridTemplateColumns: "1.4fr 1fr 1fr 1fr",
          gap: 40,
        }}
        className="gh-footer-grid"
      >
        <div>
          <img
            src="/images/asset-0-a596b110.png"
            alt="Gearhaven Auto and Diesel"
            style={{ height: 90, width: "auto", marginBottom: 18 }}
          />
          <p
            className="gh-footer-desc"
            style={{
              fontSize: 14,
              lineHeight: 1.6,
              margin: "0 0 18px",
              maxWidth: 280,
            }}
          >
            Full-service auto &amp; diesel repair proudly serving Nixa and the
            Ozarks. Honest work, clear answers, treated like family.
          </p>
          <div
            className="gh-footer-social"
            style={{ display: "flex", alignItems: "center", gap: 10 }}
          >
            <span style={{ fontSize: 14, color: "#8FA0AD" }}>Follow Us On</span>
            <a
              href={SITE_FACEBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow Gearhaven on Facebook"
              className="gh-footer-social-link"
            >
              <GhIcon html={GH_ICON_FACEBOOK()} />
            </a>
          </div>
        </div>
        <div>
          <div
            style={{
              color: "#fff",
              fontWeight: 700,
              fontSize: 18,
              marginBottom: 16,
              fontFamily: "'Bricolage Grotesque', sans-serif",
            }}
          >
            Services
          </div>
          <div
            className="gh-footer-services"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 10,
              fontSize: 14.5,
            }}
          >
            <Link href="/auto-shop">Auto Repair &amp; Maintenance</Link>
            <Link href="/auto-shop">Diesel Repair</Link>
            <Link href="/tires">Tires &amp; Alignments</Link>
            <Link href="/fleet-vehicles">Fleet Services</Link>
            <Link href="/#inspection">Free Digital Inspection</Link>
          </div>
        </div>
        <div>
          <div
            style={{
              color: "#fff",
              fontWeight: 700,
              fontSize: 18,
              marginBottom: 16,
              fontFamily: "'Bricolage Grotesque', sans-serif",
            }}
          >
            Company
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 10,
              fontSize: 14.5,
            }}
          >
            <Link href="/about">About Us</Link>
            <Link href="/about#team">Our Team</Link>
            <Link href="/#reviews">Reviews</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/gallery">Gallery</Link>
            <Link href="/faqs">FAQs</Link>
            <Link href="/#contact">Contact Us</Link>
          </div>
        </div>
        <div>
          <div
            style={{
              color: "#fff",
              fontWeight: 700,
              fontSize: 18,
              marginBottom: 16,
              fontFamily: "'Bricolage Grotesque', sans-serif",
            }}
          >
            Get in touch
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 14,
              fontSize: 14.5,
            }}
          >
            <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
              <GhIcon html={GH_ICON_LOCATION()} />
              <span style={{ lineHeight: 1.5, color: "#8FA0AD" }}>
                {SITE_ADDRESS_LINE1}
                <br />
                {SITE_ADDRESS_LINE2}
              </span>
            </div>
            <a
              href="tel:4173194798"
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: 12,
                color: "#fff",
                fontWeight: 600,
                textDecoration: "none",
              }}
            >
              <GhIcon html={GH_ICON_PHONE()} />
              <span>417-319-4798</span>
            </a>
            <a
              href="mailto:collen@gearhaven.com"
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: 12,
                color: "#8FA0AD",
                textDecoration: "none",
              }}
            >
              <GhIcon html={GH_ICON_EMAIL()} />
              <span>collen@gearhaven.com</span>
            </a>
          </div>
        </div>
      </div>
      <div style={{ borderTop: "1px solid rgba(255,255,255,.08)" }}>
        <div
          className="gh-footer-bottom"
          style={{
            maxWidth: 1240,
            margin: "0 auto",
            padding: "20px 28px",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            gap: 10,
            fontSize: 13,
            color: "#5E6E7B",
            textAlign: "center",
          }}
        >
          <span
            dangerouslySetInnerHTML={{ __html: SITE_COPYRIGHT_HTML }}
            suppressHydrationWarning
          />
          <span aria-hidden="true" style={{ color: "#5E6E7B" }}>
            |
          </span>
          {FOOTER_LEGAL_LINKS.map((link, index) => (
            <span
              key={link.href}
              style={{ display: "flex", alignItems: "center", gap: 10 }}
            >
              {index > 0 && (
                <span aria-hidden="true" style={{ color: "#5E6E7B" }}>
                  |
                </span>
              )}
              <Link href={link.href} className="gh-footer-legal-link">
                {link.label}
              </Link>
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
}

export function BlogCta() {
  return (
    <section
      style={{
        background: "#2C4257",
        color: "#fff",
        position: "relative",
        overflow: "hidden",
        marginTop: 56,
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse at 80% 20%,rgba(62,92,118,.7),transparent 60%)",
        }}
      />
      <div
        data-reveal
        style={{
          position: "relative",
          maxWidth: 900,
          margin: "0 auto",
          padding: "88px 28px",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontFamily: "'Bricolage Grotesque', sans-serif",
            fontWeight: 700,
            fontSize: 44,
            lineHeight: 1.06,
            letterSpacing: -1.2,
            margin: "0 0 16px",
          }}
        >
          Have a question about your vehicle?
        </h2>
        <p
          style={{
            fontSize: 18,
            lineHeight: 1.6,
            color: "#C6D2DD",
            margin: "0 auto 32px",
            maxWidth: 560,
          }}
        >
          Bring it in for a free digital inspection. We&apos;ll explain what we
          find in plain language, no pressure, no surprises.
        </p>
        <div
          style={{
            display: "flex",
            gap: 14,
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <a
            href="tel:4173194798"
            className="gh-cta-phone gh-btn-solid"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 11,
              background: "rgb(61, 109, 146)",
              color: "#fff",
              fontWeight: 700,
              fontSize: 18,
              padding: "17px 30px",
              borderRadius: 10,
            }}
          >
            417-319-4798
          </a>
          <Link
            href="/#inspection"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 9,
              background: "rgba(255,255,255,.1)",
              border: "1.5px solid rgba(255,255,255,.35)",
              color: "#fff",
              fontWeight: 700,
              fontSize: 16.5,
              padding: "16px 28px",
              borderRadius: 10,
            }}
          >
            Free Digital Inspection
          </Link>
        </div>
      </div>
    </section>
  );
}

export function SiteChrome({ children }: SiteChromeProps) {
  return (
    <>
      {children}
      <SiteFooter />
    </>
  );
}
