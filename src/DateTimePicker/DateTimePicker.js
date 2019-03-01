import React from "react";
import PropTypes from "prop-types";
import {
  DatePicker,
  DateTimePicker as DateTimePickerM,
  TimePicker
} from "@atlaskit/datetime-picker";

export default class DateTimePicker extends React.Component {
  render() {
    const props = Object.assign({}, this.props);
    delete props.type;
    if (this.props.type === "DateTimePicker") {
      return <DateTimePickerM {...props} />;
    } else if (this.props.type === "TimePicker") {
      return <TimePicker {...props} />;
    } else {
      return <DatePicker {...props} />;
    }
  }
}

DateTimePicker.propTypes = {
  type: PropTypes.oneOf(["DataPicker", "TimePicker", "DateTimePicker"]),
  /** Defines the appearance which can be default or subtle - no borders, background or icon.
   Appearance values will be ignored if styles are parsed via the selectProps. */
  appearance: PropTypes.oneOf(["default", "subtle"]),
  /** Whether or not to auto-focus the field. */
  autoFocus: PropTypes.bool,
  /** Default for isOpen. */
  defaultIsOpen: PropTypes.bool,
  /** Default for value. */
  defaultValue: PropTypes.string,
  /** An array of ISO dates that should be disabled on the calendar. */
  disabled: PropTypes.array,
  /** The icon to show in the field. */
  icon: PropTypes.node,
  /** The id of the field. Currently, react-select transforms this to have a "react-select-" prefix, and an "--input" suffix 
    when applied to the input. For example, the id "my-input" would be transformed to "react-select-my-input--input". 
    Keep this in mind when needing to refer to the ID. This will be fixed in an upcoming release. */
  id: PropTypes.string,
  /** Props to apply to the container. */
  innerProps: PropTypes.object,
  /** Whether or not the field is disabled. */
  isDisabled: PropTypes.bool,
  /** Whether or not the dropdown is open. */
  isOpen: PropTypes.bool,
  /** The name of the field. */
  name: PropTypes.string,
  /** Called when the field is blurred. */
  onBlur: PropTypes.func,
  /** Called when the value changes. The only argument is an ISO time. */
  onChange: PropTypes.func,
  /** Called when the field is focused. */
  onFocus: PropTypes.func,
  /** A function for parsing input characters and transforming them into a Date object.
   By default uses date-fn's parse method */
  parseInputValue: PropTypes.func,
  /** A function for formatting the date displayed in the input. By default composes 
    together date-fn's parse method and date-fn's format method to return a correctly 
    formatted date string */
  formatDisplayLabel: PropTypes.func,
  /* Props to apply to the select. This can be used to set options such as placeholder text. 
    See here for documentation on select props. */
  selectProps: PropTypes.object,
  /* This prop affects the height of the select control. 
    Compact is gridSize() * 4, default is gridSize * 5 */
  spacing: PropTypes.oneOf(["compact", "default"]),
  /* The ISO time that should be used as the input value. */
  value: PropTypes.string,
  /** Indicates current value is invalid & changes border color */
  isInvalid: PropTypes.bool,
  /** Hides icon for dropdown indicator. */
  hideIcon: PropTypes.bool,
  /** Format the date with a string that is accepted by date-fns's format function. */
  dateFormat: PropTypes.string,
  /** Placeholder text displayed in input */
  placeholder: PropTypes.string,
  /* The times to show in the dropdown. */
  times: PropTypes.array,
  /** Allow users to edit the input and add a time */
  timeIsEditable: PropTypes.bool,
  /** Time format that is accepted by date-fns's format function */
  timeFormat: PropTypes.string,
  /** Format the date with a string that is accepted by date-fns's format function. */
  dateFormat: PropTypes.string,
  datePickerProps: PropTypes.object,
  timePickerProps: PropTypes.object,
  /** Function to parse passed in dateTimePicker value into the requisite sub values date, time and zone. */
  parseValue: PropTypes.func,
  /** Select props to pass onto the DatePicker component. This can be used to set options such as placeholder text. */
  datePickerSelectProps: PropTypes.object,
  /** Select props to pass onto the TimePicker component. This can be used to set options such as placeholder text. */
  timePickerSelectProps: PropTypes.object
};
