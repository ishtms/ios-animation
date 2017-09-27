const device  = document.querySelector('.device');

function switchDevice(){
    setTimeout(()=>{
        device.classList.remove('single');
        device.classList.add('both')
    }, 1500);
    setTimeout(()=>{
        device.classList.remove('both');
        device.classList.add('macbook');
    },3000);
    setTimeout(function() {
        device.classList.remove('macbook')
        device.classList.add('both')
    }, 4500);
        setTimeout(()=>{
            device.classList.remove('both');
            device.classList.add('single')
        },6000)
}

switchDevice();
setInterval(switchDevice, 7500)