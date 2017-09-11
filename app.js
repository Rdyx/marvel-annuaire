var hash = md5("1f0f00008826b2382dcb12c31118d2269c5218ba6e903d6449cf46982d97006ad5d8cecf4");
var pubKey = 'e903d6449cf46982d97006ad5d8cecf4';

$('.btn').click(function () {
    var buttonContent = $(this).data('letter');
    console.log(buttonContent);
    $.ajax({
        url: 'http://gateway.marvel.com/v1/public/characters?limit=100&nameStartsWith=' + buttonContent + '&ts=1&apikey=' + pubKey + '&hash=' + hash,

        success: function (data) {
            console.log(data);
        }
    })
})

//Id Thumbnail Name Descriptions Comics Stories Series