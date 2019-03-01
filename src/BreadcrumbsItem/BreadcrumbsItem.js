import React from "react";
import PropTypes from "prop-types";
import { BreadcrumbsItem as BreadcrumbsItemM } from "@atlaskit/breadcrumbs";

const BreadcrumbsItem = (props) => <BreadcrumbsItemM {...props} />;

BreadcrumbsItem.propTypes = {
  text: PropTypes.string,
  /** Whether this item will be followed by a separator. */
  hasSeparator: PropTypes.bool,
  /** The url or path which the breadcrumb should act as a link to. */
  href: PropTypes.string,
  /** An icon to display before the breadcrumb. */
  iconBefore: PropTypes.node,
  /** An icon to display after the breadcrumb. */
  iconAfter: PropTypes.node,
  /** Handler to be called on click. */
  onClick: PropTypes.func,
  /** The maximum width in pixels that an item can have before it is truncated. 
  If this is not set, truncation will only occur when it cannot fit alone on a line. 
  If there is no truncationWidth, tooltips are not provided on truncation. */
  truncationWidth: PropTypes.number,
  target: PropTypes.oneOf([
    "_blank",
    "_parent",
    "_self",
    "_top"]),
  /** Provide a custom component to use instead of the default button. 
  The custom component should accept a className prop so it can be styled and possibly all action handlers  */
  component: PropTypes.node
}

export default BreadcrumbsItem;