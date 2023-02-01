import React, { useState } from "react";
import Header from "./components/Header";
import Featured from "./components/Featured";
import CardContent from "./components/CardContent";

function App() {
    return (
        <div className="">
            <Header />
            <main className="mt-[136px] duration-200 md:mt-[148px] lg:mt-0">
                <Featured />
                {/* <CardContent /> */}
            </main>
        </div>
    );
}

export default App;
