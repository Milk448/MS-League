import { useState } from "react";

const tvPrograms = [
  {
    id: 1,
    category: "Podcast",
    title: "Mindful Mondays - Episode 1",
    description: "Tips on managing stress and improving focus.",
    videoUrl: "https://www.youtube.com/embed/E1zze4rgn7c",
    comments: ["Great episode!", "Very helpful insights."],
  },
  {
    id: 2,
    category: "Competition",
    title: "MS-League Innovation Challenge",
    description: "Final round highlights of the 2024 competition.",
    videoUrl: "https://www.youtube.com/embed/ZvP8YzKzsnQ",
    comments: ["Amazing pitches!", "Hope to participate next year."],
  },
  {
    id: 3,
    category: "Book Review",
    title: "Atomic Habits Review",
    description: "Key takeaways from Atomic Habits by James Clear.",
    videoUrl: "https://www.youtube.com/embed/t4oYjUgZsvU",
    comments: ["Loved this breakdown.", "Adding this to my reading list!"],
  },
];

const TVPrograms = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Podcast", "Competition", "Book Review"];

  const filteredPrograms =
    activeCategory === "All"
      ? tvPrograms
      : tvPrograms.filter((p) => p.category === activeCategory);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">TV Programs</h1>

      {/* Filter buttons */}
      <div className="mb-6 flex gap-4 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-full border ${
              activeCategory === cat
                ? "bg-yellow-500 text-white"
                : "bg-white text-gray-700 hover:bg-yellow-100"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Program Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredPrograms.map((program) => (
          <div
            key={program.id}
            className="bg-white rounded-lg shadow hover:shadow-md transition duration-300 p-4"
          >
            <iframe
              src={program.videoUrl}
              className="w-full h-48 rounded-md mb-4"
              allowFullScreen
              title={program.title}
            ></iframe>

            <h2 className="text-xl font-semibold">{program.title}</h2>
            <p className="text-sm text-gray-600 mb-2">{program.description}</p>

            {/* Comments */}
            <div className="mt-4">
              <h3 className="text-sm font-medium text-gray-700 mb-1">
                Comments
              </h3>
              <ul className="text-sm text-gray-600 space-y-1 mb-2">
                {program.comments.map((comment, idx) => (
                  <li key={idx}>• {comment}</li>
                ))}
              </ul>
              <input
                placeholder="Add a comment..."
                className="w-full border px-3 py-2 text-sm rounded-md"
                disabled // for now, commenting is mock
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TVPrograms;
