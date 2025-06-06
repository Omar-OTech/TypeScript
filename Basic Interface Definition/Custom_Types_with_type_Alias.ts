type Callback = (error: Error | null, result?: string) => void;

function fetchData(callback: Callback) {
    // Simulate an asynchronous operation
    setTimeout(() => {
        const error = Math.random() > 0.5 ? new Error("Failed to fetch data") : null;
        const result = error ? undefined : "Data fetched successfully";

        callback(error, result);
    }, 1000);
}

// Here, Callback is a function type alias. You can reuse it consistently across many functions.
