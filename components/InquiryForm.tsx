"use client";

import { FormEvent, useState } from "react";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

export function InquiryForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    // Demo-only behavior: no data is sent or stored. Connect a secure endpoint/CRM before production.
    setSubmitted(true);
  }

  if (submitted) {
    return <div className="form-success" role="status"><CheckCircle2 size={26} strokeWidth={1.4} /><h3>Thank you for the introduction.</h3><p>This concept form is working locally. A production version would securely deliver your inquiry to the studio or connected CRM.</p><button type="button" className="text-link" onClick={() => setSubmitted(false)}>Submit another inquiry</button></div>;
  }

  return <form className="inquiry-form" onSubmit={handleSubmit}>
    <div className="form-row">
      <label>I'm enquiring about <span>*</span><select name="projectType" required defaultValue=""><option value="" disabled>Select a project type</option><option>Hotel or boutique property</option><option>Vacation rental</option><option>Multifamily or student housing</option><option>Luxury residential</option><option>Themed or entertainment space</option><option>Trade partnership</option><option>Other</option></select></label>
      <label>Property location <span>*</span><input name="location" required placeholder="City, country" /></label>
    </div>
    <div className="form-row">
      <label>Approximate project budget <span>*</span><select name="budget" required defaultValue=""><option value="" disabled>Select a range</option><option>Under $25,000</option><option>$25,000–$75,000</option><option>$75,000–$150,000</option><option>$150,000–$300,000</option><option>$300,000+</option><option>To be determined</option></select></label>
      <label>Target timeline <span>*</span><select name="timeline" required defaultValue=""><option value="" disabled>Select a timeline</option><option>As soon as possible</option><option>Within 3 months</option><option>3–6 months</option><option>6–12 months</option><option>Exploring options</option></select></label>
    </div>
    <div className="form-row">
      <label>Your name <span>*</span><input name="name" autoComplete="name" required placeholder="Full name" /></label>
      <label>Work email <span>*</span><input name="email" type="email" autoComplete="email" required placeholder="you@company.com" /></label>
    </div>
    <label>Tell us a little about the property <textarea name="details" rows={4} placeholder="Property size, goals, rooms, or anything else we should know…" /></label>
    <button className="button button-dark form-submit" type="submit">Send project inquiry <ArrowUpRight size={16} /></button>
    <p className="form-note">This is a portfolio demonstration. Form submissions are not transmitted or saved.</p>
  </form>;
}
