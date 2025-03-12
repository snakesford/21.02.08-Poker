const one = document.getElementById("1")
const two = document.getElementById("2")
const three = document.getElementById("3")
const four = document.getElementById("4")

const title1 = document.getElementById("title1")
const title2 = document.getElementById("title2")
const title3 = document.getElementById("title3")
const title4 = document.getElementById("title4")

const totals = [0, 0, 0, 0]

let p = 0
let b = 0
let e = 0
let me = 0
// list goes papa, uncle b, elliott, me
const scores = [
    {
        "date": "Tuesday March 11, 2024",
        "score": [381, 529, 624, 466]
    },
    {
        "date": "Tuesday March 4, 2024",
        "score": [290, 455, 450, 805]
    },
    {
        "date": "Tuesday February 25, 2024",
        "score": [289, 355, 851, 505]
    },
    {
        "date": "Tuesday February 18, 2024",
        "score": [656, 500, 516, 328]
    },
    {
        "date": "Tuesday February 11, 2024",
        "score": [799, 612, 177, 412]
    },
    {
        "date": "Tuesday February 4, 2024",
        "score": [470, 415, 728, 387]
    },
    {
        "date": "Tuesday January 28, 2024",
        "score": [789, 549, 345, 317]
    },
    {
        "date": "Tuesday January 21, 2024",
        "score": [761, 439, 288, 512]
    },
    {
        "date": "Tuesday January 7, 2024",
        "score": [531, 418, 528, 523]
    },
    {
        "date": "Thrusday December 26, 2024",
        "score": [714, 500, 296, 490]
    },
    {
        "date": "Tuesday December 17, 2024",
        "score": [416, 398, 714, 472]
    },
    {
        "date": "Monday Noveember 25, 2024",
        "score": [145, 500, 1089, 266]
    },
    {
        "date": "Wednesday November 20, 2024",
        "score": [345, 500, 689, 466]
    },
    {
        "date": " November 13, 2024",
        "score": [632, 347, 576, 445]
    },
    {
        "date": " November 6, 2024",
        "score": [489, 478, 441, 592]
    },
    {
        "date": "Wednesday October 23, 2024",
        "score": [860, 113, 489, 538]
    },
    {
        "date": "October 16, 2024",
        "score": [300, 700, 435, 565]
    },
    {
        "date": "October 9, 2024",
        "score": [358, 500, 496, 646]
    },
    {
        "date": "October 2, 2024",
        "score": [677, 500, 481, 342]
    },
    {
        "date": "September 25, 2024",
        "score": [424, 500, 764, 312]
    },
    {
        "date": "September 20, 2024",
        "score": [644, 500, 439, 417]
    },
    {
        "date": "September 5, 2024",
        "score": [772, 238, 374, 617]
    },
    {
        "date": "August 29, 2024",
        "score": [398, 687, 387, 528]
    },
    {
        "date": "August 22, 2024",
        "score": [450, 500,  549, 501]
    },
    {
        "date": "July 18, 2024",
        "score": [291, 341, 527, 841]
    },
    {
        "date": "2024",
        "score": [508, 308, 446, 716]
    },
    {
        "date": "2024",
        "score": [374, 275, 700, 651]
    },
    {
        "date": "2024",
        "score": [1045, 326, 325, 404]
    },
    {
        "date": "2024",
        "score": [53, 500, 1149, 298]
    },
    {
        "date": "2024",
        "score": [434, 340, 988, 238]
    },
    {
        "date": "2024",
        "score": [985, 326, 311, 378]
    },
    {
        "date": "2024",
        "score": [478, 500, 229, 793]
    },
    {
        "date": "2024",
        "score": [412, 815, 452, 321]
    },
    {
        "date": "2024",
        "score": [508, 500, 403, 591]
    },
    {
        "date": "2024",
        "score": [259, 385, 272, 1172]
    },
    {
        "date": "2024",
        "score": [300, 500, 260, 940]
    },
    {
        "date": "2024",
        "score": [522, 588, 342, 664]
    },
    {
        "date": "2024",
        "score": [296, 500, 987, 217]
    }
]

//ChatGPT function. I added the forEach and changed what the scoresCell.textContent was being asigned to
function addTableRow(date, scores) {
    const tableBody = document.querySelector("#tfoot"); // Get the tbody element

    const newRow = document.createElement("tr"); // Create a new row

    // Create and append the Date cell
    const dateCell = document.createElement("td");
    dateCell.textContent = date; // Set the text content
    newRow.appendChild(dateCell); // Append to the row

    // Create and append the Scores cell
    scores.forEach((item) => {
        const scoresCell = document.createElement("td");
        scoresCell.textContent = item // Convert scores array to a string
        newRow.appendChild(scoresCell); // Append to the row
    })

    // Append the new row to the table body
    tableBody.appendChild(newRow);
}


function calculateTotals(array) {
    array.forEach(entry => {
        for (i in entry.score) {
            totals[i] += entry.score[i]
            i++
        }
    })
}

function setTotals() {
    papa = totals[0]
    b = totals[1]
    e = totals[2]
    me = totals[3]
}


calculateTotals(scores)
setTotals()
// console.log(totals);
// console.log(b);

const list = { Papa: papa, UncleBrian: b, Elliott: e, Emmett: me };

// Convert object to an array of key-value pairs
const sortedList = Object.entries(list).sort((a, b) => b[1] - a[1]);

one.textContent = sortedList[0][1]
title1.textContent = sortedList[0][0]

two.textContent = sortedList[1][1]
title2.textContent = sortedList[1][0]

three.textContent = sortedList[2][1]
title3.textContent = sortedList[2][0]

four.textContent = sortedList[3][1]
title4.textContent = sortedList[3][0]

scores.forEach((item) => {
    // Re-map scores based on sorted users
    const reorderedScores = sortedList.map(([key]) => {
        return item.score[["Papa", "UncleBrian", "Elliott", "Emmett"].indexOf(key)];
    });

    addTableRow(item.date, reorderedScores);
});