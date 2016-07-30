module.exports = {
	entry:[
		'./app/index.js'
	],
	module:{
		loaders:[
			{test: /\.js$/, exclude:/node_modules/ ,loader: "babel-loader"}

		]
	},
	output:{
		filename: "index_bundle.js",
		path: __dirname + '/dist'
	},
	devServer:{
		contentBase:'./dist',
		publicPath:'/assets/'
	}
}  