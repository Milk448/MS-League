import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white p-8 rounded shadow">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Login to MS-League
        </h2>

        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full border border-gray-300 rounded px-4 py-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full border border-gray-300 rounded px-4 py-2"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-yellow-500 text-white py-2 rounded hover:bg-yellow-600 transition"
          >
            Login
          </button>
        </form>

        <div className="flex justify-between items-center text-sm mt-4">
          <Link
            to="/forgot-password"
            className="text-yellow-600 hover:underline"
          >
            Forgot Password?
          </Link>
          <span>
            No account?{" "}
            <Link to="/register" className="text-yellow-600 hover:underline">
              Register
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
