// considered as safeCode/

(function(global,$){

    var greeter = function(firstName,lastName,language){
       return new greeter.init(firstName,lastName,language);    
    }
   var supportedLangs =['en', 'es'];

   greetings = {
       en:'Hello',
       es:'Hola'
   }

    // creating a  can add your methods in the empty object below
    greeter.prototype ={};
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