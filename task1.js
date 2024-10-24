async function asyncAwait(values){
    for(const value of values){
        console.log(value);
        await new Promise(resolve => setTimeout(resolve, 1000));
    }
}

asyncAwait([1, 2, 3, 4, 5]);