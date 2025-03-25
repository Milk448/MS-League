const TVPrograms = () => {
  const programs = [
    {
      id: 1,
      title: "Student Talks",
      description: "Short inspiring ideas shared by students.",
      category: "Idea Sharing",
      link: "https://www.youtube.com/watch?v=VIDEO_ID_1",
    },
    {
      id: 2,
      title: "Book Review Challenge",
      description: "Members discuss powerful books and key takeaways.",
      category: "Book Review",
      link: "https://www.youtube.com/watch?v=VIDEO_ID_2",
    },
    {
      id: 3,
      title: "TV Competitions",
      description: "Creative student competitions aired for all.",
      category: "Competition",
      link: "https://www.youtube.com/watch?v=VIDEO_ID_3",
    },
  ];

  return (
    <div className="px-6 md:px-12 py-16 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold mb-10 text-center">TV Programs</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {programs.map((program) => (
          <div
            key={program.id}
            className="bg-white p-6 rounded-lg shadow hover:shadow-md hover:ring-1 hover:ring-yellow-400 transition"
          >
            <h3 className="text-xl font-semibold mb-2 text-gray-800">
              {program.title}
            </h3>
            <p className="text-gray-600 mb-2">{program.description}</p>
            <span className="inline-block text-sm px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full mb-4">
              {program.category}
            </span>
            <a
              href={program.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-yellow-600 hover:underline font-medium mt-2"
            >
              🎥 Watch Now
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TVPrograms;
