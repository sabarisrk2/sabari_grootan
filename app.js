var url1 = "https://mockapi1.free.beeceptor.com/user1";
var url2 = "https://mockapi1.free.beeceptor.com/user2";
var url3 = "https://mockapi1.free.beeceptor.com/user3";
var url4 = "https://mockapi1.free.beeceptor.com/user4";
var url5 = "https://mockapi1.free.beeceptor.com/user5";

const doGet1 = () => {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", url1, true);
  xhr.onreadystatechange = () => {
    if (xhr.readyState == XMLHttpRequest.DONE) {
      getData1(JSON.parse(xhr.responseText));
    }
  };
  xhr.send();
};

doGet1(() => {
  console.log("Data Successfully Readed");
});

const doGet2 = () => {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", url2, true);
  xhr.onreadystatechange = () => {
    if (xhr.readyState == XMLHttpRequest.DONE) {
      getData2(JSON.parse(xhr.responseText));
    }
  };
  xhr.send();
};

doGet2(() => {
  console.log("Data Successfully Readed");
});

const doGet3 = () => {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", url3, true);
  xhr.onreadystatechange = () => {
    if (xhr.readyState == XMLHttpRequest.DONE) {
      getData3(JSON.parse(xhr.responseText));
    }
  };
  xhr.send();
};

doGet3(() => {
  console.log("Data Successfully Readed");
});

const doGet4 = () => {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", url4, true);
  xhr.onreadystatechange = () => {
    if (xhr.readyState == XMLHttpRequest.DONE) {
      getData4(JSON.parse(xhr.responseText));
    }
  };
  xhr.send();
};

doGet4(() => {
  console.log("Data Successfully Readed");
});

const doGet5 = () => {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", url5, true);
  xhr.onreadystatechange = () => {
    if (xhr.readyState == XMLHttpRequest.DONE) {
      getData5(JSON.parse(xhr.responseText));
    }
  };
  xhr.send();
};

doGet5(() => {
  console.log("Data Successfully Readed");
});

const getData1 = (data) => {
  var record = document.getElementById("record1");
  record.innerHTML = "";
  data.forEach((user1) => {
    let names = document.createElement("div");
    names.innerHTML = user1.name;
    record.appendChild(names);
  });

  record.onclick = function () {
    var detail = document.getElementById("details");
    detail.innerHTML = "";
    document.getElementById("myModal").style.display = "block";
    data.forEach((user1) => {
      var detail = document.getElementById("details");
      let names = document.createElement("div");
      let age = document.createElement("div");
      let dob = document.createElement("div");
      let first_name = document.createElement("div");
      let last_name = document.createElement("div");
      let add_1 = document.createElement("div");
      let add_2 = document.createElement("div");
      let add_3 = document.createElement("div");
      let phone = document.createElement("div");
      names.innerHTML = user1.name;
      age.innerHTML = user1.age;
      dob.innerHTML = user1.dob;
      first_name.innerHTML = user1.firstName;
      last_name.innerHTML = user1.lastName;
      add_1.innerHTML = user1.address_line1;
      add_2.innerHTML = user1.address_line2;
      add_3.innerHTML = user1.address_line3;
      phone.innerHTML = user1.phone;
      detail.appendChild(names);
      detail.appendChild(age);
      detail.appendChild(dob);
      detail.appendChild(first_name);
      detail.appendChild(last_name);
      detail.appendChild(last_name);
      detail.appendChild(add_1);
      detail.appendChild(add_2);
      detail.appendChild(add_3);
      detail.appendChild(phone);

      names.classList.add("nameDetail");
      age.classList.add("ageDetail");
      dob.classList.add("dobDetail");
      first_name.classList.add("firstNameDetail");
      last_name.classList.add("lastNameDetail");
      add_1.classList.add("add1Detail");
      add_2.classList.add("add2Detail");
      add_3.classList.add("add3Detail");
      phone.classList.add("phoneDetail");
    });
  };
};

