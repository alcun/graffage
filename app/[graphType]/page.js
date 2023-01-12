import React from "react";
import GraphWrapper from "../../components/GraphWrapper/GraphWrapper";
import Script from "next/script";
import navLinks from "../../data/navLinks";
import fetchData from "../../functions/fetchData";

const Page = async ({ params }) => {
  const graphType = params.graphType;
  const graphInfo = navLinks.find(
    (graph) => graph.name.toLocaleLowerCase() === graphType.toLocaleLowerCase()
  );
  const fetchRoutes = graphInfo ? graphInfo.fetchRoutes : null;
  const graphData = fetchRoutes
    ? await Promise.all(
        fetchRoutes.map(async (route) => {
          return fetchData(route);
        })
      )
    : null;

  return (
    <>
      {graphData ? (
        <GraphWrapper
          graphType={graphType}
          graphInfo={graphInfo}
          graphData={graphData}
        />
      ) : (
        <div>Thats not a graph yo</div>
      )}
    </>
  );
};

export default Page;
