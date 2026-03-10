// import Image from "next/image";
// import Link from "next/link";
// import { GraduationCap, Network } from "lucide-react";

// export default function HomePage() {
//   return (
//     <main className="min-h-screen bg-gradient-to-br from-indigo-700 via-blue-700 to-purple-900 text-white">
//       {/* Navbar */}
//       <header className="w-full border-b border-white/20 bg-white/10 backdrop-blur">
//         <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-4 sm:px-6">
//           {/* LOGO */}
//           <div className="flex items-center gap-3 text-white">
//             <GraduationCap size={32} className="text-blue-200" />
//             <h1 className="text-xl font-bold sm:text-2xl">AlumniHub</h1>
//           </div>

//           <nav className="hidden gap-6 font-semibold md:flex lg:gap-8">
            
//             <a href="#about" className="hover:text-blue-200">
//               About
//             </a>
//             <a href="#features" className="hover:text-blue-200">
//               Features
//             </a>
//             <a href="#events" className="hover:text-blue-200">
//               Events
//             </a>
//             <a href="#contact" className="hover:text-blue-200">
//               Contact
//             </a>
//           </nav>

         
//           <div className="flex w-full gap-3 sm:w-auto">
//             <Link
//               href="/Adminlogin"
//               className="flex-1 rounded-lg border border-blue-200/60 px-4 py-2 text-center text-white transition hover:bg-white/20 sm:flex-none"
//             >
//               Admin Login
//             </Link>

//             <Link
//               href="/Userlogin"
//               className="flex-1 rounded-lg border border-white/40 px-4 py-2 text-center text-white transition hover:bg-white/20 sm:flex-none"
//             >
//               Login
//             </Link>

//             <Link
//               href="/UserRegister"
//               className="flex-1 rounded-lg bg-white px-4 py-2 text-center font-medium text-indigo-700 transition hover:bg-gray-100 sm:flex-none"
//             >
//               Register
//             </Link>
//           </div>
//         </div>
//       </header>

//       {/* Hero Section */}
      
//       <section className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 py-12 sm:px-6 md:grid-cols-2 md:py-24">
//         <div>
//           <span className="flex w-fit items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-sm font-medium">
//             <Network size={16} className="text-blue-200" />
//             Alumni Management System
//           </span>

//           <h2 className="mt-6 text-3xl font-bold leading-tight sm:text-4xl md:text-6xl">
//             Connect Alumni,
//             <br />
//             Manage Events,
//             <br />
//             Build Community
//           </h2>

//           <p className="mt-6 max-w-xl text-base leading-7 text-blue-100 sm:text-lg sm:leading-8">
//             A modern platform to manage alumni profiles, organize reunions and
//             events, share announcements, and keep your alumni network connected
//             with your institution.
//           </p>

//           <div className="mt-8 flex flex-col gap-4 sm:flex-row">
//             <Link
//               href="/UserRegister"
//               className="rounded-xl bg-white px-6 py-3 text-center font-medium text-indigo-700 shadow-md transition hover:bg-gray-100"
//             >
//               Get Started
//             </Link>

//             <Link
//               href="/Userlogin"
//               className="rounded-xl border border-white/40 px-6 py-3 text-center text-white transition hover:bg-white/20"
//             >
//               Explore Platform
//             </Link>
//           </div>

//           {/* Stats */}
//           <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
//             <div className="rounded-2xl bg-white/20 p-4 backdrop-blur">
//               <h3 className="text-2xl font-bold">1000+</h3>
//               <p className="text-sm text-blue-100">Alumni Members</p>
//             </div>

//             <div className="rounded-2xl bg-white/20 p-4 backdrop-blur">
//               <h3 className="text-2xl font-bold">50+</h3>
//               <p className="text-sm text-blue-100">Events Hosted</p>
//             </div>

