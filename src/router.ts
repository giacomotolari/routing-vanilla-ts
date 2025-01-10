import page1 from "./pages/page1";
import page2 from "./pages/page2";
import page3 from "./pages/page3";
import page404 from "./pages/404";

const routes = [
  {
    path: "/page1",
    page: page1,
  },
  {
    path: "/page2",
    page: page2,
  },
  {
    path: "/page3",
    page: page3,
  },
];

const currentPath = window.location.pathname;

const route = routes.find((route) => route.path === currentPath);

document.body.innerHTML = route ? route.page() : page404();
