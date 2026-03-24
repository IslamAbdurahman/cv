import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const langs = ["UZ", "RU", "EN"];

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const current = i18n.language.toUpperCase();

  const handleChange = (lang) => {
    i18n.changeLanguage(lang.toLowerCase());
  };

  return (
    <div className="flex items-center gap-1 bg-card border border-border rounded-lg p-1">
      {langs.map((lang) => (
        <motion.button
          key={lang}
          whileTap={{ scale: 0.92 }}
          onClick={() => handleChange(lang)}
          className={`px-3 py-1 text-xs font-semibold rounded-md transition-all duration-200 ${
            current === lang
              ? "bg-primary text-white"
              : "text-slate-400 hover:text-white"
          }`}
        >
          {lang}
        </motion.button>
      ))}
    </div>
  );
}
