//
// CMSUno
// Plugin Fontawesome
//
UconfigNum++;

CKEDITOR.plugins.addExternal('fawesome',UconfigFile[UconfigNum-1]+'/../fawesome/');
var fawesomeCss='//cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css';
CKEDITOR.editorConfig=function(config){
	config.extraPlugins+=',fawesome';
	config.toolbarGroups.push('fawesome');
	config.fawesomePath=fawesomeCss;
	if(UconfigFile.length>UconfigNum)config.customConfig=UconfigFile[UconfigNum];
};
