import { useState } from "react";

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
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold mb-8 text-center">
        Join the Study Scope AI Waitlist
      </h1>
      <p className="text-xl mb-8 text-center max-w-2xl">
        Get early access to the revolutionary AI-powered study tool that will
        transform your learning experience.
      </p>
      {submitted ? (
        <div className="text-green-600 text-xl">
          Thank you for joining our waitlist! We'll be in touch soon.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="w-full max-w-md">
          <div className="flex items-center border-b border-blue-500 py-2">
            <input
              className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
              type="email"
              placeholder="Enter your email"
              aria-label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button
              className="flex-shrink-0 bg-blue-500 hover:bg-blue-700 border-blue-500 hover:border-blue-700 text-sm border-4 text-white py-1 px-2 rounded"
              type="submit"
            >
              Join Waitlist
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
