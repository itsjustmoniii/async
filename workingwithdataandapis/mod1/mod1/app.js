//fetch returns a promise
/*
fetch('colorWheel.png').then(response => {
    console.log(response);
    //convert the response into a blob (image) --> returns a promise
    return response.blob();
}).then(picture => {
    console.log(picture);
    //URLetc --> takes the blob and converts it into the right format for the img tag
    document.getElementById("rainbow").src = URL.createObjectURL(picture);
}).catch(error => {
    console.error(error);
})
*/

//await can only be used in a async function
async function colorWheel(){
    //because fetch is async you have to use await
    const response = await fetch('colorWheel.png');
    const pic = await response.blob();
    document.getElementById("rainbow").src = URL.createObjectURL(pic);
}

colorWheel().catch(error => {
    console.log(error);
})

async function showPoem(){
    const response = await fetch('textfile.txt');
    const text = await response.text();
    document.getElementById("plaintext").innerHTML = text;
}

showPoem();



