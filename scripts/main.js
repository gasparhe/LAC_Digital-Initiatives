/*
"url": "index.html?check=LAB,ASP,AUTOTEST,AUTOTEST_PASMO,ASP_HIV,LAB_HIV&cui=1234&cupon=123&date=10/02/2023"
*/
$(document).ready(function () {
    var getUrlParameter = function getUrlParameter(sParam) {
        var sPageURL = window.location.search.substring(1),
            sURLVariables = sPageURL.split('&'),
            sParameterName,
            i;

        for (i = 0; i < sURLVariables.length; i++) {
            sParameterName = sURLVariables[i].split('=');

            if (sParameterName[0] === sParam) {
                return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
            }
        }
    };


    var check = getUrlParameter('check')?.split(',');
    var cui = getUrlParameter('cui');
    var cupon = getUrlParameter('cupon');
    var date = getUrlParameter('date');

    $('.cui').val(cui);
    $('.cupon').val(cupon);
    $('.fecha').val(date);

    check.forEach(element => {
        $(`.${element}`).prop('checked', true);
    });
    // for (let i = 0; i < check.length; i++) {
    //     // checks=LAB,ASP,AUTOTEST,AUTOTEST_PASMO,ASP_HIV,LAB_HIV
    //     if (check[i] === 'LAB') $('.lab').prop('checked', true);
    //     if (check[i] === 'LAB_HIV') $('.lab_hiv').prop('checked', true);
    //     if (check[i] === 'ASP') $('.asp').prop('checked', true);
    //     if (check[i] === 'ASP_HIV') $('.asp_hiv').prop('checked', true);
    //     if (check[i] === 'AUTOTEST') $('.autotest').prop('checked', true);
    //     if (check[i] === 'AUTOTEST_PASMO') $('.autotest_pasmo').prop('checked', true);
    // }

    // $('#level').attr('src', '/gamification/images/level/' + level + '.png')

});