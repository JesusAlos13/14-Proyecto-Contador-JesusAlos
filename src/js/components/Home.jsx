import React from "react";
import Contador from "./ContadorReloj";

const Home = () => {
    return (
        <div className="reloj">
            <Contador start={0} />
        </div>
    );
};

export default Home;