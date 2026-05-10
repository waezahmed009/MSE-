const cursor = document.querySelector('.cursor-glow');

window.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX - 125 + 'px';
    cursor.style.top = e.clientY - 125 + 'px';
});


// =========================
// ROLLMATE DATABASE
// =========================

const rollmates = {

    "2513001": {
        name: "Shihab",
        rollmate: "2413001",
        whatsapp: "YOUR_WHATSAPP_LINK",
        facebook: "YOUR_FACEBOOK_LINK"
    },

    "2513002": {
        name: "Rahim",
        rollmate: "2413002",
        whatsapp: "YOUR_WHATSAPP_LINK",
        facebook: "YOUR_FACEBOOK_LINK"
    },

    "2513003": {
        name: "Karim",
        rollmate: "2413003",
        whatsapp: "YOUR_WHATSAPP_LINK",
        facebook: "YOUR_FACEBOOK_LINK"
    },

    "2513004": {
        name: "Sakib",
        rollmate: "2413004",
        whatsapp: "YOUR_WHATSAPP_LINK",
        facebook: "YOUR_FACEBOOK_LINK"
    },

    "2513005": {
        name: "Tamim",
        rollmate: "2413005",
        whatsapp: "YOUR_WHATSAPP_LINK",
        facebook: "YOUR_FACEBOOK_LINK"
    },

    "2513006": {
        name: "Rakib",
        rollmate: "2413006",
        whatsapp: "YOUR_WHATSAPP_LINK",
        facebook: "YOUR_FACEBOOK_LINK"
    },

    "2513007": {
        name: "Rumman",
        rollmate: "2413007",
        whatsapp: "YOUR_WHATSAPP_LINK",
        facebook: "YOUR_FACEBOOK_LINK"
    },

    "2513008": {
        name: "Ahnaf",
        rollmate: "2413008",
        whatsapp: "YOUR_WHATSAPP_LINK",
        facebook: "YOUR_FACEBOOK_LINK"
    },

    "2513009": {
        name: "Ahmed",
        rollmate: "2413009",
        whatsapp: "YOUR_WHATSAPP_LINK",
        facebook: "YOUR_FACEBOOK_LINK"
    },

    "2513010": {
        name: "Rakib Ahmed",
        rollmate: "2413010",
        whatsapp: "YOUR_WHATSAPP_LINK",
        facebook: "YOUR_FACEBOOK_LINK"
    },

    "2513061": {
        name: "Admin",
        rollmate: "ALL ACCESS",
        whatsapp: "YOUR_WHATSAPP_LINK",
        facebook: "YOUR_FACEBOOK_LINK"
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
                    <th>WhatsApp</th>
                    <th>Facebook</th>
                </tr>
        `;

        for (let key in rollmates) {

            table += `
                <tr>
                    <td>${key}</td>
                    <td>${rollmates[key].name}</td>
                    <td>${rollmates[key].rollmate}</td>

                    <td>
                        <a href="${rollmates[key].whatsapp}" target="_blank">
                            Chat
                        </a>
                    </td>

                    <td>
                        <a href="${rollmates[key].facebook}" target="_blank">
                            Profile
                        </a>
                    </td>
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
                    <th>WhatsApp</th>
                    <th>Facebook</th>
                </tr>

                <tr>
                    <td>${roll}</td>
                    <td>${rollmates[roll].name}</td>
                    <td>${rollmates[roll].rollmate}</td>

                    <td>
                        <a href="${rollmates[roll].whatsapp}" target="_blank">
                            Chat
                        </a>
                    </td>

                    <td>
                        <a href="${rollmates[roll].facebook}" target="_blank">
                            Profile
                        </a>
                    </td>
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
// SEARCH SENIOR BY NAME
// =========================

function searchSenior() {

    const input = document
        .getElementById("seniorInput")
        .value
        .trim()
        .toLowerCase();

    const resultDiv = document.getElementById("seniorResult");

    resultDiv.innerHTML = "";


    // EMPTY INPUT
    if (input === "") {

        resultDiv.innerHTML = `
        <div class="error">
            Please enter a name
        </div>
        `;

        return;
    }


    let found = false;


    // LOOP THROUGH DATABASE
    for (const roll in rollmates) {

        const student = rollmates[roll];


        // PARTIAL MATCH SEARCH
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

                <br>

                <a href="${student.whatsapp}" target="_blank">
                    WhatsApp
                </a>

                <br><br>

                <a href="${student.facebook}" target="_blank">
                    Facebook
                </a>

            </div>
            `;
        }
    }


    // NO RESULT
    if (!found) {

        resultDiv.innerHTML = `
        <div class="error">
            No matching name found
        </div>
        `;
    }
}
