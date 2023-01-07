const navLinks = [
  {
    name: "Bar",
    link: "/bar",
    fetchRoutes: [
      "https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json",
    ],
    title: 'Bar',
    description: 'It a bar yo',
  },
  {
    name: "Scatterplot",
    link: "/scatterplot",
    fetchRoutes: [
      "https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/cyclist-data.json",
    ],
    title: '',
    description: '',
  },
  {
    name: "Heat",
    link: "/heat",
    fetchRoutes: [
      "https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/global-temperature.json",
    ],
    title: '',
    description: '',
  },
  {
    name: "Chloropleth",
    link: "/chloropleth",
    fetchRoutes: [
      "https://cdn.freecodecamp.org/testable-projects-fcc/data/choropleth_map/for_user_education.json",
      "https://cdn.freecodecamp.org/testable-projects-fcc/data/choropleth_map/counties.json",
    ],
    title: '',
    description: '',
  },
  {
    name: "Treemap",
    link: "/treemap",
    fetchRoutes: [
      "https://cdn.freecodecamp.org/testable-projects-fcc/data/tree_map/kickstarter-funding-data.json",
    ],
    title: '',
    description: '',
  },
];

export default navLinks;
