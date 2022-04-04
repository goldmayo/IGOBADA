export declare type CardInfo = {
  id: string;
  name: string;
  companny: string;
  theme: string;
  title: string;
  email: string;
  message: string;
  fileName: string;
  fileURL: string | null;
};

export declare type Deck = {
  //https://radlohead.gitbook.io/typescript-deep-dive/type-system/index-signatures
  [index: string]: CardInfo;
};
