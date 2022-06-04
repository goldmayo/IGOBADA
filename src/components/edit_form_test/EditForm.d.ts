export declare interface TestEditFormInterface {
  card: CardInfo;
  imageUploader: AssetUploader;
  updateCard: (card: CardInfo) => void;
  deleteCard: (card: CardInfo) => void;
  phoneNumberFormatter: (value: string) => string;
}

export declare interface EditFormCard {
  [index: string]: string;
  id: string;
  name: string;
  companny: string;
  theme: string;
  title: string;
  email: string;
  message: string;
  phone: string;
  fileName: string;
  fileURL: string;
}

export declare type NewProfileImage = {
  fileName: string;
  fileURL: string;
};
