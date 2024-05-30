import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Main() {
    return (
        <main className="flex flex-col h-screen w-screen justify-between">
            <Navbar />
            <Outlet />
            <Footer />
        </main>
    )
}