/*eslint linebreak-style: ["error", "windows"]*/
sap.ui.define([
	"jquery.sap.global",
	"sap/ui/core/mvc/Controller"
], function(jQuery, Controller) {
	"use strict";

	return Controller.extend("ca.controller.Home", {
		onInit : function(){
			this.oModel = new sap.ui.model.json.JSONModel();
			this.oModel.loadData(jQuery.sap.getModulePath("ca.util", "/countries.json"));
			this.getView().setModel(this.oModel);
			
		}
	
	});

});