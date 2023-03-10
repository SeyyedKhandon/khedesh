import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="font-mono bg-slate-800 text-gray-100 dark:bg-slate-100 dark:text-gray-800">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
