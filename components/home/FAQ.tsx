export function FAQ() {
  const faqs = [
    {
      question: 'Are the chemicals used safe for children and pets?',
      answer: 'Yes, we prioritize safety above all else. We use highly targeted, eco-friendly, and government-approved chemicals that are completely safe for children, pregnant women, and pets when applied by our trained professionals according to safety guidelines.',
    },
    {
      question: 'How often should I get pest control done for my home?',
      answer: 'For a typical residential property in Kerala, we recommend a general pest control treatment every 3-4 months. However, specific treatments like termite control come with multi-year warranties and do not require frequent reapplications.',
    },
    {
      question: 'Do I need to leave the house during the treatment?',
      answer: 'For most of our treatments, like gel baiting for cockroaches, you do not need to leave the house. For spray treatments or intensive procedures like bed bug eradication, we may advise you to vacate the premises for 2-4 hours for safety.',
    },
    {
      question: 'Is your pest control service guaranteed?',
      answer: 'Yes, we provide a service guarantee and warranty for specific treatments like termite control. If pests return during the warranty period, we will re-treat the affected area at no additional cost.',
    },
    {
      question: 'Do you provide services in all districts of Kerala?',
      answer: 'Yes, we have a wide network of trained professionals and provide comprehensive pest control services across all districts in Kerala.',
    },
  ];

  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h3 className="text-sm font-semibold tracking-wider text-secondary uppercase mb-2">
            Got Questions?
          </h3>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground text-lg">
            Find answers to common questions about our pest control services and processes.
          </p>
        </div>

        <div className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <details key={index} className="group border rounded-lg bg-slate-50 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between px-6 py-4 font-semibold text-lg text-primary hover:text-secondary">
                {faq.question}
                <span className="transition group-open:rotate-180">
                  <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                </span>
              </summary>
              <div className="px-6 pb-4 text-muted-foreground leading-relaxed">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
