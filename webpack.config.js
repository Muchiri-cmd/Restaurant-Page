const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    mode: 'development',
    entry:'./src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname,'dist'),
        clean:true,
    },
    module: {
        rules:[
            {
                test:/\.css$/i,
                use: ['style-loader','css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
                generator:{
                    filename: 'assets/[hash][ext][query]'
                }
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type:'asset/resource',
                generator:{
                    filename: 'assets/[hash][ext][query]'
                }
            },
        ],
    },
    devtool:'inline-source-map',
    devServer:{
        static: './dist',
    },
    plugins: [
        new HtmlWebpackPlugin({
            title:'Restaurant Page',
            template: './src/index.html',
            filename:'index.html',
            inject:'body',
        }),
    ],
    
}