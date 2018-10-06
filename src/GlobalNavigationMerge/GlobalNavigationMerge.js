import React from "react";
import PropTypes from "prop-types";
import GlobalNavigation from "@atlaskit/global-navigation";
import BitbucketIcon from "@atlaskit/icon/glyph/bitbucket";
import StrideIcon from "@atlaskit/icon/glyph/stride";
import JiraIcon from "@atlaskit/icon/glyph/jira";
import HipchatIcon from "@atlaskit/icon/glyph/hipchat";
import ConfluenceIcon from "@atlaskit/icon/glyph/confluence";
import EmojiAtlassianIcon from "@atlaskit/icon/glyph/emoji/atlassian";

export default class GlobalNavigationMerge extends React.Component {
  render() {
    let productIcon;
    switch (this.props.product) {
      case "atlassian":
        productIcon = EmojiAtlassianIcon;
        break;
      case "bitbucket":
        productIcon = BitbucketIcon;
        break;
      case "stride":
        productIcon = StrideIcon;
        break;
      case "jira":
        productIcon = JiraIcon;
        break;
      case "hipchat":
        productIcon = HipchatIcon;
        break;
      case "confluence":
        productIcon = ConfluenceIcon;
        break;
    }

    return <GlobalNavigation productIcon={productIcon} {...this.props} />;
  }
}

GlobalNavigationMerge.propTypes = {
  product: PropTypes.oneOf([
    "atlassian",
    "bitbucket",
    "stride",
    "jira",
    "hipchat",
    "confluence"
  ]),
  /** The product logo. Expected to be an Atlaskit Logo component. */
  productIcon: PropTypes.node,
  /** A callback function which will be called when the product logo item is clicked.
   If this is passed, the drawer does not show up. */
  onProductClick: PropTypes.func,
  /** The text to display in the tooltip for the product logo item. */
  productTooltip: PropTypes.string,
  /** An href attribute for the product logo item. */
  productHref: PropTypes.string,
  /** A callback function which will be called when the product logo item is clicked.
   If this is passed, the drawer does not show up. */
  onCreateClick: PropTypes.func,
  /** The text to display in the tooltip for the create item. */
  createTooltip: PropTypes.string,
  /** A callback function which will be called when the starred item is clicked. */
  onStarredClick: PropTypes.func,
  /** The text to display in the tooltip for the starred item. */
  starredTooltip: PropTypes.string,
  /** A callback function which will be called when the product logo item is clicked.
   If this is passed, the drawer does not show up. */
  onSearchClick: PropTypes.func,
  /** The text to display in the tooltip for the search item. */
  searchTooltip: PropTypes.string,
  /** The component to render the app switcher. */
  appSwitcherComponent: PropTypes.node,
  /** AppSwitcher component The text to display in the tooltip for the app switcher item. */
  appSwitcherTooltip: PropTypes.string,
  /** The text to display in the tooltip for the help item. */
  helpTooltip: PropTypes.string,
  /** A component to render into the help menu dropdown. */
  helpItems: PropTypes.node,
  /** The text to display in the tooltip for the profile item. */
  profileTooltip: PropTypes.string,
  /** A component to render into the profile menu dropdown. */
  profileItems: PropTypes.node,
  /** The URL of the avatar image to render in the profile item. */
  profileIconUrl: PropTypes.string,
  /** The URL to redirect anonymous users to. */
  loginHref: PropTypes.string,
  /** A callback function which will be called when the product logo item is clicked.
   If this is passed, the drawer does not show up. */
  onNotificationClick: PropTypes.func,
  /** The number of unread notifications. Will render as a badge above the notifications item. */
  notificationCount: PropTypes.number,
  /** The text to display in the tooltip for the notifications item. */
  notificationTooltip: PropTypes.string,
  /** A prop to take control over the opening and closing of drawer.
   NOTE: GlobalNavigation controls the drawer behaviour by default. */
  isCreateDrawerOpen: PropTypes.bool,
  /** The contents of the create drawer. This is ignored if onCreateClick is passed. */
  createDrawerContents: PropTypes.node,
  /** A callback function which will be fired when the create drawer is opened. */
  onCreateDrawerOpen: PropTypes.func,
  /** A callback function which will be fired when the create drawer is closed. */
  onCreateDrawerClose: PropTypes.func,
  /** A prop to decide if the contents of the drawer should unmount on drawer close. It is true by default. */
  shouldCreateDrawerUnmountOnExit: PropTypes.bool,
  /** A prop to take control over the opening and closing of drawer. NOTE: GlobalNavigation
   controls the drawer behaviour by default. */
  isSearchDrawerOpen: PropTypes.bool,
  /** The contents of the search drawer. This is ignored if onSearchClick is passed. */
  searchDrawerContents: PropTypes.node,
  /** A callback function which will be called when the search drawer is opened. */
  onSearchDrawerOpen: PropTypes.func,
  /** A callback function which will be called when the search drawer is closed. */
  onSearchDrawerClose: PropTypes.func,
  /** A prop to decide if the contents of the drawer should unmount on drawer close. It is true by default. */
  shouldSearchDrawerUnmountOnExit: PropTypes.bool,
  /** A prop to take control over the opening and closing of drawer. 
  NOTE: GlobalNavigation controls the drawer behaviour by default. */
  isNotificationDrawerOpen: PropTypes.bool,
  /** The contents of the notifications drawer. */
  notificationDrawerContents: PropTypes.node,
  /** A callback function which will be called when the notifications drawer is opened. */
  onNotificationDrawerOpen: PropTypes.func,
  /** A callback function which will be called when the notifications drawer is closed. */
  onNotificationDrawerClose: PropTypes.func,
  /** A prop to decide if the contents of the drawer should unmount on drawer close. It is true by default. */
  shouldNotificationDrawerUnmountOnExit: PropTypes.bool,
  /** A prop to take control over the opening and closing of drawer. 
  NOTE: GlobalNavigation controls the drawer behaviour by default. */
  isStarredDrawerOpen: PropTypes.bool,
  /** The contents of the starred drawer. */
  starredDrawerContents: PropTypes.node,
  /** A callback function which will be called when the starred drawer is opened. */
  onStarredDrawerOpen: PropTypes.func,
  /** A callback function which will be called when the starred drawer is closed. */
  onStarredDrawerClose: PropTypes.func,
  /** A prop to decide if the contents of the drawer should unmount on drawer close. It is true by default */
  shouldStarredDrawerUnmountOnExit: PropTypes.bool
};
