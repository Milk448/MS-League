import { useParams } from "react-router-dom";
import { useState } from "react";

const ForumTopic = () => {
  const { id } = useParams();

  const topic = {
    id,
    title: "How do you manage time as a student?",
    author: "Mimi",
    content: "I'd love to hear your strategies and tools for staying on track!",
    replies: [
      { id: 1, user: "Abdi", text: "I use Google Calendar + Notion." },
      { id: 2, user: "Sara", text: "I do weekly planning every Sunday." },
    ],
  };

  const [replies, setReplies] = useState(topic.replies);
  const [newReply, setNewReply] = useState("");

  const handleAddReply = () => {
    if (newReply.trim() !== "") {
      setReplies([
        ...replies,
        { id: replies.length + 1, user: "You", text: newReply },
      ]);
      setNewReply("");
    }
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-2">{topic.title}</h1>
      <p className="text-sm text-gray-500 mb-6">Posted by {topic.author}</p>
      <p className="text-gray-800 mb-6">{topic.content}</p>

      <h2 className="text-lg font-semibold mb-4">Replies</h2>
      <div className="space-y-4 mb-6">
        {replies.map((reply) => (
          <div key={reply.id} className="bg-gray-50 p-3 rounded-md border">
            <p className="font-medium text-gray-700">{reply.user}:</p>
            <p className="text-gray-800">{reply.text}</p>
          </div>
        ))}
      </div>

      {/* Reply Box */}
      <div className="mt-4">
        <textarea
          placeholder="Write a reply..."
          value={newReply}
          onChange={(e) => setNewReply(e.target.value)}
          className="w-full border p-3 rounded-md mb-2"
          rows="3"
        ></textarea>
        <button
          onClick={handleAddReply}
          className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition"
        >
          Post Reply
        </button>
      </div>
    </div>
  );
};

export default ForumTopic;
