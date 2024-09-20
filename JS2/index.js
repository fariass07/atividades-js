const rolarDadoMilhao = () =>
{
    let caiu1 = 0;
    let caiu2 = 0;
    let caiu3 = 0;
    let caiu4 = 0;
    let caiu5 = 0;
    let caiu6 = 0;

    for (let i = 0; i < 1000000; i++)
    {
        const numeroSorteado = Math.floor(Math.random() * 6) + 1;
        switch (numeroSorteado)
        {
            case 1:
                caiu1++;
                break;
            case 2:
                caiu2++;
                break;
            case 3:
                caiu3++;
                break;
            case 4: 
                caiu4++;
                break;
            case 5:
                caiu5++;
                break;
            case 6:
                caiu6++;
                break;
        }
    }

    console.log(`
        1: ${caiu1 / 10000}
        2: ${caiu2 / 10000}
        3: ${caiu3 / 10000}
        4: ${caiu4 / 10000}
        5: ${caiu5 / 10000}
        6: ${caiu6 / 10000}
        `)
};

rolarDadoMilhao();