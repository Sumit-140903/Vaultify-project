import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-vaultify-dark text-white">
      <div className="text-center">
        <h1 className="text-6xl font-bold font-inter mb-4 text-vaultify-purple">
          404
        </h1>
        <h2 className="text-2xl font-semibold font-inter mb-4">
          Page Not Found
        </h2>
        <p className="text-vaultify-text-gray mb-8">
          The page you're looking for doesn't exist.
        </p>
        <Link
          to="/"
          className="inline-block bg-purple-gradient text-white font-bold font-inter px-8 py-3 rounded-lg hover:transform hover:scale-105 transition-all duration-300"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
}
