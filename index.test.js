const fs = require("fs");

const html = fs.readFileSync("index.html", "utf8");

let score = 0;

function award(condition, marks) {
    if (condition) score += marks;
    expect(condition).toBe(true);
}

afterAll(() => {
    console.log("\n==================================");
    console.log("      AUTO GRADING RESULT");
    console.log("==================================");
    console.log(`Total Score : ${score}/50`);
    console.log("==================================\n");
});

describe("DIV and SPAN Assignment (50 Marks)", () => {

    test("5 Marks - Container class", () => {
        award(/\.container\s*\{/.test(html), 5);
    });

    test("5 Marks - Blue Border", () => {
        award(/border\s*:\s*2px\s+solid\s+blue/i.test(html), 5);
    });

    test("5 Marks - Background Color", () => {
        award(/background-color\s*:\s*#f0f8ff/i.test(html), 5);
    });

    test("5 Marks - Padding 15px", () => {
        award(/padding\s*:\s*15px/i.test(html), 5);
    });

    test("5 Marks - Margin 20px", () => {
        award(/margin\s*:\s*20px/i.test(html), 5);
    });

    test("5 Marks - Highlight class", () => {
        award(/\.highlight\s*\{/.test(html), 5);
    });

    test("5 Marks - Red Text", () => {
        award(/color\s*:\s*red/i.test(html), 5);
    });

    test("5 Marks - Bold Font", () => {
        award(/font-weight\s*:\s*bold/i.test(html), 5);
    });

    test("5 Marks - Two DIV Containers", () => {
        const divs = html.match(/<div\s+class="container">/gi) || [];
        award(divs.length === 2, 5);
    });

    test("5 Marks - Two Highlight SPANs", () => {
        const spans = html.match(/<span\s+class="highlight">/gi) || [];
        award(spans.length === 2, 5);
    });

});