async function parallelCalls() {
    try {
        const [response1, response2] = await Promise.all([
            fetch('https://jsonplaceholder.typicode.com/posts'),
            fetch('https://jsonplaceholder.typicode.com/users')
        ]); 
        const data1 = await response1.json();
        const data2 = await response2.json();
        console.log(data1);
        console.log(data2);
    }
    catch (error) {
        console.error('Oops! Something went wrong while fetching data:', error.message);
    }
}