export default async function getData(fetchRoute) {
  const res = await fetch('https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json');

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}
