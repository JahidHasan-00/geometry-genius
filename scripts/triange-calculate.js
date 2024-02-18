
//first set id attribute on input field
//Select the element with id
//get value this input element
//check this value string or number 
//convert this string value in number


function calculateTriangleArea(){
    /****** Triangle Base */
    const triangleBase = document.getElementById('triangle-base');
    const triangleBaseValue = triangleBase.value;
    // console.log(typeof triangleBaseValue);
    const baseNumberValue = parseFloat(triangleBaseValue);
    // console.log(baseNumberValue);
    // console.log(typeof baseNumberValue);
    
    /********Triangle Height */
    const triangleHeight = document.getElementById('triangle-height');
    const triangleHeightValue = parseFloat(triangleHeight.value);
    // console.log(triangleHeightValue);
    
    /********Triangle Area*/
    const baseAndHeight = 0.5 * baseNumberValue * triangleHeightValue;
    // console.log(baseAndHeight);

    const triangleArea = document.getElementById('triangle-area');
    triangleArea.innerText = baseAndHeight;
    
}