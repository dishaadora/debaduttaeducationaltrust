import {quicksand} from "@/app/ui/fonts";
import ScrollList from "../../ui/ListScroller";

export default function Objectives(){
    return(
        <>
        <div className={`${quicksand.className} flex items-center justify-center p-6 border-l-2 border-l-amber-100 bg-[#b7c1ca]`}>
            <div className="text-2xl pl-6 space-y-2 gap-4 font-medium">
                <p className="rounded-2xl p-4 font-semibold text-[#8ba3c5] shadow-bottom backdrop-blur-3xl moonlight-bg">
                    <ScrollList text="Free Evening Tuitions in nearby villages"/>
                </p>
                <p className="rounded-2xl p-4 font-semibold text-[#8ba3c5] shadow-bottom backdrop-blur-3xl moonlight-bg ">
                    <ScrollList text="Free Plantation Programmes"/>
                </p>
                <p className="rounded-2xl p-4 font-semibold text-[#8ba3c5] shadow-bottom backdrop-blur-3xl moonlight-bg">
                    <ScrollList text="Blood Donation Camps"/>
                </p>
                <p className="rounded-2xl p-4 font-semibold text-[#8ba3c5] shadow-bottom backdrop-blur-3xl moonlight-bg">
                    <ScrollList text="Free Eye and Ear Checkup for children from surrounding rural areas"/>
                </p>
                <p className="rounded-2xl p-4 font-semibold text-[#8ba3c5] shadow-bottom backdrop-blur-3xl moonlight-bg">
                    <ScrollList text="Developement of Cricket Academy"/>
                </p>
            </div>
        </div>
        </>
    );
}