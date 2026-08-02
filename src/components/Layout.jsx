
import Header from "./Header";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout({ children }) {
    return (
        <div className="
            grid
            min-h-screen
            grid-cols-[220px_1fr]
            grid-rows-[90px_1fr_100px]
        ">

            <aside className="row-span-3">
                <Navbar />
            </aside>

            <header>
                <Header />
            </header>

            <main>
                {children}
            </main>

            <footer>
                <Footer />
            </footer>

        </div>
    );
}

export default Layout;