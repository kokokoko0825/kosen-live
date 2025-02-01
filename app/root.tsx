import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { ReactNode } from "react";

import "app/styles/globals.css";
import { LinksFunction, MetaFunction } from "@remix-run/cloudflare";
//import Page from "./routes/_index/route";


export function Layout({ children }: { children: React.ReactNode }): ReactNode {
  return (
    <html lang="ja" style={{ margin: 0, padding: 0, }}>
      <head>
        <meta name="google-site-verification" content="brDkeRhoxktrjCiqqUefNlNyOKLGHk0Cik9q9MzLv2E" />
        <Meta />
        <Links />
        <title>2025 鈴鹿高専卒業ライブ</title>
      </head>
      <body style={{ margin: 0, padding: 0, }}>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App(): ReactNode {
  return <Outlet />;
}


export const links: LinksFunction = () => {
  return [
    { rel: "icon", href: "/favicon.ico", type: "image/x-ico" },
    { rel: "preconnect", href: "https://fonts.googleapis.com" },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossOrigin: "anonymous",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Roboto&display=swap",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Irish+Grover&display=swap",
    },
  ];
};

export const meta: MetaFunction = () => {
  return [
    { charSet: "utf-8" },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    { title: "2025卒業ライブ BorderLess" },
    { name: "description", content: "2025鈴鹿高専卒業ライブin鈴鹿 SOUND STAGE" },
    { name: "robots", content: "index, follow" },
    { name: "og:title", content: "2025鈴鹿高専卒業ライブBorderLess" },
    { name: "og:description", content: "2025鈴鹿高専卒業ライブ" },
    { name: "og:url", content: "https://kosen-live.pages.dev" },
    { name: "og:image", content: "https://kosen-live.pages.dev/ogp.png" },
    {
      property: "og:image:url",
      content: "https://kosen-live.pages.dev/ogp.png",
    },
    { property: "og:image:alt", content: "卒業ライブ" },
    { name: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "卒業ライブ" },
    { name: "twitter:description", content: "2025鈴鹿高専卒業ライブ" },
    {
      name: "twitter:image",
      content: "https://kosen-live.pages.dev/ogp.png",
    },
    { name: "twitter:image:alt", content: "2025鈴鹿高専卒業ライブ" },
  ];
};