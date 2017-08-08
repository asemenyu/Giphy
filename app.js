var btnTopic = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];


function displayWeek (){
	var day = $(this).attr("data-name");
	var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + day + "&api_key=7ee3a6831c2c487c806a746cc3748a72";

	console.log(queryURL);
		$.ajax({
		url: queryURL,
		method: 'GET'
		}).done(function(response) {
	
		console.log(response.data);
	
		var dayDiv = $("<div class='day-info'>");
			for(var i=0; i <= 10; i++) {
			var rating = response.data[i].rating;
			var rate = $('<p>').text("Rating: " + rating);

			dayDiv.append(rate);
			$("#btnTopic").append(dayDiv);
			}
		
			for (var j=0; j < btnTopic.length; j++) {
			var topicBtn = $("<button>");
			topicBtn.text(btnTopic[j]);
			$("#btnTopic").append(topicBtn);
			}
		
		   	   for(var g=0; g <= 10; g++){
		   	   var imageTag=$("<img>");
		 	   imageTag.attr('src', response.data[g].images.original.url);
		 	   $("#allImages").append(imageTag);
		 	   };
		});
		};
		displayWeek();
 