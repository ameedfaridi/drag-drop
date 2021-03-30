import React from "react";
import MyDropzone from "./component/myDropZone";
import "./app.css";
import ViewFiles from "./component/viewFiles";

function App() {
  const [step, setStep] = React.useState(0);
  const [files, setFiles] = React.useState([]);
  const handleUpload = (files) => {
    setFiles(files);
    setStep(1);
  };

  const hanldeMore  =  ()  =>  {
    setStep(0);
    setFiles([]);
  };
  
  return (
    <div>
      <Stepper step={step}>
        <MyDropzone handleUpload={handleUpload} />
        <ViewFiles files={files} hanldeMore={hanldeMore}/>
      </Stepper>
    </div>
  );
}

export default App;

const Stepper = ({ children, step }) => {
  const reactChildren = React.Children.toArray(children);
  const currentChild = reactChildren[step];
  return <div>{currentChild}</div>;
};
