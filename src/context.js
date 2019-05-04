import React from "react";

export const themes = {
  dark: "Dark",
  light: "Light"
};

export const languages = {
  en: "English",
  es: "Spanish"
};

export const SettingsContext = React.createContext({
  theme: "dark",
  language: "en"
});
