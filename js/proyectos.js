$("#open_larafoto").click(function () {
    $('#larafoto').modal('toggle');
});

$("#open_larafoto").hover(
    function () {
        $('html,body').css('cursor', 'pointer');
    }, function () {
        $('html,body').css('cursor', 'auto');
    }
);
