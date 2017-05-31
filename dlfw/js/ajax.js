function chsubmit2(){
	p1 = $.trim($("#p1").val());
	p2 = $.trim($("#p2").val());
	p3 = $.trim($("#p3").val());
	p4 = $.trim($("#p4").val());

	keyboard=p1+p2+p3+p4;

	
	if(keyboard==""){
		alert("请输入查询信息");
		return false;
	}


		jQuery("#subbody1").html('<img src="../dlfw/js/load.gif" /><br/>正在查询请稍等...');
		
		$.getJSON(

                    "http://www.400-315.com/fwqueryjson.ashx?callback=?",
                    { FwCode: keyboard },

                    function(data) {
						jQuery("#rs").html(data.QueryResult);
						
						jQuery("#subbody1").html('');
						
                        jQuery("#subbody").show();

                    });

		

	
	return false;


}


