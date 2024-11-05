"use client";
import Link from "next/link";
import {
  FaHome,
  FaCartPlus,
  FaList,
  FaUserCircle,
  FaArrowAltCircleRight,
} from "react-icons/fa";
import { usePathname } from "next/navigation";
export default function Sidebar() {
  const pathname = usePathname();
  return (
    <div className="bg-slate-900 h-screen w-1/4 flex flex-col justify-between">
      <div>
        <h1 className="text-white font-bold text-3xl ml-12 mt-12">Essence</h1>
        <ul className="px-2 py-4">
          <Link href={"/dasboard"}>
            <li
              className={`px-8 py-3 my-2 text-white rounded-md cursor-pointer flex items-center hover:bg-slate-700 ${
                pathname === "/dasboard" && "bg-slate-700"
              }`}
            >
              <FaHome fontSize={20} className="mr-2" /> Dasboard
            </li>
          </Link>
          <Link href={"/category"}>
            <li
              className={`px-8 py-3 my-2 text-white rounded-md cursor-pointer flex items-center hover:bg-slate-700 ${
                pathname === "/category" && "bg-slate-700"
              }`}
            >
              <FaList fontSize={20} className="mr-2" /> Category
            </li>
          </Link>
          <li
            className={`px-8 py-3 my-2 text-white rounded-md cursor-pointer flex items-center hover:bg-slate-700 ${
              pathname === "/product" && "bg-slate-700"
            }`}
          >
            <FaCartPlus fontSize={20} className="mr-2" /> Product
          </li>
        </ul>
      </div>
      <div className="bg-slate-700 p-3 flex items-center justify-between">
        <div className="flex">
          <FaUserCircle color="white" fontSize={36} />
          <div className="ml-2">
            <h2 className="text-white text-sm">Kenna Taddese</h2>
            <p className="text-white text-xs">Admin</p>
          </div>
        </div>
        <FaArrowAltCircleRight
          color="grey"
          fontSize={24}
          className="cursor-pointer"
        />
      </div>
    </div>
  );
}
