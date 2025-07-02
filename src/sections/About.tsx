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
    <section id="about" className="w-full bg-white py-16 sm:py-24">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10 px-4">
        <div className="flex-shrink-0 w-40 h-40 sm:w-56 sm:h-56 rounded-full overflow-hidden shadow-md border border-rose-100 bg-rose-50">
          <Image
            src="/blake.jpg"
            alt="Dr. Serena Blake"
            width={224}
            height={224}
            className="object-cover w-full h-full"
            priority
          />
        </div>
        <div className="flex-1">
          <h3 className="font-serif text-2xl text-rose-900 mb-4">About Dr. Blake</h3>
          <p className="text-lg text-neutral-800 mb-8 font-sans leading-relaxed">{bio}</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {contactInfo.map((item) => (
              <div key={item.label} className="rounded-xl bg-rose-50 border border-rose-100 p-4 text-center shadow-sm">
                <div className="text-xs uppercase tracking-wider text-rose-700 font-semibold mb-1">{item.label}</div>
                <div className="text-base text-rose-900 font-medium">{item.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 