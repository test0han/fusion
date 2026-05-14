import { useRef, useState, useCallback } from "react";
import { sections, resources, closingMessage, topicGroups } from "@/lib/presentationData";
import HeroHeader from "@/components/fusion/HeroHeader";
import TopicGroupNav from "@/components/fusion/TopicGroupNav";
import SectionCard from "@/components/fusion/SectionCard";
import ResourcesSection from "@/components/fusion/ResourcesSection";

export default function Home() {
  const [activeGroup, setActiveGroup] = useState(0);
  const contentRef = useRef(null);

  const handleScrollDown = () => {
    contentRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleGroupSelect = useCallback((groupIndex) => {
    setActiveGroup(groupIndex);
    const group = topicGroups[groupIndex];
    const firstSectionId = group.ids[0];
    const el = document.getElementById(`section-${firstSectionId}`);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  const getGroupSections = (groupIndex) => {
    const group = topicGroups[groupIndex];
    return sections.filter(s => group.ids.includes(s.id));
  };

  return (
    <div className="min-h-screen bg-background font-body">
      <HeroHeader onScrollDown={handleScrollDown} />

      <div ref={contentRef}>
        <TopicGroupNav
          groups={topicGroups}
          activeGroup={activeGroup}
          onGroupSelect={handleGroupSelect}
        />

        <div className="max-w-lg mx-auto px-4 py-6 space-y-3">
          {topicGroups.map((group, gi) => (
            <div key={gi} className="space-y-3">
              <div className="flex items-center gap-2 pt-4 pb-1" id={`group-${gi}`}>
                <div className="h-px flex-1 bg-border" />
                <span className="text-[10px] font-heading font-semibold text-muted-foreground uppercase tracking-widest px-2">
                  {group.label}
                </span>
                <div className="h-px flex-1 bg-border" />
              </div>
              {getGroupSections(gi).map((section, si) => (
                <SectionCard key={section.id} section={section} index={si} />
              ))}
            </div>
          ))}
        </div>

        <div className="max-w-lg mx-auto">
          <ResourcesSection resources={resources} closingMessage={closingMessage} />
        </div>
      </div>
    </div>
  );
}