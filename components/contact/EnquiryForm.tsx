"use client";

import { useState, FormEvent } from "react";
import { useTranslations } from "next-intl";
import { WHATSAPP_URL } from "@/lib/whatsapp";
import Button from "@/components/ui/Button";

const PRODUCT_OPTIONS = [
  "ACC Cement",
  "Waterproofing (Dr. Fixit)",
  "TMT Bars",
  "Structural Steel",
  "Roofing & Sheets (JSW)",
  "CERA Bathroom Fittings",
  "Samruddhi Water Tanks",
  "MS Grills & Manhole Covers",
  "Other",
];

export default function EnquiryForm() {
  const t = useTranslations("contact");

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [need, setNeed] = useState("");
  const [quantity, setQuantity] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [whatsappUrl, setWhatsappUrl] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, need, quantity: quantity || undefined, source: "Contact Page" }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        setStatus("error");
        setErrorMsg(data.error ?? t("errorGeneric"));
        return;
      }

      setStatus("success");
      setWhatsappUrl(data.whatsappUrl);
    } catch {
      setStatus("error");
      setErrorMsg(t("errorGeneric"));
    }
  }

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "12px 16px",
    fontSize: "14px",
    fontWeight: 400,
    color: "var(--cd-black)",
    backgroundColor: "var(--cd-white)",
    border: "1px solid var(--cd-line)",
    borderRadius: "2px",
    outline: "none",
    transition: "border-color 150ms ease-out",
    boxSizing: "border-box",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontSize: "12px",
    fontWeight: 600,
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    color: "var(--cd-gray-text)",
    marginBottom: "8px",
  };

  if (status === "success") {
    return (
      <div
        style={{
          padding: "40px 32px",
          border: "1px solid var(--cd-line)",
          backgroundColor: "var(--cd-stone)",
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontWeight: 800,
            fontSize: "18px",
            color: "var(--cd-black)",
            marginBottom: "8px",
          }}
        >
          {t("successHeading")}
        </p>
        <p style={{ fontSize: "14px", color: "var(--cd-gray-text)", marginBottom: "24px" }}>
          {t("successBody")}
        </p>
        <Button
          variant="primary"
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          {t("openWhatsApp")}
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
        {/* Name */}
        <div>
          <label htmlFor="enquiry-name" style={labelStyle}>
            {t("formName")} <span style={{ color: "var(--cd-orange)" }}>*</span>
          </label>
          <input
            id="enquiry-name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            autoComplete="name"
            placeholder={t("formNamePlaceholder")}
            style={inputStyle}
          />
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="enquiry-phone" style={labelStyle}>
            {t("formPhone")} <span style={{ color: "var(--cd-orange)" }}>*</span>
          </label>
          <input
            id="enquiry-phone"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            autoComplete="tel"
            placeholder={t("formPhonePlaceholder")}
            style={inputStyle}
          />
        </div>

        {/* What do you need — dropdown */}
        <div>
          <label htmlFor="enquiry-need" style={labelStyle}>
            {t("formNeed")} <span style={{ color: "var(--cd-orange)" }}>*</span>
          </label>
          <select
            id="enquiry-need"
            value={need}
            onChange={(e) => setNeed(e.target.value)}
            required
            style={{ ...inputStyle, cursor: "pointer" }}
          >
            <option value="">{t("formNeedPlaceholder")}</option>
            {PRODUCT_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>

        {/* Quantity — optional */}
        <div>
          <label htmlFor="enquiry-quantity" style={labelStyle}>
            {t("formQuantity")} <span style={{ color: "var(--cd-gray-text)" }}>({t("optional")})</span>
          </label>
          <input
            id="enquiry-quantity"
            type="text"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            autoComplete="off"
            placeholder={t("formQuantityPlaceholder")}
            style={inputStyle}
          />
        </div>

        {/* Error message */}
        {status === "error" && errorMsg && (
          <p
            role="alert"
            style={{
              fontSize: "13px",
              color: "#c0392b",
              padding: "12px 16px",
              border: "1px solid #c0392b",
              borderRadius: "2px",
              backgroundColor: "#fdf5f4",
            }}
          >
            {errorMsg}
          </p>
        )}

        <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", alignItems: "center" }}>
          <Button
            variant="primary"
            type="submit"
            disabled={status === "loading"}
            style={{
              cursor: status === "loading" ? "wait" : "pointer",
              opacity: status === "loading" ? 0.7 : 1,
            }}
          >
            {status === "loading" ? t("formSubmitting") : t("formSubmit")}
          </Button>

          {/* Fallback direct WhatsApp link */}
          <Button
            variant="ghost"
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: "13px",
              color: "var(--cd-gray-text)",
              padding: "0",
            }}
          >
            {t("orWhatsApp")}
          </Button>
        </div>
      </div>
    </form>
  );
}
