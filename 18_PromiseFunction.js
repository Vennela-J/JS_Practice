const deliverPackage = ()=>{
    return new Promise((resolve,reject)=>{
        console.log("package on the way");
        setTimeout(()=>{
            const delivered=true;
            if(delivered){
                resolve("package delivered");
            }else{
                reject("Failed to deliver package.");

            }
        },3000);

    });
};

deliverPackage().then((message)=>{
    console.log(message)
})
.catch((error)=>{
    console.log(error);
});