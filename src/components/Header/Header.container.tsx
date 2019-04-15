import * as React from "react";
import Header from "./Header";

const links = [
  {
    to: "/",
    title: "Home"
  },
  {
    to: "/graphics",
    title: "Graphics"
  },
  {
    to: "/regular-form",
    title: "Regular form"
  },
  {
    to: "/graphql",
    title: "Graph QL"
  }
];

const HeaderContainer: React.FC = () => {
  return <Header links={links} />;
};

export default HeaderContainer;
