const Hero = () => {
  return (
    <section className="min-h-[80vh] flex items-center justify-center bg-gradient-to-r from-yellow-100 to-yellow-200 px-6 md:px-12">
      <div className="text-center max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
          Empowering Students Through{" "}
          <span className="text-yellow-500">Learning & Engagement</span>
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          MS-League is a student NGO that supports growth, collaboration, and
          educational empowerment.
        </p>
        <a
          href="/register"
          className="inline-block bg-yellow-500 text-white px-6 py-3 rounded-md font-semibold hover:bg-yellow-600 transition"
        >
          Join the Community
        </a>
      </div>
    </section>
  );
};

export default Hero;
