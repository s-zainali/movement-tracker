if (window.DeviceMotionEvent) {
    // Device supports motion events (including accelerometer)
    window.addEventListener("devicemotion", handleMotionEvent);
  } else {
    console.error("Device does not support motion events.");
  }

  let display = document.getElementById("stats");
  
  function handleMotionEvent(event) {
    // Extract acceleration values along the x, y, and z axes
    const accelerationX = event.accelerationIncludingGravity.x;
    const accelerationY = event.accelerationIncludingGravity.y;
    const accelerationZ = event.accelerationIncludingGravity.z;

    display.innerText = `X: accelerationX \nY: accelerationY \nZ: accelerationZ`;
  
    // Use the acceleration data as needed (e.g., update UI, perform actions)
    console.log(`Acceleration X: ${accelerationX}`);
    console.log(`Acceleration Y: ${accelerationY}`);
    console.log(`Acceleration Z: ${accelerationZ}`);
  }
  