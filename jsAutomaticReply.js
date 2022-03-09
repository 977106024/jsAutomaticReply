
const reply = () => {
    return new Promise(resolve => {
        const button = document.querySelector('.') // 评论按钮
        const input1 = document.querySelector('.') // 输入框
        button.disabled = false

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
            resolve()
        }, 3000)
    })

}



const s1 = async () => {
    await s1()
    await s1()
    await s1()
    await s1()
}
s1()


// n分钟评论 一次留言4条
setInterval(() => {
    console.log('16分钟到', new Date())
    s1()
}, 60000 * 16)






