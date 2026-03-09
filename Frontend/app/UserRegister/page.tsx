"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import Button from "../../components/Button";

export default function UserRegister() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    let valid = true;

    setNameError("");
    setEmailError("");
    setPasswordError("");

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/;

    if (!name.trim()) {
      setNameError("Please enter your username");
      valid = false;
    }

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
    } else if (!passwordPattern.test(password)) {
      setPasswordError(
        "Password must be at least 8 characters and include letters and numbers"
      );
      valid = false;
    }

    if (!valid) return;

    try {
      const res = await fetch("http://localhost:5000/api/user/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        toast.success("Register successful");

        setName("");
        setEmail("");
        setPassword("");

        router.push("/Userlogin");
      } else {
        toast.error(
          Array.isArray(data.message)
            ? data.message[0]
            : data.message || "Register failed"
        );
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* LEFT SIDE */}
      <div className="w-full md:w-1/2 bg-gradient-to-br from-indigo-700 via-blue-700 to-purple-900 text-white flex flex-col items-center justify-center px-6 md:px-24 py-12">
        <h1 className="text-3xl md:text-4xl font-semibold text-center leading-snug">
          Alumni Management System
          <br />
          with Event Management
        </h1>

        <div className="flex gap-6 mt-10 text-lg justify-center">
          <span>Welcome to AMSEM</span>

          <Link href="/Userlogin" className="underline hover:text-gray-200">
            Login Here
          </Link>
        </div>

        <form onSubmit={handleSubmit} className="mt-10 w-full md:w-[420px]">
          {/* Username */}
          <label className="block mb-2 text-lg">Username</label>

          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-4 rounded-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-indigo-300"
            placeholder="Enter your username"
          />

          {nameError && (
            <p className="text-red-200 text-sm mt-1">{nameError}</p>
          )}

          {/* Email */}
          <label className="block mt-6 mb-2 text-lg">Email</label>

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-4 rounded-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-indigo-300"
            placeholder="Enter your email"
          />

          {emailError && (
            <p className="text-red-200 text-sm mt-1">{emailError}</p>
          )}

          {/* Password */}
          <label className="block mt-6 mb-2 text-lg">Password</label>

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-4 rounded-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-indigo-300"
            placeholder="Enter your password"
          />

          {passwordError && (
            <p className="text-red-200 text-sm mt-1">{passwordError}</p>
          )}

          {/* Register Button */}
          {/* <button
            type="submit"
            className="w-full mt-10 bg-indigo-400 hover:bg-indigo-500 py-3 rounded-lg text-lg transition"
          >
            Register Your Account
          </button> */}

          {/* Google Button */}
          {/* <button
            type="button"
            className="w-full mt-4 bg-indigo-300 hover:bg-indigo-400 py-3 rounded-lg text-lg transition"
          >
            🌐 Continue With Google
          </button> */}

          <Button type="submit" className="mt-10">
            Register Your Account
          </Button>

          <Button variant="secondary" className="mt-4">
            🌐 Continue With Google
          </Button>

          <p className="mt-6 text-center text-sm">
            Back to{" "}
            <Link href="/" className="underline">
              Home
            </Link>
          </p>
        </form>
      </div>

      {/* RIGHT SIDE IMAGE */}
      <div className="hidden md:block md:w-1/2 h-screen bg-gradient-to-br from-indigo-700 via-blue-700 to-purple-900 flex items-center justify-center">
        <img
          src="/reg.avif"
          className="w-full h-full object-cover"
          alt="register illustration"
        />
      </div>
    </div>
  );
}
