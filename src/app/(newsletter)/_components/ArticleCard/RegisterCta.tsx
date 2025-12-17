"use client"
import { css } from "@panda/css";

export const RegisterCta = () => {
  const handleClick = () => {
    window.alert("Register modal");
  };

  return (
    <button className={css({
      rounded: "4xl",
      bg: "primary",
      color: "white",
      width: "fit-content",
      px: "30px",
      py: "8px",
      fontSize: "text.md",
      fontWeight: "bold",
      cursor: "pointer",
      transition: "filter 0.3s ease-in-out",
      _hover: {
        filter: "brightness(0.9)",
      },
    })}
      onClick={handleClick}
    >
      S'inscrire
    </button>
  );
};
