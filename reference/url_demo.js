const url = require('url');

const myUrl = new URL('http://mywebsite.com/hello.html?id=110&status=active');

//serialized url
console.log(myUrl.href);
console.log(myUrl.toString());

//host (root domain)
console.log(myUrl.host);

//Hostname (does not  get port)
console.log(myUrl.hostname);

//pathname
console.log(myUrl.pathname);

//serialized queary
console.log(myUrl.search);


//params Oject
console.log(myUrl.searchParams);


// add param
myUrl.searchParams.append('abs', '123');
console.log(myUrl.searchParams);

//loop through params
myUrl.searchParams.forEach((value, name) => console.log(`${name}: ${value}`));

