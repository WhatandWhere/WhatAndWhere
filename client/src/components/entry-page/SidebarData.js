import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io5";
import * as GrIcons from "react-icons/gr";
import * as VscIcons from "react-icons/vsc";
import * as BiIcons from "react-icons/bi";
import * as RiIcons from "react-icons/ri";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Profile settings",
    path: "/",
    icon: <FaIcons.FaUserAlt />,
    cName: "nav-text",
  },
  {
    title: "Admin",
    path: "/",
    icon: <RiIcons.RiAdminFill />,
    cName: "nav-text",
  },
  {
    title: "TM requests",
    path: "/",
    icon: <IoIcons.IoGitPullRequest />,
    cName: "nav-text",
  },
  {
    title: "Tm events",
    path: "/",
    icon: <BiIcons.BiSolidParty />,
    cName: "nav-text",
  },
  {
    title: "Log out",
    path: "/",
    icon: <BiIcons.BiLogOut />,
    cName: "nav-text",
  },
];
