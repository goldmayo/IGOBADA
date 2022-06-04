export const loginInfo = [
  {
    id: "loginInfo_1",
    name: "email",
    type: "email",
    placeholder: "이메일",
    errormessage: "유효한 이메일 주소가 아닙니다.",
    label: "이메일",
    required: true,
    pattern: "^[0-9a-zA-Z]([-_\\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\\.]?[0-9a-zA-Z])*\\.[a-zA-Z]{2,3}$",
  },
  {
    id: "loginInfo_2",
    name: "password",
    type: "password",
    placeholder: "비밀번호",
    errormessage: "8~16자의 영문 대소문자, 숫자, 특수문자만 가능합니다.",
    label: "비밀번호",
    required: true,
    minlength: 8,
    maxlength: 16,
    pattern: "^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[~!@#$%^&*_+]).{8,16}$",
  },
];

export declare interface LoginFormInterface {
  [index: string]: string;
  email: string;
  password: string;
}
