
var Register = ()=>{

    var userinputData = {};

    userinputData.Userid = $('#userid').val();
    userinputData.password = $('#password').val();

    $.ajax({
        url : "/paytm/user/register",
        method : 'POST',
        dataType : 'JSON',
        data : userinputData,
        
        success : (response)=>{

           console.log(response)

        },
        error : (error)=>{

            console.log("error",error)

        }
    })

   console.log(userinputData)
}