import { useState, useRef, useEffect } from "react";
import { useGlobalContext } from "../context/context";

const Submenu = () => {
  const { isSubmenuOpen } = useGlobalContext();

  return (
    <aside className={`${isSubmenuOpen ? "submenu show" : "submenu"}`}>
      submenu
    </aside>
    // only show submenu on hover
  );
};

export default Submenu;
