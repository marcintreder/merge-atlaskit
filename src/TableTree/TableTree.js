import React from "react";
import PropTypes from "prop-types";
import TableTreeM from "@atlaskit/table-tree";

const TableTree = (props) => <TableTreeM {...props} />;

TableTree.propTypes = {
  headers: PropTypes.array,
  columns: PropTypes.array,
  columnWidths: PropTypes.array,
  items: PropTypes.object,
};

export default TableTree;