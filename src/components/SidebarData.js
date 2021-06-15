import React from 'react';
import * as FcIcons from "react-icons/fc";
import * as IoIcons from "react-icons/io";
import * as FaIcons from "react-icons/fa";


export const SidebarData = [
    {
      title: 'Home',
      path:'/',
      icon:<FcIcons.FcHome />,
      cName:'nav-text'
    },
    {
        title: 'Products',
        path:'/products',
        icon:<FaIcons.FaCartPlus />,
        cName:'nav-text'
      },
      {
        title: 'Providers',
        path:'/providers',
        icon:<FcIcons.FcBusinessman />,
        cName:'nav-text'
      },
      {
        title: 'Reports',
        path:'/reports',
        icon:<IoIcons.IoIosPaper />,
        cName:'nav-text'
      },
      {
        title: 'Support',
        path:'/suport',
        icon:<FcIcons.FcCustomerSupport />,
        cName:'nav-text'
      },
      {
        title: 'Settings',
        path:'/settings',
        icon:<FcIcons.FcSettings />,
        cName:'nav-text'
      },
      {
        title: 'About',
        path:'/about',
        icon:<FcIcons.FcAbout />,
        cName:'nav-text'
      }
]