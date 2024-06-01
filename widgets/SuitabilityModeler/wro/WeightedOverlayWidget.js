// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/SuitabilityModeler/wro/templates/WeightedOverlayWidget.html":'\x3cdiv\x3e\r\n  \x3cdiv data-dojo-attach-point\x3d"tabsNode"\x3e\x3c/div\x3e\r\n  \x3cdiv class\x3d"weighted-overlay-pane weighted-overlay-select-layers"\r\n    data-dojo-attach-point\x3d"selectLayersViewNode"\x3e\r\n    \x3cdiv class\x3d"header" data-dojo-attach-point\x3d"selectLayersViewHeader"\x3e\r\n      \x3cspan role\x3d"button" class\x3d"slider-toggle pull-right"\r\n        data-dojo-attach-point\x3d"transparentSliderToggle"\r\n        data-dojo-attach-event\x3d"onclick: showHideTransparencySlider"\r\n        \x3e${i18n.wro.transparency}\x26nbsp;\x3cspan class\x3d"esri-icon-down"\x3e\x3c/span\x3e\r\n      \x3c/span\x3e\r\n      \x3ch4\x3e\x3cspan class\x3d"bullet-number"\x3e1\x3c/span\x3e${i18n.wro.selectLayersCaption}\x3c/h4\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"selectLayersView" class\x3d"body"\x3e\x3c/div\x3e\r\n    \x3cdiv class\x3d"footer"\x3e\r\n      \x3cbutton type\x3d"button" class\x3d"jimu-btn btn-execute jimu-state-disabled"\r\n        data-dojo-attach-point\x3d"designModelButton"\r\n        data-dojo-attach-event\x3d"onclick:_onShowModelClicked"\r\n        \x3e${i18n.wro.designModel}\x26nbsp;\x3cspan class\x3d"esri-icon-right-arrow"\x3e\x3c/span\x3e\r\n      \x3c/button\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n\r\n  \x3cdiv class\x3d"weighted-overlay-pane weighted-overlay-design-model" style\x3d"left: 100%"\r\n    data-dojo-attach-point\x3d"designModelViewNode"\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"designModelView"\x3e\x3c/div\x3e\r\n    \x3cdiv class\x3d"footer"\x3e\r\n      \x3cbutton type\x3d"button" class\x3d"jimu-btn jimu-btn-vacation btn-back pull-left"\r\n        data-dojo-attach-event\x3d"onclick:_onShowLayersClicked" \x3e\r\n        \x3cspan class\x3d"esri-icon-left"\x3e\x3c/span\x3e\r\n        \x3cspan class\x3d"jimu-btn-text"\x3e${i18n.wro.selectLayers}\x3c/span\x3e\r\n      \x3c/button\x3e\r\n      \x3cdiv class\x3d"btn-group-spacer"\x3e\x3c/div\x3e\r\n      \x3cdiv class\x3d"btn-group pull-right"\x3e\r\n        \x3cbutton type\x3d"button" class\x3d"jimu-btn jimu-state-disabled"\r\n          data-dojo-attach-point\x3d"runModelButton"\r\n          data-dojo-attach-event\x3d"onclick:_onRunClick"\x3e${i18n.general.save}\x3c/button\x3e\r\n        \x3cbutton type\x3d"button" class\x3d"jimu-btn jimu-state-disabled"\r\n          data-dojo-attach-point\x3d"saveAsButton"\r\n          data-dojo-attach-event\x3d"onclick:_onSaveAsClick"\x3e${i18n.general.saveAs}\x3c/button\x3e\r\n        \x3cbutton type\x3d"button" class\x3d"jimu-btn"\r\n          data-dojo-attach-point\x3d"clearModelButton"\r\n          data-dojo-attach-event\x3d"onclick:_onClearClick"\x3e${i18n.general.clear}\x3c/button\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n\r\n  \x3cdiv class\x3d"weighted-overlay-pane weighted-overlay-chart-container"\r\n    data-dojo-attach-point\x3d"chartViewNode"\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"chartNode"\x3e\x3c/div\x3e\r\n  \x3c/div\x3e\r\n\r\n  \x3cdiv class\x3d"weighted-overlay-pane weighted-overlay-save-panel"\r\n    style\x3d"display:none;" data-dojo-attach-point\x3d"savePanelNode"\x3e\r\n  \x3c/div\x3e\r\n\r\n\x3c/div\x3e\r\n'}});
define("dojo/text!./templates/WeightedOverlayWidget.html dojo/_base/declare dojo/_base/array dojo/dom-class dojo/dom-attr dojo/Deferred dojo/aspect dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin ./config ./WeightedOverlayService ./WeightedOverlayLayersSelector ./WeightedOverlayModelDesigner".split(" "),function(m,n,h,c,g,p,q,r,t,u,v,w,x,y){var e=function(a,b){a&&(b?(a.setAttribute("disabled","disabled"),c.add(a,"jimu-state-disabled")):(a.removeAttribute("disabled"),c.remove(a,
"jimu-state-disabled")))};return n([r,t,u],{chart:null,context:null,i18n:null,templateString:m,baseClass:"weighted-overlay-widget",widgetsInTemplate:!0,isRTL:!1,_tabsContainer:null,_layersTab:null,_modelTab:null,_chartTab:null,postCreate:function(){this.inherited(arguments);var a=this,b=v.getOptions(this.i18n);this.isRTL="ltr"===document.dir?!1:!0;this.weightedOverlayService=new w(null,b);this.weightedOverlayService.context=this.context;this.weightedOverlayService.i18n=this.i18n;this.selectLayersView=
new x({context:this.context,i18n:this.i18n,parent:this},this.selectLayersView);this.designModelView=new y({context:this.context,i18n:this.i18n,parent:this},this.designModelView);this.own(this.selectLayersView.on("selection-changed",function(){a._updateDesignModelButton(a.weightedOverlayModel)}),this.designModelView.on("model-validated",function(d){d?(e(a.runModelButton,!1),e(a.saveAsButton,!1)):(e(a.runModelButton,!0),e(a.saveAsButton,!0))}));this.context.allowSaveAs||(this.saveAsButton.style.display=
"none");this.setupConnections()},initializeTabs:function(a){var b=this,d=this._layersTab={title:this.i18n.tabs.layers,content:this.selectLayersViewNode},f=this._modelTab={title:this.i18n.tabs.model,content:this.designModelViewNode},k=this._chartTab={title:this.i18n.tabs.chart,content:this.chartViewNode};this._tabsContainer=new a({tabs:[d,f,k]},this.tabsNode);this._tabsContainer.startup();this.own(q.after(this._tabsContainer,"selectTab",function(l){l===d.title?(b._activeTab="layers",b.showSelectOverlayLayersView()):
l===f.title?(b._activeTab="model",b.showDesignModelView()):l===k.title&&(b._activeTab="chart",b.showChartView())},!0))},onClose:function(){this.selectLayersView&&this.selectLayersView.hidePreviewLayer();this.chart&&this.chart.deactivate()},onOpen:function(){this.chart&&"chart"===this._activeTab&&this.chart.activate()},_setImageServiceLayerAttr:function(a){var b=this;this.imageServiceLayer=a;this.weightedOverlayService.imageServiceLayer=this.imageServiceLayer;this._initModel();this.imageServiceLayer&&
this.imageServiceLayer.url&&this.weightedOverlayService.initRasterLayers().then(function(){b._rasterLayersInitialized()})},_rasterLayersInitialized:function(){h.forEach(this.weightedOverlayModel.overlayLayers,function(a){var b=this.weightedOverlayService.getRasterLayer(a.id);this.weightedOverlayService.setOverlayLayerDefaults(a,b)},this);this.selectLayersView.set("model",this.weightedOverlayModel);this.selectLayersView.set("weightedOverlayService",this.weightedOverlayService);this.selectLayersView.startup();
this.designModelView.set("weightedOverlayService",this.weightedOverlayService);this.designModelView.set("model",this.weightedOverlayModel);this.designModelView.startup();this.weightedOverlayModel.overlayLayers&&0<this.weightedOverlayModel.overlayLayers.length?this._onShowModelClicked():this._onShowLayersClicked()},_initModel:function(){this.weightedOverlayModel=this.imageServiceLayer&&this.imageServiceLayer.renderingRule?this.weightedOverlayService.imageServiceLayerToModel({renderingRule:this.imageServiceLayer.renderingRule.toJson()}):
this.weightedOverlayService.createNewModel()},setupConnections:function(){var a=this;this.own(this.designModelView.on("model-clear",function(b){a.set("weightedOverlayModel",b);a.selectLayersView.set("model",b)}));this.own(this.designModelView.on("model-validated",function(b){b?(g.remove(a.runModelButton,"disabled"),g.remove(a.saveAsButton,"disabled")):(g.set(a.runModelButton,"disabled","disabled"),g.set(a.saveAsButton,"disabled","disabled"))}))},showHideTransparencySlider:function(){if(this.selectLayersView&&
this.selectLayersView.previewSlider){var a=this.transparentSliderToggle.getElementsByTagName("SPAN")[0];a&&(this.isTransparencySliderShow?(c.remove(this.selectLayersViewNode,"transparency-slider-show"),c.replace(a,"esri-icon-down","esri-icon-up")):(c.add(this.selectLayersViewNode,"transparency-slider-show"),c.replace(a,"esri-icon-up","esri-icon-down")),this.isTransparencySliderShow=!this.isTransparencySliderShow)}},showSelectOverlayLayersView:function(a){a&&a.preventDefault();this.chart&&this.chart.deactivate();
a=this.isRTL?"right":"left";this.selectLayersView.set("model",this.weightedOverlayModel);this.designModelViewNode.style[a]="100%";this.selectLayersViewNode.style[a]="0%";this._updateDesignModelButton(this.weightedOverlayModel)},showDesignModelView:function(){var a=this.isRTL?"right":"left";this.selectLayersView.hidePreviewLayer();this.chart&&this.chart.deactivate();this.designModelView.set("model",this.weightedOverlayModel);this.designModelViewNode.style[a]="0%";this.selectLayersViewNode.style[a]=
"-100%"},showChartView:function(){this.selectLayersView.hidePreviewLayer();this.chart&&this.chart.activate()},showSavePanel:function(){var a=this.savePanelNode;a.style.display="block";c.add(a,"show-panel-animated");setTimeout(function(){c.remove(a,"show-panel-animated")},400)},hideSavePanel:function(){var a=this.savePanelNode,b=new p;setTimeout(function(){a.style.display="none";c.remove(a,"hide-panel-animated");b.resolve(!0)},400);c.add(a,"hide-panel-animated");return b},_onClearClick:function(a){this.clear();
this._onShowLayersClicked(a)},_onRunClick:function(){this.imageServiceLayer&&this.imageServiceLayer.xtnModeler&&(this.imageServiceLayer.xtnModeler.forSaveAs=!1);this.designModelView&&this.designModelView.runModel()},_onSaveAsClick:function(){this.imageServiceLayer&&this.imageServiceLayer.xtnModeler&&(this.imageServiceLayer.xtnModeler.forSaveAs=!0);this.designModelView&&this.designModelView.runModel({saveAs:!0})},_onShowLayersClicked:function(){this._tabsContainer&&this._layersTab?this._tabsContainer.selectTab(this._layersTab.title):
this.showSelectOverlayLayersView()},_onShowModelClicked:function(){this._tabsContainer&&this._modelTab?this._tabsContainer.selectTab(this._modelTab.title):this.showDesignModelView()},clear:function(){this.designModelView&&this.designModelView.weightedOverlayService&&(this._resetRemapRangeValues(),this.designModelView.clearModel())},_resetRemapRangeValues:function(){this.weightedOverlayService&&h.forEach(this.weightedOverlayService.rasterLayers,function(a){h.forEach(a.remapRanges,function(b){try{var d=
b.originalOutputValue;var f=typeof d;"undefined"!==f&&null!==d&&"number"===f&&!isNaN(d)&&isFinite(d)&&(b.outputValue=d)}catch(k){}})},this)},_updateDesignModelButton:function(a){a&&a.overlayLayers&&a.overlayLayers.length?e(this.designModelButton,!1):e(this.designModelButton,!0)}})});