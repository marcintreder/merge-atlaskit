import * as React from "react";
import DynamicTable from "../DynamicTable";
import { caption, head, rows } from "../sampleData/sample-data.js";

export default (
  <DynamicTable
    uxpId="table0"
    caption={caption}
    head={head}
    rows={rows}
    rowsPerPage={10}
    defaultPage={1}
    loadingSpinnerSize="large"
    isLoading={false}
    isFixedSize
    defaultSortKey="term"
    defaultSortOrder="ASC"
  />
);
