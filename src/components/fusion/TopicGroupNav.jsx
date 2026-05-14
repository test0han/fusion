import { motion } from "framer-motion";
import {
  BookOpen, Orbit, Cpu, Merge, Rocket, Telescope,
  GraduationCap, Split
} from "lucide-react";

const iconMap = {
  BookOpen, Orbit, Cpu, Merge, Rocket, Telescope,
  GraduationCap, Split
};

export default function TopicGroupNav({ groups, activeGroup, onGroupSelect }) {
  return (
    <div className="sticky top-0 z-30 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-1 px-4 py-3 min-w-max">
          {groups.map((group, i) => {
            const Icon = iconMap[group.icon] || BookOpen;
            const isActive = activeGroup === i;
            return (
              <button
                key={i}
                onClick={() => onGroupSelect(i)}
                className={`relative flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-body font-medium transition-all whitespace-nowrap
                  ${isActive
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                  }`}
              >
                <Icon className="w-3.5 h-3.5" />
                {group.label}
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-primary/10 rounded-lg"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}