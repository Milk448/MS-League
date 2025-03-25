const HighlightedCourses = () => {
  // Sample static data
  const courses = [
    {
      title: "Public Speaking",
      description: "Build confidence and speak up!",
      id: 1,
    },
    {
      title: "Time Management",
      description: "Boost productivity and focus.",
      id: 2,
    },
    {
      title: "Coding 101",
      description: "Intro to programming for beginners.",
      id: 3,
    },
  ];

  return (
    <section className="py-16 px-6 md:px-12 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">
          Highlighted Courses
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white p-6 rounded-lg shadow hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
              <p className="text-gray-600">{course.description}</p>
              <a
                href="/learning"
                className="inline-block mt-4 text-yellow-600 hover:underline"
              >
                Explore Course →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HighlightedCourses;
