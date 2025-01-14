export default function Resume() {
    return (
      <div className="bg-gray-50 dark:bg-gray-900 min-h-screen flex flex-col items-center py-12 px-6">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-200 mb-8">
          Resume
        </h1>
        <a
          href="#"
          download
          className="bg-blue-600 text-white rounded-lg px-6 py-2 font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-8"
        >
          Download My Resume
        </a>
        <div className="max-w-lg w-full bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-200 mb-4">
            Skills
          </h2>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
            <li className="text-lg">HTML</li>
            <li className="text-lg">CSS</li>
            <li className="text-lg">JavaScript</li>
            <li className="text-lg">React</li>
            <li className="text-lg">Node.js</li>
            <li className="text-lg">Tailwind CSS</li>
          </ul>
        </div>
      </div>
    );
  }
  