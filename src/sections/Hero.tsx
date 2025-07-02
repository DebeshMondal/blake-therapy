import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative w-full h-[340px] sm:h-[420px] md:h-[500px] flex items-center justify-center overflow-hidden">
      <Image
        src="/ocean.jpg"
        alt="Calming ocean background"
        fill
        className="object-cover object-top w-full h-full"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-b from-sky-200/60 via-white/40 to-white/60" />
      <div className="relative z-10 max-w-2xl mx-auto text-center px-4">
        <h1 className="font-serif text-4xl sm:text-5xl font-semibold text-rose-900 mb-6 leading-tight drop-shadow-md">
          Helping You Heal, One Conversation at a Time
        </h1>
        <h2 className="font-sans text-xl sm:text-2xl text-rose-700 mb-10 font-light drop-shadow-md">
          Private therapy with Dr. Serena Blake, PsyD
        </h2>
        <a
          href="#contact"
          className="inline-block rounded-full bg-rose-700 text-white px-8 py-3 text-lg font-medium shadow-md hover:bg-rose-800 transition-transform duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-300 transform hover:scale-105 hover:shadow-xl"
        >
          Book a Free Consult
        </a>
      </div>
    </section>
  );
} 