const express = require('express');
const request = require('request');
const cheerio = require('cheerio');
const router = express.Router();
const moment = require('moment')

router.get('/:id?', (req, res, next) => {
  let url = 'https://www.check4d.com/past-results/' + req.params.id
  let ourDate = req.params.id
  var momentObj = moment(ourDate, 'YYYY-MM-DD');
  var theirDate = momentObj.format('DD-MM-YYYY');
  let resultTable = []
  let resultTable2 = []
  let resultTable3 = []
  let resultTable4 = []
  let resultTable5 = []
  let resultTable6 = []
  let resultTable7 = []
  let resultTable8 = []
  let resultTable9 = []
  let mdate = []
  let mdate1 = []
  let mdraw = []
  let fr = []
  request(url, (error, response, html) => {
    if (!error && response.statusCode == 200) {
      const $ = cheerio.load(html);
      $('.resultTable').each((i, el) => {
        let resultTop = $(el).find('.resultTable2').text()
        resultTable2.push(resultTop)
        // console.log(resultTable2)

        let resultBottomFirst = $(el).find('.resultbottom').text()
        resultTable4.push(resultBottomFirst)
        
        let resultBottomSecond = $(el).find('.resultbottom').text()
        resultTable7.push(resultBottomSecond)
      })

      let first = resultTable2[9]+ ''
      let date = first.slice(29, 39)
      let draw = ''
      let firstPrize = ''
      let secondPrize = ''
      let thirdPrize = ''
      if (date === theirDate) {
       draw = first.slice(45, 58)
       firstPrize = first.slice(70, 74)
       secondPrize = first.slice(86, 90)
       thirdPrize = first.slice(102, 106)
      }
      let firstP = ['1st Prize', firstPrize]
      let secondP = ['2nd Prize', secondPrize]
      let thirdP = ['3rd Prize', thirdPrize]
      resultTable = resultTable2[9]
      resultTable3.push(firstP, secondP, thirdP)
      fr.push(firstPrize,secondPrize,thirdPrize)
      mdate1.push(fr)

      mdate.push(date) 
      mdraw.push(draw)

      resultTable5 = resultTable4[9]
      let middle = resultTable4[9]+ ''
      let resultBottom1 = ''
      let resultBottom2 = ''
      console.log('see:', resultTable4)
      if(middle !== ''){
        console.log(middle)
       resultBottom1 = middle.match(/\d{4}|[^\d]/g).slice(0,5)
       resultBottom2 = middle.match(/\d{4}|[^\d]/g).slice(5,10)
      }
      resultTable6.push(resultBottom1, resultBottom2) 
      
      resultTable8 = resultTable7[9]
      let last = resultTable7[9]+ ''
      let resultBottom4 = ''
      let resultBottom5 = ''
      if (last !== ''){
       resultBottom4 = last.match(/\d{4}|[^\d]/g).slice(11,16)
       resultBottom5 = last.match(/\d{4}|[^\d]/g).slice(16,21)
      }
      resultTable9.push(resultBottom4, resultBottom5) 
        
    }
    res.status(200).json({
      date: mdate,
      draw: mdraw,
      magnum: mdate1,
      magnum2: resultTable3,
      special: resultTable6,
      consolation: resultTable9
    });
  });

});

module.exports = router;