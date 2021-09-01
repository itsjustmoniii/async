
async function chartIt(){
    const data = await getAustriaData();
    const ctx = document.getElementById('chart').getContext('2d');
        const myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: data.xlabels,
                datasets: [{
                    label: 'Population of Austria from 1950 - 2100 in Thousands',
                    data: data.ypop,
                    fill: false,
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    borderColor: 'rgba(255, 99, 132, 1)',
                    borderWidth: 1
                }]
            },
        });
}

async function getAustriaData(){
    const xlabels = [];
    const ypop = [];
    const response = await fetch('austria.csv');
    const data = await response.text();
    const table = data.split('\n').slice(1);
    table.forEach(row => {
        const column = row.split(',');
        const year = column[4];
        const popTotal = column[8];
        xlabels.push(year);
        ypop.push(popTotal);
        console.log(year, popTotal);
    })
    return {xlabels, ypop};
}

chartIt();





