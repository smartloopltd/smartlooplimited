export default function TermsPage() {
  return (
    <main className="bg-sky-950 text-slate-100">
      <section className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-200">Terms</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Terms of use for Smartloop Limited
          </h1>
          <p className="mt-6 text-lg leading-8 text-sky-100/80">
            These terms describe the rules that apply when you use our website and engage with Smartloop Limited. By using our site, you agree to these terms and our commitment to providing clear, trustworthy service.
          </p>
          <div className="mt-10 space-y-8 text-sky-100/80">
            <section>
              <h2 className="text-2xl font-semibold text-white">Use of the website</h2>
              <p className="mt-4 leading-8">
                You may use our site for informational purposes and to contact us about potential projects. You agree not to misuse the website or interfere with its operation.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold text-white">Intellectual property</h2>
              <p className="mt-4 leading-8">
                All website content, including text, design, and graphics, is owned by Smartloop Limited or our partners. You may not reproduce or distribute our content without permission.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold text-white">Contact</h2>
              <p className="mt-4 leading-8">
                If you have questions about these terms, please email us at hello@smartloop.co.
              </p>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}
