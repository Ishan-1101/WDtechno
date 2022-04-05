catchPoem().then(poem => {
    document.getElementById('poem').innerText = poem;
})
    .catch(error => {
        console.log('error!');
        console.error(error);
    });
async function catchPoem() {
    const response = await fetch('poem.txt');
    return await response.text();
}
