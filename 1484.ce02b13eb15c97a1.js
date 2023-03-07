"use strict";(self.webpackChunkscales_doc_site=self.webpackChunkscales_doc_site||[]).push([[1484],{1484:(E,p,c)=>{c.r(p),c.d(p,{NzDemoTreeSelectModule:()=>L});var A=c(3238),U=c(4515),s=c(6721),i=c(5760),a=c(2552),u=c(8222);const f=[a.u5,s.cq,i.PV,u.zf];var Z=c(1380),e=c(9724);let q=(()=>{class n{constructor(){this.expanded=!1}goLink(t){window&&(window.location.hash=t)}expandAllCode(){this.expanded=!this.expanded,this.codeBoxes.forEach(t=>{t.nzExpanded=this.expanded,t.expandCode(this.expanded),t.check()})}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["nz-demo-tree-select"]],viewQuery:function(t,o){if(1&t&&e.Gf(Z.G,5),2&t){let r;e.iGM(r=e.CRH())&&(o.codeBoxes=r)}},decls:0,vars:0,template:function(t,o){},encapsulation:2}),n})();var C=c(3563),T=c(695),_=c(8741),h=c(5535);let N=(()=>{class n{constructor(){this.expandKeys=["100","1001"],this.nodes=[{title:"parent 1",key:"100",children:[{title:"parent 1-0",key:"1001",children:[{title:"leaf 1-0-0",key:"10010",isLeaf:!0},{title:"leaf 1-0-1",key:"10011",isLeaf:!0}]},{title:"parent 1-1",key:"1002",children:[{title:"leaf 1-1-0",key:"10020",isLeaf:!0}]}]}]}onChange(t){console.log(t)}ngOnInit(){setTimeout(()=>{this.value="1001"},1e3)}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["nz-demo-tree-select-basic"]],decls:1,vars:3,consts:[["nzShowSearch","","nzPlaceHolder","Please select",2,"width","250px",3,"nzExpandedKeys","nzNodes","ngModel","ngModelChange"]],template:function(t,o){1&t&&(e.TgZ(0,"nz-tree-select",0),e.NdJ("ngModelChange",function(l){return o.value=l})("ngModelChange",function(l){return o.onChange(l)}),e.qZA()),2&t&&e.Q6J("nzExpandedKeys",o.expandKeys)("nzNodes",o.nodes)("ngModel",o.value)},directives:[s.zr,a.JJ,a.On],encapsulation:2}),n})();function S(n,d){1&n&&e._uU(0),2&n&&e.hij("and ",d.$implicit.length," more...")}let y=(()=>{class n{constructor(){this.value=[],this.nodes=[{title:"parent 1",key:"100",children:[{title:"parent 1-0",key:"1001",children:[{title:"leaf 1-0-0",key:"10010",isLeaf:!0},{title:"leaf 1-0-1",key:"10011",isLeaf:!0}]},{title:"parent 1-1",key:"1002",children:[{title:"leaf 1-1-0",key:"10020",isLeaf:!0}]}]}]}onChange(t){console.log(t)}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["nz-demo-tree-select-multiple"]],decls:3,vars:7,consts:[["nzPlaceHolder","Please select",2,"width","250px",3,"ngModel","nzMaxTagCount","nzMaxTagPlaceholder","nzNodes","nzDefaultExpandAll","nzAllowClear","nzMultiple","ngModelChange"],["omittedPlaceHolder",""]],template:function(t,o){if(1&t&&(e.TgZ(0,"nz-tree-select",0),e.NdJ("ngModelChange",function(l){return o.value=l})("ngModelChange",function(l){return o.onChange(l)}),e.qZA(),e.YNc(1,S,1,1,"ng-template",null,1,e.W1O)),2&t){const r=e.MAs(2);e.Q6J("ngModel",o.value)("nzMaxTagCount",3)("nzMaxTagPlaceholder",r)("nzNodes",o.nodes)("nzDefaultExpandAll",!0)("nzAllowClear",!1)("nzMultiple",!0)}},directives:[s.zr,a.JJ,a.On],encapsulation:2}),n})();const x=function(){return{"max-height":"300px"}};let w=(()=>{class n{constructor(){this.expandKeys=["0-0"],this.nodes=[{title:"Node1",value:"0-0",key:"0-0",children:[{title:"Child Node1",value:"0-0-1",key:"0-0-1"},{title:"Child Node2",value:"0-0-2",key:"0-0-2"}]},{title:"Node2",value:"0-1",key:"0-1"}]}onExpandChange(t){const o=t.node;o&&0===o.getChildren().length&&o.isExpanded&&this.loadNode().then(r=>{o.addChildren(r)})}loadNode(){return new Promise(t=>{setTimeout(()=>t([{title:"Child Node",key:`${(new Date).getTime()}-0`},{title:"Child Node",key:`${(new Date).getTime()}-1`}]),1e3)})}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["nz-demo-tree-select-async"]],decls:1,vars:7,consts:[["nzPlaceHolder","Please select",2,"width","250px",3,"nzExpandedKeys","ngModel","nzDropdownMatchSelectWidth","nzDropdownStyle","nzNodes","nzAsyncData","ngModelChange","nzExpandChange"]],template:function(t,o){1&t&&(e.TgZ(0,"nz-tree-select",0),e.NdJ("ngModelChange",function(l){return o.value=l})("nzExpandChange",function(l){return o.onExpandChange(l)}),e.qZA()),2&t&&e.Q6J("nzExpandedKeys",o.expandKeys)("ngModel",o.value)("nzDropdownMatchSelectWidth",!0)("nzDropdownStyle",e.DdM(6,x))("nzNodes",o.nodes)("nzAsyncData",!0)},directives:[s.zr,a.JJ,a.On],encapsulation:2}),n})(),k=(()=>{class n{constructor(){this.value=["0-0-0"],this.nodes=[{title:"Node1",value:"0-0",key:"0-0",children:[{title:"Child Node1",value:"0-0-0",key:"0-0-0",isLeaf:!0}]},{title:"Node2",value:"0-1",key:"0-1",children:[{title:"Child Node3",value:"0-1-0",key:"0-1-0",isLeaf:!0},{title:"Child Node4",value:"0-1-1",key:"0-1-1",isLeaf:!0},{title:"Child Node5",value:"0-1-2",key:"0-1-2",isLeaf:!0}]}]}onChange(t){console.log(t)}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["nz-demo-tree-select-checkable"]],decls:1,vars:2,consts:[["nzShowSearch","","nzCheckable","","nzPlaceHolder","Please select",2,"width","250px",3,"ngModel","nzNodes","ngModelChange"]],template:function(t,o){1&t&&(e.TgZ(0,"nz-tree-select",0),e.NdJ("ngModelChange",function(l){return o.value=l})("ngModelChange",function(l){return o.onChange(l)}),e.qZA()),2&t&&e.Q6J("ngModel",o.value)("nzNodes",o.nodes)},directives:[s.zr,a.JJ,a.On],encapsulation:2}),n})();function b(n,d){if(1&n&&(e.TgZ(0,"span",3)(1,"span"),e._UZ(2,"i",4),e._uU(3),e.qZA()()),2&n){const t=d.$implicit;e.ekj("ant-tree-node-selected",t.isSelected),e.xp6(2),e.Q6J("nzType",t.isExpanded?"folder-open":"folder"),e.xp6(1),e.hij(" ",t.title," ")}}let M=(()=>{class n{constructor(){this.nodes=[{title:"parent 1",key:"100",expanded:!0,icon:"smile",children:[{title:"leaf 1-0-0",key:"10010",icon:"meh",isLeaf:!0},{title:"leaf 1-0-1",key:"10011",icon:"frown",isLeaf:!0}]}]}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["nz-demo-tree-select-customized-icon"]],decls:5,vars:4,consts:[["nzPlaceHolder","Please select","nzShowIcon","",2,"width","250px",3,"ngModel","nzNodes","ngModelChange"],["nzPlaceHolder","Please select",2,"width","250px","margin-top","20px",3,"ngModel","nzNodes","ngModelChange"],["nzTreeTemplate",""],[1,"ant-tree-node-content-wrapper"],["nz-icon","",3,"nzType"]],template:function(t,o){1&t&&(e.TgZ(0,"nz-tree-select",0),e.NdJ("ngModelChange",function(l){return o.value=l}),e.qZA(),e._UZ(1,"br"),e.TgZ(2,"nz-tree-select",1),e.NdJ("ngModelChange",function(l){return o.value=l}),e.YNc(3,b,4,4,"ng-template",null,2,e.W1O),e.qZA()),2&t&&(e.Q6J("ngModel",o.value)("nzNodes",o.nodes),e.xp6(2),e.Q6J("ngModel",o.value)("nzNodes",o.nodes))},directives:[s.zr,a.JJ,a.On,i.Ls],encapsulation:2}),n})(),D=(()=>{class n{constructor(){this.nodes=[]}ngOnInit(){const t=(o="0",r=3)=>{const l=[];for(let g=0;g<10;g+=1){const m=`${o}-${g}`,z={title:m,key:m,expanded:!0,children:[],isLeaf:!1};r>0?z.children=t(m,r-1):z.isLeaf=!0,l.push(z)}return l};this.nodes=t()}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["nz-demo-tree-select-virtual-scroll"]],decls:1,vars:1,consts:[["nzShowSearch","","nzPlaceHolder","Please select","nzVirtualHeight","300px",2,"width","250px",3,"nzNodes"]],template:function(t,o){1&t&&e._UZ(0,"nz-tree-select",0),2&t&&e.Q6J("nzNodes",o.nodes)},directives:[s.zr],encapsulation:2}),n})();function v(n,d){if(1&n){const t=e.EpF();e.TgZ(0,"nz-tree-select",3),e.NdJ("ngModelChange",function(r){return e.CHM(t),e.oxw().value=r}),e.qZA()}if(2&n){const t=e.oxw();e.Q6J("nzNodes",t.nodes)("ngModel",t.value)}}function I(n,d){if(1&n){const t=e.EpF();e.TgZ(0,"nz-tree-select",4),e.NdJ("ngModelChange",function(r){return e.CHM(t),e.oxw().value=r}),e.qZA()}if(2&n){const t=e.oxw();e.Q6J("nzNodes",t.nodes)("ngModel",t.value)}}let H=(()=>{class n{constructor(){this.nodes=[]}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["nz-demo-tree-select-status"]],decls:3,vars:0,consts:[["nzDirection","vertical",2,"width","100%"],["nzStatus","error","nzPlaceHolder","Error","style","width:100%;",3,"nzNodes","ngModel","ngModelChange",4,"nzSpaceItem"],["nzMultiple","","nzShowSearch","","nzStatus","warning","nzPlaceHolder","Warning multiple","style","width:100%;",3,"nzNodes","ngModel","ngModelChange",4,"nzSpaceItem"],["nzStatus","error","nzPlaceHolder","Error",2,"width","100%",3,"nzNodes","ngModel","ngModelChange"],["nzMultiple","","nzShowSearch","","nzStatus","warning","nzPlaceHolder","Warning multiple",2,"width","100%",3,"nzNodes","ngModel","ngModelChange"]],template:function(t,o){1&t&&(e.TgZ(0,"nz-space",0),e.YNc(1,v,1,2,"nz-tree-select",1),e.YNc(2,I,1,2,"nz-tree-select",2),e.qZA())},directives:[u.NU,u.$1,s.zr,a.JJ,a.On],encapsulation:2}),n})(),J=(()=>{class n{constructor(){this.expanded=!1}goLink(t){window&&(window.location.hash=t)}expandAllCode(){this.expanded=!this.expanded,this.codeBoxes.forEach(t=>{t.nzExpanded=this.expanded,t.expandCode(this.expanded),t.check()})}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["nz-demo-tree-select"]],viewQuery:function(t,o){if(1&t&&e.Gf(Z.G,5),2&t){let r;e.iGM(r=e.CRH())&&(o.codeBoxes=r)}},decls:625,vars:32,consts:[[1,"toc-affix",3,"nzOffsetTop"],["nzShowInkInFixed","",3,"nzAffix","nzClick"],["nzHref","#components-tree-select-demo-basic","nzTitle","Basic"],["nzHref","#components-tree-select-demo-multiple","nzTitle","Multiple Selection"],["nzHref","#components-tree-select-demo-async","nzTitle","Load data asynchronously"],["nzHref","#components-tree-select-demo-checkable","nzTitle","Checkable"],["nzHref","#components-tree-select-demo-customized-icon","nzTitle","Customize Icon"],["nzHref","#components-tree-select-demo-virtual-scroll","nzTitle","Virtual Scroll"],["nzHref","#components-tree-select-demo-status","nzTitle","Status"],["nzHref","#api","nzTitle","API"],[1,"markdown"],[1,"subtitle"],[1,"widget"],["aria-label","Edit this page on Github","href","https://github.com/JobAdder/scales-workspace/tree/dev/projects/scales-library/src/lib//tree-select/doc/index.en-US.md","target","_blank","rel","noopener noreferrer",1,"edit-button"],["nz-icon","","nzType","edit"],["id","when-to-use"],["onclick","window.location.hash = 'when-to-use'",1,"anchor"],[1,"language-ts"],[1,"token","keyword"],[1,"token","punctuation"],[1,"token","string"],["id","component-tab"],["nzTitle","Examples"],["nz-row","",3,"nzGutter"],["nz-col","",3,"nzSpan"],["nzTitle","Basic","nzSelector","nz-demo-tree-select-basic","nzGenerateCommand","ng g ng-zorro-antd:tree-select-basic <name>","nzComponentName","NzDemoTreeSelectBasicComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],["demo",""],["intro",""],["nzTitle","Multiple Selection","nzSelector","nz-demo-tree-select-multiple","nzGenerateCommand","ng g ng-zorro-antd:tree-select-multiple <name>","nzComponentName","NzDemoTreeSelectMultipleComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],["nzTitle","Load data asynchronously","nzSelector","nz-demo-tree-select-async","nzGenerateCommand","ng g ng-zorro-antd:tree-select-async <name>","nzComponentName","NzDemoTreeSelectAsyncComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],["nzTitle","Checkable","nzSelector","nz-demo-tree-select-checkable","nzGenerateCommand","ng g ng-zorro-antd:tree-select-checkable <name>","nzComponentName","NzDemoTreeSelectCheckableComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],["nzTitle","Customize Icon","nzSelector","nz-demo-tree-select-customized-icon","nzGenerateCommand","ng g ng-zorro-antd:tree-select-customized-icon <name>","nzComponentName","NzDemoTreeSelectCustomizedIconComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],["nzTitle","Virtual Scroll","nzSelector","nz-demo-tree-select-virtual-scroll","nzGenerateCommand","ng g ng-zorro-antd:tree-select-virtual-scroll <name>","nzComponentName","NzDemoTreeSelectVirtualScrollComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],["nzTitle","Status","nzSelector","nz-demo-tree-select-status","nzGenerateCommand","ng g ng-zorro-antd:tree-select-status <name>","nzComponentName","NzDemoTreeSelectStatusComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],["nzTitle","Usage"],["nzTitle","Installation"],[1,"markdown","api-container"],["id","api"],["onclick","window.location.hash = 'api'",1,"anchor"],["id","nz-tree-select"],[1,"api-type-label","component"],["onclick","window.location.hash = 'nz-tree-select'",1,"anchor"],["href","https://material.angular.io/cdk/scrolling/api","target","_blank","rel","noopener"],["id","methods"],["onclick","window.location.hash = 'methods'",1,"anchor"]],template:function(t,o){1&t&&(e.TgZ(0,"article")(1,"nz-affix",0)(2,"nz-anchor",1),e.NdJ("nzClick",function(l){return o.goLink(l)}),e._UZ(3,"nz-link",2)(4,"nz-link",3)(5,"nz-link",4)(6,"nz-link",5)(7,"nz-link",6)(8,"nz-link",7)(9,"nz-link",8)(10,"nz-link",9),e.qZA()(),e.TgZ(11,"section",10)(12,"h1"),e._uU(13,"TreeSelect"),e._UZ(14,"span",11)(15,"span",12),e.TgZ(16,"a",13),e._UZ(17,"i",14),e.qZA()(),e.TgZ(18,"section",10),e.IAx(),e.TgZ(19,"p"),e._uU(20,"Tree selection control."),e.qZA(),e.TgZ(21,"h2",15)(22,"span"),e._uU(23,"When To Use"),e.qZA(),e.TgZ(24,"a",16),e._uU(25,"#"),e.qZA()(),e.TgZ(26,"p")(27,"code"),e._uU(28,"TreeSelect"),e.qZA(),e._uU(29," is similar to "),e.TgZ(30,"code"),e._uU(31,"Select"),e.qZA(),e._uU(32,", but the values are provided in a tree like structure.\nAny data whose entries are defined in a hierarchical manner is fit to use this control. Examples of such case may include a corporate hierarchy, a directory structure, and so on."),e.qZA(),e.TgZ(33,"pre",17)(34,"code")(35,"span",18),e._uU(36,"import"),e.qZA(),e._uU(37," "),e.TgZ(38,"span",19),e._uU(39,"{"),e.qZA(),e._uU(40," NzTreeSelectModule "),e.TgZ(41,"span",19),e._uU(42,"}"),e.qZA(),e._uU(43," "),e.TgZ(44,"span",18),e._uU(45,"from"),e.qZA(),e._uU(46," "),e.TgZ(47,"span",20),e._uU(48,"'ng-zorro-antd/tree-select'"),e.qZA(),e.TgZ(49,"span",19),e._uU(50,";"),e.qZA()()(),e.fQ9(),e.qZA()(),e.TgZ(51,"nz-tabset",21)(52,"nz-tab",22)(53,"div",23)(54,"div",24)(55,"nz-code-box",25),e._UZ(56,"nz-demo-tree-select-basic",26),e.TgZ(57,"div",27),e.IAx(),e.TgZ(58,"p"),e._uU(59,"The most basic usage."),e.qZA(),e.fQ9(),e.qZA()(),e.TgZ(60,"nz-code-box",28),e._UZ(61,"nz-demo-tree-select-multiple",26),e.TgZ(62,"div",27),e.IAx(),e.TgZ(63,"p"),e._uU(64,"Multiple selection usage, max 3 option will display at the same time by "),e.TgZ(65,"code"),e._uU(66,"nzMaxTagCount"),e.qZA(),e._uU(67,"."),e.qZA(),e.fQ9(),e.qZA()(),e.TgZ(68,"nz-code-box",29),e._UZ(69,"nz-demo-tree-select-async",26),e.TgZ(70,"div",27),e.IAx(),e.TgZ(71,"p"),e._uU(72,"To load data asynchronously when click to expand a treeNode, loading state keeps until excute addChildren()."),e.qZA(),e.fQ9(),e.qZA()(),e.TgZ(73,"nz-code-box",30),e._UZ(74,"nz-demo-tree-select-checkable",26),e.TgZ(75,"div",27),e.IAx(),e.TgZ(76,"p"),e._uU(77,"Multiple and checkable."),e.qZA(),e.fQ9(),e.qZA()(),e.TgZ(78,"nz-code-box",31),e._UZ(79,"nz-demo-tree-select-customized-icon",26),e.TgZ(80,"div",27),e.IAx(),e.TgZ(81,"p"),e._uU(82,"You can customize icons for different nodes."),e.qZA(),e.fQ9(),e.qZA()(),e.TgZ(83,"nz-code-box",32),e._UZ(84,"nz-demo-tree-select-virtual-scroll",26),e.TgZ(85,"div",27),e.IAx(),e.TgZ(86,"p"),e._uU(87,"Set "),e.TgZ(88,"code"),e._uU(89,"nzVirtualHeight"),e.qZA(),e._uU(90," to enable virtual scroll."),e.qZA(),e.fQ9(),e.qZA()(),e.TgZ(91,"nz-code-box",33),e._UZ(92,"nz-demo-tree-select-status",26),e.TgZ(93,"div",27),e.IAx(),e.TgZ(94,"p"),e._uU(95,"Add status to TreeSelect with "),e.TgZ(96,"code"),e._uU(97,"nzStatus"),e.qZA(),e._uU(98,", which could be "),e.TgZ(99,"code"),e._uU(100,"error"),e.qZA(),e._uU(101," or "),e.TgZ(102,"code"),e._uU(103,"warning"),e.qZA(),e._uU(104,"."),e.qZA(),e.fQ9(),e.qZA()()()()(),e.TgZ(105,"nz-tab",34),e._uU(106," Content of Tab Pane 2 "),e.qZA(),e._UZ(107,"nz-tab",35),e.qZA(),e.TgZ(108,"section",36),e.IAx(),e.TgZ(109,"h2",37)(110,"span"),e._uU(111,"API"),e.qZA(),e.TgZ(112,"a",38),e._uU(113,"#"),e.qZA()(),e.TgZ(114,"h3",39)(115,"span"),e._uU(116,"nz-tree-select"),e.qZA(),e.TgZ(117,"label",40),e._uU(118,"component"),e.qZA(),e.TgZ(119,"a",41),e._uU(120,"#"),e.qZA()(),e.TgZ(121,"table")(122,"thead")(123,"tr")(124,"th"),e._uU(125,"Property"),e.qZA(),e.TgZ(126,"th"),e._uU(127,"Description"),e.qZA(),e.TgZ(128,"th"),e._uU(129,"Type"),e.qZA(),e.TgZ(130,"th"),e._uU(131,"Default"),e.qZA(),e.TgZ(132,"th"),e._uU(133,"Global Config"),e.qZA()()(),e.TgZ(134,"tbody")(135,"tr")(136,"td")(137,"code"),e._uU(138,"[nzId]"),e.qZA()(),e.TgZ(139,"td"),e._uU(140,"input id attribute inside the component"),e.qZA(),e.TgZ(141,"td")(142,"code"),e._uU(143,"string"),e.qZA()(),e.TgZ(144,"td"),e._uU(145,"-"),e.qZA(),e._UZ(146,"td"),e.qZA(),e.TgZ(147,"tr")(148,"td")(149,"code"),e._uU(150,"[nzAllowClear]"),e.qZA()(),e.TgZ(151,"td"),e._uU(152,"Whether allow clear"),e.qZA(),e.TgZ(153,"td")(154,"code"),e._uU(155,"boolean"),e.qZA()(),e.TgZ(156,"td")(157,"code"),e._uU(158,"false"),e.qZA()(),e._UZ(159,"td"),e.qZA(),e.TgZ(160,"tr")(161,"td")(162,"code"),e._uU(163,"[nzPlaceHolder]"),e.qZA()(),e.TgZ(164,"td"),e._uU(165,"Placeholder of the select input"),e.qZA(),e.TgZ(166,"td")(167,"code"),e._uU(168,"string"),e.qZA()(),e.TgZ(169,"td"),e._uU(170,"-"),e.qZA(),e._UZ(171,"td"),e.qZA(),e.TgZ(172,"tr")(173,"td")(174,"code"),e._uU(175,"[nzDisabled]"),e.qZA()(),e.TgZ(176,"td"),e._uU(177,"Disabled or not"),e.qZA(),e.TgZ(178,"td")(179,"code"),e._uU(180,"boolean"),e.qZA()(),e.TgZ(181,"td")(182,"code"),e._uU(183,"false"),e.qZA()(),e._UZ(184,"td"),e.qZA(),e.TgZ(185,"tr")(186,"td")(187,"code"),e._uU(188,"[nzShowIcon]"),e.qZA()(),e.TgZ(189,"td"),e._uU(190,"Shows the icon before a TreeNode's title. There is no default style"),e.qZA(),e.TgZ(191,"td")(192,"code"),e._uU(193,"boolean"),e.qZA()(),e.TgZ(194,"td")(195,"code"),e._uU(196,"false"),e.qZA()(),e._UZ(197,"td"),e.qZA(),e.TgZ(198,"tr")(199,"td")(200,"code"),e._uU(201,"[nzShowSearch]"),e.qZA()(),e.TgZ(202,"td"),e._uU(203,"Whether to display a search input in the dropdown menu(valid only in the single mode)"),e.qZA(),e.TgZ(204,"td")(205,"code"),e._uU(206,"boolean"),e.qZA()(),e.TgZ(207,"td")(208,"code"),e._uU(209,"false"),e.qZA()(),e.TgZ(210,"td"),e._uU(211,"\u2705"),e.qZA()(),e.TgZ(212,"tr")(213,"td")(214,"code"),e._uU(215,"[nzNotFoundContent]"),e.qZA()(),e.TgZ(216,"td"),e._uU(217,"Specify content to show when no result matches."),e.qZA(),e.TgZ(218,"td")(219,"code"),e._uU(220,"string"),e.qZA()(),e.TgZ(221,"td"),e._uU(222,"-"),e.qZA(),e._UZ(223,"td"),e.qZA(),e.TgZ(224,"tr")(225,"td")(226,"code"),e._uU(227,"[nzDropdownMatchSelectWidth]"),e.qZA()(),e.TgZ(228,"td"),e._uU(229,"Determine whether the dropdown menu and the select input are the same width"),e.qZA(),e.TgZ(230,"td")(231,"code"),e._uU(232,"boolean"),e.qZA()(),e.TgZ(233,"td")(234,"code"),e._uU(235,"true"),e.qZA()(),e.TgZ(236,"td"),e._uU(237,"\u2705"),e.qZA()(),e.TgZ(238,"tr")(239,"td")(240,"code"),e._uU(241,"[nzDropdownStyle]"),e.qZA()(),e.TgZ(242,"td"),e._uU(243,"To set the style of the dropdown menu"),e.qZA(),e.TgZ(244,"td")(245,"code"),e._uU(246,"object"),e.qZA()(),e.TgZ(247,"td"),e._uU(248,"-"),e.qZA(),e._UZ(249,"td"),e.qZA(),e.TgZ(250,"tr")(251,"td")(252,"code"),e._uU(253,"[nzDropdownClassName]"),e.qZA()(),e.TgZ(254,"td"),e._uU(255,"classname of dropdown menu"),e.qZA(),e.TgZ(256,"td")(257,"code"),e._uU(258,"string"),e.qZA()(),e.TgZ(259,"td"),e._uU(260,"-"),e.qZA(),e._UZ(261,"td"),e.qZA(),e.TgZ(262,"tr")(263,"td")(264,"code"),e._uU(265,"[nzMultiple]"),e.qZA()(),e.TgZ(266,"td"),e._uU(267,"Support multiple or not, will be "),e.TgZ(268,"code"),e._uU(269,"true"),e.qZA(),e._uU(270," when enable "),e.TgZ(271,"code"),e._uU(272,"nzCheckable"),e.qZA(),e._uU(273,"."),e.qZA(),e.TgZ(274,"td")(275,"code"),e._uU(276,"boolean"),e.qZA()(),e.TgZ(277,"td")(278,"code"),e._uU(279,"false"),e.qZA()(),e._UZ(280,"td"),e.qZA(),e.TgZ(281,"tr")(282,"td")(283,"code"),e._uU(284,"[nzHideUnMatched]"),e.qZA()(),e.TgZ(285,"td"),e._uU(286,"Hide unmatched nodes while searching"),e.qZA(),e.TgZ(287,"td")(288,"code"),e._uU(289,"boolean"),e.qZA()(),e.TgZ(290,"td")(291,"code"),e._uU(292,"false"),e.qZA()(),e.TgZ(293,"td"),e._uU(294,"\u2705"),e.qZA()(),e.TgZ(295,"tr")(296,"td")(297,"code"),e._uU(298,"[nzSize]"),e.qZA()(),e.TgZ(299,"td"),e._uU(300,"To set the size of the select input"),e.qZA(),e.TgZ(301,"td")(302,"code"),e._uU(303,"'large' | 'small' | 'default'"),e.qZA()(),e.TgZ(304,"td")(305,"code"),e._uU(306,"'default'"),e.qZA()(),e.TgZ(307,"td"),e._uU(308,"\u2705"),e.qZA()(),e.TgZ(309,"tr")(310,"td")(311,"code"),e._uU(312,"[nzStatus]"),e.qZA()(),e.TgZ(313,"td"),e._uU(314,"Set validation status"),e.qZA(),e.TgZ(315,"td")(316,"code"),e._uU(317,"'error' | 'warning'"),e.qZA()(),e.TgZ(318,"td"),e._uU(319,"-"),e.qZA(),e._UZ(320,"td"),e.qZA(),e.TgZ(321,"tr")(322,"td")(323,"code"),e._uU(324,"[nzCheckable]"),e.qZA()(),e.TgZ(325,"td"),e._uU(326,"Whether to show checkbox on the treeNodes"),e.qZA(),e.TgZ(327,"td")(328,"code"),e._uU(329,"boolean"),e.qZA()(),e.TgZ(330,"td")(331,"code"),e._uU(332,"false"),e.qZA()(),e._UZ(333,"td"),e.qZA(),e.TgZ(334,"tr")(335,"td")(336,"code"),e._uU(337,"[nzCheckStrictly]"),e.qZA()(),e.TgZ(338,"td"),e._uU(339,"Check treeNode precisely; parent treeNode and children treeNodes are not associated"),e.qZA(),e.TgZ(340,"td")(341,"code"),e._uU(342,"boolean"),e.qZA()(),e.TgZ(343,"td")(344,"code"),e._uU(345,"false"),e.qZA()(),e._UZ(346,"td"),e.qZA(),e.TgZ(347,"tr")(348,"td")(349,"code"),e._uU(350,"[nzShowExpand]"),e.qZA()(),e.TgZ(351,"td"),e._uU(352,"Show a Expand Icon before the treeNodes"),e.qZA(),e.TgZ(353,"td")(354,"code"),e._uU(355,"boolean"),e.qZA()(),e.TgZ(356,"td")(357,"code"),e._uU(358,"true"),e.qZA()(),e._UZ(359,"td"),e.qZA(),e.TgZ(360,"tr")(361,"td")(362,"code"),e._uU(363,"[nzShowLine]"),e.qZA()(),e.TgZ(364,"td"),e._uU(365,"Shows a connecting line"),e.qZA(),e.TgZ(366,"td")(367,"code"),e._uU(368,"boolean"),e.qZA()(),e.TgZ(369,"td")(370,"code"),e._uU(371,"false"),e.qZA()(),e._UZ(372,"td"),e.qZA(),e.TgZ(373,"tr")(374,"td")(375,"code"),e._uU(376,"[nzAsyncData]"),e.qZA()(),e.TgZ(377,"td"),e._uU(378,"Load data asynchronously (should be used with NzTreeNode.addChildren(...))"),e.qZA(),e.TgZ(379,"td")(380,"code"),e._uU(381,"boolean"),e.qZA()(),e.TgZ(382,"td")(383,"code"),e._uU(384,"false"),e.qZA()(),e._UZ(385,"td"),e.qZA(),e.TgZ(386,"tr")(387,"td")(388,"code"),e._uU(389,"[nzNodes]"),e.qZA()(),e.TgZ(390,"td"),e._uU(391,"Data of the treeNodes"),e.qZA(),e.TgZ(392,"td")(393,"code"),e._uU(394,"NzTreeNodeOptions[]"),e.qZA()(),e.TgZ(395,"td")(396,"code"),e._uU(397,"[]"),e.qZA()(),e._UZ(398,"td"),e.qZA(),e.TgZ(399,"tr")(400,"td")(401,"code"),e._uU(402,"[nzDefaultExpandAll]"),e.qZA()(),e.TgZ(403,"td"),e._uU(404,"Whether to expand all treeNodes by default"),e.qZA(),e.TgZ(405,"td")(406,"code"),e._uU(407,"boolean"),e.qZA()(),e.TgZ(408,"td")(409,"code"),e._uU(410,"false"),e.qZA()(),e._UZ(411,"td"),e.qZA(),e.TgZ(412,"tr")(413,"td")(414,"code"),e._uU(415,"[nzExpandedKeys]"),e.qZA()(),e.TgZ(416,"td"),e._uU(417,"Default expanded treeNodes"),e.qZA(),e.TgZ(418,"td")(419,"code"),e._uU(420,"string[]"),e.qZA()(),e.TgZ(421,"td"),e._uU(422,"-"),e.qZA(),e._UZ(423,"td"),e.qZA(),e.TgZ(424,"tr")(425,"td")(426,"code"),e._uU(427,"[nzDisplayWith]"),e.qZA()(),e.TgZ(428,"td"),e._uU(429,"How to display the selected node value in the trigger"),e.qZA(),e.TgZ(430,"td")(431,"code"),e._uU(432,"(node: NzTreeNode) => string"),e.qZA()(),e.TgZ(433,"td")(434,"code"),e._uU(435,"(node: NzTreeNode) => node.title"),e.qZA()(),e._UZ(436,"td"),e.qZA(),e.TgZ(437,"tr")(438,"td")(439,"code"),e._uU(440,"[nzMaxTagCount]"),e.qZA()(),e.TgZ(441,"td"),e._uU(442,"Max tag count to show"),e.qZA(),e.TgZ(443,"td"),e._uU(444,"number"),e.qZA(),e.TgZ(445,"td"),e._uU(446,"-"),e.qZA(),e._UZ(447,"td"),e.qZA(),e.TgZ(448,"tr")(449,"td")(450,"code"),e._uU(451,"[nzMaxTagPlaceholder]"),e.qZA()(),e.TgZ(452,"td"),e._uU(453,"Placeholder for not showing tags"),e.qZA(),e.TgZ(454,"td"),e._uU(455,"TemplateRef<{ $implicit: NzTreeNode[] }>"),e.qZA(),e.TgZ(456,"td"),e._uU(457,"-"),e.qZA(),e._UZ(458,"td"),e.qZA(),e.TgZ(459,"tr")(460,"td")(461,"code"),e._uU(462,"[nzTreeTemplate]"),e.qZA()(),e.TgZ(463,"td"),e._uU(464,"Custom Nodes"),e.qZA(),e.TgZ(465,"td")(466,"code"),e._uU(467,"TemplateRef<{ $implicit: NzTreeNode }>"),e.qZA()(),e.TgZ(468,"td"),e._uU(469,"-"),e.qZA(),e._UZ(470,"td"),e.qZA(),e.TgZ(471,"tr")(472,"td")(473,"code"),e._uU(474,"[nzVirtualHeight]"),e.qZA()(),e.TgZ(475,"td"),e._uU(476,"The height of virtual scroll"),e.qZA(),e.TgZ(477,"td")(478,"code"),e._uU(479,"string"),e.qZA()(),e.TgZ(480,"td")(481,"code"),e._uU(482,"-"),e.qZA()(),e._UZ(483,"td"),e.qZA(),e.TgZ(484,"tr")(485,"td")(486,"code"),e._uU(487,"[nzVirtualItemSize]"),e.qZA()(),e.TgZ(488,"td"),e._uU(489,"The size of the items in the list, same as "),e.TgZ(490,"a",42),e._uU(491,"cdk itemSize"),e.qZA()(),e.TgZ(492,"td")(493,"code"),e._uU(494,"number"),e.qZA()(),e.TgZ(495,"td")(496,"code"),e._uU(497,"28"),e.qZA()(),e._UZ(498,"td"),e.qZA(),e.TgZ(499,"tr")(500,"td")(501,"code"),e._uU(502,"[nzVirtualMaxBufferPx]"),e.qZA()(),e.TgZ(503,"td"),e._uU(504,"The number of pixels worth of buffer to render for when rendering new items, same as "),e.TgZ(505,"a",42),e._uU(506,"cdk maxBufferPx"),e.qZA()(),e.TgZ(507,"td")(508,"code"),e._uU(509,"number"),e.qZA()(),e.TgZ(510,"td")(511,"code"),e._uU(512,"500"),e.qZA()(),e._UZ(513,"td"),e.qZA(),e.TgZ(514,"tr")(515,"td")(516,"code"),e._uU(517,"[nzVirtualMinBufferPx]"),e.qZA()(),e.TgZ(518,"td"),e._uU(519,"The minimum amount of buffer rendered beyond the viewport (in pixels),same as "),e.TgZ(520,"a",42),e._uU(521,"cdk minBufferPx"),e.qZA()(),e.TgZ(522,"td")(523,"code"),e._uU(524,"number"),e.qZA()(),e.TgZ(525,"td")(526,"code"),e._uU(527,"28"),e.qZA()(),e._UZ(528,"td"),e.qZA(),e.TgZ(529,"tr")(530,"td")(531,"code"),e._uU(532,"[nzBackdrop]"),e.qZA()(),e.TgZ(533,"td"),e._uU(534,"whether or not the overlay should attach a backdrop"),e.qZA(),e.TgZ(535,"td")(536,"code"),e._uU(537,"boolean"),e.qZA()(),e.TgZ(538,"td")(539,"code"),e._uU(540,"false"),e.qZA()(),e._UZ(541,"td"),e.qZA(),e.TgZ(542,"tr")(543,"td")(544,"code"),e._uU(545,"(nzExpandChange)"),e.qZA()(),e.TgZ(546,"td"),e._uU(547,"Callback function for when a treeNode is expanded or collapsed"),e.qZA(),e.TgZ(548,"td")(549,"code"),e._uU(550,"EventEmitter<NzFormatEmitEvent>"),e.qZA()(),e.TgZ(551,"td"),e._uU(552,"-"),e.qZA(),e._UZ(553,"td"),e.qZA()()(),e.TgZ(554,"h4",43)(555,"span"),e._uU(556,"Methods"),e.qZA(),e.TgZ(557,"a",44),e._uU(558,"#"),e.qZA()(),e.TgZ(559,"table")(560,"thead")(561,"tr")(562,"th"),e._uU(563,"Property"),e.qZA(),e.TgZ(564,"th"),e._uU(565,"Description"),e.qZA(),e.TgZ(566,"th"),e._uU(567,"Type"),e.qZA()()(),e.TgZ(568,"tbody")(569,"tr")(570,"td"),e._uU(571,"getTreeNodes"),e.qZA(),e.TgZ(572,"td"),e._uU(573,"get all nodes(NzTreeNode)"),e.qZA(),e.TgZ(574,"td")(575,"code"),e._uU(576,"NzTreeNode[]"),e.qZA()()(),e.TgZ(577,"tr")(578,"td"),e._uU(579,"getTreeNodeByKey"),e.qZA(),e.TgZ(580,"td"),e._uU(581,"get NzTreeNode with key"),e.qZA(),e.TgZ(582,"td")(583,"code"),e._uU(584,"NzTreeNode"),e.qZA()()(),e.TgZ(585,"tr")(586,"td"),e._uU(587,"getCheckedNodeList"),e.qZA(),e.TgZ(588,"td"),e._uU(589,"get checked nodes(merged)"),e.qZA(),e.TgZ(590,"td")(591,"code"),e._uU(592,"NzTreeNode[]"),e.qZA()()(),e.TgZ(593,"tr")(594,"td"),e._uU(595,"getSelectedNodeList"),e.qZA(),e.TgZ(596,"td"),e._uU(597,"get selected nodes"),e.qZA(),e.TgZ(598,"td")(599,"code"),e._uU(600,"NzTreeNode[]"),e.qZA()()(),e.TgZ(601,"tr")(602,"td"),e._uU(603,"getHalfCheckedNodeList"),e.qZA(),e.TgZ(604,"td"),e._uU(605,"get half checked nodes"),e.qZA(),e.TgZ(606,"td")(607,"code"),e._uU(608,"NzTreeNode[]"),e.qZA()()(),e.TgZ(609,"tr")(610,"td"),e._uU(611,"getExpandedNodeList"),e.qZA(),e.TgZ(612,"td"),e._uU(613,"get expanded nodes"),e.qZA(),e.TgZ(614,"td")(615,"code"),e._uU(616,"NzTreeNode[]"),e.qZA()()(),e.TgZ(617,"tr")(618,"td"),e._uU(619,"getMatchedNodeList"),e.qZA(),e.TgZ(620,"td"),e._uU(621,"get matched nodes(if nzSearchValue is not null)"),e.qZA(),e.TgZ(622,"td")(623,"code"),e._uU(624,"NzTreeNode[]"),e.qZA()()()()(),e.fQ9(),e.qZA()()),2&t&&(e.xp6(1),e.Q6J("nzOffsetTop",16),e.xp6(1),e.Q6J("nzAffix",!1),e.xp6(51),e.Q6J("nzGutter",8),e.xp6(1),e.Q6J("nzSpan",24),e.xp6(1),e.Q6J("nzId","components-tree-select-demo-basic")("nzLink","components-tree-select-demo-basic")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/tree-select/demo/basic.md"),e.xp6(5),e.Q6J("nzId","components-tree-select-demo-multiple")("nzLink","components-tree-select-demo-multiple")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/tree-select/demo/multiple.md"),e.xp6(8),e.Q6J("nzId","components-tree-select-demo-async")("nzLink","components-tree-select-demo-async")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/tree-select/demo/async.md"),e.xp6(5),e.Q6J("nzId","components-tree-select-demo-checkable")("nzLink","components-tree-select-demo-checkable")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/tree-select/demo/checkable.md"),e.xp6(5),e.Q6J("nzId","components-tree-select-demo-customized-icon")("nzLink","components-tree-select-demo-customized-icon")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/tree-select/demo/customized-icon.md"),e.xp6(5),e.Q6J("nzId","components-tree-select-demo-virtual-scroll")("nzLink","components-tree-select-demo-virtual-scroll")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/tree-select/demo/virtual-scroll.md"),e.xp6(8),e.Q6J("nzId","components-tree-select-demo-status")("nzLink","components-tree-select-demo-status")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/tree-select/demo/status.md"))},directives:[C.$,T.IT,T.Fp,i.Ls,_.xH,_.xw,h.SK,h.t3,Z.G,N,y,w,k,M,D,H],encapsulation:2}),n})(),L=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[U.G,...f,A.Bz.forChild([{path:"en",component:J},{path:"zh",component:q}])]]}),n})()}}]);