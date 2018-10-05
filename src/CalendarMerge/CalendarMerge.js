import React from "react";
import PropTypes from "prop-types";

import Calendar from "@atlaskit/calendar";

export default class CalendarMerge extends React.Component {
  render() {
    return <Calendar {...this.props} />
  }
};

CalendarMerge.propTypes = {
  /** The number of the day currently focused. Places border around the date. 0 highlights no date. */
  day: PropTypes.number,
  /** Default for day. */
  defaultDay: PropTypes.number.isRequired,
  /** Default for disabled. */
  defaultDisabled: PropTypes.arrayOf(PropTypes.string),
  /** Default for month. */
  defaultMonth: PropTypes.number,
  /** Default for previouslySelected. */
  defaultPreviouslySelected: PropTypes.arrayOf(PropTypes.string),
  /** Default for selected. */
  defaultSelected: PropTypes.arrayOf(PropTypes.string),
  /** Default for year. */
  defaultYear: PropTypes.number,
  /** Takes an array of dates as string in the format 'YYYY-MM-DD'. All dates provided are greyed out. 
  This does not prevent these dates being selected. */
  disabledArray: PropTypes.arrayOf(PropTypes.string),
  /** The number of the month (from 1 to 12) which the calendar should be on. */
  month: PropTypes.number,
  /** Takes an array of dates as string in the format 'YYYY-MM-DD'. All dates provided are given a background color. */
  previouslySelected: PropTypes.arrayOf(PropTypes.string),
  /** Takes an array of dates as string in the format 'YYYY-MM-DD'. All dates provided are given a background color. */
  selected: PropTypes.arrayOf(PropTypes.string),
  /** Value of current day, as a string in the format 'YYYY-MM-DD'. */
  today: PropTypes.string,
  /** Year to display the calendar for. */
  year: PropTypes.number,
  /** Props to apply to the container. */
  innerProps: PropTypes.object,
  /** Function which is called when the calendar is no longer focused. */
  onBlur: PropTypes.func,
  /** Called when the calendar is navigated. This can be triggered by the keyboard, or by clicking the navigational buttons. 
  The 'type' property indicates the the direction the calendar was navigated whereas the 'iso' property is a string of the format YYYY-MM-DD. */
  onChange: PropTypes.func,
  /** Called when the calendar receives focus. This could be from a mouse event on the container by tabbing into it. */
  onFocus: PropTypes.func,
  /** Function called when a day is clicked on. Calls with an object that has a day, month and week property as numbers, representing the date just clicked. 
  It also has an 'iso' property, which is a string of the selected date in the format YYYY-MM-DD. */
  onSelect: PropTypes.func
};