export declare interface TestAddFormInterface {
  onAdd: (newCard: CardInfo) => void;
  imageUploader: AssetUploader;
  phoneNumberFormatter: (value: string) => string;
}

export declare interface AddFormInterface {
  [index: string]: string;
  name: string;
  companny: string;
  title: string;
  email: string;
  phone: string;
}

export declare type ProfileImage = {
  fileName: string;
  fileURL: string;
};
