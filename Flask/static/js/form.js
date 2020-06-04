$(document).ready(function() {

	$('form').on('submit', function(event) {

		$.ajax({
			data : {
				name : $('#name-field').val()
			},
			type : 'POST',
			url : '/predict'
		})
		.done(function(response) {

			if(response.prediction == '0')
				{
					$("#greeting").text("❤️" + " Heart");
				}
				else if(response.prediction == '1')
				{
					$("#greeting").text("⚾" + " Baseball");
				}
				else if(response.prediction == '2')
				{
					$("#greeting").text("😃" + " Happy");
				}
				else if(response.prediction == '3')
				{
					$("#greeting").text("😞" + " Sad");
				}
				else if(response.prediction == '4')
				{
					$("#greeting").text("🍴" + " Fork & knife");
				}
				else if(response.prediction == '5')
				{
					$("#greeting").text("Sentence length should be lesser than or equal to 10 words");
				}
				console.log(response);

		});

		event.preventDefault();

	});

});