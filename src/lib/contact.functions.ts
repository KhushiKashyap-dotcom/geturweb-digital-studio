import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

export const WEBSITE_TYPES = ["Landing Page", "Business Website", "E-commerce Site", "Portfolio Website", "Restaurant / Café Website", "Other"] as const;
export const BUDGETS = ["Under ₹5,999", "₹6,000 – ₹15,000", "₹15,000 – ₹30,000", "₹30,000+", "Not sure yet"] as const;
const ALLOWED = ["application/pdf", "image/png", "image/jpeg", "image/webp"];

const schema = z.object({
  fullName: z.string().trim().min(1).max(100),
  businessName: z.string().trim().min(1).max(150),
  budget: z.enum(BUDGETS),
  websiteType: z.enum(WEBSITE_TYPES),
  businessInfo: z.string().trim().min(10).max(2000),
  file: z
    .object({ name: z.string().max(200), type: z.string(), base64: z.string().max(14_000_000) })
    .nullable(),
});

export const submitContact = createServerFn({ method: "POST" })
  .inputValidator((input: z.input<typeof schema>) => schema.parse(input))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    let catalogue_path: string | null = null;
    if (data.file) {
      if (!ALLOWED.includes(data.file.type)) throw new Error("Please upload a PDF or image file.");
      const bytes = Uint8Array.from(atob(data.file.base64), (c) => c.charCodeAt(0));
      if (bytes.byteLength > 10 * 1024 * 1024) throw new Error("File must be under 10 MB.");
      const safe = data.file.name.replace(/[^a-zA-Z0-9._-]/g, "_");
      const path = `${crypto.randomUUID()}/${safe}`;
      const { error } = await supabaseAdmin.storage.from("catalogues").upload(path, bytes, { contentType: data.file.type });
      if (error) throw new Error("Upload failed. Please try again.");
      catalogue_path = path;
    }
    const { error } = await supabaseAdmin.from("contact_submissions").insert({
      full_name: data.fullName,
      business_name: data.businessName,
      budget: data.budget,
      website_type: data.websiteType,
      business_info: data.businessInfo,
      catalogue_path,
    });
    if (error) throw new Error("Could not send your enquiry. Please try again.");
    return { ok: true };
  });
