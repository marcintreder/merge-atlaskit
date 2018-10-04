import React from "react";
import PropTypes from "prop-types";
import Button from "@atlaskit/button";

export default function ButtonUXPin(props) {
  return <Button {...props}>{props.children}</Button>;
}

ButtonUXPin.propTypes = {
  /** The base styling to apply to the button. */
  appearance: PropTypes.oneOf([
    "primary",
    "default",
    "danger",
    "link",
    "subtle",
    "subtle-link",
    "warning",
    "help"
  ]),
  /** This button's child nodes. */
  children: PropTypes.node.isRequired,
  /** Add a classname to the button. */
  className: PropTypes.string,
  /** Name property of a linked form that the button submits when clicked. */
  form: PropTypes.string,
  /** Provides a url for buttons being used as a link. */
  href: PropTypes.string,
  /** Places an icon within the button, after the button's text. */
  iconAfter: PropTypes.element,
  /** Places an icon within the button, before the button's text. */
  iconBefore: PropTypes.element,
  /** Provide a unique id to the button. */
  id: PropTypes.string,
  /** Set if the button is disabled. */
  isDisabled: PropTypes.bool,
  /** Change the style to indicate the button is selected. */
  isSelected: PropTypes.bool,
  /** Set if the button is loading. When isLoading is true, text is hidden, and a spinner is shown in its place. 
  The button maintains the width that it would have if the text were visible. */
  isLoading: PropTypes.bool,
  /** Set the amount of padding in the button. */
  spacing: PropTypes.oneOf(["compact", "default", "none"]).isRequired,
  target: PropTypes.string,
  type: PropTypes.oneOf(["button", "submit"]),
  shouldFitContainer: PropTypes.bool,
  autoFocus: PropTypes.bool,
  /** Assign specific tabIndex order to the underlying html button. */
  tabIndex: PropTypes.number,
  /** Handler to be called on focus */
  onFocus: PropTypes.func,
  /** Handler to be called on click. The second argument can be used to track analytics data. 
  See the tutorial in the analytics-next package for details. */
  onClick: PropTypes.func,
  /** Handler to be called on blur */
  onBlur: PropTypes.func,
  /** Pass a reference on to the styled component */
  innerRef: PropTypes.func,
  /** A custom component to use instead of the default button. */
  component: PropTypes.element,
  /** Pass aria-controls to underlying html button. */
  ariaControls: PropTypes.string,
  /** Pass aria-expanded to underlying html button. */
  ariaExpanded: PropTypes.bool,
  /** Pass aria-label to underlying html button. */
  ariaLabel: PropTypes.string,
  /** Pass aria-haspopup to underlying html button. */
  ariaHaspopup: PropTypes.bool
};

ButtonUXPin.defaultProps = {
  appearance: "default",
  children: "Test",
  spacing: "default",
  shouldFitContainer: false,
  autoFocus: false
};