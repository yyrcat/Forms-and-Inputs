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
        if (num.toString() === 10) return true;
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
        var falg = true;
        for (var i = 0; i < input.length; i++) {
            if (input.charCodeAt(i) !== 32) flag = false;
        }
        if (input.length === 0) return false;
        else if (!flag) return false;
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
signupForm.addEventListener('submit',function(event){
    event.preventDefault();
    if(validator.isOfLength(signupForm.elements[0].value,2)){
        console.log(signupForm.elements.length);
    }
});