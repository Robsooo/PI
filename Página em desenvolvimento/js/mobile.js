const device = navigator.userAgent

MediaDevices.ondevicechange = getDevice()

function getDevice() {
    console.log("Changed")
}