module.exports = {
	entry:[
		'./app/index.js'
	],
	module:{
		loaders:[
			{test:/\*.js/,loader:'babel'}

		]
	},
	output:{
		filename: "index_bundle.js",
		path: __dirname + '/dist'

	}
}