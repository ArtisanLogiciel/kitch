import "../styles/globals.css";


export const metadata = {
  title: "Kitch",
  description: "Clone de Twitch mais en version Kitch",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        {children}
      </body>
    </html>
  );
}
