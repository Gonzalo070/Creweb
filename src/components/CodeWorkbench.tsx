import { Braces, Code2, Terminal } from "lucide-react";

const CODE_LINES = [
  { n: "01", parts: [{ text: "const ", tone: "violet" }, { text: "idea", tone: "cyan" }, { text: " = {", tone: "ink" }] },
  { n: "02", parts: [{ text: "  design: ", tone: "ink" }, { text: "'claro'", tone: "lime" }, { text: ",", tone: "ink" }] },
  { n: "03", parts: [{ text: "  build: ", tone: "ink" }, { text: "'a medida'", tone: "lime" }, { text: ",", tone: "ink" }] },
  { n: "04", parts: [{ text: "  launch: ", tone: "ink" }, { text: "true", tone: "violet" }] },
  { n: "05", parts: [{ text: "};", tone: "ink" }] },
  { n: "06", parts: [{ text: "", tone: "ink" }] },
  { n: "07", parts: [{ text: "export default ", tone: "violet" }, { text: "idea", tone: "cyan" }, { text: ";", tone: "ink" }] },
];

export default function CodeWorkbench() {
  return (
    <div aria-label="Ilustración 3D de una computadora con código de Creweb" role="img" className="workbench-scene">
      <div className="workbench-orbit workbench-orbit--one" />
      <div className="workbench-orbit workbench-orbit--two" />

      <div className="floating-chip floating-chip--code"><Braces className="h-4 w-4" /><span>ideas → producto</span></div>
      <div className="floating-chip floating-chip--terminal"><Terminal className="h-4 w-4" /><span>build successful</span><i /></div>

      <div className="monitor-wrap">
        <div className="monitor-shell">
          <div className="monitor-screen">
            <div className="editor-topbar">
              <div className="window-dots"><i /><i /><i /></div>
              <span>creweb / studio</span>
              <Code2 className="h-3.5 w-3.5" />
            </div>
            <div className="editor-body">
              <div className="editor-sidebar"><i /><i /><i /><i /><i /></div>
              <div className="editor-code">
                <p className="editor-file">✦ app / producto.tsx</p>
                {CODE_LINES.map((line) => (
                  <div className="code-row" key={line.n}>
                    <span className="code-number">{line.n}</span>
                    <code>{line.parts.map((part, index) => <span key={index} className={`code-${part.tone}`}>{part.text}</span>)}</code>
                  </div>
                ))}
                <div className="code-cursor" />
              </div>
            </div>
            <div className="editor-status"><span><i /> main</span><span>TypeScript&nbsp; · &nbsp; UTF-8</span><span>Ln 07, Col 24</span></div>
          </div>
          <div className="monitor-chin"><span>CREWEB</span><i /></div>
        </div>
        <div className="monitor-neck" />
        <div className="monitor-base" />
      </div>

      <div className="floating-window">
        <div className="floating-window__top"><span>preview.tsx</span><span>↗</span></div>
        <div className="floating-window__preview">
          <div className="preview-logo"><span>✦</span> micro app</div>
          <div className="preview-headline"><i /><i /></div>
          <div className="preview-blocks"><i /><i /><i /></div>
          <div className="preview-button" />
        </div>
      </div>
      <div className="workbench-shadow" />
    </div>
  );
}
