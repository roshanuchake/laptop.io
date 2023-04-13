var otp 
var generateotp = ()=>{
    
   otp = '';
   for(var i = 0 ; i<6 ; i++){
    var num = Math.random()*10;
    num = Math.floor(num)
    otp += num
   }
   console.log(otp)
    document.querySelector('.otpnum').innerHTML= otp;
    document.querySelector('.otpshow').style.display='none'
    document.querySelector('.otpnum').style.display='block';
    document.querySelector('.refresh').style.display='block';
}


$(document).ready(()=>{
    $('.showlog').click(()=>{
        $('.formbox').show(500)
    })
    $('.hidelog').click(()=>{
        $('.formbox').hide(500)
    })  
})

var inputotp=(event)=>{
   
    if(($('.otpbox').val().length)== 6){
        $('.logbtn').attr('disabled',false)
    }else{
        $('.logbtn').attr('disabled',true)
    }
}

var checkotp = ()=>{
  var userotpnum = $('.otpbox').val()
   var userotp= otp
   console.log(userotp)
    console.log($('.otpbox').val())
    if( userotp != userotpnum ){
        $('.otperror').show()
    }else{
        $('.otperror').hide()
    }

    var userInput = {};
     userInput.userAccount = $('.accountuser').val();
     userInput.userPassword = $('.accountpass').val();
    console.log(userInput);

    var validUserInput = validAccPass(userInput);

    if(validUserInput){
        $('.errorap').hide()

        $.ajax({
            url : '/userdata/info',
            method : 'POST',
            dataType : 'JSON',
            data :userInput,
            success : (response)=>{
                console.log(response)
                console.log("response")

                if(response.msg == "Valid User"){
                   
                    
                    
                    let  type = 'Productdetails'

                    if(response.isAdmin){

                        type = 'addProduct.htm'
                       }
                       newonloadPage(type)
                     
                }else{
                    $('.errorap').show()
                    $('.errorap').html(response.info)
                }
                
            },error :(err)=>{
  
                console.log(err)
            }
        })

        
    }else{
        $('.errorap').show()
    }

   
   
}

var validAccPass = (checkId)=>{

    if(!checkId.userAccount || !checkId.userPassword)
    return false;

    if(checkId.userAccount.length < 5 || checkId.userPassword.length !=8){
        return false;
    }
     var passChar = checkId.userPassword.charCodeAt(0);
     
    
     if(passChar >=65 && passChar <= 90){
        console.log(passChar)
     }else{
        return false;
     }
    
    {
        return true;
    }



    
       
    
}



var newonloadPage =(type)=>{
    var tempurl = '../templatyes/'

    switch(type){
        case 'signup':
            tempurl += 'signup.htm';
            break;

        case 'forgot':
            tempurl += 'forgot.htm';
            break;
        case 'Productdetails':
            tempurl += 'productpage.htm' ;
            break;   

        case 'addNewProducts'  :
            tempurl += 'addProduct.htm' ;
            break; 

    }

    $.ajax({
        url : tempurl,
        method: 'GET',
        data : {},
        success: (responseTmplt) => {
            $(".main").html(responseTmplt);

            if (type == 'Productdetails') {
                loadProductDetailsData();
            } 
        },
      
    })
}
