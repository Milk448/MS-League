import { Link } from "react-router-dom";

const mockTopics = [
  {
    id: 1,
    title: "How do you manage time as a student?",
    likes: 12,
    replies: 4,
    author: "Mimi",
  },
  {
    id: 2,
    title: "Best beginner-friendly books on leadership?",
    likes: 8,
    replies: 2,
    author: "Abdi",
  },
  {
    id: 3,
    title: "Share your favorite course so far!",
    likes: 15,
    replies: 7,
    author: "Rediet",
  },
];

const Forum = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Forum Discussions</h1>

      <div className="space-y-4">
        {mockTopics.map((topic) => (
          <Link
            to={`/forum/${topic.id}`}
            key={topic.id}
            className="block bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition border border-gray-100"
          >
            <h2 className="text-lg font-semibold text-gray-800 mb-1">
              {topic.title}
            </h2>
            <p className="text-sm text-gray-600">Posted by {topic.author}</p>
            <div className="mt-2 text-sm text-gray-500 flex gap-4">
              ❤️ {topic.likes} · 💬 {topic.replies} replies
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Forum;
