//点击clear按钮出发事件
// document.getElementById('clear').addEventListener('click', function () {
//     document.getElementById('display').value = '';
// });

function clearNum() {
    document.getElementById('display').value = '';
}

//获取对应按钮的值
function get(value) {
    document.getElementById('display').value += value;
}

//计算
function calculates() {
    var result = 0;
    result = document.getElementById('display').value;
    clearNum();
    document.getElementById('display').value = eval(result);
}