import React from "react";
import GraphWrapper from "../../components/GraphWrapper/GraphWrapper";

const Page = async ({ params }) => {
  const graphType = params.graphType;
  async function getData() {

    const res = await fetch('https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json');
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
  
    // Recommendation: handle errors
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data');
    }
  
    return res.json();
  }


  const data = await getData();
  return (
    <>
      <GraphWrapper graphType={graphType} />
      {JSON.stringify(data)}
    </>
  );
};

export default Page;
