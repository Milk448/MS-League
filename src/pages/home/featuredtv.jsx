const FeaturedTV = () => {
  const tvShows = [
    { title: "Book Review", desc: "Top student book picks", id: 1 },
    { title: "Student Talks", desc: "Short idea-sharing videos", id: 2 },
    { title: "TV Competitions", desc: "Compete with creativity", id: 3 },
  ];

  return (
    <section className="py-16 px-6 md:px-12 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">
          Featured TV Programs
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {tvShows.map((tv) => (
            <div
              key={tv.id}
              className="p-6 bg-gray-50 rounded-lg shadow hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold mb-2">{tv.title}</h3>
              <p className="text-gray-600">{tv.desc}</p>
              <a
                href="/tv-programs"
                className="inline-block mt-4 text-yellow-600 hover:underline"
              >
                Watch Now →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedTV;