const getData2 = (data) => {
  var record = document.getElementById("record2");
  record.innerHTML = "";
  data.forEach((user2) => {
    let names = document.createElement("div");
    names.innerHTML = user2.name;
    record.appendChild(names);
    names.classList.add("name2");
  });
  record.onclick = function () {
    var detail = document.getElementById("details");
    detail.innerHTML = "";
    document.getElementById("myModal").style.display = "block";
    data.forEach((user2) => {
      let names = document.createElement("div");
      let age = document.createElement("div");
      let dob = document.createElement("div");
      let first_name = document.createElement("div");
      let last_name = document.createElement("div");
      let add_1 = document.createElement("div");
      let add_2 = document.createElement("div");
      let add_3 = document.createElement("div");
      let phone = document.createElement("div");
      names.innerHTML = user2.name;
      age.innerHTML = user2.age;
      dob.innerHTML = user2.dob;
      first_name.innerHTML = user2.firstName;
      last_name.innerHTML = user2.lastName;
      add_1.innerHTML = user2.address_line1;
      add_2.innerHTML = user2.address_line2;
      add_3.innerHTML = user2.address_line3;
      phone.innerHTML = user2.phone;
      detail.appendChild(names);
      detail.appendChild(age);
      detail.appendChild(dob);
      detail.appendChild(first_name);
      detail.appendChild(last_name);
      detail.appendChild(add_1);
      detail.appendChild(add_2);
      detail.appendChild(add_3);
      detail.appendChild(phone);

      names.classList.add("nameDetail");
      age.classList.add("ageDetail");
      dob.classList.add("dobDetail");
      first_name.classList.add("firstNameDetail");
      last_name.classList.add("lastNameDetail");
      add_1.classList.add("add1Detail");
      add_2.classList.add("add2Detail");
      add_3.classList.add("add3Detail");
      phone.classList.add("phoneDetail");
    });
  };
};

const getData3 = (data) => {
  var record = document.getElementById("record3");
  record.innerHTML = "";
  data.forEach((user3) => {
    let names = document.createElement("div");
    names.innerHTML = user3.name;
    record.appendChild(names);
    names.classList.add("name3");
  });
  record.onclick = function () {
    var detail = document.getElementById("details");
    detail.innerHTML = "";
    document.getElementById("myModal").style.display = "block";
    data.forEach((user3) => {
      let names = document.createElement("div");
      let age = document.createElement("div");
      let dob = document.createElement("div");
      let first_name = document.createElement("div");
      let last_name = document.createElement("div");
      let add_1 = document.createElement("div");
      let add_2 = document.createElement("div");
      let add_3 = document.createElement("div");
      let phone = document.createElement("div");
      names.innerHTML = user3.name;
      age.innerHTML = user3.age;
      dob.innerHTML = user3.dob;
      first_name.innerHTML = user3.firstName;
      last_name.innerHTML = user3.lastName;
      add_1.innerHTML = user3.address_line1;
      add_2.innerHTML = user3.address_line2;
      add_3.innerHTML = user3.address_line3;
      phone.innerHTML = user3.phone;
      detail.appendChild(names);
      detail.appendChild(age);
      detail.appendChild(dob);
      detail.appendChild(first_name);
      detail.appendChild(last_name);
      detail.appendChild(add_1);
      detail.appendChild(add_2);
      detail.appendChild(add_3);
      detail.appendChild(phone);

      names.classList.add("nameDetail");
      age.classList.add("ageDetail");
      dob.classList.add("dobDetail");
      first_name.classList.add("firstNameDetail");
      last_name.classList.add("lastNameDetail");
      add_1.classList.add("add1Detail");
      add_2.classList.add("add2Detail");
      add_3.classList.add("add3Detail");
      phone.classList.add("phoneDetail");
    });
  };
};

