function My_Function() {
  let username = prompt("Please enter your name:", "");
  if (username === null) {
    username = "Invalid";
  }
  let usergender = prompt("Please enter your gender:", "");
  switch (useregender) {
    case "Male":
      usergender = "Male";
      break;
    case "Female":
      usergender = "Female";
      break;
      deafult:
      usergender = "null";

  }
  if (usergender === null) {
    usergender = "Invalid";
  }

  let userage = prompt("Please enter your age:", "");
  if (userage <= 0) {
    alert("Your Age Should Be More Than One And Not Equal To Zero ");
  }
  if (userage === null) {
    userage = "Invalid";
  }
  let userconfirm = confirm("do you want to skip the welcoming message?");
  if (userconfirm === false) {
    if (usergender === "Male") {
      alert(`Welcome Mr ${username}`);
    }
    else if (usergender === "Female") {
      alert(`Welcome Ms ${username}`);

    }
    else {
      alert(`Welcome ${username}`);

    }
  }

}
function Creating_User() {
  let userq1 = prompt("Are you feeling better today?", "");
  if (userq1 === null) {
    userq1 = "Invalid";
  }
  let userq2 = prompt("Are you feeling better today?", "");
  if (userq2 === null) {
    userq2 = "Invalid";
  }
  let userq3 = prompt("Are you feeling better today?", "");
  if (userq3 === null) {
    userq3 = "Invalid";
  }



Creating_User();

var userArr = [];
userArr.push(username);
userArr.push(usergender);
userArr.push(userage);
userArr.push(userq1);
userArr.push(userq2);
userArr.push(userq3);
for (var i = 0; i <= 5; i++) {
  console.log('Element [' + i + '}= ' + userArr[i]);
}
}
