var hash = md5("1f0f00008826b2382dcb12c31118d2269c5218ba6e903d6449cf46982d97006ad5d8cecf4");
var pubKey = 'e903d6449cf46982d97006ad5d8cecf4';
var alphabet = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split('');

$('#boutons').empty();
for (var i = 0; i < alphabet.length; i++) {
    $('#boutons').append('<button class="btn" data-letter="' + alphabet[i] + '">' + alphabet[i] + '</button>');
}
$('.btn').click(function () {
    var buttonContent = $(this).data('letter');
    console.log(buttonContent);
    $.ajax({
        url: 'http://gateway.marvel.com/v1/public/characters?limit=100&nameStartsWith=' + buttonContent + '&ts=1&apikey=' + pubKey + '&hash=' + hash,

        success: function (data) {
            console.log(data); $
            $('#tableHeroes').empty();
            var tableau = data.data.results;
            for (var i = 0; i < tableau.length; i++) {
                $('#tableHeroes').append('<tr class="hero"><td>' + tableau[i].id + '</td>\
                <td><img src="'+ tableau[i].thumbnail.path + '.' + tableau[i].thumbnail.extension + '" alt="photo"></td>\
                <td>'+ tableau[i].name + '</td>\
                <td>'+ tableau[i].description + '</td>\
                <td>'+ tableau[i].comics.available + '</td>\
                <td>'+ tableau[i].stories.available + '</td>\
                <td>'+ tableau[i].series.available + '</td></tr > ')
            }
            new List('mainTable', {
                valueNames: ['hero'],
                page: 5,
                pagination: true
            });
        }
    })
})

//Id Thumbnail Name Descriptions Comics Stories Series