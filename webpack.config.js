const defaultConfig = require("@wordpress/scripts/config/webpack.config");
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// console.log("using the extended webpack! Using the end to begin order");

let cssRules = {
    test: /\.css$/,
    use: [
        'style-loader',
        'css-loader',
    ],
};
defaultConfig.module.rules[3] = cssRules;

let testObj = {
    // ...defaultConfig.output,
    // ...defaultConfig.entry,
    ...defaultConfig.module.rules
}
console.log("new stuff...")
console.log(testObj);
module.exports = {
    ...defaultConfig,
    // plugins: [new MiniCssExtractPlugin()],
    // plugins: [
    //     new MiniCssExtractPlugin(),
    //     ...defaultConfig.plugins
    // ],
    module: {
        ...defaultConfig.module,
        rules: [
            ...defaultConfig.module.rules,
            // {
            //     test: /\.css$/,
            //     use: [
            //         // MiniCssExtractPlugin.loader,
            //         "style-loader",
            //         "css-loader",
            //     ],
            // },
        ],
    },
}
