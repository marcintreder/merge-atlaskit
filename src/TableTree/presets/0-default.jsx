import * as React from "react";
import TableTree from "../TableTree";

export default (
  <TableTree
    headers={["Title", "Numbering"]}
    columns={["Title", "Numbering"]}
    columnWidths={["200px", "200px"]}
    items={[
      {
        title: "There Will Be Code",
        page: 1,
        numbering: "1.1",
        children: []
      },
      {
        title: "Bad code",
        page: 2,
        numbering: "1.2",
        children: []
      },
      {
        title: "The Total Cost of Owning a Mess",
        page: 3,
        numbering: "1.3",
        children: []
      }
    ]}
  />
);
