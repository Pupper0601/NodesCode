(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{441:function(_,v,t){"use strict";t.r(v);var a=t(1),s=Object(a.a)({},(function(){var _=this,v=_._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[v("h2",{attrs:{id:"一、-什么是性能测试"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#一、-什么是性能测试"}},[_._v("#")]),_._v(" 一、 什么是性能测试？")]),_._v(" "),v("ul",[v("li",[_._v("通过工具，找出或获得系统在不同工况下的性能指标值")]),_._v(" "),v("li",[_._v("性能测试过程中，重点是"),v("strong",[_._v("找出****性能指标")]),_._v("，而不再是找出 Bug，")]),_._v(" "),v("li",[_._v("性能测试的产出绝对不只是 Bug")])]),_._v(" "),v("h4",{attrs:{id:"案例"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#案例"}},[_._v("#")]),_._v(" 案例：")]),_._v(" "),v("p",[_._v("跑步100米，用时多少？运动员的心跳、步伐频率是多少？")]),_._v(" "),v("ol",[v("li",[_._v("跑步100米：业务场景")]),_._v(" "),v("li",[_._v("用时多少：响应时间")]),_._v(" "),v("li",[_._v("运动员的心跳、步伐：性能指标值")])]),_._v(" "),v("p",[_._v("性能指标值和响应时间是否满足当前业务场景的最低要求（合格线）")]),_._v(" "),v("h2",{attrs:{id:"二、-获取基准值"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#二、-获取基准值"}},[_._v("#")]),_._v(" 二、 获取基准值")]),_._v(" "),v("h4",{attrs:{id:"假设当前有一个业务"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#假设当前有一个业务"}},[_._v("#")]),_._v(" 假设当前有一个业务")]),_._v(" "),v("p",[_._v("电商系统，下单业务，目前还不知道系统支持多少人同时下单，那么我们需要找到服务器能正常支持多少人同时下单")]),_._v(" "),v("h4",{attrs:{id:"性能测试初始阶段-第一次做"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#性能测试初始阶段-第一次做"}},[_._v("#")]),_._v(" 性能测试初始阶段（第一次做）")]),_._v(" "),v("ul",[v("li",[_._v("先把基础的性能指标值找出来**（第一次性能测试也叫做基准测试）**")]),_._v(" "),v("li",[_._v("比如：100个人同时下单系统正常，但120个人同时下单就会出现部分请求的响应时间超长，连接异常")]),_._v(" "),v("li",[_._v("那么100-120范围内的某个值就是当前服务器能达到的性能指标值**（基准值）**")])]),_._v(" "),v("h4",{attrs:{id:"版本迭代-进行第二次做性能测试-重新跑一遍之前的性能脚本"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#版本迭代-进行第二次做性能测试-重新跑一遍之前的性能脚本"}},[_._v("#")]),_._v(" 版本迭代，进行第二次做性能测试，重新跑一遍之前的性能脚本")]),_._v(" "),v("ul",[v("li",[_._v("又会得到一些性能指标值，对比上个版本的"),v("strong",[_._v("性能指标值")]),_._v("，看是否有优化（性能变化）")]),_._v(" "),v("li",[_._v("假设这个时候120个人同时下单是正常的，150个人才有异常，那么接口已经有优化了")])]),_._v(" "),v("h4",{attrs:{id:"假设公司是从0开始做性能测试"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#假设公司是从0开始做性能测试"}},[_._v("#")]),_._v(" 假设公司是从0开始做性能测试")]),_._v(" "),v("ul",[v("li",[_._v("第一阶段：做好性能测试，得到性能指标值")]),_._v(" "),v("li",[_._v("第二阶段：假设性能比之前差，哪些性能指标值不满足预期值，就需要分析是哪里有问题")])]),_._v(" "),v("h2",{attrs:{id:"三、-负载测试-和-压力测试"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#三、-负载测试-和-压力测试"}},[_._v("#")]),_._v(" 三、 负载测试 和 压力测试")]),_._v(" "),v("h3",{attrs:{id:"_1-概念"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-概念"}},[_._v("#")]),_._v(" 1. 概念")]),_._v(" "),v("ul",[v("li",[v("p",[v("strong",[_._v("负载测试")])])]),_._v(" "),v("li",[v("ul",[v("li",[v("strong",[_._v("逐步增加")]),_._v(" 系统负载（增加“用户数”），测试系统性能变化，并最终确定系统所能承受的最大负载量")]),_._v(" "),v("li",[_._v("**通俗理解：**看看你几斤几两")])])]),_._v(" "),v("li",[v("p",[v("strong",[_._v("压力测试")])])]),_._v(" "),v("li",[v("ul",[v("li",[_._v("在较大的性能压力下，持续运行一个比较长的时间，看看系统服务是否正常及系统资源的利用率情况")]),_._v(" "),v("li",[_._v("**通俗理解：**鸭梨山大！")]),_._v(" "),v("li",[_._v("**关键字：**较大压力 + 较长时间")]),_._v(" "),v("li",[_._v("**注意：**不是满负荷压力哦")])])])]),_._v(" "),v("h3",{attrs:{id:"_2-场景"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-场景"}},[_._v("#")]),_._v(" 2. 场景")]),_._v(" "),v("ul",[v("li",[v("p",[v("strong",[_._v("负载测试")])])]),_._v(" "),v("li",[v("ul",[v("li",[_._v("有一个业务，增加到40个人的时候，服务器还能正常使用，没有异常")]),_._v(" "),v("li",[_._v("当你增加到50个人的时候，服务器已经开始有异常了，那么就能确定40-50之间某个值就是系统所能承受的最大负载量**【出现性能拐点，找到了服务器性能瓶颈的范围值】**")]),_._v(" "),v("li",[_._v("最后减小加压梯度（比如：从40个人开始每次增加1个人、2个人），确认最大负载量**【确认性能拐点】**")])])]),_._v(" "),v("li",[v("p",[v("strong",[_._v("压力测试")])])]),_._v(" "),v("li",[v("ul",[v("li",[_._v("**问：**大家什么时候会觉得工作压力大？")]),_._v(" "),v("li",[_._v("**答：**996、007；因为你不会觉得955压力山大吧")]),_._v(" "),v("li",[_._v("**结论：**所以在我们日常工作中，长时间工作强度高，才会觉得压力大；如果你一周就加班一天也说压力大...（那就别干这一行了）")])])])]),_._v(" "),v("h3",{attrs:{id:"_3-压力测试持续运行时间要多久"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-压力测试持续运行时间要多久"}},[_._v("#")]),_._v(" 3. 压力测试持续运行时间要多久？")]),_._v(" "),v("ul",[v("li",[_._v("标准性能测试里面，一般是"),v("strong",[_._v("7*24")]),_._v("小时，或者是它的倍数")]),_._v(" "),v("li",[_._v("但是实际工作中，并不会这么久，否则成本太高")]),_._v(" "),v("li",[_._v("所以会以"),v("strong",[_._v("小时为单位")]),_._v("，比如：4个小时、8个小时...晚上下班之后做，第二天早上上班看结果")])]),_._v(" "),v("h3",{attrs:{id:"_4-先负载测试还是压力测试"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-先负载测试还是压力测试"}},[_._v("#")]),_._v(" 4. 先负载测试还是压力测试？")]),_._v(" "),v("ul",[v("li",[_._v("先负载测试")]),_._v(" "),v("li",[_._v("负载测试可以找到服务器性能瓶颈的范围值，若生产环境中系统稳定性较差，再做压力测试")]),_._v(" "),v("li",[_._v("所以"),v("strong",[_._v("压力测试是可做可不做的")])])]),_._v(" "),v("h2",{attrs:{id:"四、-性能测试步骤"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#四、-性能测试步骤"}},[_._v("#")]),_._v(" 四、 性能测试步骤")]),_._v(" "),v("h3",{attrs:{id:"_1-性能测试准备"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-性能测试准备"}},[_._v("#")]),_._v(" 1. 性能测试准备")]),_._v(" "),v("ul",[v("li",[_._v("**需求分析，熟悉业务：**确定需要重点关注的点，如TPS、响应时间（确定需要收集的性能测试指标值）")]),_._v(" "),v("li",[_._v("明确性能测试目标（预期性能指标值）和测试范围")]),_._v(" "),v("li",[_._v("了解软件功能、架构")]),_._v(" "),v("li",[_._v("制定测试方案、测试计划，做好工作量评估")]),_._v(" "),v("li",[_._v("**制定测试模型（编辑测试用例）：**比如负载测试，场景要如何设计")])]),_._v(" "),v("h3",{attrs:{id:"_2-搭建性能测试环境"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-搭建性能测试环境"}},[_._v("#")]),_._v(" 2. 搭建性能测试环境")]),_._v(" "),v("ul",[v("li",[_._v("**技术准备：**选择性能测试工具；测试方案中涉及到的技术问题；测试数据的收集方案实现；如何监控系统资源")]),_._v(" "),v("li",[_._v("被测系统环境搭建（服务器、服务版本更新、数据库数据准备）")]),_._v(" "),v("li",[_._v("网络配置")]),_._v(" "),v("li",[_._v("创建初始数据，如：测试账号（预估并发量）")])]),_._v(" "),v("h3",{attrs:{id:"_3-性能测试脚本开发"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-性能测试脚本开发"}},[_._v("#")]),_._v(" 3. 性能测试脚本开发")]),_._v(" "),v("ul",[v("li",[_._v("选取协议")]),_._v(" "),v("li",[_._v("制作脚本")]),_._v(" "),v("li",[_._v("调试脚本")]),_._v(" "),v("li",[_._v("验证脚本")])]),_._v(" "),v("h3",{attrs:{id:"_4-性能测试执行"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-性能测试执行"}},[_._v("#")]),_._v(" 4. 性能测试执行")]),_._v(" "),v("p",[_._v("真正开始对服务器进行性能测试")]),_._v(" "),v("ul",[v("li",[_._v("试运行")]),_._v(" "),v("li",[_._v("场景执行")]),_._v(" "),v("li",[_._v("收集并整理测试数据")])]),_._v(" "),v("h3",{attrs:{id:"_5-性能测试结果分析与调优"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_5-性能测试结果分析与调优"}},[_._v("#")]),_._v(" 5. 性能测试结果分析与调优")]),_._v(" "),v("ul",[v("li",[_._v("**分析依据：**结果图表")]),_._v(" "),v("li",[_._v("**分析思路：**服务器硬件瓶颈>网络瓶颈>服务器os瓶颈（参数配置、数据库、web服务器）>应用瓶颈（sql语句、数据库设计、业务逻辑、算法）")]),_._v(" "),v("li",[_._v("调优")]),_._v(" "),v("li",[_._v("修改脚本或场景")]),_._v(" "),v("li",[_._v("性能回归，和之前的测试数据进行对比，是否有优化")])]),_._v(" "),v("h3",{attrs:{id:"_7-性能测试报告与结果跟踪"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_7-性能测试报告与结果跟踪"}},[_._v("#")]),_._v(" 7. 性能测试报告与结果跟踪")]),_._v(" "),v("ul",[v("li",[_._v("**性能测试报告：**整理调优前后的测试数据")]),_._v(" "),v("li",[_._v("性能测试问题跟踪")]),_._v(" "),v("li",[_._v("构建持久化的性能监听平台，监听线上服务器的系统资源")])]),_._v(" "),v("h2",{attrs:{id:"五、-性能指标"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#五、-性能指标"}},[_._v("#")]),_._v(" 五、 性能指标")]),_._v(" "),v("h3",{attrs:{id:"_1-并发用户数-重点"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-并发用户数-重点"}},[_._v("#")]),_._v(" 1. 并发用户数（重点）")]),_._v(" "),v("ul",[v("li",[_._v("同一时间点，发出请求的用户数，一个用户可以发出多个请求")]),_._v(" "),v("li",[_._v("场景不一定是同一个")]),_._v(" "),v("li",[_._v("和 CPU、响应时间有关系")])]),_._v(" "),v("h4",{attrs:{id:"和并发的关系"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#和并发的关系"}},[_._v("#")]),_._v(" 和并发的关系")]),_._v(" "),v("p",[_._v("假设有 10 个用户数，每个用户同一时间点内发起 2 个请求，那么服务器收到的请求并发数就是 20")]),_._v(" "),v("h3",{attrs:{id:"_2-响应时间-respose-time"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-响应时间-respose-time"}},[_._v("#")]),_._v(" 2. 响应时间（Respose Time）")]),_._v(" "),v("h4",{attrs:{id:"响应时间对于性能测试来说"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#响应时间对于性能测试来说"}},[_._v("#")]),_._v(" 响应时间对于性能测试来说")]),_._v(" "),v("ul",[v("li",[_._v("从发起请求到收到请求响应的时间")]),_._v(" "),v("li",[_._v("**包含了：**Request Time 和 Response Time")]),_._v(" "),v("li",[_._v("**等价于：**发起请求网络传输时间 + 服务器处理时间 + 数据库系统处理时间 + 返回响应网络传输时间")])]),_._v(" "),v("h4",{attrs:{id:"对用户所感知的响应时间包括"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#对用户所感知的响应时间包括"}},[_._v("#")]),_._v(" 对用户所感知的响应时间包括")]),_._v(" "),v("ul",[v("li",[_._v("用户客户端渲染时间（多了这个）")]),_._v(" "),v("li",[_._v("请求/响应数据网络传输时间")]),_._v(" "),v("li",[_._v("应用服务器处理时间")]),_._v(" "),v("li",[_._v("数据库系统处理时间")])]),_._v(" "),v("h3",{attrs:{id:"_3-tps-transaction-per-second-最主要的指标"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-tps-transaction-per-second-最主要的指标"}},[_._v("#")]),_._v(" 3. TPS（Transaction Per Second，最主要的指标）")]),_._v(" "),v("p",[_._v("服务器每秒处理事务数，衡量服务器处理能力的最主要指标")]),_._v(" "),v("h4",{attrs:{id:"知道-t-是如何定义的"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#知道-t-是如何定义的"}},[_._v("#")]),_._v(" 知道 T 是如何定义的")]),_._v(" "),v("ul",[v("li",[_._v("在不同的行业、业务中，"),v("strong",[_._v("TPS 定义的颗粒度")]),_._v("可能是不同的")]),_._v(" "),v("li",[_._v("所以不管什么情况下，需要做性能测试的"),v("strong",[_._v("业务的相关方")]),_._v("都要知道你的 "),v("strong",[_._v("T 是如何定义的")])])]),_._v(" "),v("h4",{attrs:{id:"定义-tps-的粒度"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#定义-tps-的粒度"}},[_._v("#")]),_._v(" 定义 TPS 的粒度")]),_._v(" "),v("ul",[v("li",[_._v("一般会"),v("strong",[_._v("根据****场景的目的")]),_._v("来定义 TPS 的粒度")]),_._v(" "),v("li",[_._v("接口层性能测试：T 可以定义为接口级")]),_._v(" "),v("li",[_._v("业务级性能测试：T 可以定义为每个业务步骤和完整的业务流")])]),_._v(" "),v("h3",{attrs:{id:"_4-rps-request-per-second"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-rps-request-per-second"}},[_._v("#")]),_._v(" 4. RPS（Request per Second）")]),_._v(" "),v("h4",{attrs:{id:"简单理解"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#简单理解"}},[_._v("#")]),_._v(" 简单理解")]),_._v(" "),v("p",[_._v("每秒请求数，用户从客户端发起的请求数")]),_._v(" "),v("h3",{attrs:{id:"_5-吞吐量-throughput"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_5-吞吐量-throughput"}},[_._v("#")]),_._v(" 5. 吞吐量（Throughput）")]),_._v(" "),v("p",[_._v("单位时间内，网络处理的请求数量（事务/s）")]),_._v(" "),v("p",[_._v("网络没有瓶颈时，吞吐量≈TPS")]),_._v(" "),v("h3",{attrs:{id:"_6-吞吐率"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_6-吞吐率"}},[_._v("#")]),_._v(" 6. 吞吐率")]),_._v(" "),v("p",[_._v("单位时间内，在网络传输的数据量的平均速率（kB/s）")]),_._v(" "),v("h3",{attrs:{id:"_7-资源利用率"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_7-资源利用率"}},[_._v("#")]),_._v(" 7. 资源利用率")]),_._v(" "),v("ul",[v("li",[_._v("服务器资源的使用程度，比如服务器（应用、服务器）的CPU利用率，内存利用率，磁盘利用率，网络带宽利用率")]),_._v(" "),v("li",[_._v("一般不超过80%")])])])}),[],!1,null,null,null);v.default=s.exports}}]);