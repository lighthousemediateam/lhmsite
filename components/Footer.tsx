export default function Footer() {
  return (
    <footer className="bg-[#1a191b] text-[#cfb580] px-6 py-12">
      <div className="w-full">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center w-full">

          {/* Left Side */}
          <div className="text-left">
            <h3 className="text-4xl font-semibold uppercase">Light House Media</h3>
            <p className="mt-2 uppercase tracking-wide text-md">Dallas, TX</p>
          </div>

          {/* Right Side */}
          <nav className="mt-8 sm:mt-0 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 text-md uppercase font-semibold text-right sm:text-right">
            <a href="/" className="hover:opacity-80">Home</a>
            <a href="/work" className="hover:opacity-80">Work</a>
            <a href="/ugc" className="hover:opacity-80">UGC</a>
            <a href="/photo" className="hover:opacity-80">Photo</a>
            <a href="/about" className="hover:opacity-80">About Us</a>
            <a href="/contact" className="hover:opacity-80">Contact</a>
          </nav>
        </div>

        {/* Bottom Section */}
        <div className="mt-8">
          <p className="text-xs text-right">
            © 2025 Light House Media. All rights reserved.
          </p>
          <p className="text-xs text-center mt-2 opacity-75">
            This site was built and maintained by Light House Media
          </p>
        </div>
      </div>
    </footer>
  );
}
