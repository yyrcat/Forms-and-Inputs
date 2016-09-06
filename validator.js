/**
 * Created by Yerui on 7/21/2016.
 */
var validator = {};
(function(window){
    validator.isEmailAddress = function(email) {
        if (!email) throw "Missing Parameter in isEmailAddress function: 'email'."
        var at = email.indexOf("@");
        var dot = email.lastIndexOf("\.");
        if (email.length > 0 && at > 0 && dot > at + 1 && dot < email.length && email[at + 1] !== "." && email.indexOf(" ") === -1 && email.indexOf(". .") === -1) return true;
        else return false;
    };
    validator.isPhoneNumber = function(number) {
        if (!number) throw "Missing Parameter in isPhoneNumber function: 'number'."
        var num = parseInt(number);
        if (num.toString().length === 10) return true;
        else return false;
    };
    validator.withoutSymbols = function(symbol) {
        var str = [];
        for (var i = 0; i < symbol.length; i++) {
            if (symbol.charCodeAt(i) === 32 || symbol.charCodeAt(i) >= 48 && symbol.charCodeAt(i) <= 57 || symbol.charCodeAt(i) >= 65 && symbol.charCodeAt(i) <= 90 || symbol.charCodeAt(i) >= 97 && symbol.charCodeAt(i) <= 122)
                str.push(symbol[i]);

        }
        return str.join("");

    };
    validator.isDate = function(date) {
        if (!date) throw "Missing Parameter in isPhoneNumber function: 'date'."
        if (!isNaN(Date.parse(date)) && Date.parse(date) > 0) return true;
        else return false;
    };
    validator.isBeforeDate = function(input, reference) {
        if (isNaN(Date.parse(input)) || isNaN(Date.parse(reference))) throw "Parameter in isBeforeDate function: 'input,reference' are not valid."
        if (Date.parse(input) < Date.parse(reference)) {
            return true;
        } else return false;

    };

    validator.isAfterDate = function(input, reference) {
        if (isNaN(Date.parse(input)) || isNaN(Date.parse(reference))) throw "Parameter in isAfterDate function: 'input,reference' are not valid."
        if (Date.parse(input) > Date.parse(reference)) {
            return true;
        } else return false;
    };
    validator.isBeforeToday = function(input) {
        if (isNaN(Date.parse(input))) throw "Parameter in isBeforeDate function: 'input' are not valid."
        if (Date.parse(input) < Date.now()) return true;
        else return false;
    };
    validator.isAfterToday = function(input) {
        if (isNaN(Date.parse(input))) throw "Parameter in isBeforeDate function: 'input' are not valid."
        if (Date.parse(input) > Date.now()) return true;
        else return false;
    };


    validator.isEmpty = function(input) {
        var flag = false;
        if (input.length === 0) return true;
        else{
            for (var i = 0; i < input.length; i++) {
                if (input.charCodeAt(i) !== 32) flag = true;
            }
        }
        if (flag) return false;
        else return true;
    };


    validator.contains = function(input, words) {
        var result = words.map(function(str) {
            if (input.includes(str)) return true;
            else return false;
        });
        var count = 0;
        for (var i = 0; i < result.length; i++) {
            if (result[i] === true) count++;
        }
        if (count > 0) return true;
        else return false;
    };

    validator.lacks = function(input, words) {
        var result = words.map(function(str) {
            if (input.includes(str)) return false;
            else return true;
        });
        var count = 0;
        for (var i = 0; i < result.length; i++) {
            if (result[i] === false) count++;
        }
        if (count > 0) return false;
        else return true;
    };

    validator.isComposedOf = function(input, strings) {
        var result = words.map(function(str) {
            if (input.includes(str)) return true;
            else return false;
        });
        var count = 0;
        for (var i = 0; i < result.length; i++) {
            if (result[i] === true) count++;
        }
        if (count > 0) return true;
        else return false;
    };
    validator.isLength = function(input, n) {
        if (input.length <= n) return true;
        else return false;
    };
    validator.isOfLength = function(input, n) {
        if (input.length >= n) return true;
        else return false;
    };
    validator.countWords = function(input) {
        var count = 0;
        for (var i = 0; i < input.length; i++) {
            if (input.length > 0) {
                if ((65 <= input.charCodeAt(i) && input.charCodeAt(i) <= 90 || 97 <= input.charCodeAt(i) && input.charCodeAt(i) <= 122) && (input[i + 1] === undefined || 65 > input.charCodeAt(i + 1) || (input.charCodeAt(i + 1) < 97 && 90 < input.charCodeAt(i + 1)) || input.charCodeAt(i + 1) > 122)) count++;
            } else return 0;
        }
        return count;
    };

    validator.lessWordsThan = function(input, n) {
        var count = 0;
        for (var i = 0; i < input.length; i++) {
            if (input.length > 0) {
                if ((65 <= input.charCodeAt(i) && input.charCodeAt(i) <= 90 || 97 <= input.charCodeAt(i) && input.charCodeAt(i) <= 122) && (input[i + 1] === undefined || 65 > input.charCodeAt(i + 1) || (input.charCodeAt(i + 1) < 97 && 90 < input.charCodeAt(i + 1)) || input.charCodeAt(i + 1) > 122)) count++;
            } else return 0;
        }
        if (count <= n) return true;
        else return false;
    };
    validator.moreWordsThan = function(input, n) {
        var count = 0;
        for (var i = 0; i < input.length; i++) {
            if (input.length > 0) {
                if ((65 <= input.charCodeAt(i) && input.charCodeAt(i) <= 90 || 97 <= input.charCodeAt(i) && input.charCodeAt(i) <= 122) && (input[i + 1] === undefined || 65 > input.charCodeAt(i + 1) || (input.charCodeAt(i + 1) < 97 && 90 < input.charCodeAt(i + 1)) || input.charCodeAt(i + 1) > 122)) count++;
            } else return 0;
        }
        if (count >= n) return true;
        else return false;
    };
    validator.isBetween = function(input, floor, ceil) {
            if(inut<=ceil && input>=floor){
                return true;
            }else
                return false;
    };

    validator.isAlphanumeric = function(input) {
        var flag = true;
        for (var i = 0; i < input.length; i++) {
            if (65 <= input.charCodeAt(i) && input.charCodeAt(i) <= 90 || 97 <= input.charCodeAt(i) && input.charCodeAt(i) <= 122 || 48 <= input.charCodeAt(i) && input.charCodeAt(i) <= 57) {
                continue;
            } else flag = false;
        }
        if (flag) return true;
        else return false;
    };

    validator.isCreditCard = function(input) {
        var flag = true;
        if (input.length === 16) {
            for (var i = 0; i < input.length; i++) {
                if (65 <= input.charCodeAt(i) && input.charCodeAt(i) <= 90 || 97 <= input.charCodeAt(i) && input.charCodeAt(i) <= 122 || 48 <= input.charCodeAt(i) && input.charCodeAt(i) <= 57) continue;
                else flag = false;
            }

        } else if (input[4] === "-" && input[9] === "-" && input[14] === "-") flag = true;
        else flag = false;
        if (flag) return true;
        else return false;
    };

    validator.isHex = function(input) {
        var flag = true;
        if (input.length === 7 || input.length === 4) {
            if (input[0] !== "#") flag = false;
            else {
                for (var i = 1; i < input.length; i++) {
                    if (65 <= input.charCodeAt(i) && input.charCodeAt(i) <= 70 || 48 <= input.charCodeAt(i) && input.charCodeAt(i) <= 57 || 97 <= input.charCodeAt(i) && input.charCodeAt(i) <= 102) continue;
                    else flag = false;
                }
            }
        } else flag = false;
        if (flag) return true;
        else return false;
    };

    validator.isRGB = function(input) {
        if (input.slice(0, 4) !== "rgb(" || input[input.length - 1] !== ")") return false;
        else {
            var str = input.slice(4, input.length - 1);
            var arr = str.split(",");
            if (arr[0].length === str.length || arr.length > 3) return false;
            else {
                var flag = true;
                for (var i = 0; i < arr.length; i++) {
                    if (0 <= parseInt(arr[i]) && parseInt(arr[i]) <= 255) continue;
                    else flag = false;
                }
                if (flag) return true;
                else return false;
            }
        }

    };
    validator.isHSL = function(input) {
        if (input.slice(0, 4) !== "hsl(" || input[input.length - 1] !== ")") return false;
        else {
            var str = input.slice(4, input.length - 1);
            var arr = str.split(",");
            if (arr[0].length === str.length || arr.length > 3) return false;
            else {
                var flag = true;
                if (parseInt(arr[0]) > 255 || parseInt(arr[0]) < 0) return false;
                else {
                    for (var i = 1; i < arr.length; i++) {
                        if (0 <= parseInt(arr[i]) && parseInt(arr[i]) <= 1) continue;
                        else flag = false;
                    }
                }
                if (flag) return true;
                else return false;
            }
        }
    };
    validator.isColor = function(input) {
        if (input[0] === "#") {
            if (input.length === 7 || input.length === 4) {
                var flag = true;
                for (var i = 1; i < input.length; i++) {
                    if (65 <= input.charCodeAt(i) && input.charCodeAt(i) <= 70 || 48 <= input.charCodeAt(i) && input.charCodeAt(i) <= 57 || 97 <= input.charCodeAt(i) && input.charCodeAt(i) <= 102) continue;
                    else flag = false;
                }
                debugger;
                if (flag) return true;
                else return false;
            } else return false;

        } else {
            if ((input.slice(0, 4) !== "rgb(" || input.slice(0, 4) === "hsl(") && input[input.length - 1] === ")") {
                var str = input.slice(4, input.length - 1);
                var arr = str.split(",");
                if (arr[0].length === str.length || arr.length > 3) return false;
                else {
                    var flag = true;
                    if (parseInt(arr[0]) > 255 || parseInt(arr[0]) < 0) return false;
                    else {
                        for (var i = 1; i < arr.length; i++) {
                            if (0 <= parseInt(arr[i]) && parseInt(arr[i]) <= 1) continue;
                            else flag = false;
                        }
                    }
                    if (flag) return true;
                    else return false;
                }
            } else return false;
        }
    };
    validator.isTrimmed=function(input){
        for(var i = 0; i < input.length; i++){
            if(input[i]===" "){
                if(input[i+1]===" "){
                    return false;
                }
                else return true;
            }
        }
    };
})(window);

