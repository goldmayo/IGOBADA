interface File extends Blob {
  lastModified: number;
  name: string;
  size: number;
  type: string;
}

class AssetUploader {
  upload = async (file: File) => {
    const url = "https://api.cloudinary.com/v1_1/demo/image/upload";
    const formData = new FormData();

    formData.append("file", file);
    formData.append("upload_preset", "docs_upload_example_us_preset");

    const result = await fetch(url, {
      method: "POST",
      body: formData,
    });
    return result.json();
  };
}
export default AssetUploader;
