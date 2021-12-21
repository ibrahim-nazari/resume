import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children, page }) => {
  return (
    <div className="flex flex-col">
      <header className="flex-grow-0">
        <Header page={page} />
      </header>
      <main className="pt-16 flex-grow"> {children}</main>
      <footer className="flex-grow-0">
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
