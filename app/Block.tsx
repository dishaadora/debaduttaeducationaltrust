
export default function BlockHood( {text} : {text : string}){
  return(
    <div className="bg-linear-to-b from-neutral-100 to-neutral-900 rounded-2xl p-4 m-4 transform hover:scale-y-110 transition-transform duration-300 origin-top">
      <p>{text}</p>
    </div>
  );
}