var signupForm=document.getElementById("signup");/*at first, this statement always return null, the reason is I put
the script in the head, so the script is loaded before the page content is loaded, so the result is null. */
var signSpan=document.querySelectorAll(".signError");
signupForm.addEventListener('submit',function(event){
    event.preventDefault();
    if(!validator.isOfLength(signupForm.elements["firstName"].value,2)){
       signupForm.elements["firstName"].setCustomValidity("Please type in at least two characters");
    }
    signSpan[0].innerHTML=signupForm.elements["firstName"].validationMessage;
    if(!validator.isOfLength(signupForm.elements["lastName"].value,2)){
        signupForm.elements["lastName"].setCustomValidity("Please type in at least two characters");
    }
    signSpan[1].innerHTML=signupForm.elements["lastName"].validationMessage;

    if(!validator.isEmpty(signupForm.elements["birthday"].value)){
        if(!validator.isBeforeToday(signupForm.elements["birthday"].value)){
            signupForm.elements["birthday"].setCustomValidity("Please choose date before today.");
        }
    }
    else signupForm.elements["birthday"].setCustomValidity("Date can't be null.");

    signSpan[2].innerHTML=signupForm.elements["birthday"].validationMessage;
    if(!validator.isOfLength(signupForm.elements["password"].value,6)){
        signupForm.elements["password"].setCustomValidity("Please type in at least 6 characters.")
    }
    signSpan[3].innerHTML=signupForm.elements["password"].validationMessage;
});

