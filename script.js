const fs = require("fs");
fs.writeFile("huihui.txt","huihui" , function(){
    console.log(writefile)
})



// fs.readFile("./huihui.txt" , "utf-8" ,function(err,data){
//     // console.log(err)
//     if(err) console.log(err);
//     else console.log(data);
    

// })

// fs.appendFile("./huihui.txt","astha",function(err){
//     console.log(err)
// })

//mkdir create the folder
// fs.mkdir("./style",function(err,style){
//     if(err)console.log(err);
//     else console.log(style);
// })

// fs.copyFile("./huihui.txt","./somethig.txt",function(err){
//     console.log(err);
// })
// fs.unlink("./huihui.txt",function(err){
// console.log(err);
// }
// )