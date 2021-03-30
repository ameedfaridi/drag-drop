import { Typography } from "@material-ui/core";
import React from "react";
import { List } from "../myDropZone";
import "../myDropZone/styles.css";

const ViewFiles = ({ files, hanldeMore }) => {
  return (
    <div>
      <div className="dropBox">
        <center>Uploaded Documents</center>
        <List files={files} status={true} />
      </div>
      <div className="btn">
        <button onClick={hanldeMore}>more upload</button>
      </div>
    </div>
  );
};

export default ViewFiles;
