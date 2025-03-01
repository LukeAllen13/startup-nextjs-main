import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "About Us",
    newTab: false,
    submenu: [
      {
        id: 51,
        title: "Our Story",
        path: "/about",
        newTab: false,
      },
      {
        id: 52,
        title: "Leadership Philosophy",
        path: "/leadership",
        newTab: false,
      },
      {
        id: 53,
        title: "Our Chief Patron",
        path: "/chiefPatron",
        newTab: false,
      },
      {
        id: 54,
        title: "The Global Advisory Council",
        path: "/globalAdvisory",
        newTab: false,
      },
      {
        id: 55,
        title: "Our Impact",
        path: "/impact",
        newTab: false,
      },
    ],
  },
  {
    id: 33,
    title: "What We Do",
    newTab: false,
    submenu: [
      {
        id: 51,
        title: "The Unite Initiative",
        path: "/uniteInitiative",
        newTab: false,
      },
      {
        id: 52,
        title: "National Men's Day",
        path: "/nationalMensDay",
        newTab: false,
      },
      {
        id: 53,
        title: "16 Days of Activism",
        path: "/days",
        newTab: false,
      },
      {
        id: 54,
        title: "GBVF Response Centre",
        path: "/GBVFResponseCentre",
        newTab: false,
      },
    ],
  },
  {
    id: 3,
    title: "Get Involved",
    newTab: false,
    submenu: [
      {
        id: 51,
        title: "Become a Volunteer",
        path: "/about",
        newTab: false,
      },
      {
        id: 52,
        title: "Become A Local Donor",
        path: "/",
        newTab: false,
      },
      {
        id: 53,
        title: "Become an Internation Donor",
        path: "/blog",
        newTab: false,
      },
    ],
  },
  {
    id: 4,
    title: "What's Coming",
    path: "/",
    newTab: false,
  },
  {
    id: 5,
    title: "Our Partners",
    path: "/partners",
    newTab: false,
  },
  {
    id: 6,
    title: "Donate",
    path: "/",
    newTab: false,
  },
];

export default menuData;