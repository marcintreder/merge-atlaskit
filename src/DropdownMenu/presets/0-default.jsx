import * as React from "react";
import DropdownMenu from "../DropdownMenu";
import DropdownItemGroup from "../../DropdownItemGroup/DropdownItemGroup";
import DropdownItem from "../../DropdownItem/DropdownItem";

export default (
  <DropdownMenu
    uxpId="menu0"
    trigger="Choices"
    triggerType="button"
    shouldFlip={false}
    position="right middle"
    shouldFitContainer
  >
    <DropdownItemGroup uxpId="menugroup0">
      <DropdownItem uxpId="menuitem0">Test 1</DropdownItem>
      <DropdownItem uxpId="menuitem1">Test 2</DropdownItem>
    </DropdownItemGroup>
  </DropdownMenu>
);
