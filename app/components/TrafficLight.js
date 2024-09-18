"use client"
import { useEffect, useState } from "react";

export default function TrafficLight() {
    const [light, setLight] = useState("red");

    useEffect(() => {
        const interval = setInterval(() => {
            setLight((prevLight) => {
                if (prevLight === "red") return "yellow";
                if (prevLight === "yellow") return "green";
                return "red"; 
            });
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="bg-gray-900 p-10 rounded-lg flex flex-col gap-10 justify-between shadow-[1px_1px_5px_5px_rgba(0,0,0,0.6)]">

                <div
                    className={`w-28 h-28 rounded-full ${light === "red"
                            ? "bg-red-500 shadow-[0_0_15px_5px_rgba(255,0,0,0.6)]"
                            : "bg-red-100"
                        }`}
                    onClick={() => setLight("red")}
                ></div>

                <div
                    className={`w-28 h-28 rounded-full ${light === "yellow"
                            ? "bg-yellow-400 shadow-[0_0_15px_5px_rgba(255,255,0,0.6)]"
                            : "bg-yellow-100"
                        }`}
                    onClick={() => setLight("yellow")}
                ></div>

                <div
                    className={`w-28 h-28 rounded-full ${light === "green"
                            ? "bg-green-500 shadow-[0_0_15px_5px_rgba(0,255,0,0.6)]"
                            : "bg-green-100"
                        }`}
                    onClick={() => setLight("green")}
                ></div>
            </div>
        </div>
    );
}
