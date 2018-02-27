const path = require("path");

module.exports = (env) => {
    const isProduction = env === "production";

    return {
        entry: "./src/app.js",
        output: {
            path: path.join(__dirname, "public"),
            filename: "bundle.js"
        },
        node: {
            fs: "empty"
        },
        module: {
            rules: [
                {
                    test: /\.s?css$/,
                    use: [
                        "style-loader",
                        "css-loader",
                        "sass-loader"
                    ]
                },
                {
                    loader: "babel-loader",
                    test: /\.js$/,
                    exclude: /node_modules/
                },
                {
                    test: /\.(jpe?g|png|gif|svg|ico)$/i,
                    loaders: [
                        'file-loader?hash=sha512&digest=hex&name=[hash].[ext]', {
                            loader: "image-webpack-loader",
                            query: {
                                mozjpeg: {
                                  progressive: true,
                                },
                                gifsicle: {
                                  interlaced: false,
                                },
                                optipng: {
                                  optimizationLevel: 4,
                                },
                                pngquant: {
                                  quality: '75-90',
                                  speed: 3,
                                }
                            }
                        }
                    ]
                }
            ]
        },
        devServer: {
            contentBase: path.join(__dirname, "public"),
            historyApiFallback: true,
            inline: true,
            port: 3000
        }
    };
}
