import React from "react";

const jsx = () => {
  const element = <div id="root"> Hello World </div>;
  const elementR = React.createElement("div", { id: "root" }, "Hello World");
  const element2 = (
    <div>
      <span>Hello</span> <span>World</span>
    </div>
  );
  const element2R = React.createElment("div", {
    children: [
      React.createElment("span", null, "Hello"),
      " ",
      React.createElment("span", null, "world"),
    ],
  });
  return (
    <div>
      <div className="heading" id="heading">
        {" "}
        This is heading
      </div>
      <div className="heading2"></div>
    </div>
  );
};

export default jsx;
