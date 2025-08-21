export default function AvondalePage() {
  return (
    <div className="bg-[#1a191b] text-[#cfb580] min-h-screen">
      {/* Page Title */}
      <div className="text-center pt-34">
        <h1 className="text-7xl font-bold uppercase tracking-wide">AVONDALE</h1>
      </div>

      {/* Hero Video */}
      <div className="w-full max-w-[1200px] aspect-video mx-auto mt-20 overflow-hidden bg-black">
        <video
          className="w-full h-full object-cover block"
          controls
          playsInline
          loop
          preload="auto"
          poster="https://lhmcollective.b-cdn.net/avondale%20poster.jpg"
        >
          <source src="https://lhmcollective.b-cdn.net/Avondale%20918%20Spyder.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* SEO Body Text */}
      <div className="max-w-[900px] mx-auto mt-16 px-6 text-base leading-relaxed text-[#cfb580]/90">
        <h2 className="text-2xl font-semibold uppercase tracking-wide mb-4">
          Client: Avondale
        </h2>
        <p>
          Avondale Dealerships, a luxury automotive group based in Dallas, TX, partnered with us from 2020 to 2023 to create dynamic content for some of the world’s most prestigious car brands, including Porsche, Aston Martin, Mercedes-Benz, Maserati, McLaren, Rolls-Royce, and Bentley.
        </p>
        <br />
        <p>
          Our work spanned across talking-head videos introducing new car features, promotional videos, lifestyle photography, and social media content tailored to trend and brand identity. While performance metrics weren’t the primary focus at the time, our role was to elevate their digital presence with high-quality content.
        </p>
        <br />
        <p>
          This collaboration allowed us to apply our creative approach across multiple dealerships while capturing the elegance, innovation, and individuality that define each luxury brand under the Avondale umbrella.
        </p>
      </div>

      {/* Frames Section */}
      <div className="w-full px-0 py-12">
        <h2 className="text-sm uppercase tracking-wide mb-5 border-t border-[#cfb580] pt-2 inline-block ml-6">
          Photography
        </h2>

        <div className="grid grid-cols-3 gap-2 px-6">
          <img
            src="https://lhmcollective.b-cdn.net/Work%20Photos/Avondale/AY4I0835.jpg"
            alt="Luxury vehicle vertical photo for Avondale"
            className="w-full h-full object-cover"
          />
          <img
            src="https://lhmcollective.b-cdn.net/Work%20Photos/Avondale/AY4I0293.jpg"
            alt="Luxury car showcase photography for Avondale"
            className="w-full h-full object-cover"
          />
          <img
            src="https://lhmcollective.b-cdn.net/Work%20Photos/Avondale/AY4I0804.jpg"
            alt="McLaren detail photo by Light House Media"
            className="w-full h-full object-cover"
          />
          <img
            src="https://lhmcollective.b-cdn.net/Work%20Photos/Avondale/AY4I0032-Edit.jpg"
            alt="Avondale lifestyle dealership photo"
            className="w-full h-full object-cover"
          />
          <img
            src="https://lhmcollective.b-cdn.net/Work%20Photos/Avondale/AY4I0871.jpg"
            alt="Rolls Royce luxury shoot for Avondale"
            className="w-full h-full object-cover"
          />
          <img
            src="https://lhmcollective.b-cdn.net/Work%20Photos/Avondale/AY4I9864.jpg"
            alt="Porsche dealership photography by Light House Media"
            className="w-full h-full object-cover"
          />
        </div>
      </div>



    </div>
  );
}
