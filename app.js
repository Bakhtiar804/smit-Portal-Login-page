function classSwitch() {

    var login = document.getElementById("container");
    var create = document.getElementById("create-container");

    login.style.display = "none";
    create.style.display = "block";

      document.getElementById("tab-1").checked = true;

}

function aganSwitch() {

    var login = document.getElementById("container");
    var create = document.getElementById("create-container");

    create.style.display = "none";
    login.style.display = "block";

       document.getElementById("tab-1").checked = true;

}

function submit() {

    var nicInputValue = document.getElementById('create-nic')
    var phoneInputValue = document.getElementById('create-number')
    var passwordInputValue = document.getElementById('create-password')

    var valueOfNic = nicInputValue.value.trim()
    var valueOfPhone = phoneInputValue.value.trim()
    var valueOfPass = passwordInputValue.value.trim()

    var hasError = false;

    if (valueOfNic === '') {
     var redAlert_1 = document.getElementById('create-nic')
     redAlert_1.setAttribute("class" , 'inputEmpty')
     redAlert_1.placeholder = "⚠️ Field cannot be empty!";
     redAlert_1.style.backgroundColor = "#ffe6e6";
       hasError = true;
    }
    if(valueOfPhone === ''){
     var redAlert_2 = document.getElementById('create-number')
     redAlert_2.setAttribute("class" , 'inputEmpty')
     redAlert_2.placeholder = "⚠️ Field cannot be empty!";
     redAlert_2.style.backgroundColor = "#ffe6e6";
     hasError = true;
    }
     if(valueOfPass === ''){
     var redAlert_3 = document.getElementById('create-password')
     redAlert_3.setAttribute("class" , 'inputEmpty')
     redAlert_3.placeholder = "⚠️ Field cannot be empty!";
     redAlert_3.style.backgroundColor = "#ffe6e6";
     hasError = true;
    }

    if(hasError){
        return;
    }


   createAccount()


}

function inputWork(){
    var redAlert_1 = document.getElementById('create-nic')
    redAlert_1.removeAttribute("class" , 'inputEmpty');
    redAlert_1.style.backgroundColor = "rgb(255, 255, 255)";


    var redAlert_2 = document.getElementById('create-password')
    redAlert_2.removeAttribute("class" , 'inputEmpty');
    redAlert_2.style.backgroundColor = "rgb(255, 255, 255)";


    var redAlert_3 = document.getElementById('create-number')
    redAlert_3.removeAttribute("class" , 'inputEmpty');
    redAlert_3.style.backgroundColor = "rgb(255, 255, 255)";


}

var usersArray = [];

function createAccount() {

    var createNic = document.getElementById('create-nic');
    var createPhoneNumber = document.getElementById('create-number');
    var createPassword = document.getElementById('create-password');


    var users = {
        origNic: createNic.value,
        origPhone: createPhoneNumber.value,
        origPassword: createPassword.value,
    }

    usersArray.push(users)

    createNic.value = '';
    createPhoneNumber.value = '';
    createPassword.value = '';

    console.log(usersArray)
    aganSwitch()
    return;
    loginAccount();
}



function loginAccount() {

    var loginNic = document.getElementById('login-nic');
    var loginPassword = document.getElementById('login-password');



    var found = false;


    for (var i = 0; i < usersArray.length; i++) {

        var user = usersArray[i]

        if (loginNic.value === user.origNic && loginPassword.value === user.origPassword) {
            found = true;
            break;

        }

    }


    if (found) {
        alert('You have login Successfully')
    } else {
        alert('Input credentials not matched')
    }

    loginNic.value = '';
    loginPassword.value = '';

}



