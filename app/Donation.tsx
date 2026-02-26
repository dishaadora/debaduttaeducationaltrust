import {quicksand , quintessential} from "./ui/fonts";
export default function Donation(){
    return(
        <>
        <div className="flex flex-col gap-12 h-screen justify-center items-center">
            <div className="w-full">
                <p className={`${quicksand.className} text-6xl font-semibold flex justify-center mx-20 rounded-[15px] text-[#b9cadf] py-4 mt-[20px]`}>Help us by donating to our cause</p>
            </div>
            <div className="w-full flex justify-center items-center">
                <button className="border-2 border-[#b9cadf] rounded-2xl px-12 py-4 text-2xl flex justify-center items-center hover:bg-amber-100 transform ease-in-out hover:text-blue-900">Donate</button>
            </div>
        </div>
        </>
    );
}