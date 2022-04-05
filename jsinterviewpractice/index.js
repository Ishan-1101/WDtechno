var person = {
    age: 23,
    getAge: function(){
      return this.age;
    }
  }
          
  var person2 = {age:  54};
  console.log(person.getAge.call(person2));