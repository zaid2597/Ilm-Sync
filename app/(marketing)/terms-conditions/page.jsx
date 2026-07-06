import Container from "@/components/shared/Container";

const sections = [
  {
    title: "1. Acceptance of Terms",
    body: [
      "By registering for and using Ilm Sync, your institute agrees to be bound by these Terms & Conditions. If you do not agree with any part of these terms, please do not use the platform.",
    ],
  },
  {
    title: "2. Description of Service",
    body: [
      "Ilm Sync is a school management platform that provides tools for attendance tracking, fee management, exam and result management, staff administration, and parent communication.",
      "We reserve the right to modify, add, or remove features at any time to improve the platform.",
    ],
  },
  {
    title: "3. Institute Responsibilities",
    body: [
      "Your institute is responsible for the accuracy of the data entered into Ilm Sync, including student, staff, and fee records.",
      "You are responsible for maintaining the confidentiality of your login credentials and for all activity that occurs under your account.",
    ],
  },
  {
    title: "4. Subscription and Payment",
    body: [
      "Access to Ilm Sync is provided on a subscription basis according to the plan selected by your institute. Fees are billed as agreed at the time of signup.",
      "Failure to pay subscription fees may result in suspension of access until payment is resolved.",
    ],
  },
  {
    title: "5. Data Ownership",
    body: [
      "All student, staff, and institute data entered into Ilm Sync remains the property of your institute. Ilm Sync acts only as a service provider processing this data on your behalf.",
    ],
  },
  {
    title: "6. Acceptable Use",
    body: [
      "You agree not to use Ilm Sync for any unlawful purpose or in a way that could damage, disable, or impair the platform for other institutes.",
    ],
  },
  {
    title: "7. Limitation of Liability",
    body: [
      "Ilm Sync is provided on an 'as is' basis. While we work to maintain high availability, we are not liable for indirect or consequential damages resulting from use of the platform.",
    ],
  },
  {
    title: "8. Termination",
    body: [
      "Either party may terminate the subscription according to the terms agreed at signup. Upon termination, your institute may request a full export of its data.",
    ],
  },
  {
    title: "9. Changes to These Terms",
    body: [
      "We may update these Terms & Conditions from time to time. Continued use of Ilm Sync after changes are published constitutes acceptance of the updated terms.",
    ],
  },
];

export default function TermsConditionsPage() {
  return (
    <section className="bg-white pt-16 pb-20 sm:pt-20">
      <Container>
        <div className="mx-auto max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-4 py-1.5 text-sm font-semibold text-brand-700 ring-1 ring-inset ring-brand-100">
            Legal
          </span>
          <h1 className="mt-6 text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            Terms & Conditions
          </h1>
          <p className="mt-4 text-sm text-slate-500">
            Last updated: June 1, 2026
          </p>

          <p className="mt-8 text-base leading-relaxed text-slate-600">
            These Terms & Conditions govern the use of Ilm Sync by schools
            and madrasas. Please read them carefully before using the
            platform.
          </p>

          <div className="mt-10 flex flex-col gap-10">
            {sections.map((section) => (
              <div key={section.title}>
                <h2 className="text-xl font-semibold text-slate-900">
                  {section.title}
                </h2>
                <div className="mt-3 flex flex-col gap-3">
                  {section.body.map((paragraph, index) => (
                    <p
                      key={index}
                      className="text-sm leading-relaxed text-slate-600"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}