//             <div className="rounded-2xl bg-white/20 p-4 backdrop-blur">
//               <h3 className="text-2xl font-bold">24/7</h3>
//               <p className="text-sm text-blue-100">Easy Access</p>
//             </div>
//           </div>
//         </div>

//         {/* Hero Image */}
//         <div className="flex justify-center">
//           <div className="w-full max-w-[600px] rounded-[30px] bg-white/20 p-4 shadow-xl backdrop-blur sm:p-6">
//             <Image
//               src="/alumni-hero.png"
//               alt="Alumni Management"
//               width={600}
//               height={500}
//               className="h-auto w-full rounded-2xl object-contain"
//               priority
//             />
//           </div>
//         </div>
//       </section>

//       {/* About Section */}
      
//       <section id="about" className="scroll-mt-24 py-16 text-center">
//         <div className="mx-auto max-w-7xl px-4 sm:px-6">
//           <h2 className="text-3xl font-bold md:text-4xl">About the System</h2>

//           <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-blue-100 sm:text-lg sm:leading-8">
//             This system helps schools, colleges, and universities manage alumni
//             information, maintain relationships, and organize events in a simple
//             and efficient way.
//           </p>
//         </div>
//       </section>

//       {/* Features */}
     
//       <section id="features" className="scroll-mt-24 py-16">
//         <div className="mx-auto max-w-7xl px-4 sm:px-6">
//           <h2 className="text-center text-3xl font-bold md:text-4xl">
//             Key Features
//           </h2>

//           <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
//             <div className="rounded-2xl bg-white p-6 text-slate-800 shadow-sm">
//               <h3 className="text-xl font-semibold text-blue-700">
//                 Alumni Profiles
//               </h3>
//               <p className="mt-3">
//                 Manage alumni details and contact information in one place.
//               </p>
//             </div>

//             <div className="rounded-2xl bg-white p-6 text-slate-800 shadow-sm">
//               <h3 className="text-xl font-semibold text-blue-700">
//                 Event Management
//               </h3>
//               <p className="mt-3">
//                 Create and manage reunions, seminars, and alumni meetups.
//               </p>
//             </div>

//             <div className="rounded-2xl bg-white p-6 text-slate-800 shadow-sm">
//               <h3 className="text-xl font-semibold text-blue-700">
//                 Announcements
//               </h3>
//               <p className="mt-3">
//                 Share important updates and opportunities with alumni.
//               </p>
//             </div>

//             <div className="rounded-2xl bg-white p-6 text-slate-800 shadow-sm">
//               <h3 className="text-xl font-semibold text-blue-700">
//                 Easy Communication
//               </h3>
//               <p className="mt-3">
//                 Improve engagement between alumni and institutions.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Events */}
     
//       <section
//         id="events"
//         className="scroll-mt-24 from-indigo-700 via-blue-600 py-16 text-white"
//       >
//         <div className="mx-auto max-w-7xl px-4 text-center sm:px-6">
//           <h2 className="text-3xl font-bold md:text-4xl">
//             Upcoming Alumni Events
//           </h2>

//           <p className="mx-auto mt-4 max-w-3xl text-base text-blue-100 sm:text-lg">
//             Track reunions, networking sessions and alumni meetups easily.
//           </p>

//           <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
//             <div className="rounded-2xl bg-white/10 p-6 backdrop-blur-sm">
//               <h3 className="text-xl font-semibold">Annual Reunion</h3>
//               <p className="mt-2 text-blue-100">
//                 Reconnect with old friends and lecturers.
//               </p>
//             </div>

//             <div className="rounded-2xl bg-white/10 p-6 backdrop-blur-sm">
//               <h3 className="text-xl font-semibold">Career Networking</h3>
//               <p className="mt-2 text-blue-100">
//                 Build professional connections with alumni.
//               </p>
//             </div>

