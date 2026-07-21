"use client";

import { useState } from "react";

const PRODUCT_OPTIONS = [
  "ACC Cement — Concrete Plus",
  "ACC Cement — Suraksha Power",
  "Waterproofing (Dr. Fixit)",
  "TMT Bars",
  "MS Channels (Structural Steel)",
  "H-Beams (Structural Steel)",
  "MS Angles (Structural Steel)",
  "MS Square / Round Pipes",
  "MS Flat Bars",
  "Roofing Sheets — GI Plain (JSW)",
  "Roofing Sheets — Colour Coated (JSW)",
  "CERA Sanitaryware",
  "CERA Faucets",
  "Samruddhi Water Tanks — Vertical",
  "Samruddhi Water Tanks — Loft",
  "MS Grills & Manhole Covers",
  "AAC Blocks — 4 Inch",
  "AAC Blocks — 6 Inch",
  "Kitchen Tiles",
  "Bathroom Tiles",
  "Hall / Living Area Tiles",
  "Rough / Outdoor Tiles",
  "Other / Not Listed",
];

interface QuoteModalProps {
  onClose: () => void;
  preselectedProduct?: string;
}

export default function QuoteModal({ onClose, preselectedProduct }: QuoteModalProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [product, setProduct] = useState(preselectedProduct ?? "");
  const [quantity, setQuantity] = useState("");
  const [details, setDetails] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) { setError("Please enter your name."); return; }
    if (!phone.trim() || phone.replace(/\D/g, "").length < 10) {
      setError("Please enter a valid 10-digit mobile number."); return;
    }
    if (!product) { setError("Please select a product or service."); return; }
    setError("");

    const lines = [
      `🏗️ *Quote Request — CD Enterprises*`,
      ``,
      `*Name:* ${name.trim()}`,
      `*Mobile:* ${phone.trim()}`,
      `*Product / Service:* ${product}`,
      quantity.trim() ? `*Quantity:* ${quantity.trim()}` : null,
      details.trim() ? `*Additional Details:* ${details.trim()}` : null,
      ``,
      `_Please provide availability and pricing._`,
    ];

    const message = lines.filter((l) => l !== null).join("\n");
    window.open(
      `https://wa.me/918484077773?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
    onClose();
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "10px 12px",
    border: "1px solid var(--cd-line)",
    fontSize: "14px",
    color: "var(--cd-black)",
    backgroundColor: "var(--cd-white)",
    borderRadius: "2px",
    outline: "none",
    boxSizing: "border-box",
    fontFamily: "inherit",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontSize: "12px",
    fontWeight: 600,
    color: "var(--cd-black)",
    marginBottom: "6px",
  };

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        backgroundColor: "rgba(0,0,0,0.55)",
        zIndex: 200,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "16px",
      }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div
        style={{
          backgroundColor: "var(--cd-white)",
          width: "100%",
          maxWidth: "480px",
          border: "1px solid var(--cd-line)",
          maxHeight: "90vh",
          overflowY: "auto",
        }}
        role="dialog"
        aria-modal="true"
        aria-label="Get a Quote"
      >
        {/* Header */}
        <div
          style={{
            padding: "20px 24px",
            borderBottom: "1px solid var(--cd-line)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            position: "sticky",
            top: 0,
            backgroundColor: "var(--cd-white)",
            zIndex: 1,
          }}
        >
          <div>
            <p
              style={{
                fontSize: "11px",
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--cd-orange)",
                marginBottom: "4px",
              }}
            >
              CD Enterprises
            </p>
            <p style={{ fontWeight: 800, fontSize: "16px", color: "var(--cd-black)" }}>
              Get a Quote
            </p>
          </div>
          <button
            onClick={onClose}
            aria-label="Close"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              fontSize: "22px",
              color: "var(--cd-gray-text)",
              lineHeight: 1,
              padding: "2px 4px",
              marginTop: "-2px",
            }}
          >
            ×
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} style={{ padding: "24px" }}>
          <p style={{ fontSize: "13px", color: "var(--cd-gray-text)", lineHeight: 1.5, marginBottom: "20px" }}>
            Fill in your details. We&apos;ll open WhatsApp with your quote request pre-filled and ready to send to us.
          </p>

          {/* Name */}
          <div style={{ marginBottom: "16px" }}>
            <label htmlFor="qm-name" style={labelStyle}>Your Name *</label>
            <input
              id="qm-name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Ramesh Patil"
              autoComplete="name"
              style={inputStyle}
            />
          </div>

          {/* Phone */}
          <div style={{ marginBottom: "16px" }}>
            <label htmlFor="qm-phone" style={labelStyle}>Mobile Number *</label>
            <input
              id="qm-phone"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="e.g. 98765 43210"
              autoComplete="tel"
              style={inputStyle}
            />
          </div>

          {/* Product */}
          <div style={{ marginBottom: "16px" }}>
            <label htmlFor="qm-product" style={labelStyle}>What do you need? *</label>
            <select
              id="qm-product"
              value={product}
              onChange={(e) => setProduct(e.target.value)}
              style={{ ...inputStyle, cursor: "pointer" }}
            >
              <option value="">— Select a product or service —</option>
              {PRODUCT_OPTIONS.map((opt) => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
          </div>

          {/* Quantity */}
          <div style={{ marginBottom: "16px" }}>
            <label htmlFor="qm-quantity" style={labelStyle}>
              Quantity{" "}
              <span style={{ fontWeight: 400, color: "var(--cd-gray-text)" }}>(optional)</span>
            </label>
            <input
              id="qm-quantity"
              type="text"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              placeholder="e.g. 50 bags, 2 tonnes, 500 sq ft"
              style={inputStyle}
            />
          </div>

          {/* Additional details */}
          <div style={{ marginBottom: "20px" }}>
            <label htmlFor="qm-details" style={labelStyle}>
              Additional Details{" "}
              <span style={{ fontWeight: 400, color: "var(--cd-gray-text)" }}>(optional)</span>
            </label>
            <textarea
              id="qm-details"
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              placeholder="e.g. delivery location, grade required, timeline..."
              rows={3}
              style={{ ...inputStyle, resize: "vertical" }}
            />
          </div>

          {/* Error */}
          {error && (
            <p style={{ fontSize: "13px", color: "#c0392b", marginBottom: "16px" }}>{error}</p>
          )}

          {/* Submit */}
          <button
            type="submit"
            style={{
              width: "100%",
              padding: "13px 24px",
              backgroundColor: "var(--cd-orange)",
              color: "var(--cd-white)",
              fontWeight: 700,
              fontSize: "14px",
              border: "none",
              borderRadius: "2px",
              cursor: "pointer",
              letterSpacing: "0.02em",
            }}
          >
            Send Quote Request on WhatsApp →
          </button>

          <p style={{ fontSize: "11px", color: "var(--cd-gray-text)", marginTop: "10px", textAlign: "center" }}>
            Opens WhatsApp with your details pre-filled · Sent to +91 84840 77773
          </p>
        </form>
      </div>
    </div>
  );
}
