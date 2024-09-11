window.onload = function () {
    let scene = 0;
    let scenes = [
        document.getElementById("sidebarScene1"),
        document.getElementById("sidebarScene2"),
        document.getElementById("sidebarScene3")
    ];
    let timer = null;

    document.getElementById("sidebarReplay").addEventListener("click", play);
    function changeScene() {
        switch (scene) {
            case 0:
                scenes[0].style.visibility = "visible";
                scenes[1].style.visibility = "hidden";
                scenes[2].style.visibility = "hidden";
                break;
            case 1:
                scenes[0].style.visibility = "hidden";
                scenes[1].style.visibility = "visible";
                scenes[2].style.visibility = "hidden";
                break;

            case 2:
                scenes[0].style.visibility = "hidden";
                scenes[1].style.visibility = "hidden";
                scenes[2].style.visibility = "visible";
                break;
            default:
                break;
        }
    }

    function animateSidebar() {
        scene++;
        if (scene >= scenes.length) {
            clearInterval(timer);
        }
        changeScene();
    }

    function play() {
        scene = 0;
        changeScene();
        timer = setInterval(animateSidebar, 3000);
    }

    play();
    
}

const formPage1 = document.getElementById("form-page1");
const formPage2 = document.getElementById("form-page2");
const formPage3 = document.getElementById("form-page3");
const formPage4 = document.getElementById("form-page4");

const progressBar = document.querySelector("progress");

const summaryAttendance = document.getElementById("summary-attendance");
const summaryContact = document.getElementById("summary-contact");
const summaryTicket = document.getElementById("summary-ticket");


const formData = document.getElementById("collected-data");

function showPage(pageNumber) {
switch (pageNumber) {
    case 1:
        formPage1.style.display = 'block';
        formPage2.style.display = 'none';
        formPage3.style.display = 'none';
        formPage4.style.display = 'none';
        progressBar.value = 10;
        break;

    case 2:
        formPage1.style.display = 'none';
        formPage2.style.display = 'block';
        formPage3.style.display = 'none';
        formPage4.style.display = 'none';
        progressBar.value = 50;
        break;

    case 3:
        formPage1.style.display = 'none';
        formPage2.style.display = 'none';
        formPage3.style.display = 'block';
        formPage4.style.display = 'none';
        progressBar.value = 70;
        break;

    case 4:
        formPage1.style.display = 'none';
        formPage2.style.display = 'none';
        formPage3.style.display = 'none';
        formPage4.style.display = 'block';
        progressBar.value = 100;
        updateSummary();
        break;

    default:
        break;
}
}

function getFormData() {
let data = {
    date: document.getElementById('date-attendance').value,
    adults: document.getElementById('adults-count').value,
    children: document.getElementById('children-count').value,
    contactName: document.getElementById('contact-name').value,
    contactEmail: document.getElementById('contact-email').value,
    ticketColor: document.getElementById('ticket-color').value,
    locker: document.querySelector('input[name="locker"]:checked').value,
    termsAccepted: document.getElementById('terms').checked
};

return data = {

    attendance: date + " adults: " + adults + " children: " + children,
    contact: contactName + " " + contactEmail,
    ticket: ticketColor + " " + locker

};
}

function updateSummary() {
const data = getFormData();

summaryAttendance.innerHTML = data.attendance;
summaryContact.innerHTML = data.contact;
summaryTicket.innerHTML = data.ticket;
}

function submitData() {
const dataRow = document.createElement("tr");
const cellAttendance = document.createElement("td");
const cellContact = document.createElement("td");
const cellTicket = document.createElement("td");

dataRow.appendChild(cellAttendance);
dataRow.appendChild(cellContact);
dataRow.appendChild(cellTicket);

const data = getFormData();

cellAttendance.innerHTML = data.attendance;
cellContact.innerHTML = data.contact;
cellTicket.innerHTML = data.ticket;

formData.appendChild(dataRow);

showPage(1);
}

