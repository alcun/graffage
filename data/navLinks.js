const navLinks = [
  {
    name: "Bar",
    link: "/bar",
    fetchRoutes: [
      "https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json",
    ],
  },
  {
    name: "Scatterplot",
    link: "/scatterplot",
    fetchRoutes: [
      "https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/cyclist-data.json",
    ],
  },
  {
    name: "Heat",
    link: "/heat",
    fetchRoutes: [
      "https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/global-temperature.json",
    ],
  },
  {
    name: "Chloropleth",
    link: "/chloropleth",
    fetchRoutes: [
      "https://cdn.freecodecamp.org/testable-projects-fcc/data/choropleth_map/for_user_education.json",
      "https://cdn.freecodecamp.org/testable-projects-fcc/data/choropleth_map/counties.json",
    ],
  },
  {
    name: "Treemap",
    link: "/treemap",
    fetchRoutes: [
      "https://cdn.freecodecamp.org/testable-projects-fcc/data/tree_map/kickstarter-funding-data.json",
    ],
  },
];

export default navLinks;
