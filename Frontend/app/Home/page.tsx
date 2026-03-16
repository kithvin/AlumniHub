"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { GraduationCap, Network } from "lucide-react";

export default function HomePage() {
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [contactErrors, setContactErrors] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleContactChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setContactForm({
      ...contactForm,
      [name]: value,
    });

    setContactErrors({
      ...contactErrors,
      [name]: "",
    });
  };

  const validateContactForm = () => {
    let valid = true;

    const newErrors = {
      name: "",
      email: "",
      subject: "",
      message: "",
    };

    if (!contactForm.name.trim()) {
      newErrors.name = "Full name is required";
      valid = false;
    }

    if (!contactForm.email.trim()) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(contactForm.email)) {
      newErrors.email = "Please enter a valid email";
      valid = false;
    }

    if (!contactForm.subject.trim()) {
      newErrors.subject = "Subject is required";
      valid = false;
    }

    if (!contactForm.message.trim()) {
      newErrors.message = "Message is required";
      valid = false;
    } else if (contactForm.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
      valid = false;
    }

    setContactErrors(newErrors);
    return valid;
  };

  const handleContactSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateContactForm()) return;

    console.log("Contact Form Data:", contactForm);

    setContactForm({
      name: "",
      email: "",
      subject: "",
      message: "",
    });

    setContactErrors({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-700 via-blue-700 to-purple-900 text-white">
      {/* Navbar */}
      <header className="w-full border-b border-white/20 bg-white/10 backdrop-blur">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-4 sm:px-6">
          {/* LOGO */}
          {/* <div className="flex items-center sm:justify-center gap-3 text-white">
            <GraduationCap size={32} className="text-blue-200" />
            <h1 className="text-xl font-bold sm:text-2xl">AlumniHub</h1>
          </div> */}

          {/* LOGO */}
          <div className="flex items-center gap-3 text-white mx-auto w-fit sm:mx-0">
            <GraduationCap size={32} className="text-blue-200" />
            <h1 className="text-xl font-bold sm:text-2xl">AlumniHub</h1>
          </div>

          <nav className="hidden gap-6 font-semibold md:flex lg:gap-8">
            <a href="#about" className="hover:text-blue-200">
              About
            </a>
            <a href="#features" className="hover:text-blue-200">
              Features
            </a>
            <a href="#events" className="hover:text-blue-200">
              Events
            </a>
            <a href="#contact" className="hover:text-blue-200">
              Contact
            </a>
          </nav>

          {/* Navbar buttons */}
          <div className="flex w-full gap-3 sm:w-auto">
            <Link
              href="/Userlogin"
              className="flex-1 rounded-lg border border-white/40 px-4 py-2 text-center text-white transition hover:bg-white/20 sm:flex-none"
            >
              Login
            </Link>

            <Link
              href="/UserRegister"
              className="flex-1 rounded-lg bg-white px-4 py-2 text-center font-medium text-indigo-700 transition hover:bg-gray-100 sm:flex-none"
            >
              Register
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section - unchanged */}
      <section className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 py-12 sm:px-6 md:grid-cols-2 md:py-24">
        <div>
          {/* <span className="flex w-fit items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-sm font-medium">
            <Network size={16} className="text-blue-200" />
            Alumni Management System
          </span> */}

          <span className="flex w-fit items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-sm font-medium mx-auto sm:mx-0">
            <Network size={16} className="text-blue-200" />
            Alumni Management System
          </span>

          {/* <h2 className="mt-6 text-3xl font-bold leading-tight sm:text-4xl md:text-6xl">
            Connect Alumni,
            <br />
            Manage Events,
            <br />
            Build Community
          </h2>

          <p className="mt-6 max-w-xl text-base leading-7 text-blue-100 sm:text-lg sm:leading-8">
            A modern platform to manage alumni profiles, organize reunions and
            events, share announcements, and keep your alumni network connected
            with your institution.
          </p> */}

          <h2 className="mt-6 text-3xl font-bold leading-tight text-center sm:text-left sm:text-4xl md:text-6xl">
            Connect Alumni,
            <br />
            Manage Events,
            <br />
            Build Community
          </h2>

          <p className="mt-6 max-w-xl text-base leading-7 text-blue-100 text-center sm:text-left sm:text-lg sm:leading-8">
            A modern platform to manage alumni profiles, organize reunions and
            events, share announcements, and keep your alumni network connected
            with your institution.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/UserRegister"
              className="rounded-xl bg-white px-6 py-3 text-center font-medium text-indigo-700 shadow-md transition hover:bg-gray-100"
            >
              Get Started
            </Link>

            <Link
              href="/Userlogin"
              className="rounded-xl border border-white/40 px-6 py-3 text-center text-white transition hover:bg-white/20"
            >
              Explore Platform
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="rounded-2xl bg-white/20 p-4 backdrop-blur">
              <h3 className="text-2xl font-bold">1000+</h3>
              <p className="text-sm text-blue-100">Alumni Members</p>
            </div>

            <div className="rounded-2xl bg-white/20 p-4 backdrop-blur">
              <h3 className="text-2xl font-bold">50+</h3>
              <p className="text-sm text-blue-100">Events Hosted</p>
            </div>

            <div className="rounded-2xl bg-white/20 p-4 backdrop-blur">
              <h3 className="text-2xl font-bold">24/7</h3>
              <p className="text-sm text-blue-100">Easy Access</p>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="flex justify-center">
          <div className="w-full max-w-[600px] rounded-[30px] bg-white/20 p-4 shadow-xl backdrop-blur sm:p-6">
            <Image
              src="/alumni-hero.png"
              alt="Alumni Management"
              width={600}
              height={500}
              className="h-auto w-full rounded-2xl object-contain"
              priority
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="scroll-mt-24 py-16 text-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="text-3xl font-bold md:text-4xl">About the System</h2>

          <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-blue-100 sm:text-lg sm:leading-8">
            This system helps schools, colleges, and universities manage alumni
            information, maintain relationships, and organize events in a simple
            and efficient way.
          </p>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="scroll-mt-24 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="text-center text-3xl font-bold md:text-4xl">
            Key Features
          </h2>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl bg-white p-6 text-slate-800 shadow-sm">
              <h3 className="text-xl font-semibold text-blue-700">
                Alumni Profiles
              </h3>
              <p className="mt-3">
                Manage alumni details and contact information in one place.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 text-slate-800 shadow-sm">
              <h3 className="text-xl font-semibold text-blue-700">
                Event Management
              </h3>
              <p className="mt-3">
                Create and manage reunions, seminars, and alumni meetups.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 text-slate-800 shadow-sm">
              <h3 className="text-xl font-semibold text-blue-700">
                Announcements
              </h3>
              <p className="mt-3">
                Share important updates and opportunities with alumni.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 text-slate-800 shadow-sm">
              <h3 className="text-xl font-semibold text-blue-700">
                Easy Communication
              </h3>
              <p className="mt-3">
                Improve engagement between alumni and institutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* New Grid Section added below hero */}

      {/* New Grid Section added below hero */}
      <section className="mx-auto max-w-7xl scroll-mt-24 px-4 py-16 pb-16 sm:px-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-[2fr_1fr]">
          {/* Left Large Image */}
          <div className="relative overflow-hidden rounded-3xl bg-white/10 shadow-xl">
            <Image
              src="/alu1.jpg"
              alt="Alumni Community"
              width={900}
              height={300}
              className="h-[420px] w-full object-cover sm:h-[520px] md:h-[800px]"
            />

            <div className="absolute inset-0 bg-black/30" />

            <div className="absolute left-4 right-4 top-4 z-10 max-w-md sm:left-6 sm:right-auto sm:top-6">
              <h2 className="text-center text-2xl font-bold text-white sm:text-left sm:text-3xl md:text-4xl">
                Join the Alumni Network
              </h2>

              <p className="mt-3 text-center text-sm leading-6 text-blue-100 sm:text-left sm:text-base">
                Connect with graduates, attend events, discover opportunities,
                and grow your professional network.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/Adminlogin"
                  className="rounded-xl bg-white px-6 py-3 text-center font-medium text-indigo-700 shadow-md transition hover:bg-gray-100"
                >
                  Admin Login
                </Link>

                <Link
                  href="/UserRegister"
                  className="rounded-xl border border-white/40 px-6 py-3 text-center text-white transition hover:bg-white/20"
                >
                  Enroll Now
                </Link>
              </div>
            </div>
          </div>

          {/* Right Images */}
          <div className="grid grid-cols-1 gap-6 md:h-[800px] md:grid-rows-2">
            <div className="relative h-[250px] overflow-hidden rounded-3xl bg-white/10 shadow-xl sm:h-[300px] md:h-auto">
              <Image
                src="/alu2.jpg"
                alt="Admin Panel"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/30" />
              <h3 className="absolute left-4 top-4 z-10 text-xl font-bold text-white sm:text-2xl">
                Admin
                <br />
                Access
              </h3>
            </div>

            <div className="relative h-[250px] overflow-hidden rounded-3xl bg-white/10 shadow-xl sm:h-[300px] md:h-auto">
              <Image
                src="/alu3.jpg"
                alt="Alumni Events"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/30" />
              <h3 className="absolute left-4 top-4 z-10 text-xl font-bold text-white sm:text-2xl">
                Alumni
                <br />
                Events
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Events */}
      <section
        id="events"
        className="scroll-mt-24 from-indigo-700 via-blue-600 py-16 text-white"
      >
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6">
          <h2 className="text-3xl font-bold md:text-4xl">
            Upcoming Alumni Events
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-base text-blue-100 sm:text-lg">
            Track reunions, networking sessions and alumni meetups easily.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="rounded-2xl bg-white/10 p-6 backdrop-blur-sm">
              <h3 className="text-xl font-semibold">Annual Reunion</h3>
              <p className="mt-2 text-blue-100">
                Reconnect with old friends and lecturers.
              </p>
            </div>

            <div className="rounded-2xl bg-white/10 p-6 backdrop-blur-sm">
              <h3 className="text-xl font-semibold">Career Networking</h3>
              <p className="mt-2 text-blue-100">
                Build professional connections with alumni.
              </p>
            </div>

            <div className="rounded-2xl bg-white/10 p-6 backdrop-blur-sm">
              <h3 className="text-xl font-semibold">Special Meetups</h3>
              <p className="mt-2 text-blue-100">
                Join department and batch based gatherings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section id="contact" className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">Get in Touch</h2>
          <p className="mx-auto mt-4 max-w-2xl text-blue-100">
            Need help with event registration, alumni records, or account
            access? Our AlumniHub support team is here to assist you.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.05fr_1fr]">
          {/* Left Contact Info Card */}
          <div className="rounded-3xl border border-white/20 bg-white/10 p-8 shadow-xl backdrop-blur">
            <h3 className="text-2xl font-semibold text-white">
              Contact Information
            </h3>
            <p className="mt-3 text-blue-100">
              Reach out to the AlumniHub administration team for platform
              support, event details, and alumni network inquiries.
            </p>

            <div className="mt-8 space-y-6">
              <div className="flex items-start gap-4 rounded-2xl bg-white/10 p-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 text-xl">
                  📍
                </div>
                <div>
                  <h4 className="text-lg font-semibold">Office Location</h4>
                  <p className="mt-1 text-blue-100">
                    AlumniHub Administration Office
                    <br />
                    Colombo, Sri Lanka
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-2xl bg-white/10 p-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 text-xl">
                  📞
                </div>
                <div>
                  <h4 className="text-lg font-semibold">Phone Support</h4>
                  <p className="mt-1 text-blue-100">
                    +94 77 123 4567
                    <br />
                    +94 11 234 5678
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-2xl bg-white/10 p-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 text-xl">
                  ✉️
                </div>
                <div>
                  <h4 className="text-lg font-semibold">Email Address</h4>
                  <p className="mt-1 text-blue-100">
                    admin@alumnihub.com
                    <br />
                    support@alumnihub.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-2xl bg-white/10 p-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 text-xl">
                  🕒
                </div>
                <div>
                  <h4 className="text-lg font-semibold">Working Hours</h4>
                  <p className="mt-1 text-blue-100">
                    Monday - Friday: 8:30 AM - 5:00 PM
                    <br />
                    Saturday: 9:00 AM - 1:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form Card */}
          <div className="rounded-3xl border border-white/20 bg-white/10 p-8 shadow-xl backdrop-blur">
            <h3 className="text-2xl font-semibold text-white">
              Send a Message
            </h3>
            <p className="mt-3 text-blue-100">
              Fill out the form below and our team will get back to you soon.
            </p>

            <form onSubmit={handleContactSubmit} className="mt-8 space-y-5">
              <div>
                <label className="mb-2 block text-sm font-medium text-white">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={contactForm.name}
                  onChange={handleContactChange}
                  placeholder="Enter your name"
                  className="w-full rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-blue-200/70 outline-none transition focus:border-white/40"
                />
                {contactErrors.name && (
                  <p className="mt-2 text-sm text-red-300">
                    {contactErrors.name}
                  </p>
                )}
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-white">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={contactForm.email}
                  onChange={handleContactChange}
                  placeholder="Enter your email"
                  className="w-full rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-blue-200/70 outline-none transition focus:border-white/40"
                />
                {contactErrors.email && (
                  <p className="mt-2 text-sm text-red-300">
                    {contactErrors.email}
                  </p>
                )}
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-white">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={contactForm.subject}
                  onChange={handleContactChange}
                  placeholder="Enter subject"
                  className="w-full rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-blue-200/70 outline-none transition focus:border-white/40"
                />
                {contactErrors.subject && (
                  <p className="mt-2 text-sm text-red-300">
                    {contactErrors.subject}
                  </p>
                )}
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-white">
                  Message
                </label>
                <textarea
                  rows={5}
                  name="message"
                  value={contactForm.message}
                  onChange={handleContactChange}
                  placeholder="Write your message"
                  className="w-full rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-blue-200/70 outline-none transition focus:border-white/40"
                />
                {contactErrors.message && (
                  <p className="mt-2 text-sm text-red-300">
                    {contactErrors.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-white px-6 py-3 text-center font-semibold cursor-pointer text-indigo-700 shadow-md transition hover:bg-gray-100"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="scroll-mt-24 border-t border-white/20 bg-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-8 sm:px-6 md:flex-row md:items-center md:justify-between">
          <p className="text-center font-semibold md:text-left">
            © 2026 AlumniHub. All rights reserved.
          </p>

          <div className="flex justify-center gap-6 font-semibold md:justify-end">
            <Link
              href="/Home/HomeFooter/privacy"
              className="hover:text-blue-200"
            >
              Privacy
            </Link>
            <Link href="/Home/HomeFooter/terms" className="hover:text-blue-200">
              Terms
            </Link>
            <Link
              href="/Home/HomeFooter/support"
              className="hover:text-blue-200"
            >
              Support
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
