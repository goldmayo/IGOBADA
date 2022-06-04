export const AddFormInputComponents = [
  {
    id: "input_1",
    name: "name",
    type: "text",
    placeholder: "이름",
    errormessage: "2 ~ 7자 사이의 이름을 입력해주세요.",
    label: "이름",
    required: true,
    minlength: 2,
    maxlength: 7,
    pattern: "^[ㄱ-힣]{2,7}",
  },
  {
    id: "input_2",
    name: "companny",
    type: "text",
    placeholder: "회사명",
    errormessage: "2 ~ 30자 사이의 회사명을 입력해주세요.",
    label: "회사명",
    required: true,
    minlength: 2,
    maxlength: 30,
    pattern: "^[a-zA-Zㄱ-힣()]{2,30}",
  },
  {
    id: "input_3",
    name: "title",
    type: "text",
    placeholder: "직함",
    errormessage: "2 ~ 8자 사이의 직함을 입력해주세요.",
    label: "직함",
    required: true,
    minlength: 2,
    maxlength: 6,
    pattern: "^[a-zA-Zㄱ-힣]{2,8}",
  },
  {
    id: "input_4",
    name: "email",
    type: "email",
    placeholder: "이메일",
    errormessage: "유효한 이메일 주소가 아닙니다.",
    label: "이메일",
    required: true,
    pattern: "^[0-9a-zA-Z]([-_\\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\\.]?[0-9a-zA-Z])*\\.[a-zA-Z]{2,3}$",
  },
  {
    id: "input_5",
    name: "phone",
    type: "text",
    placeholder: "연락처",
    errormessage: "유효한 전화번호가 아닙니다.",
    label: "연락처",
    required: true,
    pattern: "^01(?:0|1|[6-9]) - (?:\\d{3}|\\d{4}) - \\d{4}$",
  },
];

export const AddFormSelectOptions = [
  { id: "option_1", style: "light" },
  { id: "option_2", style: "dark" },
  { id: "option_3", style: "colorful" },
];

export const AddFormSelectComponents = [
  {
    id: "select_1",
    options: AddFormSelectOptions,
    labelText: "명함 스타일",
    name: "theme",
    placeholder: "Theme",
  },
];