var searchForm=document.getElementById("search");
var searchSpan=document.querySelectorAll(".searchError");
searchForm.addEventListener('submit',function(event){
    event.preventDefault();
    if(validator.isEmpty(searchForm.elements["search"].value)){
        searchForm.elements["search"].setCustomValidity("Search term can't be null.");
    }
    searchSpan[0].innerHTML=searchForm.elements["search"].validationMessage;
    if(validator.isEmpty(searchForm.elements["category"].value)){
        searchForm.elements["category"].setCustomValidity("Category can't be null.");
    }
    searchSpan[1].innerHTML=searchForm.elements["category"].validationMessage;
});


var loginForm=document.getElementById("login");
var logSpan=document.querySelectorAll(".logError");
loginForm.addEventListener('submit',function(event){
    event.preventDefault();
    if(!validator.isOfLength(loginForm.elements["user"].value,4)){
        loginForm.elements["user"].setCustomValidity("Username should be at least 4 characters.");
    }
    logSpan[0].innerHTML=loginForm.elements["user"].validationMessage;
    if(!validator.isOfLength(loginForm.elements["password"].value,6)){
       loginForm.elements["password"].setCustomValidity("Password should be at least 6 characters.");
    }
    logSpan[1].innerHTML=loginForm.elements["password"].validationMessage;
    if(!validator.isOfLength(loginForm.elements["ssn"].value,4)){
        loginForm.elements["ssn"].setCustomValidity("Please type in last 4 digits of your SSN.");
    }
    logSpan[2].innerHTML=loginForm.elements["ssn"].validationMessage;
});

