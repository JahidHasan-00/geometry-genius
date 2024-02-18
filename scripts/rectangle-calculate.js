
function calculateRectangleArea(){
    /*** Rectangle Length value access: */
    const recLength = document.getElementById('rec-length');
    const lengthValue = recLength.value;
    // console.log(lengthValue)
    // console.log(typeof lengthValue);
    const lengthValueType = parseFloat(lengthValue);
    console.log(lengthValueType);

    /*** Rectangle width value access: */
    const recWidth = document.getElementById('rec-width');
    const widthValue = parseFloat(recWidth.value);
    console.log(widthValue);

    const rectArea = document.getElementById('rectangle-area');
    rectArea.innerText = lengthValue * widthValue;

}