const express = require('express');
const request = require('request');
const cheerio = require('cheerio');
const router = express.Router();

router.get('/', (req, res, next) => {
  let resultDate1 =[]
  let resultDate2 =[]
  let multiple = []
  let resultTable = []
  let resultTable2 = []
  let resultTable3 = []
  let newData = []
  let second = []
  request('https://www.check4d.com/sabah-sarawak-4d-results/', (error, response, html) => {
  // request('http://localhost:3000/demo/', (error, response, html) => {
    if (!error && response.statusCode == 200) {
      const $ = cheerio.load(html);
      $('#sabah88').each((i, el) => {
        let resultDate = $(el).find('.resultdrawdate').text().replace(/\s/g, '    ');
        let resultDraw = resultDate.substr(resultDate.indexOf(")") + 1)
        resultDate2.push(resultDraw)
        resultDate = resultDate.slice(6,16)
        resultDate1.push(resultDate)

        let resultTop = $(el).find('.resulttop').text().replace(/\s/g, '    ');
        resultTop = resultTop.match(/.{1,4}/g)
        let initial = resultTop.map(s => /^(?=.* )(?=.*\d)[\d\s]+$/.test(s) ? '----' : s)
        let dp = initial.splice(0,3)
        let resultTop3d = $(el).find('.resultTable:nth-child(1) .resulttop').text().replace(/\s/g, '   ');
        let resultTop3d_arr = $(el).find('.resultTable:nth-child(1) .resulttop')
        // console.log($(resultTop3d_arr[0]).text());
        let arr = []
        arr[0] = $(resultTop3d_arr[0]).text();
        arr[1] = $(resultTop3d_arr[1]).text();
        arr[2] = $(resultTop3d_arr[2]).text();
        // for(var i = 0; i < resultTop3d.length; i += 4) {
        //   arr.push(resultTop3d.substr(i, 4));
        // }
        // while(resultTop3d) {
        //   arr.push(resultTop3d.substr(0,3));
        //   resultTop3d.substr(3)
        // }
        // console.log(arr)
        multiple.push(arr)
        // console.log(multiple)
        let page = arr
        page = page.map((r, index) => {
          if (index === 0) {
            return ['1ST Prize', r]
          } else if (index === 1) {
            return ['2ND Prize', r]
          } else if (index === 2) {
            return ['3RD Prize', r]
          }
          console.log(index+':', r)
        })
        second = page
        resultTable = arr
        newData.push(resultTable)

        let resultBottomFirst= $(el).find('.resultbottom').text()
        let resultBottom1 = resultBottomFirst.match(/\d{4}|[^\d]/g).slice(0,5)
        let specialData1 = resultBottom1.map(s => /^(?=.* )(?=.*\d)[\d\s]+$/.test(s) ? '----' : s);
        let resultBottom2 = resultBottomFirst.match(/\d{4}|[^\d]/g).slice(5,10)
        let specialData2 = resultBottom2.map(s => /^(?=.* )(?=.*\d)[\d\s]+$/.test(s) ? '----' : s);
        let resultBottom3 = resultBottomFirst.match(/\d{4}|[^\d]/g).slice(10,13)
        let specialData3 = resultBottom3.map(s => /^(?=.* )(?=.*\d)[\d\s]+$/.test(s) ? '----' : s);

        resultTable2.push(specialData1,specialData2,specialData3) 
       
        let resultBottomSecond = $(el).find('.resultbottom').text()
        let resultBottom4 = resultBottomSecond.match(/\d{4}|[^\d]/g).slice(13,18)
        let consolationData1 = resultBottom4.map(s => /^(?=.* )(?=.*\d)[\d\s]+$/.test(s) ? '----' : s);
        let resultBottom5 = resultBottomSecond.match(/\d{4}|[^\d]/g).slice(18,23)
        let consolationData2 = resultBottom5.map(s => /^(?=.* )(?=.*\d)[\d\s]+$/.test(s) ? '----' : s);

        resultTable3.push(consolationData1,consolationData2) 
        
      })
    }
    res.status(200).json({
      date: resultDate1,
      draw: resultDate2,
      multiple: multiple,
      magnum: newData,
      magnum2: second,
      special: resultTable2,
      consolation: resultTable3
    });
  });

});

module.exports = router;