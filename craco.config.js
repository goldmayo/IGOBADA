const purgecss = require("@fullhuman/postcss-purgecss");

module.exports = {
  style: {
    postcss: {
      plugins: [
        purgecss({
          content: ["./src/**/*.html", "./src/**/*.tsx", "./src/**/*.ts"], // 상황에 맞게 바꾸세요
          variables: true,
        }),
      ],
    },
  },
};
