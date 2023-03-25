import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className=" bg-white font-mono text-gray-900 selection:bg-fuchsia-300 selection:text-fuchsia-900 dark:bg-slate-900 dark:text-gray-100">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
