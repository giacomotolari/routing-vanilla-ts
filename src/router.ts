import page1 from "./pages/page1";
import page2 from "./pages/page2";
import page3 from "./pages/page3";
import page404 from "./pages/404";
import { appEl } from "./main";
import home from "./pages/home";

const routes = [
  {
    path: "/",
    page: home,
  },
  {
    path: "/page-1",
    page: page1,
  },
  {
    path: "/page-2",
    page: page2,
  },
  {
    path: "/page-3",
    page: page3,
  },
];

/**
 * Render the page based on the current path.
 * @param path - The current path.
 */
function renderPage(path: string) {
  console.log("renderPage path:", path);
  const route = routes.find((route) => route.path === path);
  console.log("route:", route);
  if (route) {
    appEl.innerHTML = route.page();
    // addNavigationListeners();
  } else {
    appEl.innerHTML = page404();
  }
}

/**
 * Navigate to a new path using the histor object.
 * @param path - The target path to navigate to.
 */
function navigateTo(path: string) {
  console.log("navigateTo path:", path);
  history.pushState({}, "", path); // Change the URL without reloading
  console.log("location.pathname:", location.pathname);
  renderPage(path); // Render the new page
}

/**
 * Add event listeners for navigation links.
 */
function addNavigationListeners() {
  const links = document.querySelectorAll("a");
  console.log("links:", links);
  links.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const targetPath = (event.target as HTMLAnchorElement).getAttribute(
        "href"
      );
      console.log("targetPath:", targetPath);
      if (targetPath) {
        navigateTo(targetPath); // Navigate to the new path
      }
    });
  });
}

/**
 * Initialize the router.
 */
export function initRouter() {
  renderPage(window.location.pathname);
  addNavigationListeners();
  // it is necessar when the user clicks the back or forward button in the browser
  window.onpopstate = () => renderPage(window.location.pathname);
}
