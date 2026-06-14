import { useState, useEffect } from "react";

const css = `
  @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700;800&display=swap');
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { background: #060f07; }
  @keyframes spin { to { transform: rotate(360deg); } }
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
  @keyframes ring1 {
    0% { transform: scale(1); opacity: 0.7; }
    100% { transform: scale(1.65); opacity: 0; }
  }
  @keyframes ring2 {
    0% { transform: scale(1); opacity: 0.4; }
    100% { transform: scale(2.0); opacity: 0; }
  }
  @keyframes leafFloat {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-8px) rotate(5deg); }
  }
  @keyframes shimmer {
    0% { background-position: -200% center; }
    100% { background-position: 200% center; }
  }
  .dl-btn { transition: all 0.2s ease; cursor: pointer; outline: none; }
  .dl-btn:hover:not(:disabled) { filter: brightness(1.12); transform: translateY(-1px); box-shadow: 0 8px 32px rgba(168,255,62,0.25) !important; }
  .dl-btn:active:not(:disabled) { transform: scale(0.97) translateY(0) !important; }
  .dl-btn:disabled { cursor: wait; opacity: 0.85; }
  .retry-btn { transition: all 0.18s; cursor: pointer; outline: none; }
  .retry-btn:hover { background: rgba(168,255,62,0.12) !important; }
  .feature-card { transition: all 0.2s; }
  .feature-card:hover { border-color: #3a6a3c !important; transform: translateY(-2px); }
  .nav-link:hover { color: #A8FF3E !important; }
  .check-row { cursor: pointer; transition: background 0.15s; border-radius: 10px; }
  .check-row:hover { background: rgba(168,255,62,0.04); }
  .policy-link { color: #A8FF3E; text-decoration: none; border-bottom: 1px solid rgba(168,255,62,0.3); transition: border-color 0.15s; }
  .policy-link:hover { border-color: #A8FF3E; }
  .page-wrap { animation: fadeUp 0.55s ease both; }
  .section-wrap { animation: fadeUp 0.55s 0.1s ease both; }
`;

const APK_URL = "https://veag.tech/downloads/veag.apk";

function LeafSVG({ style }) {
  return (
    <svg viewBox="0 0 40 48" fill="none" xmlns="http://www.w3.org/2000/svg" style={style}>
      <path d="M20 2C20 2 4 10 4 26C4 36.5 11.2 44 20 46C28.8 44 36 36.5 36 26C36 10 20 2 20 2Z" fill="#1a3d1c"/>
      <path d="M20 46V18" stroke="#0f2a10" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M20 28C20 28 12 22 10 16" stroke="#0f2a10" strokeWidth="1" strokeLinecap="round"/>
      <path d="M20 22C20 22 28 16 30 10" stroke="#0f2a10" strokeWidth="1" strokeLinecap="round"/>
    </svg>
  );
}

function VeAgLogo({ size = 36 }) {
  return (
    <div style={{
      width: size, height: size, borderRadius: size * 0.28,
      background: "#060f07", border: "2px solid #1e3a20",
      display: "flex", alignItems: "center", justifyContent: "center",
      position: "relative", overflow: "hidden", flexShrink: 0,
    }}>
      <LeafSVG style={{ position: "absolute", width: 14, height: 16, top: 2, right: 2, opacity: 0.7 }} />
      <LeafSVG style={{ position: "absolute", width: 10, height: 12, bottom: 4, left: 3, opacity: 0.5, transform: "rotate(-30deg)" }} />
      <span style={{
        fontFamily: "'Space Grotesk', sans-serif", fontWeight: 800,
        fontSize: size * 0.38, color: "#f0f4ec", letterSpacing: "-0.5px", zIndex: 1,
      }}>VeAg</span>
    </div>
  );
}

