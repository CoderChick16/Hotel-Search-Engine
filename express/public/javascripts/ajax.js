function callAjax(){
	var searchQuery = $("#searchQuery").val();
	$.ajax({
		type: 'GET',
		url: "/search?query="+searchQuery,
		success: function(res){
			$("#resultContainer").append("<table style='color:#000; border: 1px solid #000'><th>_id</th><th>Amenities</th><tr><td>"+res+"</td><td>city</td></tr></table>");
		}
	});
}