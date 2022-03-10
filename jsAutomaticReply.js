const reply = ()=>{
    return new Promise(resolve=>{
        setTimeout(()=>{

            const button = document.querySelector('') //输入框
            const input1 = document.querySelector('') //评论按钮
            button.disabled = false //解开按钮禁用

            // 监听输入事件 触发点击
            input1.oninput = function() {
                console.log('触发了！')
                setTimeout(()=>{
                    button.click()
                    console.log('评论！')
                    resolve()
                }
                , 1000)

            }

            // 随机内容
            const sendTextArr = ['🙈🙈🙈', '🤑🤑🤑', '😤😤', '👺👺👺', '👌👌👌👌', '👩‍🦰👩‍🦰👩‍🦰👩‍🦰', '👑', '😪', '😍', '🤪', '[嘻嘻]', '[哈哈]', '5299', '冲啊！', '互动', '[舔屏]', '[doge]', '[二哈]', '周周yyds', '[心]', '[中国赞][中国赞]', '战胜恐惧，绝不贪婪', '[并不简单][并不简单]', '[打call][打call]']
            const n = Math.floor(Math.random() * sendTextArr.length + 1) - 1;
            const text = sendTextArr[n]

            // 模拟输入事件 像文本框中输入内容
            let evt1 = document.createEvent('HTMLEvents');
            evt1.initEvent('input', true, true);
            input1.value = text;
            input1.dispatchEvent(evt1)
            console.log('resolve')

        }
        , 3000)

    }
    )
}

const fn = async()=>{
    await reply()
    await reply()
    await reply()
    await reply()
}

// n分钟评论4条
setInterval(()=>{
    fn()
    console.log('16分钟到', new Date())
}
, 60000 * 16)

fn()
