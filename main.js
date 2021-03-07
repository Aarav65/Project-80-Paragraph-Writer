function get_para1()
	{
		var inputs = [];
		for(var i = 1 ; i <=6 ; i++)
		{
			inputs.push(document.getElementById("para1_input_box" + i).value);
		}
	document.getElementById("show_para_1").innerHTML = inputs.join(". ");
	}

	function get_para2()
	{
		var inputs = [];
		for(var i = 1 ; i <=6 ; i++)
		{
			inputs.push(document.getElementById("para2_input_box" + i).value);
		}
	document.getElementById("show_para_2").innerHTML = inputs.join(". ");
	}
