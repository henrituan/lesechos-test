import { grid, vstack } from "@panda/patterns";

import { ArticleCard } from "../ArticleCard";
import { SectionTitle } from "./SectionTitle";

import type { NewslettersGroupType } from "../../_types/newsletter";

type ArticleSectionProps = {
  newslettersGroup: NewslettersGroupType;
}

export const ArticleSection = ({ newslettersGroup }: ArticleSectionProps) => {
  return (
    <section className={vstack({ gap: "4", alignItems: "flex-start" })}>
      <SectionTitle title={newslettersGroup.site} />
      <div className={grid({
        width: "100%",
        gap: "8",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
      })}>
        {newslettersGroup.items.map((item) => (
          <ArticleCard
            key={item.id}
            title={item.title}
            description={item.description}
            image={item.image}
            ctaType={item.userPermission === "can_register" ? "register" : "subscribe"} />
        ))}
      </div>
    </section>
  )
}