const path = require("path");
const defaultConfig = require( '@wordpress/scripts/config/webpack.config' );


module.exports = {
    ...defaultConfig,
    entry: {
        index: path.resolve( process.cwd(), 'src', 'index.js' ),
        addons: path.resolve( process.cwd(), 'src', 'addons.js' ),
        editor: path.resolve( process.cwd(), 'src', 'main.scss' ),
    },
    module: {
        ...defaultConfig.module,
        rules: [
            ...defaultConfig.module.rules,
            {
                test: /\.(png|jpeg|jpg|webp|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    name: 'images/[name].[ext]'
                }
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                loader: "babel-loader",
                options: { presets: ["@babel/env"] }
            },
        ]
    },
    resolve: {
        extensions: ["*", ".js", ".jsx"],
    },
};