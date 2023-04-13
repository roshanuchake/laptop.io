
var newTemp,pdetailsList;
var showtemplate = ()=>{
    $.ajax({
        url :'../templatyes/productTemplate.htm',
        method : 'GET',
        success : (resTemp)=>{

            // console.log(resTemp)
            newTemp = resTemp;
        },
        error : ()=>{
            console.log("Error handeling..")
        }
    })
}

showtemplate();
var loadProductDetailsData = () => {
    $.ajax({
        url: '/product/details/info',
        method: 'POST',
        dataType: 'JSON',
        data: {},
        success: (response) => {
            pdetailsList = response.productdetails;
            
            for (var i = 0 ; i < pdetailsList.length; i++) {
                loadProductData(pdetailsList[i]);
            }
        }
    })
}



var loadProductData = (product) => {
    // pdetails.discountPrice = pdetails.price - (pdetails.price * pdetails.discountPercent) / 100
    //  pdetails.ratingImages = getRatingStars(pdetails.rating);
     console.log(product)
    var handleBarTemplate = Handlebars.compile(showtemplate);
    //  pdetails.ratingContainerId = 'rating_' + index;
     
     var productTemplateWithData = handleBarTemplate(product);
 
    $(".pbox").append(productTemplateWithData);
    //  var id = '#' + pdetails.ratingContainerId;
    // $(id).html(pdetails.ratingImages);
 }

