import { useEffect, useMemo, useRef } from "react";
import Prism from "prismjs";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism-tomorrow.css";

export default function Introduction() {
  const codeRef = useRef<HTMLElement>(null);

  const code = useMemo(
    () =>
      `const developer = {
  name: "Olyad Negero",
  role: "Frontend Developer",
  skills: ["React", "JavaScript", "HTML", "CSS"],
  message: "I build clean, maintainable, responsive UI with modern tools."
};`,
    [],
  );

  useEffect(() => {
    if (codeRef.current) {
      Prism.highlightElement(codeRef.current);
    }
  }, []);

  return (
    <article className="max-w-3xl mx-auto text-left">
      <div className="relative rounded-2xl border border-border bg-slate-950/60 shadow-xl shadow-black/20 overflow-hidden">
        <div className="flex items-center gap-2 px-4 py-3 bg-slate-900/70 border-b border-border">
          <span className="h-3 w-3 rounded-full bg-red-500" />
          <span className="h-3 w-3 rounded-full bg-amber-400" />
          <span className="h-3 w-3 rounded-full bg-green-500" />
          <span className="ml-auto text-xs text-muted-foreground">
            JavaScript
          </span>
        </div>

        <pre className="m-0 overflow-x-auto p-5 text-sm leading-relaxed">
          <code ref={codeRef} className="language-js">
            {code}
          </code>
        </pre>
      </div>
    </article>
  );
}
