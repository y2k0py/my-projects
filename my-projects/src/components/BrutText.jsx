import { useState, useEffect } from "react";

const chars = "!@#$%^&*ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

const BrutText = ({ children }) => {
    const text = String(children);
    const [display, setDisplay] = useState("");

    useEffect(() => {
        let iteration = 0;

        const interval = setInterval(() => {
            setDisplay(
                text
                    .split("")
                    .map((char, index) => {
                        if (index < iteration) {
                            return char;
                        }

                        return chars[Math.floor(Math.random() * chars.length)];
                    })
                    .join("")
            );

            iteration += 0.15;

            if (iteration >= text.length) {
                clearInterval(interval);
                setDisplay(text);
            }
        }, 30);

        return () => clearInterval(interval);
    }, [text]);

    return <span>{display}</span>;



}
export default BrutText;