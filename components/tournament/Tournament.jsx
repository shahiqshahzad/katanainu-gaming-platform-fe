/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React from "react";

function Tournament() {
  return (
    <div>
      <div className="my-14 md:pt-20">
        <div className="flex flex-col">
          <Image src={"images/news.svg"} width={420} height={80} alt="img" />
        </div>
        <p className="text-[16px] font-satoshi-regular text-[#F0F0F0] xl:pt-10 pt-6">
          {" "}
          Prepare to engage in a heart-pounding, immersive combat experience as
          Call of Duty: Vanguard takes you back to the intense and harrowing
          battles of World War II. Developed by Sledgehammer Games and published
          by Activision, this highly anticipated installment of the acclaimed
          Call of Duty franchise delivers a gripping narrative-driven campaign,
          adrenaline-fueled multiplayer action, gameplay options. <br />
          <br /> <br /> Set against the backdrop of a global conflict, Call of
          Duty: Vanguard thrusts players into the boots of a diverse group of
          multinational soldiers from different theaters of war. Experience the
          untold stories of these brave men and women, as they form the
          first-ever Special Forces unit known as Task Force One. From the
          war-torn streets of Stalingrad to the sun-soaked beaches of Normandy,
          you'll witness the pivotal moments that shaped the outcome.
        </p>
      </div>
    </div>
  );
}

export default Tournament;
