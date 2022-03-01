const button = document.querySelector('.') // 评论按钮
const input1 = document.querySelector('.') // 输入框

// 模拟输入事件 像文本框中输入内容
let evt1 = document.createEvent('HTMLEvents');
evt1.initEvent('input', true, true);
input1.value='[哈哈]';
input1.dispatchEvent(evt1)

// 点击评论按钮 提交评论
button.click()    




