interface File extends Blob {
  lastModified: number;
  name: string;
  size: number;
  type: string;
}

class AssetUploader {
  upload = async (file: File) => {
    const url = `${process.env.REACT_APP_CLOUDNARY_BASE_URL}`;
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "k5usewfx");
    const result = await fetch(url, {
      method: "POST",
      body: formData,
    });

    return result.json();
  };
}
export default AssetUploader;
