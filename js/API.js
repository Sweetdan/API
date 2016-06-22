$(document).ready(function(){ 
	$("#model1").click(function(){
       $("#pag2").load($(this).attr("fileSrc"));
	});
	$("#model2").click(function(){
		$("#pag2").load($(this).attr("fileSrc"));
	});
	$("#Se-model1").click(function(){
		$("#pag3").load($(this).attr("fileSrc"));
	// 	$("#Se-model3").click(function(){
	// 	$("#pag3").load($(this).attr("fileSrc"));//这么写不行
	// });
    
	});
	$("#Se-model2").click(function(){
		$("#pag3").load($(this).attr("fileSrc"));
	});

})

function a(evt){
	$("#pag3").load($(evt).attr("fileSrc"));//只能这么写
}
// $("body").delegate("#Se-model3","click",function(){
// 		$("#pag3").load($(this).attr("fileSrc"));
// 	});