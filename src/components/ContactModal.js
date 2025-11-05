"use client";

import { useEffect, useMemo, useRef, useState } from "react";

export default function ContactModal({
  open,
  onClose,
  onSubmit,
  title = "Get in touch",
  subtitle = "We’ll call you back to confirm slot.",
  submitLabel = "Submit",
  fields = [
    { type: "text", name: "name", label: "Name", placeholder: "Your full name", required: true },
    { type: "email", name: "email", label: "Email Id", placeholder: "you@example.com", required: true },
    { type: "tel", name: "phone", label: "Phone no", placeholder: "10-digit mobile", required: true },
    {
      type: "select",
      name: "location",
      label: "Preferred Location",
      placeholder: "Choose Location",
      options: ["Bhattarahalli", "Kalyan Nagar", "Hoskote", "Hennur"],
      required: true,
    },
  ],
}) {
  const initialState = useMemo(
    () =>
      Object.fromEntries(
        fields.map((f) => [f.name, ""])
      ),
    [fields]
  );

  const [values, setValues] = useState(initialState);
  const [submitting, setSubmitting] = useState(false);
  const firstFieldRef = useRef(null);

  // reset when opened
  useEffect(() => {
    if (open) {
      setValues(initialState);
      // focus first input a tick later
      const t = setTimeout(() => firstFieldRef.current?.focus(), 10);
      return () => clearTimeout(t);
    }
  }, [open, initialState]);

  // esc to close
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose?.();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  const handleChange = (name) => (e) => {
    setValues((v) => ({ ...v, [name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (submitting) return;
    setSubmitting(true);
    try {
      await onSubmit?.(values);
      onClose?.();
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur"
      aria-modal="true"
      role="dialog"
      onClick={onClose}
    >
      <div
        className="relative w-[92%] max-w-xl rounded-2xl bg-[#0B1320] p-6 sm:p-8 shadow-2xl ring-1 ring-white/10 text-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          aria-label="Close"
          onClick={onClose}
          className="absolute right-4 top-4 inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/25 text-white/90 hover:bg-white/10"
        >
          <svg width="16" height="16" viewBox="0 0 24 24">
            <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>

        {/* Title */}
        <h3 className="text-2xl sm:text-[26px] font-semibold tracking-tight">Get in touch</h3>

        <form onSubmit={handleSubmit} className="mt-6 space-y-5">
          {fields.map((f, idx) => {
            const common =
              "w-full rounded-lg border bg-transparent px-4 py-3.5 outline-none transition focus:ring-2 focus:ring-white/20";
            const border = "border-white/15 placeholder-white/40 text-white";

            if (f.type === "select") {
              return (
                <Field key={f.name} label={f.label}>
                  <div className="relative">
                    <select
                      value={values[f.name]}
                      onChange={handleChange(f.name)}
                      required={f.required}
                      className={`${common} ${border} appearance-none pr-10`}
                    >
                      <option value="" disabled>
                        {f.placeholder ?? "Choose"}
                      </option>
                      {f.options.map((opt) => (
                        <option key={opt} value={opt} className="bg-[#0B1320] text-white">
                          {opt}
                        </option>
                      ))}
                    </select>
                    <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                      <svg width="18" height="18" viewBox="0 0 24 24" className="text-white/70">
                        <path d="M6 9l6 6 6-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                    </span>
                  </div>
                </Field>
              );
            }

            return (
              <Field key={f.name} label={f.label}>
                <input
                  ref={idx === 0 ? firstFieldRef : undefined}
                  type={f.type}
                  inputMode={f.type === "tel" ? "tel" : undefined}
                  value={values[f.name]}
                  onChange={handleChange(f.name)}
                  required={f.required}
                  placeholder={f.placeholder}
                  className={`${common} ${border} placeholder:select-none`}
                />
              </Field>
            );
          })}

          <button
            type="submit"
            disabled={submitting}
            className="mt-2 w-full rounded-xl bg-gradient-to-r from-rose-400 to-fuchsia-600 px-6 py-4 text-center text-base font-semibold text-white shadow-lg disabled:opacity-70"
          >
            {submitting ? "Submitting..." : submitLabel}
          </button>

          <p className="text-sm text-white/70">{subtitle}</p>
        </form>
      </div>
    </div>
  );
}

/* ---------- Small helpers ---------- */

function Field({ label, children }) {
  return (
    <label className="block">
      <div className="mb-2 text-[15px] font-medium text-white">{label}</div>
      {children}
    </label>
  );
}
