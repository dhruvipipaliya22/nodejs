async function fetchdata(){
    return "data received !!"
}
console.log(fetchdata());

async function getdata(){
    const response=await fetch("https://jsonplaceholder.typicode.com/posts");
    const data= await response.json();
    console.log(data);
}
getdata()

// try catch
async function fetchdata(){
    try{
        const response=await fetch("https://jsonplaceholde.typicode.com/posts/1");
        const data=await response.json();
        console.log(data);
    }
    catch(err){
        console.log(err.message);
    }
}
fetchdata();

const fetchpost= async()=>{
    try{
        const res=await fetch("https://jsonplaceholde.typicode.com/posts/1");
        // if(!res.ok) throw new Error("Response not ok!!");   
        const post = await res.json();
        console.log("post title" , post.title);
    }catch(err){
        console.log(err.message);
    }
}
fetchpost();