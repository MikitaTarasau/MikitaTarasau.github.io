const range = document.getElementById('formRange');
const rangeValue = document.getElementById('formRangeValue');

range.addEventListener("change", () => {
    rangeValue.innerText = range.value;
});