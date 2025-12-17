"use client"

import { css } from "@panda/css";

type UserSelectButtonProps = {
  userId: number;
  isActive?: boolean;
};

const getUserLabel = (userId: number) => {
  switch (userId) {
    case 1:
      return "0 subscription";
    case 2:
      return "1 subscription";
    case 3:
      return "Multi subscriptions";
    default:
      return "";
  }
};

export const UserSelectButton = ({ userId, isActive }: UserSelectButtonProps) => {
  const handleClick = () => {
    document.cookie = `userId=${userId}; path=/;`;
    window.location.reload();
  };

  const userLabel = getUserLabel(userId);

  if (!userLabel) {
    return null;
  }

  return (
    <button className={css({
      rounded: "4xl",
      bg: "bg.neutral",
      color: "text",
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
      ...(isActive && {
        bg: "primary",
        color: "white",
      })
    })}
      onClick={handleClick}
    >
      {userLabel}
    </button>
  );
};