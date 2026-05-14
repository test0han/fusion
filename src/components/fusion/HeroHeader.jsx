import { motion } from "framer-motion";
import { Atom, ChevronDown } from "lucide-react";

export default function HeroHeader({ onScrollDown }) {
  return (
    <div className="relative min-h-[85vh] flex flex-col items-center justify-center px-6 overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 -left-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 -right-20 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 flex flex-col items-center text-center"
      >
        <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-8 shadow-lg shadow-primary/20">
          <Atom className="w-10 h-10 text-white" />
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="font-heading text-3xl sm:text-4xl font-bold text-foreground leading-tight max-w-lg"
        >
          Füzyon Tepkimeleri ve Parçacık Fiziği
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.5 }}
          className="mt-4 text-muted-foreground font-body text-base max-w-sm leading-relaxed"
        >
          Sunuma eşlik eden interaktif kaynak rehberi
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-6 flex gap-3 text-xs text-muted-foreground font-body"
        >
          <span className="px-3 py-1.5 rounded-full bg-primary/10 text-primary font-medium">Füzyon</span>
          <span className="px-3 py-1.5 rounded-full bg-accent/10 text-accent font-medium">Fisyon</span>
          <span className="px-3 py-1.5 rounded-full bg-muted text-muted-foreground font-medium">Parçacık Fiziği</span>
        </motion.div>
      </motion.div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        onClick={onScrollDown}
        className="absolute bottom-8 z-10 flex flex-col items-center gap-1 text-muted-foreground"
      >
        <span className="text-xs font-body">Keşfet</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.button>
    </div>
  );
}