

const submitButton = document.getElementById("submit");

document.addEventListener("DOMContentLoaded", () => {
 /// console.log("vscode");
  //localStorage.getItem();

  axios.get("https://crudcrud.com/api/3d9abd23494248618e53804302322baa/studentData").
  then((response)=>{
    console.log(response);
    for(var i=0;i<response.data.length;i++){
      addNewLineElement(response.data[i]);
    }

  }).catch((err)=>{
    console.log(err)

  })
});

// if (document.readyState !== "loading") {
  

//   var keys = Object.keys(localStorage), //taking out all the keys that are there in the local storage
//     i = keys.length; //6
//   console.log("keys", keys);
//   let stringifiedDetailsOfPeople, detailsOfPeople;

//   // 6 to 0
//   Object.keys(localStorage).forEach((key) => {
//     //i==2
//     if (key.match(/userDetails/g)) {
//       //we only care about keys that start with userDetails
//       //this is called regex matching
//       stringifiedDetailsOfPeople = localStorage.getItem(key);
//       console.log("stringifiedDetailsOfPeople", stringifiedDetailsOfPeople);
//       detailsOfPeople = JSON.parse(stringifiedDetailsOfPeople);
//       console.log("details", detailsOfPeople);

//       addNewLineElement(detailsOfPeople);
//     }
//   });
// }
// const listOfPeople = []
submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  const emailId = document.getElementById("email").value;
  const name = document.getElementById("name").value;
  if (emailId.length > 0 && name.length > 0) {
    const object = {
      name: name,
      emailId: emailId //unique
    };
    //localStorage.setItem("userDetails" + emailId, JSON.stringify(object));
    // localStorage.setItem("userDetailEmail" + emailId, emailId);
    // listOfPeople.push(object)

    axios.post("https://crudcrud.com/api/3d9abd23494248618e53804302322baa/studentData",object).
    then((respone)=>{
      addNewLineElement(respone.data);
      console.log(respone)})
     
    .catch((err)=>{console.log(err)})
    //document.body.innerHTML= document.body.innerHTML+"<h4>sonething went wrong</h4>"
    //
  }
});





function addNewLineElement(object) {
  const ul = document.getElementById("listOfPeople");
  const li = document.createElement("li");
  li.appendChild(
    document.createTextNode(object.name + " " + object.emailId + " ")
  );
  // li.appendChild()
  console.log(document.createElement("i"));
  const a1 = document.createElement("input");
  a1.id = "sonu";
  a1.type = "button";
  a1.value = "Edit";
  a1.addEventListener("click", () => {
    console.log(object);
    document.getElementById("name").value = object.name;
    document.getElementById("email").value = object.emailId;
    li.remove();
  });
  a1.className = "delete";
  a1.style.border = "2px solid green";
  console.log(a1);
  li.appendChild(a1);

  const a = document.createElement("input");
  a.type = "button";
  a.value = "delete";
  a.addEventListener("click", () => {
    localStorage.removeItem("userDetails" + object.emailId);
    // axios.delete(`${apiendpoint}/registeruser/${object._id}`);git
    li.remove();
  });
  a.className = "delete";
  a.style.border = "2px solid red";
  console.log(a);
  li.appendChild(a);
  console.log(li);

  ul.appendChild(li);
}
