import * as React from "react";
import Breadcrumbs from "../Breadcrumbs";
import BreadcrumbsItem from "../../BreadcrumbsItem/BreadcrumbsItem";

export default (
  <Breadcrumbs uxpId="bread0" maxItems={2}>
    <BreadcrumbsItem uxpId="breaditem0" href="#" text="Page 1" key="Page 1" />
    <BreadcrumbsItem uxpId="breaditem1" href="#" text="Page 2" key="Page 2" />
    <BreadcrumbsItem uxpId="breaditem2" href="#" text="Page 3" key="Page 3" />
    <BreadcrumbsItem uxpId="breaditem3" href="#" text="Page 4" key="Page 4" />
  </Breadcrumbs>
);
