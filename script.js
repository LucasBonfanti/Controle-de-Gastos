const onChangeEmail = () => {
    toggleButtonsDisable();
    toggleEmailErrors();
 
}

const onChangePassword = () => {
    toggleButtonsDisable();
    togglePasswordErrors();
}

const isEmailValid = () => {
    const email = form.email().value;
    if(!email){
        return false
    }
    return validateEmail(email)
}

const isPasswordValid = () => {
    const password = form.password().value;
    if(!password){
        return false
    }
    return true
}

const toggleEmailErrors = () => {
    const email = form.email().value;

    form.emailRequiredError().style.display = email ? "none" : "block";

    form.emailInvalidError().style.display = validateEmail(email) ? "none" : "block"

}

const togglePasswordErrors = () => {
    const password = form.password().value;

    form.passwordRequiredError().style.display = password ? "none" : "block"
}

const toggleButtonsDisable = () => {
    const  emailValid = isEmailValid();
    form.recoverPassword().disabled = !emailValid;
 
    const passwordValid = isPasswordValid();
    form.loginButton().disabled = !emailValid || !passwordValid
}


const form = {
    email: () => document.getElementById('email'),
    emailInvalidError: ()=> document.getElementById('email-invalid-error'),
    emailRequiredError: () => document.getElementById('email-required-error'),
    loginButton: () => document.getElementById('login-button'),
    password: () => document.getElementById('password'),
    recoverPassword: () => document.getElementById('recover-password-button'),
    passwordRequiredError: () => document.getElementById('password-required-error')
}