const device = navigator.userAgent

MediaDevices.ondevicechange = function() {console.log("Changed") }