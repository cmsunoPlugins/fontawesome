//
// CMSUno
// Plugin Fontawesome
// Fawesome is a fork from CKawesome & smiley
//
CKEDITOR.dialog.add('fawesome',function(editor){
	var config=editor.config,
		lang=editor.lang.fawesome;
	var dialog;
	var fawesomeOnClick=CKEDITOR.tools.addFunction(function(t){
		if(t.tagName=='A')t=t.firstElementChild;
		var cla=t.getAttribute('class'),fa=editor.document.createElement('span');
		fa.setAttribute('class',cla);
		fa.setHtml('&nbsp;');
		editor.insertElement(fa);
		dialog.hide();
	});
	var html=[];
	var fawesomeSelector={
		type:'html',
		id:'fawesomeSelector',
		html:'<div id="main-container"></div>',
		onLoad:function(event){
			dialog=event.sender;
			getfawesomeIcons();
		},
		style:'width:100%;border-collapse:separate;'
	};
	return{
		title:editor.lang.fawesome.title,
		width:460,
		minHeight:300,
		contents:[{
			id:'tab1',
			label:'',
			title:'',
			padding:0,
			elements:[fawesomeSelector]
		}],
		buttons:[CKEDITOR.dialog.cancelButton]
	};
	function getfawesomeIcons(){
		var out='';
		var scriptUrl=fawesomeCss;
		var x=new XMLHttpRequest();
		x.open('GET',scriptUrl,true);
		x.overrideMimeType('text/plain');
		x.onreadystatechange=function(){
			if(x.readyState==4&&x.status==200){
				var labelId=CKEDITOR.tools.getNextId()+'_fawesome_label';
				var excludeStyles=[".fa.",".fa",".fa-lg",".fa-2x",".fa-3x",".fa-4x",".fa-5x",".fa-fw",".fa-ul",".fa-ul>",".fa-li",".fa-border",".fa-pull-left",".fa-pull-right",".fa-spin",".fa-pulse",".fa-rotate-90",".fa-rotate-180",".fa-rotate-270",".fa-flip-horizontal",".fa-flip-vertical",".fa-stack",".fa-stack-1x",".fa-stack-2x",".fa-inverse"];
				var regxstyles=new RegExp(/\.[a-zA-Z_][\w-_]*[^\.\s\{#:\,;]/,"g");
				var styles=x.responseText.match(regxstyles),i=0,columns=24;
				styles.sort();
				out+='<div><span id="'+labelId+'" class="cke_voice_label">'+lang.options+'</span>'+
					'<table role="listbox" aria-labelledby="'+labelId+'" style="width:100%;height:100%;border-collapse:separate;" cellspacing="2" cellpadding="2"><tbody>';
				$.each(styles,function(index,value){
					var xstart=value.substring(0,3).substring(1);
					if(xstart!='fa'||excludeStyles.indexOf(value)>0)return;
					value=value.substring(1);
					if(i%columns===0)out+='<tr role="presentation">';
					out+='<td class="cke_dark_background cke_centered" style="vertical-align: middle;">' +
						'<a href="javascript:void(0)" onClick="CKEDITOR.tools.callFunction('+fawesomeOnClick+',this);" data-class="'+value+'" class="cke_smile cke_hand">' +
						'<span class="fa '+value+'">&nbsp;</span>'+
						'</a></td>';
					if(i%columns==columns-1)out+='</tr>';
					++i;
				});
				if(i<columns-1){
					for(;i<columns-1;i++)out+='<td></td>';
					out+='</tr>';
				}
				out+='</tbody></table></div>';
				var a=document.getElementById('main-container')
				a.innerHTML=out;
				a.style.height='300px';
				a.style.overflowY="scroll";
			}
		}
		x.send(null);
	}
});
