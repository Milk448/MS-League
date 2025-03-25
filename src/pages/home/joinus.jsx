const JoinUs = () => {
  return (
    <section className="py-16 bg-yellow-500 text-white text-center px-6 md:px-0">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Be Part of the Change?
        </h2>
        <p className="mb-6 text-lg">
          Join MS-League and connect with a community of like-minded students
          today!
        </p>
        <a
          href="/register"
          className="bg-white text-yellow-500 font-semibold px-6 py-3 rounded-md hover:bg-yellow-100"
        >
          Become a Member
        </a>
      </div>
    </section>
  );
};

export default JoinUs;
