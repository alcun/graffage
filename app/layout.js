import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar/NavBar";
import "../styles/globals.scss";

export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      <body>
        <NavBar />
        <div>{children}</div>
         <Footer />
      </body>
    </html>
  );
}
