import React from "react";
import ReactDOM from "react-dom/client";

const heading1 = React.createElement(
  "h1",
  { id: "head1", className: "heading" },
  "React Heading 1 from parcel learinigninsdsn"
);

const heading2 = React.createElement(
  "h2",
  { id: "head2" },
  "React Heading 2 from parcel"
);

const heading3 = React.createElement(
  "h3",
  { id: "head3" },
  "React Heading 3 from parcel"
);

const container = React.createElement("div", { id: "container" }, [
  heading1,
  heading2,
  heading3,
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(container);
