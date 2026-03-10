"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import toast from "react-hot-toast";

export default function AdminLoginPage() {
  const router = useRouter(); 
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    setErrors({
      ...errors,
      [name]: "",
    });

    setSuccessMessage("");
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = {
      email: "",
      password: "",
    };

    if (!formData.email.trim()) {
      newErrors.email = "Admin email is required";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
      valid = false;
    }

    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
      valid = false;
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error("Please fill all required fields");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/admin/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        setSuccessMessage("Login successful");

       
        toast.success("Admin login successful");

        router.push("/AdminDashbord");
      } else {
       
        toast.error(data.message || "Login failed");
      }
    } catch (error) {
      console.log(error);

      
      toast.error("Server error");
    }
  };

  return (
    <div className="flex min-h-screen flex-col md:flex-row">
      {/* LEFT SIDE */}
      <div className="flex w-full flex-col justify-center bg-indigo-700 px-8 py-12 text-white md:w-1/2 md:px-16">
        <h1 className="text-center text-4xl font-semibold leading-tight md:text-5xl">
          Alumni Management System
          <br />
          with Event Management
        </h1>

        <div className="mt-8 flex flex-col justify-center gap-3 text-center text-lg sm:flex-row sm:gap-10">
          <span>Welcome Admin</span>
        </div>

        <form onSubmit={handleSubmit} className="mx-auto mt-10 w-full max-w-md">
          <label className="mb-2 block text-lg">Admin Email</label>
          <input
            type="text"
            name="email"
            placeholder="Enter admin email"
            value={formData.email}
            onChange={handleChange}
            className="w-full rounded bg-white p-4 text-black outline-none"
          />
          {errors.email && (
            <p className="mt-2 text-sm text-red-200">{errors.email}</p>
          )}

          <label className="mt-6 mb-2 block text-lg">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            value={formData.password}
            onChange={handleChange}
            className="w-full rounded bg-white p-4 text-black outline-none"
          />
          {errors.password && (
            <p className="mt-2 text-sm text-red-200">{errors.password}</p>
          )}

          <button
            type="submit"
            className="mt-10 w-full rounded bg-indigo-400 p-4 text-2xl font-medium text-white transition hover:bg-indigo-300"
          >
            Admin Login
          </button>

          <button
            type="button"
            className="mt-5 w-full rounded bg-indigo-300 p-4 text-xl font-medium text-white transition hover:bg-indigo-200"
          >
            🌐 Continue With Google
          </button>

          {successMessage && (
            <p className="mt-4 text-center text-sm text-green-200">
              {successMessage}
            </p>
          )}

          <p className="mt-6 text-center text-sm">
            Back to{" "}
            <Link href="/" className="underline">
              Home
            </Link>
          </p>
        </form>
      </div>

      {/* RIGHT SIDE */}
      <div className="relative hidden min-h-screen w-full bg-gray-100 md:block md:w-1/2">
        <Image
          src="/admin.png"
          alt="Admin Login Illustration"
          fill
          priority
          className="object-cover"
        />
      </div>
    </div>
  );
}
