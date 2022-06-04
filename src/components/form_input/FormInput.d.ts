export declare interface FormInputInterface {
  name: string;
  type: string;
  placeholder: string;
  errormessage: string;
  label: string;
  pattern: string;
  required: boolean;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  minlength?: number;
  maxlength?: number;
}
