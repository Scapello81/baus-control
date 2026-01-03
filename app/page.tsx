"use client";

import { useState } from "react";

export default function Home() {
  const [status, setStatus] = useState<string>("");

  async function press() {
    setStatus("sending...");
    const r = await fetch("/api/button", { method: "POST" });
    setStatus(r.ok ? "ok" : `error ${r.status}`);
  }

  return (
    <main style={{ fontFamily: "system-ui", padding: 40 }}>
      <h1>Home Control</h1>

      <button
        onClick={press}
        style={{ padding: "14px 22px", fontSize: 18, cursor: "pointer" }}
      >
        Steckdose EIN
      </button>

      <div style={{ marginTop: 16 }}>{status}</div>
    </main>
  );
}
