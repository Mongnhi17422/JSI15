function Validator(options) {

    function validate(inputElement, rule) {
        var errorElement = inputElement.parentElement.querySelector(options.errorSelector);

        var errorMessage = rule.test(inputElement.value);

        if (errorMessage) {
            errorElement.innerText = errorMessage;
            inputElement.parentElement.classList.add('invalid');
        } else {
            errorElement.innerText = '';
            inputElement.parentElement.classList.remove('invalid');
        }
    }

    let formElement = document.querySelector(options.form);
    console.log(options.rules);
    if (formElement) {
        options.rules.forEach (function (rule) {
            
            var inputElement = formElement.querySelector(rule.selector);

            if (inputElement) {
                inputElement.onblur = function () {
                    validate(inputElement, rule);
                }
            }
        });
    }
}

Validator.isRequired = function (selector) {
    return {
        selector: selector,
        test: function (value) {
            return value.trim() ? undefined : 'Vui lòng nhập trường này!'
        }
    };
}

Validator.isEmail = function (selector) {
    return {
        selector: selector,
        test: function (value) {
            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regex.test(value) ? undefined : 'Vui lòng nhập email!';

        }
    };

}


Validator.minLength = function (selector, min) {
    return {
        selector: selector,
        test: function (value)  {
            return value.length >= min ? undefined : `Mật khẩu tối thiếu ${min} kí tự!`;
        }
    }
}

Validator.isConfirmed = function (selector, getConfirmValue, message) {
    return {
        selector: selector,
        test: function (value) {
            return value === getConfirmValue() ? undefined : message || 'Vui lòng nhập lại mật khẩu!'
        }
    }
}