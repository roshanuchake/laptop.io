
var NewAccount = ()=>{

    var userInput = {};
    userInput.AccountId = $('#AccID').val();
    userInput.PasswordId = $('#AccPass').val();
    userInput.emailId = $('#AccEmail').val();
    console.log(userInput)

    $.ajax({
        url : '/new/user/register/high',
        method : 'POST',
        dataType : 'JSON',
        data : userInput,
        success : (response)=>{
            
            console.log(response)
        },error:(error)=>{
            console.log(error)
        }
    })

    
}


