import { css } from "@panda/css";

export const SectionTitle = ({ title }: { title: string }) => {
  return (
    <h2 className={css({
      color: "text",
      textTransform: "uppercase",
      fontSize: "title.md",
      fontWeight: "bold",
      _after: {
        content: `''`,
        mt: "3",
        width: "80px",
        height: "4px",
        display: "block",
        backgroundColor: "primary",
        rounded: 'md',
      },
    })}>{title}</h2>
  );
};