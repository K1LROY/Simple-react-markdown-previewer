import "./preview.css";
import { useContext } from "react";
import editorContext from "../editorContext";
import { marked } from "marked";
import Prism from "prismjs";

const Preview = () => {
  const { markdownText } = useContext(editorContext);

  marked.setOptions({
    breaks: true,
    highlight: function (code) {
      return Prism.highlight(code, Prism.languages.javascript, "javascript");
    },
  });

  const renderer = new marked.Renderer();
  renderer.link = function (href, title, text) {
    return `<a target="_blank" href="${href}">${text}</a>`;
  };

  return (
    <div className="preview-wrapper">
      <h1 className="button button-format is-primary is-small">Previewer</h1>
      <div
        className="markdown"
        dangerouslySetInnerHTML={{
          __html: marked(markdownText, { renderer: renderer }),
        }}
        id="preview"
      />
    </div>
  );
};

export default Preview;
