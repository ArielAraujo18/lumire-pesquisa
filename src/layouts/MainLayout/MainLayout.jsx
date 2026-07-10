import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./MainLayout.css";

export default function MainLayout({ children }) {
  return (
    <div className="main-layout">
      <Header />

      <main className="main-layout__content">{children}</main>

      <Footer />
    </div>
  );
}