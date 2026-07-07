"use client";

import Link from "next/link";
import { useGhPageEffects } from "@/hooks/useGhPageEffects";
import type { BlogPost } from "@/data/blog-types";
import {
  BlogCta,
  SiteBreadcrumbs,
  SiteChrome,
} from "@/components/blog/SiteChrome";

function formatCardDate(iso: string) {
  const d = new Date(iso);
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const dd = String(d.getDate()).padStart(2, "0");
  const yyyy = d.getFullYear();
  return `${mm}/${dd}/${yyyy}`;
}

function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article
      data-reveal
      className="gh-blog-card"
      style={{
        display: "flex",
        flexDirection: "column",
        background: "#fff",
        borderRadius: 16,
        overflow: "hidden",
        boxShadow: "0 4px 24px rgba(20,32,45,.08)",
        height: "100%",
      }}
    >
      <Link
        href={`/blog/${post.slug}`}
        style={{ display: "flex", flexDirection: "column", flex: 1, color: "inherit", textDecoration: "none" }}
      >
        <div style={{ position: "relative", height: 220, overflow: "hidden" }}>
          <img
            src={post.image}
            alt=""
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              transition: "transform .4s ease",
            }}
          />
          <span
            style={{
              position: "absolute",
              top: 16,
              left: 16,
              background: "linear-gradient(135deg,#3E5C76,#2C4257)",
              color: "#fff",
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: 0.6,
              textTransform: "uppercase",
              padding: "7px 12px",
              borderRadius: 6,
              boxShadow: "0 8px 16px -8px rgba(62,92,118,.6)",
            }}
          >
            Gear Haven Blog
          </span>
        </div>
        <div
          style={{
            padding: "28px 28px 24px",
            display: "flex",
            flexDirection: "column",
            flex: 1,
          }}
        >
          <h2
            style={{
              fontFamily: "'Bricolage Grotesque', sans-serif",
              fontWeight: 700,
              fontSize: 24,
              lineHeight: 1.25,
              color: "#14202B",
              margin: "0 0 14px",
            }}
          >
            {post.title}
          </h2>
          <p
            className="gh-card-desc"
            style={{
              fontSize: 16,
              lineHeight: 1.6,
              color: "#5C6B76",
              margin: "0 0 22px",
              flex: 1,
            }}
          >
            {post.excerpt}
          </p>
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              fontSize: 15,
              fontWeight: 700,
              color: "rgb(61, 109, 146)",
              marginBottom: 22,
            }}
          >
            Read The Blog Post
            <span aria-hidden="true">→</span>
          </span>
        </div>
      </Link>
      <div
        style={{
          padding: "0 28px 24px",
          fontSize: 14,
          color: "#8A96A1",
          fontWeight: 500,
        }}
      >
        By {post.author} / {formatCardDate(post.publishedAt)}
      </div>
    </article>
  );
}

export function BlogIndexPage({ posts }: { posts: BlogPost[] }) {
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
          <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
            <img
              src="/images/asset-2-d0ad8181.jpg"
              alt="Gear Haven service bay"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                animation: "gh-kenburns 22s ease-in-out infinite alternate",
              }}
            />
          </div>
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(90deg,rgba(14,23,32,.94) 0%,rgba(20,32,45,.85) 46%,rgba(20,32,45,.5) 100%)",
            }}
          />
          <div
            className="gh-hero-inner"
            style={{
              position: "relative",
              maxWidth: 1240,
              margin: "0 auto",
              padding: "230px 28px 110px",
            }}
          >
            <div style={{ maxWidth: 730 }}>
              <div
                data-reveal
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 9,
                  background: "rgba(109,157,197,.18)",
                  border: "1px solid rgba(109,157,197,.45)",
                  color: "#CFE0EE",
                  fontWeight: 600,
                  fontSize: 13.5,
                  letterSpacing: 0.4,
                  textTransform: "uppercase",
                  padding: "8px 15px",
                  borderRadius: 100,
                  marginBottom: 26,
                }}
              >
                <span
                  style={{
                    width: 7,
                    height: 7,
                    borderRadius: "50%",
                    background: "#6D9DC5",
                  }}
                />
                Tips &amp; Insights
              </div>
              <h1
                data-reveal
                style={{
                  fontFamily: "'Bricolage Grotesque', sans-serif",
                  fontWeight: 700,
                  fontSize: 58,
                  lineHeight: 1.04,
                  letterSpacing: -1.6,
                  color: "#fff",
                  margin: "0 0 22px",
                }}
              >
                Auto &amp; diesel repair advice for Missouri drivers
              </h1>
              <p
                data-reveal
                style={{
                  fontSize: 19.5,
                  lineHeight: 1.55,
                  color: "#CBD6E0",
                  fontWeight: 500,
                  margin: 0,
                  maxWidth: 620,
                }}
              >
                Practical guides on maintenance, diagnostics, and getting the most
                from your visit, written to help you make confident decisions
                about your vehicle.
              </p>
            </div>
          </div>
        </section>

        <SiteBreadcrumbs
          items={[{ label: "Home", href: "/" }, { label: "Blog" }]}
        />

        <section
          style={{
            maxWidth: 1240,
            margin: "0 auto",
            padding: "64px 28px 80px",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 28,
            }}
            className="gh-blog-grid"
          >
            {posts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </section>

        <BlogCta />
      </SiteChrome>
    </div>
  );
}
