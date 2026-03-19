'use client';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactForm() {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    // Combine first + last name into a single "name" field for EmailJS
    const formData = new FormData(form.current);
    const firstName = formData.get('first_name') as string;
    const lastName = formData.get('last_name') as string;

    const nameInput = document.createElement('input');
    nameInput.type = 'hidden';
    nameInput.name = 'name';
    nameInput.value = `${firstName} ${lastName}`.trim();
    form.current.appendChild(nameInput);

    emailjs
      .sendForm(
        'service_21ld30f',
        'template_pfl56yu', // Notification — sends to your business email
        form.current,
        'xtBfTgfimdpJMj4hv'
      )
      .then(() => {
        return emailjs.sendForm(
          'service_21ld30f',
          'template_bss730h', // Auto-reply — sends back to the user
          form.current!,
          'xtBfTgfimdpJMj4hv'
        );
      })
      .then(() => {
        alert('Message sent!');
        form.current?.removeChild(nameInput);
        form.current?.reset();
      })
      .catch((error) => {
        console.error('EmailJS error:', error);
        alert('Something went wrong. Please try again.');
        form.current?.removeChild(nameInput);
      });
  };

  return (
    <section className="bg-[#1a191b] text-[#cfb580] font-league py-24 px-6">
      <div className="h-20" />
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-wide mb-4">
          Lights, Camera, Let's Talk.
        </h1>
        <p className="text-[#ffffff] text-lg mb-12">
          Tell us a little about your project.
        </p>
        <form ref={form} onSubmit={sendEmail} className="space-y-8">

          {/* Name fields */}
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1">
              <label className="block mb-2 text-sm uppercase text-[#cfb580]">
                First Name <span className="text-red-500">*</span>
              </label>
              <input
                name="first_name"
                type="text"
                required
                className="w-full bg-transparent border border-[#cfb580] rounded-full px-4 py-3 text-white placeholder-gray-400"
                placeholder="First Name"
              />
            </div>
            <div className="flex-1">
              <label className="block mb-2 text-sm uppercase text-[#cfb580]">
                Last Name
              </label>
              <input
                name="last_name"
                type="text"
                className="w-full bg-transparent border border-[#cfb580] rounded-full px-4 py-3 text-white placeholder-gray-400"
                placeholder="Last Name"
              />
            </div>
          </div>

          {/* Email — named "reply_to" so EmailJS auto-reply goes to them */}
          <div>
            <label className="block mb-2 text-sm uppercase text-[#cfb580]">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              name="reply_to"
              type="email"
              required
              className="w-full bg-transparent border border-[#cfb580] rounded-full px-4 py-3 text-white placeholder-gray-400"
              placeholder="you@example.com"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block mb-2 text-sm uppercase text-[#cfb580]">
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              name="message"
              required
              className="w-full bg-transparent border border-[#cfb580] rounded-3xl px-4 py-3 text-white placeholder-gray-400 min-h-[120px]"
              placeholder="Your message..."
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="mt-4 border-2 border-[#cfb580] text-[#cfb580] hover:bg-[#cfb580] hover:text-[#1a191b] px-8 py-3 rounded-full transition-all duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}