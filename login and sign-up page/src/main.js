function setFormMessage(formElement, type, message) {
  const messageElement = formElement.querySelector(".form__message");

  messageElement.textContent = message;
  messageElement.classList.remove(
    "Form__message--success",
    "Form__message--error"
  );
  messageElement.classList.add("Form__message--${type}");
}

function setInputError(inputElement, message) {
  inputElement.classList.add("Form__input--error");
  inputElement.parentElement.querySelector(
    ".Form__input-error-message"
  ).textContent = message;
}
function clearInputError(inputElement) {
  inputElement.classList.remove("form__input--error");
  inputElement.parentElement.querySelector(
    ".Form__input-error-message"
  ).textContent = "";
}

document.addEventListener("DOMContentLoaded", (e) => {
  const LogInForm = document.querySelector("#LogIn");
  const CreateAccountForm = document.querySelector("#CreateAccount");

  document
    .querySelector("#linkCreateAccount")
    .addEventListener("click", (e) => {
      e.preventDefault();
      LogInForm.classList.add("form--hidden");
      CreateAccountForm.classList.remove("form--hidden");
    });

  document.querySelector("#linkLogIn").addEventListener("click", (e) => {
    e.preventDefault();
    LogInForm.classList.remove("form--hidden");
    CreateAccountForm.classList.add("form--hidden");
  });
  LogInForm.addEventListener("submit", (e) => {
    e.preventDefault();

    setFormMessage(LogInForm, "error", "Invalid username/password");
  });
  document.querySelectorAll(".form__input").forEach((inputElement) => {
    inputElement.addEventListener("blur", (e) => {
      if (
        (e.target.id =
          "SignInUsername" &&
          e.target.value.input > 0 &&
          e.target.value.length < 10)
      ) {
        setInputError(inputElement, "Username must be atleast 10 character");
      }
    });
    inputElement.addEventListener("input", (e) => {
      clearInputError(inputElement);
    });
  });
});
