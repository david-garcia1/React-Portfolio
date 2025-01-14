/* eslint-disable react/prop-types */
export default function PortfolioUI({ projects }) {
    return (
      <div className="bg-gray-50 dark:bg-gray-900 min-h-screen py-10 px-6">
        <h1 className="text-4xl font-bold text-center text-blue-600 dark:text-blue-400 mb-8">
          Portfolio
        </h1>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {projects.map((project) => (
            <div
              key={project.key}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={project.img || "https://via.placeholder.com/400"}
                alt={`Preview of ${project.title}`}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h2>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex items-center space-x-4">
                  <a
                    href={project.link || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline text-sm"
                  >
                    View Website
                  </a>
                  <a
                    href={project.githublink || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-400 hover:underline text-sm"
                  >
                    GitHub Repo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  