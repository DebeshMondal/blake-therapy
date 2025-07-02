import Image from 'next/image';

const services = [
  {
    title: 'Anxiety & Stress Management',
    desc: 'Personalized strategies to help you manage anxiety, reduce stress, and regain a sense of calm and control in your daily life.',
    img: '/card1.png',
  },
  {
    title: 'Relationship Counseling',
    desc: 'Support for couples and individuals to improve communication, resolve conflicts, and build healthier, more fulfilling relationships.',
    img: '/card2.png',
  },
  {
    title: 'Trauma Recovery',
    desc: 'Compassionate care to help you process and heal from past trauma, fostering resilience and emotional well-being.',
    img: '/card3.png',
  },
];

export default function Services() {
  return (
    <section id="services" className="w-full bg-sky-50 py-20 sm:py-28">
      <div className="max-w-5xl mx-auto px-4">
        <h3 className="font-serif text-3xl text-blue-900 mb-12 text-center">How I Can Help</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-10">
          {services.map((service) => (
            <div key={service.title} className="rounded-2xl bg-white shadow-md border border-blue-100 p-6 flex flex-col items-center transition-transform duration-200 hover:shadow-xl hover:-translate-y-2">
              <div className="w-28 h-28 mb-6 rounded-full overflow-hidden bg-sky-100 flex items-center justify-center">
                <Image src={service.img} alt={service.title} width={112} height={112} className="object-cover w-full h-full" />
              </div>
              <h4 className="font-serif text-xl text-blue-900 mb-3 text-center">{service.title}</h4>
              <p className="text-blue-900/80 text-center font-sans text-base">{service.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <div className="inline-block rounded-xl bg-white border border-blue-100 px-8 py-4 shadow-sm">
            <span className="font-serif text-lg text-blue-900 mr-6">Session Fees:</span>
            <span className="font-sans text-base text-blue-900/80">$200 individual / $240 couples</span>
          </div>
        </div>
      </div>
    </section>
  );
} 