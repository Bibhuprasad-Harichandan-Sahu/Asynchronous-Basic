function task(message) {
    // emulate time consuming tasklet 
      let n = 10000;
        while (n > 0){
            n--;
        }
        console.log(message);
    }
    
    console.log('Start script...');
    task('Download a file.');
    console.log('Done!');
    