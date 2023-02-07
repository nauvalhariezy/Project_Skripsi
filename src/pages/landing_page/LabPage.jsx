import React from "react";

export default function CardComponent() {
    return (
      <div class="grid gap-2 lg:grid-cols-4">
        {/* CARD 1 */}
        <div className=" m-2 md:m-8 mt-20 p-2 md:p-8 w-full rounded-lg shadow-md">
            <img
                className="object-cover w-full h-48"
                src="https://cdn.pixabay.com/photo/2022/08/18/09/20/houses-7394390__340.jpg"
                alt="image"
            />
            <div className="p-4">
                <h4 className="text-xl font-semibold tracking-tight text-blue-600">
                    Laboratorium Studio Pertunjukan
                </h4>
                <p className="mb-2 leading-normal">
                    Laboratorium Dengan Kode PS11.06 digunakan untuk pertunjukan 
                </p>
                <button className="px-4 py-2 text-sm text-blue-100 bg-blue-500 rounded shadow hover:bg-blue-800">
                    Read More
                </button>
            </div>
        </div>
        {/* CARD 1 ABIS */}

        {/* CARD 2 */}
        <div className=" m-2 md:m-8 mt-20 p-2 md:p-8 w-full rounded-lg shadow-md">
            <img
                className="object-cover w-full h-48"
                src="https://cdn.pixabay.com/photo/2022/08/18/09/20/houses-7394390__340.jpg"
                alt="image"
            />
            <div className="p-4">
                <h4 className="text-xl font-semibold tracking-tight text-blue-600">
                    Laboratorium AV Recoding
                </h4>
                <p className="mb-2 leading-normal">
                    Laboratorium Dengan Kode JJ-313 digunakan untuk pengerjaan AV recording
                </p>
                <button className="px-4 py-2 text-sm text-blue-100 bg-blue-500 rounded shadow hover:bg-blue-800">
                    Read More
                </button>
            </div>
        </div>
        {/* CARD 2 ABIS */}

        {/* CARD 3 */}
        <div className=" m-2 md:m-8 mt-20 p-2 md:p-8 w-full rounded-lg shadow-md">
            <img
                className="object-cover w-full h-48"
                src="https://cdn.pixabay.com/photo/2022/08/18/09/20/houses-7394390__340.jpg"
                alt="image"
            />
            <div className="p-4">
                <h4 className="text-xl font-semibold tracking-tight text-blue-600">
                    Laboratorium Digital Imaging
                </h4>
                <p className="mb-2 leading-normal">
                    Laboratorium Dengan Kode PS11.04 digunakan untuk pemotretan
                </p>
                <button className="px-4 py-2 text-sm text-blue-100 bg-blue-500 rounded shadow hover:bg-blue-800">
                    Read More
                </button>
            </div>
        </div>
        {/* CARD 3 ABIS */}

        
      </div>
    );
}