var colorForm=document.getElementById("color");
var colorSpan=document.querySelectorAll(".colorError");
colorForm.addEventListener("submit",function(event){
    event.preventDefault();
       colorForm.elements["finalColor"].value="rgba("+colorForm.elements["red"].value+","+colorForm.elements["green"].value+","+colorForm.elements["blue"].value+","+colorForm.elements["alpha"].value+")";
});

var shipForm=document.getElementById("ship");
var shipSpan=document.querySelectorAll(".shipError");
shipForm.addEventListener("submit",function(event){
    event.preventDefault();
    if(shipForm.elements["checkBox"].checked){
        shipForm.elements["firstNameBill"].value=shipForm.elements["firstNameShip"].value;
        shipForm.elements["lastNameBill"].value=shipForm.elements["lastNameShip"].value;
        shipForm.elements["addressBill"].value=shipForm.elements["addressShip"].value;
        shipForm.elements["cityBill"].value=shipForm.elements["cityShip"].value;
        shipForm.elements["countryBill"].value=shipForm.elements["countryShip"].value;
        shipForm.elements["phoneBill"].value=shipForm.elements["phoneShip"].value;
    }

    if(!validator.isOfLength(shipForm.elements["firstNameShip"].value,2)){
       shipForm.elements["firstNameShip"].setCustomValidity("First name should be at least 2 characters");
    }
    shipSpan[0].innerHTML=shipForm.elements["firstNameShip"].validationMessage;

    if(!validator.isOfLength(shipForm.elements["lastNameShip"].value,2)){
        shipForm.elements["lastNameShip"].setCustomValidity("Last name should be at least 2 characters");
    }
    shipSpan[1].innerHTML=shipForm.elements["lastNameShip"].validationMessage;
    if(!validator.isOfLength(shipForm.elements["addressShip"].value,10)){
        shipForm.elements["addressShip"].setCustomValidity("Address should be at least 5 characters");
    }
    shipSpan[2].innerHTML=shipForm.elements["addressShip"].validationMessage;

    if(!validator.isOfLength(shipForm.elements["cityShip"].value,5)){
        shipForm.elements["cityShip"].setCustomValidity("City name should be at leaset 5 characters");
    }
    shipSpan[3].innerHTML=shipForm.elements["cityShip"].validationMessage;

    if(!validator.isOfLength(shipForm.elements["countryShip"].value,5)){
        shipForm.elements["countryShip"].setCustomValidity("Country should be at leaset 4 characters");
    }
    shipSpan[4].innerHTML=shipForm.elements["countryShip"].validationMessage;

    if(!validator.isEmpty(shipForm.elements["phoneShip"].value)){
        if(!validator.isPhoneNumber(shipForm.elements["phoneShip"].value)){
            shipForm.elements["phoneShip"].setCustomValidity("Please type in valid phone number.");
        }
    }else {
        shipForm.elements["phoneShip"].setCustomValidity("Phone number can't be null.");
    }

    shipSpan[5].innerHTML=shipForm.elements["phoneShip"].validationMessage;
});

