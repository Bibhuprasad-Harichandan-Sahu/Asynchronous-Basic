// program to display time every 3 seconds
function showTime() {

  // return new date and time
  let dateTime= new Date();

  // returns the current local time
  let time = dateTime.toLocaleTimeString();

  console.log(time)

  // display the time after 3 seconds
   setTimeout(showTime, 3000);
}

// calling the function
showTime();

// output->
// 7:22:16 am
// 7:22:19 am
// 7:22:22 am
// 7:22:25 am
// 7:22:28 am
// 7:22:31 am
