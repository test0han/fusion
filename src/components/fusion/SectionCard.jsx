import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import {
  Zap, Atom, Orbit, Magnet, Link, Unlink, Split, GitBranch, Factory,
  Merge, Flame, Sparkles, ShieldAlert, Waves, Sun, Cpu, CircleDot,
  Globe, ThumbsUp, AlertTriangle, ArrowLeftRight, BarChart3, Ghost,
  Contrast, Star, Newspaper, Rocket, Lightbulb, MessageCircleQuestion,
  FileText, Crosshair
} from "lucide-react";
import ComparisonTable from "./ComparisonTable";

const iconMap = {
  Zap, Atom, Orbit, Magnet, Link, Unlink, Split, GitBranch, Factory,
  Merge, Flame, Sparkles, ShieldAlert, Waves, Sun, Cpu, CircleDot,
  Globe, ThumbsUp, AlertTriangle, ArrowLeftRight, BarChart3, Ghost,
  Contrast, Star, Newspaper, Rocket, Lightbulb, MessageCircleQuestion,
  FileText, Crosshair
};

// We import Helix separately since it might not exist - use a fallback
const getIcon = (name) => iconMap[name] || Atom;

export default function SectionCard({ section, index }) {
  const [isOpen, setIsOpen] = useState(false);
  const Icon = getIcon(section.icon);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay: index * 0.03 }}
      id={`section-${section.id}`}
      className={`rounded-2xl border transition-all duration-300 overflow-hidden
        ${section.highlight
          ? "border-primary/30 bg-gradient-to-br from-primary/5 to-card shadow-md shadow-primary/5"
          : "border-border bg-card shadow-sm"
        }
      `}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center gap-3 p-4 text-left"
      >
        <div className={`flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br ${section.color} flex items-center justify-center shadow-sm`}>
          <Icon className="w-5 h-5 text-white" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-[10px] font-body font-medium text-muted-foreground uppercase tracking-wider">
            Bölüm {section.number}
          </p>
          <h3 className="font-heading text-sm font-semibold text-foreground leading-snug truncate">
            {section.title}
          </h3>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0"
        >
          <ChevronDown className="w-4 h-4 text-muted-foreground" />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-4 pb-4 space-y-4">
              {section.table && (
                <ComparisonTable table={section.table} />
              )}
              {section.subsections?.map((sub, i) => (
                <div key={i} className="space-y-2">
                  <h4 className="font-heading text-xs font-semibold text-foreground tracking-wide">
                    {sub.title}
                  </h4>
                  {sub.formula && (
                    <div className="bg-muted/60 rounded-xl px-4 py-3 text-center">
                      <code className="font-heading text-base font-bold text-primary tracking-wide">
                        {sub.formula}
                      </code>
                    </div>
                  )}
                  {sub.content && (
                    <ul className="space-y-1.5">
                      {sub.content.map((item, j) => (
                        <li key={j} className="flex items-start gap-2 text-xs font-body text-muted-foreground leading-relaxed">
                          <span className="mt-1.5 w-1 h-1 rounded-full bg-primary/40 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}