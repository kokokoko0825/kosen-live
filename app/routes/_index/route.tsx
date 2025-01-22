import { ReactNode, useEffect } from "react";
import { Hero } from "./features/Hero/Hero";
import { Page1 } from "./features/Page1/Page1";
import { Page2 } from "./features/Page2/Page2";
import { Ticket } from "app/component/Ticket/Ticket";
import { Timetable } from "~/component/Timetable";
import { Caution } from "./features/Caution/Caution";

export default function Page(): ReactNode {
    useEffect(() => {
        const heroSection = document.getElementById("hero");
        if (heroSection) {
            heroSection.scrollIntoView({ behavior: "instant" });
        }
    }, []);
    return (
        <>
            <div id = "hero">
                <Hero />
            </div>
            <Page1 />
            <Page2 />
            <div id = "ticket">
                <Ticket />
            </div>
            <div id = "timetable">
                <Timetable />
            </div>
            <div id = "caution">
                <Caution />
            </div>
        </>
    );
}