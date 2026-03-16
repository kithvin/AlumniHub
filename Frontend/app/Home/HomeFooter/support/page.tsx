import Link from "next/link";

export default function SupportPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-700 via-blue-700 to-purple-900 px-4 py-16 text-white">
      <div className="mx-auto max-w-4xl rounded-3xl border border-white/20 bg-white/10 p-10 backdrop-blur-lg shadow-xl">

        {/* Page Title */}
        <h1 className="text-3xl font-bold md:text-4xl">
          Support Center
        </h1>

        <p className="mt-6 text-blue-100">
          Welcome to the <span className="font-semibold text-white">AlumniHub Support Center</span>.
          Our team is here to help you with account access, alumni records,
          event participation, and any technical issues you may experience.
        </p>

        {/* Support Sections */}
        <div className="mt-10 space-y-8">

          <section>
            <h2 className="text-xl font-semibold text-white">
              1. Account Assistance
            </h2>
            <p className="mt-2 text-blue-100">
              If you are experiencing login problems, password issues,
              or account access errors, please contact our support team
              for assistance.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">
              2. Event Registration Help
            </h2>
            <p className="mt-2 text-blue-100">
              AlumniHub allows users to register for alumni events and
              reunions. If you encounter any problems during event
              registration, our support team will guide you through
              the process.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">
              3. Alumni Profile Updates
            </h2>
            <p className="mt-2 text-blue-100">
              If you need help updating your alumni profile, graduation
              details, or professional information, please contact the
              administration team.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">
              4. Contact Support
            </h2>
            <p className="mt-2 text-blue-100">
              You can reach our support team through the following channels:
            </p>

            <div className="mt-4 space-y-2 text-blue-100">
              <p>📧 Email: support@alumnihub.com</p>
              <p>📞 Phone: +94 77 123 4567</p>
              <p>📍 Location: Colombo, Sri Lanka</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">
              5. Working Hours
            </h2>
            <p className="mt-2 text-blue-100">
              Our support team is available during the following hours:
            </p>

            <div className="mt-2 text-blue-100">
              Monday – Friday: 8:30 AM – 5:00 PM <br />
              Saturday: 9:00 AM – 1:00 PM
            </div>
          </section>

        </div>

        {/* Footer */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/20 pt-6 md:flex-row">
          <p className="text-sm text-blue-200">
            © {new Date().getFullYear()} AlumniHub. All rights reserved.
          </p>

          <Link
            href="/"
            className="rounded-xl border border-white/40 px-6 py-3 text-center text-white transition hover:bg-white/20"
          >
            Back to Home
          </Link>
        </div>

      </div>
    </main>
  );
}