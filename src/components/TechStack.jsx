import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const techGroups = [
  {
    category: "backend",
    color: "from-violet-500 to-purple-600",
    icon: "⚙️",
    items: ["Laravel", "PHP", "REST API", "Sanctum", "Queue / Jobs"],
  },
  {
    category: "frontend",
    color: "from-cyan-500 to-blue-600",
    icon: "🖥️",
    items: ["React.js", "Tailwind CSS", "Inertia.js", "Blade", "Vite"],
  },
  {
    category: "database",
    color: "from-emerald-500 to-teal-600",
    icon: "🗄️",
    items: ["MySQL", "PostgreSQL", "Redis", "Eloquent ORM"],
  },
  {
    category: "voip",
    color: "from-orange-500 to-amber-600",
    icon: "📞",
    items: ["Asterisk PBX", "AMI / AGI", "SIP Protocol", "FreePBX"],
  },
  {
    category: "hardware",
    color: "from-rose-500 to-pink-600",
    icon: "📷",
    items: ["Hikvision SDK", "Face Recognition", "IP Cameras", "ISAPI"],
  },
  {
    category: "devops",
    color: "from-slate-500 to-gray-600",
    icon: "🚀",
    items: ["Git / GitHub", "Linux / Nginx", "Docker", "CI/CD"],
  },
];

function TechCard({ group, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const { t } = useTranslation();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-card border border-border rounded-xl p-6 card-glow transition-all duration-300 hover:border-primary/40"
    >
      <div className="flex items-center gap-3 mb-4">
        <span className="text-2xl">{group.icon}</span>
        <h3 className={`font-semibold text-sm uppercase tracking-wider bg-gradient-to-r ${group.color} bg-clip-text text-transparent`}>
          {t(`stack.categories.${group.category}`)}
        </h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {group.items.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 text-xs font-mono bg-dark border border-border text-slate-300 rounded-md hover:border-primary/50 hover:text-white transition-all duration-200"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function TechStack() {
  const { t } = useTranslation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="stack" className="py-24 px-6 max-w-6xl mx-auto">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <p className="text-primary text-sm font-mono tracking-widest uppercase mb-3">
          {"// "}{t("stack.subtitle")}
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          {t("stack.title")}
        </h2>
        <div className="mt-4 mx-auto w-16 h-1 bg-gradient-to-r from-primary to-secondary rounded-full" />
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {techGroups.map((group, i) => (
          <TechCard key={group.category} group={group} index={i} />
        ))}
      </div>
    </section>
  );
}
