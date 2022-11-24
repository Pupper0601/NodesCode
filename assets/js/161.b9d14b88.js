(window.webpackJsonp=window.webpackJsonp||[]).push([[161],{499:function(s,t,a){"use strict";a.r(t);var n=a(1),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"_1-确定-python-版本"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-确定-python-版本"}},[s._v("#")]),s._v(" 1. 确定 python 版本")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# python2 版本")]),s._v("\npython --version\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# python3 版本")]),s._v("\npython3 --version\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[t("img",{attrs:{src:"https://pupper.com.cn/img/20220730105643.png",alt:""}})]),s._v(" "),t("h2",{attrs:{id:"_2-创建-python-脚本"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-创建-python-脚本"}},[s._v("#")]),s._v(" 2. 创建 python 脚本")]),s._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("提示")]),s._v(" "),t("p",[s._v("Python中 sys.argv的用法解释："),t("strong",[s._v("sys.argv")]),s._v(" 可以让python脚本从程序外部获取参数")]),s._v(" "),t("ul",[t("li",[s._v("sys.argv是一个列表，可用"),t("code",[s._v("[]")]),s._v("提取其中的元素，\n"),t("ul",[t("li",[s._v("其第一个元素是程序本身，随后才依次是外部给予的参数，可以接受多个参数，每个参数用空格隔开即可。")]),s._v(" "),t("li",[s._v("获取外部传入的元素从 "),t("strong",[s._v("变量名[1]")]),s._v(" 开始获取")])])])])]),s._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("提示")]),s._v(" "),t("p",[s._v("脚本中 "),t("code",[s._v("print()")]),s._v(" 的内容都可被 jmeter 接收，可以在 jmeter 中使用正则表达式提取器对相关参数进行提取。")])]),s._v(" "),t("div",{staticClass:"language-python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# test.py")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# sys 用于获取外部传入的参数")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" sys\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" hashlib\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("loginMd5")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("username"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" password"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n\tres "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" getMd5"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("username"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("password"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# print 用于将处理后的参数传给 jmeter")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"md5"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" res"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("getMd5")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("value"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n\tmd5 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" hashlib"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("md5"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\tmd5"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("update"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("value"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("encode"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"utf-8"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" md5"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("hexdigest"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\nloginMd5"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("sys"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("argv"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" sys"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("argv"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br")])]),t("h2",{attrs:{id:"_3-创建脚本文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-创建脚本文件"}},[s._v("#")]),s._v(" 3. 创建脚本文件")]),s._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("提示")]),s._v(" "),t("p",[s._v("$1 $2 : 表示将2个参数传递给 python 文件 ( 或者使用 $1 $1 也是表示传两个参数 ) 。")])]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# shell.sh")]),s._v("\npython3 /Users/xxx/Documents/AutomatedTesting/jmeter/test.py "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$2")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[s._v("注意")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("Mac 系统后缀名为 "),t("code",[s._v(".sh")]),s._v(" 文件， windows 系统后缀名为 "),t("code",[s._v(".bat")]),s._v(" 文件")])]),s._v(" "),t("li",[t("p",[s._v("Mac 传输的 python 脚本的占位符为 "),t("code",[s._v("$")]),s._v("，windows 占位符为 "),t("code",[s._v("%")])])])])]),s._v(" "),t("h2",{attrs:{id:"_4-jmeter-获取传参给-python-脚本"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-jmeter-获取传参给-python-脚本"}},[s._v("#")]),s._v(" 4. jmeter 获取传参给 python 脚本")]),s._v(" "),t("h3",{attrs:{id:"_1-获取-csv-文件数据"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-获取-csv-文件数据"}},[s._v("#")]),s._v(" 1. 获取 csv 文件数据")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://pupper.com.cn/img/image-20220730112701146.png",alt:"image-20220730112701146"}})]),s._v(" "),t("h3",{attrs:{id:"_2-使用-os-进程提取器-向-python-脚本传参"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-使用-os-进程提取器-向-python-脚本传参"}},[s._v("#")]),s._v(" 2. 使用 OS 进程提取器 向 python 脚本传参")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://pupper.com.cn/img/image-20220730113134712.png",alt:"image-20220730113134712"}})]),s._v(" "),t("h2",{attrs:{id:"_5-使用-正则表达式提取器-获取-python-打印的数据"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-使用-正则表达式提取器-获取-python-打印的数据"}},[s._v("#")]),s._v(" 5. 使用 正则表达式提取器 获取 python 打印的数据")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://pupper.com.cn/img/image-20220730114127345.png",alt:"image-20220730114127345"}})]),s._v(" "),t("h2",{attrs:{id:"_6-运行-jmeter-脚本即可查看加密后的数据"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-运行-jmeter-脚本即可查看加密后的数据"}},[s._v("#")]),s._v(" 6. 运行 jmeter 脚本即可查看加密后的数据")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://pupper.com.cn/img/image-20220730115448345.png",alt:"image-20220730115448345"}})]),s._v(" "),t("h2",{attrs:{id:"问题解答"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#问题解答"}},[s._v("#")]),s._v(" 问题解答")]),s._v(" "),t("h3",{attrs:{id:"_1-运行时提示没有文件权限"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-运行时提示没有文件权限"}},[s._v("#")]),s._v(" 1. 运行时提示没有文件权限")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://pupper.com.cn/img/image-20220730114600409.png",alt:"image-20220730114600409"}})]),s._v(" "),t("h4",{attrs:{id:"解决办法-给-sh-脚本赋予权限-需要输入-电脑-密码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#解决办法-给-sh-脚本赋予权限-需要输入-电脑-密码"}},[s._v("#")]),s._v(" 解决办法: 给 "),t("code",[s._v(".sh")]),s._v(" 脚本赋予权限, 需要输入 电脑 密码")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("777")]),s._v(" /Users/xxx/Documents/AutomatedTesting/jmeter/shell.sh\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("img",{attrs:{src:"https://pupper.com.cn/img/image-20220730115055482.png",alt:"image-20220730115055482"}})])])}),[],!1,null,null,null);t.default=e.exports}}]);