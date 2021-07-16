import React from "react";

import Header from ".";

export default {
  title: "Components/Header",
  component: Header,
};

export const DashboardHeader = (props) => <Header {...props} />;
export const ProjectHeader = (props) => <Header {...props} />;

DashboardHeader.args = {
  title: "Dashboard",
};

ProjectHeader.args = {
  title: "My Projects",
};
