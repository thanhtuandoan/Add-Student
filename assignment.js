let student = [];

let $ = function (id) {
    return document.getElementById(id);
}
// validate
let validate = function () {
    let check = true;
    let id = $("id").value;
    let name = $("name").value;
    let birthday = $("birthday").value;
    let phone = $("phone").value;
    if (id === "") {
        $("id_error").innerHTML = "Hãy nhập id";
        check = false;
    }

    if (name === "") {
        $("name_error").innerHTML = "Hãy nhập tên";
        check = false;
    } else if ((name.length < 5) || (name.length > 25)) {
        $("name_error").innerHTML = "Tên phải có độ dài từ 5 đến 25 kí tự";
        check = false;
    }

    if (birthday === "") {
        $("birthday_error").innerHTML = "Hãy nhập ngày sinh";
        check = false;
    } else if (birthday !== "") {
        let yearOfBirth = birthday.split("/");
        const d = new Date();
        let currentAge = Number(d.getFullYear()) - Number(yearOfBirth[2]);
        if (currentAge < 18) {
            $("birthday_error").innerHTML = "Tuổi của bạn phải từ 18 trở lên";
            check = false;
        }

    }

    if (phone === "") {
        $("phone_error").innerHTML = "Hãy nhập số điện thoại";
        check = false;
    } else if (phone !== "") {
        let phoneNumber = phone.split("");
        if ((phoneNumber.length > 10) || (phoneNumber.length < 10)) {
            $("phone_error").innerHTML = "Số điện thoại phải là 10 số";
            check = false;
        }
    }
    return check;
}

// add student
let addStudent = function () {
    let id = $("id").value;
    let name = $("name").value;
    let birthday = $("birthday").value;
    let phone = $("phone").value;

    studentObject = {
        id: id,
        name: name,
        birthday: birthday,
        phone: phone
    }

    studentData = localStorage.getItem("dataStudent") || [];
    let valid = validate();
    if (valid) {
        if (studentData.length != 0) {
            studentJson = JSON.parse(studentData);
            let check = true;
            for (let i in studentJson) {
                if (id === studentJson[i].id) {
                    studentJson[i].name = name;
                    studentJson[i].birthday = birthday;
                    studentJson[i].phone = phone;
                    check = false;
                    break;
                }
            }
            if (check === true) {
                studentJson.push(studentObject);
                localStorage.setItem("dataStudent", JSON.stringify(studentJson)) || [];

            } else {
                localStorage.setItem("dataStudent", JSON.stringify(studentJson)) || [];
            }
        } else {
            student.push(studentObject);
            localStorage.setItem("dataStudent", JSON.stringify(student)) || [];
        }
    }
    showStudent();
}

let showStudent = function () {
    studentData = localStorage.getItem("dataStudent") || [];
    if (studentData.length !== 0) {
        let studentJs = JSON.parse(studentData);
        html = "<tr><th>ID</th><th>Name</th><th>Birthday</th><th>Phone</th></tr>";
        for (let i in studentJs) {
            html = html +
                "<tr><td>" + studentJs[i].id + "</td>" +
                "<td>" + studentJs[i].name + "</td>" +
                "<td>" + studentJs[i].birthday + "</td>" +
                "<td>" + studentJs[i].phone + "</td> </tr>"
        }
        $("tableStudent").innerHTML = html;
    }
}
window.onload = function () {
    $("add").onclick = validate;
    showStudent();
    $("add").onclick = addStudent;
}