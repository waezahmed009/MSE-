const cursor = document.querySelector('.cursor-glow');

window.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX - 125 + 'px';
    cursor.style.top = e.clientY - 125 + 'px';
});


// =========================
// DATABASE
// =========================

const rollmates = {

    "2513001": {
        name: "Shihab",
        rollmate: "2413001",
        whatsapp: "#",
        facebook: "#"
    },

    "2513002": {
        name: "Rumman",
        rollmate: "2413002",
        whatsapp: "#",
        facebook: "#"
    },

    "2513003": {
        name: "Rakib",
        rollmate: "2413003",
        whatsapp: "#",
        facebook: "#"
    },

    "2513004": {
        name: "Ahmed",
        rollmate: "2413004",
        whatsapp: "#",
        facebook: "#"
    },

    "2513005": {
        name: "Sakib",
        rollmate: "2413005",
        whatsapp: "#",
        facebook: "#"
    },

    "2513006": {
        name: "Tamim",
        rollmate: "2413006",
        whatsapp: "#",
        facebook: "#"
    },

    "2513007": {
        name: "Ahnaf",
        rollmate: "2413007",
        whatsapp: "#",
        facebook: "#"
    },

    "2513008": {
        name: "Karim",
        rollmate: "2413008",
        whatsapp: "#",
        facebook: "#"
    },

    "2513009": {
        name: "Nayeem",
        rollmate: "2413009",
        whatsapp: "#",
        facebook: "#"
    },

    "2513010": {
        name: "Shanto",
        rollmate: "2413010",
        whatsapp: "#",
        facebook: "#"
    },

    "2513011": {
        name: "Jahid",
        rollmate: "2413011",
        whatsapp: "#",
        facebook: "#"
    },

    "2513012": {
        name: "Rifat",
        rollmate: "2413012",
        whatsapp: "#",
        facebook: "#"
    },

    "2513013": {
        name: "Mahin",
        rollmate: "2413013",
        whatsapp: "#",
        facebook: "#"
    },

    "2513014": {
        name: "Tasin",
        rollmate: "2413014",
        whatsapp: "#",
        facebook: "#"
    },

    "2513015": {
        name: "Fahim",
        rollmate: "2413015",
        whatsapp: "#",
        facebook: "#"
    },

    "2513061": {
        name: "Admin",
        rollmate: "ALL ACCESS",
        whatsapp: "#",
        facebook: "#"
    }

};


// =========================
// SEARCH BY ROLL
// =========================

function searchRoll() {

    const roll = document
        .getElementById('rollInput')
        .value
        .trim();

    const result = document.getElementById('result');


    // ADMIN ACCESS
    if (roll === '2513061') {

        let table = `
        <div class="result-card">

            <table>

                <tr>
                    <th>Your Roll</th>
                    <th>Name</th>
                    <th>Rollmate</th>
                </tr>
        `;

        for (let key in rollmates) {

            table += `
                <tr>
                    <td>${key}</td>
                    <td>${rollmates[key].name}</td>
                    <td>${rollmates[key].rollmate}</td>
                </tr>
            `;
        }

        table += `
            </table>

        </div>
        `;

        result.innerHTML = table;

        return;
    }


    // NORMAL SEARCH
    if (rollmates[roll]) {

        result.innerHTML = `
        <div class="result-card">

            <table>

                <tr>
                    <th>Your Roll</th>
                    <th>Name</th>
                    <th>Rollmate</th>
                </tr>

                <tr>
                    <td>${roll}</td>
                    <td>${rollmates[roll].name}</td>
                    <td>${rollmates[roll].rollmate}</td>
                </tr>

            </table>

        </div>
        `;

    } else {

        result.innerHTML = `
        <div class="error">
            Wrong Roll Number
        </div>
        `;
    }
}



// =========================
// SEARCH BY NAME
// =========================

function searchSenior() {

    const input = document
        .getElementById("seniorInput")
        .value
        .trim()
        .toLowerCase();

    const resultDiv = document.getElementById("seniorResult");

    resultDiv.innerHTML = "";


    if (input === "") {

        resultDiv.innerHTML = `
        <div class="error">
            Please enter a name
        </div>
        `;

        return;
    }


    let found = false;


    for (const roll in rollmates) {

        const student = rollmates[roll];

        if (
            student.name &&
            student.name.toLowerCase().includes(input)
        ) {

            found = true;

            resultDiv.innerHTML += `

            <div class="senior-card">

                <h3>${student.name}</h3>

                <p>
                    <strong>Your Roll:</strong> ${roll}
                </p>

                <p>
                    <strong>Rollmate:</strong> ${student.rollmate}
                </p>

            </div>
            `;
        }
    }


    if (!found) {

        resultDiv.innerHTML = `
        <div class="error">
            No matching name found
        </div>
        `;
    }
}
