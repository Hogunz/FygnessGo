import Header from "@/Layouts/Header";
import Footer from "@/Layouts/Footer";

export default function Guest({ children }) {
    return (
        <div className="flex min-h-screen flex-col justify-between pt-6 sm:pt-0 bg-[white] dark:bg-gradient-to-b from-[#210E0E] to-[#240F10] font-poppins">
            <div>
                <header>
                    {" "}
                    <Header />
                </header>
                <main>{children}</main>
                <footer>
                    <Footer />
                </footer>
            </div>
        </div>
    );
}
