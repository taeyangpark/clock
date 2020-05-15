
var b = moment('01/12/2016', 'DD/MM/YYYY', true).format()
console.log(b);
var c = moment.utc('2016-01-01T23:35:01').format();
console.log(c);

var a = moment('12 March, 2016', ['DDMMMMY', 'MMMMDDY']).format()
console.log(a);