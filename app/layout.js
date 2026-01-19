

import "./globals.css";

export const metadata = {
  title: "Ne Pişirsem?",
  description: "Evdeki malzemelerle yemek öneren yapay zeka uygulaması",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
      (function() {
        try {
          const theme = localStorage.getItem('theme');
          const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
          if(theme === 'dark' || (!theme && prefersDark)) {
            document.documentElement.classList.add('dark');
          } else {
            document.documentElement.classList.remove('dark');
          }
        } catch(e) {}
      })();
    `,
          }}
        />
      </head>
      <body cz-shortcut-listen="true">
        {children}
      </body>
    </html>
  );
}
