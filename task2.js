async function awaitcall(){
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
    }catch(err){
        console.log('error fetching ',err);
    }
}
awaitcall();