function PhoneMockup() {
  return (
    <div style={{
      width: 200, height: 400, borderRadius: 36,
      border: "2.5px solid #2a3d2b",
      background: "linear-gradient(170deg, #0f1f10 0%, #060f07 100%)",
      position: "relative", display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "flex-start", flexShrink: 0,
      overflow: "hidden",
      boxShadow: "0 20px 60px rgba(0,0,0,0.6), 0 0 0 1px rgba(168,255,62,0.05)",
    }}>
      <div style={{
        width: 60, height: 6, borderRadius: 3,
        background: "#1e3220", position: "absolute", top: 12, zIndex: 10,
      }} />

      {/* Status bar */}
      <div style={{
        width: "100%", padding: "22px 14px 8px",
        display: "flex", justifyContent: "space-between", alignItems: "center",
        background: "rgba(168,120,60,0.85)",
      }}>
        <div style={{
          width: 32, height: 32, borderRadius: "50%",
          background: "#060f07", border: "1.5px solid #2a3d2b",
          display: "flex", alignItems: "center", justifyContent: "center",
        }}>
          <span style={{ color: "#f0f4ec", fontSize: 8, fontWeight: 800, fontFamily: "'Space Grotesk', sans-serif" }}>VeAg</span>
        </div>
        <span style={{ color: "#f0f4ec", fontWeight: 700, fontSize: 11, fontFamily: "'Space Grotesk', sans-serif" }}>VeAg</span>
        <div style={{ display: "flex", gap: 4 }}>
          <div style={{ width: 18, height: 18, borderRadius: "50%", background: "rgba(0,0,0,0.25)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#f0f4ec" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/></svg>
          </div>
        </div>
      </div>

      {/* App content area */}
      <div style={{
        width: "100%", flex: 1,
        background: "linear-gradient(180deg, rgba(168,120,60,0.7) 0%, rgba(220,180,100,0.5) 30%, rgba(168,200,120,0.3) 100%)",
        display: "flex", flexDirection: "column", alignItems: "center", padding: "12px 10px 8px",
        gap: 7,
      }}>
        <div style={{ textAlign: "center", marginBottom: 6 }}>
          <div style={{ color: "#fff", fontWeight: 800, fontSize: 14, fontFamily: "'Space Grotesk', sans-serif" }}>Welcome, Rohan!</div>
          <div style={{ color: "rgba(255,255,255,0.75)", fontSize: 9, marginTop: 1 }}>Your gateway to smart agriculture.</div>
        </div>

        {[
          { label: "Register New Case", color: "rgba(130,175,100,0.75)" },
          { label: "Manage Cases", color: "rgba(160,170,160,0.6)" },
          { label: "Edit Profile", color: "rgba(200,130,130,0.55)" },
        ].map(function(card) {
          return (
            <div key={card.label} style={{
              width: "100%", borderRadius: 12, padding: "10px 10px 8px",
              background: card.color, backdropFilter: "blur(4px)",
              display: "flex", flexDirection: "column", gap: 6,
            }}>
              <div style={{
                width: 24, height: 24, borderRadius: 6,
                background: "rgba(255,255,255,0.2)",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="9" y1="9" x2="15" y2="9"/><line x1="9" y1="13" x2="15" y2="13"/></svg>
              </div>
              <div style={{ color: "#fff", fontWeight: 700, fontSize: 9, fontFamily: "'Space Grotesk', sans-serif" }}>{card.label}</div>
            </div>
          );
        })}
      </div>

      {/* Bottom nav */}
      <div style={{
        width: "100%", background: "rgba(130,180,100,0.85)",
        padding: "6px 4px 8px",
        display: "flex", justifyContent: "space-around", alignItems: "center",
        position: "relative",
      }}>
        <div style={{ position: "absolute", top: -14, left: "50%", transform: "translateX(-50%)" }}>
          <div style={{
            width: 28, height: 28, borderRadius: "50%",
            background: "#2d6e3a", border: "2px solid rgba(255,255,255,0.3)",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
          </div>
        </div>
        {["Home", "Cases", "", "Shop", "Profile"].map(function(label, i) {
          if (i === 2) return <div key="spacer" style={{ width: 28 }} />;
          return (
            <div key={label} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2 }}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={i === 0 ? "#fff" : "rgba(255,255,255,0.6)"} strokeWidth="2">
                {i === 0 && <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>}
                {i === 1 && <><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></>}
                {i === 3 && <><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></>}
                {i === 4 && <><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></>}
              </svg>
              <span style={{ fontSize: 7, color: i === 0 ? "#fff" : "rgba(255,255,255,0.6)", fontFamily: "'Space Grotesk', sans-serif" }}>{label}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

const policies = [
  { label: "Terms & Conditions", url: "https://veag.tech/terms-and-conditions" },
  { label: "Privacy Policy", url: "https://veag.tech/privacy-policy" },
  { label: "Return, Refund & Cancellation", url: "https://veag.tech/return-refund-cancellation" },
  { label: "Shipping & Delivery", url: "https://veag.tech/shipping-and-delivery" },
];

export default function VeAgDownload() {
  const [checks, setChecks] = useState([false, false, false, false]);
  const [dlState, setDlState] = useState("idle"); // idle | downloading | success | failed
  const allChecked = checks.every(Boolean);

  useEffect(function() {
    var el = document.createElement("style");
    el.textContent = css;
    document.head.appendChild(el);
    return function() { document.head.removeChild(el); };
  }, []);

  function toggleCheck(i) {
    setChecks(function(prev) {
      var next = prev.slice();
      next[i] = !next[i];
      return next;
    });
  }

  function handleDownload() {
    if (!allChecked || dlState === "downloading") return;
    setDlState("downloading");
    try {
      var a = document.createElement("a");
      a.href = APK_URL;
      a.download = "VeAg.apk";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      setTimeout(function() { setDlState("success"); }, 1800);
    } catch (e) {
      setTimeout(function() { setDlState("failed"); }, 1800);
    }
  }

  function handleRetry() {
    setDlState("idle");
  }

  var features = [
    {
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#A8FF3E" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
        </svg>
      ),
      title: "Lightning Fast",
      desc: "Optimized for speed across all Android 10+ devices with minimal battery impact.",
    },
    {
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#A8FF3E" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        </svg>
      ),
      title: "Strong Security",
      desc: "Bank-grade encryption protects your farm data, cases, and personal information end-to-end.",
    },
    {
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#A8FF3E" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3"/>
          <path d="M12 2a10 10 0 0 1 10 10"/>
          <path d="M12 2a10 10 0 0 0-10 10"/>
          <path d="M2 12a10 10 0 0 0 10 10"/>
          <path d="M22 12a10 10 0 0 1-10 10"/>
          <line x1="2" y1="12" x2="22" y2="12"/>
          <path d="M12 2c2.5 3 4 6.5 4 10s-1.5 7-4 10"/>
          <path d="M12 2c-2.5 3-4 6.5-4 10s1.5 7 4 10"/>
        </svg>
      ),
      title: "AI Integrated Platform",
      desc: "Powered by artificial intelligence — smart case analysis, crop recommendations, and predictive insights built-in.",
    },
  ];

  var steps = [
    ["Download", "Tap the Download APK button below and save the file to your device."],
    ["Allow installs", "Go to Settings then Security and enable Install unknown apps for your browser."],
    ["Open the APK", "Find the downloaded VeAg.apk in your notifications or Downloads folder and tap it."],
    ["Launch VeAg", "Open the app, sign in or create your account, and start managing your farm smarter."],
  ];

  return (
    <div style={{
      minHeight: "100vh", background: "#060f07", color: "#F0F4EC",
      fontFamily: "'Space Grotesk', sans-serif", position: "relative",
    }}>
      {/* Ambient bg */}
      <div style={{
        position: "fixed", inset: 0, pointerEvents: "none", zIndex: 0,
        background: "radial-gradient(ellipse 60% 40% at 10% 15%, rgba(168,255,62,0.05) 0%, transparent 70%), radial-gradient(ellipse 50% 50% at 90% 80%, rgba(168,255,62,0.04) 0%, transparent 70%)",
      }} />

      {/* Floating leaf accents */}
      <div style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 0, overflow: "hidden" }}>
        {[
          { top: "8%", left: "4%", size: 32, delay: "0s", dur: "5s", op: 0.12 },
          { top: "18%", right: "6%", size: 22, delay: "1s", dur: "6s", op: 0.09 },
          { top: "60%", left: "2%", size: 28, delay: "2s", dur: "4.5s", op: 0.1 },
          { top: "75%", right: "3%", size: 20, delay: "0.5s", dur: "7s", op: 0.08 },
          { top: "40%", right: "8%", size: 18, delay: "3s", dur: "5.5s", op: 0.07 },
        ].map(function(l, i) {
          return (
            <LeafSVG key={i} style={{
              position: "absolute", width: l.size, height: l.size,
              top: l.top, left: l.left, right: l.right,
              opacity: l.op, animation: "leafFloat " + l.dur + " " + l.delay + " ease-in-out infinite",
            }} />
          );
        })}
      </div>

      {/* NAV */}
      <nav style={{
        position: "relative", zIndex: 10,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "18px 40px", borderBottom: "1px solid rgba(255,255,255,0.06)",
        background: "rgba(6,15,7,0.85)", backdropFilter: "blur(12px)",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <VeAgLogo size={36} />
          <span style={{ fontWeight: 800, fontSize: 19, letterSpacing: "-0.5px", color: "#f0f4ec" }}>VeAg</span>
        </div>
        <a href="https://veag.tech" target="_blank" rel="noreferrer"
          className="nav-link"
          style={{ color: "#3D5C3E", fontSize: 13, textDecoration: "none", transition: "color 0.15s", display: "flex", alignItems: "center", gap: 4 }}>
          veag.tech
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
        </a>
      </nav>

      {/* HERO */}
      <main className="page-wrap" style={{
        position: "relative", zIndex: 1,
        maxWidth: 940, margin: "0 auto",
        padding: "72px 36px 56px",
        display: "flex", alignItems: "center", gap: 64, flexWrap: "wrap",
      }}>
        {/* Left: copy */}
        <div style={{ flex: "1 1 300px", minWidth: 260 }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 7,
            background: "rgba(168,255,62,0.07)", border: "1px solid rgba(168,255,62,0.18)",
            borderRadius: 24, padding: "5px 14px", marginBottom: 26,
          }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#A8FF3E", display: "inline-block" }} />
            <span style={{ color: "#A8FF3E", fontSize: 11, fontWeight: 700, letterSpacing: "0.3px" }}>Android APK — v1.0.0 · Free</span>
          </div>

          <h1 style={{
            fontSize: "clamp(34px, 5.5vw, 56px)", fontWeight: 800,
            lineHeight: 1.08, letterSpacing: "-2px", marginBottom: 18, color: "#f0f4ec",
          }}>
            Smart farming<br />
            <span style={{ color: "#A8FF3E" }}>starts here.</span>
          </h1>

          <p style={{
            color: "#4a7a4c", fontSize: 15.5, lineHeight: 1.7,
            marginBottom: 10, maxWidth: 380,
          }}>
            Download the VeAg app — your AI-powered gateway to smarter agriculture. Manage cases, get crop insights, and more.
          </p>

          <div style={{ display: "flex", gap: 18, marginBottom: 38, flexWrap: "wrap" }}>
            {["~18 MB", "Android 10+", "AI Powered"].map(function(tag) {
              return (
                <span key={tag} style={{ color: "#2e5230", fontSize: 12.5, display: "flex", alignItems: "center", gap: 5 }}>
                  <span style={{ color: "rgba(168,255,62,0.4)" }}>&#x2022;</span> {tag}
                </span>
              );
            })}
          </div>

          {/* Policy checkboxes */}
          <div style={{
            background: "rgba(22,38,24,0.7)", border: "1px solid rgba(255,255,255,0.07)",
            borderRadius: 16, padding: "18px 16px", marginBottom: 24,
          }}>
            <div style={{ color: "#5a8a5c", fontSize: 11.5, fontWeight: 600, letterSpacing: "1px", textTransform: "uppercase", marginBottom: 12 }}>
              Agree to continue
            </div>
            {policies.map(function(p, i) {
              return (
                <div key={i} className="check-row"
                  onClick={function() { toggleCheck(i); }}
                  style={{
                    display: "flex", alignItems: "center", gap: 10,
                    padding: "8px 8px", marginBottom: i < policies.length - 1 ? 2 : 0,
                  }}>
                  <div style={{
                    width: 18, height: 18, borderRadius: 5, flexShrink: 0,
                    border: checks[i] ? "none" : "1.5px solid #2a4a2c",
                    background: checks[i] ? "#A8FF3E" : "rgba(168,255,62,0.04)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    transition: "all 0.15s",
                  }}>
                    {checks[i] && (
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#0D1F0F" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                    )}
                  </div>
                  <span style={{ fontSize: 12.5, color: "#4a7a4c", lineHeight: 1.4 }}>
                    I agree to the{" "}
                    <a href={p.url} target="_blank" rel="noreferrer"
                      className="policy-link"
                      onClick={function(e) { e.stopPropagation(); }}>
                      {p.label}
                    </a>
                  </span>
                </div>
              );
            })}
          </div>

          {/* Download Button */}
          <div style={{ position: "relative", display: "inline-flex", flexDirection: "column", gap: 12, alignItems: "flex-start" }}>
            {allChecked && dlState === "idle" && (
              <>
                <span style={{
                  position: "absolute", inset: "-12px",
                  borderRadius: 20, border: "2px solid rgba(168,255,62,0.35)",
                  animation: "ring1 2s ease-out infinite", pointerEvents: "none",
                }} />
                <span style={{
                  position: "absolute", inset: "-12px",
                  borderRadius: 20, border: "2px solid rgba(168,255,62,0.18)",
                  animation: "ring2 2s ease-out 0.6s infinite", pointerEvents: "none",
                }} />
              </>
            )}

            <button
              className="dl-btn"
              onClick={handleDownload}
              disabled={!allChecked || dlState === "downloading"}
              style={{
                background: !allChecked ? "rgba(168,255,62,0.12)" : dlState === "success" ? "rgba(168,255,62,0.15)" : "#A8FF3E",
                color: !allChecked ? "#2e5230" : dlState === "success" ? "#A8FF3E" : "#060f07",
                border: !allChecked || dlState === "success" ? "1.5px solid rgba(168,255,62,0.25)" : "none",
                borderRadius: 14, padding: "16px 32px",
                fontSize: 15.5, fontWeight: 700,
                fontFamily: "'Space Grotesk', sans-serif",
                display: "flex", alignItems: "center", gap: 10,
                letterSpacing: "-0.2px", position: "relative",
                boxShadow: allChecked && dlState === "idle" ? "0 4px 24px rgba(168,255,62,0.15)" : "none",
              }}
            >
              {dlState === "downloading" ? (
                <>
                  <span style={{
                    width: 17, height: 17, borderRadius: "50%", flexShrink: 0,
                    border: "2.5px solid rgba(6,15,7,0.25)", borderTop: "2.5px solid #060f07",
                    display: "inline-block", animation: "spin 0.75s linear infinite",
                  }} />
                  Starting download...
                </>
              ) : dlState === "success" ? (
                <>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  Download started
                </>
              ) : dlState === "failed" ? (
                <>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                  Download failed
                </>
              ) : (
                <>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                    <polyline points="7 10 12 15 17 10"/>
                    <line x1="12" y1="15" x2="12" y2="3"/>
                  </svg>
                  {allChecked ? "Download APK" : "Accept all policies to download"}
                </>
              )}
            </button>

            {dlState === "failed" && (
              <button className="retry-btn" onClick={handleRetry} style={{
                background: "rgba(168,255,62,0.06)", border: "1px solid rgba(168,255,62,0.2)",
                borderRadius: 10, padding: "9px 20px",
                color: "#A8FF3E", fontSize: 13, fontWeight: 600,
                fontFamily: "'Space Grotesk', sans-serif",
                display: "flex", alignItems: "center", gap: 7,
              }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 .49-5"/>
                </svg>
                Retry download
              </button>
            )}

            {!allChecked && (
              <div style={{ color: "#2e5230", fontSize: 11.5, paddingLeft: 2 }}>
                Please accept all policies above to enable download.
              </div>
            )}
          </div>
        </div>

        {/* Right: phone mockup */}
        <div style={{ flex: "0 0 auto", display: "flex", justifyContent: "center", paddingTop: 10 }}>
          <div style={{ position: "relative" }}>
            <div style={{
              position: "absolute", inset: -20,
              background: "radial-gradient(circle, rgba(168,255,62,0.06) 0%, transparent 70%)",
              borderRadius: "50%", pointerEvents: "none",
            }} />
            <PhoneMockup />
          </div>
        </div>
      </main>

      {/* Divider */}
      <div style={{ maxWidth: 940, margin: "0 auto 52px", padding: "0 36px" }}>
        <div style={{ height: 1, background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.06) 40%, rgba(255,255,255,0.06) 60%, transparent)" }} />
      </div>

      {/* FEATURES */}
      <section className="section-wrap" style={{
        maxWidth: 940, margin: "0 auto", padding: "0 36px 60px",
        display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 14,
      }}>
        {features.map(function(f) {
          return (
            <div key={f.title} className="feature-card" style={{
              background: "rgba(22,38,24,0.6)", border: "1px solid rgba(255,255,255,0.06)",
              borderRadius: 16, padding: "24px 20px",
            }}>
              <div style={{ marginBottom: 14 }}>{f.icon}</div>
              <div style={{ fontWeight: 700, fontSize: 15, color: "#f0f4ec", marginBottom: 6 }}>{f.title}</div>
              <div style={{ color: "#3D5C3E", fontSize: 13, lineHeight: 1.6 }}>{f.desc}</div>
            </div>
          );
        })}
      </section>

      {/* HOW TO INSTALL */}
      <section style={{ maxWidth: 940, margin: "0 auto", padding: "0 36px 80px" }}>
        <div style={{
          color: "#A8FF3E", fontSize: 10.5, fontWeight: 700,
          letterSpacing: "2.5px", textTransform: "uppercase", marginBottom: 28,
        }}>How to install</div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          {steps.map(function(step, i) {
            return (
              <div key={step[0]} style={{ display: "flex", gap: 18, paddingBottom: i < steps.length - 1 ? 26 : 0 }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0 }}>
                  <div style={{
                    width: 30, height: 30, borderRadius: "50%",
                    background: "rgba(168,255,62,0.07)", border: "1.5px solid rgba(168,255,62,0.3)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: "#A8FF3E", fontWeight: 700, fontSize: 12,
                  }}>{i + 1}</div>
                  {i < steps.length - 1 && (
                    <div style={{ width: 1, flex: 1, background: "rgba(255,255,255,0.05)", marginTop: 6 }} />
                  )}
                </div>
                <div style={{ paddingTop: 4 }}>
                  <div style={{ fontWeight: 700, fontSize: 14.5, color: "#f0f4ec", marginBottom: 4 }}>{step[0]}</div>
                  <div style={{ color: "#3D5C3E", fontSize: 13, lineHeight: 1.65 }}>{step[1]}</div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{
        borderTop: "1px solid rgba(255,255,255,0.05)",
        padding: "28px 36px 24px",
        background: "rgba(6,15,7,0.9)",
      }}>
        <div style={{ maxWidth: 940, margin: "0 auto" }}>
          {/* Policy links row */}
          <div style={{ display: "flex", gap: 20, flexWrap: "wrap", marginBottom: 16 }}>
            {policies.map(function(p) {
              return (
                <a key={p.url} href={p.url} target="_blank" rel="noreferrer" className="policy-link" style={{ fontSize: 12 }}>
                  {p.label}
                </a>
              );
            })}
          </div>
          {/* Download notice */}
          <div style={{
            background: "rgba(168,255,62,0.04)", border: "1px solid rgba(168,255,62,0.1)",
            borderRadius: 10, padding: "10px 14px", marginBottom: 18,
          }}>
            <span style={{ color: "#2e5230", fontSize: 12, lineHeight: 1.6 }}>
              By downloading the VeAg app you agree to our{" "}
              <a href="https://veag.tech/terms-and-conditions" target="_blank" rel="noreferrer" className="policy-link" style={{ fontSize: 12 }}>Terms &amp; Conditions</a>,{" "}
              <a href="https://veag.tech/privacy-policy" target="_blank" rel="noreferrer" className="policy-link" style={{ fontSize: 12 }}>Privacy Policy</a>,{" "}
              <a href="https://veag.tech/return-refund-cancellation" target="_blank" rel="noreferrer" className="policy-link" style={{ fontSize: 12 }}>Return &amp; Refund Policy</a>, and{" "}
              <a href="https://veag.tech/shipping-and-delivery" target="_blank" rel="noreferrer" className="policy-link" style={{ fontSize: 12 }}>Shipping &amp; Delivery Policy</a>.
            </span>
          </div>
          {/* Bottom bar */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 8 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <VeAgLogo size={22} />
              <span style={{ color: "#1e3a20", fontSize: 12, fontWeight: 600 }}>VeAg</span>
            </div>
            <span style={{ color: "#1a3020", fontSize: 12 }}>
              &copy; 2026 VeAg · veag.tech · All rights reserved.
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
