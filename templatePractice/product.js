var productTemp ;
var loadPRoductTemplate = ()=>{

    $.ajax({
        url : './producttemplte.htm',
        method : 'GET',
        success : (resTemp)=>{
            console.log(resTemp)

            productTemp = resTemp;
        },
        error : ()=>{
            console.log('error')
        }
    })
}

var uploadProductTemp = (pdeatils)=>{

    var templateProduct = Handlebars.compile(productTemp);

    var templateWithData = templateProduct(pdeatils);

    $('.pcontainer').append(templateWithData)
}

loadPRoductTemplate();