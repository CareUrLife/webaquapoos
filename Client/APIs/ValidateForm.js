
const validateInput = (type, string) => {
    if(type == 'email') {
        var emailRegexS = '/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/';
        var emailRegex = RegExp(emailRegexS);
        return emailRegex.test(string);
    }else if(type == 'name') {
        var nameRegexS = '/^[a-zA-Z ]+$/';
        var nameRegex = RegExp(nameRegexS);
        return nameRegex.test(string);
    }else if(type == 'number') {
        var numberRegexS = '/^[0-9]*$/';
        var numberRegex = RegExp(numberRegexS);
        return numberRegex.test(string);
    }
}

exports.validateInput = validateInput;
