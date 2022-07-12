

const fs = require("fs");
const pokemon = require("pokemon");

let test = ["임성민","이지은","권수연","리성륜","정수임","김준식","오요섭"];

for(let i =0; i < test.length; i++) {
  fs.mkdir(`${test[i]}`, function(err){
    if(err === true) {
      console.log("에러발생");
    }
  });
};

