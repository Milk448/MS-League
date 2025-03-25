const Overview = () => {
  return (
    <section className="px-6 py-16 bg-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Text Section */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            What is MS-League?
          </h2>
          <p className="text-gray-600 text-lg mb-4">
            MS-League is a student-led NGO focused on educational empowerment,
            discussion forums, and engaging TV programs. We create a space for
            youth to learn, grow, and lead through collaboration and community
            building.
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Profile management & learning platform</li>
            <li>TV content and competitions</li>
            <li>Forum-based student engagement</li>
            <li>Admin support and event updates</li>
          </ul>
        </div>

        {/* Placeholder Image / Illustration */}
        <div className="w-full h-64 bg-yellow-100 rounded-xl flex items-center justify-center">
          <span className="text-yellow-600 text-4xl font-bold">📚</span>
        </div>
      </div>
    </section>
  );
};

export default Overview;
