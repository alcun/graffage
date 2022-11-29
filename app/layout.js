import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar/NavBar";
import "../styles/globals.scss";
import navLinks from "../data/navLinks";

export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      <body>
        <NavBar navLinks={navLinks}/>
        <main className="page-container">{children}</main>
         <Footer />
      </body>
    </html>
  );
}
