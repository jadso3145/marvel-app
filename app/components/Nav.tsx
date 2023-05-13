"use client";

import Link from "next/link";
import Image from "next/image";
import MenuIcon from "@mui/icons-material/Menu";

const Nav = () => {
   return (
      <>
         <nav className="flex justify-between items-center w-full px-3 py-2 bg-slate-500 m-auto">
            <section className="sm:hidden">
               <div>
                  <MenuIcon className="cursor-pointer" />
               </div>
            </section>
            <section>
               <Image
                  src={"/marvel-logo.png"}
                  width={100}
                  height={100}
                  alt="logo"
                  className="cursor-pointer pl-3 "
               />
            </section>
            <section className="sm:flex hidden">
               <ul className="flex gap-5 justify-items-center">
                  <li className="hover:text-slate-300 transition-all">
                     <Link href="/tesat">Comics</Link>
                  </li>
                  <li className="hover:text-slate-300 transition-all">
                     <Link href={""}>Series</Link>
                  </li>
                  <li className="hover:text-slate-300 transition-all">
                     <Link href={""}>juegos</Link>
                  </li>
               </ul>
            </section>
            <section>
               <button className="bg-slate-300 px-4 py-2 rounded-md hover:bg-white transition-all mr-3">
                  Login
               </button>
               <button className="bg-slate-300 px-4 py-2 rounded-md hover:bg-white transition-all">
                  Sing Up
               </button>
            </section>
         </nav>
      </>
   );
};

export default Nav;
