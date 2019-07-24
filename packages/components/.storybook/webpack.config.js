module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.tsx?$/,
    exclude: /node_modules/,
    use: [
      {
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-typescript", "@babel/preset-react"]
        }
      }
    ]
  });

  // .ts, .tsx を含めるように追加
  config.resolve.extensions.push(".ts", ".tsx");

  return config;
};
