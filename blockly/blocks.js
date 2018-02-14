Blockly.Blocks['hello_world'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldVariable("str"), "str")
          .appendField("輸入字串");
      this.appendStatementInput("NAME")
          .setCheck("String")
          .appendField("輸出");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
};
