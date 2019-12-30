const express = require('express');
const request = require('request');
const cheerio = require('cheerio');
const router = express.Router();

router.get('/', (req, res, next) => {
  let result =[]
  let result3 = []
  let result4 = []
  let result5 = []
  let firstPhase =[]
  let result1 =[]
  let special = []
  let consolidation = []
  let second = []
  
  request('http://draw.yes18.net/api/sh1001/?date=20190315&game=1', (error, response, html) => {
    if (!error && response.statusCode == 200) {
      const $ = cheerio.load(html);
        let list = $("body");
        let strarray = list.html()
        let newStrng = strarray.replace("a0","a").replace("a1","b").replace("a2","c").replace("a3","d").replace("a4","e").replace("a5","f").replace("a6","g").replace("a7","h").replace("a8","i").replace("a9","j").replace("a10","k").replace("a11","l").replace("a12","m")
        let newStrng1= newStrng.replace("b0","n").replace("b1","o").replace("b2","p").replace("b3","q").replace("b4","r").replace("b5","s").replace("b6","t").replace("b7","u").replace("b8","v").replace("b9","w").replace("b10","x").replace("b11","y").replace("b12","z")

       // console.log(newStrng1) 
        let date = strarray.slice(64,72)
         let year = date.slice(0,4)
         let d = date.slice(4,6)
         let month = date.slice(6,8) 
         result.push(d,month,year)
         newStrng1 = newStrng1.split("#"); 
         //console.log(strarray) 
         newStrng1.forEach(function (value, i) {
          if((i+1) % 3 === 0){
            let resultBottom = value.split(',')
            result1.push(resultBottom)
            // console.log(resultBottom) 
          }
          
      });
      
    }
    
  let firstName = result1[0][0]
  let firstP = ['1st Prize',firstName]
  let secondName = result1[1][0]
  let secondP = ['2nd Prize',secondName]
  let thirdName = result1[2][0]
  let thirdP = ['3rd Prize',thirdName]
  firstPhase.push(firstName,secondName,thirdName)
  result3.push(firstPhase)
  second.push(firstP,secondP,thirdP)
  
  let secondPhase1 = [].concat.apply([], result1).slice(3,8)
  let secondPhase2 = [].concat.apply([], result1).slice(8,13)
  special.push(secondPhase1,secondPhase2)
  
  let thirdPhase1 = [].concat.apply([], result1).slice(13,18)
  let thirdPhase2 = [].concat.apply([], result1).slice(18,23)
  consolidation.push(thirdPhase1,thirdPhase2)

    res.status(200).json({
      All: result1,
      Date: result,
      First: result3,
      First2: second,
      Special: special,
      Consolidation: consolidation
    });
  });

});

module.exports = router;