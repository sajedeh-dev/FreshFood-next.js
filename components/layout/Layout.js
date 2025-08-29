import Link from "next/link";
import { FiShoppingCart } from "react-icons/fi";
import { LuSearch } from "react-icons/lu";
import { PiBowlFoodBold } from "react-icons/pi";
import { FaInstagram } from "react-icons/fa6";
import { IoLogoTwitter } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { LuSendHorizontal } from "react-icons/lu";




function Layout({ children }) {
  return (
    <>
      <header className=" fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100 shadow-sm">
        <div className=" w-full container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 md:h-20 h-16 ">
          <div className="flex items-center gap-1">
            <PiBowlFoodBold className=" size-6 text-green-600" />
            <Link className="text-3xl font-bold text-green-600" href="/">
             FreshFood
            </Link>
            
          </div>

          <div className="flex items-center gap-8 ">
            <Link className=" font-medium text-md text-red-600" href="/Home">
              Why FreshFood?
            </Link>
            <Link
              className="font-medium text-md text-gray-900 hover:text-red-500"
              href="/categories"
            >
              Services
            </Link>
            <Link
              className="font-medium text-md text-gray-900 hover:text-red-500"
              href="/menu"
            >
              Menu
            </Link>
            <Link
              className="font-medium text-md text-gray-900 hover:text-red-500"
              href="/categories"
            >
              Categories
            </Link>
          </div>

          <div className=" flex items-center gap-4">
            <Link href=""><FiShoppingCart className=" size-5" /></Link>
            <Link href=""><LuSearch className=" size-5" /></Link>
            <button className=" text-md text-white bg-red-600 px-6 py-2 rounded-lg">Login</button>
          </div>
        </div>
      </header>
      <div>{children}</div>
      <footer className=" mt-32 bottom-0 shadow-[0_-2px_5px_rgba(0,0,0,0.15)] ">
        <div className=" grid grid-cols-2 gap-6 ml-12 md:ml-0 md:grid-cols-5 md:flex  md:justify-around md:px-44 py-6  ">
          <div className=" md:flex md:flex-col md:gap-y-7 ">
            <h2 className=" font-semibold text-lg text-red-600">FreshFood</h2>
            <p className=" text-md font-medium text-gray-400">Our job is to filling your tummy with delicious<br/> food and  with fast and free delivery.</p>
            <div className="flex items-center gap-3 text-red-600 mt-4">
              <FaInstagram />
              <IoLogoTwitter />
              <FaFacebookF />


            </div>
          </div>
          <div className=" flex flex-col">
            <h2 className=" font-semibold text-lg">About</h2>
            <span className=" text-md font-medium text-gray-400">About Us</span>
            <span className=" text-md font-medium text-gray-400">Features</span>
            <span className=" text-md font-medium text-gray-400">News</span>
            <span className=" text-md font-medium text-gray-400">Menu</span>
          </div>
          <div className=" flex flex-col">
            <h2 className=" font-semibold text-lg">Company</h2>
            <span className=" text-md font-medium text-gray-400">Why Foodeli?</span>
            <span className=" text-md font-medium text-gray-400">Partner With Us</span>
            <span className=" text-md font-medium text-gray-400">FAQ</span>
            <span className=" text-md font-medium text-gray-400">Blog</span>
          </div>
          <div className=" flex flex-col">
            <h2 className=" font-semibold text-lg">Support</h2>
            <span className=" text-md font-medium text-gray-400">Account</span>
            <span className=" text-md font-medium text-gray-400">Support Center</span>
            <span className=" text-md font-medium text-gray-400">Feedback</span>
            <span className=" text-md font-medium text-gray-400">Contact Us</span>
            <span className=" text-md font-medium text-gray-400">Accessibilty</span>
          </div>
          <div className=" flex flex-col">
            <h2 className=" font-semibold text-lg">Get in Touch</h2>
            <span className=" text-md font-medium text-gray-400 mt-2">Question or feedback?</span>
            <span className=" text-md font-medium text-gray-400">We’d love to hear from you</span>
            <button className="flex  items-center  gap-3 border border-3 py-2 justify-center  rounded-lg mt-4">
              <span>Email Address</span>
              <LuSendHorizontal className=" text-red-600" />

            </button>
          </div>
        </div>
        
      </footer>
      <p className="text-center"> footerdeveloped buy SajedehTaheri</p>
    </>
  );
}

export default Layout;
