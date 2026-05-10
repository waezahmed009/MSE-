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
        name: "Tanvir Ahmed",
        rollmate: "2413002",
        whatsapp: "YOUR_WHATSAPP_LINK",
        facebook: "YOUR_FACEBOOK_LINK"
    },
    "2513003": {
        name: "Mehedi Hassan",
        rollmate: "2413003",
        whatsapp: "YOUR_WHATSAPP_LINK",
        facebook: "YOUR_FACEBOOK_LINK"
    },
    "2513004": {
        name: "Rakibul Islam",
        rollmate: "2413004",
        whatsapp: "YOUR_WHATSAPP_LINK",
        facebook: "YOUR_FACEBOOK_LINK"
    },
    "2513005": {
        name: "Sabbir Rahman",
        rollmate: "2413005",
        whatsapp: "YOUR_WHATSAPP_LINK",
        facebook: "YOUR_FACEBOOK_LINK"
    },
    "2513006": {
        name: "Nusrat Jahan",
        rollmate: "2413006",
        whatsapp: "YOUR_WHATSAPP_LINK",
        facebook: "YOUR_FACEBOOK_LINK"
    },
    "2513007": {
        name: "Fariha Tasnim",
        rollmate: "2413007",
        whatsapp: "YOUR_WHATSAPP_LINK",
        facebook: "YOUR_FACEBOOK_LINK"
    },
    "2513008": {
        name: "Imran Hossain",
        rollmate: "2413008",
        whatsapp: "YOUR_WHATSAPP_LINK",
        facebook: "YOUR_FACEBOOK_LINK"
    },
    "2513009": {
        name: "Sourov Dey",
        rollmate: "2413009",
        whatsapp: "YOUR_WHATSAPP_LINK",
        facebook: "YOUR_FACEBOOK_LINK"
    },
    "2513010": {
        name: "Tahmina Akter",
        rollmate: "2413010",
        whatsapp: "YOUR_WHATSAPP_LINK",
        facebook: "YOUR_FACEBOOK_LINK"
    },
    "2513011": {
        name: "Arif Billah",
        rollmate: "2413011",
        whatsapp: "YOUR_WHATSAPP_LINK",
        facebook: "YOUR_FACEBOOK_LINK"
    },
    "2513012": {
        name: "Nazmul Haque",
        rollmate: "2413012",
        whatsapp: "YOUR_WHATSAPP_LINK",
        facebook: "YOUR_FACEBOOK_LINK"
    },
    "2513013": {
        name: "Sumaiya Khanam",
        rollmate: "2413013",
        whatsapp: "YOUR_WHATSAPP_LINK",
        facebook: "YOUR_FACEBOOK_LINK"
    },
    "2513014": {
        name: "Jubayer Ahmed",
        rollmate: "2413014",
        whatsapp: "YOUR_WHATSAPP_LINK",
        facebook: "YOUR_FACEBOOK_LINK"
    },
    "2513015": {
        name: "Lamia Sultana",
        rollmate: "2413015",
        whatsapp: "YOUR_WHATSAPP_LINK",
        facebook: "YOUR_FACEBOOK_LINK"
    },
    "2513016": {
        name: "Rifat Hasan",
        rollmate: "2413016",
        whatsapp: "YOUR_WHATSAPP_LINK",
        facebook: "YOUR_FACEBOOK_LINK"
    },
    "2513017": {
        name: "Maisha Maliha",
        rollmate: "2413017",
        whatsapp: "YOUR_WHATSAPP_LINK",
        facebook: "YOUR_FACEBOOK_LINK"
    },
    "2513018": {
        name: "Raihanul Kabir",
        rollmate: "2413018",
        whatsapp: "YOUR_WHATSAPP_LINK",
        facebook: "YOUR_FACEBOOK_LINK"
    },
    "2513019": {
        name: "Shanta Islam",
        rollmate: "2413019",
        whatsapp: "YOUR_WHATSAPP_LINK",
        facebook: "YOUR_FACEBOOK_LINK"
    },
    "2513020": {
        name: "Touhidul Alam",
        rollmate: "2413020",
        whatsapp: "YOUR_WHATSAPP_LINK",
        facebook: "YOUR_FACEBOOK_LINK"
    },
    "2513021": {
        name: "Nadia Afrin",
        rollmate: "2413021",
        whatsapp: "YOUR_WHATSAPP_LINK",
        facebook: "YOUR_FACEBOOK_LINK"
    },
    "2513022": {
        name: "Shahriar Kabir",
        rollmate: "2413022",
        whatsapp: "YOUR_WHATSAPP_LINK",
        facebook: "YOUR_FACEBOOK_LINK"
    },
    "2513023": {
        name: "Israt Jahan",
        rollmate: "2413023",
        whatsapp: "YOUR_WHATSAPP_LINK",
        facebook: "YOUR_FACEBOOK_LINK"
    },
    "2513024": {
        name: "Minhajul Islam",
        rollmate: "2413024",
        whatsapp: "YOUR_WHATSAPP_LINK",
        facebook: "YOUR_FACEBOOK_LINK"
    },
    "2513025": {
        name: "Tanjila Akter",
        rollmate: "2413025",
        whatsapp: "YOUR_WHATSAPP_LINK",
        facebook: "YOUR_FACEBOOK_LINK"
    },
    "2513026": {
        name: "Asif Iqbal",
        rollmate: "2413026",
        whatsapp: "YOUR_WHATSAPP_LINK",
        facebook: "YOUR_FACEBOOK_LINK"
    },
    "2513027": {
        name: "Priya Saha",
        rollmate: "2413027",
        whatsapp: "YOUR_WHATSAPP_LINK",
        facebook: "YOUR_FACEBOOK_LINK"
    },
    "2513028": {
        name: "Mushfiqur Rahman",
        rollmate: "2413028",
        whatsapp: "YOUR_WHATSAPP_LINK",
        facebook: "YOUR_FACEBOOK_LINK"
    },
    "2513029": {
        name: "Bristy Roy",
        rollmate: "2413029",
        whatsapp: "YOUR_WHATSAPP_LINK",
        facebook: "YOUR_FACEBOOK_LINK"
    },
    "2513030": {
        name: "Zahirul Hasan",
        rollmate: "2413030",
        whatsapp: "YOUR_WHATSAPP_LINK",
        facebook: "YOUR_FACEBOOK_LINK"
    },
    "2513031": {
        name: "Sadia Sultana",
        rollmate: "2413031",
        whatsapp: "YOUR_WHATSAPP_LINK",
        facebook: "YOUR_FACEBOOK_LINK"
    },
    "2513032": {
        name: "Kawsar Hamid",
        rollmate: "2413032",
        whatsapp: "YOUR_WHATSAPP_LINK",
        facebook: "YOUR_FACEBOOK_LINK"
    },
    "2513033": {
        name: "Tamanna Yesmin",
        rollmate: "2413033",
        whatsapp: "YOUR_WHATSAPP_LINK",
        facebook: "YOUR_FACEBOOK_LINK"
    },
    "2513034": {
        name: "Bipul Chandra",
        rollmate: "2413034",
        whatsapp: "YOUR_WHATSAPP_LINK",
        facebook: "YOUR_FACEBOOK_LINK"
    },
    "2513035": {
        name: "Sharmin Akter",
        rollmate: "2413035",
        whatsapp: "YOUR_WHATSAPP_LINK",
        facebook: "YOUR_FACEBOOK_LINK"
    },
    "2513036": {
        name: "Morshed Alam",
        rollmate: "2413036",
        whatsapp: "YOUR_WHATSAPP_LINK",
        facebook: "YOUR_FACEBOOK_LINK"
    },
    "2513037": {
        name: "Roksana Begum",
        rollmate: "2413037",
        whatsapp: "YOUR_WHATSAPP_LINK",
        facebook: "YOUR_FACEBOOK_LINK"
    },
    "2513038": {
        name: "Golam Rabbani",
        rollmate: "2413038",
        whatsapp: "YOUR_WHATSAPP_LINK",
        facebook: "YOUR_FACEBOOK_LINK"
    },
    "2513039": {
        name: "Monira Khatun",
        rollmate: "2413039",
        whatsapp: "YOUR_WHATSAPP_LINK",
        facebook: "YOUR_FACEBOOK_LINK"
    },
    "2513040": {
        name: "Rezaul Karim",
        rollmate: "2413040",
        whatsapp: "YOUR_WHATSAPP_LINK",
        facebook: "YOUR_FACEBOOK_LINK"
    },
    "2513041": {
        name: "Fahmida Nasrin",
        rollmate: "2413041",
        whatsapp: "YOUR_WHATSAPP_LINK",
        facebook: "YOUR_FACEBOOK_LINK"
    },
    "2513042": {
        name: "Towfiq Hasan",
        rollmate: "2413042",
        whatsapp: "YOUR_WHATSAPP_LINK",
        facebook: "YOUR_FACEBOOK_LINK"
    },
    "2513043": {
        name: "Sufia Khanam",
        rollmate: "2413043",
        whatsapp: "YOUR_WHATSAPP_LINK",
        facebook: "YOUR_FACEBOOK_LINK"
    },
    "2513044": {
        name: "Mosaddek Hossain",
        rollmate: "2413044",
        whatsapp: "YOUR_WHATSAPP_LINK",
        facebook: "YOUR_FACEBOOK_LINK"
    },
    "2513045": {
        name: "Afsana Mimi",
        rollmate: "2413045",
        whatsapp: "YOUR_WHATSAPP_LINK",
        facebook: "YOUR_FACEBOOK_LINK"
    },
    "2513046": {
        name: "Saiful Islam",
        rollmate: "2413046",
        whatsapp: "YOUR_WHATSAPP_LINK",
        facebook: "YOUR_FACEBOOK_LINK"
    },
    "2513047": {
        name: "Rabeya Khatun",
        rollmate: "2413047",
        whatsapp: "YOUR_WHATSAPP_LINK",
        facebook: "YOUR_FACEBOOK_LINK"
    },
    "2513048": {
        name: "Kamruzzaman Siddique",
        rollmate: "2413048",
        whatsapp: "YOUR_WHATSAPP_LINK",
        facebook: "YOUR_FACEBOOK_LINK"
    },
    "2513049": {
        name: "Halima Akter",
        rollmate: "2413049",
        whatsapp: "YOUR_WHATSAPP_LINK",
        facebook: "YOUR_FACEBOOK_LINK"
    },
    "2513050": {
        name: "Mahmudul Hasan",
        rollmate: "2413050",
        whatsapp: "YOUR_WHATSAPP_LINK",
        facebook: "YOUR_FACEBOOK_LINK"
    },
    "2513051": {
        name: "Parvin Akter",
        rollmate: "2413051",
        whatsapp: "YOUR_WHATSAPP_LINK",
        facebook: "YOUR_FACEBOOK_LINK"
    },
    "2513052": {
        name: "Shafiul Azam",
        rollmate: "2413052",
        whatsapp: "YOUR_WHATSAPP_LINK",
        facebook: "YOUR_FACEBOOK_LINK"
    },
    "2513053": {
        name: "Mou Akter",
        rollmate: "2413053",
        whatsapp: "YOUR_WHATSAPP_LINK",
        facebook: "YOUR_FACEBOOK_LINK"
    },
    "2513054": {
        name: "Hasibul Hasan",
        rollmate: "2413054",
        whatsapp: "YOUR_WHATSAPP_LINK",
        facebook: "YOUR_FACEBOOK_LINK"
    },
    "2513055": {
        name: "Dilruba Yesmin",
        rollmate: "2413055",
        whatsapp: "YOUR_WHATSAPP_LINK",
        facebook: "YOUR_FACEBOOK_LINK"
    },
    "2513056": {
        name: "Anisur Rahman",
        rollmate: "2413056",
        whatsapp: "YOUR_WHATSAPP_LINK",
        facebook: "YOUR_FACEBOOK_LINK"
    },
    "2513057": {
        name: "Waez Ahmed Rumman",
        rollmate: "2413057",
        whatsapp: "YOUR_WHATSAPP_LINK",
        facebook: "YOUR_FACEBOOK_LINK"
    },
    "2513058": {
        name: "Jannatul Ferdaus",
        rollmate: "2413058",
        whatsapp: "YOUR_WHATSAPP_LINK",
        facebook: "YOUR_FACEBOOK_LINK"
    },
    "2513059": {
        name: "Obaidullah Al Maruf",
        rollmate: "2413059",
        whatsapp: "YOUR_WHATSAPP_LINK",
        facebook: "YOUR_FACEBOOK_LINK"
    },
    "2513060": {
        name: "Fatema Tuz Zohura",
        rollmate: "2413060",
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


// ─── SHARED CARD BUILDER ──────────────────────────────────────────────────────
// Both search functions use this so the result always looks identical.

function buildResultTable(entries) {
    // entries: array of { roll, data }
    let rows = entries.map(({ roll, data }) => `
        <tr>
            <td>${roll}</td>
            <td>${data.name}</td>
            <td>${data.rollmate}</td>
            <td><a href="${data.whatsapp}" target="_blank">Chat</a></td>
            <td><a href="${data.facebook}" target="_blank">Profile</a></td>
        </tr>
    `).join('');

    return `
        <div class="result-card">
            <table>
                <tr>
                    <th>Roll</th>
                    <th>Name</th>
                    <th>Rollmate</th>
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
