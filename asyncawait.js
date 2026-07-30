function getData(dataId){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data",dataId);
            resolve("success");

        },3000);

    });
}

//asyns-await
async function shuvajit(){
    console.log("gattinh bata1......");
    await getData(1);
    console.log("gattinh bata2......");
    await getData(2);
    console.log("gattinh bata3......");
    await getData(3);

}
//IIFT
(async function(){
    console.log("gattinh bata1......");
    await getData(1);
    console.log("gattinh bata2......");
    await getData(2);
    console.log("gattinh bata3......");
    await getData(3);

})();