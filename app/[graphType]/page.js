import React from "react";
import GraphWrapper from "../../components/GraphWrapper/GraphWrapper";

const Page = ({ params }) => {
  const graphType = params.graphType;
  return (
    <>
      <GraphWrapper graphType={graphType} />
    </>
  );
};

export default Page;
