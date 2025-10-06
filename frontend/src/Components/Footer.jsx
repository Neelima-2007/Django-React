import React from 'react'

const Footer = () => {
  return (
    <div>
      <section>
        <footer class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap md:text-left text-center order-first">
      <div class="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
        <nav class="list-none mb-10">
          <li>
            <a class="text-gray-600 hover:text-gray-800">First Link</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">Second Link</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">Third Link</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">Fourth Link</a>
          </li>
        </nav>
      </div>
      <div class="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
        <nav class="list-none mb-10">
          <li>
            <a class="text-gray-600 hover:text-gray-800">First Link</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">Second Link</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">Third Link</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">Fourth Link</a>
          </li>
        </nav>
      </div>
      <div class="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
        <nav class="list-none mb-10">
          <li>
            <a class="text-gray-600 hover:text-gray-800">First Link</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">Second Link</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">Third Link</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">Fourth Link</a>
          </li>
        </nav>
      </div>
      <div class="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">SUBSCRIBE</h2>
        <div class="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
          <div class="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
            <label for="footer-field" class="leading-7 text-sm text-gray-600">Placeholder</label>
            <input type="text" id="footer-field" name="footer-field" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
          <button class="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Button</button>
        </div>
        <p class="text-gray-500 text-sm mt-2 md:text-left text-center">Bitters chicharrones fanny pack
          <br class="lg:block hidden"/>waistcoat green juice
        </p>
      </div>
    </div>
  </div>
{/* Contact Section */}
      <section className="bg-blue-700 text-white py-16 px-6 md:px-20 text-center">
        <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
        <p className="max-w-2xl mx-auto mb-4">
          Have questions or suggestions? We’d love to hear from you!
        </p>
        <p className="text-lg">
          📧 Email: <a href="mailto:support@coursesystem.com" className="underline">support@coursesystem.com</a>
        </p>
        <p className="text-lg mt-2">📞 Phone: +91 98765 43210</p>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center py-4">
        <p>© {new Date().getFullYear()} Course Registration System | Built with Django & React</p>
      </footer>
    



</footer>
      </section>
    </div>
  )
}

export default Footer
