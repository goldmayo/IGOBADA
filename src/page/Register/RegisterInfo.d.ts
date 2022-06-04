export const registerInfo = [
  {
    id: "registInfo_1",
    name: "id",
    type: "text",
    placeholder: "아이디",
    errormessage: "2 ~ 7자 사이의 아이디을 입력해주세요.",
    label: "아이디",
    required: true,
    minlength: 2,
    maxlength: 7,
    pattern: "^[ㄱ-힣]{2,7}",
  },
  {
    id: "registInfo_2",
    name: "email",
    type: "email",
    placeholder: "이메일",
    errormessage: "유효한 이메일 주소가 아닙니다.",
    label: "이메일",
    required: true,
    pattern: "^[0-9a-zA-Z]([-_\\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\\.]?[0-9a-zA-Z])*\\.[a-zA-Z]{2,3}$",
  },
  {
    id: "registInfo_3",
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
  {
    id: "registInfo_4",
    name: "passwordConfirm",
    type: "password",
    placeholder: "비밀번호 확인",
    errormessage: "비밀번호가 일치하지 않습니다.",
    label: "비밀번호 확인",
    required: true,
    minlength: 8,
    maxlength: 16,
    pattern: "",
  },
];

export declare interface RegisterFormInterface {
  [index: string]: string;
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
}
