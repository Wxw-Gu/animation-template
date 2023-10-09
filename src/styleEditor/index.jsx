import { PrismCode } from "../utils/react-prism/index.js";
import { styleStore } from "../stores/userInfo.js";
import { useEffect } from "react";

export default function StyleEditor() {
  const { styleComponentsContent = "" } = styleStore();

  useEffect(() => {
    let styleEditor = document.querySelector(".styleEditor");
    styleEditor.scrollTop = 10000;
  }, [styleComponentsContent]);

  return (
    <div className="styleEditor">
      <pre>
        <PrismCode className="language-css">{styleComponentsContent}</PrismCode>
      </pre>
    </div>
  );
}
