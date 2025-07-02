import Image from 'next/image';

export default function AboutBg() {
  return (
    <section className="relative w-full h-[260px] sm:h-[360px] md:h-[420px] lg:h-[480px] overflow-hidden">
      <Image
        src="/ocean.jpg"
        alt="Calming ocean background"
        fill
        className="object-cover object-center w-full h-full"
        priority
      />
      <div className="absolute inset-0 bg-white/40 backdrop-blur-sm" />
    </section>
  );
} 