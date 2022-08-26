//
// CMSUno
// Plugin Fontawesome
// Fawesome is a fork from CKawesome & smiley
//
CKEDITOR.plugins.add('fawesome',{
	requires:'dialog',
	lang:'en,es,fr',
	icons:'fawesome',
	hidpi:true,
	init:function(editor){
		editor.addCommand('fawesome',new CKEDITOR.dialogCommand('fawesome',{
			allowedContent: 'span[class,style]{color,font-size}(*);'
		}));
    	CKEDITOR.document.appendStyleSheet(fawesomeCss);
    	if(editor.addContentsCss)editor.addContentsCss(fawesomeCss);
		editor.ui.addButton && editor.ui.addButton('Fawesome',{
			label:'Font Awesome',
			command:'fawesome',
			toolbar:'insert,50'
		});
		CKEDITOR.dialog.add('fawesome',this.path+'dialogs/fawesome.js');
	}
});
