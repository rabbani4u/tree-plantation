import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Cards.css";

function Cards() {
  return (
    <div className="container my-10">
      <h1 className="heading__text">WHERE WE PLANT</h1>
      <div
        style={{
          borderBottom: "1px solid lightgray",
          marginBottom: "30px",
          marginTop: "20px",
        }}
      ></div>
      <div>
        <div class="flex items-center justify-center ">
          <div class="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-5">
            <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 rounded-md">
              <div class="h-80 w-80">
                <img
                  class="h-full w-full object-cover transition-transform duration-500 "
                  src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                  alt=""
                />
              </div>
              <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div class="absolute inset-0 flex translate-y-[82%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <h1 class="font-dmserif text-3xl font-bold text-white">
                  INDIVIDUAL
                </h1>
                <p class="mb-3 text-md  text-white opacity-100 transition-opacity duration-300 group-hover:opacity-100">
                  Become a Tree Ambaseder and support our global reforestation
                  effort
                </p>
                <button class="rounded-md bg-teal-700 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
                  GET INVOLVED
                </button>
              </div>
            </div>
            <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 rounded-md">
              <div class="h-80 w-80">
                <img
                  class="h-full w-full object-cover transition-transform duration-500 "
                  src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                  alt=""
                />
              </div>
              <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div class="absolute inset-0 flex translate-y-[82%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <h1 class="font-dmserif text-3xl font-bold text-white">
                  INDIVIDUAL
                </h1>
                <p class="mb-3 text-md  text-white opacity-100 transition-opacity duration-300 group-hover:opacity-100">
                  Become a Tree Ambaseder and support our global reforestation
                  effort
                </p>
                <button class="rounded-md bg-teal-700 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
                  GET INVOLVED
                </button>
              </div>
            </div>
            <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 rounded-md">
              <div class="h-80 w-80">
                <img
                  class="h-full w-full object-cover transition-transform duration-500 "
                  src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                  alt=""
                />
              </div>
              <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div class="absolute inset-0 flex translate-y-[82%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <h1 class="font-dmserif text-3xl font-bold text-white">
                  INDIVIDUAL
                </h1>
                <p class="mb-3 text-md  text-white opacity-100 transition-opacity duration-300 group-hover:opacity-100">
                  Become a Tree Ambaseder and support our global reforestation
                  effort
                </p>
                <button class="rounded-md bg-teal-700 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
                  GET INVOLVED
                </button>
              </div>
            </div>

            <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 rounded-md">
              <div class="h-80 w-80">
                <img
                  class="h-full w-full object-cover transition-transform duration-500"
                  src="https://images.unsplash.com/photo-1494145904049-0dca59b4bbad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80"
                  alt=""
                />
              </div>
              <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div class="absolute inset-0 flex translate-y-[80%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <h1 class="font-dmserif text-3xl font-bold text-white">
                  BUSINESS
                </h1>
                <p class="mb-3 text-md  text-white opacity-100 transition-opacity duration-300 group-hover:opacity-100">
                  Increase Your Corporate Social Responsibility.
                </p>
                <button class="rounded-md bg-teal-700 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
                  GET INVOLVED
                </button>
              </div>
            </div>
            <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 rounded-md">
              <div class="h-80 w-80">
                <img
                  class="h-full w-full object-cover transition-transform duration-500 "
                  src="https://images.unsplash.com/photo-1502675135487-e971002a6adb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80"
                  alt=""
                />
              </div>
              <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div class="absolute inset-0 flex translate-y-[80%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <h1 class="font-dmserif text-3xl font-bold text-white">
                  SCHOOLS
                </h1>
                <p class="mb-3 text-md  text-white opacity-100 transition-opacity duration-300 group-hover:opacity-100">
                  Bring Environmental Education and Campus
                </p>
                <button class="rounded-md bg-teal-700 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
                  GET INVOLVED
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
