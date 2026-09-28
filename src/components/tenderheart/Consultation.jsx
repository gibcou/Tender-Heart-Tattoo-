import React, { useState } from "react";
import Reveal, { FadeSoft, InkLine } from "@/components/tenderheart/Reveal";

const styles = ["Black & Grey", "Realism", "Portrait", "Traditional", "Cover-up", "Custom"];
const placements = ["Forearm", "Inner Arm", "Shoulder", "Ribcage", "Back", "Ankle", "Wrist", "Other"];

export default function Consultation() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({
    name: "",
    email: "",
    style: "",
    placement: "",
    size: "",
    description: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const update = (k, v) => setForm((f) => ({ ...f, [k]: v }));

  const next = () => setStep((s) => Math.min(s + 1, 2));
  const back = () => setStep((s) => Math.max(s - 1, 0));

  const submit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputCls =
    "w-full bg-transparent border-b border-foreground/30 focus:border-foreground py-3 text-base tracking-[0.01em] outline-none transition-colors placeholder:text-foreground/30";
  const labelCls = "text-[10px] uppercase tracking-[0.3em] font-medium text-foreground/50 mb-2 block";

  return (
    <section id="consultation" className="bg-background py-24 md:py-40">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <div className="grid md:grid-cols-12 gap-10 md:gap-16">
          <div className="md:col-span-5">
            <Reveal>
              <p className="text-[10px] uppercase tracking-[0.4em] font-medium text-accent mb-4">Consultation</p>
              <InkLine className="mb-8" />
            </Reveal>
            <FadeSoft delay={0.1}>
            <h2 className="font-heading text-6xl md:text-8xl leading-[0.85] tracking-[0.02em]">
              BOOK
              <br />
              <span className="text-outline">A CHAIR.</span>
            </h2>
            </FadeSoft>
            <p className="mt-8 text-[15px] leading-[1.8] text-foreground/60 max-w-md">
              Consultations are free. Tell Courtney what you're after and she'll reply personally
              within a few days; a deposit holds your date once the design is locked.
            </p>
            <div className="mt-12 space-y-5 text-[13px] leading-[1.7] text-foreground/60">
              <p><span className="uppercase tracking-[0.2em] text-foreground/40 text-[10px] block mb-1">Studio</span>Bozeman, Montana</p>
              <p><span className="uppercase tracking-[0.2em] text-foreground/40 text-[10px] block mb-1">Hours</span>By appointment, Wed–Sat</p>
              <p><span className="uppercase tracking-[0.2em] text-foreground/40 text-[10px] block mb-1">Email</span>hello@tenderhearttattoo.com</p>
              <p><span className="uppercase tracking-[0.2em] text-foreground/40 text-[10px] block mb-1">Heads up</span>18+ with valid ID. No exceptions.</p>
            </div>
          </div>

          <div className="md:col-span-7">
            {submitted ? (
              <div className="border border-border p-8 sm:p-10 md:p-16 text-center">
                <p className="font-script text-4xl md:text-5xl text-accent">you're on the list</p>
                <p className="font-heading text-3xl md:text-4xl mt-3">
                  THANKS, {form.name ? form.name.split(" ")[0].toUpperCase() : "FRIEND"}.
                </p>
                <p className="mt-4 text-foreground/60 max-w-md mx-auto">
                  Your request has reached Courtney. You'll receive a personal reply within three
                  days to begin shaping your piece.
                </p>
              </div>
            ) : (
              <FadeSoft delay={0.15}>
              <form onSubmit={submit} className="border border-border p-6 sm:p-8 md:p-12">
                {/* Progress */}
                <div className="flex items-center gap-3 sm:gap-4 mb-8 sm:mb-10">
                  {[0, 1, 2].map((i) => (
                    <div key={i} className="flex items-center gap-4 flex-1 last:flex-none">
                      <span
                        className={`w-7 h-7 rounded-full flex items-center justify-center text-[11px] border transition-colors ${
                          step >= i ? "bg-foreground text-background border-foreground" : "border-foreground/30 text-foreground/40"
                        }`}
                      >
                        {i + 1}
                      </span>
                      {i < 2 && <div className={`h-px flex-1 ${step > i ? "bg-foreground" : "bg-foreground/20"}`} />}
                    </div>
                  ))}
                </div>

                {step === 0 && (
                  <div className="space-y-8">
                    <div>
                      <label className={labelCls}>Your Name</label>
                      <input
                        className={inputCls}
                        value={form.name}
                        onChange={(e) => update("name", e.target.value)}
                        placeholder="First and last"
                        required
                      />
                    </div>
                    <div>
                      <label className={labelCls}>Email</label>
                      <input
                        type="email"
                        className={inputCls}
                        value={form.email}
                        onChange={(e) => update("email", e.target.value)}
                        placeholder="you@email.com"
                        required
                      />
                    </div>
                  </div>
                )}

                {step === 1 && (
                  <div className="space-y-10">
                    <div>
                      <label className={labelCls}>Style</label>
                      <div className="flex flex-wrap gap-2 mt-3">
                        {styles.map((s) => (
                          <button
                            type="button"
                            key={s}
                            onClick={() => update("style", s)}
                            className={`text-[12px] uppercase tracking-[0.12em] px-4 py-2 border transition-colors ${
                              form.style === s
                                ? "bg-foreground text-background border-foreground"
                                : "border-foreground/25 text-foreground/60 hover:border-foreground/60"
                            }`}
                          >
                            {s}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div>
                      <label className={labelCls}>Placement</label>
                      <div className="flex flex-wrap gap-2 mt-3">
                        {placements.map((p) => (
                          <button
                            type="button"
                            key={p}
                            onClick={() => update("placement", p)}
                            className={`text-[12px] uppercase tracking-[0.12em] px-4 py-2 border transition-colors ${
                              form.placement === p
                                ? "bg-foreground text-background border-foreground"
                                : "border-foreground/25 text-foreground/60 hover:border-foreground/60"
                            }`}
                          >
                            {p}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div>
                      <label className={labelCls}>Approximate Size</label>
                      <input
                        className={inputCls}
                        value={form.size}
                        onChange={(e) => update("size", e.target.value)}
                        placeholder="e.g. 3 inches, palm-sized"
                      />
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div className="space-y-8">
                    <div>
                      <label className={labelCls}>Tell me about your piece</label>
                      <textarea
                        className={`${inputCls} resize-none min-h-[140px]`}
                        value={form.description}
                        onChange={(e) => update("description", e.target.value)}
                        placeholder="The meaning, the imagery, anything you are honoring or releasing…"
                        rows={5}
                      />
                    </div>
                    <div className="border border-dashed border-border p-8 text-center text-foreground/40 text-sm">
                      Reference photos can be sent once Courtney replies to your request.
                    </div>
                  </div>
                )}

                <div className="flex items-center justify-between mt-10 sm:mt-12 pt-6 border-t border-border">
                  {step > 0 ? (
                    <button
                      type="button"
                      onClick={back}
                      className="text-[13px] uppercase tracking-[0.18em] text-foreground/50 hover:text-foreground transition-colors"
                    >
                      ← Back
                    </button>
                  ) : <span />}

                  {step < 2 ? (
                    <button
                      type="button"
                      onClick={next}
                      disabled={step === 0 && (!form.name || !form.email)}
                      className="text-[13px] uppercase tracking-[0.18em] border-b border-foreground pb-1 hover:gap-4 inline-flex items-center gap-2 disabled:opacity-30 disabled:border-foreground/30 transition-all"
                    >
                      Continue →
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="text-[13px] uppercase tracking-[0.18em] border-b border-foreground pb-1 hover:gap-4 inline-flex items-center gap-2 transition-all"
                    >
                      Send Request →
                    </button>
                  )}
                </div>
              </form>
              </FadeSoft>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}