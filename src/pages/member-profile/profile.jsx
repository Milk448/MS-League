import { useState } from "react";

const Profile = () => {
  const [profile, setProfile] = useState({
    name: "Rediet",
    email: "rediet@example.com",
    phone: "0912345678",
    bio: "Tech enthusiast and MS-League member.",
    image: "",
  });

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfile({ ...profile, image: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Profile</h1>

      {/* Profile Picture */}
      <div className="mb-6 flex flex-col items-center">
        <div className="w-28 h-28 rounded-full bg-gray-200 overflow-hidden mb-2">
          {profile.image ? (
            <img
              src={profile.image}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="flex justify-center items-center h-full text-gray-500">
              {profile.name.charAt(0)}
            </div>
          )}
        </div>
        <input type="file" onChange={handleImageUpload} className="text-sm" />
      </div>

      {/* Profile Form */}
      <div className="space-y-4">
        <input
          type="text"
          name="name"
          value={profile.name}
          onChange={handleChange}
          placeholder="Name"
          className="w-full border p-3 rounded"
        />
        <input
          type="email"
          name="email"
          value={profile.email}
          onChange={handleChange}
          placeholder="Email"
          className="w-full border p-3 rounded"
        />
        <input
          type="text"
          name="phone"
          value={profile.phone}
          onChange={handleChange}
          placeholder="Phone"
          className="w-full border p-3 rounded"
        />
        <textarea
          name="bio"
          value={profile.bio}
          onChange={handleChange}
          placeholder="Short bio..."
          className="w-full border p-3 rounded"
          rows="4"
        ></textarea>

        <button className="bg-yellow-500 text-white px-6 py-2 rounded hover:bg-yellow-600">
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default Profile;
