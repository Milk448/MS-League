import { useParams } from "react-router-dom";

const CourseDetail = () => {
  const { id } = useParams();

  // This is mock data — will be fetched from backend later
  const course = {
    title: "Build a free website with WordPress",
    description:
      "In this guided course, you'll learn how to create a professional website using WordPress, covering the basics of themes, plugins, and publishing content.",
    skills: ["WordPress", "CMS", "Web Design", "Development"],
    videoUrl: "https://www.youtube.com/embed/ZvP8YzKzsnQ", // optional embed video
    materials: ["PDF Guide", "Slides", "Quiz"],
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{course.title}</h1>
      <p className="text-gray-700 mb-6">{course.description}</p>

      {/* Video */}
      <div className="mb-6">
        <iframe
          src={course.videoUrl}
          className="w-full h-64 rounded-md"
          title="Course Video"
          allowFullScreen
        ></iframe>
      </div>

      {/* Skills */}
      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">Skills you'll gain</h2>
        <ul className="list-disc list-inside text-gray-700">
          {course.skills.map((skill, i) => (
            <li key={i}>{skill}</li>
          ))}
        </ul>
      </div>

      {/* Materials */}
      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">Materials</h2>
        <ul className="list-disc list-inside text-gray-700">
          {course.materials.map((material, i) => (
            <li key={i}>{material}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CourseDetail;