//             <div className="rounded-2xl bg-white/10 p-6 backdrop-blur-sm">
//               <h3 className="text-xl font-semibold">Special Meetups</h3>
//               <p className="mt-2 text-blue-100">
//                 Join department and batch-based gatherings.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer id="contact" className="scroll-mt-24 border-t border-white/20 bg-white/10">
//         <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-8 sm:px-6 md:flex-row md:items-center md:justify-between">
//           <p className="text-center font-semibold md:text-left">
//             © 2026 AlumniHub. All rights reserved.
//           </p>

//           <div className="flex justify-center gap-6 font-semibold md:justify-end">
//             <a href="#" className="hover:text-blue-200">
//               Privacy
//             </a>
//             <a href="#" className="hover:text-blue-200">
//               Terms
//             </a>
//             <a href="#" className="hover:text-blue-200">
//               Support
//             </a>
//           </div>
//         </div>
//       </footer>
//     </main>
//   );
// }

import Image from "next/image";
import Link from "next/link";
import { GraduationCap, Network } from "lucide-react";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-700 via-blue-700 to-purple-900 text-white">
      {/* Navbar */}
      <header className="w-full border-b border-white/20 bg-white/10 backdrop-blur">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-4 sm:px-6">
          {/* LOGO */}
          <div className="flex items-center gap-3 text-white">
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
          <span className="flex w-fit items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-sm font-medium">
            <Network size={16} className="text-blue-200" />
            Alumni Management System
          </span>

          <h2 className="mt-6 text-3xl font-bold leading-tight sm:text-4xl md:text-6xl">
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
      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 scroll-mt-24 py-16">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-[2fr_1fr]">
          {/* Left Large Image */}
          <div className="relative overflow-hidden rounded-3xl bg-white/10 shadow-xl">
            <Image
              src="/alumni-hero.png"
              alt="Alumni Community"
              width={900}
              height={520}
              className="h-full min-h-[320px] w-full object-cover"
            />

            <div className="absolute inset-0 bg-black/20" />

            <div className="absolute left-6 top-6 z-10 max-w-md">
              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                Join the Alumni Network
              </h2>

              <p className="mt-3 text-sm leading-6 text-blue-100 sm:text-base">
                Connect with graduates, attend events, discover opportunities,
                and grow your professional network.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/Adminlogin"
                  className="rounded-lg bg-black px-5 py-3 text-center font-medium text-white transition hover:bg-gray-900"
                >
                  Admin Login
                </Link>

                <Link
                  href="/UserRegister"
                  className="rounded-lg bg-white px-5 py-3 text-center font-medium text-black transition hover:bg-gray-100"
                >
                  Enroll
                </Link>
              </div>
            </div>
          </div>

          {/* Right Images */}
          <div className="grid grid-cols-1 gap-6">
            <div className="relative overflow-hidden rounded-3xl bg-white/10 shadow-xl">
              <Image
                src="/admin.png"
                alt="Admin Panel"
                width={420}
                height={250}
                className="h-[220px] w-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20" />
              <h3 className="absolute left-4 top-4 z-10 text-2xl font-bold text-white">
                Admin
                <br />
                Access
              </h3>
            </div>

            <div className="relative overflow-hidden rounded-3xl bg-white/10 shadow-xl">
              <Image
                src="/alumni-hero.png"
                alt="Alumni Events"
                width={420}
                height={250}
                className="h-[220px] w-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20" />
              <h3 className="absolute left-4 top-4 z-10 text-2xl font-bold text-white">
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
                Join department and batch-based gatherings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        id="contact"
        className="scroll-mt-24 border-t border-white/20 bg-white/10"
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-8 sm:px-6 md:flex-row md:items-center md:justify-between">
          <p className="text-center font-semibold md:text-left">
            © 2026 AlumniHub. All rights reserved.
          </p>

          <div className="flex justify-center gap-6 font-semibold md:justify-end">
            <a href="#" className="hover:text-blue-200">
              Privacy
            </a>
            <a href="#" className="hover:text-blue-200">
              Terms
            </a>
            <a href="#" className="hover:text-blue-200">
              Support
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}