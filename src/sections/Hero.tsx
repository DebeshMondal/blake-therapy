export default function Hero() {
  return (
    <section className="w-full bg-gradient-to-b from-rose-50 via-white to-amber-50 py-20 sm:py-32 flex items-center justify-center">
      <div className="max-w-2xl mx-auto text-center px-4">
        <h1 className="font-serif text-4xl sm:text-5xl font-semibold text-rose-900 mb-6 leading-tight">
          Helping You Heal, One Conversation at a Time
        </h1>
        <h2 className="font-sans text-xl sm:text-2xl text-rose-700 mb-10 font-light">
          Private therapy with Dr. Serena Blake, PsyD
        </h2>
        <a
          href="#contact"
          className="inline-block rounded-full bg-rose-700 text-white px-8 py-3 text-lg font-medium shadow-md hover:bg-rose-800 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-300"
        >
          Book a Free Consult
        </a>
      </div>
    </section>
  );
} 