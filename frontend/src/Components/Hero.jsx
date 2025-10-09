// import React from 'react'

// const Hero = () => {
//   return (
//     <div>
//       <section>
//         <section class="text-gray-600 body-font">
//   <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
//     <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
//       <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Before they sold out
//         <br class="hidden lg:inline-block"/>readymade gluten
//       </h1>
//       <p class="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
//       <div class="flex justify-center">
//         <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
//         <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button>
//       </div>
//     </div>
//     <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
//       <img class="object-cover object-center rounded" alt="hero" src="src/assets/svbc.webp"/>
//     </div>
//   </div>
// </section>
//       </section>
//     </div>
//   )
// }

// export default Hero


import React from "react";


const Hero = () => {
  return (
    <section className="text-gray-600 body-font bg-gray-100">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        {/* Left Side - Text */}
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Welcome to <span className="text-indigo-600">Your App</span>
          </h1>
          <p className="mb-8 leading-relaxed text-gray-700">
            Build modern web applications effortlessly using Django REST Framework for your backend and React for your frontend. 
            Manage your data easily, create responsive UIs, and deploy with confidence.
          </p>
          <div className="flex justify-center">
            <button className="inline-flex text-white bg-indigo-600 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-700 rounded text-lg">
              Get Started
            </button>
            <button className="ml-4 inline-flex text-gray-700 bg-gray-200 border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 rounded text-lg">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=800&q=80"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
