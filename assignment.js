function feetToMile(feet) {
    var result = feet / 5280;
    return result;
}
var ans = feetToMile(10);
console.log("Mile :", ans);

function woodCalculator(chair, table, bed) {
    var a = chair * 1;
    var b = table * 3;
    var c = bed * 5;
    var totalWood = a + b + c;
    console.log("chair + table + bed =", totalWood);
}

woodCalculator(10, 2, 3);

function brickCalculator(height) {
    if (height > 0) {
        if (height > 0 && height <= 10) {
            var brick = 15 * 1000;
            console.log("brick :", brick);
        } else if (height > 10 && height <= 20) {
            var brick = 12 * 1000;
            console.log("brick :", brick);
        } else if (height > 20) {
            var brick = 10 * 1000;
            console.log("brick :", brick);
        }
    } else {
        console.log("Height will be positive number.");
    }

}

brickCalculator(11);

function tinyFriend() {
    var array = ["sumon", "rakib", "rasel", "shanto", "samin", "nitu"];
    for (var i = 0; i < array.length; i++) {
        var name = array[i].length;
    }
    console.log(Math.min(name));
}

tinyFriend();