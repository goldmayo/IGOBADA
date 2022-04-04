import React, { memo } from "react";
import ReactDOM from "react-dom";
import "./index.module.css";
import App from "./app";
import Factory from "./service/factory/factory";
// import ImageFileInput from "./components/image_file_input/ImageFileInput";
const authService = Factory.createProviders();
const assetUploader = Factory.createAssetUploader();
const cardRepository = Factory.createCardRepository();
/**
 * DI component : container 파일을 생성하고 index에서 주입하면 가?능 할지도?
 *
 * interface FileInputProps정의하고
 *
 export const FileInput = (props) => {
   return <ImageFileInput {...props} imageUploader={assetUploader} />;
 };
 *
 * App component에 FileInpur으로 주입하고 합성에 쓰면
 */

ReactDOM.render(
  <React.StrictMode>
    <App authService={authService} assetUploader={assetUploader} cardRepository={cardRepository} />
  </React.StrictMode>,
  document.getElementById("root")
);
