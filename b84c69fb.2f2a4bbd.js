(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{73:function(t,e,b){"use strict";b.r(e),b.d(e,"frontMatter",(function(){return c})),b.d(e,"metadata",(function(){return l})),b.d(e,"rightToc",(function(){return r})),b.d(e,"default",(function(){return O}));var a=b(2),d=b(6),n=(b(0),b(86)),i=b(93),c={id:"monads",title:"Dreamic Types",sidebar_label:"Dreamic Types"},l={unversionedId:"core/monads",id:"core/monads",isDocsHomePage:!1,title:"Dreamic Types",description:"Fantasy-Land Types",source:"@site/docs/core/monads.mdx",slug:"/core/monads",permalink:"/dreamic/docs/core/monads",version:"current",sidebar_label:"Dreamic Types",sidebar:"sidebar",previous:{title:"Design and Usage",permalink:"/dreamic/docs/core/design"},next:{title:"Maybe",permalink:"/dreamic/docs/monads/maybe"}},r=[{value:"Fantasy-Land Types",id:"fantasy-land-types",children:[]},{value:"Dreamic Types",id:"dreamic-types",children:[{value:"Compatibility Table",id:"compatibility-table",children:[]}]}],y={rightToc:r};function O(t){var e=t.components,b=Object(d.a)(t,["components"]);return Object(n.b)("wrapper",Object(a.a)({},y,b,{components:e,mdxType:"MDXLayout"}),Object(n.b)("h2",{id:"fantasy-land-types"},"Fantasy-Land Types"),Object(n.b)(i.a,{darkMode:"img/docs/core/fantasyland_dark.svg",lightMode:"img/docs/core/fantasyland.svg",mdxType:"DarkModeImage"}),Object(n.b)("h2",{id:"dreamic-types"},"Dreamic Types"),Object(n.b)("h3",{id:"compatibility-table"},"Compatibility Table"),Object(n.b)("table",null,Object(n.b)("tr",null,Object(n.b)("th",null),Object(n.b)("th",null,"Maybe"),Object(n.b)("th",null,"Either"),Object(n.b)("th",null,"Validation"),Object(n.b)("th",null,"Future")),Object(n.b)("tr",null,Object(n.b)("td",null,Object(n.b)("a",{href:"https://github.com/fantasyland/fantasy-land#setoid",target:"_blank"},"Setoid")),Object(n.b)("td",{typeid:"Maybe"},"\u2714\ufe0f"),Object(n.b)("td",{typeid:"Either"},"\u274c"),Object(n.b)("td",{typeid:"Validation"},"\u274c"),Object(n.b)("td",{typeid:"Future"},"\u274c")),Object(n.b)("tr",null,Object(n.b)("td",null,Object(n.b)("a",{href:"https://github.com/fantasyland/fantasy-land#ord",target:"_blank"},"Ord")),Object(n.b)("td",{typeid:"Maybe"},"\u274c"),Object(n.b)("td",{typeid:"Either"},"\u274c"),Object(n.b)("td",{typeid:"Validation"},"\u274c"),Object(n.b)("td",{typeid:"Future"},"\u274c")),Object(n.b)("tr",null,Object(n.b)("td",null,Object(n.b)("a",{href:"https://github.com/fantasyland/fantasy-land#semigroupoid",target:"_blank"},"Semigroupoid")),Object(n.b)("td",{typeid:"Maybe"},"\u274c"),Object(n.b)("td",{typeid:"Either"},"\u274c"),Object(n.b)("td",{typeid:"Validation"},"\u274c"),Object(n.b)("td",{typeid:"Future"},"\u274c")),Object(n.b)("tr",null,Object(n.b)("td",null,Object(n.b)("a",{href:"https://github.com/fantasyland/fantasy-land#category",target:"_blank"},"Category")),Object(n.b)("td",{typeid:"Maybe"},"\u274c"),Object(n.b)("td",{typeid:"Either"},"\u274c"),Object(n.b)("td",{typeid:"Validation"},"\u274c"),Object(n.b)("td",{typeid:"Future"},"\u274c")),Object(n.b)("tr",null,Object(n.b)("td",null,Object(n.b)("a",{href:"https://github.com/fantasyland/fantasy-land#semigroup",target:"_blank"},"Semigroup")),Object(n.b)("td",{typeid:"Maybe"},"\u2714\ufe0f"),Object(n.b)("td",{typeid:"Either"},"\u274c"),Object(n.b)("td",{typeid:"Validation"},"\u274c"),Object(n.b)("td",{typeid:"Future"},"\u274c")),Object(n.b)("tr",null,Object(n.b)("td",null,Object(n.b)("a",{href:"https://github.com/fantasyland/fantasy-land#monoid",target:"_blank"},"Monoid")),Object(n.b)("td",{typeid:"Maybe"},"\u2714\ufe0f"),Object(n.b)("td",{typeid:"Either"},"\u274c"),Object(n.b)("td",{typeid:"Validation"},"\u274c"),Object(n.b)("td",{typeid:"Future"},"\u274c")),Object(n.b)("tr",null,Object(n.b)("td",null,Object(n.b)("a",{href:"https://github.com/fantasyland/fantasy-land#group",target:"_blank"},"Group")),Object(n.b)("td",{typeid:"Maybe"},"\u274c"),Object(n.b)("td",{typeid:"Either"},"\u274c"),Object(n.b)("td",{typeid:"Validation"},"\u274c"),Object(n.b)("td",{typeid:"Future"},"\u274c")),Object(n.b)("tr",null,Object(n.b)("td",null,Object(n.b)("a",{href:"https://github.com/fantasyland/fantasy-land#filterable",target:"_blank"},"Filterable")),Object(n.b)("td",{typeid:"Maybe"},"\u2714\ufe0f"),Object(n.b)("td",{typeid:"Either"},"\u274c"),Object(n.b)("td",{typeid:"Validation"},"\u274c"),Object(n.b)("td",{typeid:"Future"},"\u274c")),Object(n.b)("tr",null,Object(n.b)("td",null,Object(n.b)("a",{href:"https://github.com/fantasyland/fantasy-land#functor",target:"_blank"},"Functor")),Object(n.b)("td",{typeid:"Maybe"},"\u274c"),Object(n.b)("td",{typeid:"Either"},"\u274c"),Object(n.b)("td",{typeid:"Validation"},"\u274c"),Object(n.b)("td",{typeid:"Future"},"\u274c")),Object(n.b)("tr",null,Object(n.b)("td",null,Object(n.b)("a",{href:"https://github.com/fantasyland/fantasy-land#contravariant",target:"_blank"},"Contravariant")),Object(n.b)("td",{typeid:"Maybe"},"\u274c"),Object(n.b)("td",{typeid:"Either"},"\u274c"),Object(n.b)("td",{typeid:"Validation"},"\u274c"),Object(n.b)("td",{typeid:"Future"},"\u274c")),Object(n.b)("tr",null,Object(n.b)("td",null,Object(n.b)("a",{href:"https://github.com/fantasyland/fantasy-land#apply",target:"_blank"},"Apply")),Object(n.b)("td",{typeid:"Maybe"},"\u2714\ufe0f"),Object(n.b)("td",{typeid:"Either"},"\u274c"),Object(n.b)("td",{typeid:"Validation"},"\u274c"),Object(n.b)("td",{typeid:"Future"},"\u274c")),Object(n.b)("tr",null,Object(n.b)("td",null,Object(n.b)("a",{href:"https://github.com/fantasyland/fantasy-land#applicative",target:"_blank"},"Applicative")),Object(n.b)("td",{typeid:"Maybe"},"\u2714\ufe0f"),Object(n.b)("td",{typeid:"Either"},"\u274c"),Object(n.b)("td",{typeid:"Validation"},"\u274c"),Object(n.b)("td",{typeid:"Future"},"\u274c")),Object(n.b)("tr",null,Object(n.b)("td",null,Object(n.b)("a",{href:"https://github.com/fantasyland/fantasy-land#alt",target:"_blank"},"Alt")),Object(n.b)("td",{typeid:"Maybe"},"\u274c"),Object(n.b)("td",{typeid:"Either"},"\u274c"),Object(n.b)("td",{typeid:"Validation"},"\u274c"),Object(n.b)("td",{typeid:"Future"},"\u274c")),Object(n.b)("tr",null,Object(n.b)("td",null,Object(n.b)("a",{href:"https://github.com/fantasyland/fantasy-land#plus",target:"_blank"},"Plus")),Object(n.b)("td",{typeid:"Maybe"},"\u274c"),Object(n.b)("td",{typeid:"Either"},"\u274c"),Object(n.b)("td",{typeid:"Validation"},"\u274c"),Object(n.b)("td",{typeid:"Future"},"\u274c")),Object(n.b)("tr",null,Object(n.b)("td",null,Object(n.b)("a",{href:"https://github.com/fantasyland/fantasy-land#alternative",target:"_blank"},"Alternative")),Object(n.b)("td",{typeid:"Maybe"},"\u274c"),Object(n.b)("td",{typeid:"Either"},"\u274c"),Object(n.b)("td",{typeid:"Validation"},"\u274c"),Object(n.b)("td",{typeid:"Future"},"\u274c")),Object(n.b)("tr",null,Object(n.b)("td",null,Object(n.b)("a",{href:"https://github.com/fantasyland/fantasy-land#foldable",target:"_blank"},"Foldable")),Object(n.b)("td",{typeid:"Maybe"},"\u274c"),Object(n.b)("td",{typeid:"Either"},"\u274c"),Object(n.b)("td",{typeid:"Validation"},"\u274c"),Object(n.b)("td",{typeid:"Future"},"\u274c")),Object(n.b)("tr",null,Object(n.b)("td",null,Object(n.b)("a",{href:"https://github.com/fantasyland/fantasy-land#traversable",target:"_blank"},"Traversable")),Object(n.b)("td",{typeid:"Maybe"},"\u274c"),Object(n.b)("td",{typeid:"Either"},"\u274c"),Object(n.b)("td",{typeid:"Validation"},"\u274c"),Object(n.b)("td",{typeid:"Future"},"\u274c")),Object(n.b)("tr",null,Object(n.b)("td",null,Object(n.b)("a",{href:"https://github.com/fantasyland/fantasy-land#chain",target:"_blank"},"Chain")),Object(n.b)("td",{typeid:"Maybe"},"\u2714\ufe0f"),Object(n.b)("td",{typeid:"Either"},"\u274c"),Object(n.b)("td",{typeid:"Validation"},"\u274c"),Object(n.b)("td",{typeid:"Future"},"\u274c")),Object(n.b)("tr",null,Object(n.b)("td",null,Object(n.b)("a",{href:"https://github.com/fantasyland/fantasy-land#chainRec",target:"_blank"},"ChainRec")),Object(n.b)("td",{typeid:"Maybe"},"\u274c"),Object(n.b)("td",{typeid:"Either"},"\u274c"),Object(n.b)("td",{typeid:"Validation"},"\u274c"),Object(n.b)("td",{typeid:"Future"},"\u274c")),Object(n.b)("tr",null,Object(n.b)("td",null,Object(n.b)("a",{href:"https://github.com/fantasyland/fantasy-land#monad",target:"_blank"},"Monad")),Object(n.b)("td",{typeid:"Maybe"},"\u2714\ufe0f"),Object(n.b)("td",{typeid:"Either"},"\u274c"),Object(n.b)("td",{typeid:"Validation"},"\u274c"),Object(n.b)("td",{typeid:"Future"},"\u274c")),Object(n.b)("tr",null,Object(n.b)("td",null,Object(n.b)("a",{href:"https://github.com/fantasyland/fantasy-land#extend",target:"_blank"},"Extend")),Object(n.b)("td",{typeid:"Maybe"},"\u2714\ufe0f"),Object(n.b)("td",{typeid:"Either"},"\u274c"),Object(n.b)("td",{typeid:"Validation"},"\u274c"),Object(n.b)("td",{typeid:"Future"},"\u274c")),Object(n.b)("tr",null,Object(n.b)("td",null,Object(n.b)("a",{href:"https://github.com/fantasyland/fantasy-land#comonad",target:"_blank"},"Comonad")),Object(n.b)("td",{typeid:"Maybe"},"\u2714\ufe0f"),Object(n.b)("td",{typeid:"Either"},"\u274c"),Object(n.b)("td",{typeid:"Validation"},"\u274c"),Object(n.b)("td",{typeid:"Future"},"\u274c")),Object(n.b)("tr",null,Object(n.b)("td",null,Object(n.b)("a",{href:"https://github.com/fantasyland/fantasy-land#bifunctor",target:"_blank"},"Bifunctor")),Object(n.b)("td",{typeid:"Maybe"},"\u274c"),Object(n.b)("td",{typeid:"Either"},"\u274c"),Object(n.b)("td",{typeid:"Validation"},"\u274c"),Object(n.b)("td",{typeid:"Future"},"\u274c")),Object(n.b)("tr",null,Object(n.b)("td",null,Object(n.b)("a",{href:"https://github.com/fantasyland/fantasy-land#profunctor",target:"_blank"},"Profunctor")),Object(n.b)("td",{typeid:"Maybe"},"\u274c"),Object(n.b)("td",{typeid:"Either"},"\u274c"),Object(n.b)("td",{typeid:"Validation"},"\u274c"),Object(n.b)("td",{typeid:"Future"},"\u274c"))))}O.isMDXComponent=!0},93:function(t,e,b){"use strict";var a=b(0),d=b.n(a),n=b(85),i=b(87);e.a=function(t){var e=Object(i.a)().isDarkTheme;return d.a.createElement("img",{src:e?Object(n.a)(t.darkMode):Object(n.a)(t.lightMode)})}}}]);