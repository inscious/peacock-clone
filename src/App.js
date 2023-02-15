import React from "react";
import Header from "./components/Header";
import Featured from "./components/Featured";
import CardContent from "./components/CardContent";
import Footer from "./components/Footer";

function App() {
    return (
        <div className="">
            <Header />
            <main className="mt-[136px] duration-200 md:mt-[148px] lg:mt-0">
                <Featured />
                <div className="relative -top-16 duration-150 md:-top-28 xl:-top-48 2xl:-top-72">
                    <CardContent />
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default App;
