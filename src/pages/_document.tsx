import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="bg-slate-100 font-mono text-gray-800 selection:bg-fuchsia-300 selection:text-fuchsia-900 dark:bg-slate-800 dark:text-gray-100">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
