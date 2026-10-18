"use client";

import { FormEvent, useState } from "react";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

type FormErrors = Record<string, string>;

export function InquiryForm() {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const nextErrors: FormErrors = {};

    const requiredFields = [
      ["projectType", "Please select a project type."],
      ["location", "Please enter the property location."],
      ["propertySize", "Please share the approximate property size."],
      ["budget", "Please select an approximate budget."],
      ["timeline", "Please select a target timeline."],
      ["name", "Please enter your name."],
      ["email", "Please enter your work email."],
    ];

    for (const [field, message] of requiredFields) {
      if (!String(data.get(field) ?? "").trim()) nextErrors[field] = message;
    }

    const email = String(data.get("email") ?? "").trim();
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      nextErrors.email = "Please enter a valid email address.";
    }

    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      const firstInvalidField = form.querySelector<HTMLElement>(
        "[aria-invalid='true']"
      );
      firstInvalidField?.focus();
      return;
    }

    // Demo-only behavior: no data is sent or stored. Connect a secure endpoint/CRM before production.
    setSubmitted(true);
  }

  function fieldProps(name: string) {
    return {
      "aria-invalid": Boolean(errors[name]),
      "aria-describedby": errors[name] ? `${name}-error` : undefined,
      onChange: () => {
        if (errors[name]) {
          setErrors((current) => {
            const next = { ...current };
            delete next[name];
            return next;
          });
        }
      },
    };
  }

  if (submitted) {
    return <div className="form-success" role="status"><CheckCircle2 size={26} strokeWidth={1.4} /><h3>Thank you for the introduction.</h3><p>This concept form is working locally. A production version would securely deliver your inquiry to the studio or connected CRM.</p><button type="button" className="text-link" onClick={() => setSubmitted(false)}>Submit another inquiry</button></div>;
  }

  return <form className="inquiry-form" onSubmit={handleSubmit} noValidate>
    <div className="form-row">
      <label>I'm enquiring about <span>*</span><select name="projectType" defaultValue="" {...fieldProps("projectType")}><option value="" disabled>Select a project type</option><option>Hotel or boutique property</option><option>Vacation rental</option><option>Multifamily or student housing</option><option>Luxury residential</option><option>Themed or entertainment space</option><option>Trade partnership</option><option>Other</option></select>{errors.projectType && <span className="field-error" id="projectType-error">{errors.projectType}</span>}</label>
      <label>Property location <span>*</span><input name="location" placeholder="City, country" {...fieldProps("location")} />{errors.location && <span className="field-error" id="location-error">{errors.location}</span>}</label>
    </div>
    <div className="form-row">
      <label>Approximate property size <span>*</span><input name="propertySize" placeholder="e.g. 12 guest rooms, 4,000 sq ft" {...fieldProps("propertySize")} />{errors.propertySize && <span className="field-error" id="propertySize-error">{errors.propertySize}</span>}</label>
      <label>Approximate project budget <span>*</span><select name="budget" defaultValue="" {...fieldProps("budget")}><option value="" disabled>Select a range</option><option>Under $25,000</option><option>$25,000–$75,000</option><option>$75,000–$150,000</option><option>$150,000–$300,000</option><option>$300,000+</option><option>To be determined</option></select>{errors.budget && <span className="field-error" id="budget-error">{errors.budget}</span>}</label>
      <label>Target timeline <span>*</span><select name="timeline" defaultValue="" {...fieldProps("timeline")}><option value="" disabled>Select a timeline</option><option>As soon as possible</option><option>Within 3 months</option><option>3–6 months</option><option>6–12 months</option><option>Exploring options</option></select>{errors.timeline && <span className="field-error" id="timeline-error">{errors.timeline}</span>}</label>
    </div>
    <div className="form-row">
      <label>Your name <span>*</span><input name="name" autoComplete="name" placeholder="Full name" {...fieldProps("name")} />{errors.name && <span className="field-error" id="name-error">{errors.name}</span>}</label>
      <label>Work email <span>*</span><input name="email" type="email" autoComplete="email" placeholder="you@company.com" {...fieldProps("email")} />{errors.email && <span className="field-error" id="email-error">{errors.email}</span>}</label>
    </div>
    <fieldset className="interest-fieldset">
      <legend>Areas of interest <span>(select all that apply)</span></legend>
      <div className="interest-options">
        {["Interior design & furnishing", "Soft furnishing & styling", "Themed bedrooms", "Entertainment spaces", "Custom themed beds", "Trade partnership"].map((interest) => <label key={interest}><input type="checkbox" name="areasOfInterest" value={interest} /><span>{interest}</span></label>)}
      </div>
    </fieldset>
    <label>Tell us a little about the property <textarea name="details" rows={4} placeholder="Goals, rooms, practical requirements, or anything else we should know…" /></label>
    <button className="button button-dark form-submit" type="submit">Send project inquiry <ArrowUpRight size={16} /></button>
    <p className="form-note">This is a portfolio demonstration. Form submissions are not transmitted or saved.</p>
  </form>;
}
