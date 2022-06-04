export declare type FormSelectOptions = {
  id: string;
  style: string;
};

export declare interface FormSelectInterface {
  options: FormSelectOptions[];
  labelText: string;
  name: string;
  placeholder: string;
  onChange: (evnet: React.ChangeEvent<HTMLSelectElement>) => void;
}
