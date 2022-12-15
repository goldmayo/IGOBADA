interface File extends Blob {
  lastModified: number;
  name: string;
  size: number;
  type: string;
}

class AssetUploader {
  private static AssetUploaderInstance: AssetUploader;

  static getAssetUploaderInstance(): AssetUploader {
    if (!AssetUploader.AssetUploaderInstance) {
      AssetUploader.AssetUploaderInstance = new AssetUploader();
    }
    return AssetUploader.AssetUploaderInstance;
  }

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
