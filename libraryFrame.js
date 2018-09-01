// considered as safeCode/

(function(global,$){

    var greeter = function(firstName,lastName,language){
       return new greeter.init(firstName,lastName,language);    
    }

    // creating a protoType
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
})(window,jQuery);