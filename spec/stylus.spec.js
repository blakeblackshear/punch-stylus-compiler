var stylus = require("stylus");
var stylus_compiler = require("../lib/stylus");
var mockStylus = require("../lib/mock-stylus");

describe("calling compile", function() {

	it("pass the filename to stylus compiler", function() {
		stylus_compiler.styl = mockStylus.mock;

		var spyCallback = jasmine.createSpy();
		stylus_compiler.compile("test", "sample/css/main.styl", spyCallback);

		expect(mockStylus.setCalls[0].name).toBe("filename");
		expect(mockStylus.setCalls[0].value).toBe("sample/css/main.styl");
	});

	it("include the path in the stylus compiler", function() {
		stylus_compiler.styl = mockStylus.mock;

		var spyCallback = jasmine.createSpy();
		stylus_compiler.compile("test", "sample/css/main.styl", spyCallback);

		expect(mockStylus.includeCalls[0].path).toBe("sample/css");
	});

	it("calls the callback with the result", function(){
		var spyCallback = jasmine.createSpy();
		stylus_compiler.compile("test", "sample.styl", spyCallback);

		expect(spyCallback).toHaveBeenCalledWith(null, "rendered file");
	});
});
