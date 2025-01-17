const fs = require('fs');

fs.writeFile("file.txt","Hello World (Again run)",function(err){
    if(err){
        console.log("Error Occured");
    }
    else{
        console.log("File created successfully");
    }
});

fs.readFile("file.txt", 'utf8',function(err, data){
    if(err){
        console.log("Error Occured");
    }
    else{
        console.log(data);
        console.log("Read Successfully");
    }
});

fs.rename('file.txt', 'newFile.txt', (err) => {
    if (err) throw err;
    console.log('Rename complete!');
  }); 

fs.appendFile('file.txt', ' data to append', (err) => {
    if (err) throw err;
    console.log('The "data to append" was appended to file!');
  }); 

fs.unlink("newfile.txt", function(err){
    if(err){
        console.log("Error while deleting file");
    }
    else{
        console.log("File deleted successfully");
    }
});