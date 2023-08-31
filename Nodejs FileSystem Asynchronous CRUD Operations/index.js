const fs=require('fs')
//Due to Asynchronous nature, run each command one by one!!



//Creating New folder
fs.mkdir('New-Folder',(err)=>{
    console.log(err);
})


//Creating New file bio.txt
fs.writeFile('New-Folder/bio.txt','Creating a new file...',(err)=>{
    console.log("New file created")
})


//Adding data into file
fs.appendFile('New-Folder/bio.txt','\nAdding new data to this file',(err)=>{
    console.log("New data entered in file");
})


//Reading the file data
fs.readFile('New-Folder/bio.txt','utf8',(err,data)=>{
    console.log(data)
})


//Renaming the file
fs.rename('New-Folder/bio.txt','New-Folder/mybio.txt',()=>{
    console.log('File renamed!')
})


//Deleting the file
fs.unlink('New-Folder/mybio.txt',(err)=>{
    console.log("File deleted successfully!");
})


//Deleting the folder
fs.rmdir('./New-Folder',(err)=>{
    console.log("Folder removed successfully!");
})