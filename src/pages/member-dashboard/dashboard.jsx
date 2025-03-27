import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Dashboard = () => {
  const user = {
    name: "Rediet",
    membershipStatus: "Active",
    courseProgress: [
      { title: "Time Management", progress: 75 },
      { title: "Public Speaking", progress: 45 },
      { title: "Creative Writing", progress: 90 },
    ],
  };

  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-2">Welcome, {user.name} 👋</h1>
        <p className="text-gray-700">
          Membership Status:{" "}
          <span className="font-semibold">{user.membershipStatus}</span>
        </p>
      </div>

      {/* Course Progress Cards */}
      <h2 className="text-2xl font-semibold mb-4">Your Course Progress</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {user.courseProgress.map((course, idx) => (
          <div
            key={idx}
            className="bg-white shadow-md p-4 rounded-lg flex flex-col items-center"
          >
            <div className="w-24 h-24 mb-4">
              <CircularProgressbar
                value={course.progress}
                text={`${course.progress}%`}
                styles={buildStyles({
                  pathColor: "#facc15",
                  textColor: "#333",
                  trailColor: "#e5e7eb",
                })}
              />
            </div>
            <h3 className="text-lg font-semibold text-center">
              {course.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
