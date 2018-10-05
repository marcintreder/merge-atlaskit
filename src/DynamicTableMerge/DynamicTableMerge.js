import React from "react";
import PropTypes from "prop-types";

import DynamicTable from "@atlaskit/dynamic-table";
import {caption, head, rows} from "./sampleData/sample-data.js";

export default class DynamicTableMerge extends React.Component {
  render() {
    return (
      <div style={{maxWidth: "600px"}}>
        <DynamicTable {...this.props} caption={caption} head={head} rows={rows} />
      </div>
    )
  }
};

DynamicTableMerge.propTypes = {
  defaultPage: PropTypes.number,
  defaultSortKey: PropTypes.string,
  defaultSortOrder: PropTypes.oneOf(["ASC", "DESC"]),
  loadingSpinnerSize: PropTypes.oneOf(["small", "large"]),
  isLoading: PropTypes.bool,
  isFixedSize: PropTypes.bool,
  rowsPerPage: PropTypes.number,
  page: PropTypes.number,
  sortKey: PropTypes.string,
  sortOrder: PropTypes.oneOf(["ASC", "DESC"]),
  isRankable: PropTypes.bool,
  paginationi18n: PropTypes.shape({
    prev: PropTypes.string,
    next: PropTypes.string,
  }),
  caption: PropTypes.element,
  head: PropTypes.object,
  rows: PropTypes.object,
  emptyView: PropTypes.element,
  onSetPage: PropTypes.func,
  onSort: PropTypes.func,
  onRankStart: PropTypes.func,
  onRankEnd: PropTypes.func
};

