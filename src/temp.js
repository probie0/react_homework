let mydate = new Date();
mydate.setHours(mydate.getHours() + 8);
console.log(mydate);

const body = JSON.stringify({id:0, content:"hello", createdTime: mydate});
console.log(body);