var scheduleForm=document.getElementById("schedule");
var scheduleSpan=document.querySelectorAll(".scheduleError");
scheduleForm.addEventListener("submit",function(event){
    event.preventDefault();
    if(!validator.isEmpty(scheduleForm.elements["date"].value)){
        if(!validator.isDate(scheduleForm.elements["date"].value)){
            scheduleForm.elements["date"].setCustomValidity("Please type in valid date format.");
        }else{
            if(!validator.isAfterToday(scheduleForm.elements["date"].value)){
                scheduleForm.elements["date"].setCustomValidity("Please choose date after today.");
            }
        }
    }else  {scheduleForm.elements["date"].setCustomValidity("Date can't be null.");}

    scheduleSpan[0].innerHTML=scheduleForm.elements["date"].validationMessage;

    if(validator.isEmpty(scheduleForm.elements["timeZones"].value)){
        scheduleForm.elements["timeZones"].setCustomValidity("Please choose a time zone.");
    }
    scheduleSpan[2].innerHTML=scheduleForm.elements["timeZones"].validationMessage;

    if(!validator.isEmpty(scheduleForm.elements["date"].value)){
        if(validator.isOfLength(scheduleForm.elements["msg"].value,20)){
            scheduleForm.elements["msg"].setCustomValidity("Please type in at leaset 20 characters.");
        }
    }else {
        scheduleForm.elements["msg"].setCustomValidity("Message can't be null.");
    }

    scheduleSpan[3].innerHTML=scheduleForm.elements["msg"].validationMessage;

    if(!validator.isEmpty(scheduleForm.elements["phone"].value)){
        if(!validator.isPhoneNumber(scheduleForm.elements["phone"].value)){
            scheduleForm.elements["phone"].setCustomValidity("Please type in valid phone number.");
        }
    }else {
        scheduleForm.elements["phone"].setCustomValidity("Phone number can't be null.");
    }
    scheduleSpan[4].innerHTML=scheduleForm.elements["phone"].validationMessage;

    if(!validator.isEmpty(scheduleForm.elements["date"].value)){
        if(validator.isEmailAddress(scheduleForm.elements["email"].value)){
            scheduleForm.elements["email"].setCustomValidity("Please type in valid email address");
        }
    }
    else{
        scheduleForm.elements["email"].setCustomValidity("Email can't be null.");
    }

    scheduleSpan[5].innerHTML=scheduleForm.elements["email"].validationMessage;

});

var creditForm=document.getElementById("creditCard");
var cardSpan=document.querySelectorAll(".cardError");
creditForm.addEventListener("submit",function(event){
    event.preventDefault();
    if(!validator.isEmpty(creditForm.elements["name"].value)){
        if(validator.moreWordsThan(creditForm.elements["name"].value,2)){
            if(!validator.isAlphanumeric(creditForm.elements["name"].value)){
                creditForm.elements["name"].setCustomValidity("Plese include only letters in your name.");
            }
        }
        else {
            creditForm.elements["name"].setCustomValidity("Plese type in your full name.");
        }
    }else{
        creditForm.elements["name"].setCustomValidity("Name can't be null.");
    }
    cardSpan[0].innerHTML=creditForm.elements["name"].validationMessage;


    if(!validator.isEmpty(creditForm.elements["cardNumber"].value)){
        if(!validator.isCreditCard(creditForm.elements["cardNumber"].value)){
            creditForm.elements["cardNumber"].setCustomValidity("Please type in valid card number.");
        }
    }
    else  creditForm.elements["cardNumber"].setCustomValidity("Card number can't be null.");
    cardSpan[1].innerHTML=creditForm.elements["cardNumber"].validationMessage;


    if(!validator.isEmpty(creditForm.elements["cvs"].value)){
        if(!validator.isLength(creditForm.elements["cvs"].value),3){
            creditForm.elements["cvs"].setCustomValidity("Please type in 3-digits cvs.");
        }
        else{
            if(validator.isAlphanumeric(creditForm.elements["cvs"].value)){
                creditForm.elements["cvs"].setCustomValidity("Please don't include letters in the cvs number.");
            }
        }
    }
    else  creditForm.elements["cvs"].setCustomValidity("Card number can't be null.");
    cardSpan[2].innerHTML=creditForm.elements["cvs"].validationMessage;

    if(validator.isEmpty(creditForm.elements["month"].value)) {
        creditForm.elements["month"].setCustomValidity("Month can't be null.");
    }
    cardSpan[3].innerHTML=creditForm.elements["month"].validationMessage;

    if(validator.isEmpty(creditForm.elements["year"].value)) {
        creditForm.elements["year"].setCustomValidity("Year can't be null.");
    }
    cardSpan[4].innerHTML=creditForm.elements["year"].validationMessage;
});