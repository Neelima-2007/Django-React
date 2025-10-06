// import React from 'react'

// const Gallery = () => {
//   return (
//     <div>
//       <section>
//         <section class="text-gray-600 body-font">
//   <div class="container px-5 py-24 mx-auto">
//     <div class="flex flex-wrap -m-4">
//       <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
//         <a class="block relative h-48 rounded overflow-hidden">
//           <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://dummyimage.com/420x260"/>
//         </a>
//         <div class="mt-4">
//           <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
//           <h2 class="text-gray-900 title-font text-lg font-medium">The Catalyzer</h2>
//           <p class="mt-1">$16.00</p>
//         </div>
//       </div>
//       <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
//         <a class="block relative h-48 rounded overflow-hidden">
//           <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://dummyimage.com/421x261"/>
//         </a>
//         <div class="mt-4">
//           <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
//           <h2 class="text-gray-900 title-font text-lg font-medium">Shooting Stars</h2>
//           <p class="mt-1">$21.15</p>
//         </div>
//       </div>
//       <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
//         <a class="block relative h-48 rounded overflow-hidden">
//           <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://dummyimage.com/422x262"/>
//         </a>
//         <div class="mt-4">
//           <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
//           <h2 class="text-gray-900 title-font text-lg font-medium">Neptune</h2>
//           <p class="mt-1">$12.00</p>
//         </div>
//       </div>
//       <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
//         <a class="block relative h-48 rounded overflow-hidden">
//           <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://dummyimage.com/423x263"/>
//         </a>
//         <div class="mt-4">
//           <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
//           <h2 class="text-gray-900 title-font text-lg font-medium">The 400 Blows</h2>
//           <p class="mt-1">$18.40</p>
//         </div>
//       </div>
//       <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
//         <a class="block relative h-48 rounded overflow-hidden">
//           <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://dummyimage.com/424x264"/>
//         </a>
//         <div class="mt-4">
//           <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
//           <h2 class="text-gray-900 title-font text-lg font-medium">The Catalyzer</h2>
//           <p class="mt-1">$16.00</p>
//         </div>
//       </div>
//       <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
//         <a class="block relative h-48 rounded overflow-hidden">
//           <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://dummyimage.com/425x265"/>
//         </a>
//         <div class="mt-4">
//           <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
//           <h2 class="text-gray-900 title-font text-lg font-medium">Shooting Stars</h2>
//           <p class="mt-1">$21.15</p>
//         </div>
//       </div>
//       <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
//         <a class="block relative h-48 rounded overflow-hidden">
//           <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://dummyimage.com/427x267"/>
//         </a>
//         <div class="mt-4">
//           <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
//           <h2 class="text-gray-900 title-font text-lg font-medium">Neptune</h2>
//           <p class="mt-1">$12.00</p>
//         </div>
//       </div>
//       <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
//         <a class="block relative h-48 rounded overflow-hidden">
//           <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://dummyimage.com/428x268"/>
//         </a>
//         <div class="mt-4">
//           <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
//           <h2 class="text-gray-900 title-font text-lg font-medium">The 400 Blows</h2>
//           <p class="mt-1">$18.40</p>
//         </div>
//       </div>
//     </div>
//   </div>
// </section>
//       </section>
//     </div>
//   )
// }

// export default Gallery


import React from "react";

const Gallery = () => {
  const images = [
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&w=800&q=80",
  ];

  return (
    <section className="text-gray-600 body-font bg-gray-100">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="text-3xl font-medium title-font mb-4 text-gray-900">
            Our Gallery
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-600">
            A collection of moments, creativity, and innovation from our
            projects and community.
          </p>
        </div>

        {/* Image Grid */}
        <div className="flex flex-wrap -m-4">
          {images.map((img, index) => (
            <div key={index} className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <img
                  alt={`gallery-img-${index}`}
                  className="absolute inset-0 w-full h-full object-cover object-center rounded-lg"
                  src={img}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100 rounded-lg transition-all duration-300">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                    CATEGORY
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Amazing Work
                  </h1>
                  <p className="leading-relaxed">
                    Explore some of our best moments captured in frames.
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
