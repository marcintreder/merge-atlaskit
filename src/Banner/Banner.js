import React from "react";
import PropTypes from "prop-types";
import BannerM from "@atlaskit/banner";

const Banner = (props) => <BannerM {...props} />

Banner.propTypes = {
    /** Visual style to be used for the banner */
    appearance: PropTypes.oneOf([
        "warning",
        "error",
        "announcement"
    ]),
    /** Content to be shown next to the icon. Typically text content but can contain links. */
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    /** Icon to be shown left of the main content. Typically an Atlaskit @atlaskit/icon */
    icon: PropTypes.node,
    /** Defines whether the banner is shown. An animation is used when the value is changed. */
    isOpen: PropTypes.bool,
    /** Returns the inner ref of the component. This is exposed so the height can be used in page. */
    innerRef: PropTypes.func
}

export default Banner;