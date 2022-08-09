import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

async function askIt(question) {
    console.log(question);
    return new Promise((resolve, reject) => {
        rl.on('line', line => {
            resolve(line);
        })
    })
}

function calculateRiemannZeta(n, s) {
    let zeta = 0;
    for (let i = 1; i < n; i++) {
        zeta += 1 / (Math.pow(i, s));
    }
    return zeta;
}


console.log('Zeta(s) = Sum(1,infinity)(1/n^s)');
const n = +await askIt('Value for n??');
const s = await askIt('Was is the value for s?');


const zeta = calculateRiemannZeta(n, s);

console.debug('zeta = ', zeta);

process.exit(0);





