export default async function getData(fetchRoute) {
  const res = await fetch(fetchRoute);

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}
