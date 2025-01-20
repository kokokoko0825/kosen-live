import { ReactNode } from "react";
import { Hero } from "./features/Hero/Hero";
import { Page1 } from "./features/Page1/Page1";
import { Page2 } from "./features/Page2/Page2";
import { Ticket } from "app/component/Ticket/Ticket";
import { Timetable } from "~/component/Timetable";
import { Caution } from "./features/Caution/Caution";

export default function Page(): ReactNode {
    return (
        <>
            <Hero />
            <Page1 />
            <Page2 />
            <Ticket />
            <Timetable />
            <Caution />
        </>
    );
}