import React from "react";
import PropTypes from "prop-types";
import Page from "@atlaskit/page";

export default class PageMerge extends React.Component {
  render() {
    return <Page {...this.props}>{this.props.children}</Page>;
  }
}

PageMerge.propTypes = {
  /** If you provide the banner or banners you are to use, page will help you coordinate 
    the showing and hiding of them in conjunction with isBannerOpen. This is designed to 
    take our banner component, and matches the animation timing of our banner. The only 
    time that two banners should be rendered are when an announcement banner is loaded 
    alongside an error or warning banner. */
  banner: PropTypes.node,
  /** Takes our navigation component and helps position it with consideration to rendered banners. */
  navigation: PropTypes.node,
  /** The contents of the page, to be rendered next to navigation. It will be correctly position
   with relation to both any banner, as well as navigation. */
  children: PropTypes.node,
  /** Sets whether to show or hide the banner. This is responsible for moving the page contents
   down, as well as whether to render the banner component. */
  isBannerOpen: PropTypes.bool,
  /** 52 is line height (20) + 4*grid. This is the height of all banners aside from the dynamically 
    heighted announcement banner. Banner height can be retrieved from banner using its innerRef, which 
    always returns its height when expanded even when collapsed. In addition to setting the height of 
    the banner's container for dynamically heighted banners, you will need to set the pageOffset in navigation. 
    Since this is a lot to think about, here is an example that implements displaying both an announcement 
    banner and a warning banner on a page, while matching the height of each. */
  bannerHeight: PropTypes.number
};
