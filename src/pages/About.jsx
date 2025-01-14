import picture from "../assets/picofme.jpg";

export default function about() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-200 min-h-screen flex flex-col items-center justify-center px-6 py-12">
      
      {/* Wrapper for content */}
      <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-x-12 md:space-y-0">

        {/* Picture of me */}
        <img
          className="w-full h-auto max-w-md rounded-lg shadow-lg"
          src={picture}
          alt="Image of me"
        />
        
        {/* Text Section */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl font-bold mb-6 text-blue-600 dark:text-blue-400">
            About Me
          </h1>
          <p className="text-lg leading-relaxed">
            <span className="font-semibold text-gray-800 dark:text-gray-100">
              Passionate
            </span>{" "}
            and results-driven UI/UX designer with seven years of experience in
            crafting intuitive and visually appealing user experiences. Skilled in{" "}
            <span className="text-blue-600 dark:text-blue-400">
              user research
            </span>
            ,{" "}
            <span className="text-blue-600 dark:text-blue-400">
              wireframing
            </span>
            ,{" "}
            <span className="text-blue-600 dark:text-blue-400">
              prototyping
            </span>
            , and{" "}
            <span className="text-blue-600 dark:text-blue-400">
              usability testing
            </span>
            . Strong collaborator and advocate for{" "}
            <span className="font-semibold text-gray-800 dark:text-gray-100">
              user-centered design
            </span>
            . Seeking new opportunities to create impactful digital products.
          </p>
        </div>
      </div>
    </div>
  );
}
