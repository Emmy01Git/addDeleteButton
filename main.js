function saveEditedUser(event) {
    const liElem = event.target.parentNode;
    const spanElem = liElem.querySelector("span");
    const editName = event.target.previousElementSibling.previousElementSibling.value;
    const editEmail = event.target.previousElementSibling.value;
    const editPhoneNumber = event.target.nextElementSibling.value;
    const obj = {
      name: editName,
      email: editEmail,
      phonenumber: editPhoneNumber
    };
    localStorage.setItem("userDetails", JSON.stringify(obj));
    event.target.innerText = "Edit";
    event.target.onclick = editUser;
    spanElem.innerHTML = `${editName} - ${editEmail} - ${editPhoneNumber}`;
  }
  