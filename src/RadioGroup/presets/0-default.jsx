import * as React from "react";
import RadioGroup from "../RadioGroup";

export default (
  <RadioGroup
    options={[
      { name: "color", value: "red", label: "Red" },
      { name: "color", value: "blue", label: "Blue", defaultChecked: true },
      { name: "color", value: "yellow", label: "Yellow" },
      { name: "color", value: "green", label: "Green" }
    ]}
  />
);
