import "./code-cell.css";
import { useState } from "react";
import CodeEditor from "./code-editor";
import Preview from "./preview";
import Resizable from "./resizable";
import EditorContext from "../editorContext";

const CodeCell = () => {
  const [markdownText, setMarkdownText] = useState("");

  const contextValue = {
    markdownText,
    setMarkdownText,
  };

  return (
    <EditorContext.Provider value={contextValue}>
      <div className="container">
        <Resizable direction="vertical">
          <div
            style={{
              height: "calc(100% - 10px)",
              display: "flex",
              flexDirection: "row",
            }}
          >
            <Resizable direction="horizontal">
              <CodeEditor />
            </Resizable>

            <div className="progress-wrapper">
              <Preview />
            </div>
          </div>
        </Resizable>
      </div>
    </EditorContext.Provider>
  );
};

export default CodeCell;
