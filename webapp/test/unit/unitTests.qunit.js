/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"com/demo/demoapp/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});