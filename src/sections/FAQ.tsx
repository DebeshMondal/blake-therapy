"use client";

import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/24/solid';

const faqs = [
  {
    q: 'Do you accept insurance?',
    a: 'I do not accept insurance directly, but I can provide a superbill for you to submit to your insurance provider for possible reimbursement. Please check with your provider for details.',
  },
  {
    q: 'Are online sessions available?',
    a: 'Yes, I offer secure online therapy sessions for clients located in California. In-person sessions are also available in my Los Angeles office.',
  },
  {
    q: 'What is your cancellation policy?',
    a: 'Cancellations require 24 hours notice to avoid a late fee. Please contact me as soon as possible if you need to reschedule.',
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="w-full bg-white py-20 sm:py-28">
      <div className="max-w-2xl mx-auto px-4">
        <h3 className="font-serif text-3xl text-blue-900 mb-10 text-center">Frequently Asked Questions</h3>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <Disclosure key={faq.q}>
              {({ open }) => (
                <div className="rounded-xl border border-blue-100 bg-sky-50/60 shadow-sm">
                  <Disclosure.Button className="flex w-full justify-between items-center px-6 py-4 text-left font-sans text-blue-900 text-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-200 rounded-xl">
                    <span>{faq.q}</span>
                    <ChevronUpIcon
                      className={`h-5 w-5 text-sky-600 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-6 pb-4 pt-1 text-blue-900/90 text-base font-sans">
                    {faq.a}
                  </Disclosure.Panel>
                </div>
              )}
            </Disclosure>
          ))}
        </div>
      </div>
    </section>
  );
} 