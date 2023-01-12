import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar/NavBar";
import "../styles/globals.scss";
import navLinks from "../data/navLinks";
import Script from "next/script";

export default function RootLayout({ children }) {
  return (
    <html>
    
      <head />
      <body>
        <NavBar navLinks={navLinks} />

        <main className="page-container">    {children}</main>
        <Footer />
      </body>
      {/* <Script
    type="text/javascript"
        src="https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js"
      />  */}
    </html>
  );
}
