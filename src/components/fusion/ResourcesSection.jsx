import { motion } from "framer-motion";
import { ExternalLink, BookOpen } from "lucide-react";

export default function ResourcesSection({ resources, closingMessage }) {
  return (
    <div className="space-y-6 px-4 pb-12">
      {/* Resources */}
      <div className="space-y-3">
        <div className="flex items-center gap-2 mb-2">
          <BookOpen className="w-4 h-4 text-primary" />
          <h2 className="font-heading text-lg font-bold text-foreground">Kaynaklar</h2>
        </div>
        {resources.map((r, i) => (
          <motion.a
            key={i}
            href={r.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="flex items-center gap-3 p-3 rounded-xl border border-border bg-card hover:border-primary/30 hover:shadow-sm transition-all group"
          >
            <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
              <ExternalLink className="w-4 h-4 text-primary" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-heading text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                {r.name}
              </p>
              <p className="text-[11px] font-body text-muted-foreground truncate">
                {r.description}
              </p>
            </div>
          </motion.a>
        ))}
      </div>

      {/* Closing */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="relative rounded-2xl bg-gradient-to-br from-primary/10 via-accent/5 to-primary/5 border border-primary/20 p-6 text-center"
      >
        <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
          <div className="absolute top-2 right-4 w-16 h-16 bg-accent/10 rounded-full blur-2xl" />
          <div className="absolute bottom-2 left-4 w-20 h-20 bg-primary/10 rounded-full blur-2xl" />
        </div>
        <p className="relative font-body text-sm italic text-foreground/80 leading-relaxed">
          {closingMessage}
        </p>
      </motion.div>

      <p className="text-center text-[10px] text-muted-foreground font-body">
        Sunum Eşlik Uygulaması — 2025
      </p>
    </div>
  );
}