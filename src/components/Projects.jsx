import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { motion, useInView } from "framer-motion";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    key: "siriussoft",
    url: "https://siriussoft.uz",
    tech: ["Laravel", "PHP", "MySQL", "Blade"],
  },
  {
    key: "faith",
    url: "https://faith.uz",
    tech: ["Laravel", "MySQL", "REST API", "Blade"],
  },
  {
    key: "payday",
    url: "https://payday.uz",
    tech: ["Laravel", "React.js", "Hikvision", "MySQL"],
  },
  {
    key: "mynine",
    url: "https://mynine.uz",
    tech: ["Laravel", "React.js", "MySQL", "Inertia.js"],
  },
  {
    key: "multitest",
    url: "https://multitest.uz",
    tech: ["Laravel", "React.js", "MySQL", "AI"],
  },
  {
    key: "schoolday",
    url: "https://schoolday.uz",
    tech: ["Laravel", "React.js", "Hikvision", "MySQL"],
  },
  {
    key: "onecall",
    url: "https://1call.uz",
    tech: ["Laravel", "React.js", "Asterisk", "SIP"],
  },
];

export default function Projects() {
  const { t } = useTranslation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <p className="text-primary text-sm font-mono tracking-widest uppercase mb-3">
          {"// "}{t("projects.subtitle")}
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          {t("projects.title")}
        </h2>
        <div className="mt-4 mx-auto w-16 h-1 bg-gradient-to-r from-primary to-secondary rounded-full" />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <ProjectCard key={project.key} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
