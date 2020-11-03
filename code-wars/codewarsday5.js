//Hello, Name or World!

// Define a method hello that returns "Hello, Name!" to a given name, or says Hello, World! if name is not given (or passed as an empty String).

// Assuming that name is a String and it checks for user typos to return a name with a first capital letter (Xxxx).
//
// Examples:
//
// hello "john"   => "Hello, John!"
// hello "aliCE"  => "Hello, Alice!"
// hello          => "Hello, World!" # name not given
// hello ''       => "Hello, World!" # name is an empty String


function hello(name) {
  // can turn into ternary i.e. name ?  return "Hello, " + name[0].toUpperCase() + name.slice(1).toLowerCase() + "!" : 'Hello, World!';
  if (name){
  return  "Hello, " + name[0].toUpperCase() + name.slice(1).toLowerCase() + "!";
  } else return 'Hello, World!'
}

// console.log(hello('johN'), 'Hello, John!', "returns 'Hello, John!' when given 'johN'")
// Test.assertSimilar(hello('alice'), 'Hello, Alice!', "returns 'Hello, Alice!' when given 'alice'")
// Test.assertSimilar(hello(), 'Hello, World!', "returns 'Hello, World!' when name is not given")
// Test.assertSimilar(hello(''), 'Hello, World!', "returns 'Hello, World!' when name is an empty String" )
