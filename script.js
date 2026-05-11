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
        namereal:"SYED AIMAN HOQ",
        rollmate: "2413001",
        name: "SHIHABUDDIN MAMUN",   
        whatsapp: "YOUR_WHATSAPP_LINK",
        facebook: "https://www.facebook.com/share/189BUwsx17/"
    },
    "2513002": {
        namereal:"ADNAN SAMI",
        name: "FAHIM MANMUD",
        rollmate: "2413002",
        whatsapp: "YOUR_WHATSAPP_LINK",
        facebook: "https://www.facebook.com/share/1AvojMCvJ4/"
    },
    "2513003": {
        namereal:"PROTASHA BISWAS",
        name: "NIBIR NANDI PARTHO",
        rollmate: "2413003",
        whatsapp: "YOUR_WHATSAPP_LINK",
        facebook: "https://www.facebook.com/share/1DxcKGuiHt/"
    },
    "2513004": {
        namereal:"MD. TAMJID SIAM MAHIR",
        name: "SAAD JIM",
        rollmate: "2413004",
        whatsapp: "YOUR_WHATSAPP_LINK",
        facebook: "https://www.facebook.com/share/1AKoxxd5kN/"
    },
    "2513005": {
        namereal:"MAHIN ZAMAN AHON",
        name: "DEBOJIT DEBNATH",
        rollmate: "2413005",
        whatsapp: "YOUR_WHATSAPP_LINK",
        facebook: "https://www.facebook.com/share/1KY2sXuxME/"
    },
    "2513006": {
        namereal:"MARIA RUBYAT",
        name: "JAWAD",
        rollmate: "2413006",
        whatsapp: "YOUR_WHATSAPP_LINK",
        facebook: "https://www.facebook.com/share/1CGbT6URX7/"
    },
    "2513007": {
        namereal:"MD. MIRAJ ALI",
        name: "ABID HASAN",
        rollmate: "2413007",
        whatsapp: "YOUR_WHATSAPP_LINK",
        facebook: "https://www.facebook.com/share/1Dh1ToBrjc/"
    },
    "2513008": {
        namereal:"MD MUNTASIR HASAN SOHAN",
        name: "MARAJ ISLAM",
        rollmate: "2413008",
        whatsapp: "YOUR_WHATSAPP_LINK",
        facebook: "https://www.facebook.com/share/1asf2EfxZF/"
    },
    "2513009": {
        namereal:"MD. MAHIR LABIB",
        name: "ARMAN HOSSAIN NAYON",
        rollmate: "2413009",
        whatsapp: "YOUR_WHATSAPP_LINK",
        facebook: "https://www.facebook.com/share/18V7spsKzi/"
    },
    "2513010": {
        namereal:"NILOY CHOWDHURY",
        name: "ADILAH ULFAT",
        rollmate: "2413010",
        whatsapp: "YOUR_WHATSAPP_LINK",
        facebook: "https://www.facebook.com/share/1JL8nP7axK/"
    },
    "2513011": {
        namereal:"SHADMAN SHADAB SHIRSHO",
        name: "TAHMIDUR RAHMAN",
        rollmate: "2413011",
        whatsapp: "YOUR_WHATSAPP_LINK",
        facebook: "https://www.facebook.com/share/1DXs3S7yhw/"
    },
    "2513012": {
        namereal:"MISHKAT NOOR",
        name: "ABDULLAH AL KAFI",
        rollmate: "2413012",
        whatsapp: "YOUR_WHATSAPP_LINK",
        facebook: "https://www.facebook.com/share/1AX75F2dEc/"
    },
    "2513013": {
        namereal:"MD SALMAN SABIT",
        name: "JIHAD SAYEM",
        rollmate: "2413013",
        whatsapp: "YOUR_WHATSAPP_LINK",
        facebook: "https://www.facebook.com/share/1B2mk3x544/"
    },
    "2513014": {
        namereal:"SANJIDA JANNAT PRITY",
        name: "TOUFIQUE IMROSE",
        rollmate: "2413014",
        whatsapp: "YOUR_WHATSAPP_LINK",
        facebook: "https://www.facebook.com/share/1BMkXvzXhh/"
    },
    "2513015": {
        namereal:"MAHBUBA ISLAM",
        name: "MD MONIRUZZAMAN",
        rollmate: "2413015",
        whatsapp: "YOUR_WHATSAPP_LINK",
        facebook: "https://www.facebook.com/share/17VvxRPHvs/"
    },
    "2513016": {
        namereal:"S.M. TAHMIDUR RAHMAN",
        name: "ATAHAR ISHTIYAK",
        rollmate: "2413016",
        whatsapp: "YOUR_WHATSAPP_LINK",
        facebook: "https://www.facebook.com/share/18pQJwAyyn/"
    },
    "2513017": {
        namereal:"RAHUL SAHA",
        name: "MUSTAKIM SIFAT",
        rollmate: "2413017",
        whatsapp: "YOUR_WHATSAPP_LINK",
        facebook: "https://www.facebook.com/share/1BBYr71X4R/"
    },
    "2513018": {
        namereal:"SOURAV KUMAR JOY",
        name: "NOT FOUND",
        rollmate: "2413018",
        whatsapp: "YOUR_WHATSAPP_LINK",
        facebook: "YOUR_FACEBOOK_LINK"
    },
    "2513019": {
        namereal:"ISHTIAK HOSSAIN NOMAN",
        name: "NOT FOUND",
        rollmate: "2413019",
        whatsapp: "YOUR_WHATSAPP_LINK",
        facebook: "YOUR_FACEBOOK_LINK"
    },
    "2513020": {
        namereal:"SHIHAB",
        name: "SARWAR HOSSAIN SHIHAB",
        rollmate: "2413020",
        whatsapp: "YOUR_WHATSAPP_LINK",
        facebook: "https://www.facebook.com/share/18sYFCSEfu/"
    },
    "2513021": {
        namereal:"AHNAF ZARIF",
        name: "TANJID KABIR",
        rollmate: "2413021",
        whatsapp: "YOUR_WHATSAPP_LINK",
        facebook: "https://www.facebook.com/share/1HAJC1yoer/"
    },
    "2513022": {
        namereal:"MD. ASRAFUL ISLAM NIROB",
        name: "SHAHRIAR SOFOL",
        rollmate: "2413022",
        whatsapp: "YOUR_WHATSAPP_LINK",
        facebook: "https://www.facebook.com/share/1as4C7y684/"
    },
    "2513023": {
        namereal:"MAHIA TABASSUM BORSHA",
        name: "TAMANNA TULI",
        rollmate: "2413023",
        whatsapp: "YOUR_WHATSAPP_LINK",
        facebook: "https://www.facebook.com/share/1EeBDj9VpU/"
    },
    "2513024": {
        namereal:"MD. WASIR SHIKDER RATUL",
        name: "SIGMA ADIB SINTHI",
        rollmate: "2413024",
        whatsapp: "YOUR_WHATSAPP_LINK",
        facebook: "https://www.facebook.com/share/169TTtKZx6/"
    },
    "2513025": {
        namereal:"ARIFUL ISLAM",
        name: "ISMAIL HOSEN",
        rollmate: "2413025",
        whatsapp: "YOUR_WHATSAPP_LINK",
        facebook: "https://www.facebook.com/share/1J5yhigaaJ/"
    },
    "2513026": {
        namereal:"SHEIKH MOHAMMAD MAHADI HASAN",
        name: "HOSSEN RAFID",
        rollmate: "2413026",
        whatsapp: "YOUR_WHATSAPP_LINK",
        facebook: "https://www.facebook.com/mdrba2"
    },
    "2513027": {
        namereal:"MD. SALAH UDDIN MIKDAD",
        name: "MURSALIN AHMED SIYAM",
        rollmate: "2413027",
        whatsapp: "YOUR_WHATSAPP_LINK",
        facebook: "https://www.facebook.com/share/17Q94EnugP/"
    },
    "2513028": {
        namereal:"SK. MOFSIN TAMIM",
        name: "NOT FOUND",
        rollmate: "2413028",
        whatsapp: "YOUR_WHATSAPP_LINK",
        facebook: "YOUR_FACEBOOK_LINK"
    },
    "2513029": {
        namereal:"ABU JAR GIFARI AKAND",
        name: "MD. ABU RAIHAN",
        rollmate: "2413029",
        whatsapp: "YOUR_WHATSAPP_LINK",
        facebook: "https://www.facebook.com/share/1GwcALFMPc/"
    },
    "2513030": {
        namereal:"MUTTAKIN FUAD",
        name: "SHAMIUL ISLAM SHIAM",
        rollmate: "2413030",
        whatsapp: "YOUR_WHATSAPP_LINK",
        facebook: "https://www.facebook.com/share/1aNgMFN36i/"
    },
    "2513031": {
        namereal:"JAMINUR RAHMAN",
        name: "MUHAMMAD RIDOY",
        rollmate: "2413031",
        whatsapp: "YOUR_WHATSAPP_LINK",
        facebook: "https://www.facebook.com/share/17qrRC8QC8/"
    },
    "2513032": {
        namereal:"MD. RIAD ISLAM",
        name: "TAMIM SERAJ",
        rollmate: "2413032",
        whatsapp: "YOUR_WHATSAPP_LINK",
        facebook: "https://www.facebook.com/share/1E3McNYanY/"
    },
    "2513033": {
        namereal:"PRATTOY BANIK",
        name: "SAUROV BANIK",
        rollmate: "2413033",
        whatsapp: "YOUR_WHATSAPP_LINK",
        facebook: "https://www.facebook.com/share/1CmTCuPdQF/"
    },
    "2513034": {
        namereal:"JUNAYED BUGDADI DIPTA",
        name: "NOT FOUND",
        rollmate: "2413034",
        whatsapp: "YOUR_WHATSAPP_LINK",
        facebook: "YOUR_FACEBOOK_LINK"
    },
    "2513035": {
        namereal:"MD. ISHAK RAHMAN",
        name: "NOT FOUND",
        rollmate: "2413035",
        whatsapp: "YOUR_WHATSAPP_LINK",
        facebook: "YOUR_FACEBOOK_LINK"
    },
    "2513036": {
        namereal:"MD. NIAMUL HASAN",
        name: "TAMIM BILLAH",
        rollmate: "2413036",
        whatsapp: "YOUR_WHATSAPP_LINK",
        facebook: "https://www.facebook.com/share/1DyfZU9tHr/"
    },
    "2513037": {
        namereal:"SHOUVIK BASAK SHOSHI",
        name: "TUNARZIN TARMI",
        rollmate: "2413037",
        whatsapp: "YOUR_WHATSAPP_LINK",
        facebook: "https://www.facebook.com/tunarzin.tarmi"
    },
    "2513038": {
        namereal:"MEHEDI AL HASAN SIAM",
        name: "SHUVO SARKAR",
        rollmate: "2413038",
        whatsapp: "YOUR_WHATSAPP_LINK",
        facebook: "https://www.facebook.com/share/1G6gJqvnM3/"
    },
    "2513039": {
        namereal:"MD. SAIFUR RAHMAN SIAM",
        name: "NOT FOUND",
        rollmate: "2413039",
        whatsapp: "YOUR_WHATSAPP_LINK",
        facebook: "YOUR_FACEBOOK_LINK"
    },
    "2513040": {
        namereal:"MD IMAM HASAN JEWEL",
        name: "SURJOTOPA ROY SRAYA",
        rollmate: "2413040",
        whatsapp: "YOUR_WHATSAPP_LINK",
        facebook: "https://www.facebook.com/share/18bepKQKnG/"
    },
    "2513041": {
        namereal:"SAWCHA PODDER",
        name: "FATIN NEHAL",
        rollmate: "2413041",
        whatsapp: "YOUR_WHATSAPP_LINK",
        facebook: "https://www.facebook.com/share/1A86VKHdrd/"
    },
    "2513042": {
        namereal:"ROFAT ROYAN",
        name: "MOHAMMED GIASH UDDIN",
        rollmate: "2413042",
        whatsapp: "YOUR_WHATSAPP_LINK",
        facebook: "https://www.facebook.com/share/18VwGqboq3/"
    },
    "2513043": {
        namereal:"MAISUN MEHAJABIN",
        name: "NOT FOUND",
        rollmate: "2413043",
        whatsapp: "YOUR_WHATSAPP_LINK",
        facebook: "YOUR_FACEBOOK_LINK"
    },
    "2513044": {
        namereal:"SIYAM AHMED",
        name: "ISHMA RAHMAN",
        rollmate: "2413044",
        whatsapp: "YOUR_WHATSAPP_LINK",
        facebook: "https://www.facebook.com/share/18rs2HwqnB/"
    },
    "2513045": {
        namereal:"MD. MUBTASIM SAROWAR RIHAN",
        name: "TASFIQUR RAHMAN OVI",
        rollmate: "2413045",
        whatsapp: "YOUR_WHATSAPP_LINK",
        facebook: "https://www.facebook.com/share/1FtTzm3ZVv/"
    },
    "2513046": {
        namereal:"RIGWAN MUSTAFA",
        name: "BAYZID FAHIM",
        rollmate: "2413046",
        whatsapp: "YOUR_WHATSAPP_LINK",
        facebook: "https://www.facebook.com/share/1BKXipyrDU/"
    },
    "2513047": {
        namereal:"AFNAN AMJAD",
        name: "NOT FOUND",
        rollmate: "2413047",
        whatsapp: "YOUR_WHATSAPP_LINK",
        facebook: "YOUR_FACEBOOK_LINK"
    },
    "2513048": {
        namereal:"MD. ASHIQUR RAHMAN MOZUMDER",
        name: "MD TAYBE HOSSAIN JONY",
        rollmate: "2413048",
        whatsapp: "YOUR_WHATSAPP_LINK",
        facebook: "https://www.facebook.com/share/1CHvsn3uUo/"
    },
    "2513049": {
        namereal:"ZUANA TASHRIN",
        name: "RIAL BISWAS",
        rollmate: "2413049",
        whatsapp: "YOUR_WHATSAPP_LINK",
        facebook: "https://www.facebook.com/share/1B8DUtDXTj/"
    },
    "2513050": {
        namereal:"SAJID BIN MAIN",
        name: "NOT FOUND",
        rollmate: "2413050",
        whatsapp: "YOUR_WHATSAPP_LINK",
        facebook: "YOUR_FACEBOOK_LINK"
    },
    "2513051": {
        namereal:"MD. RIFAT NABIL SIDDIQUE",
        name: "CHOTON DEBNATH",
        rollmate: "2413051",
        whatsapp: "YOUR_WHATSAPP_LINK",
        facebook: "https://www.facebook.com/choton.deb.nath.2005.2025"
    },
    "2513052": {
        namereal:"SABBIR AHMED",
        name: "NOT FOUND",
        rollmate: "2413052",
        whatsapp: "YOUR_WHATSAPP_LINK",
        facebook: "YOUR_FACEBOOK_LINK"
    },
    "2513053": {
        namereal:"KAYES MAHMUD SHAKKHOR",
        name: "MEHEDI HASAN",
        rollmate: "2413053",
        whatsapp: "YOUR_WHATSAPP_LINK",
        facebook: "https://www.facebook.com/md.mehedi.hasan.931440"
    },
    "2513054": {
        namereal:"MD. RAQUIB AHSAN TAMZID",
        name: "TANIM MAHMUD",
        rollmate: "2413054",
        whatsapp: "YOUR_WHATSAPP_LINK",
        facebook: "https://www.facebook.com/tanim.mahmud.35728"
    },
    "2513055": {
        namereal:"MD. TANIM HOSSEN",
        name: "MUBTASIM FUAD SIAM ",
        rollmate: "2413055",
        whatsapp: "YOUR_WHATSAPP_LINK",
        facebook: "https://www.facebook.com/mubtasim.foad.siam"
    },
    "2513056": {
        namereal:"UTSHA BHOWMIK",
        name: "SADMAN SAJID SPORSHO",
        rollmate: "2413056",
        whatsapp: "https://wa.me/8801713540059",
        facebook: "https://www.facebook.com/sadman.sajid.483999"
    },
    "2513057": {
        namereal:"MD. HASIBUL HASAN",
        name: "Waez Ahmed Rumman",
        rollmate: "2413057",
        whatsapp: "https://wa.me/8801877142168",
        facebook: "https://www.facebook.com/waezahmedrumman.zar"
    },
    "2513058": {
        namereal:"MST. MODINA MONAWARA",
        name: "MANZARUL CHOWDHURY",
        rollmate: "2413058",
        whatsapp: "https://wa.me/8801891983291",
        facebook: "https://www.facebook.com/manzarul.hasan.chowdhury"
    },
    "2513059": {
        namereal:"SOHAN ALAHI SUNNY",
        name: "NOT FOUND",
        rollmate: "2413059",
        whatsapp: "YOUR_WHATSAPP_LINK",
        facebook: "YOUR_FACEBOOK_LINK"
    },
    "2513060": {
        namereal:"MD. HANIF",
        name: "RUDRO KUNDU",
        rollmate: "2413060",
        whatsapp: "YOUR_WHATSAPP_LINK",
        facebook: "https://www.facebook.com/rudro.kundu.37"
    },
    "2513061": {
        namereal:"SABAHAT MUSTARIN",
        name: "NOT FOUND",
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
