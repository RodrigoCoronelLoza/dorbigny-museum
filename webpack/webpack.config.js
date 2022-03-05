const {
  mergeWithCustomize,
  customizeArray,
  customizeObject,
} = require("webpack-merge");
const commonConfig = require("./webpack.common.js");

module.exports = (envVars) => {
  const { env } = envVars;
  const envConfig = require(`./webpack.${env}.js`);
  const config = mergeWithCustomize({
    customizeArray: customizeArray({
      "*": "append",
    }),
    customizeObject: customizeObject({
      entry: "append",
    }),
  })(commonConfig, envConfig);
  return config;
};
