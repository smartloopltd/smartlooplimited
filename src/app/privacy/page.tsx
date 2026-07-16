export default function PrivacyPage() {
  return (
    <main className="bg-sky-950 text-slate-100">
      <section className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-200">Privacy</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Privacy policy for Smartloop Limited
          </h1>
          <p className="mt-6 text-lg leading-8 text-sky-100/80">
            We respect your privacy and are committed to protecting any personal information you share with us. This page explains how we collect, use, and safeguard the data you provide when interacting with our website.
          </p>
          <div className="mt-10 space-y-8 text-sky-100/80">
            <section>
              <h2 className="text-2xl font-semibold text-white">Information we collect</h2>
              <p className="mt-4 leading-8">
                We collect only the information you choose to provide, such as your name, email address, and project details when you contact us. We do not sell or share your personal information with third parties for marketing purposes.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold text-white">How we use your information</h2>
              <p className="mt-4 leading-8">
                Your information is used to respond to inquiries, support project discussions, and provide the services you request. We maintain security practices to protect your data and retain it only as long as necessary.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold text-white">Contact</h2>
              <p className="mt-4 leading-8">
                If you have questions about this policy, please contact us at hello@smartloop.co.
              </p>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}
