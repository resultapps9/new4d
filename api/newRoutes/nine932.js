const express = require('express');
const request = require('request');
const cheerio = require('cheerio');
const router = express.Router();

router.get('/:id?', (req, res, next) => {
  let url = 'http://draw.yes18.net/api/sh1001/?date=' + req.params.id +'&game=1'
  let result =[]
  let result3 = []
  let result4 = []
  let result5 = []
  let firstPhase =[]
  let result1 =[]
  let special = []
  let consolidation = []
  let second = []
  let result6 = []
  let result7 = []
  
  request(url, (error, response, html) => {
    if (!error && response.statusCode == 200) {
      const $ = cheerio.load(html);
        let list = $("body");
        let strarray = list.html()
        let pos = strarray.search("#1#")
        let f = strarray.slice(pos+3,pos+7)
        let pos1 = strarray.search("#2#")
        let s = strarray.slice(pos1+3,pos1+7)
        let pos2 = strarray.search("#3#")
        let t = strarray.slice(pos2+3,pos2+7)
        
        let sp1 = strarray.search("a0")
        let special1 = strarray.slice(sp1+5,sp1+9)
        if (f === special1){
          f = 'a '+ special1
          special1 = 'a '+ special1
        }else if (s === special1){
          s = 'a '+ special1
          special1 = 'a '+ special1
        }else if (t === special1){
          t = 'a '+ special1
          special1 = 'a '+ special1
        }else special1 = 'a '+ special1
        
        let sp2 = strarray.search("a1")
        let special2 = strarray.slice(sp2+5,sp2+9)
        if (f === special2){
          f = 'b '+ special2
          special2 = 'b '+ special2
        }else if (s === special2){
          s = 'b '+ special2
          special2 = 'b '+ special2
        }else if (t === special2){
          t = 'b '+ special2
          special2 = 'b '+ special2
        }else special2 = 'b '+ special2
        
        let sp3 = strarray.search("a2")
        let special3 = strarray.slice(sp3+5,sp3+9)
        if (f === special3){
          f = 'c '+ special3
          special3 = 'c '+ special3
        }else if (s === special3){
          s = 'c '+ special3
          special3 = 'c '+ special3
        }else if (t === special3){
          t = 'c '+ special3
          special3 = 'c '+ special3
        }else special3 = 'c '+ special3

        let sp4 = strarray.search("a3")
        let special4 = strarray.slice(sp4+5,sp4+9)
        if (f === special4){
          f = 'd '+ special4
          special4 = 'd '+ special4
        }else if (s === special4){
          s = 'd '+ special4
          special4 = 'd '+ special4
        }else if (t === special4){
          t = 'd '+ special4
          special4 = 'd '+ special4
        }else special4 = 'd '+ special4

        let sp5 = strarray.search("a4")
        let special5 = strarray.slice(sp5+5,sp5+9)
        if (f === special5){
          f = 'e '+ special5
          special5 = 'e '+ special5
        }else if (s === special5){
          s = 'e '+ special5
          special5 = 'e '+ special5
        }else if (t === special5){
          t = 'e '+ special5
          special5 = 'e '+ special5
        }else special5 = 'e '+ special5

        let sp6 = strarray.search("a5")
        let special6 = strarray.slice(sp6+5,sp6+9)
        if (f === special6){
          f = 'f '+ special6
          special6 = 'f '+ special6
        }else if (s === special6){
          s = 'f '+ special6
          special6 = 'f '+ special6
        }else if (t === special6){
          t = 'f '+ special6
          special6 = 'f '+ special6
        }else special6 = 'f '+ special6

        let sp7 = strarray.search("a6")
        let special7 = strarray.slice(sp7+5,sp7+9)
        if (f === special7){
          f = 'g '+ special7
          special7 = 'g '+ special7
        }else if (s === special7){
          s = 'g '+ special7
          special7 = 'g '+ special7
        }else if (t === special7){
          t = 'g '+ special7
          special7 = 'g '+ special7
        }else special7 = 'g '+ special7

        let sp8 = strarray.search("a7")
        let special8 = strarray.slice(sp8+5,sp8+9)
        if (f === special8){
          f = 'h '+ special8
          special8 = 'h '+ special8
        }else if (s === special8){
          s = 'h '+ special8
          special8 = 'h '+ special8
        }else if (t === special8){
          t = 'h '+ special8
          special8 = 'h '+ special8
        }else special8 = 'h '+ special8

        let sp12 = strarray.search("a8")
        let special12 = strarray.slice(sp12+5,sp12+9)
        if (f === special12){
          f = 'i '+ special12
          special12 = 'i '+ special12
        }else if (s === special12){
          s = 'i '+ special12
          special12 = 'i '+ special12
        }else if (t === special12){
          t = 'i '+ special12
          special12 = 'i '+ special12
        }else special12 = 'i '+ special12

        let sp9 = strarray.search("a9")
        let special9 = strarray.slice(sp9+5,sp9+9)
        if (f === special9){
          f = 'j '+ special9
          special9 = 'j '+ special9
        }else if (s === special9){
          s = 'j '+ special9
          special9 = 'j '+ special9
        }else if (t === special9){
          t = 'j '+ special9
          special9 = 'j '+ special9
        }else special9 = 'j '+ special9

        let sp10 = strarray.search("a10")
        let special10 = strarray.slice(sp10+6,sp10+10)
        if (f === special10){
          f = 'k '+ special10
          special10 = 'k '+ special10
        }else if (s === special10){
          s = 'k '+ special10
          special10 = 'k '+ special10
        }else if (t === special10){
          t = 'k '+ special10
          special10 = 'k '+ special10
        }else special10 = 'k '+ special10

        let sp11 = strarray.search("a11")
        let special11 = strarray.slice(sp11+6,sp11+10)
        if (f === special11){
          f = 'l '+ special11
          special11 = 'l '+ special11
        }else if (s === special11){
          s = 'l '+ special11
          special11 = 'l '+ special11
        }else if (t === special11){
          t = 'l '+ special11
          special11 = 'l '+ special11
        }else special11 = 'l '+ special11

        let sp13 = strarray.search("a12")
        let special13 = strarray.slice(sp13+6,sp13+10)
        if (f === special13){
          f = 'm '+ special13
          special13 = 'm '+ special13
        }else if (s === special13){
          s = 'm '+ special13
          special13 = 'm '+ special13
        }else if (t === special13){
          t = 'm '+ special13
          special13 = 'm '+ special13
        }else special13 = 'm '+ special13

        let arr = [special1,special2,special3,special4,special5,special6,special7,special8,special9,special10,special11,special12,special13]
        //let testArr = arr.filter(a => a !== f).filter(a => a !== s).filter(a => a !== t)
        //let testArr = [special1,special2,'c '+special3,'d '+special4,'e '+special5,'f '+special6,'g '+special7,'h '+special8,'i '+special9,'j '+special10,'k '+special11,'l '+special12,'m '+special13]
        arr[arr.map((x, i) => [i, x]).filter( 
          x => x[1] == f)[0][0]] = "----"
        let nArr = arr
        nArr[nArr.map((x, i) => [i, x]).filter( 
          x => x[1] == s)[0][0]] = "----"
        aNarr = nArr
        aNarr[aNarr.map((x, i) => [i, x]).filter( 
          x => x[1] == t)[0][0]] = "----"
        console.log(f,s,t)
        console.log(aNarr)
        let co = strarray.search("b0")
        let consol = strarray.slice(co+5,co+9)
        let co1 = strarray.search("b1")
        let consol1 = strarray.slice(co1+5,co1+9)
        let co2 = strarray.search("b2")
        let consol2 = strarray.slice(co2+5,co2+9)
        let co3 = strarray.search("b3")
        let consol3 = strarray.slice(co3+5,co3+9)
        let co4 = strarray.search("b4")
        let consol4 = strarray.slice(co4+5,co4+9)
        let co5 = strarray.search("b5")
        let consol5 = strarray.slice(co5+5,co5+9)
        let co6 = strarray.search("b6")
        let consol6 = strarray.slice(co6+5,co6+9)
        let co7 = strarray.search("b7")
        let consol7 = strarray.slice(co7+5,co7+9)
        let co8 = strarray.search("b8")
        let consol8 = strarray.slice(co8+5,co8+9)
        let co9 = strarray.search("b9")
        let consol9 = strarray.slice(co9+5,co9+9)
        
       result3.push(f,s,t)
        //result4.push(aNarr)
        //let newResult4 = result4.map(str => /[a-z]/i.test(str) ? '----' : str)
        let newResult4 = result4
        let especial = aNarr.slice(0,5)
        let especial1 = aNarr.slice(5,10)
        let especial2 = aNarr.slice(10,13)
        result5.push(especial,especial1,especial2)

        result6.push(consol,consol1,consol2,consol3,consol4,consol5,consol6,consol7,consol8,consol9)
        let newResult5 = result6.map(str => /[a-z]/i.test(str) ? '----' : str)
        let esconsol = newResult5.slice(0,5)
        let esconsol1 = newResult5.slice(5,10)
        result7.push(esconsol,esconsol1)
        
        let initial = result3.map(s => /^(?=.* )(?=.*\d)[\d\s]+$/.test(s) ? '----' : s)
        firstPhase.push(initial)
        let date = strarray.slice(64,72)
         let year = date.slice(0,4)
         let d = date.slice(4,6)
         let month = date.slice(6,8) 
         result.push(d,month,year)
         strarray = strarray.split("#"); 
        
          strarray.forEach(function (value, i) {
          if((i+1) % 3 === 0){
            let resultBottom = value.split(',')
            result1.push(resultBottom)
            
          }
          
      });
      
    }
   
    let first = result3[0]
    let second1 = result3[1]
    let third = result3[2]

  let firstName = /^(?=.* )(?=.*\d)[\d\s]+$/.test(first) ? '----' : first
  let firstP = ['1st Prize',firstName]
  let secondName = /^(?=.* )(?=.*\d)[\d\s]+$/.test(second1) ? '----' : second1
  let secondP = ['2nd Prize',secondName]
  let thirdName = /^(?=.* )(?=.*\d)[\d\s]+$/.test(third) ? '----' : third
  let thirdP = ['3rd Prize',thirdName]
// <<<<<<< HEAD
  second.push(firstP,secondP,thirdP)
  
//   let secondPhase1 = [].concat.apply([], result1).slice(0,5)
//   let secondPhase2 = [].concat.apply([], result1).slice(5,10)
//   special.push(secondPhase1,secondPhase2)
  
//   let thirdPhase1 = [].concat.apply([], result1).slice(10,15)
//   let thirdPhase2 = [].concat.apply([], result1).slice(15,20)
// =======
  // second.push(firstP, secondP, thirdP)
    
  //   let b = [].concat.apply([], result1)
  //   let c = b.indexOf(first)
  //   b.splice(c, 1)
  //   let d = b.indexOf(second1)
  //   b.splice(d, 1)
  //   let e = b.indexOf(third)
  //   b.splice(e, 1)

  // let secondPhase1 = b.slice(0,5)

    res.status(200).json({
      All: result1,
      Date: result,
      First: firstPhase,
      First2: second,
      Special: result5,
      Consolidation: result7
    });
  });

});

module.exports = router;