import { ReactNode } from "react";
import { Hero } from "./features/Hero/Hero";
import { Page1 } from "./features/Page1/Page1";
import { Page2 } from "./features/Page2/Page2";

export default function Page(): ReactNode {
    return (
        <>
            <main>
                <Hero />
                <Page1 />
                <Page2 />
            </main>
        </>
    );
}