import { initRouter } from "./router";

export const appEl = document.querySelector<HTMLDivElement>("#app")!;
console.log("appEl:", appEl);

// Initialize the router and render the initial page
document.addEventListener("DOMContentLoaded", () => {
  if (!appEl) {
    console.error("App container not found!");
    return;
  }

  initRouter();
});
