import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { motion, useInView } from "framer-motion";
import { ExternalLink } from "lucide-react";

export default function ProjectCard({ project, index }) {
  const { t } = useTranslation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
      className="bg-card border border-border rounded-xl p-6 flex flex-col gap-4 card-glow transition-all duration-300 hover:border-primary/50 group"
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-mono text-primary">0{index + 1}</span>
            <span className="w-6 h-px bg-border" />
          </div>
          <h3 className="text-white font-bold text-lg group-hover:text-primary transition-colors duration-200">
            {t(`projectData.${project.key}.name`)}
          </h3>
        </div>
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-shrink-0 p-2 rounded-lg border border-border text-slate-500 hover:text-primary hover:border-primary transition-all duration-200"
          aria-label="Visit project"
        >
          <ExternalLink size={16} />
        </a>
      </div>

      {/* Description */}
      <p className="text-slate-400 text-sm leading-relaxed flex-1">
        {t(`projectData.${project.key}.description`)}
      </p>

      {/* Tech tags */}
      <div>
        <p className="text-xs text-slate-600 font-mono mb-2 uppercase tracking-wider">
          {t("projects.stack")}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 text-xs font-mono rounded-md border border-border text-slate-400 bg-dark/50"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Visit link */}
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-xs font-mono text-primary hover:text-secondary transition-colors duration-200 mt-auto pt-2 border-t border-border"
      >
        <ExternalLink size={12} />
        {project.url.replace("https://", "")}
      </a>
    </motion.div>
  );
}
