import React, { useState } from "react";
import Header from "./components/Header";
import Featured from "./components/Featured";

function App() {
    return (
        <div className="">
            <Header />
            <main className="mt-[136px] md:mt-[148px] lg:mt-0 duration-200">
                <Featured />
            </main>
        </div>
    );
}

export default App;
