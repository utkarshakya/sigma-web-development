async function multiplyByTwoWithDelay(numbers) {
    const multipliedPromises = numbers.map(async (number) => {
      await new Promise((resolve) => setTimeout(resolve, 500)); // Delay of 500 milliseconds
      return number * 2;
    });
  
    return Promise.all(multipliedPromises);
  }
  
  // Example usage:
  const inputNumbers = [1, 2, 3, 4, 5];
  multiplyByTwoWithDelay(inputNumbers)
    .then((result) => {
      console.log("Result:", result); // Prints [2, 4, 6, 8, 10] after the specified delay
    })
    .catch((error) => {
      console.error("Error:", error);
    });