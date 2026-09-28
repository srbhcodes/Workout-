import { useEffect, useState } from "react";
import {
  NUTRITION_GUIDELINES,
  TRAINING_PRINCIPLES,
  WORKOUT_DAYS,
} from "virtual:workout-data";
import { MEAL_PLAN } from "virtual:meal-data";
import { todayDayId } from "./days.js";
import HomeView from "./views/HomeView.jsx";
import DayView from "./views/DayView.jsx";
import MealsView from "./views/MealsView.jsx";

const SCREEN_KEY = "sculpt-screen";
const THEME_KEY = "body-training-theme";

function preferredTheme() {
  const saved = localStorage.getItem(THEME_KEY);
  if (saved === "light" || saved === "dark") return saved;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function readScreen() {
  try {
    const saved = JSON.parse(localStorage.getItem(SCREEN_KEY) || "");
    if (saved && ["home", "train", "meals"].includes(saved.tab)) return saved;
  } catch {
    /* keep the default screen */
  }
  return { tab: "home", day: null };
}

export default function App() {
  const [screen, setScreen] = useState(readScreen);
  const [theme, setTheme] = useState(preferredTheme);

  useEffect(() => {
    localStorage.setItem(SCREEN_KEY, JSON.stringify(screen));
  }, [screen]);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", theme === "dark" ? "#1c1815" : "#f3eee6");
    const saved = localStorage.getItem(THEME_KEY);
    if (saved === "light" || saved === "dark") return undefined;
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const apply = () => setTheme(media.matches ? "dark" : "light");
    media.addEventListener("change", apply);
    return () => media.removeEventListener("change", apply);
  }, [theme]);

  function toggleTheme() {
    const next = theme === "dark" ? "light" : "dark";
    localStorage.setItem(THEME_KEY, next);
    setTheme(next);
  }

  function openDay(day) {
    setScreen({ tab: "train", day });
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function openTab(tab) {
    setScreen((current) => ({
      tab,
      day: tab === "train" && !current.day ? todayDayId() : current.day,
    }));
    window.scrollTo({ top: 0 });
  }

  const activeDay = screen.day || (screen.tab === "train" ? todayDayId() : null);
  const workout =
    WORKOUT_DAYS.find((day) => day.day === activeDay) ||
    WORKOUT_DAYS.find((day) => day.day === todayDayId());
  const title = screen.tab === "meals" ? "Meals" : screen.tab === "train" ? "Train" : "Home";

  return (
    <div className="phone">
      <header className="top">
        <div className="top-row">
          <p>Body Training</p>
          <button
            type="button"
            className="theme-toggle"
            aria-pressed={theme === "dark"}
            onClick={toggleTheme}
          >
            {theme === "dark" ? "Light" : "Dark"}
          </button>
        </div>
        <h1>{title}</h1>
      </header>

      <main>
        {screen.tab === "home" && (
          <HomeView principles={TRAINING_PRINCIPLES} days={WORKOUT_DAYS} onOpenDay={openDay} />
        )}
        {screen.tab === "train" && workout && <DayView workout={workout} onOpenDay={openDay} />}
        {screen.tab === "meals" && <MealsView plan={MEAL_PLAN} nutrition={NUTRITION_GUIDELINES} />}
      </main>

      <nav className="tabbar" aria-label="Sections">
        <button type="button" className={screen.tab === "home" ? "on" : ""} onClick={() => openTab("home")}>
          Home
        </button>
        <button type="button" className={screen.tab === "train" ? "on" : ""} onClick={() => openTab("train")}>
          Train
        </button>
        <button type="button" className={screen.tab === "meals" ? "on" : ""} onClick={() => openTab("meals")}>
          Meals
        </button>
      </nav>
    </div>
  );
}
