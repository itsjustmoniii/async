async function getData(){
    let response = await fetch('nasa.csv');
    let data = await response.text();
    //slice delets something from the array
    const table = data.split('\n').slice(1);
    
    table.forEach(row => {
        const colums = row.split(',');
        const year = colums[0];
        const temp = colums[1];
        console.log(year, temp);
    });
}

getData();