

function parallelogramCalculate(){
    // console.log('Hello World')
    const paraBase = getInputValueById('para-base');
    const paraHeight = getInputValueById('para-height');
    const area = paraBase * paraHeight;
    // console.log(paraBase);
    // console.log(paraHeight);
    setInnerTextById('para-area', area);
}

function getInputValueById(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputFieldText = parseFloat(inputField.value);
    return inputFieldText;
}

function setInnerTextById(elementId, area){
    const paraArea = document.getElementById(elementId);
    paraArea.innerText = area;
}

/*************
 * 
 */
