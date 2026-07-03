const fs = require("fs");
const path = require("path");
function manageImages(){
    const currentImagePath = path.join(__dirname,"user.png");
    const DestinationImagePath = path.join(__dirname,"images","image.png");
    const dirPath = path.join(__dirname,"images");
    if(fs.existsSync(dirPath)){
        if(fs.existsSync(DestinationImagePath)){
            console.log("File Exist");
        } else {
            fs.copyFile(currentImagePath,DestinationImagePath,(err)=>{
                if(err){
                    throw err;
                }
            })
        }
    } else {
        fs.mkdir(dirPath,(err)=>{
            if(err){
                throw err;
            }
            fs.copyFile(currentImagePath,DestinationImagePath,(err)=>{
                if(err){
                    throw err;
                }
            })
        })
    }
}


function managePdf(){
    const currentpdfPath = path.join(__dirname,"sample.pdf");
    const DestinationPdfPath = path.join(__dirname,"files","file.pdf");
    const dirPath = path.join(__dirname,"files");
    if(fs.existsSync(dirPath)){
        if(fs.existsSync(DestinationPdfPath)){
            console.log("File Exist");
        } else {
            fs.copyFile(currentpdfPath,DestinationPdfPath,(err)=>{
                if(err){
                    throw err;
                }
            })
        }
    } else {
        fs.mkdir(dirPath,(err)=>{
            if(err){
                throw err;
            }
            fs.copyFile(currentpdfPath,DestinationPdfPath,(err)=>{
                if(err){
                    throw err;
                }
            })
        })
    }
}


function manageAudio(){
    const currentAudioPath = path.join(__dirname,"audio.m4a");
    const DestinationAudioPath = path.join(__dirname,"audio","audio.m4a");
    const dirPath = path.join(__dirname,"audio");
    if(fs.existsSync(dirPath)){
        if(fs.existsSync(DestinationAudioPath)){
            console.log("File Exist");
        } else {
            fs.copyFile(currentAudioPath,DestinationAudioPath,(err)=>{
                if(err){
                    throw err;
                }
            })
        }
    } else {
        fs.mkdir(dirPath,(err)=>{
            if(err){
                throw err;
            }
            fs.copyFile(currentAudioPath,DestinationAudioPath,(err)=>{
                if(err){
                    throw err;
                }
            })
        })
    }
}

manageAudio();