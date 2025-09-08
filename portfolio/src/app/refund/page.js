"use client";

export default function RefundPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white py-12 px-6">
      <div className="max-w-3xl mx-auto bg-white/10 backdrop-blur-lg border border-blue-400/30 rounded-2xl p-8 shadow-lg">
        <h1 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 mb-8">
          Refund & Cancellation Policy
        </h1>

        <p className="mb-4 text-gray-300">
          At <strong>SteffyJK</strong>, we value customer satisfaction and
          transparency. This Refund & Cancellation Policy explains how we handle
          subscription cancellations, payment errors, and refunds when using{" "}
          <strong>Zoho Billing</strong> and our payment partners (Razorpay,
          Stripe, etc.).
        </p>

        <h2 className="text-2xl font-semibold text-blue-400 mt-6 mb-2">
          1. Subscription Cancellations
        </h2>
        <p className="mb-4 text-gray-300">
          Customers can cancel their subscription at any time from their account
          dashboard or by contacting us at{" "}
          <a
            href="mailto:steffy.jk2018@gmail.com"
            className="text-pink-400 hover:text-pink-300"
          >
            steffy.jk2018@gmail.com
          </a>
          . Cancellations will stop future billing, but already paid amounts are
          non-refundable unless otherwise stated.
        </p>

        <h2 className="text-2xl font-semibold text-blue-400 mt-6 mb-2">
          2. Refund Eligibility
        </h2>
        <ul className="list-disc list-inside mb-4 text-gray-300 space-y-2">
          <li>
            Refunds are provided only in cases of duplicate payments, failed
            transactions, or service errors.
          </li>
          <li>
            No refunds are given for partial usage of a subscription cycle.
          </li>
          <li>
            Digital services once delivered (e.g., project handover,
            consultation) are non-refundable.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-blue-400 mt-6 mb-2">
          3. Processing of Refunds
        </h2>
        <p className="mb-4 text-gray-300">
          Eligible refunds will be processed back to the original payment method
          (Razorpay, Stripe, credit/debit card, UPI, etc.) within{" "}
          <strong>7–10 business days</strong>, depending on the bank/payment
          provider’s policies.
        </p>

        <h2 className="text-2xl font-semibold text-blue-400 mt-6 mb-2">
          4. Failed or Declined Payments
        </h2>
        <p className="mb-4 text-gray-300">
          If a payment fails or is declined, no service will be activated. You
          may retry the payment or use an alternative method. Any duplicate
          charges caused by gateway issues will be refunded automatically or on
          request.
        </p>

        <h2 className="text-2xl font-semibold text-blue-400 mt-6 mb-2">
          5. Contact for Refunds
        </h2>
        <p className="mb-4 text-gray-300">
          If you believe you are eligible for a refund, please contact our
          support team at{" "}
          <a
            href="mailto:steffy.jk2018@gmail.com"
            className="text-pink-400 hover:text-pink-300"
          >
            steffy.jk2018@gmail.com
          </a>{" "}
          with your payment reference number, and we will review your request.
        </p>

        <p className="mt-8 text-gray-400">
          <em>
            Note: This policy is subject to change to comply with updates in
            payment gateway, Zoho Billing, and regulatory guidelines.
          </em>
        </p>
      </div>
    </main>
  );
}
