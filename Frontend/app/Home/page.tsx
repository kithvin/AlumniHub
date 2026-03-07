import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      {/* Navbar */}
      <header className="w-full border-b border-slate-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <h1 className="text-2xl font-bold text-blue-700">AlumniHub</h1>

          <nav className="hidden gap-8 md:flex">
            <a href="#about" className="hover:text-blue-700">
              About
            </a>
            <a href="#features" className="hover:text-blue-700">
              Features
            </a>
            <a href="#events" className="hover:text-blue-700">
              Events
            </a>
            <a href="#contact" className="hover:text-blue-700">
              Contact
            </a>
          </nav>

          <div className="flex gap-3">
            <Link
              href="/Userlogin"
              className="rounded-lg border border-blue-600 px-4 py-2 text-blue-700 transition hover:bg-blue-50"
            >
              Login
            </Link>
            <Link
              href="/UserRegister"
              className="rounded-lg bg-blue-700 px-4 py-2 text-white transition hover:bg-blue-800"
            >
              Register
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 py-16 md:grid-cols-2 md:py-24">
        <div>
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
            Alumni Management System
          </span>

          <h2 className="mt-6 text-4xl font-bold leading-tight text-slate-900 md:text-6xl">
            Connect Alumni,
            <br />
            Manage Events,
            <br />
            Build Community
          </h2>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
            A modern platform to manage alumni profiles, organize reunions and
            events, share announcements, and keep your alumni network connected
            with your institution.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/UserRegister"
              className="rounded-xl bg-blue-700 px-6 py-3 text-center text-white shadow-md transition hover:bg-blue-800"
            >
              Get Started
            </Link>

            <Link
              href="/Userlogin"
              className="rounded-xl border border-slate-300 bg-white px-6 py-3 text-center text-slate-700 transition hover:bg-slate-100"
            >
              Explore Platform
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-4">
            <div className="rounded-2xl bg-white p-4 shadow-sm">
              <h3 className="text-2xl font-bold text-blue-700">1000+</h3>
              <p className="text-sm text-slate-500">Alumni Members</p>
            </div>
            <div className="rounded-2xl bg-white p-4 shadow-sm">
              <h3 className="text-2xl font-bold text-blue-700">50+</h3>
              <p className="text-sm text-slate-500">Events Hosted</p>
            </div>
            <div className="rounded-2xl bg-white p-4 shadow-sm">
              <h3 className="text-2xl font-bold text-blue-700">24/7</h3>
              <p className="text-sm text-slate-500">Easy Access</p>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="rounded-[30px] bg-gradient-to-br from-blue-100 to-indigo-100 p-6 shadow-xl">
            <Image
              src="/alumni-hero.png"
              alt="Alumni Management"
              width={600}
              height={500}
              className="h-auto w-full max-w-[550px] rounded-2xl object-contain"
              priority
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
            About the System
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-slate-600">
            This system helps schools, colleges, and universities manage alumni
            information, maintain relationships, and organize events in a simple
            and efficient way.
          </p>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-16">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-center text-3xl font-bold text-slate-900 md:text-4xl">
            Key Features
          </h2>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-blue-700">
                Alumni Profiles
              </h3>
              <p className="mt-3 text-slate-600">
                Manage alumni details, education history, and contact
                information in one place.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-blue-700">
                Event Management
              </h3>
              <p className="mt-3 text-slate-600">
                Create, manage, and promote reunions, seminars, and alumni
                meetups easily.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-blue-700">
                Announcements
              </h3>
              <p className="mt-3 text-slate-600">
                Share important updates, news, and opportunities with the alumni
                community.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-blue-700">
                Easy Communication
              </h3>
              <p className="mt-3 text-slate-600">
                Improve engagement between alumni and the institution through a
                central platform.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="bg-blue-700 py-16 text-white">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">Upcoming Alumni Events</h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-blue-100">
            Keep track of reunions, workshops, networking sessions, and special
            gatherings through one easy to use system.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="rounded-2xl bg-white/10 p-6 backdrop-blur-sm">
              <h3 className="text-xl font-semibold">Annual Reunion</h3>
              <p className="mt-2 text-blue-100">Reconnect with old friends and lecturers.</p>
            </div>

            <div className="rounded-2xl bg-white/10 p-6 backdrop-blur-sm">
              <h3 className="text-xl font-semibold">Career Networking</h3>
              <p className="mt-2 text-blue-100">Build professional connections with alumni.</p>
            </div>

            <div className="rounded-2xl bg-white/10 p-6 backdrop-blur-sm">
              <h3 className="text-xl font-semibold">Special Meetups</h3>
              <p className="mt-2 text-blue-100">Join department and batch-based gatherings.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl rounded-3xl bg-white px-6 py-12 text-center shadow-lg">
          <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
            Start Building Your Alumni Network Today
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Manage alumni records, organize events, and strengthen your
            institution’s community with one modern platform.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/UserRegister"
              className="rounded-xl bg-blue-700 px-6 py-3 text-white transition hover:bg-blue-800"
            >
              Create Account
            </Link>
            <Link
              href="/Adminlogin"
              className="rounded-xl border border-slate-300 px-6 py-3 text-slate-700 transition hover:bg-slate-100"
            >
              Admin Login
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 md:flex-row md:items-center md:justify-between">
          <p className="text-slate-600">
            © 2026 AlumniHub. All rights reserved.
          </p>
          <div className="flex gap-6 text-slate-600">
            <a href="#" className="hover:text-blue-700">
              Privacy
            </a>
            <a href="#" className="hover:text-blue-700">
              Terms
            </a>
            <a href="#" className="hover:text-blue-700">
              Support
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}