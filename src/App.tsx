import { AiOutlineInstagram, AiOutlineLinkedin } from "react-icons/ai";
import { GrGithub } from "react-icons/gr";

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl sm:text-6xl font-bold">
        rostaklein<span className="text-gray-500">.cz</span>
      </h1>
      <div className="flex mt-4 space-x-4 text-gray-300 ">
        <a
          href="https://www.github.com/rostaklein"
          target="_blank"
          rel="noopener noreferrer"
          className=" transition duration-300 ease-in-out hover:text-gray-400"
        >
          <GrGithub className="h-6 w-6" />
        </a>
        <a
          href="https://www.linkedin.com/in/rostaklein"
          target="_blank"
          rel="noopener noreferrer"
          className=" transition duration-300 ease-in-out hover:text-gray-400"
        >
          <AiOutlineLinkedin className="h-6 w-6" />
        </a>
        <a
          href="https://www.instagram.com/rostaklein"
          target="_blank"
          rel="noopener noreferrer"
          className=" transition duration-300 ease-in-out hover:text-gray-400"
        >
          <AiOutlineInstagram className="h-6 w-6" />
        </a>
      </div>
    </div>
  );
};

export default App;
