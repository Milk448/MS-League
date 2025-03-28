import { useState } from "react";
import { Link } from "react-router-dom";

const Courses = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const allCourses = [
    {
      id: 1,
      title: "Build a free website with WordPress",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/WordPress_logo.svg/800px-WordPress_logo.svg.png",
      skills: ["WordPress", "CMS", "Web Design", "Development"],
      rating: 4.4,
      reviews: "1.6K",
      level: "Intermediate",
      duration: "Less Than 2 Hours",
      type: "Guided Project",
      enrolled: true,
    },
    {
      id: 2,
      title: "Business Analysis & Process Management",
      image: "",
      skills: ["Process Analysis", "Workflow", "Mapping", "Business"],
      rating: 4.4,
      reviews: "6.2K",
      level: "Beginner",
      duration: "Less Than 2 Hours",
      type: "Guided Project",
      enrolled: false,
    },
    {
      id: 3,
      title: "Financial Literacy for Students",
      skills: ["Saving", "Spending", "Budgeting"],
      rating: 4.6,
      reviews: "2.3K",
      level: "Beginner",
      duration: "1–2 Hours",
      type: "Short Course",
      enrolled: false,
    },
  ];

  const filteredCourses = allCourses.filter((course) =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const myCourses = filteredCourses.filter((course) => course.enrolled);
  const recommendedCourses = filteredCourses.filter(
    (course) => !course.enrolled
  );

  const renderCourseCard = (course, type = "recommended") => (
    <div
      key={course.id}
      className="bg-white p-4 rounded-xl shadow-sm hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border border-gray-100"
    >
      {/* Thumbnail */}
      {course.image ? (
        <img
          src={course.image}
          alt={course.title}
          className="h-36 w-full object-contain mb-4 rounded"
        />
      ) : (
        <div className="h-36 bg-gray-200 rounded mb-4 flex items-center justify-center text-lg font-bold text-gray-600 text-center p-2">
          {course.title}
        </div>
      )}

      <p className="text-sm text-indigo-600 font-medium mb-1">
        MS-League Project
      </p>

      <h3 className="text-lg font-semibold text-gray-800 mb-2">
        {course.title}
      </h3>

      <p className="text-sm text-gray-600 mb-3">
        <span className="font-medium text-black">Skills you'll gain: </span>
        {course.skills.slice(0, 4).join(", ")}
        {course.skills.length > 4 ? "..." : ""}
      </p>

      <div className="text-sm text-gray-700 mb-2">
        ⭐ <span className="font-semibold">{course.rating}</span> ·{" "}
        {course.reviews} reviews
      </div>

      <div className="text-xs text-gray-500">
        {course.level} · {course.type} · {course.duration}
      </div>
      <Link
        to={`/learning/${course.id}`}
        className={`my-4 block w-full text-center px-4 py-2 rounded font-medium text-white ${
          type === "my"
            ? "bg-yellow-500 hover:bg-yellow-600"
            : "bg-blue-500 hover:bg-blue-600"
        }`}
      >
        {type === "my" ? "Continue Learning" : "View Course"}
      </Link>
    </div>
  );

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Courses</h1>

      {/* Search */}
      <input
        type="text"
        placeholder="Search courses..."
        className="w-full md:w-1/2 px-4 py-2 border border-gray-300 rounded-md mb-10"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* My Courses Section */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-4">My Courses</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {myCourses.length > 0 ? (
            myCourses.map((course) => renderCourseCard(course, "my"))
          ) : (
            <p className="text-gray-600">
              You are not enrolled in any courses.
            </p>
          )}
        </div>
      </section>

      {/* Recommended Section */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Recommended</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {recommendedCourses.length > 0 ? (
            recommendedCourses.map((course) =>
              renderCourseCard(course, "recommended")
            )
          ) : (
            <p className="text-gray-600">No recommended courses found.</p>
          )}
        </div>
      </section>
    </div>
  );
};

export default Courses;
