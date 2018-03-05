$(document).ready(function(){
	var url="https://jsonplaceholder.typicode.com/posts";

	var jqXHR = $.ajax({
		type:"GET",
		url:url,
		processDataBoolean:false,
		error:function(jqXHR, textStatus, errorThrown){
			alert(errorThrown+","+textStatus+","+jqXHR);			
		},                
		success:function(data) {
			console.log(data);
			var loadData='';
			$.each(data, function( index, value ) {
				loadData += '<tr><td>'+value.userId+'</td><td>'+value.id+'</td><td>'+value.title+'</td><td>'+value.body+'</td></tr>';
			});
			$('tbody').html(loadData);
		}
	});    
});
