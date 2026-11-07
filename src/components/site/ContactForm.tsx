import { useState, type FormEvent } from "react";
import { useServerFn } from "@tanstack/react-start";
import { submitContact, WEBSITE_TYPES, BUDGETS } from "@/lib/contact.functions";

const field = "mt-2 w-full rounded-xl border border-input bg-paper px-4 py-3 text-foreground placeholder:text-muted-foreground/70 focus:border-sage focus:outline-none focus:ring-2 focus:ring-ring/30";
const label = "text-sm font-semibold text-primary";

function toBase64(file: File) {
  return new Promise<string>((res, rej) => {
    const r = new FileReader();
    r.onload = () => res(String(r.result).split(",")[1] ?? "");
    r.onerror = rej;
    r.readAsDataURL(file);
  });
}

export function ContactForm() {
  const send = useServerFn(submitContact);
  const [type, setType] = useState<string>(WEBSITE_TYPES[0]);
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const file = fd.get("catalogue") as File | null;
    if (file && file.size > 10 * 1024 * 1024) { setStatus("error"); setError("File must be under 10 MB."); return; }
    setStatus("sending");
    try {
      await send({
        data: {
          fullName: String(fd.get("fullName")),
          businessName: String(fd.get("businessName")),
          budget: String(fd.get("budget")) as (typeof BUDGETS)[number],
          websiteType: type as (typeof WEBSITE_TYPES)[number],
          businessInfo: String(fd.get("businessInfo")),
          file: file && file.size > 0 ? { name: file.name, type: file.type, base64: await toBase64(file) } : null,
        },
      });
      setStatus("done");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error && err.message.length < 120 ? err.message : "Something went wrong. Please check your details and try again.");
    }
  }

  if (status === "done") {
    return (
      <div className="rounded-[2rem] border border-border bg-card p-10 text-center shadow-soft">
        <p className="eyebrow">Enquiry sent</p>
        <h2 className="mt-3 text-3xl font-bold text-primary">Thank you!</h2>
        <p className="mt-3 text-muted-foreground">We've received your details and will get back to you soon.</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-6 rounded-[2rem] border border-border bg-card p-6 shadow-soft sm:grid-cols-2 sm:p-10">
      <label className="block"><span className={label}>Full Name</span><input name="fullName" required maxLength={100} className={field} placeholder="Your name" /></label>
      <label className="block"><span className={label}>Business Name</span><input name="businessName" required maxLength={150} className={field} placeholder="Your business" /></label>
      <fieldset className="sm:col-span-2">
        <legend className={label}>Website Type</legend>
        <div className="mt-3 flex flex-wrap gap-2">
          {WEBSITE_TYPES.map((t) => (
            <button type="button" key={t} onClick={() => setType(t)} aria-pressed={type === t}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${type === t ? "border-primary bg-primary text-primary-foreground" : "border-input bg-paper text-primary hover:border-sage"}`}>
              {t}
            </button>
          ))}
        </div>
      </fieldset>
      <label className="block sm:col-span-2"><span className={label}>Budget</span>
        <select name="budget" required className={field} defaultValue="">
          <option value="" disabled>Select your budget</option>
          {BUDGETS.map((b) => <option key={b}>{b}</option>)}
        </select>
      </label>
      <label className="block sm:col-span-2"><span className={label}>Business Information</span>
        <textarea name="businessInfo" required minLength={10} maxLength={2000} rows={5} className={field} placeholder="What does your business do, and what should your website achieve?" />
      </label>
      <label className="block sm:col-span-2"><span className={label}>Business Catalogue <span className="font-normal text-muted-foreground">(optional · PDF or image, max 10 MB)</span></span>
        <input name="catalogue" type="file" accept=".pdf,image/png,image/jpeg,image/webp"
          className="mt-2 block w-full rounded-xl border border-dashed border-input bg-paper px-4 py-4 text-sm text-muted-foreground file:mr-4 file:rounded-full file:border-0 file:bg-primary file:px-4 file:py-2 file:text-sm file:font-semibold file:text-primary-foreground" />
      </label>
      {status === "error" && <p role="alert" className="text-sm text-destructive sm:col-span-2">{error}</p>}
      <div className="sm:col-span-2">
        <button type="submit" disabled={status === "sending"}
          className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 font-semibold text-primary-foreground shadow-soft transition-colors hover:bg-forest-deep disabled:opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
          {status === "sending" ? "Sending…" : "Send Enquiry →"}
        </button>
      </div>
    </form>
  );
}
