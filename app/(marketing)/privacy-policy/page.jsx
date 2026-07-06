import Container from "@/components/shared/Container";

const sections = [
  {
    title: "1. Information We Collect",
    body: [
      "When your institute registers for Ilm Sync, we collect information such as school name, contact details, and administrator credentials.",
      "As part of using the platform, your institute may enter student and staff records, including names, attendance, fee status, and academic results. This data belongs to your institute and is used solely to provide the service.",
    ],
  },
  {
    title: "2. How We Use Information",
    body: [
      "We use collected information to operate, maintain, and improve Ilm Sync, including features such as attendance tracking, fee management, and parent communication.",
      "We may also use aggregated, non-identifying data to understand usage patterns and improve the platform for all institutes.",
    ],
  },
  {
    title: "3. Data Sharing",
    body: [
      "We do not sell student, staff, or institute data to third parties.",
      "Information may be shared with service providers who help us operate the platform (such as SMS or hosting providers), under strict confidentiality obligations.",
    ],
  },
  {
    title: "4. Data Security",
    body: [
      "We use industry-standard security practices, including encrypted connections and role-based access controls, to protect data stored on Ilm Sync.",
      "Access to student and staff records is restricted based on the roles assigned by your institute's administrators.",
    ],
  },
  {
    title: "5. Parental and Student Data",
    body: [
      "Data belonging to minors is collected and managed by the institute, not directly by Ilm Sync. Institutes are responsible for obtaining any necessary parental consent required under local regulations.",
      "Parents accessing the Ilm Sync parent app can view only the information relevant to their own child.",
    ],
  },
  {
    title: "6. Cookies",
    body: [
      "Ilm Sync uses basic cookies to keep you logged in and to remember your preferences. We do not use cookies for third-party advertising.",
    ],
  },
  {
    title: "7. Your Rights",
    body: [
      "Institutes can request an export or deletion of their data at any time by contacting our support team.",
      "If you have questions about how your institute's data is handled, please reach out via our Contact page.",
    ],
  },
  {
    title: "8. Changes to This Policy",
    body: [
      "We may update this Privacy Policy from time to time. Material changes will be communicated to registered institutes via email.",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <section className="bg-white pt-16 pb-20 sm:pt-20">
      <Container>
        <div className="mx-auto max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-4 py-1.5 text-sm font-semibold text-brand-700 ring-1 ring-inset ring-brand-100">
            Legal
          </span>
          <h1 className="mt-6 text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            Privacy Policy
          </h1>
          <p className="mt-4 text-sm text-slate-500">
            Last updated: June 1, 2026
          </p>

          <p className="mt-8 text-base leading-relaxed text-slate-600">
            This Privacy Policy explains how Ilm Sync collects, uses, and
            protects information when schools and madrasas use our platform
            to manage attendance, fees, results, and communication.
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