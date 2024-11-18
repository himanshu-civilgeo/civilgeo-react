import React from "react";

function Card({price = "150$"}) {
  // const [count, setCount] = useState(0);
// console.log("Props", props)
    console.log
  return (
    <>
      <div className="w-60 flex flex-col rounded-xl bg-black min-h-[19rem] mb-10">
        <div>
          <img
            src="https://cdn.vox-cdn.com/thumbor/ZkmdkuJUTLgJh96_FWQ5zweGGxo=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/23084330/bored_ape_nft_accidental_.jpg"
            alt="test"
            className="object-cover object-center rounded-t-xl"
          />
        </div>
        <div className="flex flex-col py-3 px-3 pb-6">
          <div className="flex justify-between pb-3">
            <h4 className="font-bold text-white text-left">
              Bored ape nft accidental
            </h4>
            <h4 className="text-white">Price</h4>
          </div>
          <div className="flex  justify-between">
            <p className="text-white">#345</p>
            <p className="text-white">{price || "100$"}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
