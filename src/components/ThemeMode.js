import React, { useState, useEffect, useCallback } from "react";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import classNames from "classnames";

function ThemeMode({ ...rest }) {
  const osThemePreferenceIsDark = window.matchMedia(
    "(prefers-color-scheme: dark"
  ).matches;
  const [theme, setTheme] = useState(localStorage.getItem("theme"));
  const selectedTheme = useCallback(() => {
    if (theme) {
      return theme;
    } else if (osThemePreferenceIsDark) {
      return "dark";
    } else {
      return "light";
    }
  }, [theme, osThemePreferenceIsDark]);

  useEffect(() => {
    const theme = selectedTheme();
    document.body.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [selectedTheme]);

  const handleChange = () => {
    const toggle = theme === "light" ? "dark" : "light";
    setTheme(toggle);
  };
  const classes = classNames(rest.className, "swap swap-rotate");
  return (
    <label {...rest} className={classes}>
      <input
        type="checkbox"
        checked={selectedTheme() === "light"}
        className="theme-controller"
        onChange={handleChange}
      />
      <MdLightMode className="swap-on fill-current w-10 h-10" />
      <MdDarkMode className="swap-off fill-current w-10 h-10" />
    </label>
  );
}

export default ThemeMode;
