/**
 * Created by kanika on 02/04/18.
 */

var request = require('request');

request.get({
    url: 'http://services.odata.org/V4/Northwind/Northwind.svc/Orders',
}, function (err, res) {
    var body = JSON.parse(res.body);
    console.log(body.value[0]);
});
