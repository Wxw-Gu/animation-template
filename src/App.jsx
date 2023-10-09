import { useEffect, useRef } from "react";
import StyleEditor from "./styleEditor/index.jsx";
import { styleStore } from "./stores/userInfo.js";
import { styleContent } from "./config.js";

function App() {
  const { setStyleComponentsContent } = styleStore();
  const interval = 70;
  const style = useRef("");

  useEffect(() => {
    (async () => {
      await start(0);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const start = (n) => {
    console.log("🚀 ~ ", styleContent[n]);
    let lastContentLength = 0;
    if (n !== 0) {
      lastContentLength = style.current.length;
    }
    let newStyle = styleContent[n];
    let newStyleLength = newStyle.length;

    return new Promise((resolve) => {
      let showStyle = function () {
        let currentLen = style.current.length - lastContentLength;
        if (currentLen < newStyleLength) {
          let char = newStyle.substring(currentLen, currentLen + 1);
          setStyleComponentsContent(char);
          style.current += char;
          setTimeout(showStyle, interval);
        } else {
          resolve();
        }
      };
      showStyle();
    });
  };

  return (
    <>
      <StyleEditor />
      <style>{style.current}</style>
    </>
  );
}

export default App;