const getData4 = (data) => {
  var record = document.getElementById("record4");
  record.innerHTML = "";
  data.forEach((user4) => {
    let names = document.createElement("div");
    names.innerHTML = user4.name;
    record.appendChild(names);
    names.classList.add("name4");
  });
  record.onclick = function () {
    var detail = document.getElementById("details");
    detail.innerHTML = "";
    document.getElementById("myModal").style.display = "block";
    data.forEach((user4) => {
      let names = document.createElement("div");
      let age = document.createElement("div");
      let dob = document.createElement("div");
      let first_name = document.createElement("div");
      let last_name = document.createElement("div");
      let add_1 = document.createElement("div");
      let add_2 = document.createElement("div");
      let add_3 = document.createElement("div");
      let phone = document.createElement("div");
      names.innerHTML = user4.name;
      age.innerHTML = user4.age;
      dob.innerHTML = user4.dob;
      first_name.innerHTML = user4.firstName;
      last_name.innerHTML = user4.lastName;
      add_1.innerHTML = user4.address_line1;
      add_2.innerHTML = user4.address_line2;
      add_3.innerHTML = user4.address_line3;
      phone.innerHTML = user4.phone;
      detail.appendChild(names);
      detail.appendChild(age);
      detail.appendChild(dob);
      detail.appendChild(first_name);
      detail.appendChild(last_name);
      detail.appendChild(add_1);
      detail.appendChild(add_2);
      detail.appendChild(add_3);
      detail.appendChild(phone);

      names.classList.add("nameDetail");
      age.classList.add("ageDetail");
      dob.classList.add("dobDetail");
      first_name.classList.add("firstNameDetail");
      last_name.classList.add("lastNameDetail");
      add_1.classList.add("add1Detail");
      add_2.classList.add("add2Detail");
      add_3.classList.add("add3Detail");
      phone.classList.add("phoneDetail");
    });
  };
};

const getData5 = (data) => {
  var record = document.getElementById("record5");
  record.innerHTML = "";
  data.forEach((user5) => {
    let names = document.createElement("div");
    names.innerHTML = user5.name;
    record.appendChild(names);
    names.classList.add("name5");
  });
  record.onclick = function () {
    var detail = document.getElementById("details");
    detail.innerHTML = "";
    document.getElementById("myModal").style.display = "block";
    data.forEach((user5) => {
      let names = document.createElement("div");
      let age = document.createElement("div");
      let dob = document.createElement("div");
      let first_name = document.createElement("div");
      let last_name = document.createElement("div");
      let add_1 = document.createElement("div");
      let add_2 = document.createElement("div");
      let add_3 = document.createElement("div");
      let phone = document.createElement("div");
      names.innerHTML = user5.name;
      age.innerHTML = user5.age;
      dob.innerHTML = user5.dob;
      first_name.innerHTML = user5.firstName;
      last_name.innerHTML = user5.lastName;
      add_1.innerHTML = user5.address_line1;
      add_2.innerHTML = user5.address_line2;
      add_3.innerHTML = user5.address_line3;
      phone.innerHTML = user5.phone;
      detail.appendChild(names);
      detail.appendChild(age);
      detail.appendChild(dob);
      detail.appendChild(first_name);
      detail.appendChild(last_name);
      detail.appendChild(add_1);
      detail.appendChild(add_2);
      detail.appendChild(add_3);
      detail.appendChild(phone);

      names.classList.add("nameDetail");
      age.classList.add("ageDetail");
      dob.classList.add("dobDetail");
      first_name.classList.add("firstNameDetail");
      last_name.classList.add("lastNameDetail");
      add_1.classList.add("add1Detail");
      add_2.classList.add("add2Detail");
      add_3.classList.add("add3Detail");
      phone.classList.add("phoneDetail");
    });
  };
};

var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];
span.onclick = function () {
  // Close button in model box
  modal.style.display = "none";
};
window.onclick = function (event) {
  if (event.target == modal) {
    // When we over other than model box
    modal.style.display = "none";
  }
};
