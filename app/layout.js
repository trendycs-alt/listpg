import "./globals.css";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "PAYMENT GATEWAY",
  description: "Payment gateway directory",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
