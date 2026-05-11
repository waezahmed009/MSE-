const cursor = document.querySelector('.cursor-glow');

window.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX - 125 + 'px';
    cursor.style.top = e.clientY - 125 + 'px';
});


// ─── SINGLE SOURCE OF TRUTH ───────────────────────────────────────────────────
// NAME key is consistent (lowercase) throughout.
// Roll 2513061 is the "ALL ACCESS" admin roll.

const rollmates = {

    "2513001": {
        namereal:"kafi",
        rollmate: "2413001",
        name: "Shihab Hossain",   
        whatsapp: "YOUR_WHATSAPP_LINK",
        facebook: "YOUR_FACEBOOK_LINK"
    },
    "2513002": {
        namereal:"kafi",
        name: "Tanvir Ahmed",
        rollmate: "2413002",
        whatsapp: "YOUR_WHATSAPP_LINK",
        facebook: "YOUR_FACEBOOK_LINK"
    },
    "2513003": {
        namereal:"kafi",
        name: "Mehedi Hassan",
        rollmate: "2413003",
        whatsapp: "YOUR_WHATSAPP_LINK",
        facebook: "YOUR_FACEBOOK_LINK"
    },
    "2513004": {
        namereal:"kafi",
        name: "Rakibul Islam",
        rollmate: "2413004",
        whatsapp: "YOUR_WHATSAPP_LINK",
        facebook: "YOUR_FACEBOOK_LINK"
    },
    "2513005": {
        namereal:"kafi",
        name: "Sabbir Rahman",
        rollmate: "2413005",
        whatsapp: "YOUR_WHATSAPP_LINK",
        facebook: "YOUR_FACEBOOK_LINK"
    },
    "2513006": {
        namereal:"kafi",
        name: "Nusrat Jahan",
        rollmate: "2413006",
        whatsapp: "YOUR_WHATSAPP_LINK",
        facebook: "YOUR_FACEBOOK_LINK"
    },
    "2513007": {
        namereal:"kafi",
        name: "Fariha Tasnim",
        rollmate: "2413007",
        whatsapp: "YOUR_WHATSAPP_LINK",
        facebook: "YOUR_FACEBOOK_LINK"
    },
    "2513008": {
        namereal:"kafi",
        name: "Imran Hossain",
        rollmate: "2413008",
        whatsapp: "YOUR_WHATSAPP_LINK",
        facebook: "YOUR_FACEBOOK_LINK"
    },
    "2513009": {
        namereal:"kafi",
        name: "Sourov Dey",
        rollmate: "2413009",
        whatsapp: "YOUR_WHATSAPP_LINK",
        facebook: "YOUR_FACEBOOK_LINK"
    },
    "2513010": {
        namereal:"kafi",
        name: "Tahmina Akter",
        rollmate: "2413010",
        whatsapp: "YOUR_WHATSAPP_LINK",
        facebook: "YOUR_FACEBOOK_LINK"
    },
    "2513011": {
        namereal:"kafi",
        name: "Arif Billah",
        rollmate: "2413011",
        whatsapp: "YOUR_WHATSAPP_LINK",
        facebook: "YOUR_FACEBOOK_LINK"
    },
    "2513012": {
        namereal:"kafi",
        name: "Nazmul Haque",
        rollmate: "2413012",
        whatsapp: "YOUR_WHATSAPP_LINK",
        facebook: "YOUR_FACEBOOK_LINK"
    },
    "2513013": {
        namereal:"kafi",
        name: "Sumaiya Khanam",
        rollmate: "2413013",
        whatsapp: "YOUR_WHATSAPP_LINK",
        facebook: "YOUR_FACEBOOK_LINK"
    },
    "2513014": {
        namereal:"kafi",
        name: "Jubayer Ahmed",
        rollmate: "2413014",
        whatsapp: "YOUR_WHATSAPP_LINK",
        facebook: "YOUR_FACEBOOK_LINK"
    },
    "2513015": {
        namereal:"kafi",
        name: "Lamia Sultana",
        rollmate: "2413015",
        whatsapp: "YOUR_WHATSAPP_LINK",
        facebook: "YOUR_FACEBOOK_LINK"
    },
    "2513016": {
        namereal:"kafi",
        name: "Rifat Hasan",
        rollmate: "2413016",
        whatsapp: "YOUR_WHATSAPP_LINK",
        facebook: "YOUR_FACEBOOK_LINK"
    },
    "2513017": {
        namereal:"kafi",
        name: "Maisha Maliha",
        rollmate: "2413017",
        whatsapp: "YOUR_WHATSAPP_LINK",
        facebook: "YOUR_FACEBOOK_LINK"
    },
    "2513018": {
        namereal:"kafi",
        name: "Raihanul Kabir",
        rollmate: "2413018",
        whatsapp: "YOUR_WHATSAPP_LINK",
        facebook: "YOUR_FACEBOOK_LINK"
    },
    "2513019": {
        namereal:"kafi",
        name: "Shanta Islam",
        rollmate: "2413019",
        whatsapp: "YOUR_WHATSAPP_LINK",
        facebook: "YOUR_FACEBOOK_LINK"
    },
    "2513020": {
        namereal:"kafi",
        name: "Touhidul Alam",
        rollmate: "2413020",
        whatsapp: "YOUR_WHATSAPP_LINK",
        facebook: "YOUR_FACEBOOK_LINK"
    },
    "2513021": {
        namereal:"kafi",
        name: "Nadia Afrin",
        rollmate: "2413021",
        whatsapp: "YOUR_WHATSAPP_LINK",
        facebook: "YOUR_FACEBOOK_LINK"
    },
    "2513022": {
        namereal:"kafi",
        name: "Shahriar Kabir",
        rollmate: "2413022",
        whatsapp: "YOUR_WHATSAPP_LINK",
        facebook: "YOUR_FACEBOOK_LINK"
    },
    "2513023": {
        namereal:"kafi",
        name: "Israt Jahan",
        rollmate: "2413023",
        whatsapp: "YOUR_WHATSAPP_LINK",
        facebook: "YOUR_FACEBOOK_LINK"
    },
    "2513024": {
        namereal:"kafi",
        name: "Minhajul Islam",
        rollmate: "2413024",
        whatsapp: "YOUR_WHATSAPP_LINK",
        facebook: "YOUR_FACEBOOK_LINK"
    },
    "2513025": {
        namereal:"kafi",
        name: "Tanjila Akter",
        rollmate: "2413025",
        whatsapp: "YOUR_WHATSAPP_LINK",
        facebook: "YOUR_FACEBOOK_LINK"
    },
    "2513026": {
        namereal:"kafi",
        name: "Asif Iqbal",
        rollmate: "2413026",
        whatsapp: "YOUR_WHATSAPP_LINK",
        facebook: "YOUR_FACEBOOK_LINK"
    },
    "2513027": {
        namereal:"kafi",
        name: "Priya Saha",
        rollmate: "2413027",
        whatsapp: "YOUR_WHATSAPP_LINK",
        facebook: "YOUR_FACEBOOK_LINK"
    },
    "2513028": {
        namereal:"kafi",
        name: "Mushfiqur Rahman",
        rollmate: "2413028",
        whatsapp: "YOUR_WHATSAPP_LINK",
        facebook: "YOUR_FACEBOOK_LINK"
    },
    "2513029": {
        namereal:"kafi",
        name: "Bristy Roy",
        rollmate: "2413029",
        whatsapp: "YOUR_WHATSAPP_LINK",
        facebook: "YOUR_FACEBOOK_LINK"
    },
    "2513030": {
        namereal:"kafi",
        name: "Zahirul Hasan",
        rollmate: "2413030",
        whatsapp: "YOUR_WHATSAPP_LINK",
        facebook: "YOUR_FACEBOOK_LINK"
    },
    "2513031": {
        namereal:"kafi",
        name: "Sadia Sultana",
        rollmate: "2413031",
        whatsapp: "YOUR_WHATSAPP_LINK",
        facebook: "YOUR_FACEBOOK_LINK"
    },
    "2513032": {
        namereal:"kafi",
        name: "Kawsar Hamid",
        rollmate: "2413032",
        whatsapp: "YOUR_WHATSAPP_LINK",
        facebook: "YOUR_FACEBOOK_LINK"
    },
    "2513033": {
        namereal:"kafi",
        name: "Tamanna Yesmin",
        rollmate: "2413033",
        whatsapp: "YOUR_WHATSAPP_LINK",
        facebook: "YOUR_FACEBOOK_LINK"
    },
    "2513034": {
        namereal:"kafi",
        name: "Bipul Chandra",
        rollmate: "2413034",
        whatsapp: "YOUR_WHATSAPP_LINK",
        facebook: "YOUR_FACEBOOK_LINK"
    },
    "2513035": {
        namereal:"kafi",
        name: "Sharmin Akter",
        rollmate: "2413035",
        whatsapp: "YOUR_WHATSAPP_LINK",
        facebook: "YOUR_FACEBOOK_LINK"
    },
    "2513036": {
        namereal:"kafi",
        name: "Morshed Alam",
        rollmate: "2413036",
        whatsapp: "YOUR_WHATSAPP_LINK",
        facebook: "YOUR_FACEBOOK_LINK"
    },
    "2513037": {
        namereal:"kafi",
        name: "Roksana Begum",
        rollmate: "2413037",
        whatsapp: "YOUR_WHATSAPP_LINK",
        facebook: "YOUR_FACEBOOK_LINK"
    },
    "2513038": {
        namereal:"kafi",
        name: "Golam Rabbani",
        rollmate: "2413038",
        whatsapp: "YOUR_WHATSAPP_LINK",
        facebook: "YOUR_FACEBOOK_LINK"
    },
    "2513039": {
        namereal:"kafi",
        name: "Monira Khatun",
        rollmate: "2413039",
        whatsapp: "YOUR_WHATSAPP_LINK",
        facebook: "YOUR_FACEBOOK_LINK"
    },
    "2513040": {
        namereal:"kafi",
        name: "Rezaul Karim",
        rollmate: "2413040",
        whatsapp: "YOUR_WHATSAPP_LINK",
        facebook: "YOUR_FACEBOOK_LINK"
    },
    "2513041": {
        namereal:"kafi",
        name: "Fahmida Nasrin",
        rollmate: "2413041",
        whatsapp: "YOUR_WHATSAPP_LINK",
        facebook: "YOUR_FACEBOOK_LINK"
    },
    "2513042": {
        namereal:"kafi",
        name: "Towfiq Hasan",
        rollmate: "2413042",
        whatsapp: "YOUR_WHATSAPP_LINK",
        facebook: "YOUR_FACEBOOK_LINK"
    },
    "2513043": {
        namereal:"kafi",
        name: "Sufia Khanam",
        rollmate: "2413043",
        whatsapp: "YOUR_WHATSAPP_LINK",
        facebook: "YOUR_FACEBOOK_LINK"
    },
    "2513044": {
        namereal:"kafi",
        name: "Mosaddek Hossain",
        rollmate: "2413044",
        whatsapp: "YOUR_WHATSAPP_LINK",
        facebook: "YOUR_FACEBOOK_LINK"
    },
    "2513045": {
        namereal:"kafi",
        name: "Afsana Mimi",
        rollmate: "2413045",
        whatsapp: "YOUR_WHATSAPP_LINK",
        facebook: "YOUR_FACEBOOK_LINK"
    },
    "2513046": {
        namereal:"kafi",
        name: "Saiful Islam",
        rollmate: "2413046",
        whatsapp: "YOUR_WHATSAPP_LINK",
        facebook: "YOUR_FACEBOOK_LINK"
    },
    "2513047": {
        namereal:"kafi",
        name: "Rabeya Khatun",
        rollmate: "2413047",
        whatsapp: "YOUR_WHATSAPP_LINK",
        facebook: "YOUR_FACEBOOK_LINK"
    },
    "2513048": {
        namereal:"kafi",
        name: "Kamruzzaman Siddique",
        rollmate: "2413048",
        whatsapp: "YOUR_WHATSAPP_LINK",
        facebook: "YOUR_FACEBOOK_LINK"
    },
    "2513049": {
        namereal:"kafi",
        name: "Halima Akter",
        rollmate: "2413049",
        whatsapp: "YOUR_WHATSAPP_LINK",
        facebook: "YOUR_FACEBOOK_LINK"
    },
    "2513050": {
        namereal:"kafi",
        name: "Mahmudul Hasan",
        rollmate: "2413050",
        whatsapp: "YOUR_WHATSAPP_LINK",
        facebook: "YOUR_FACEBOOK_LINK"
    },
    "2513051": {
        namereal:"kafi",
        name: "Parvin Akter",
        rollmate: "2413051",
        whatsapp: "YOUR_WHATSAPP_LINK",
        facebook: "YOUR_FACEBOOK_LINK"
    },
    "2513052": {
        namereal:"kafi",
        name: "Shafiul Azam",
        rollmate: "2413052",
        whatsapp: "YOUR_WHATSAPP_LINK",
        facebook: "YOUR_FACEBOOK_LINK"
    },
    "2513053": {
        namereal:"kafi",
        name: "Mou Akter",
        rollmate: "2413053",
        whatsapp: "YOUR_WHATSAPP_LINK",
        facebook: "YOUR_FACEBOOK_LINK"
    },
    "2513054": {
        namereal:"kafi",
        name: "Hasibul Hasan",
        rollmate: "2413054",
        whatsapp: "YOUR_WHATSAPP_LINK",
        facebook: "YOUR_FACEBOOK_LINK"
    },
    "2513055": {
        namereal:"kafi",
        name: "Dilruba Yesmin",
        rollmate: "2413055",
        whatsapp: "YOUR_WHATSAPP_LINK",
        facebook: "YOUR_FACEBOOK_LINK"
    },
    "2513056": {
        namereal:"kafi",
        name: "Anisur Rahman",
        rollmate: "2413056",
        whatsapp: "YOUR_WHATSAPP_LINK",
        facebook: "YOUR_FACEBOOK_LINK"
    },
    "2513057": {
        namereal:"kafi",
        name: "Waez Ahmed Rumman",
        rollmate: "2413057",
        whatsapp: "YOUR_WHATSAPP_LINK",
        facebook: "YOUR_FACEBOOK_LINK"
    },
    "2513058": {
        namereal:"kafi",
        name: "Jannatul Ferdaus",
        rollmate: "2413058",
        whatsapp: "YOUR_WHATSAPP_LINK",
        facebook: "YOUR_FACEBOOK_LINK"
    },
    "2513059": {
        namereal:"kafi",
        name: "Obaidullah Al Maruf",
        rollmate: "2413059",
        whatsapp: "YOUR_WHATSAPP_LINK",
        facebook: "YOUR_FACEBOOK_LINK"
    },
    "2513060": {
        namereal:"kafi",
        name: "Fatema Tuz Zohura",
        rollmate: "2413060",
        whatsapp: "YOUR_WHATSAPP_LINK",
        facebook: "YOUR_FACEBOOK_LINK"
    },
    "2513061": {
        namereal:"kafi",
        name: "Admin",
        rollmate: "ALL ACCESS",
        whatsapp: "YOUR_WHATSAPP_LINK",
        facebook: "YOUR_FACEBOOK_LINK"
    }
};


