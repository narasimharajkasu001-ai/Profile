export function Value({ children }) {
  const text = String(children ?? "");
  const redacted = text.includes("xxxxxxxx");
  return <span className={redacted ? "redacted" : undefined}>{text}</span>;
}
