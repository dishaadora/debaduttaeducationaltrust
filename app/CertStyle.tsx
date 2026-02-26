import "./globals.css";
import { Quicksand } from "next/font/google";
import { quicksand } from "./ui/fonts";
type CertStyleProps = {
    title?: string
    children?: React.ReactNode
}
export default function CertStyle({
    title = "docs",
    children,
}: CertStyleProps) {
    return(
        <>
        <div className={`relative ${quicksand.className}`}>
            {/* flap top */}
            <div className="absolute h-8 w-32 -top-8 left-4 z-10 rounded-t-xl flex items-center px-4 shadow-[0_-8px_20px_(#8ba3c5)] frostblue-bg border-3 border-[#526d91]">
                <span className="text-[18px] font-bold text-amber-200">
                    {title}
                </span>
            </div>
            {/* folder body */}
            <div className="relative z-20 rounded-b-xl rounded-t-xl  folder-shadow w-[500px] h-[350px] p-0 overflow-hidden border-3 border-[#526d91]">
                {children}
            </div>
        </div>
        </>
    );
}