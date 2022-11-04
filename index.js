function multipl() {
    let n = 3;
    let m = 5;
    // const output = '';
    let mN = [];
    let mM = [];

    for (let i = 0; i <= 10; i++) {
        let multi = n * i;
        mN.push(multi);
        // console.log(n + '*' + i + '=' + multi);
    }

    for (let i = 0; i <= 10; i++) {
        let five = m * i;
        mM.push(five)
            // console.log(`${m} * ${i} = ${five}\n\n`)
    }

    mN.forEach(nItem => {
        console.log("3* " + nItem)
        if()
    })

}
multipl();

// Peter challenge

// function MultipleOfTreeAndFive(num) {
//     let s = 0;
//     for (let i = 0; i < num; i++) {
//         if (i % 3 === 0 || i % 5 === 0) {
//             s += 0;
//         }
//     }
//     return s;
// }

// console.log(MultipleOfTreeAndFive(5));