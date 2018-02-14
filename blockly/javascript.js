Blockly.JavaScript['hello_world'] = function(block) {
    var variable_str = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('str'), Blockly.Variables.NAME_TYPE);
    var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
    // TODO: Assemble JavaScript into code variable.
    var code = 'hello()';
    return code;
};
