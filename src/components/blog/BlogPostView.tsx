"use client";

import Link from "next/link";
import { useGhPageEffects } from "@/hooks/useGhPageEffects";
import type { BlogPost } from "@/data/blog-types";
import {
  BlogCta,
  SiteBreadcrumbs,
  SiteChrome,
} from "@/components/blog/SiteChrome";

export function BlogPostView({
  post,
  related,
}: {
  post: BlogPost;
  related: BlogPost[];
}) {
  const containerRef = useGhPageEffects();

  return (
    <div ref={containerRef} style={{ minHeight: "100vh", overflowX: "hidden" }}>
      <SiteChrome>
        <section
          id="top"
          style={{
            position: "relative",
            background: "#0E1720",
            overflow: "hidden",
          }}
        >
          <div
            id="gh-sentinel"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: 1,
              height: 70,
              pointerEvents: "none",
            }}
          />
          <div
            className="gh-hero-overlay"
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(180deg,rgba(14,23,32,.92) 0%,rgba(20,32,45,.98) 100%)",
            }}
          />
          <div
            className="gh-hero-inner"
            style={{
              position: "relative",
              maxWidth: 820,
              margin: "0 auto",
              padding: "200px 28px 72px",
              textAlign: "center",
            }}
          >
            <div
              data-reveal
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 9,
                background: "rgba(109,157,197,.18)",
                border: "1px solid rgba(109,157,197,.45)",
                color: "#ffffff",
                fontWeight: 600,
                fontSize: 13,
                letterSpacing: 0.5,
                textTransform: "uppercase",
                padding: "7px 14px",
                borderRadius: 100,
                marginBottom: 20,
              }}
            >
              {post.category}
            </div>
            <h1
              data-reveal
              style={{
                fontFamily: "'Bricolage Grotesque', sans-serif",
                fontWeight: 700,
                fontSize: 42,
                lineHeight: 1.08,
                letterSpacing: -1.2,
                color: "#fff",
                margin: 0,
              }}
            >
              {post.title}
            </h1>
          </div>
        </section>

        <SiteBreadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Blog", href: "/blog" },
            { label: post.title },
          ]}
        />

        <div
          data-reveal
          style={{
            maxWidth: 760,
            margin: "0 auto",
            padding: "0 28px",
          }}
        >
          <img
            src={post.image}
            alt=""
            style={{
              width: "100%",
              height: "auto",
              maxHeight: 420,
              objectFit: "cover",
              borderRadius: 16,
              display: "block",
              marginTop: 40,
              boxShadow: "0 24px 48px -24px rgba(20,32,45,.35)",
            }}
          />
        </div>

        <article
          className="gh-blog-article"
          style={{
            maxWidth: 760,
            margin: "0 auto",
            padding: "40px 28px 40px",
          }}
        >
          <div
            data-reveal
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>

        {related.length > 0 && (
          <section
            style={{
              maxWidth: 1240,
              margin: "0 auto",
              padding: "0 28px 72px",
            }}
          >
            <h2
              data-reveal
              style={{
                fontFamily: "'Bricolage Grotesque', sans-serif",
                fontWeight: 700,
                fontSize: 28,
                color: "#14202B",
                margin: "0 0 28px",
              }}
            >
              Related articles
            </h2>
            <div
              className="gh-blog-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: 22,
              }}
            >
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/blog/${r.slug}`}
                  data-reveal
                  className="gh-blog-card"
                  style={{
                    display: "block",
                    background: "#fff",
                    border: "1px solid #E7E3DB",
                    borderRadius: 16,
                    padding: "22px 24px",
                  }}
                >
                  <div
                    style={{
                      fontSize: 12,
                      fontWeight: 700,
                      color: "#6D9DC5",
                      textTransform: "uppercase",
                      marginBottom: 8,
                    }}
                  >
                    {r.category}
                  </div>
                  <div
                    style={{
                      fontFamily: "'Bricolage Grotesque', sans-serif",
                      fontWeight: 700,
                      fontSize: 18,
                      lineHeight: 1.25,
                      color: "#14202B",
                    }}
                  >
                    {r.title}
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        <BlogCta />
      </SiteChrome>
    </div>
  );
}
