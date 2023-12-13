import React from "react";
import Link from "next/link";
import RightArrow from "./icons/RightArrow";

export default function BreadCrumbs() {
  return (
    <div className="flex gap-x-6">
      <Link href="/home">
        <p className="text-slate-500">Home</p>
      </Link>
      <RightArrow />
      <Link href="/shop">
        <p className="text-slate-500">Shop</p>
      </Link>
      <RightArrow />
      <p>Asgard Sofa</p>
    </div>
  );
}
