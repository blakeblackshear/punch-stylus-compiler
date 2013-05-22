mockObject = function(){
	return {
		set: function (name, value){
			mockStylus.setCalls.push({
				name: name,
				value: value
			});
			return this;
		},
		use: function(func){
			mockStylus.useCalls.push({
				func: func
			});
			return this;
		},
		include: function(path){
			mockStylus.includeCalls.push({
				path: path
			});
			return this;
		},
		render: function(callback){
			callback(null, "rendered file");
		}
	};
};

mockStylus = {
 	setCalls: [],
 	useCalls: [],
 	includeCalls: [],
 	mock: mockObject
};

module.exports = mockStylus