import { NextRequest, NextResponse } from "next/server";
import { WHATSAPP_URL } from "@/lib/whatsapp";

interface EnquiryPayload {
  name: string;
  phone: string;
  need: string;
  quantity?: string;
  source?: string; // which page the enquiry came from
}

interface EnquiryResponse {
  success: boolean;
  whatsappUrl?: string;
  error?: string;
}

function isValidPhone(phone: string): boolean {
  return /^(\+91)?[6-9]\d{9}$/.test(phone.replace(/\s/g, ""));
}

export async function POST(req: NextRequest): Promise<NextResponse<EnquiryResponse>> {
  let payload: Partial<EnquiryPayload>;

  try {
    payload = await req.json();
  } catch {
    return NextResponse.json({ success: false, error: "Invalid request body" }, { status: 400 });
  }

  const { name, phone, need, quantity, source } = payload;

  if (!name || typeof name !== "string" || name.trim().length === 0) {
    return NextResponse.json({ success: false, error: "Name is required" }, { status: 400 });
  }

  if (!phone || typeof phone !== "string" || !isValidPhone(phone)) {
    return NextResponse.json({ success: false, error: "Valid phone number is required" }, { status: 400 });
  }

  if (!need || typeof need !== "string" || need.trim().length === 0) {
    return NextResponse.json({ success: false, error: "Please select what you need" }, { status: 400 });
  }

  // Fixed format WhatsApp message sent to 8484077773
  const lines = [
    `🏗️ *New Enquiry — CD Enterprises Website*`,
    ``,
    `*From:* ${name.trim()}`,
    `*Phone:* ${phone.trim()}`,
    `*Requirement:* ${need.trim()}`,
    quantity ? `*Quantity:* ${quantity.trim()}` : null,
    source ? `*Source:* ${source.trim()}` : null,
    ``,
    `_Please respond to this enquiry._`,
  ];

  const message = lines.filter((l) => l !== null).join("\n");
  const whatsappUrl = `${WHATSAPP_URL}?text=${encodeURIComponent(message)}`;

  return NextResponse.json({ success: true, whatsappUrl }, { status: 200 });
}
