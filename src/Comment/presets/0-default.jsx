import * as React from "react";
import Comment from "../Comment";

export default (
  <Comment
    uxpId="comment0"
    type="author"
    author="John Smith"
    edited="edited"
    restrictedTo="Admins Only"
    time="30 August, 2016"
    content="Content goes here."
    actions={["edit", "reply", "like"]}
  />
);
