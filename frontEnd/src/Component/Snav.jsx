import React, { useContext, useState } from "react";
import {
  DarkThemeToggle,
  Sidebar,
  SidebarItem,
  SidebarItemGroup,
  SidebarItems,
  SidebarLogo,
  darkThemeToggleTheme
} from "flowbite-react";
import { LayoutDashboard, LogIn, Menu, NotebookIcon, Plus, PlusCircle } from "lucide-react";
import { UserContext } from "../Context/UserContext";
import { NavLink } from "react-router-dom";

const Snav = () => {
  const {open, setOpen, setToken, navigate}=useContext(UserContext)

  return (
    <div className="flex flex-row ">
      {/* Overlay for mobile (clicking it will close sidebar) */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40 sm:hidden"
          onClick={() => setOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <Sidebar
        theme={{
          root: {
            base: "h-screen !rounded-none fixed sm:static z-50 top-0 left-0 transition-transform duration-300 ease-in-out",
            inner:
              "h-full overflow-y-auto overflow-x-hidden bg-white px-3 py-4 !rounded-none ",
          },
        }}
        className={`${
          open ? "translate-x-0" : "-translate-x-full"
        }   sm:translate-x-0 sm:block w-64 border-r border-black  shadow-md  shadow-inherit overflow-y-hidden `}
      >
        <SidebarLogo className="rubik-dirt-regular text-3xl">
          Invoizo
        </SidebarLogo>

        <hr className="w-full h-1 bg-gradient-to-r from-black via-gray-500 to-indigo-50 animate-gradient-x my-4" />

        <SidebarItems>
          <SidebarItemGroup>
            <SidebarItem icon={LayoutDashboard}  as={NavLink} to='/allinvoice'  > Dashboard </SidebarItem>
            {/* <SidebarItem icon={NotebookIcon}  as={NavLink}  to='/invoice'>Invoice </SidebarItem> */}
            <SidebarItem icon={PlusCircle}  as={NavLink} to='/createInvoice'>  Create Invoice</SidebarItem>
            <SidebarItem icon={LogIn} className=" mt-[60vh] sm:mt-[57vh]" onClick={()=>{setToken(''); localStorage.setItem('token','')  ;navigate('/')}}>logout</SidebarItem>
          </SidebarItemGroup>
        </SidebarItems>
      </Sidebar>

      
    </div>
  );
};

export default Snav;
