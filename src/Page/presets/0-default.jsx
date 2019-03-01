import * as React from "react";
import Page from "../Page";
import Grid from "../../Grid/Grid";
import GridColumn from "../../GridColumn/GridColumn";
import Banner from "../../Banner/Banner";

export default (
  <Page uxpId="page0">
    <Grid spacing="comfortable" uxpId="grid0">
      <GridColumn medium={8} uxpId="gridcolumn0">
        <Banner isOpen={true} appearance="warning" uxpId="gridcontent0">
          8 Columns
        </Banner>
      </GridColumn>
      <GridColumn medium={4} uxpId="gridcolumn1">
        <Banner isOpen={true} appearance="error" uxpId="gridcontent1">
          4 columns
        </Banner>
      </GridColumn>
    </Grid>
  </Page>
);
