function isStrong (Password)
{
    var containalpha =/[A-Za-z]/;
    var containdigit = /[0-9]/;
    var containchar = /[~!@#$%^&*(){}]/ ;

    if(!Password.match(containalpha))
    {
        alert('Password must contain alphabets');
        return false ;
    }
    if(!Password.match(containdigit))
    {
        alert('Password must contain 1 number atleast');
        return false ;
    }
    if(!Password.match(containchar))
    {
        alert('Password must contain Char');
        return false;
    }
    else
    {
        return true;
    }
}
function confirm (event)
{
    var name = document.getElementById('UserName').value;
    var email = document.getElementById('EmailAddress').value;
    var Password = document.getElementById ('Password').value;
    var ConfirmPas = document.getElementById('ConfirmPassword').value;
    var BirthDat = document.getElementById('BirthDate').value;
    var gender = document.getElementById('Gender').value;


    if (name!== "" && email!== "" && Password!== "" && ConfirmPas!== "" && BirthDat!== "" && gender!== "")
    {
       if(Password==ConfirmPas) 
       {
        return isStrong (Password);
       }
       else
       {
        alert('password do\'t match');
        return false ;
       }
    }
    else
    {
        alert('Fieldes must not be empety !');
        return false ;
    }

}













