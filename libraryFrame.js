// considered as safeCode/

(function(global,$){

    var greeter = function(firstName,lastName,language){
       return new greeter.init(firstName,lastName,language);    
    }
   var supportedLangs =['en', 'es'];

   var  greetings = {
       en:'Hello',
       es:'Hola'
   };

   var formalGreetings = {
       en:'Greetings',
       en: 'Saludos'
   };

   // want to log it to the console/

   var logMesssages = {
       en: 'Logged in',
       es: 'Inicio sesion'
   };
    // creating a  can add your methods in the empty object below
    greeter.prototype = {
        fullName: function(){
            return this.firstName + ' ' + this.lastName;
        },
         // valid that a language is supported
        
         validate: function(){
            if(supportedLangs.indexOf(this.language) === -1) {
                 throw "Invalid language";
             }
         },
         greeting: function(){
             return greetings[this.language] + ' ' + this.firstName +'!';
         },
         formalGreeting:function(){[this.langauage] + ', '+ this.fullName();},

         greet: function(formal) {
              var msg;
              // if undefined or null it will be coerced to 'false'
              if(formal){
                  msg = this.formalGreeting();
              }
              else {
                  msg = this.greeting();
              }
              if(console) {
                  console.log(msg);
              }
  // 'this' refers to the calling object at execution time
  // makes the method chainable
          return this;

         },
         log: function(){
             if(console){
                  console.log(logMessages[this.language]+', '+ this.fullName();
             }
         }

    };
    greeter.init = function(firstName,lastName,language){
        // setting up some default properties.
        // it is either language that is true / ir

       var self = this;
       self. firstName = firstName || '';
       self.lastName = lastName|| '';
       self.language = language || 'en';

    }
    // any object created by this funticon is pointed to the object to the greeter protype as its  prototype
    greeter.init.prototype = greeter.prototype;

     //attaching it to the global and have an alias

     global.greeter = global.G$ = greeter;
})(window,jQuery);