import './globals.css'
import { ThemeContextProvider } from '@/context/theme';
export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <ThemeContextProvider>
          {children}
        </ThemeContextProvider>  
        </body>
    </html>
  );
}
