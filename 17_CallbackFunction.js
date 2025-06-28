// Function that says hello after a delay using a callback
function onStart(callback) {
    console.log("Starting the 'hello' function...");
    setTimeout(() => {
        console.log("Hello! This message was delayed.");
        callback(); // Calling the callback after the timeout
    }, 2000); // Delay of 2 seconds
}

// Callback function to log a completion message
function onCompletion() {
    console.log("Callback executed: Finished greeting!");
}

// Call the hello function and pass the onCompletion function as a callback
onStart(onCompletion);

function getInformation(callback) {
    console.log("Waiting for information...");
    setTimeout(() => {
        const info = "Information received";
        callback(info); // Calling the callback with the received info
    }, 3000); // Simulates a 3-second delay
}

// Callback function to process the information
function processInformation(info) {
    console.log("Processing: " + info);
}

// Calling getInformation and passing processInformation as the callback
getInformation(processInformation);