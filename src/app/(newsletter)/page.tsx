"use server";

import React from "react";
import { container } from "@panda/patterns";

import { PageHeader } from "./_components/PageHeader";
import { ArticleSection } from "./_components/ArticleSection";

import { getNewslettersGroups } from "./_server-actions/newsletter.actions";

const Page = async () => {
  const newslettersGroups = await getNewslettersGroups();

  return (
    <main className={container({ padding: "8", maxWidth: "1000px", display: "flex", flexDirection: "column", gap: "8" })}>
      <PageHeader />
      {newslettersGroups.map((group) => (
        <ArticleSection key={group.id} newslettersGroup={group} />
      ))}
    </main>
  )
};

export default Page;
