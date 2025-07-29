// components/ContactForm.tsx
export default function ContactForm() {
  return (
    <section className="bg-[#1a191b] text-[#cfb580] font-league py-24 px-6">
      <div className="h-20" /> {/* 80px vertical space above the headline */}
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-wide mb-4">
          Lights, Camera, Let’s Talk.
        </h1>
        <p className="text-[#ffffff] text-lg mb-12">
          Tell us a little about your project.
        </p>

        <form className="space-y-8">
          {/* Name fields */}
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1">
              <label className="block mb-2 text-sm uppercase text-[#cfb580]">First Name <span className="text-red-500">*</span></label>
              <input type="text" required className="w-full bg-transparent border border-[#cfb580] rounded-full px-4 py-3 text-white placeholder-gray-400" placeholder="First Name" />
            </div>
            <div className="flex-1">
              <label className="block mb-2 text-sm uppercase text-[#cfb580]">Last Name</label>
              <input type="text" className="w-full bg-transparent border border-[#cfb580] rounded-full px-4 py-3 text-white placeholder-gray-400" placeholder="Last Name" />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block mb-2 text-sm uppercase text-[#cfb580]">Email <span className="text-red-500">*</span></label>
            <input type="email" required className="w-full bg-transparent border border-[#cfb580] rounded-full px-4 py-3 text-white placeholder-gray-400" placeholder="you@example.com" />
          </div>

          {/* Message */}
          <div>
            <label className="block mb-2 text-sm uppercase text-[#cfb580]">Message <span className="text-red-500">*</span></label>
            <textarea required className="w-full bg-transparent border border-[#cfb580] rounded-3xl px-4 py-3 text-white placeholder-gray-400 min-h-[120px]" placeholder="Your message..." />
          </div>

          {/* Submit */}
          <button type="submit" className="mt-4 border-2 border-[#cfb580] text-[#cfb580] hover:bg-[#cfb580] hover:text-[#1a191b] px-8 py-3 rounded-full transition-all duration-300">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
