import React from "react";
import PropTypes from "prop-types";
import SectionMessageM from "@atlaskit/section-message";

const SectionMessage = props => {
  return (
    <SectionMessageM {...props}>
      <p>{props.children}</p>
    </SectionMessageM>
  );
};

SectionMessage.propTypes = {
  /** The appearance styling to use for the section message. */
  appearance: PropTypes.oneOf([
    "info",
    "warning",
    "error",
    "confirmation",
    "change"
  ]),
  /** The main content of the section message. This accepts a react node, 
    although we recommend that this should be a paragraph. */
  children: PropTypes.string,
  /** The heading of the section message. */
  title: PropTypes.string,
  /** Actions to be taken from the section message. These accept an object 
    which are applied to @atlaskit/button components. Middots are automatically 
    added between the items. We generally recommend using no more than two actions. */
  actions: PropTypes.object,
  /** An Icon component to be rendered instead of the default icon for the component. 
    This should only be an @atlaskit/icon icon. You can check out this example to see 
    how to provide this icon. */
  icon: PropTypes.node,
  /** A custom link component. This prop is designed to allow a custom link component to 
    be passed to the link button being rendered by actions. The intended use-case is for 
    when a custom router component such as react router is being used within the application. 
    This component will only be used if a href is passed to the action. All actions provided 
    will automatically have the linkcomponent passed to them. */
  linkComponent: PropTypes.node
};

export default SectionMessage;
