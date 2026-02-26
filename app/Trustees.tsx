"use client";
import Image from 'next/image';
import { quicksand , quintessential} from "@/app/ui/fonts";
import "./globals.css";

interface TrusteesProps{
    image: string;
    name: string;
    role: string;
    description: string;
}

export default function Trustees({
    image,
    name,
    role,
    description,
}: TrusteesProps) {
    return(
        <div className={`${quicksand.className} group relative bg-white rounded-xl shadow-2xl shadow-neutral-500 overflow-hidden transition-transform duration-300 border-3 border-amber-100 hover:scale-105 hover:shadow-2xl hover:shadow-black`}>
            <div className="relative h-72 w-full">
                <Image src={image} alt={name} fill className='object-cover'/>
            </div>
            {/* hover */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6 text-center shaodws">
                <div className="text-white">
                    <h3 className={`${quicksand.className} text-xl font-semibold`}>
                        {name}
                    </h3>
                    <p className={`${quicksand.className} text-xl text-amber-200 mt-1`}>{role}</p>
                    <p className={`${quicksand.className} text-sm mt-6 leading-relaxed`}>
                        {description}
                    </p>
                </div>
            </div>
        </div>
    );
}