import React from "react";
import PropTypes from "prop-types";
import DropdownMenu from "@atlaskit/dropdown-menu";

export default class DropdownMenuMerge extends React.Component {
    render() {
        return <DropdownMenu {...this.props}>{this.props.children}</DropdownMenu>;
    }
}

DropdownMenuMerge.propTypes = {
    /** Controls the appearance of the menu. Default menu has scroll after 
    its height exceeds the pre-defined amount. Tall menu has no restrictions. */
    appearance: PropTypes.oneOf([
        "default",
        "tall"
    ]),
    /** Value passed to the Layer component to determine when to reposition the droplist */
    boundariesElement: PropTypes.oneOf([
        "viewport",
        "window",
        "scrollParent"
    ]),
    /** Content that will be rendered inside the layer element. Should typically be 
    DropdownItemGroup or DropdownItem, or checkbox / radio variants of those. */
    children: PropTypes.node,
    /** If true, a Spinner is rendered instead of the items */
    isLoading: PropTypes.bool,
    /** Controls the open state of the dropdown. */
    isOpen: PropTypes.bool,
    /** Position of the menu. See the documentation of @atlaskit/layer for more details. */
    position: PropTypes.string,
    /** Determines if the dropdown menu should be positioned fixed. Useful for breaking out of 
    overflow scroll/hidden containers, however, extra layout management will be required to 
    control scroll behaviour when this property is enabled as the menu will not update position
    with the target on scroll. */
    isMenuFixed: PropTypes.bool,
    /** Deprecated. Option to display multiline items when content is too long. Instead of 
    ellipsing the overflown text it causes item to flow over multiple lines. */
    shouldAllowMultilineItems: PropTypes.bool,
    /** Option to fit dropdown menu width to its parent width */
    shouldFitContainer: PropTypes.bool,
    /** Allows the dropdown menu to be placed on the opposite side of its trigger if it 
    does not fit in the viewport. */
    shouldFlip: PropTypes.bool,
    /** Content which will trigger the dropdown menu to open and close. Use with triggerType to 
    easily get a button trigger. */
    trigger: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
    /** Props to pass through to the trigger button. See @atlaskit/button for allowed props. */
    triggerButtonProps: PropTypes.object,
    /** Controls the type of trigger to be used for the dropdown menu. The default trigger allows 
    you to supply your own trigger component. Setting this prop to button will render a Button component 
    with an 'expand' icon, and the trigger prop contents inside the button. */
    triggerType: PropTypes.oneOf(["default", "button"]),
    /** Callback to know when the menu is correctly positioned after it is opened */
    onPositioned: PropTypes.func,
    /** Controls the initial open state of the dropdown. */
    defaultOpen: PropTypes.bool,
    /** Called when the menu is open or closed. Received an object with isOpen state. */
    onOpenChange: PropTypes.func
}