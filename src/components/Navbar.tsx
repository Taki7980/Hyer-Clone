import { FaRegRegistered } from "react-icons/fa";
import Link from "next/link";
const Navbar = () => {
  return (
    <div className="h-[50vh] flex items-center  py-9 px-5">
      <div className="bigTextBox h-full w-[60%] flex items-center gap-7">
            <h1 className="font-bold text-[18rem] relative top-[-45px]">Hyer</h1>
            <FaRegRegistered className="mb-auto h-10 w-10"/>
      </div>
      <div className="bigTextBox h-full w-[40%]">
            <div className="innerBox bg-red-700 py-3 flex h-full w-full px-10 rounded-lg  justify-between" >
                  <div className="w-[70%] flex justify-evenly space-x-3">
                        <Link href="/contact">contact</Link>
                        <Link href="/contact">contact</Link>
                        <Link href="/contact">contact</Link>
                  </div>
                  <div className="w-[30%] flex justify-evenly">
                        <div className="">
                              darkbtn
                        </div>
                        <div className="">
                              tost
                        </div>
                  </div>
            </div>
      </div>
    </div>
  );
};

export default Navbar;
