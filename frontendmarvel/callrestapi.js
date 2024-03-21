var url = "http://localhost:3300/api/users";

function postHeroe() {
	console.log(url);
	var myUrl = $('#url').val();
	var myName = $('#nombre').val();
	var myDescription = $('#description').val();
	var myComic = $('#comic').val();

	var myuser = {
		url: myUrl,
		nombre: myName,
		description: myDescription,
		comic: myComic
	};
	console.log(myuser);

	$.ajax({
		url: url,
		type: 'post',
		dataType: 'json',
		contentType: 'application/json',
		success: function (data) {
			console.log(data);
			$('#resultado').html(JSON.stringify(data.user));
		},
		data: JSON.stringify(myuser)
	});
}

function getHeroes() {
	console.log(url);

	$.getJSON(url,
		function(json) {
			console.log(json);

			var arrUsers = json.users;

			var htmlTableUsers = '<table border="1">';

			arrUsers.forEach(function(item) {
				console.log(item);
				htmlTableUsers += '<tr>' +
					'<td>' + item.id + '</td>' +
					'<td>' + item.url + '</td>' +
					'<td><img src="' + item.url + '" alt="' + item.name + '"></td>'  +
					'<td>' + item.description + '</td>' +
					'<td>' + item.comic + '</td>' +
					'</tr>';
			});

			htmlTableUsers += '</table>';

			$('#resultado').html(htmlTableUsers);

		}
	);
}
