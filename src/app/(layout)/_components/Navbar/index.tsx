import { cookies } from "next/headers";
import { hstack } from "@panda/patterns";

import { UserSelectButton } from "./UserSelectButton";


export const Navbar = () => {
  const cookiesStore = cookies();
  const currentUserId = cookiesStore.get("userId")?.value;

  return (
    <div className={hstack({ gap: "2", flexWrap: "wrap", justifyContent: "flex-end", paddingX: "8", paddingY: "4" })}>
      <UserSelectButton userId={1} isActive={currentUserId === "1"} />
      <UserSelectButton userId={2} isActive={currentUserId === "2"} />
      <UserSelectButton userId={3} isActive={currentUserId === "3"} />
    </div>
  );
};
