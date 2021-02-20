function getDateTime() {
    var today = new Date();
    var seconds = today.getSeconds();
    var minutes = today.getMinutes();
    var hours = today.getHours();
    var dd = today.getDate();
    var day = today.getDay();
    var mm = today.getMonth();
    var yyyy = today.getFullYear();
    var time = (hours + ":" + minutes + ":" + seconds);

const monthsOfYr = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']; 

const daysOfWk = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

console.log(time + " " + " " + daysOfWk[day] + ", " + monthsOfYr[mm] + " " + dd + " " + yyyy);
  
//console.log(time);
//console.log(daysOfWk[day] + ", " + monthsOfYr[mm] + " " + dd + " " + yyyy);
}

setInterval(getDateTime, 1000);
