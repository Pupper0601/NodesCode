(window.webpackJsonp=window.webpackJsonp||[]).push([[146],{484:function(t,s,a){"use strict";a.r(s);var e=a(1),n=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"一、-多级路由转发"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一、-多级路由转发"}},[t._v("#")]),t._v(" 一、 多级路由转发")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://pupper.com.cn/img/20220726094941.png",alt:""}})]),t._v(" "),s("h3",{attrs:{id:"_1-django-的路由分发"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-django-的路由分发"}},[t._v("#")]),t._v(" 1. Django 的路由分发")]),t._v(" "),s("div",{staticClass:"language-python line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" django"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("urls "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" path"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" include\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" app "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" urls\n\nurlpatterns "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 以 app 开头的路径，全部交给 app 处理")]),t._v("\n\tpath"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'1级路由'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" include"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("urls"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br")])]),s("h2",{attrs:{id:"二、-数据库模型-orm"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二、-数据库模型-orm"}},[t._v("#")]),t._v(" 二、 数据库模型 --- ORM")]),t._v(" "),s("p",[s("code",[t._v("Object Relational Mapping")]),t._v(" 对象关系映射")]),t._v(" "),s("p",[t._v("ORM 的优势 ： 利用编程语言方便操作数据库，无需掌握复杂的 sql 语句")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://pupper.com.cn/img/20220726095003.png",alt:""}})]),t._v(" "),s("h3",{attrs:{id:"_1-orm-用法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-orm-用法"}},[t._v("#")]),t._v(" 1. ORM 用法")]),t._v(" "),s("ul",[s("li",[t._v("数据模型定义在 APP 目录下的 "),s("code",[t._v("models.py")]),t._v(" 中")]),t._v(" "),s("li",[t._v("模型类继承 Django 的 "),s("code",[t._v("models.Model")]),t._v(" 模型基本类")]),t._v(" "),s("li",[t._v("类名对应表名称，实际是小写应用名_小写模型类名")]),t._v(" "),s("li",[t._v("类成员对应数据的字段类型")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://pupper.com.cn/img/20220726095025.png",alt:""}})]),t._v(" "),s("h3",{attrs:{id:"_2-数据库常用字段类型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-数据库常用字段类型"}},[t._v("#")]),t._v(" 2. 数据库常用字段类型")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://docs.djangoproject.com/zh-hans/3.1/ref/models/fields/#field-options",target:"_blank",rel:"noopener noreferrer"}},[s("strong",[t._v("Django 字段参考")]),s("OutboundLink")],1)]),t._v(" "),s("h4",{attrs:{id:"常用字段"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#常用字段"}},[t._v("#")]),t._v(" 常用字段")]),t._v(" "),s("p",[s("code",[t._v("CharField")]),t._v(" ： 字符串类型， 必须接收一个 "),s("code",[t._v("max_length 参数")]),t._v("， 表示字符串最大长度")]),t._v(" "),s("p",[s("code",[t._v("BooleanField")]),t._v(" ： 布尔值类型， 默认为 None")]),t._v(" "),s("p",[s("code",[t._v("DateTimeField")]),t._v(" ： 日期时间类型， python 的 datetime.datetime 实例")]),t._v(" "),s("p",[s("code",[t._v("IntegerField")]),t._v(" ： 整数类型，范围 -2,147,483,648 到 2,147,483,647 。")]),t._v(" "),s("h4",{attrs:{id:"字段-参数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#字段-参数"}},[t._v("#")]),t._v(" 字段 参数")]),t._v(" "),s("p",[s("code",[t._v("null")]),t._v(" ： 如果是 True，Django 将在数据库中存储空值 NULL， 默认为False")]),t._v(" "),s("p",[s("code",[t._v("default")]),t._v(" ： 默认值。可以是一个值，也可以是一个可调用的对象，不能是一个可更改的对象")]),t._v(" "),s("p",[s("code",[t._v("unique")]),t._v(" ： 如果设置为 true，这个字段在整个表中保持值唯一。 默认为 False。若为True 该字段可以成为一个唯一索引")]),t._v(" "),s("p",[s("code",[t._v("verbose_name")]),t._v(" ： 字段备注名。如果没有给定详细名称，Django会使用字段的属性名自动创建，下划线转换为空格")]),t._v(" "),s("p",[s("code",[t._v("primary_key")]),t._v(" ： 如果设置为True，将该字段设置为该模型的主键，最多只有一个字段被设置，如果没有设置，Django会自带创建一个名为 ID 的字段作为主键")]),t._v(" "),s("h2",{attrs:{id:"三、-数据库的激活与迁移"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三、-数据库的激活与迁移"}},[t._v("#")]),t._v(" 三、 数据库的激活与迁移")]),t._v(" "),s("h3",{attrs:{id:"_1-数据模型配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-数据模型配置"}},[t._v("#")]),t._v(" 1. 数据模型配置")]),t._v(" "),s("ul",[s("li",[s("p",[s("code",[t._v("settings.py")]),t._v(" 设置对应的数据库连接信息")]),t._v(" "),s("ul",[s("li",[t._v("如果用默认的 sqlite 作为开发数据库可以不用设置")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://pupper.com.cn/img/20220726095102.png",alt:""}})])]),t._v(" "),s("li",[s("p",[s("code",[t._v("settings.py")]),t._v(" 关联对应数据所在的 app")]),t._v(" "),s("ul",[s("li",[t._v("即 为应用注册")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://pupper.com.cn/img/20220726095127.png",alt:""}})])])]),t._v(" "),s("h3",{attrs:{id:"_2-数据迁移命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-数据迁移命令"}},[t._v("#")]),t._v(" 2. 数据迁移命令")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),s("p",[t._v("修改数据库后，需要运行这两个命令同步数据库")])]),t._v(" "),s("ul",[s("li",[s("p",[t._v("生成模型迁移文件（此时不操作数据库）")]),t._v(" "),s("div",{staticClass:"language-cmd line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("python manage.py makemigrations\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])])]),t._v(" "),s("li",[s("p",[t._v("同步到数据库（此时操作数据库）")]),t._v(" "),s("div",{staticClass:"language-cmd line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("python manage.py migrate\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])])])]),t._v(" "),s("h2",{attrs:{id:"四、-数据库-api-操作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#四、-数据库-api-操作"}},[t._v("#")]),t._v(" 四、 数据库 API 操作")]),t._v(" "),s("h3",{attrs:{id:"_1-django-自动命令行"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-django-自动命令行"}},[t._v("#")]),t._v(" 1. Django 自动命令行")]),t._v(" "),s("div",{staticClass:"language-cmd line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("python manage.py shell\n\n或者\n\ndjango-admin shell\t# python mange.py 相当于 django-admin\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])]),s("p",[s("img",{attrs:{src:"https://pupper.com.cn/img/20220726095158.png",alt:""}})]),t._v(" "),s("h3",{attrs:{id:"_2-模型管理器-manager"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-模型管理器-manager"}},[t._v("#")]),t._v(" 2. 模型管理器（Manager）")]),t._v(" "),s("p",[t._v("模型管理器 ： 管理当前数据模型对应表的 增删改查 操作")]),t._v(" "),s("p",[t._v("只能通过类调用，不能通过实例调用")]),t._v(" "),s("p",[t._v("如 "),s("code",[t._v("Event.objects")]),t._v("  而不是 "),s("code",[t._v("Event（）.objects")])]),t._v(" "),s("h4",{attrs:{id:"使用模型管理器-增-查"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用模型管理器-增-查"}},[t._v("#")]),t._v(" 使用模型管理器 增 查")]),t._v(" "),s("div",{staticClass:"language-cmd line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('增\n\nEvent.objects.create（name="发布会", address="软件大道",)\n')])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("div",{staticClass:"language-cmd line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("查\n\nEvent.objects.all()\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("h3",{attrs:{id:"_3-增、删、改、查"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-增、删、改、查"}},[t._v("#")]),t._v(" 3. 增、删、改、查")]),t._v(" "),s("h4",{attrs:{id:"_1-增"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-增"}},[t._v("#")]),t._v(" 1. 增")]),t._v(" "),s("div",{staticClass:"language-cmd line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("Model.objects.create(**kw)\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("h4",{attrs:{id:"_2-删"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-删"}},[t._v("#")]),t._v(" 2. 删")]),t._v(" "),s("div",{staticClass:"language-cmd line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("modelObj.delete()\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("h4",{attrs:{id:"_3-改"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-改"}},[t._v("#")]),t._v(" 3. 改")]),t._v(" "),s("div",{staticClass:"language-cmd line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("new_modelObj.save()\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("h4",{attrs:{id:"_4-查"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-查"}},[t._v("#")]),t._v(" 4. 查")]),t._v(" "),s("div",{staticClass:"language-cmd line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("Model.objects.filiter(**kw)\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("ul",[s("li",[s("p",[t._v("查询所有        select * from 表名")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("Model.objects.all()")]),t._v(" ： 返回 QuerySet 对象")])])]),t._v(" "),s("li",[s("p",[t._v("过滤查询条件        select * from 表名 where xxx")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("Model.objects.filter(**kw)")]),t._v(" ： 返回 QuerySet 对象")]),t._v(" "),s("li",[s("code",[t._v("Model.objects.values(**kw)")]),t._v(" ： 返回 QuerySet 对象（内容时数据键值对）")])])]),t._v(" "),s("li",[s("p",[t._v("查询单个      select * from 表名 where xxx limits=1")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("Model.objects.get(**kw)")]),t._v(" ： 返回单个模型数据对象，如果结果超过或者少于1个抛出异常")])])]),t._v(" "),s("li",[s("p",[t._v("快捷操作查")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("get_object_or_404(模型类，**kw)")])])])])]),t._v(" "),s("p",[s("code",[t._v("**KW")]),t._v(" ： 表示查询参数，对应数据库字段名：值")]),t._v(" "),s("h2",{attrs:{id:"五、-django-自带-admin-后台"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#五、-django-自带-admin-后台"}},[t._v("#")]),t._v(" 五、 Django 自带 admin 后台")]),t._v(" "),s("h3",{attrs:{id:"_1-注册-超级用户"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-注册-超级用户"}},[t._v("#")]),t._v(" 1. 注册 超级用户")]),t._v(" "),s("div",{staticClass:"language-cmd line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("python manage.py createsuperuser\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("页面地址：")]),t._v(" "),s("p",[s("code",[t._v("http://127.0.0.1:8000/admin/")])]),t._v(" "),s("h3",{attrs:{id:"_2-后台数据关联数据模型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-后台数据关联数据模型"}},[t._v("#")]),t._v(" 2. 后台数据关联数据模型")]),t._v(" "),s("p",[t._v("在 "),s("code",[t._v("admin.py")]),t._v(" 文件中修改")]),t._v(" "),s("div",{staticClass:"language-python line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" sgin "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" models\n\nadmin"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("site"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("register"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("models"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Event"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("p",[s("img",{attrs:{src:"https://pupper.com.cn/img/20220726095224.png",alt:""}}),t._v(" "),s("img",{attrs:{src:"https://pupper.com.cn/img/20220726095248.png",alt:""}})]),t._v(" "),s("h3",{attrs:{id:"_3-修改显示信息"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-修改显示信息"}},[t._v("#")]),t._v(" 3.  修改显示信息")]),t._v(" "),s("p",[t._v("在 "),s("code",[t._v("models.py")]),t._v(" 文件中修改")]),t._v(" "),s("div",{staticClass:"language-python line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("__str__")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("p",[s("img",{attrs:{src:"https://pupper.com.cn/img/20220726095309.png",alt:""}}),t._v(" "),s("img",{attrs:{src:"https://pupper.com.cn/img/20220726095332.png",alt:""}})]),t._v(" "),s("h3",{attrs:{id:"_4-通过-数据库表的主键-id-来实现页面跳转"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-通过-数据库表的主键-id-来实现页面跳转"}},[t._v("#")]),t._v(" 4. 通过 数据库表的主键（id）来实现页面跳转")]),t._v(" "),s("code-group",[s("code-block",{attrs:{title:"urls.py",active:""}},[s("div",{staticClass:"language-python line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" django"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("urls "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" path\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" sgin "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" views\n\nurlpatterns "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    path"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'events/'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" views"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("events"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    path"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'event_detail/<int:event_id>'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" views"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("event_detail"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br")])])]),t._v(" "),s("code-block",{attrs:{title:"views.py"}},[s("div",{staticClass:"language-python line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("events")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 从数据库查询所有发布会信息")]),t._v("\n    event_list "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Event"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("objects"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("all")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" render"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"sgin/events.html"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'event_list'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("event_list"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 发布会详情")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("event_detail")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" event_id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 根据 event_id 查询对应的发布会数据")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# pk:主键 默认数据表中的主键名为id")]),t._v("\n    event "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Event"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("objects"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("get"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("pk"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("event_id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" render"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"sgin/event_detail.html"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"event"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("event"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br")])])]),t._v(" "),s("code-block",{attrs:{title:"events.html"}},[s("div",{staticClass:"language-html line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[t._v('{% extends "sgin/base.html" %}\n\n{% block content %}\n'),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("ul")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("list-group"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  {% for event in event_list %}\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("li")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("list-group-item text-center"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("a")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("href")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("/sgin/event_detail/{{ event.id }}"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("{{ event }}"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("a")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("li")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  {% endfor %}\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("ul")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n{% endblock %}\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br")])])])],1),t._v(" "),s("h2",{attrs:{id:"六、-数据库表关联"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#六、-数据库表关联"}},[t._v("#")]),t._v(" 六、 数据库表关联")]),t._v(" "),s("h3",{attrs:{id:"_1-外键的定义方式-多对1"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-外键的定义方式-多对1"}},[t._v("#")]),t._v(" 1. 外键的定义方式（多对1）")]),t._v(" "),s("div",{staticClass:"language-CMD line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("models.ForeignKey(目标模型类， on_delete=models.CASCADE)\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("此外键定义在多对一方")]),t._v(" "),s("h4",{attrs:{id:"on-delete可选项"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#on-delete可选项"}},[t._v("#")]),t._v(" on_delete可选项")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("CASCADE")]),t._v("  ： 模拟 SQL 语音中的 ON DELETE CASCADE 约束，将定义有违建的模型对象同时删除")]),t._v(" "),s("li",[s("code",[t._v("PROTECT")]),t._v(" ： 组织上面的删除操作，但是弹出 ProtectedError 异常")]),t._v(" "),s("li",[s("code",[t._v("SET_NULL")]),t._v(" ： 将外键字段设置为null， 只有当字段设置了 null=True 时，方可使用该值")]),t._v(" "),s("li",[s("code",[t._v("SET_DEFAULT")]),t._v(" ： 将外键字段设置为默认值。只有当字段设置了 default 参数时，方可使用")]),t._v(" "),s("li",[s("code",[t._v("DO_NOTHING")]),t._v(" ： 什么也不做")]),t._v(" "),s("li",[s("code",[t._v("SET()")]),t._v(" ： 自定义值，参数可以为常量或者回调函数的返回值")])]),t._v(" "),s("div",{staticClass:"language-python line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 关联发布会")]),t._v("\nevent "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" models"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ForeignKey"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Event"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" on_delete"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("models"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("DO_NOTHING"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" verbose_name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"关联发布会"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("p",[s("img",{attrs:{src:"https://pupper.com.cn/img/20220726095402.png",alt:""}})]),t._v(" "),s("h3",{attrs:{id:"_2-外键的定义方式-多对多"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-外键的定义方式-多对多"}},[t._v("#")]),t._v(" 2. 外键的定义方式（多对多）")]),t._v(" "),s("div",{staticClass:"language-cmd line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("modelsManyToManyField（目标模型类）\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("只可以在一方定义，不可以两方同时定义")])],1)}),[],!1,null,null,null);s.default=n.exports}}]);