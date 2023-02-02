import React from "react";

function Involved() {
  return (
    <div>
      <div class="flex min-h-screen items-center justify-center ">
        <div class="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 rounded-md">
            <div class="h-96 w-96">
              <img
                class="h-full w-full object-Contain transition-transform duration-500 "
                src="https://cdn.shopify.com/s/files/1/0326/7189/files/1_cee46d87-f6db-40bd-a38a-1326bd89574b_400x.png?v=1614315088"
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
            <div class="h-96 w-96">
              <img
                class="h-full w-full object-cover transition-transform duration-500"
                src="https://cdn.shopify.com/s/files/1/0326/7189/files/2_2fce6455-c304-475d-84dd-7872a448eb65_400x.png?v=1614315088"
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
            <div class="h-96 w-96">
              <img
                class="h-full w-full object-cover transition-transform duration-500 "
                src="https://cdn.shopify.com/s/files/1/0326/7189/files/3_60d14ccf-ef0d-4b3d-b91b-4d8d3a651c57_400x.png?v=1614315088"
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
  );
}

export default Involved;
