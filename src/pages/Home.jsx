import { Link } from "react-router-dom";
import hero from "../assets/images/hero.jpeg";

const Home = () => {
  return (
    <>
      <div className="bg-blue-500 text-white py-16">
        <div className="container mx-auto flex flex-col max-sm:space-y-10 sm:flex-row items-center justify-between">
          <div className="w-2/3 sm:w-1/2">
            <h1 className="text-5xl font-bold mb-4">Todo Uygulaması</h1>
            <p className="text-lg mb-4">
              Görevlerinizi düzenleyin ve takip edin!
            </p>
            <Link
              to="/sign-up"
              className="bg-white text-blue-500 py-2 px-4 rounded-full font-semibold transition duration-300 hover:bg-blue-500 hover:text-white"
            >
              Hemen Başla
            </Link>
          </div>
          <div className="w-2/3 sm:w-1/2">
            <img src={hero} className="w-full h-auto rounded-md shadow-md" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
