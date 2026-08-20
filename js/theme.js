const STORAGE_KEY = "gvybzy-theme";

export function initTheme() {
  const root = document.documentElement;
  const button = document.getElementById("theme-toggle");
  const saved = localStorage.getItem(STORAGE_KEY);
  const initial = saved === "light" || saved === "dark" ? saved : "dark";

  root.dataset.theme = initial;
  updateButton(button, initial);

  button?.addEventListener("click", (e) => {
    const next = root.dataset.theme === "dark" ? "light" : "dark";

    const apply = () => {
      root.dataset.theme = next;
      localStorage.setItem(STORAGE_KEY, next);
      updateButton(button, next);
    };

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!document.startViewTransition || reduceMotion) {
      apply();
      return;
    }

    const x = e && typeof e.clientX === "number" ? e.clientX : window.innerWidth / 2;
    const y = e && typeof e.clientY === "number" ? e.clientY : window.innerHeight / 2;
    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );

    const transition = document.startViewTransition(apply);
    transition.ready.then(() => {
      root.animate(
        { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${endRadius}px at ${x}px ${y}px)`] },
        { duration: 550, easing: "ease-in-out", pseudoElement: "::view-transition-new(root)" }
      );
    });
  });
}

function updateButton(button, theme) {
  if (!button) return;

  const light = theme === "light";
  button.classList.toggle("is-light", light);
  button.setAttribute("aria-pressed", String(light));
  button.setAttribute(
    "aria-label",
    light ? "Switch to dark mode" : "Switch to light mode"
  );
  button.title = light ? "Switch to dark mode" : "Switch to light mode";
}
