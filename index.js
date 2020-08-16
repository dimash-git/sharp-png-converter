const sharp = require("sharp")
const fs = require("fs")

const convert = (from, to) => {
  sharp(from)
    .png()
    .toFile(to)
    .then(() => {
      console.log("Success: The image was converted!")
    })
    .catch((error) => {
      console.log(error)
    })
}

const inputFolder = __dirname + "/input/"
const outputFolder = __dirname + "/output/"
const exception = ".DS_Store" // -> for mac

fs.readdir(inputFolder, (error, files) => {
  if (error) {
    console.log(error)
  } else {
    files.forEach((file) => {
      if (file != exception) {
        const fileName = file.split(".")[0]
        convert(inputFolder + file, outputFolder + fileName + ".png")
      }
    })
  }
})
