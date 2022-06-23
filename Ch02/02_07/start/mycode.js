const waitTime = 3000;
console.log(`setting a ${waitTime / 1000} second delay`);
const timerFinished = () => {
    clearInterval(interval)
    console.log("done");}
setTimeout(timerFinished, waitTime);



const waitInterval = 500;
let currentTime =0;
const incTime=()=>{
    currentTime  +=waitInterval
    console.log(`Waiting ${currentTime/1000} seconds`)  
}


const interval = setInterval(incTime, waitInterval);
//

/*
//Output
setting a 3 second delay
Waiting 0.5 seconds
Waiting 1 seconds
Waiting 1.5 seconds
Waiting 2 seconds
Waiting 2.5 seconds
done
Waiting 3 seconds
Waiting 3.5 seconds
Waiting 4 seconds
Waiting 4.5 seconds
Waiting 5 seconds
Waiting 5.5 seconds
Waiting 6 seconds
Waiting 6.5 seconds
Waiting 7 seconds
Waiting 7.5 seconds
Waiting 8 seconds
Waiting 8.5 seconds
Waiting 9 seconds
Waiting 9.5 seconds
Waiting 10 seconds
Waiting 10.5 seconds
Waiting 11 seconds
Waiting 11.5 seconds
Waiting 12 seconds
Waiting 12.5 seconds
Waiting 13 seconds
Waiting 13.5 seconds
Waiting 14 seconds
Waiting 14.5 seconds
Waiting 15 seconds
Waiting 15.5 seconds
Waiting 16 seconds
Waiting 16.5 seconds
Waiting 17 seconds
Waiting 17.5 seconds
Waiting 18 seconds
Waiting 18.5 seconds
Waiting 19 seconds
Waiting 19.5 seconds
Waiting 20 seconds
Waiting 20.5 seconds
Waiting 21 seconds
Waiting 21.5 seconds
Waiting 22 seconds
Waiting 22.5 seconds
Waiting 23 seconds
Waiting 23.5 seconds
Waiting 24 seconds
Waiting 24.5 seconds
Waiting 25 seconds
Waiting 25.5 seconds
Waiting 26 seconds
Waiting 26.5 seconds
Waiting 27 seconds

*/


/*
 clearInterval(interval)

 
setting a 3 second delay
Waiting 0.5 seconds
Waiting 1 seconds
Waiting 1.5 seconds
Waiting 2 seconds
Waiting 2.5 seconds
done
*/