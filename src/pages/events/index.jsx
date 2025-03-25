const Events = () => {
  const events = [
    {
      id: 1,
      title: "Youth Leadership Summit",
      date: "2025-04-10",
      description:
        "A gathering of student leaders to collaborate and share ideas.",
      status: "upcoming",
    },
    {
      id: 2,
      title: "Tech for Change Hackathon",
      date: "2025-03-05",
      description:
        "Students compete in building solutions for real-world challenges.",
      status: "past",
    },
    {
      id: 3,
      title: "Mental Health Awareness Workshop",
      date: "2025-04-20",
      description:
        "Interactive session promoting emotional well-being in student life.",
      status: "upcoming",
    },
  ];

  return (
    <div className="px-6 md:px-12 py-16 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold mb-10 text-center">Events</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {events.map((event) => (
          <div
            key={event.id}
            className="bg-white p-6 rounded-lg shadow hover:shadow-md transition"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {event.title}
            </h3>
            <p className="text-sm text-gray-500 mb-1">
              📅 {new Date(event.date).toDateString()}
            </p>
            <p className="text-gray-600 mb-4">{event.description}</p>
            <a
              href={`/events/${event.id}`}
              className={`inline-block px-4 py-2 rounded-md text-white font-medium ${
                event.status === "upcoming"
                  ? "bg-yellow-500 hover:bg-yellow-600"
                  : "bg-gray-400 cursor-not-allowed"
              }`}
            >
              {event.status === "upcoming" ? "Register" : "Event Ended"}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
