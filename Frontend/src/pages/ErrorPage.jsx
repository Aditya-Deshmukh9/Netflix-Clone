import React from "react";
import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <div className="flex items-center justify-center min-h-screen from-gray-800 via-greeen-300 to-red-500 bg-gradient-to-br">
      <div className="w-full max-w-lg px-10 py-8 mx-auto bg-white rounded-lg shadow-xl">
        <div className="max-w-md mx-auto space-y-6">
          <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
            <div className="mx-auto max-w-screen-sm text-center">
              <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500">
                !404
              </h1>
              <p className="mb-4 text-3xl tracking-tight font-bold text-black md:text-4xl">
                Internal Server Error.
              </p>
              <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
                We are already working to solve the problem.{" "}
              </p>
              <Link
                to="/"
                className="px-5 py-3 rounded-md bg-red-800 mt-2 text-white"
              >
                Return To Home Page
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ErrorPage;
