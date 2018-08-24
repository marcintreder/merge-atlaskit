import React from "react";
import PropTypes from "prop-types";

import Calendar from "@atlaskit/calendar";

export default function CalendarUXPin(props) {
  return <Calendar {...props} />;
};

CalendarUXPin.propTypes = {
  day: PropTypes.number,
  defaultDay: PropTypes.number.isRequired,
  defaultDisabled: PropTypes.arrayOf(PropTypes.string),
  defaultMonth: PropTypes.number,
  defaultPreviouslySelected: PropTypes.arrayOf(PropTypes.string),
  defaultSelected: PropTypes.arrayOf(PropTypes.string),
  defaultYear: PropTypes.number,
  disabledArray: PropTypes.arrayOf(PropTypes.string),
  month: PropTypes.number,
  previouslySelected: PropTypes.arrayOf(PropTypes.string),
  selected: PropTypes.arrayOf(PropTypes.string),
  today: PropTypes.string,
  year: PropTypes.number,
  innerProps: PropTypes.object,
};

CalendarUXPin.defaultProps = {
  defaultDay: 0,
  defaultDisabled: [],
  defaultPreviouslySelected: [],
  defaultSelected: [],
};

/* Props Unsuported in Alpha
** onBlur: PropTypes.func,
** onChange: PropTypes.func,
** onFocus: PropTypes.func,
** onSelect: PropTypes.func,
**/
