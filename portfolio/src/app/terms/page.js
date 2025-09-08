"use client";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white py-12 px-6">
      <div className="max-w-3xl mx-auto bg-white/10 backdrop-blur-lg border border-pink-400/30 rounded-2xl p-8 shadow-lg">
        <h1 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-500 to-blue-500 mb-8">
          Terms of Service
        </h1>

        <p className="mb-4 text-gray-300">
          Your privacy is very important to us. This Terms of Service explains how{" "}
          <strong>SteffyJK</strong> collects, uses, and protects your data when
          you use our services, including payments managed through{" "}
          <strong>Billing Plateform</strong>.
        </p>

        <h2 className="text-2xl font-semibold text-purple-400 mt-6 mb-2">
          1. Information We Collect
        </h2>
        <p className="mb-4 text-gray-300">
          When you make a purchase or subscribe, we may collect personal
          information such as your name, email, billing address, and payment
          details. This information is securely processed through{" "}
          <strong>Any Billing</strong> and our payment partners (e.g.,
          Razorpay, Stripe).
        </p>

        <h2 className="text-2xl font-semibold text-purple-400 mt-6 mb-2">
          2. How We Use Your Information
        </h2>
        <ul className="list-disc list-inside mb-4 text-gray-300 space-y-2">
          <li>To process subscriptions and payments.</li>
          <li>To send invoices, receipts, and account-related notifications.</li>
          <li>To provide customer support and resolve issues.</li>
          <li>To comply with legal and tax regulations.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-purple-400 mt-6 mb-2">
          3. Data Security
        </h2>
        <p className="mb-4 text-gray-300">
          We implement strong security measures to protect your data. Any
          Billing uses industry-standard encryption (SSL/TLS) to secure
          transactions. We do not store your card details on our servers — they
          are handled directly by trusted payment gateways.
        </p>

        <h2 className="text-2xl font-semibold text-purple-400 mt-6 mb-2">
          4. Third-Party Services
        </h2>
        <p className="mb-4 text-gray-300">
          We may share limited data with trusted third parties such as payment
          gateways, banks, or tax authorities, strictly for processing payments
          and regulatory compliance. These services follow their own privacy
          policies.
        </p>

        <h2 className="text-2xl font-semibold text-purple-400 mt-6 mb-2">
          5. Your Rights
        </h2>
        <p className="mb-4 text-gray-300">
          You have the right to access, correct, or request deletion of your
          personal data (except when required for compliance or tax records).
          Please reach out to us for such requests.
        </p>

        <h2 className="text-2xl font-semibold text-purple-400 mt-6 mb-2">
          6. Policy Updates
        </h2>
        <p className="mb-4 text-gray-300">
          We may update this Terms of Service occasionally. Any changes will be
          reflected on this page with an updated effective date.
        </p>

        <p className="mt-8 text-gray-400">
          Questions? Contact us at{" "}
          <a
            href="mailto:steffy.jk2018@gmail.com"
            className="text-blue-400 hover:text-blue-300"
          >
            steffyjk.2018@gmail.com
          </a>
        </p>
      </div>
    </main>
  );
}
