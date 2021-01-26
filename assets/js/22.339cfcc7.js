(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{505:function(a,t,s){"use strict";s.r(t);var v=s(4),_=Object(v.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h2",{attrs:{id:"javascript-内存管理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#javascript-内存管理"}},[a._v("#")]),a._v(" JavaScript 内存管理")]),a._v(" "),s("ul",[s("li",[a._v("内存： 由可读写单元组成，表示一片可操作空间")]),a._v(" "),s("li",[a._v("管理： 人为的去操作空间的申请，使用 和 释放")]),a._v(" "),s("li",[a._v("内存管理： 开发者主动申请空间，使用空间，释放空间")]),a._v(" "),s("li",[a._v("管理流程： 申请 —— 使用 —— 释放")])]),a._v(" "),s("h2",{attrs:{id:"javascript中的垃圾"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#javascript中的垃圾"}},[a._v("#")]),a._v(" JavaScript中的垃圾")]),a._v(" "),s("ul",[s("li",[s("p",[a._v("JavaScript 中内存管理是自动的")])]),a._v(" "),s("li",[s("p",[a._v("对象不再被引用时是垃圾")])]),a._v(" "),s("li",[s("p",[a._v("对象不能从根上访问到时是垃圾")])])]),a._v(" "),s("h2",{attrs:{id:"javascript-中的可达对象"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#javascript-中的可达对象"}},[a._v("#")]),a._v(" JavaScript 中的可达对象")]),a._v(" "),s("ul",[s("li",[a._v("可以访问到的对象就是可达对象 （引用、作用域链）")]),a._v(" "),s("li",[a._v("可达的标准就是从根触发是否可以被找到")]),a._v(" "),s("li",[a._v("JavaScript 中的根可以理解为时全局变量对象")])]),a._v(" "),s("h3",{attrs:{id:"javascript-中的引用-和-可达"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#javascript-中的引用-和-可达"}},[a._v("#")]),a._v(" JavaScript 中的引用 和 可达")]),a._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("let")]),a._v(" obj "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("name"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'tom'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 该对象空间被 obj 引用，且obj 可以从全局中找到即 可达，也间接指出该对象空间 也是可达的")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("let")]),a._v(" tom "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" obj"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 对象空间又多了一次被 tom 的引用")]),a._v("\n\nobj "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// obj 对于对象空间的引用切断，由于tom还在对对象空间产生引用，即对象空间还是可达的")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br")])]),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("function")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("objGroup")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[a._v("obj1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" obj2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    obj1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("next "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" obj2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    obj2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("prev "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" obj1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    \n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        o1"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" obj1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n        o2"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" obj2\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("let")]),a._v(" obj "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("objGroup")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("name"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'obj1'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("name"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'obj2'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("delete")]),a._v(" obj"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("o1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("obj"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br")])]),s("h2",{attrs:{id:"gc"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#gc"}},[a._v("#")]),a._v(" GC")]),a._v(" "),s("h3",{attrs:{id:"gc中的垃圾是什么"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#gc中的垃圾是什么"}},[a._v("#")]),a._v(" GC中的垃圾是什么")]),a._v(" "),s("ul",[s("li",[a._v("程序中不再需要使用的对象")]),a._v(" "),s("li",[a._v("程序中不能再访问到的对象")])]),a._v(" "),s("h3",{attrs:{id:"gc算法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#gc算法"}},[a._v("#")]),a._v(" GC算法")]),a._v(" "),s("p",[a._v("GC工作时查找和回收所遵循的规则。")]),a._v(" "),s("ul",[s("li",[a._v("引用计数")]),a._v(" "),s("li",[a._v("标记清除")]),a._v(" "),s("li",[a._v("标记整理")]),a._v(" "),s("li",[a._v("分代回收")])]),a._v(" "),s("h3",{attrs:{id:"引用计数算法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#引用计数算法"}},[a._v("#")]),a._v(" 引用计数算法")]),a._v(" "),s("ul",[s("li",[a._v("核心实现： 设置引用数，判断当前引用数是否为 0")]),a._v(" "),s("li",[a._v("引用计数器")]),a._v(" "),s("li",[a._v("引用关系改变时修改引用数字")]),a._v(" "),s("li",[a._v("引用数字为 0 时立即回收")])]),a._v(" "),s("h4",{attrs:{id:"引用计数优点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#引用计数优点"}},[a._v("#")]),a._v(" 引用计数优点")]),a._v(" "),s("ul",[s("li",[a._v("发现垃圾立即回收")]),a._v(" "),s("li",[a._v("最大限度的减少程序暂停")])]),a._v(" "),s("h4",{attrs:{id:"引用计数缺点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#引用计数缺点"}},[a._v("#")]),a._v(" 引用计数缺点")]),a._v(" "),s("ul",[s("li",[a._v("无法回收循环引用的对象")]),a._v(" "),s("li",[a._v("时间开销大")])]),a._v(" "),s("h3",{attrs:{id:"标记清除算法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#标记清除算法"}},[a._v("#")]),a._v(" 标记清除算法")]),a._v(" "),s("ul",[s("li",[a._v("核心思想： 分 标记 和 清除两个阶段")]),a._v(" "),s("li",[a._v("遍历所有对象标记活动对象（对可达对象的标记）")]),a._v(" "),s("li",[a._v("遍历所有对象清除没有标记对象")]),a._v(" "),s("li",[a._v("回收相应的空间（需要回收的空间会放在空闲列表里面）")])]),a._v(" "),s("h4",{attrs:{id:"标记清除优点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#标记清除优点"}},[a._v("#")]),a._v(" 标记清除优点")]),a._v(" "),s("ul",[s("li",[a._v("对于引用计数算法可回收循环引用的对象")])]),a._v(" "),s("h4",{attrs:{id:"标记清除缺点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#标记清除缺点"}},[a._v("#")]),a._v(" 标记清除缺点")]),a._v(" "),s("ul",[s("li",[a._v("可能造成地址不连续的碎片化空间（回收的空间不连续）")]),a._v(" "),s("li",[a._v("不会立即回收垃圾对象")])]),a._v(" "),s("h3",{attrs:{id:"标记整理算法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#标记整理算法"}},[a._v("#")]),a._v(" 标记整理算法")]),a._v(" "),s("ul",[s("li",[s("p",[a._v("标记整理可以看作时标记清除的增强")])]),a._v(" "),s("li",[s("p",[a._v("标记阶段的和标记清除的操作都是一致的")])]),a._v(" "),s("li",[s("p",[a._v("清除阶段会先执行整理，移动对象位置")])])]),a._v(" "),s("h4",{attrs:{id:"标记整理优点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#标记整理优点"}},[a._v("#")]),a._v(" 标记整理优点")]),a._v(" "),s("ul",[s("li",[a._v("减少碎片化空间")])]),a._v(" "),s("h4",{attrs:{id:"标记整理缺点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#标记整理缺点"}},[a._v("#")]),a._v(" 标记整理缺点")]),a._v(" "),s("ul",[s("li",[a._v("不会立即回收垃圾对象")])]),a._v(" "),s("h2",{attrs:{id:"认识v8"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#认识v8"}},[a._v("#")]),a._v(" 认识V8")]),a._v(" "),s("ul",[s("li",[a._v("V8 是一款主流的 JavaScript 执行引擎")]),a._v(" "),s("li",[a._v("V8 采用即时编译")]),a._v(" "),s("li",[a._v("V8 内存设限 64位 1.5G 32位 800M\n"),s("ul",[s("li",[a._v("对于浏览器使用已经足够")]),a._v(" "),s("li",[a._v("对于垃圾回收机制内存太大反而耗时间")])])])]),a._v(" "),s("h3",{attrs:{id:"v8-垃圾回收策略"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#v8-垃圾回收策略"}},[a._v("#")]),a._v(" V8 垃圾回收策略")]),a._v(" "),s("p",[a._v("回收主要是针对当前存在 堆区 里面的对象数据。")]),a._v(" "),s("ul",[s("li",[a._v("采用分代回收的思想")]),a._v(" "),s("li",[a._v("内存分为 新生代、老生代")]),a._v(" "),s("li",[a._v("针对不同对象采用不同回收算法操作")])]),a._v(" "),s("h3",{attrs:{id:"v8-中常用的-gc算法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#v8-中常用的-gc算法"}},[a._v("#")]),a._v(" V8 中常用的 GC算法")]),a._v(" "),s("ul",[s("li",[a._v("分代回收")]),a._v(" "),s("li",[a._v("空间复制")]),a._v(" "),s("li",[a._v("标记清除")]),a._v(" "),s("li",[a._v("标记整理")]),a._v(" "),s("li",[a._v("标记增量")])]),a._v(" "),s("h3",{attrs:{id:"v8-回收新生代对象"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#v8-回收新生代对象"}},[a._v("#")]),a._v(" V8 回收新生代对象")]),a._v(" "),s("ul",[s("li",[s("p",[a._v("V8 内存空间一分为二，分代回收")])]),a._v(" "),s("li",[s("p",[a._v("小空间用于存储新生代对象 （64位：32M ，32位：16M）")])]),a._v(" "),s("li",[s("p",[a._v("新生代对象指的是存活时间较短的对象")])]),a._v(" "),s("li",[s("p",[a._v("回收过程采用 复制算法 + 标记整理")])]),a._v(" "),s("li",[s("p",[a._v("新生代内存去分为两个等大空间")])]),a._v(" "),s("li",[s("p",[a._v("使用空间为 From， 空闲空间为 To")])]),a._v(" "),s("li",[s("p",[a._v("活动对象存储于 From 空间")])]),a._v(" "),s("li",[s("p",[a._v("标记整理后将活动对象拷贝至 To")])]),a._v(" "),s("li",[s("p",[a._v("From 与 To 交换空间完成释放")])]),a._v(" "),s("li",[s("p",[a._v("拷贝过程中可能出现晋升")])]),a._v(" "),s("li",[s("p",[a._v("晋升就是将新生代对象移动到老生代")]),a._v(" "),s("ul",[s("li",[a._v("当一轮 GC 后还存活的新生代需要晋升")]),a._v(" "),s("li",[a._v("To 空间使用率超过 25% 也会晋升")])])])]),a._v(" "),s("h3",{attrs:{id:"v8-回收老生代对象"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#v8-回收老生代对象"}},[a._v("#")]),a._v(" V8 回收老生代对象")]),a._v(" "),s("ul",[s("li",[s("p",[a._v("老生代 空间 64位：1.4G，32位：700M")])]),a._v(" "),s("li",[s("p",[a._v("老生代对象就是指存活时间较长的对象")])]),a._v(" "),s("li",[s("p",[a._v("主要采用 标记清除、标记整理、增量标记算法")])]),a._v(" "),s("li",[s("p",[a._v("首先使用标记清除完成垃圾空间回收")])]),a._v(" "),s("li",[s("p",[a._v("当新生代有对象要晋升，老生代空间欠缺，则采用标记整理进行空间优化")])]),a._v(" "),s("li",[s("p",[a._v("采用增量标记进行效率优化")]),a._v(" "),s("ul",[s("li",[a._v("垃圾回收会让JavaScript执行进程阻塞")]),a._v(" "),s("li",[a._v("增量标记值将一整块的垃圾回收操作拆分成小块")]),a._v(" "),s("li",[a._v("让垃圾回收跟执行交替进行 从而提升效率")])])])]),a._v(" "),s("h3",{attrs:{id:"新生代老生代对比"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#新生代老生代对比"}},[a._v("#")]),a._v(" 新生代老生代对比")]),a._v(" "),s("ul",[s("li",[a._v("新生代区域垃圾回收使用空间换时间，由于新生代空间本身就很小，空间也花费不多相对于节约的时间比较划算")])]),a._v(" "),s("h2",{attrs:{id:"performance-工具"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#performance-工具"}},[a._v("#")]),a._v(" Performance 工具")]),a._v(" "),s("p",[a._v("GC 的目的是为了实现内存空间的良性循环")]),a._v(" "),s("h3",{attrs:{id:"界定内存问题的标准"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#界定内存问题的标准"}},[a._v("#")]),a._v(" 界定内存问题的标准")]),a._v(" "),s("ul",[s("li",[a._v("内存泄漏： 内存使用持续升高")]),a._v(" "),s("li",[a._v("内存膨胀： 多数设备上存在性能问题")]),a._v(" "),s("li",[a._v("频繁垃圾回收： 通过内存变化图进行分析")])]),a._v(" "),s("h3",{attrs:{id:"监控内存的几种方式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#监控内存的几种方式"}},[a._v("#")]),a._v(" 监控内存的几种方式")]),a._v(" "),s("ul",[s("li",[a._v("浏览器任务管理器")]),a._v(" "),s("li",[a._v("Timeline 时序图记录")]),a._v(" "),s("li",[a._v("堆快照查找分离 DOM")]),a._v(" "),s("li",[a._v("判断是否存在频繁的垃圾回收")])]),a._v(" "),s("h3",{attrs:{id:"堆快照查找分离dom"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#堆快照查找分离dom"}},[a._v("#")]),a._v(" 堆快照查找分离DOM")]),a._v(" "),s("h4",{attrs:{id:"什么是分离dom"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#什么是分离dom"}},[a._v("#")]),a._v(" 什么是分离DOM")]),a._v(" "),s("ul",[s("li",[a._v("垃圾对象的DOM节点\n"),s("ul",[s("li",[a._v("节点从当前DOM树上脱离，在js中没引用")])])]),a._v(" "),s("li",[a._v("分离状态的DOM节点\n"),s("ul",[s("li",[a._v("节点从当前DOM树上脱离，但存在引用。页面无法看到，在内存中占据着空间")])])])]),a._v(" "),s("h3",{attrs:{id:"频繁的gc操作造成的影响"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#频繁的gc操作造成的影响"}},[a._v("#")]),a._v(" 频繁的GC操作造成的影响")]),a._v(" "),s("ul",[s("li",[a._v("GC工作时应用程序时停止的")]),a._v(" "),s("li",[a._v("频繁且过长时间的GC操作会导致应用假死")]),a._v(" "),s("li",[a._v("用户使用中有卡顿")])]),a._v(" "),s("h2",{attrs:{id:"代码优化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#代码优化"}},[a._v("#")]),a._v(" 代码优化")]),a._v(" "),s("ul",[s("li",[s("p",[a._v("慎用全局变量")]),a._v(" "),s("ul",[s("li",[a._v("全局变量定义在全局执行上下文，是所有作用域链的顶端，查找的时间长")]),a._v(" "),s("li",[a._v("全局执行上下文一致存在于上下文执行栈，直到程序退出。影响GC的运行，降低对内存的使用")]),a._v(" "),s("li",[a._v("某个局部作用域出现同名变量这回遮蔽或污染该全局变量")])])]),a._v(" "),s("li",[s("p",[a._v("缓存局部变量")])]),a._v(" "),s("li",[s("p",[a._v("通过原型对象添加附加方法")])]),a._v(" "),s("li",[s("p",[a._v("避开闭包陷阱")]),a._v(" "),s("ul",[s("li",[a._v("闭包使用不当容易造成内存泄漏")]),a._v(" "),s("li",[a._v("不要为了闭包而闭包")])])]),a._v(" "),s("li",[s("p",[a._v("For循环优化")])]),a._v(" "),s("li",[s("p",[a._v("采用最优的循环方式")]),a._v(" "),s("ul",[s("li",[a._v("对于数组 forEach 更优")])])]),a._v(" "),s("li",[s("p",[a._v("节点添加优化")]),a._v(" "),s("ul",[s("li",[a._v("节点的添加操作必然会有回流和重绘")]),a._v(" "),s("li",[a._v("利用"),s("code",[a._v("document.createDocumentFragment()")]),a._v(" 文档碎片添加节点效率更高")])])]),a._v(" "),s("li",[s("p",[a._v("克隆优化节点操作")]),a._v(" "),s("ul",[s("li",[a._v("利用 节点的 "),s("code",[a._v("cloneNode")]),a._v("方法")])])]),a._v(" "),s("li",[s("p",[a._v("直接量替换 Object 操作")])])])])}),[],!1,null,null,null);t.default=_.exports}}]);