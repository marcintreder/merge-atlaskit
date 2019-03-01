import * as React from "react";
import GlobalNavigation from "../GlobalNavigation";

export default (
  <GlobalNavigation
    uxpId="global0"
    product="confluence"
    productHref="#"
    onSearchClick={() => console.log("search clicked")}
    onStarredClick={() => console.log("your work clicked")}
    onNotificationClick={() => console.log("notification clicked")}
    loginHref="#login"
  />
);
