async function firstFunction() {
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('First function completed');
}

async function secondFunction() {
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('Second function completed');
}

async function thirdFunction() {
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('Third function completed');
}

async function chainedAsyncFunctions() {
    await firstFunction();
    await secondFunction();
    await thirdFunction();
}


chainedAsyncFunctions();
