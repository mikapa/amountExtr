var InputController = function (model, view) {
    this.model = model;
    this.view = view;

    this.init();
}

InputController.prototype =  {

    init : function () {

        this.submitInputHandler = this.handleSubmitInput.bind(this);
        this.addonInputListHandler = this.onInputListChanged.bind(this);

        this.model.bindInputListChanged(this.addonInputListHandler);
        this.view.bindAddInput(this.submitInputHandler);
    
        this.onInputListChanged(this.model.inputs);

    },

      
    onInputListChanged: function(inputs) {
        this.view.showInputs(inputs);
    },

    handleSubmitInput: function(inputText) {
        this.model.submitInput(inputText)
      }

    
}
