"use client";

import Link from "next/link";
import { useState } from "react";

export default function UserLoginPage() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    let valid = true;

    setEmailError("");
    setPasswordError("");

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      setEmailError("Please enter a valid email address");
      valid = false;
    }

    if (password.length < 8) {
      setPasswordError(
        "Password must be at least 8 characters and include letters and numbers"
      );
      valid = false;
    }

    if (valid) {
      alert("Login Successful");
    }
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen">

      {/* LEFT SIDE */}
      <div className="w-full md:w-1/2 bg-indigo-600 text-white flex flex-col items-center justify-center px-6 md:px-24 py-12 md:py-0">

        <h1 className="text-3xl md:text-4xl font-semibold leading-snug text-center">
          Alumni Management System
          <br />
          with Event Management
        </h1>

        <div className="flex gap-6 md:gap-6 mt-10 md:mt-12 text-base md:text-lg justify-center">
          <span>Welcome to AMSEM</span>
          <Link href="/UserRegister" className="underline">
            Register Here
          </Link>
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="mt-8 w-full md:w-[420px]">

          {/* EMAIL */}
          <label className="block mb-2 text-lg">Email</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-white p-4 rounded text-black"
          />

          {emailError && (
            <p className="text-red-200 text-sm mt-1">{emailError}</p>
          )}

          {/* PASSWORD */}
          <label className="block mt-6 mb-2 text-lg">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full bg-white p-4 rounded text-black"
          />

          {passwordError && (
            <p className="text-red-200 text-sm mt-1">{passwordError}</p>
          )}

          {/* BUTTON */}
          <button
            type="submit"
            className="w-full mt-12 bg-indigo-400 py-3 rounded text-lg hover:bg-indigo-500 cursor-pointer"
          >
            Sign In
          </button>

          <button
            type="button"
            className="w-full mt-4 bg-indigo-300 py-3 rounded text-lg hover:bg-indigo-400 cursor-pointer"
          >
            🌐 Sign In With Google
          </button>

          <p className="mt-6 text-center text-sm text-white">
            Back to{" "}
            <Link href="/" className="underline">
              Home
            </Link>
          </p>

        </form>

      </div>

      {/* RIGHT IMAGE */}
      <div className="hidden md:block md:w-1/2 h-screen bg-gray-100">
        <img
          src="/log.png"
          className="w-full h-full object-cover"
          alt="login illustration"
        />
      </div>

    </div>
  );
}