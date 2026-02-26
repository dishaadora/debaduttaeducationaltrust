import {quicksand, quintessential} from "@/app/ui/fonts";
import { dot } from "node:test/reporters";
import BlockHood from "./Block";
import ScrollList from "./ScrollLIsts";
import "./globals.css";
export default function Objectives(){
    return(
        <>
        <div className={`${quicksand.className} flex items-center justify-center p-6 border-l-2 border-l-amber-100 moonlight-bg`}>
            <div className="text-2xl pl-6 space-y-2 gap-4 font-medium">
                <p className="rounded-2xl p-4 font-semibold text-[#8ba3c5] border-3 shadow-bottom border-[#8ba3c5] backdrop-blur-3xl">
                    <ScrollList text="Free Evening Tuitions in nearby villages"/>
                </p>
                <p className="rounded-2xl p-4 font-semibold text-[#8ba3c5] border-3 shadow-bottom border-[#8ba3c5] backdrop-blur-3xl">
                    <ScrollList text="Free Plantation Programmes"/>
                </p>
                <p className="rounded-2xl p-4 font-semibold text-[#8ba3c5] border-3 shadow-bottom border-[#8ba3c5] backdrop-blur-3xl">
                    <ScrollList text="Blood Donation Camps"/>
                </p>
                <p className="rounded-2xl p-4 font-semibold text-[#8ba3c5] border-3 shadow-bottom border-[#8ba3c5] backdrop-blur-3xl">
                    <ScrollList text="Free Eye and Ear Checkup for children from surrounding rural areas"/>
                </p>
                <p className="rounded-2xl p-4 font-semibold text-[#8ba3c5] border-3 shadow-bottom border-[#8ba3c5] backdrop-blur-3xl">
                    <ScrollList text="Developement of cricket academy"/>
                </p>
            </div>
        </div>
        </>
    );
}