import Link from "next/link";

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-700 via-blue-700 to-purple-900 px-4 py-16 text-white">
      <div className="mx-auto max-w-4xl rounded-3xl border border-white/20 bg-white/10 p-10 backdrop-blur-lg shadow-xl">

        {/* Page Title */}
        <h1 className="text-3xl font-bold md:text-4xl">
          Terms and Conditions
        </h1>

        <p className="mt-6 text-blue-100">
          Welcome to <span className="font-semibold text-white">AlumniHub</span>.
          By accessing or using our platform, you agree to comply with the
          following terms and conditions. These rules ensure a safe,
          professional, and productive environment for alumni networking
          and communication.
        </p>

        {/* Terms Sections */}
        <div className="mt-10 space-y-8">

          <section>
            <h2 className="text-xl font-semibold text-white">
              1. Platform Usage
            </h2>
            <p className="mt-2 text-blue-100">
              AlumniHub is designed to connect alumni, manage alumni records,
              organize events, and share institutional updates. Users must use
              the platform only for legitimate alumni related activities.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">
              2. User Responsibilities
            </h2>
            <p className="mt-2 text-blue-100">
              Users are responsible for providing accurate and updated
              information such as contact details, graduation information,
              and professional background.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">
              3. Account Security
            </h2>
            <p className="mt-2 text-blue-100">
              Users must keep their login credentials secure. AlumniHub
              administrators are not responsible for unauthorized access
              caused by sharing account details.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">
              4. Content and Communication
            </h2>
            <p className="mt-2 text-blue-100">
              Users must communicate respectfully and avoid posting
              inappropriate or misleading information within the alumni
              platform.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">
              5. Policy Updates
            </h2>
            <p className="mt-2 text-blue-100">
              AlumniHub may update these terms when system features or
              policies change. Continued use of the platform indicates
              acceptance of the updated terms.
            </p>
          </section>

        </div>

        {/* Footer Section */}
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