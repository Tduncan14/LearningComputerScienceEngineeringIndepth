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
})(window,jQuery);