const fs = require("fs");
const lines = fs.readFileSync("dev/stdin").toString().trim().split(/\s+/);
let lineIndex = 0;

function getNextLine() {
    return lines[lineIndex++];
}

const testCases = parseInt(getNextLine(), 10);
const results = [];

for (let t = 0; t < testCases; t++) {
    let planetsInPath = 0;
    const [startX, startY, endX, endY] = [getNextLine(), getNextLine(), getNextLine(), getNextLine()].map(Number);
    const planetsCount = parseInt(getNextLine(), 10);

    for (let p = 0; p < planetsCount; p++) {
        const [planetX, planetY, radius] = [getNextLine(), getNextLine(), getNextLine()].map(Number);
        const startInside = (startX - planetX) ** 2 + (startY - planetY) ** 2 < radius ** 2;
        const endInside = (endX - planetX) ** 2 + (endY - planetY) ** 2 < radius ** 2;

        if (startInside !== endInside) {
            planetsInPath++;
        }
    }

    results.push(planetsInPath);
}

console.log(results.join("\n"));
