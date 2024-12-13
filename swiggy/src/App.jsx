import React, { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import foodProducts from "./utils/Data";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [value, setValue] = useState(0);

  return (
    <div className="relative">
      <div className="overlay bg-black h-auto">
        <NavBar setSideBar={setIsOpen} />

        <div className="content-part w-full h-full flex">
          <SideBar condition={isOpen} />

          <div className="content w-[80%] h-full px-5 py-4">
            <div className="heading-controls flex justify-between items-center">
              <h1 className="text-2xl font-bold ">What's on your mind?</h1>
              <div className="controls space-x-2">
                <i
                  className="ri-arrow-left-line w-[80px] h-[80px] rounded-full bg-gray-400 font-bold p-2 active:scale-[90%] cursor-pointer hover:bg-gray-700 "
                  onClick={() => setValue((prevValue) => prevValue + 300)}
                ></i>
                <i
                  className="ri-arrow-right-line w-[80px] h-[80px] rounded-full bg-gray-400 font-bold p-2 active:scale-[90%] cursor-pointer hover:bg-gray-700 "
                  onClick={() => setValue((prevValue) => prevValue - 300)}
                ></i>
              </div>
            </div>

            <div className="cards mt-5 overflow-x-auto w-full flex gap-3 text-center bg-white border-2 border-red-500 text-black items-center ">
              {foodProducts.map((Item) => {
                return (
                  <div>
                    <div
                      className={`card w-[130px] h-[130px] flex-shrink-0 transform translate-x-[-${value}%]`}
                    >
                      <img
                        src="https://cdn.pixabay.com/photo/2020/10/05/19/55/hamburger-5630646_640.jpg"
                        className="w-[100%] h-[80%]"
                        alt=""
                      />
                      <h2 className="font-bold">{Item.name}</h2>
                    </div>{" "}
                  </div>
                );
              })}

              {/* This is the card */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
