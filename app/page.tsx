"use client";

import { useState } from "react";
import Image from "next/image";

export default function WaitlistPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement actual form submission logic
    console.log("Submitted email:", email);
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#1e2029] text-[#f0e6d2] flex flex-col items-center justify-center">
      <div className="container mx-auto px-4 py-16 text-center">
        <div className="mb-12">
          <div className="relative w-48 h-48 mx-auto mb-8">
            <Image
              src="/Logo.png"
              alt="Study Scope AI Logo"
              layout="fill"
              objectFit="contain"
              priority
            />
          </div>
          <h1 className="text-5xl font-bold mb-4">Study Scope AI Waitlist</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get early access to the revolutionary AI-powered study tool that
            will transform your learning experience.
          </p>
        </div>

        {submitted ? (
          <div className="alert alert-success bg-[#3498db] text-[#f0e6d2] shadow-lg max-w-md mx-auto">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-current flex-shrink-0 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>
                {"Thank you for joining our waitlist! We'll be in touch soon."}
              </span>
            </div>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="form-control max-w-md mx-auto"
          >
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="input input-bordered w-full bg-[#2c2f3b] text-[#f0e6d2] border-[#3498db]"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button
                className="btn bg-[#3498db] hover:bg-[#2980b9] text-[#f0e6d2] border-none"
                type="submit"
              >
                Join Waitlist
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
