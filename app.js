function classSwitch() {

    var login = document.getElementById("container");
    var create = document.getElementById("create-container");

    login.style.display = "none";
    create.style.display = "block";

}

function aganSwitch() {

    var login = document.getElementById("container");
    var create = document.getElementById("create-container");

    create.style.display = "none";
    login.style.display = "block";

}

function submit() {

    var nicInputValue = document.getElementById('create-nic')
    var phoneInputValue = document.getElementById('create-number')
    var passwordInputValue = document.getElementById('create-password')

    var valueOfNic = nicInputValue.value.trim()
    var valueOfPhone = phoneInputValue.value.trim()
    var valueOfPass = passwordInputValue.value.trim()

    if (valueOfNic === '') {
       var redAlert_1 = document.getElementById('create-nic')
     redAlert_1.setAttribute("class" , 'inputEmpty')
     redAlert_1.placeholder = "⚠️ Field cannot be empty!";
     redAlert_1.style.backgroundColor = "#ffe6e6";
       
    }
     if(valueOfPhone == ''){
var redAlert_2 = document.getElementById('create-number')
     redAlert_2.setAttribute("class" , 'inputEmpty')
     redAlert_2.placeholder = "⚠️ Field cannot be empty!";
     redAlert_2.style.backgroundColor = "#ffe6e6";
    }
    if(valueOfPass == ''){
        var redAlert_3 = document.getElementById('create-password')
     redAlert_3.setAttribute("class" , 'inputEmpty')
     redAlert_3.placeholder = "⚠️ Field cannot be empty!";
     redAlert_3.style.backgroundColor = "#ffe6e6";
    }

    

   createAccount()


}

function inputWork(){
    var redAlert_1 = document.getElementById('create-nic')
    redAlert_1.removeAttribute("class" , 'inputEmpty');

    redAlert_1.placeholder = 'Add Your Tasks'
    redAlert_1.style.backgroundColor = "rgb(255, 255, 255)";


    var redAlert_2 = document.getElementById('create-password')
    redAlert_2.removeAttribute("class" , 'inputEmpty');

    redAlert_2.placeholder = 'Add Your Tasks'
    redAlert_2.style.backgroundColor = "rgb(255, 255, 255)";


    var redAlert_3 = document.getElementById('create-number')
    redAlert_3.removeAttribute("class" , 'inputEmpty');

    redAlert_3.placeholder = 'Add Your Tasks'
    redAlert_3.style.backgroundColor = "rgb(255, 255, 255)";


}

var usersArray = [];

function createAccount() {

    var createNic = document.getElementById('create-nic');
    var createPhoneNumber = document.getElementById('create-number');
    var createPassword = document.getElementById('create-password');

    if(createNic.value == '' || createPhoneNumber == '' || createPassword == ''){
        return;
    }

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



// function loginAccount() {
//     var loginNic = document.getElementById('login-nic').value;
//     var loginPassword = document.getElementById('login-password').value;

//     // We create a variable to track if we found a match
//     var isFound = false;

//     // Loop through every object in the array
//     for (var i = 0; i < usersArray.length; i++) {
//         var user = usersArray[i];

//         // Check if the current user in the loop matches the input
//         if (loginNic === user.origNic && loginPassword === user.origPassword) {
//             isFound = true;
//             break; // Stop the loop early because we found them!
//         }
//     }

//     // After the loop finishes, check our "tracker" variable
//     if (isFound) {
//         alert('You have logged in successfully!');
//     } else {
//         alert('Input credentials not matched');
//     }
// }