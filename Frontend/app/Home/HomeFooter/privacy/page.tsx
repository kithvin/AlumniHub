import Link from "next/link";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-700 via-blue-700 to-purple-900 px-4 py-16 text-white">
      <div className="mx-auto max-w-4xl rounded-3xl border border-white/20 bg-white/10 p-10 backdrop-blur-lg shadow-xl">

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold mb-6">
          Privacy Policy
        </h1>

        <p className="text-blue-100 mb-8">
          At <span className="font-semibold text-white">AlumniHub</span>, we value
          your privacy and are committed to protecting your personal information.
          This Privacy Policy explains how we collect, use, and safeguard your
          information when you use our Alumni Management Platform.
        </p>

        {/* Section 1 */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">1. Information We Collect</h2>
          <p className="text-blue-100">
            We may collect personal information such as your name, email address,
            graduation details, professional information, and other details
            required to maintain alumni records and improve our services.
          </p>
        </section>

        {/* Section 2 */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">2. How We Use Your Information</h2>
          <p className="text-blue-100">
            The information we collect is used to manage alumni profiles,
            organize alumni events, provide job opportunities, share news and
            updates, and enhance engagement between alumni and the institution.
          </p>
        </section>

        {/* Section 3 */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">3. Data Protection</h2>
          <p className="text-blue-100">
            We implement appropriate security measures to protect your data from
            unauthorized access, disclosure, or alteration. Your information is
            stored securely and accessed only by authorized administrators.
          </p>
        </section>

        {/* Section 4 */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">4. Third Party Services</h2>
          <p className="text-blue-100">
            Our platform may integrate with trusted third-party services for
            authentication, analytics, or communication purposes. These services
            follow their own privacy policies regarding your information.
          </p>
        </section>

        {/* Section 5 */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-3">5. Updates to This Policy</h2>
          <p className="text-blue-100">
            We may update this Privacy Policy periodically to reflect system
            improvements or legal requirements. Users will be notified of
            significant changes through the platform.
          </p>
        </section>

        {/* Footer Actions */}
        <div className="border-t border-white/20 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
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