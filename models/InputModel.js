var InputModel = function () {
    this.inputs = [];
}

InputModel.prototype = {

  bindInputListChanged : function(callback) {
      this.onInputListChanged = callback;
  },

  commit : function (listInput) {
      this.onInputListChanged(listInput);
  },

  validateInput : function (inputToValidate) {
      return (/\d+/).test(inputToValidate);
  },

  extractAmount : function (inputToProcess) {
      return inputToProcess.replace(/[\s;?%]/g, '').replace(/[,]/g, '.').replace(/[.](?=.*[.])/g, '').match(/[\d\.]+/)[0]; 
  },

  submitInput : function (newInput) {

      if(this.validateInput(newInput)){
          var input = {
              id: this.inputs.length > 0 ? this.inputs[this.inputs.length - 1].id + 1 : 1,
              text: this.extractAmount(newInput)
          }
      
          this.inputs.push(input);
          this.commit(this.inputs);
      }

  }
  
}