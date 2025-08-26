import Link from "next/link";
import { FiShoppingCart } from "react-icons/fi";
import { LuSearch } from "react-icons/lu";
import { PiBowlFoodBold } from "react-icons/pi";

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
      <footer className=" mt-20   text-center">
        <p> footerdeveloped buy SajedehTaheri</p>
      </footer>
    </>
  );
}

export default Layout;
