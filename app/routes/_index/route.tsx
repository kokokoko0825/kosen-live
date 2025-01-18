import { ReactNode } from "react";
import { Hero } from "./features/Hero/Hero";

export default function Page(): ReactNode {
    return (
        <>
            <main>
                <Hero />
            </main>
        </>
    );
}