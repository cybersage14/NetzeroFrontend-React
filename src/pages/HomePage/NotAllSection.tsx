import React from "react";
import SectionTitle from "../../components/SectionTitle";

/* -------------------------------------------------------------------- */

export default function NotAllSection() {
  return (
    <div className="container max-w-3xl mx-auto flex flex-col items-center gap-8">
      <SectionTitle title="Not All Offsets Are Created Equal" />

      <p className="font-bold text-base text-center">
        Our Nori Carbon Removal Tonnes (NRTs) represent CO2 verifiably removed from the atmosphere and stored. We don’t sell reductions or avoidance offsets.
      </p>

      <div className="flex justify-center">
        <img src="/assets/images/markdown-removals_offsets_web.gif" alt="" className="w-4/5" />
      </div>
    </div>
  )
}