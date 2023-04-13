
var newTemp ;
var sampleTemplate = ()=>{
 $.ajax({
    url : './producttemplte.htm',
    method : 'GET',
    success : (resTemp)=>{
        console.log(resTemp)
        newTemp = resTemp;
    },
    error : ()=>{
        console.log('error created')
    }
 })
}

var loadTemplate = (pdeatils)=>{

    var template = Handlebars.compile(newTemp);

    var tempwithHandlebar = template(pdeatils) ;

    $('.pbox').append(tempwithHandlebar)
}

sampleTemplate();