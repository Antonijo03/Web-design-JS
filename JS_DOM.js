var igracica = ['Ashleigh Barty', 'Aryna Sabalenka', 'Garbine Muguruza', 'Karolina Pliskova', 'Barbora Krejcikova', 'Maria Sakkari', 'Anett Kontaveit', 'Paula Badosa', 'Iga Swiatek', 'Ons Jabeur'];
var drzava = ['Australija', 'Bjelorusija', 'Španjolska', 'Češka', 'Češka', 'Grčka', 'Estonija', 'Španjolska', 'Poljska', 'Tunis'];
var dob = [24, 23, 28, 29, 25, 26, 25, 24, 20, 27 ];
var bodovi = [7582, 6380, 5685, 5135, 5008, 4385, 4351, 3849, 3786, 3455];

function opacity(x) {
    x.style.opacity = 0.2;
}

function opacity2(x) {
    x.style.opacity = 1;
}

let tablica = "<table><thead><tr><th>Ime</th><th>Država</th><th>Dob</th><th>Bodovi</th></tr></thead>";

function pretrazi() {
    input = document.getElementById("mojInput");
    ime = input.value;

    for (let i = 0; i < igracica.length; i++) {
        if (ime == igracica[i]) {
            tablica += "<tr>";
            tablica += "<td>" + igracica[i].toString() + "</td>";
            tablica += "<td>" + drzava[i].toString() + "</td>";
            tablica += "<td>" + dob[i].toString() + "</td>";
            tablica += "<td>" + bodovi[i].toString() + "</td>";
            tablica += "</tr>";
            tablica += "</table>";
            document.getElementById("tablica2").innerHTML = tablica;
            tablica = "<table><thead><tr><th>Ime</th><th>Država</th><th>Dob</th><th>Bodovi</th></tr></thead>";
            break;
        }
    }
}

window.onload = init();