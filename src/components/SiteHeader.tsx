"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { isNavActive, MAIN_NAV } from "@/data/site-nav";

export function SiteHeader() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const linkStyle = (active: boolean) => ({
    padding: "6px 0",
    borderBottom: `2px solid ${active ? "#6D9DC5" : "transparent"}`,
    color: active ? "#6D9DC5" : "#fff",
  });

  return (
    <header
      id="gh-header"
      className="gh-site-header"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 60,
        background: "rgba(14, 23, 32, 0.88)",
        boxShadow: "0 8px 24px -16px rgba(0,0,0,.45)",
        transition:
          "background .35s ease, box-shadow .35s ease, padding .3s ease",
      }}
    >
      <div
        id="gh-header-inner"
        className="gh-site-header-inner"
        style={{
          maxWidth: 1320,
          margin: "0 auto",
          padding: "14px 32px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 20,
        }}
      >
        <Link href="/" style={{ display: "flex", alignItems: "center", flexShrink: 0 }}>
          <img
            id="gh-logo"
            src="/images/asset-0-a596b110.png"
            alt="Gearhaven Auto and Diesel"
            style={{
              width: 190,
              maxWidth: "46vw",
              height: "auto",
              display: "block",
              transition: "width .3s ease",
            }}
          />
        </Link>

        <nav
          className={`gh-site-nav ${mobileOpen ? "gh-site-nav-open" : ""}`}
          aria-label="Main navigation"
        >
          <ul className="gh-site-nav-list">
            {MAIN_NAV.map((item) => {
              const active = isNavActive(pathname, item);

              if (item.children) {
                return (
                  <li
                    key={item.label}
                    className={`gh-nav-dropdown ${servicesOpen ? "gh-nav-dropdown-open" : ""}`}
                    onMouseEnter={() => {
                      if (
                        typeof window !== "undefined" &&
                        !window.matchMedia("(max-width: 1024px)").matches
                      ) {
                        setServicesOpen(true);
                      }
                    }}
                    onMouseLeave={() => {
                      if (
                        typeof window !== "undefined" &&
                        !window.matchMedia("(max-width: 1024px)").matches
                      ) {
                        setServicesOpen(false);
                      }
                    }}
                  >
                    <div className="gh-nav-dropdown-trigger">
                      <Link
                        href={item.href}
                        style={linkStyle(active)}
                        className="gh-nav-link"
                        aria-expanded={servicesOpen}
                        aria-haspopup="true"
                        onClick={(e) => {
                          if (window.matchMedia("(max-width: 1024px)").matches) {
                            e.preventDefault();
                            setServicesOpen((o) => !o);
                          } else {
                            setServicesOpen(false);
                          }
                        }}
                      >
                        {item.label}
                      </Link>
                      <button
                        type="button"
                        className="gh-nav-chevron-btn"
                        aria-label={
                          servicesOpen
                            ? "Close services menu"
                            : "Open services menu"
                        }
                        aria-expanded={servicesOpen}
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          setServicesOpen((o) => !o);
                        }}
                      >
                        <svg
                          className="gh-nav-chevron"
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <path d="m6 9 6 6 6-6" />
                        </svg>
                      </button>
                    </div>
                    <div className="gh-nav-dropdown-panel">
                      <ul className="gh-nav-dropdown-grid">
                        {item.children.map((child) => (
                          <li key={child.href + child.label}>
                            <Link href={child.href} className="gh-nav-dropdown-link">
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li>
                );
              }

              return (
                <li key={item.label}>
                  <Link href={item.href} style={linkStyle(active)} className="gh-nav-link">
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="gh-nav-mobile-cta">
            <a href="tel:4173194798">Call the Shop · 417-319-4798</a>
          </div>
        </nav>

        <a
          href="tel:4173194798"
          className="gh-btn-solid gh-header-cta"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            background: "rgb(61, 109, 146)",
            color: "#fff",
            fontWeight: 700,
            fontSize: 15,
            padding: "12px 22px",
            borderRadius: 8,
            whiteSpace: "nowrap",
            boxShadow: "0 8px 20px -8px rgba(61,109,146,.45)",
            flexShrink: 0,
          }}
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ flexShrink: 0 }}
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
          <span className="gh-header-cta-text">Call the Shop 417-319-4798</span>
        </a>

        <button
          type="button"
          className="gh-nav-toggle"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((o) => !o)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
