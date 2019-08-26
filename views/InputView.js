var InputView = function (model) {

    this.model = model;
    this.init();
}

InputView.prototype = {

    init: function () {
        this.form = this.getElement('form');
        this.input = this.getElement('input');
        this.inputsList = this.getElement('ul');
    },

    inputText: function () {
        return this.input.value;
    },
    
    resetInput: function() {
        this.input.value = '';
    },
    
    createElement: function(tag) {
        var element = document.createElement(tag);
        return element;
    },
    
    getElement: function(selector) {
        var element = document.querySelector(selector);
        return element;
    },
    
    showInputs: function(inputs) {

        while (this.inputsList.firstChild) {
        
          this.inputsList.removeChild(this.inputsList.firstChild);
        }
    
        if (inputs.length === 0) {

          var p = this.createElement('p');
          p.textContent = "You have,'t inserted anything yet!";
          this.inputsList.append(p);

        } else {
            inputs.reverse().forEach(input => {

              var li = this.createElement('li');
              li.id = input.id;
              var span = this.createElement('span');
              span.textContent = input.text;
              li.append(span);
            
              this.inputsList.append(li);
          })
        }
      },
    
      bindAddInput: function(handler) {
        this.form.addEventListener('submit', event => {

            event.preventDefault();
      
            if (this.inputText()) {
              handler(this.inputText())
              this.resetInput()
            }
          })
      }

}