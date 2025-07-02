"use client";

import Image from 'next/image';

const bio = `Dr. Serena Blake, PsyD, is a licensed clinical psychologist based in Los Angeles. She specializes in helping adults and couples navigate anxiety, relationship challenges, and trauma recovery. Dr. Blake's approach is warm, collaborative, and tailored to each client's unique needs.`;

const contactInfo = [
  {
    label: 'Office Hours',
    value: 'Mon–Fri: 9am – 6pm',
  },
  {
    label: 'Phone',
    value: '(555) 123-4567',
  },
  {
    label: 'Email',
    value: 'serena@blaketherapy.com',
  },
];

export default function About() {
  return (
    <section id="about" className="w-full bg-white py-20 sm:py-28 relative overflow-hidden">
      {/* Wave divider */}
      <div className="absolute -top-8 left-0 w-full pointer-events-none select-none" aria-hidden="true">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-16">
          <path fill="#e0f2fe" d="M0,32 C360,80 1080,0 1440,48 L1440,80 L0,80 Z" />
        </svg>
      </div>
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10 px-4 animate-fadein">
        <div className="flex-shrink-0 w-40 h-40 sm:w-56 sm:h-56 rounded-full overflow-hidden shadow-md border border-blue-100 bg-blue-50 animate-fadein delay-100">
          <Image
            src="/blake.jpg"
            alt="Dr. Serena Blake"
            width={224}
            height={224}
            className="object-cover w-full h-full"
            priority
          />
        </div>
        <div className="flex-1 animate-fadein delay-200">
          <h3 className="font-serif text-2xl text-blue-900 mb-4">About Dr. Blake</h3>
          <p className="text-lg text-blue-900/90 mb-8 font-sans leading-relaxed">{bio}</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {contactInfo.map((item) => (
              <div key={item.label} className="rounded-xl bg-sky-50 border border-blue-100 p-4 text-center shadow-sm">
                <div className="text-xs uppercase tracking-wider text-sky-700 font-semibold mb-1">{item.label}</div>
                <div className="text-base text-blue-900 font-medium">{item.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
        .animate-fadein {
          animation: fadein 1.1s cubic-bezier(.39,.575,.565,1) both;
        }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        @keyframes fadein {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: none; }
        }
      `}</style>
    </section>
  );
} 