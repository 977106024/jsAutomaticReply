const button = document.querySelector('.') // 评论按钮
const input1 = document.querySelector('.') // 输入框


const reply = () => {
    // 随机内容
    const sendTextArr = ['[嘻嘻]', '[哈哈]', '5299', '冲啊！', '互动', '[舔屏]', '[doge]', '[二哈]', '周周yyds', '[心]']
    const n = Math.floor(Math.random() * sendTextArr.length + 1) - 1;
    const text = sendTextArr[n]

    // 模拟输入事件 像文本框中输入内容
    let evt1 = document.createEvent('HTMLEvents');
    evt1.initEvent('input', true, true);
    input1.value = text;
    input1.dispatchEvent(evt1)

    // 点击评论按钮 提交评论
    setTimeout(() => {
        button.click()
        console.log('评论！')
    }, 2000)
}

reply()

// 十分钟评论一次
setInterval(() => {
    reply()
    console.log('10分钟到')
}, 60000 * 10)






