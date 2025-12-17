"use server";

import React from "react";
import { container } from "@panda/patterns";

import { PageHeader } from "./_components/PageHeader";

const Page = () => {
  return (
    <main className={container({ padding: "8", maxWidth: "1000px" })}>
      <PageHeader />
    </main>
  )
};

export default Page;
