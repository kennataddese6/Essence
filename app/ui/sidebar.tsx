import {
  FaHome,
  FaCartPlus,
  FaList,
  FaUserCircle,
  FaArrowAltCircleRight,
} from "react-icons/fa";
export default function Sidebar() {
  return (
    <div className="bg-slate-900 h-screen w-1/4 flex flex-col justify-between">
      <div>
        <h1 className="text-white font-bold text-3xl ml-12 mt-12">Essence</h1>
        <ul className="px-2 py-4">
          <li className="px-8 py-3 my-2 text-white rounded-md bg-slate-700 cursor-pointer flex items-center">
            <FaHome fontSize={20} className="mr-2" /> Dasboard
          </li>
          <li className="px-8 py-3 my-2 text-gray-300 rounded-md hover:bg-slate-700 hover:text-white cursor-pointer flex items-center">
            <FaList fontSize={20} className="mr-2" /> Category
          </li>
          <li className="px-8 py-3 my-2 text-gray-300 rounded-md hover:bg-slate-700 hover:text-white cursor-pointer flex items-center">
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
