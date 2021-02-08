// path : nodeJS의 디폴트 기능. 파일 경로!
const path = require("path");

// const babelLoader = require("babel-loader");
const autoprefixer = require("autoprefixer");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const MODE = process.env.WEBPACK_ENV;
/* entry와 output는 필수 요소다.
우선 웹팩이 실행되기 위해 들어갈 경로를 지정,
그리고 그 아웃풋 파일들을 넣을 경로를 지정. */
const ENTRY_FILE = path.resolve(__dirname, "assets", "js", "main.js");
const OUTPUT_DIR = path.join(__dirname, "static");

// config
const config = {
  entry: ["@babel/polyfill", ENTRY_FILE],
  resolve: {
    extensions: [".webpack.js", ".js"],
  },
  devtool: "cheap-module-source-map",
  mode: MODE,
  // 웹팩이 모듈을 만났을 때, 몇가지 규칙을 따르도록 할 거야.
  module: {
    rules: [
      // for js
      {
        test: /\.(js)$/,
        // loader : 웹팩한테 파일들을 어떻게 변환할지 알려줌 !
        use: {
          loader: "babel-loader",
        },
      },

      // for scss and postcss
      {
        test: /\.(scss)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: "css-loader",
          },
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  [
                    autoprefixer,
                    {
                      browserslist: [
                        "> 1%",
                        "ie >= 8",
                        "edge >= 15",
                        "ie_mob >= 10",
                        "ff >= 45",
                        "chrome >= 45",
                        "safari >= 7",
                        "opera >= 23",
                        "ios >= 7",
                        "android >= 4",
                        "bb >= 10",
                      ],
                    },
                  ],
                ],
              },
            },
          },
          {
            loader: "sass-loader",
          },
        ],
      },
    ],
  },
  output: {
    path: OUTPUT_DIR,
    filename: "[name].js",
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "styles.css",
    }),
  ],
};

module.exports = config;
