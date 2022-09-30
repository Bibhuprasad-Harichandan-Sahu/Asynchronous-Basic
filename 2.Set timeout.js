console.log('Start script...');

setTimeout(() => {
    task('Download a file.');
}, 1000);

console.log('Done!');
function task(message) {
    // emulate time consuming tasklet
         let n = 100000;
        while (n > 0){
            n--;
        }
        console.log(message);
    }