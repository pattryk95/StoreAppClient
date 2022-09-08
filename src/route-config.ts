import AboutPage from "./features/about/AboutPage";
import Catalog from "./features/catalog/Catalog";
import ProductDetails from "./features/catalog/ProductDetails";
import ContactPage from "./features/contact/ContactPage";
import LandingPage from "./features/landingPage/LandingPage";
import RedirectToLandingPage from "./features/utils/RedirectToLandingPage";

const routes = [
  
    { path: "/catalog", component: Catalog, exact: true },
    { path: "/catalog/:id(\\d+)", component: ProductDetails},
  
    {
      path: "/about",
      component: AboutPage
    },
    {
      path: "/contact",
      component: ContactPage,
    },
  
    // { path: "/register", component: Register },
    // { path: "/login", component: Login },
  
    { path: "/", component: LandingPage, exact: true },
    { path: "*", component: RedirectToLandingPage },
  ];
  export default routes;