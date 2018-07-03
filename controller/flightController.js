const request = require('request');

exports.check = async (req,res) => {
    console.log(req.body)

    let d = req.body.originDate.split('-');
    d = d[0]+d[1]+d[2];
    

     
    setTimeout(function(){
        let url = `https://developer.goibibo.com/api/search/?app_id=2f94f330&app_key=d62c896ef968e1ebfbf3763c89080379&format=json&source=${req.body.origin}&destination=${req.body.dest}&dateofdeparture=${d}&seatingclass=${req.body.prefer}&adults=${req.body.travellers}&children=0&infants=0&counter=100`
        request({
              method: 'GET',
              uri: url
            }, function (error, response, body){
              if(!error && response.statusCode == 200){
               body = JSON.parse(body);   
                     
                res.json({
                    'success': true,
                    data:body
                });
              }
              else{
                res.json({
                  'success':false,
                  msg:response
                })
              }
            })
  
  
      },3000);
}