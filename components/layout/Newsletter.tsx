"use client";

import { FormEvent, useState } from "react";
import Button from "@/components/ui/Button";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  }

  return (
    <section aria-labelledby="newsletter-heading" className="bg-ink py-20 text-paper">
      <div className="container-boutique flex flex-col items-center text-center">
        <p className="eyebrow mb-3 text-rose-300">Join The List</p>
        <h2 id="newsletter-heading" className="max-w-lg font-lato text-3xl font-light md:text-4xl">
          New collections, styling notes, and early access — first.
        </h2>
        <p className="mt-3 max-w-md text-sm text-paper/70">
          Sign up for exclusive access to new arrivals, promotions, and
          seasonal styling inspiration.
        </p>

        {submitted ? (
          <p className="mt-8 text-sm font-bold text-rose-300">
            You&apos;re on the list — thank you for joining Zuri.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 flex w-full max-w-md flex-col gap-3 sm:flex-row">
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="focus-ring w-full rounded-full border border-paper/30 bg-transparent px-5 py-3 text-sm text-paper placeholder:text-paper/50"
            />
            <Button type="submit" variant="ghost" className="shrink-0">
              Sign Up
            </Button>
          </form>
        )}
      </div>
    </section>
  );
}
