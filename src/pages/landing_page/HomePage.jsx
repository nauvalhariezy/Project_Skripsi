import { useRef } from "react";
import bg from "../../assets/bg.png";
import mmb1 from "../../assets/mmb1.jpg";
import mulmed from "../../assets/mulmed.png";

const HomePage = () => {
  const myRef = useRef(null);

  return (
    <>
      <div
        className="p-2 md:p-8 h-[calc(100vh-80px)] flex items-center"
        style={{ backgroundImage: `url(${bg})`, backgroundRepeat: "repeat" }}
      >
        {/* <Header title="Informasi" /> */}
        <div className="grid grid-cols-5 mx-20 ">
          <div className="col-span-3 text-gray-600 font-bold tracking-wide">
            <div className="text-4xl mb-1 tracking-wider">SISTEM INFORMASI</div>
            <div className="text-4xl mb-2 tracking-wider">
              PENGELOLAHAN LABORATORIUM
            </div>
            <div className="text-3xl text-gray-500 mb-1">
              Departemen Multimedia Kreatif
            </div>
            <div className="text-3xl text-gray-500">
              Politeknik Elektronika Negeri Surabaya
            </div>
            <div className="mt-8">
              <button
                className="bg-blue-500 hover:bg-blue-700 tracking-wider text-lg font-medium text-white py-2 px-4 rounded"
                onClick={() =>
                  myRef.current?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Informasi
              </button>
            </div>
          </div>
          <div className="col-span-2">
            <img src={mulmed} alt="user-profile" />
          </div>
        </div>
      </div>
      <div
        className="p-2 md:p-8 h-screen"
        style={{ backgroundImage: `url(${mmb1})` }}
      >
        <div className="grid grid-cols-5 mx-20 ">
          <p className="text-3xl font-bold tracking-tight text-white">
            INFORMASI TERBARU
          </p>
        </div>

        {/* INFORMATION CARDS */}
        <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <svg
            class="w-10 h-10 mb-2 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z"
              clip-rule="evenodd"
            ></path>
            <path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z"></path>
          </svg>
          <a href="#">
            <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
              Costumer Service
            </h5>
          </a>
          <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">
            Bisa Hubungi CS/Laboran DTMK
          </p>
          <a
            href="#"
            class="inline-flex items-center text-blue-600 hover:underline"
          >
            Contact Center
            <svg
              class="w-5 h-5 ml-2"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path>
              <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path>
            </svg>
          </a>
        </div>
      </div>
      <div ref={myRef} />
    </>
  );
};

export default HomePage;
