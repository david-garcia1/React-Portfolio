export default function Footer() {
    return (
      <footer className="bg-gray-100 dark:bg-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-center">
            {/* Name */}
            <h1 className="text-xl font-bold text-gray-900 dark:text-gray-200">David Garcia</h1>
            
            {/* Social Media Links */}
            <div className="flex space-x-4">
              {/* GitHub */}
              <a
                href="https://github.com/david-garcia1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-900 dark:text-gray-200 hover:text-blue-500"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
                  alt="GitHub logo"
                  className="h-8 w-8"
                />
              </a>
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/david-garcia/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-900 dark:text-gray-200 hover:text-blue-500"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/0/01/LinkedIn_Logo_2023.png"
                  alt="LinkedIn logo"
                  className="h-8 w-8"
                />
              </a>
              {/* Twitter (Example, if you'd like to add more links) */}
              <a
                href="https://twitter.com/davidgarcia"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-900 dark:text-gray-200 hover:text-blue-500"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/6/60/Twitter_Logo_as_of_2021.svg"
                  alt="Twitter logo"
                  className="h-8 w-8"
                />
              </a>
            </div>
          </div>
          {/* Footer Text */}
          <p className="mt-4 text-center text-gray-500 dark:text-gray-400">
            &copy; {new Date().getFullYear()} David Garcia. All Rights Reserved.
          </p>
        </div>
      </footer>
    );
  }
  