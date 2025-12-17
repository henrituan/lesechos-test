import { css } from "@panda/css";
import Link from "next/link";

export const SubscribeCta = () => {
  return (
    <Link className={css({
      rounded: "4xl",
      bg: "action",
      color: "black",
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
      href="/abonnement"
    >
      S'abonner
    </Link>
  );
};