// ─── SHARED CARD BUILDER ──────────────────────────────────────────────────────
// Both search functions use this so the result always looks identical.

function buildResultTable(entries) {
    // entries: array of { roll, data }
    let rows = entries.map(({ roll, data }) => `
        <tr>
            <td>${roll}</td>
            <td>${data.namereal}</td>
            <td>${data.rollmate}</td>
            <td>${data.name}</td>
            <td><a href="${data.whatsapp}" target="_blank">Chat</a></td>
            <td><a href="${data.facebook}" target="_blank">Profile</a></td>
        </tr>
    `).join('');

    return `
        <div class="result-card">
            <table>
                <tr>
                    <th>Roll</th>
                    <th>Your Name</th>
                    <th>Rollmate</th>
                    <th>Rollmates Name</th>       
                    <th>WhatsApp</th>
                    <th>Facebook</th>
                </tr>
                ${rows}
            </table>
        </div>
    `;
}


// ─── SEARCH BY ROLL ───────────────────────────────────────────────────────────

function searchRoll() {
    const roll = document.getElementById('rollInput').value.trim();
    const result = document.getElementById('result');

    // Admin roll — show everyone
    if (roll === '2513061') {
        const all = Object.entries(rollmates).map(([roll, data]) => ({ roll, data }));
        result.innerHTML = buildResultTable(all);
        return;
    }

    if (rollmates[roll]) {
        result.innerHTML = buildResultTable([{ roll, data: rollmates[roll] }]);
    } else {
        result.innerHTML = `<div class="error">Wrong Roll Number</div>`;
    }
}

// Allow pressing Enter in roll input
document.getElementById('rollInput').addEventListener('keydown', (e) => {
    if (e.key === 'Enter') searchRoll();
});


// ─── SEARCH BY NAME ───────────────────────────────────────────────────────────
// Partial, case-insensitive match — "rumman" finds "Waez Ahmed Rumman"
// If multiple students share a word in their name, all are returned.

function searchSenior() {
    const input = document.getElementById('seniorInput').value.trim().toLowerCase();
    const resultDiv = document.getElementById('seniorResult');

    if (!input) {
        resultDiv.innerHTML = `<div class="error">Please enter a name to search.</div>`;
        return;
    }

    const matches = Object.entries(rollmates)
        .filter(([roll, data]) => data.name.toLowerCase().includes(input))
        .map(([roll, data]) => ({ roll, data }));

    if (matches.length === 0) {
        resultDiv.innerHTML = `<div class="error">No matching name found.</div>`;
    } else {
        resultDiv.innerHTML = buildResultTable(matches);
        // Override grid layout for result card
        resultDiv.style.display = 'block';
    }
}

// Allow pressing Enter in senior input
document.getElementById('seniorInput').addEventListener('keydown', (e) => {
    if (e.key === 'Enter') searchSenior();
});
