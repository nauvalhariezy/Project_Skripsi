import { useRef } from "react";
import bg from "../../assets/bg.png";
import mmb1 from "../../assets/mmb1.jpg";
import mulmed from "../../assets/mulmed.png";

const HomePage = () => {
  const myRef = useRef(null)

  return (
    <>
      <div className="p-2 md:p-8 h-[calc(100vh-80px)] flex items-center" style={{backgroundImage: `url(${bg})`, backgroundRepeat: 'repeat'}}>
        {/* <Header title="Informasi" /> */}
        <div className="grid grid-cols-5 mx-20 ">
          <div className="col-span-3 text-gray-600 font-bold tracking-wide">
            <div className="text-4xl mb-1 tracking-wider">SISTEM INFORMASI</div>
            <div className="text-4xl mb-2 tracking-wider">PENGELOLAHAN LABORATORIUM</div>
            <div className="text-3xl text-gray-500 mb-1">Departemen Multimedia Kreatif</div>
            <div className="text-3xl text-gray-500">Politeknik Elektronika Negeri Surabaya</div>
            <div className="mt-8">
              <button
                className="bg-blue-500 hover:bg-blue-700 tracking-wider text-lg font-medium text-white py-2 px-4 rounded"
                onClick={()=>myRef.current?.scrollIntoView({behavior: 'smooth'})}
              >Informasi</button>
            </div>
          </div>
          <div className="col-span-2">
            <img
              src={mulmed}
              alt="user-profile"
            />
          </div>
        </div>
      </div>
      <div className="p-2 md:p-8 h-screen" style={{backgroundImage: `url(${mmb1})`}}>
        <div className="grid grid-cols-5 mx-20 ">
          <p className="text-3xl font-bold tracking-tight text-white">Informasi</p>
        </div>
      </div>
      <div ref={myRef}/>
    </>
  );
};

export default HomePage;