const cenario1 = [0, 0, 1, 0, 0, 1, 0];
const cenario2 = [0, 0, 0, 0, 1, 0];

const jumpingOnClouds = c => {
    let jump = 0;
    for (let cloud = 0; cloud < c.length; cloud++) {
        if (c[cloud + 1] != undefined) jump++
        if (c[cloud + 2] === 0) cloud++
    }
    return jump
}

console.log(jumpingOnClouds(cenario2))

//c representa o cenario, mantenha o nome pra eu poder testar no hackerrank :Dj