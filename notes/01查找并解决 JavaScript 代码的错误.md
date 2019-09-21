[toc]
一般来说，代码错误主要分为两种：

- 语法错误：代码中存在拼写错误，将导致程序完全或部分不能运行，通常你会收到一些出错信息。只要熟悉语言并了解出错信息的含义，你就能够顺利修复它们。
- 逻辑错误：有些代码语法虽正确，但执行结果和预期相悖，这里便存在着逻辑错误。这意味着程序虽能运行，但会给出错误的结果。由于一般你不会收到来自这些错误的提示，它们通常比语法错误更难修复。

# 语法错误
## “TypeError：guessSubmit.addeventListener is not a function”
（类型错误：`guessSubmit.addeventListener `不是函数）

## “TypeError：lowOrHi is null”
（“类型错误：`lowOrHi为null”`）
> 注：Null是一个特殊值，意思是“什么也没有”，或者“没有值”。这表示 lowOrHi 已声明并初始化，但没有任何有意义的值，可以说：它没有类型没有值。

> 注：这条错误没有在页面加载时立即发生，是因为它发生在函数内部（checkGuess() { ... }块中）。函数内部的代码运行于一个外部代码相互独立的域内，后面函数的文章中将更详细地讲解。此时此刻，只有当代码运行至86行并调用 checkGuess() 函数时，代码才会抛出出错信息。


## SyntaxError: missing ; before statement
（语法错误：语句缺少分号）
这个错误通常意味着你漏写了一行代码最后的分号

## 不管输入什么程序总说“你猜对了！”
这是混淆赋值和严格等于运算符的又一症状。

## SyntaxError: missing ) after argument list
（语法错误：参数表末尾缺少括号）

## SyntaxError: missing : after property id
（语法错误：属性ID后缺少冒号）

## SystaxError: missing } after function body
（语法错误：函数体末尾缺少花括号）

## SyntaxError: expected expression, got 'string'
（语法错误：得到一个 'string' 而非表达式）

## SyntaxError: unterminated string literal
（语法错误：字符串字面量未正常结束）节

# 逻辑错误
此时，游戏应该可以顺利进行了。但经过几次试玩后你一定会注意到要猜的随机数不是 0 就是 1。