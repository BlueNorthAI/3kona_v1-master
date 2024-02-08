export const action = async ({ request }) => {
  async function checkStatus(jobId) {
    const response = await fetch(`http://localhost:5000/optimizer?start=yes`);
    const data = await response.json();
    if (response.ok) {
      return data; // This will be your optimization result
    } else {
      throw new Error(data.error || "Failed to get the result");
    }
  }

  // Use this function to poll the status
  function pollForCompletion(jobId) {
    const interval = setInterval(async () => {
      const result = await checkStatus(jobId);
      if (result.status === "in progress") {
        console.log("Still processing...");
      } else {
        clearInterval(interval);
        console.log("Processing complete:", result);
        // Handle the completed state (e.g., update UI)
      }
    }, 2000); // Check every 2 seconds
  }
};
