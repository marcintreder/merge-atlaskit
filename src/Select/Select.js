import React from "react";
import PropTypes from "prop-types";
import SelectM from "@atlaskit/select";

const Select = (props) => <SelectM {...props} />;

Select.propTypes = {
    /** Aria label (for assistive tech) */
    'aria-label': PropTypes.string,
    /** HTML ID of an element that should be used as the label (for assistive tech) */
    'aria-labelledby': PropTypes.string,
    /** Focus the control when it is mounted */
    autoFocus: PropTypes.bool,
    /** Remove the currently focused option when the user presses backspace */
    backspaceRemovesValue: PropTypes.bool,
    /** Remove focus from the input when the user selects an option (handy for dismissing the keyboard on touch devices) */
    blurInputOnSelect: PropTypes.bool,
    /** When the user reaches the top/bottom of the menu, prevent scroll on the scroll-parent  */
    captureMenuScroll: PropTypes.bool,
    /** Sets a className attribute on the outer component */
    className: PropTypes.string,
    /**
    If provided, all inner components will be given a prefixed className attribute.
    This is useful when styling via CSS classes instead of the Styles API approach.
    */
    classNamePrefix: PropTypes.string,
    /** Close the select menu when the user selects an option */
    closeMenuOnSelect: PropTypes.bool,
    /**
    If `true`, close the select menu when the user scrolls the document/body.
    If a function, takes a standard javascript `ScrollEvent` you return a boolean:
    `true` => The menu closes
    `false` => The menu stays open
    This is useful when you have a scrollable modal and want to portal the menu out,
    but want to avoid graphical issues.
    */
    closeMenuOnScroll: PropTypes.bool,
    /**
    This complex object includes all the compositional components that are used
    in `react-select`. If you wish to overwrite a component, pass in an object
    with the appropriate namespace.
    If you only wish to restyle a component, we recommend using the `styles` prop
    instead. For a list of the components that can be passed in, and the shape
    that will be passed to them, see [the components docs](/api#components)
    */
    components: PropTypes.object,
    /** Whether the value of the select, e.g. SingleValue, should be displayed in the control. */
    controlShouldRenderValue: PropTypes.bool,
    /** Delimiter used to join multiple values into a single HTML Input value */
    delimiter: PropTypes.string,
    /** Clear all values when the user presses escape AND the menu is closed */
    escapeClearsValue: PropTypes.bool,
    /** Custom method to filter whether an option should be displayed in the menu */
    filterOption: PropTypes.bool,
    /** Formats group labels in the menu as React components */
    formatGroupLabel: PropTypes.node,
    /** Formats option labels in the menu and control as React components */
    formatOptionLabel: PropTypes.node,
    /** Resolves option data to a string to be displayed as the label by components */
    getOptionLabel: PropTypes.string,
    /** Resolves option data to a string to compare options and specify value attributes */
    getOptionValue: PropTypes.string,
    /** Hide the selected option from the menu */
    hideSelectedOptions: PropTypes.bool,
    /** The id to set on the SelectContainer component. */
    id: PropTypes.string,
    /** The value of the search input */
    inputValue: PropTypes.string,
    /** The id of the search input */
    inputId: PropTypes.string,
    /** Define an id prefix for the select components e.g. {your-id}-value */
    instanceId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    /** Is the select value clearable */
    isClearable: PropTypes.bool,
    /** Is the select disabled */
    isDisabled: PropTypes.bool,
    /** Is the select in a state of loading (async) */
    isLoading: PropTypes.bool,
    /** Override the built-in logic to detect whether an option is disabled */
    isOptionDisabled: PropTypes.bool,
    /** Override the built-in logic to detect whether an option is selected */
    isOptionSelected: PropTypes.bool,
    /** Support multiple selected options */
    isMulti: PropTypes.bool,
    /** Is the select direction right-to-left */
    isRtl: PropTypes.bool,
    /** Whether to enable search functionality */
    isSearchable: PropTypes.bool,
    /** Async: Text to display when loading options */
    loadingMessage: PropTypes.string,
    /** Minimum height of the menu before flipping */
    minMenuHeight: PropTypes.number,
    /** Maximum height of the menu before scrolling */
    maxMenuHeight: PropTypes.number,
    /** Whether the menu is open */
    menuIsOpen: PropTypes.bool,
    /** Default placement of the menu in relation to the control. 'auto' will flip
     when there isn't enough space below the control. */
    menuPlacement: PropTypes.oneOf(["auto", "bottom", "top"]),
    /** The CSS position value of the menu, when "fixed" extra layout management is required */
    menuPosition: PropTypes.oneOf(["absolute", "fixed"]),
    /** Whether the menu should use a portal, and where it should attach */
    menuPortalTarget: PropTypes.node,
    /** Whether to block scroll events when the menu is open */
    menuShouldBlockScroll: PropTypes.bool,
    /** Whether the menu should be scrolled into view when it opens */
    menuShouldScrollIntoView: PropTypes.bool,
    /** Name of the HTML Input (optional - without this, no input will be rendered) */
    name: PropTypes.string,
    /** Text to display when there are no options */
    noOptionsMessage: PropTypes.string,
    /** Handle blur events on the control */
    onBlur: PropTypes.func,
    /** Handle change events on the select */
    onChange: PropTypes.func,
    /** Handle focus events on the control */
    onFocus: PropTypes.func,
    /** Handle change events on the input */
    onInputChange: PropTypes.func,
    /** Handle key down events on the select */
    onKeyDown: PropTypes.func,
    /** Handle the menu opening */
    onMenuOpen: PropTypes.func,
    /** Handle the menu closing */
    onMenuClose: PropTypes.func,
    /** Fired when the user scrolls to the top of the menu */
    onMenuScrollToTop: PropTypes.func,
    /** Fired when the user scrolls to the bottom of the menu */
    onMenuScrollToBottom: PropTypes.func,
    /** Allows control of whether the menu is opened when the Select is focused */
    openMenuOnFocus: PropTypes.bool,
    /** Allows control of whether the menu is opened when the Select is clicked */
    openMenuOnClick: PropTypes.bool,
    /** Array of options that populate the select menu */
    options: PropTypes.array,
    /** Number of options to jump in menu when page{up|down} keys are used */
    pageSize: PropTypes.number,
    /** Placeholder text for the select value */
    placeholder: PropTypes.string,
    /** Status to relay to screen readers */
    screenReaderStatus: PropTypes.string,
    /** Style modifier methods */
    styles: PropTypes.object,
    /** Theme modifier method */
    theme: PropTypes.object,
    /** Sets the tabIndex attribute on the input */
    tabIndex: PropTypes.string,
    /** Select the currently focused option when the user presses tab */
    tabSelectsValue: PropTypes.bool,
    /** The value of the select; reflected by the selected option */
    value: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
};

export default Select;