"use client";

import React from "react";

export default function QuickBooksCta() {
  const handleClick = () => {
    // After opening QuickBooks in a new tab, route this tab to /consultanswer
    // so they can complete the intake + scheduling.
    setTimeout(() => {
      window.location.href = "/consultanswer";
    }, 600); // small delay so the new tab pop opens first
  };

  return (
    <a
      href="https://connect.intuit.com/portal/app/CommerceNetwork/view/scs-v1-8813a85c1b8a403dbafc7a584d09f514a3ebe7daf108485987c0603d1857092c1596d1fd254c4717949d7aaaf8f32a4c?locale=EN_US"
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className="inline-flex items-center justify-center rounded-xl border border-[#cfb580] px-5 py-3 font-semibold tracking-wide text-[#cfb580] transition hover:bg-[#cfb580] hover:text-[#1a191b]"
    >
      Pay $250 & Reserve
    </a>
  );
}
