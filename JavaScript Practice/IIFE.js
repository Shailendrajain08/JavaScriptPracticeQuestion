let paintColor = "red";

const paint = (() => {
    return {
        changeColorToBlue : () => {
           paintColor = "blue"
            return paintColor
        }
    }
})();

console.log(paint.changeColorToBlue())