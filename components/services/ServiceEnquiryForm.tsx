"use client";

import { useState } from "react";

interface ServiceEnquiryFormProps {
  serviceName: string;
  serviceDescription: string;
}

/**
 * ServiceEnquiryForm — collects name + phone, builds a pre-filled WhatsApp message
 * and redirects to wa.me/918484077773 automatically on submit.
 */
export default function ServiceEnquiryForm({
  serviceName,
  serviceDescription,
}: ServiceEnquiryFormProps) {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [details, setDetails] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) { setError("Please enter your name."); return; }
    if (!phone.trim() || phone.replace(/\D/g, "").length < 10) {
      setError("Please enter a valid 10-digit mobile number.");
      return;
    }
    setError("");

    const message = [
      `*Service Enquiry — ${serviceName}*`,
      ``,
      `Name: ${name.trim()}`,
      `Mobile: ${phone.trim()}`,
      details.trim() ? `Details: ${details.trim()}` : null,
      ``,
      `Service: ${serviceDescription}`,
    ]
      .filter((l) => l !== null)
      .join("\n");

    const url = `https://wa.me/918484077773?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setOpen(false);
    setName("");
    setPhone("");
    setDetails("");
  };

  return (
    <div>
      {/* Trigger link */}
      <button
        onClick={() => setOpen(true)}
        style={{
          fontSize: "13px",
          fontWeight: 600,
          color: "var(--cd-orange)",
          background: "none",
          border: "none",
          cursor: "pointer",
          padding: 0,
          textAlign: "left",
        }}
      >
        Enquire about this service →
      </button>

      {/* Modal overlay */}
      {open && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(0,0,0,0.5)",
            zIndex: 100,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "24px",
          }}
          onClick={(e) => { if (e.target === e.currentTarget) setOpen(false); }}
        >
          <div
            style={{
              backgroundColor: "var(--cd-white)",
              width: "100%",
              maxWidth: "440px",
              border: "1px solid var(--cd-line)",
            }}
          >
            {/* Header */}
            <div
              style={{
                padding: "20px 24px",
                borderBottom: "1px solid var(--cd-line)",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
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
                  Service Enquiry
                </p>
                <p
                  style={{
                    fontWeight: 800,
                    fontSize: "15px",
                    color: "var(--cd-black)",
                  }}
                >
                  {serviceName}
                </p>
              </div>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close"
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "20px",
                  color: "var(--cd-gray-text)",
                  lineHeight: 1,
                  padding: "4px",
                }}
              >
                ×
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} style={{ padding: "24px" }}>
              <p
                style={{
                  fontSize: "13px",
                  lineHeight: 1.5,
                  color: "var(--cd-gray-text)",
                  marginBottom: "20px",
                }}
              >
                Fill in your details and we&apos;ll open WhatsApp with your enquiry pre-filled and ready to send.
              </p>

              {/* Name */}
              <div style={{ marginBottom: "16px" }}>
                <label
                  htmlFor="enq-name"
                  style={{
                    display: "block",
                    fontSize: "12px",
                    fontWeight: 600,
                    color: "var(--cd-black)",
                    marginBottom: "6px",
                  }}
                >
                  Your Name *
                </label>
                <input
                  id="enq-name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Ramesh Patil"
                  required
                  style={{
                    width: "100%",
                    padding: "10px 12px",
                    border: "1px solid var(--cd-line)",
                    fontSize: "14px",
                    color: "var(--cd-black)",
                    backgroundColor: "var(--cd-white)",
                    borderRadius: "2px",
                    outline: "none",
                    boxSizing: "border-box",
                  }}
                />
              </div>

              {/* Phone */}
              <div style={{ marginBottom: "16px" }}>
                <label
                  htmlFor="enq-phone"
                  style={{
                    display: "block",
                    fontSize: "12px",
                    fontWeight: 600,
                    color: "var(--cd-black)",
                    marginBottom: "6px",
                  }}
                >
                  Mobile Number *
                </label>
                <input
                  id="enq-phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="e.g. 98765 43210"
                  required
                  style={{
                    width: "100%",
                    padding: "10px 12px",
                    border: "1px solid var(--cd-line)",
                    fontSize: "14px",
                    color: "var(--cd-black)",
                    backgroundColor: "var(--cd-white)",
                    borderRadius: "2px",
                    outline: "none",
                    boxSizing: "border-box",
                  }}
                />
              </div>

              {/* Details */}
              <div style={{ marginBottom: "20px" }}>
                <label
                  htmlFor="enq-details"
                  style={{
                    display: "block",
                    fontSize: "12px",
                    fontWeight: 600,
                    color: "var(--cd-black)",
                    marginBottom: "6px",
                  }}
                >
                  Additional Details{" "}
                  <span style={{ fontWeight: 400, color: "var(--cd-gray-text)" }}>(optional)</span>
                </label>
                <textarea
                  id="enq-details"
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                  placeholder="e.g. quantity needed, delivery location, timeline..."
                  rows={3}
                  style={{
                    width: "100%",
                    padding: "10px 12px",
                    border: "1px solid var(--cd-line)",
                    fontSize: "14px",
                    color: "var(--cd-black)",
                    backgroundColor: "var(--cd-white)",
                    borderRadius: "2px",
                    outline: "none",
                    resize: "vertical",
                    boxSizing: "border-box",
                    fontFamily: "inherit",
                  }}
                />
              </div>

              {/* Error */}
              {error && (
                <p
                  style={{
                    fontSize: "13px",
                    color: "#c0392b",
                    marginBottom: "16px",
                  }}
                >
                  {error}
                </p>
              )}

              {/* Submit */}
              <button
                type="submit"
                style={{
                  width: "100%",
                  padding: "12px 24px",
                  backgroundColor: "var(--cd-orange)",
                  color: "var(--cd-white)",
                  fontWeight: 600,
                  fontSize: "14px",
                  border: "1px solid var(--cd-orange)",
                  borderRadius: "2px",
                  cursor: "pointer",
                }}
              >
                Send Enquiry on WhatsApp →
              </button>

              <p
                style={{
                  fontSize: "11px",
                  color: "var(--cd-gray-text)",
                  marginTop: "12px",
                  textAlign: "center",
                }}
              >
                Opens WhatsApp with your details pre-filled. Sent to +91 84840 77773.
              </p>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
