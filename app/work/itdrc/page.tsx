export default function ITDRCPage() {
  return (
    <div className="bg-[#1a191b] text-[#cfb580] min-h-screen">
      {/* Page Title */}
      <div className="text-center pt-34">
        <h1 className="text-7xl font-bold uppercase tracking-wide">ITDRC</h1>
      </div>

      {/* Hero Video */}
      <div className="w-full max-w-[1200px] aspect-video mx-auto mt-20 overflow-hidden bg-black">
        <video
          className="w-full h-full object-cover block"
          controls
          playsInline
          loop
          preload="auto"
          poster="https://via.placeholder.com/1280x720?text=ITDRC+Poster"
        >
          <source
            src="https://lhmcollective.b-cdn.net/ITDRC%20150mb%20with%20sound.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* SEO Body Text */}
      <div className="max-w-[900px] mx-auto mt-16 px-6 text-[1.195rem] leading-relaxed text-[#cfb580]/90">
        <h2 className="text-4xl font-semibold uppercase tracking-wide mb-4">
          Client: ITDRC
        </h2>
        <p>
          We had the opportunity to work with ITDRC (Information Technology Disaster Resource Center), a global, volunteer-driven nonprofit with over 5,000 volunteers dedicated to supporting disaster relief through technology.
        </p>
        <br />
        <p>
          When Hurricane Laura struck in 2020, we were deployed to Louisiana to document ITDRC’s on-the-ground operations. Our role was to capture and convey the critical support they provide to both first responders and affected communities, showcasing their tireless efforts through real-time video and photo storytelling.
        </p>
        <br />
        <p>
          The content we produced helped amplify ITDRC’s mission: to enable faster, more connected recovery by equipping relief teams with the tech infrastructure needed to operate efficiently and compassionately during crisis. It was an honor to support their mission and document the heart behind the help.
        </p>
      </div>

      {/* Frames Section */}
      <div className="w-full px-0 py-12">
        <h2 className="text-sm uppercase tracking-wide mb-5 border-t border-[#cfb580] pt-2 inline-block ml-6">
          Photography
        </h2>

        <div className="grid grid-cols-2 gap-0">
          <img
            src="https://lhmcollective.b-cdn.net/ITDRC%20pic1.png"
            alt="ITDRC disaster relief team photo 1"
            className="w-full h-full object-cover"
          />
          <img
            src="https://lhmcollective.b-cdn.net/ITRDC%20pic2.png"
            alt="ITDRC disaster relief team photo 2"
            className="w-full h-full object-cover"
          />
          <img
            src="https://lhmcollective.b-cdn.net/ITDRC%20pic3.png"
            alt="ITDRC disaster relief team photo 3"
            className="w-full h-full object-cover"
          />
          <img
            src="https://lhmcollective.b-cdn.net/ITDRC%20pic4.png"
            alt="ITDRC disaster relief team photo 4"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
