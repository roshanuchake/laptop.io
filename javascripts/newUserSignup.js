
var newuserSignUp = ()=>{
    var userInputData = {};
    userInputData.userAccount = $('#AccId').val();
    userInputData.userPassword = $('#Accpass').val();
    userInputData.Email = $('#mailId').val();

    $.ajax({
        url : '/new/user/register',
        method : 'POST',
        dataType : 'JSON',
        data : userInputData,
        success : (response)=>{

            console.log(response)

            

            if(response.msg == "Success"){
                $('#successMsg').show();
                $('#successMsg').html("SuccessFully SignUp....")
            }
           
            

        },error :()=>{
            console.log(error)
        }
    })
    console.log(userInputData);
   
}