// putting folders inside (anyname) - creates a route group- which can be used to provide group routes
//and provide a different layout for each group with a layout.js file in route group folder

import "../globals.css";

export const metadata = {
  title: "Next.js Page Routing & Rendering",
  description: "Learn how to route to different pages.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
