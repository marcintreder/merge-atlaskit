import * as React from "react";
import Grid from "../Grid";
import GridColumn from "../../GridColumn/GridColumn";
import Banner from "../../Banner/Banner";

export default (
  <Grid uxpId="grid" spacing="comfortable">
    <GridColumn uxpId="gridColumn0" medium={8}>
      <Banner uxpId="gridContent0" isOpen={true} appearance="warning">
        8 Columns
      </Banner>
    </GridColumn>
    <GridColumn uxpId="gridColumn1" medium={4}>
      <Banner uxpId="gridContent1" isOpen={true} appearance="error">
        4 columns
      </Banner>
    </GridColumn>
  </Grid>
);
