$(document).ready(function() {

	$("#dropdown").val($("#dropdown option:first").val());

	$("#picker1").spectrum({ color: "#ffffff", preferredFormat: "hex", showInput: true, howButtons: false, clickoutFiresChange: true });
	$("#picker2").spectrum({ color: "#ffffff", preferredFormat: "hex", showInput: true, howButtons: false, clickoutFiresChange: true  });
	$("#picker3").spectrum({ color: "#ffffff", preferredFormat: "hex", showInput: true, howButtons: false, clickoutFiresChange: true  });
	$("#picker4").spectrum({ color: "#ffffff", preferredFormat: "hex", showInput: true, howButtons: false, clickoutFiresChange: true  });
	$("#picker5").spectrum({ color: "#ffffff", preferredFormat: "hex", showInput: true, howButtons: false, clickoutFiresChange: true  });

	function getQueryVariable(variable) {
       var query = window.location.search.substring(1);
       var vars = query.split("&");
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");
               if(pair[0] == variable){return pair[1];}
       }
       return(false);
	}

	var time = getQueryVariable("t");
	var color1 = getQueryVariable("c1");
	var color2 = getQueryVariable("c2");
	var color3 = getQueryVariable("c3");
	var color4 = getQueryVariable("c4");
	var color5 = getQueryVariable("c5");

	if (time !== false) {
		$('body').css({'animation-duration':  time, '-webkit-animation-duration':  time});
	}

	if (color5 !== false) {
		$.keyframe.define([{
			name: 'background',
			'0%, 100%': {'background-color': "#" + color1},
			'20%': {'background-color': "#" + color2},
			'40%': {'background-color': "#" + color3},
			'60%': {'background-color': "#" + color4},
			'80%': {'background-color': "#" + color5}
		}]);
	} else if (color4 !== false) {
		$.keyframe.define([{
			name: 'background',
			'0%, 100%': {'background-color': "#" + color1},
			'25%': {'background-color': "#" + color2},
			'50%': {'background-color': "#" + color3},
			'75%': {'background-color': "#" + color4}
		}]);
	} else if (color3 !== false) {
		$.keyframe.define([{
			name: 'background',
			'0%, 100%': {'background-color': "#" + color1},
			'33%': {'background-color': "#" + color2},
			'66%': {'background-color': "#" + color3}
		}]);
	} else if (color2 !== false) {
		$.keyframe.define([{
			name: 'background',
			'0%, 100%': {'background-color': "#" + color1},
			'50%': {'background-color': "#" + color2}
		}]);
	} else {
		$('#tools').show();
		$('#reset').hide();
		$.keyframe.define([{
			name: 'background',
			'0%, 100%': {'background-color': '#FFFFFF'}
		}]);
	}

	$('form').submit(function() {
		$('input.picker', this).each(function() {
			$(this).val( $(this).val().replace('#', '') );
		});
		return true;
	});
       
	$('select#dropdown').on('change',function(){
		var colorz = $(this).val();
		if(colorz == "2"){
		$('#picker3, #picker4, #picker5').spectrum("disable")   
			}else if(colorz == "3"){
		$('#picker3').spectrum("enable")            
		$('#picker4, #picker5').spectrum("disable")   
			}else if(colorz == "4"){
		$('#picker3, #picker4').spectrum("enable")            
		$('#picker5').spectrum("disable")   
			}else {
		$('#picker3, #picker4, #picker5').spectrum("enable")   
			}  
	});

});