import React from "react";
import GraphWrapper from "../../components/GraphWrapper/GraphWrapper";
import Script from "next/script";
import navLinks from "../../data/navLinks";
import fetchData from "../../functions/fetchData";



const Page = async ({ params }) => {
 
  const graphType = params.graphType;
  const graphData = navLinks.find((nav) => nav.name.toLowerCase() === graphType)
  const fetchRoutes = graphData.fetchRoutes

  const data = await fetchData(fetchRoutes);

  return (
    <>
      
      <GraphWrapper graphType={graphType} />
      {JSON.stringify(data)}
    </>
  );
};

export default Page;
