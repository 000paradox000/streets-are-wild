document.addEventListener("DOMContentLoaded", function() {
    const lights = document.querySelectorAll('.light');
    let currentLight = 0;

    function changeLight() {
        lights[currentLight].style.backgroundColor = '#555'; // Turn off the current light
        currentLight = (currentLight + 1) % lights.length; // Move to the next light

        switch (currentLight) {
            case 0:
                lights[currentLight].style.backgroundColor = 'red';
                break;
            case 1:
                lights[currentLight].style.backgroundColor = 'yellow';
                break;
            case 2:
                lights[currentLight].style.backgroundColor = 'green';
                break;
        }
    }

    // Start with the red light
    lights[currentLight].style.backgroundColor = 'red';

    // Change lights every 2 seconds
    setInterval(changeLight, 2000);
});