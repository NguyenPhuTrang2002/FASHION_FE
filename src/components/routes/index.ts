import Header from "../Layout/DefaultLayout/Headear";
import Sidebar from "../Layout/DefaultLayout/Sidebar";
import Footer from "../Layout/DefaultLayout/Footer";
import Home from "../pages/Home";
import OtherLayout from "../Layout/OtherLayout";
const publicRoutes = [
  { path: '/', component: Home },
  { path: '/header', component: Header },
  { path: '/sidebar', component: Sidebar },
  { path: '/footer', component: Footer, layout: OtherLayout },
];

const privateRoutes: string[] = [];

export { publicRoutes, privateRoutes }

