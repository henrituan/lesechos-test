import { css } from "@panda/css";
import { vstack } from "@panda/patterns";

export const PageHeader = () => {
  return (
    <header className={vstack({ bg: "bg.neutral", padding: "4", rounded: "md" })}>
      <h1 className={css({ color: "text", fontSize: "title.lg", fontWeight: "bold" })}>
        Newsletters
      </h1>
      <p className={css({ color: "text", fontSize: "md", textAlign: "center" })}>
        Dans cette page, vous retrouvez l’ensemble des newsletters des Echos et des marques satellites. Ainsi, vous pouvez découvrir toutes nos newsletters selon vos centres d’intérêt et gérer plus facilement l’inscription à vos newsletters.
      </p>
    </header>
  )
};