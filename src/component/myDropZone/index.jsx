import { Typography } from "@material-ui/core";
import { Cancel, CheckCircle } from "@material-ui/icons";
import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import "./styles.css";

export default function MyDropzone(props) {
  const [files, setFiles] = React.useState([]);

  const onDrop = useCallback((acceptedFiles, reject) => {
    const mappedAcc = acceptedFiles.map((file) => ({ file, errors: [] }));
    setFiles((currentFiles) => [...currentFiles, ...mappedAcc, ...reject]);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: ".cvs",
  });
  const fileExist = files.length > 0;

  return (
    <div className="main">
      <div {...getRootProps()} className="dropBox">
        <input {...getInputProps()} />
        <p style={{ placeSelf: "center" }}>Drag 'n' drop </p>
        <List files={files} />
      </div>
      <div className="btn">
        <button
          type="submit"
          disabled={!fileExist}
          onClick={() => props.handleUpload(files)}
        >
          upload
        </button>
      </div>
    </div>
  );
}

export const List = ({ files, status = false }) => {
  return (
    <ul className="list">
      {files.map((file, index) =>
        file.errors.length ? (
          <Typography key={index} className="listItem">
            {file.file.name}
            {status && <Cancel color="error" />}
            {!status && (
              <span
                style={{
                  textDecoration: "underline",
                  color: "red",
                  display: "flex",
                  alignItems: "center",
                  marginLeft: "0.2rem",
                }}
              >
                {file.errors[0].message}
              </span>
            )}
          </Typography>
        ) : (
          <Typography color="primary" key={index} className="listItem">
            {file.file.name}
            {status && <CheckCircle style={{ color: "green" }} />}
          </Typography>
        )
      )}
    </ul>
  );
};
