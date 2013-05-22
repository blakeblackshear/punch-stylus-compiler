var stylus = require("stylus");
var path = require("path");

module.exports = {
	input_extensions: [".styl"],
	config: {},
	styl: stylus,

	setup: function(config){
		if(config.stylus)
			this.config = config.stylus;
	},

	compile: function(input, filename, callback){
		var stylusCompiler = this.styl(input);

		if(this.config.includeRoots){
			stylusCompiler = stylusCompiler.use(roots());
		}
		
		stylusCompiler
		.set('filename', filename)
		.include(path.dirname(filename))
		.render(function (err, output) {
			return callback(err, output);
		});
	}

};
