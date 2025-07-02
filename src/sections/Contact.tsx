"use client";
import { useForm } from 'react-hook-form';
import { useState } from 'react';

export default function Contact() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (data: any) => {
    setSubmitted(true);
    console.log(data);
    setTimeout(() => setSubmitted(false), 4000);
    reset();
  };

  return (
    <section id="contact" className="w-full bg-sky-50 py-20 sm:py-28">
      <div className="max-w-xl mx-auto px-4">
        <h3 className="font-serif text-3xl text-blue-900 mb-10 text-center">Contact</h3>
        <form onSubmit={handleSubmit(onSubmit)} className="bg-white rounded-2xl shadow-md border border-blue-100 p-8 space-y-6">
          <div>
            <label className="block font-sans text-blue-900 mb-1">Name *</label>
            <input {...register('name', { required: 'Name is required' })} className="w-full rounded-lg border border-blue-200 px-4 py-2 focus:ring-2 focus:ring-sky-200 outline-none text-blue-900 placeholder:text-blue-400" />
            {errors.name && <span className="text-rose-600 text-sm">{errors.name.message as string}</span>}
          </div>
          <div>
            <label className="block font-sans text-blue-900 mb-1">Phone</label>
            <input {...register('phone')} className="w-full rounded-lg border border-blue-200 px-4 py-2 focus:ring-2 focus:ring-sky-200 outline-none text-blue-900 placeholder:text-blue-400" placeholder="1234567890" />
          </div>
          <div>
            <label className="block font-sans text-blue-900 mb-1">Email *</label>
            <input type="email" {...register('email', { required: 'Email is required' })} className="w-full rounded-lg border border-blue-200 px-4 py-2 focus:ring-2 focus:ring-sky-200 outline-none text-blue-900 placeholder:text-blue-400" />
            {errors.email && <span className="text-rose-600 text-sm">{errors.email.message as string}</span>}
          </div>
          <div>
            <label className="block font-sans text-blue-900 mb-1">What brings you here?</label>
            <textarea {...register('message')} rows={4} className="w-full rounded-lg border border-blue-200 px-4 py-2 focus:ring-2 focus:ring-sky-200 outline-none text-blue-900 placeholder:text-blue-400" placeholder="Curiosity" />
          </div>
          <div>
            <label className="block font-sans text-blue-900 mb-1">Preferred contact time</label>
            <input {...register('contactTime')} className="w-full rounded-lg border border-blue-200 px-4 py-2 focus:ring-2 focus:ring-sky-200 outline-none text-blue-900 placeholder:text-blue-400" placeholder="Afternoon" />
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" {...register('consent', { required: 'Consent is required' })} className="rounded border-blue-200 focus:ring-2 focus:ring-sky-200" style={{ width: 22, height: 22 }} />
            <span className="text-blue-900 font-sans text-sm">I consent to being contacted about therapy services *</span>
          </div>
          {errors.consent && <span className="text-rose-600 text-sm block">{errors.consent.message as string}</span>}
          <button type="submit" className="w-full mt-4 rounded-full bg-sky-600 text-white py-3 font-medium text-lg shadow hover:bg-sky-700 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-200">Send Message</button>
          {submitted && <div className="text-green-700 text-center mt-4 font-semibold">Thank you! Your message has been received.</div>}
        </form>
      </div>
    </section>
  );
} 