"use client";
import Link from "next/link";
import {useEffect, useState} from "react";
import { quicksand } from '@/app/ui/fonts';
const sections = [
        "about",
        "trustees",
        "activities",
        "objectives",
        "gallery",
        "certifications",
        "contact",
    ];
export default function Navbar() {
    const [active, setActive] = useState("");

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if(entry.isIntersecting) {
                        setActive(entry.target.id);
                    }
                });
            },
            {threshold : 0.6}
        );
        sections.forEach((id) => {
            const el = document.getElementById(id);
            if(el) observer.observe(el);
        });
        return () => observer.disconnect();
    }, []);
    return (
        <nav className={`${quicksand.className} antialiased fixed top-0 left-0 w-full z-50 flex justify-center backdrop-blur-md border-b-2 border-neutral-400`}>
            <div className="flex items-center text-white gap-12 my-4 ml-16">
                {sections.map((id) => (
                    <Link
                    key={id}
                    href={`#${id}`}
                    className={`transition ${
                        active === id
                        ? "text-2xl font-semibold text-amber-100"
                        : "text-white"
                        }`}
                    >
                        {id.charAt(0).toUpperCase() + id.slice(1)}
                    </Link>
                ))}
                <Link href={"#donate"} className="mask-linear-from-cyan-300 text-white px-5 py-2 rounded-full hover:bg-amber-100 transition hover:font-bold hover:text-blue-900 border-2 border-gray-800" >Donate</Link>
            </div>
        </nav>
    )
}