var btnTopic = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];


function displayWeek ()
{


	var day = $(this).attr("data-name");
	var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + day + "&api_key=7ee3a6831c2c487c806a746cc3748a72&limit=10";

	console.log(queryURL);

		$.ajax({
		url: queryURL,
		method: 'GET'
		})

		.done(function(response) 
		{
	
		console.log(response.data);
		console.log(queryURL);


	var results = response.data;
		
			for(var i=0; i <= 10; i++) 
			{
				var dayDiv = $("<div>");
			
			var rate = $('<p>').text("Rating: " + results[i].rating);
			
			// for(var g=0; g <= 10; g++){
		   	var imageTag=$("<img>");
		 	imageTag.attr('src', results[i].images.original.url);
		 	// $("#allImages").append(imageTag);


		 	// };
			dayDiv.append(rate);
			dayDiv.append(imageTag);
			$("#allImages").append(dayDiv);

			}
		
			
		
		   	
		});
}

		function raindeer () 
		{
			$("#btnTopic").empty();

			for (var j=0; j < btnTopic.length; j++) 
			{
			var topicBtn = $("<button>");
			topicBtn.addClass("hotdog");
			topicBtn.attr("data-name", btnTopic[j]);

			topicBtn.text(btnTopic[j]);
			$("#btnTopic").append(topicBtn);

			}
		}

		$("#addbtn").on("click", function(event) 
		{
			event.preventDefault();

			var dog = $("#btnInput").val().trim();

			dayDiv.push(dog);

			raindeer();
		});

		

		$(document).on("click", ".hotdog", displayWeek);
		displayWeek();
		raindeer ();
 