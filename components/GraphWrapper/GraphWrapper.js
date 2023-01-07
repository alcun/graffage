"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";

const GraphWrapper = ({ graphType }) => {
  return <div>GraphType : {graphType}</div>;
};

export default GraphWrapper;
