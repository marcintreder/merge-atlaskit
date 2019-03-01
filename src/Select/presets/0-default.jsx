import * as React from "react";
import Select from "../Select";

export default (
  <Select
    uxpId="select0"
    className="single-select"
    classNamePrefix="react-select"
    options={[
      { label: "Adelaide", value: "adelaide" },
      { label: "Brisbane", value: "brisbane" },
      { label: "Canberra", value: "canberra" },
      { label: "Darwin", value: "darwin" },
      { label: "Hobart", value: "hobart" },
      { label: "Melbourne", value: "melbourne" },
      { label: "Perth", value: "perth" },
      { label: "Sydney", value: "sydney" }
    ]}
    placeholder="Choose a City"
  />
);
