"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import Button from "../../components/Button";

export default function UserLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    let valid = true;

    setEmailError("");
    setPasswordError("");

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email.trim()) {
      setEmailError("Please enter your email");
      valid = false;
    } else if (!emailPattern.test(email)) {
      setEmailError("Please enter a valid email address");
      valid = false;
    }

    if (!password.trim()) {
      setPasswordError("Please enter your password");
      valid = false;
    } else if (password.length < 8) {
      setPasswordError("Password must be at least 8 characters");
      valid = false;
    }

    if (!valid) return;

    try {
      const res = await fetch("http://localhost:5000/api/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await res.json();
      console.log(data);

      if (res.ok) {
        toast.success("Login successful");
        setEmail("");
        setPassword("");

        router.push("/UserDashbord");
      } else {
        toast.error(
          Array.isArray(data.message)
            ? data.message[0]
            : data.message || "Login failed"
        );
      }
    } catch (error) {
      console.error("Login error:", error);
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* LEFT SIDE */}
      <div className="w-full md:w-1/2 bg-gradient-to-br from-indigo-700 via-blue-700 to-purple-900 text-white flex flex-col items-center justify-center px-6 md:px-24 py-12 md:py-0">
        <h1 className="text-3xl md:text-4xl font-semibold leading-snug text-center">
          Alumni Management System
          <br />
          with Event Management
        </h1>

        <div className="flex gap-6 md:gap-6 mt-10 md:mt-12 text-base md:text-lg justify-center">
          <span>Welcome to AMSEM</span>
          <Link href="/UserRegister" className="underline hover:text-gray-200">
            Register Here
          </Link>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 w-full md:w-[420px]">
          <label className="block mb-2 text-lg">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-white p-4 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-indigo-300"
            placeholder="Enter your email"
          />
          {emailError && (
            <p className="text-red-200 text-sm mt-1">{emailError}</p>
          )}

          <label className="block mt-6 mb-2 text-lg">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full bg-white p-4 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-indigo-300"
            placeholder="Enter your password"
          />
          {passwordError && (
            <p className="text-red-200 text-sm mt-1">{passwordError}</p>
          )}

          <Button type="submit" className="mt-12">
            Sign In
          </Button>

          <Button variant="secondary" className="mt-4">
            🌐 Sign In With Google
          </Button>

          <p className="mt-6 text-center text-sm text-white">
            Back to{" "}
            <Link href="/" className="underline hover:text-gray-200">
              Home
            </Link>
          </p>
        </form>
      </div>

      {/* RIGHT SIDE */}
      <div className="hidden md:block md:w-1/2 h-screen bg-gradient-to-br from-indigo-700 via-blue-700 to-purple-900 flex items-center justify-center">
        <img
          src="/log.png"
          className="w-full h-full object-cover"
          alt="login illustration"
        />
      </div>
    </div>
  );
}