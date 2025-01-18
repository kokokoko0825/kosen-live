import { ReactNode } from "react";
import { Hero } from "./features/Hero/Hero";
import { Page1 } from "./features/Page1/Page1";

export default function Page(): ReactNode {
    return (
        <>
            <main>
                <Hero />
                <Page1 />
            </main>
        </>
    );
}