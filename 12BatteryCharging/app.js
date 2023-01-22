const battery = document.querySelector('.battery-icon');

function ChargeBattery(){
    setTimeout(() => {
        battery.innerHTML = `battery_1_bar`;
    }, 1000);
    
    setTimeout(() => {
        battery.innerHTML = `battery_2_bar`;
    }, 2000);
    
    setTimeout(() => {
        battery.innerHTML = `battery_3_bar`;
    }, 3000);
    
    setTimeout(() => {
        battery.innerHTML = `battery_4_bar`;
    }, 4000);
    
    setTimeout(() => {
        battery.innerHTML = `battery_6_bar`;
    }, 5000);
    
    setTimeout(() => {
        battery.innerHTML = `battery_full`;
    }, 6000);
}

ChargeBattery();

setInterval(ChargeBattery,6000);