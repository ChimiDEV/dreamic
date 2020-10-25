(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{100:function(e,t,a){"use strict";var n=a(0),b=a.n(n);t.a=function(e){return b.a.createElement("div",null,e.children)}},77:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return p})),a.d(t,"metadata",(function(){return o})),a.d(t,"rightToc",(function(){return m})),a.d(t,"default",(function(){return d}));var n=a(2),b=a(6),i=(a(0),a(86)),l=a(93),r=a(99),c=a(100),p={id:"maybe",title:"Maybe",sidebar_label:"Maybe"},o={unversionedId:"monads/maybe",id:"monads/maybe",isDocsHomePage:!1,title:"Maybe",description:"<DarkModeImage",source:"@site/docs/monads/maybe.mdx",slug:"/monads/maybe",permalink:"/dreamic/docs/monads/maybe",version:"current",sidebar_label:"Maybe",sidebar:"sidebar",previous:{title:"Dreamic Types",permalink:"/dreamic/docs/core/monads"},next:{title:"Either",permalink:"/dreamic/docs/monads/either"}},m=[{value:"Overview",id:"overview",children:[]},{value:"Comparison: Dreamic vs Vanilla",id:"comparison-dreamic-vs-vanilla",children:[]},{value:"Factories",id:"factories",children:[{value:"fJust",id:"fjust",children:[]},{value:"fNothing",id:"fnothing",children:[]},{value:"fMaybe",id:"fmaybe",children:[]}]},{value:"Static Functions",id:"static-functions",children:[{value:"Maybe.of",id:"maybeof",children:[]},{value:"Maybe.empty",id:"maybeempty",children:[]}]},{value:"Methods",id:"methods",children:[{value:"Maybe#isJust",id:"maybeisjust",children:[]},{value:"Maybe#isNothing",id:"maybeisnothing",children:[]},{value:"Maybe#map",id:"maybemap",children:[]},{value:"Maybe#ap",id:"maybeap",children:[]},{value:"Maybe#chain",id:"maybechain",children:[]},{value:"Maybe#filter",id:"maybefilter",children:[]},{value:"Maybe#concat",id:"maybeconcat",children:[]},{value:"Maybe#extend",id:"maybeextend",children:[]},{value:"Maybe#extract",id:"maybeextract",children:[]},{value:"Maybe#toString",id:"maybetostring",children:[]}]}],j={rightToc:m};function d(e){var t=e.components,a=Object(b.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},j,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)(l.a,{lightMode:"img/docs/monads/tagline_maybe.svg",darkMode:"img/docs/monads/tagline_maybe_dark.svg",mdxType:"DarkModeImage"}),Object(i.b)("h2",{id:"overview"},"Overview"),Object(i.b)("p",null,"This monad is helpful, if you are working with values that might not exist ",Object(i.b)("em",{parentName:"p"},"or")," result into a non existing value while processing them.",Object(i.b)("br",{parentName:"p"}),"\n","A ",Object(i.b)("inlineCode",{parentName:"p"},"Maybe")," is either ",Object(i.b)("inlineCode",{parentName:"p"},"Just")," the value or simply ",Object(i.b)("inlineCode",{parentName:"p"},"Nothing"),"."),Object(i.b)("p",null,"The maybe monad abstracts away annoying type guards or defensive ",Object(i.b)("inlineCode",{parentName:"p"},"if")," statements.\nWhile ",Object(i.b)("strong",{parentName:"p"},"Just")," will work as excepted, a ",Object(i.b)("strong",{parentName:"p"},"Nothing")," simply returns itself without invoking any unsafe operation.\nFor example, if you try to map the value from a string to a number, this operation will only happen, if the respective value is a ",Object(i.b)("strong",{parentName:"p"},"Just"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"import { maybe } from '@chimidev/dreamic';\n\nmaybe.of<string>('12').map(parseInt); // Maybe.Just(12)\nmaybe.empty().map(parseInt); // Maybe.Nothing() - No error is thrown\n")),Object(i.b)("h2",{id:"comparison-dreamic-vs-vanilla"},"Comparison: Dreamic vs Vanilla"),Object(i.b)(r.a,{defaultValue:"defensive",values:[{label:"Vanilla: Defensive",value:"defensive"},{label:"Vanilla: Default",value:"default"},{label:"Dreamic",value:"dreamic"}],mdxType:"Tabs"},Object(i.b)(c.a,{value:"defensive",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const defensive = () => {\n  const optionalValue = mightBeUndefined();\n\n  // highlight-start\n  if(!optionalValue) {\n    return;\n  }\n  // highlight-end\n\n  return process(optionalValue);\n}\n"))),Object(i.b)(c.a,{value:"default",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"  const defaultValue = mightBeUndefined() || {defaultValue: true};\n"))),Object(i.b)(c.a,{value:"dreamic",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"maybe\n  .fromNullable(optionalValue)\n  .map(process)\n  .getOr('Default Value');\n\n// Point Free\npipe(\n  fromNullable,\n  map(process),\n  getOr('Default Value'),\n)(optionalValue);\n")))),Object(i.b)("h2",{id:"factories"},"Factories"),Object(i.b)("h3",{id:"fjust"},"fJust"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Type Annotations"),Object(i.b)("br",{parentName:"p"}),"\n",Object(i.b)("inlineCode",{parentName:"p"},"fJust:: a -> Maybe a"),Object(i.b)("br",{parentName:"p"}),"\n",Object(i.b)("inlineCode",{parentName:"p"},"<T>(value: T) => Maybe<T>")),Object(i.b)("p",null,"Accepts any value and returns it inside a ",Object(i.b)("inlineCode",{parentName:"p"},"Maybe")," as ",Object(i.b)("inlineCode",{parentName:"p"},"Just"),"."),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Parameter"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"value")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"T (Generic)"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Value the ",Object(i.b)("inlineCode",{parentName:"td"},"Maybe")," should contain.")))),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"import { fJust } from '@chimidev/dreamic';\n\nfJust(10); // Maybe.Just(10)\nfJust<CustomType>(CustomTypeInstance); // Maybe.Just(CustomTypeInstance)\n")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"fnothing"},"fNothing"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Type Annotations"),Object(i.b)("br",{parentName:"p"}),"\n",Object(i.b)("inlineCode",{parentName:"p"},"fNothing:: Nothing a => () -> Maybe a"),Object(i.b)("br",{parentName:"p"}),"\n",Object(i.b)("inlineCode",{parentName:"p"},"() => Maybe<never>")),Object(i.b)("p",null,"Used to create an empty ",Object(i.b)("inlineCode",{parentName:"p"},"Maybe"),". Will contain ",Object(i.b)("inlineCode",{parentName:"p"},"Nothing"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"import { fNothing } from '@chimidev/dreamic';\n\nfNothing(); // Maybe.Nothing()\n")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"fmaybe"},"fMaybe"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Type Annotations"),Object(i.b)("br",{parentName:"p"}),"\n",Object(i.b)("inlineCode",{parentName:"p"},"fMaybe:: a -> a -> Maybe a"),Object(i.b)("br",{parentName:"p"}),"\n",Object(i.b)("inlineCode",{parentName:"p"},"<T>(defaultValue: T, value: T) => Maybe<T>")),Object(i.b)("p",null,"Constructs a ",Object(i.b)("inlineCode",{parentName:"p"},"Maybe")," with either a value or its given default.",Object(i.b)("br",{parentName:"p"}),"\n","Accepts a default value and a value. If value equals ",Object(i.b)("inlineCode",{parentName:"p"},"undefined"),", the default value will be used."),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Parameter"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"defaultValue")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"T (Generic)"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Value the ",Object(i.b)("inlineCode",{parentName:"td"},"Maybe")," should contain, if ",Object(i.b)("inlineCode",{parentName:"td"},"value")," is ",Object(i.b)("inlineCode",{parentName:"td"},"undefined"),".")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"value")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"T (Generic)"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Value the ",Object(i.b)("inlineCode",{parentName:"td"},"Maybe")," should contain.")))),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"import { fMaybe } from '@chimidev/dreamic';\n\nfMaybe(10, 20); // Maybe.Just(20)\nfMaybe(10, aUndefinedVar); // Maybe.Just(10)\n")),Object(i.b)("hr",null),Object(i.b)("h2",{id:"static-functions"},"Static Functions"),Object(i.b)("h3",{id:"maybeof"},"Maybe.of"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Type Annotations"),Object(i.b)("br",{parentName:"p"}),"\n",Object(i.b)("inlineCode",{parentName:"p"},"of:: a -> Maybe a"),Object(i.b)("br",{parentName:"p"}),"\n",Object(i.b)("inlineCode",{parentName:"p"},"of<T>(value: T) => Maybe<T>")),Object(i.b)("p",null,"Used to create a ",Object(i.b)("inlineCode",{parentName:"p"},"Maybe")," with ",Object(i.b)("inlineCode",{parentName:"p"},"Just")," the given value.\nWorks like ",Object(i.b)("inlineCode",{parentName:"p"},"fJust()"),"."),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Parameter"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"value")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"T (Generic)"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Value the ",Object(i.b)("inlineCode",{parentName:"td"},"Maybe")," should contain.")))),Object(i.b)("h4",{id:"example"},"Example"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"import { maybe } from '@chimidev/dreamic';\n\nmaybe.of(10) // Maybe.Just(10)\nmaybe.of<CustomType>(CustomTypeInstance) // Maybe.Just(CustomTypeInstance)\n")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"maybeempty"},"Maybe.empty"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Type Annotations"),Object(i.b)("br",{parentName:"p"}),"\n",Object(i.b)("inlineCode",{parentName:"p"},"empty:: () -> Maybe a"),Object(i.b)("br",{parentName:"p"}),"\n",Object(i.b)("inlineCode",{parentName:"p"},"() => Maybe<never>")),Object(i.b)("p",null,"Used to create an empty ",Object(i.b)("inlineCode",{parentName:"p"},"Maybe"),". Will contain ",Object(i.b)("inlineCode",{parentName:"p"},"Nothing"),"."),Object(i.b)("h4",{id:"example-1"},"Example"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"import { maybe } from '@chimidev/dreamic';\n\nmaybe.empty() // Maybe.Nothing()\n")),Object(i.b)("hr",null),Object(i.b)("h2",{id:"methods"},"Methods"),Object(i.b)("h3",{id:"maybeisjust"},"Maybe#isJust"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Type Annotations"),Object(i.b)("br",{parentName:"p"}),"\n",Object(i.b)("inlineCode",{parentName:"p"},"isJust:: Maybe a ~> () -> boolean"),Object(i.b)("br",{parentName:"p"}),"\n",Object(i.b)("inlineCode",{parentName:"p"},"() => boolean")),Object(i.b)("p",null,"Checks if a ",Object(i.b)("inlineCode",{parentName:"p"},"Maybe")," contains ",Object(i.b)("inlineCode",{parentName:"p"},"Just")," a value."),Object(i.b)("h4",{id:"example-2"},"Example"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"import { maybe } from '@chimidev/dreamic';\n\nconst aMaybe = maybe.of(10);\nconst anotherMaybe = maybe.empty();\n\naMaybe.isJust(); // true\nanotherMaybe.isJust() // false\n")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"maybeisnothing"},"Maybe#isNothing"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Type Annotations"),Object(i.b)("br",{parentName:"p"}),"\n",Object(i.b)("inlineCode",{parentName:"p"},"isNothing:: Maybe a ~> () -> boolean"),Object(i.b)("br",{parentName:"p"}),"\n",Object(i.b)("inlineCode",{parentName:"p"},"() => boolean")),Object(i.b)("p",null,"Checks if a ",Object(i.b)("inlineCode",{parentName:"p"},"Maybe")," contains ",Object(i.b)("inlineCode",{parentName:"p"},"Nothing"),"."),Object(i.b)("h4",{id:"example-3"},"Example"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"import { maybe } from '@chimidev/dreamic';\n\nconst aMaybe = maybe.of(10);\nconst anotherMaybe = maybe.empty();\n\naMaybe.isNothing(); // false\nanotherMaybe.isNothing() // true\n")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"maybemap"},"Maybe#map"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Type Annotations"),Object(i.b)("br",{parentName:"p"}),"\n",Object(i.b)("inlineCode",{parentName:"p"},"map:: Maybe a ~> (a -> b) -> Maybe b"),Object(i.b)("br",{parentName:"p"}),"\n",Object(i.b)("inlineCode",{parentName:"p"},"<U>(fn: (value: T) => U) => Maybe<U>")),Object(i.b)("p",null,"This method applies a given function to the ",Object(i.b)("inlineCode",{parentName:"p"},"Maybe"),"'s value.\nIf the value is ",Object(i.b)("inlineCode",{parentName:"p"},"Nothing"),", the function will not be invoked.",Object(i.b)("br",{parentName:"p"}),"\n","Returns a new ",Object(i.b)("inlineCode",{parentName:"p"},"Maybe")," instance with the result of ",Object(i.b)("inlineCode",{parentName:"p"},"fn(maybeValue)")," or ",Object(i.b)("inlineCode",{parentName:"p"},"Nothing"),"."),Object(i.b)("p",null,"Following rules are imposed by fantasy-land:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"fn")," has to be a function. If ",Object(i.b)("inlineCode",{parentName:"li"},"fn")," is not an function, the method's behavior is ",Object(i.b)("strong",{parentName:"li"},"unspecified"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"fn")," can return any value.")),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Parameter"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"fn")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"function"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Mapping function.",Object(i.b)("br",null),"Is invoked with the value of the ",Object(i.b)("inlineCode",{parentName:"td"},"Maybe"),".",Object(i.b)("br",null),"Return value is used as new monad value.")))),Object(i.b)("h4",{id:"example-4"},"Example"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"import { maybe } from '@chimidev/dreamic';\n\nconst aMaybe = maybe.of(10);\n\naMaybe.map(x => x * 2); // Maybe.Just(20)\n")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"maybeap"},"Maybe#ap"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Type Annotations"),Object(i.b)("br",{parentName:"p"}),"\n",Object(i.b)("inlineCode",{parentName:"p"},"ap:: Maybe a ~> Maybe (a -> b) -> Maybe b"),Object(i.b)("br",{parentName:"p"}),"\n",Object(i.b)("inlineCode",{parentName:"p"},"<U>(maybe: Maybe<(value: T) => U>) => Maybe<U>")),Object(i.b)("p",null,"Applies the function containing in the given ",Object(i.b)("inlineCode",{parentName:"p"},"Maybe")," to the value of the used ",Object(i.b)("inlineCode",{parentName:"p"},"Maybe"),", returning a ",Object(i.b)("inlineCode",{parentName:"p"},"Maybe")," of the result.",Object(i.b)("br",{parentName:"p"}),"\n","If either of the both are ",Object(i.b)("inlineCode",{parentName:"p"},"Nothing"),", the result will be ",Object(i.b)("inlineCode",{parentName:"p"},"Nothing"),"."),Object(i.b)("p",null,"Following rules are imposed by fantasy-land:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"If the given ",Object(i.b)("inlineCode",{parentName:"li"},"Maybe")," does not contain any function, the behavior is ",Object(i.b)("strong",{parentName:"li"},"unspecified"),"."),Object(i.b)("li",{parentName:"ul"},"The ",Object(i.b)("inlineCode",{parentName:"li"},"Apply")," parameter must be of the same type as the Monad, i.e. in this case a ",Object(i.b)("inlineCode",{parentName:"li"},"Maybe"),"."),Object(i.b)("li",{parentName:"ul"},"The resulting Monad of ",Object(i.b)("inlineCode",{parentName:"li"},"ap")," must be of the same type, i.e. in this case a ",Object(i.b)("inlineCode",{parentName:"li"},"Maybe"),".")),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Parameter"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"maybe")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Maybe"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"A ",Object(i.b)("inlineCode",{parentName:"td"},"Maybe")," containg the function, that applies to the value.")))),Object(i.b)("h4",{id:"example-5"},"Example"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"import { maybe } from '@chimidev/dreamic';\n\nconst aMaybe = maybe.of(10);\nconst applyMaybe = maybe.of((x: number) => x * 2);\n\naMaybe.ap(applyMaybe); // Maybe.Just(20)\n")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"maybechain"},"Maybe#chain"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Type Annotations"),Object(i.b)("br",{parentName:"p"}),"\n",Object(i.b)("inlineCode",{parentName:"p"},"chain:: Maybe a ~> (a -> Maybe b) -> Maybe b"),Object(i.b)("br",{parentName:"p"}),"\n",Object(i.b)("inlineCode",{parentName:"p"},"<U>(fn: (value: T) => Maybe<U>) => Maybe<U>")),Object(i.b)("p",null,"The chain method is the combination of ",Object(i.b)("inlineCode",{parentName:"p"},"Maybe#map")," and ",Object(i.b)("inlineCode",{parentName:"p"},"Maybe#extract"),".",Object(i.b)("br",{parentName:"p"}),"\n","It is used to prevent cases, which result in nested monads like for example ",Object(i.b)("inlineCode",{parentName:"p"},"Maybe<Maybe<number>>"),"."),Object(i.b)("p",null,"Following rules are imposed by fantasy-land:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"fn")," has to be a function. If ",Object(i.b)("inlineCode",{parentName:"li"},"fn")," is not an function, the method's behavior is ",Object(i.b)("strong",{parentName:"li"},"unspecified"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"fn")," has to return the same type as the ",Object(i.b)("inlineCode",{parentName:"li"},"Chain"),", i.e. in this case ",Object(i.b)("inlineCode",{parentName:"li"},"Maybe"),".")),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Parameter"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"fn")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"function"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Chaining function, which returns a ",Object(i.b)("inlineCode",{parentName:"td"},"Maybe"),".",Object(i.b)("br",null),"Will be invoked with the value of the ",Object(i.b)("inlineCode",{parentName:"td"},"Maybe"),".")))),Object(i.b)("h4",{id:"example-6"},"Example"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"import { maybe } from '@chimidev/dreamic';\n\n// Function that divides given numbers, but never by 0.\n// Will return the result nested in a Maybe.\nlet safeDivision; // E.g. safeDivision(10, 0) -> Maybe.Nothing();\nconst aMaybe = maybe.of(0);\n\naMaybe.chain(safeDivision(10)); // Maybe.Nothing()\n")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"maybefilter"},"Maybe#filter"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Type Annotations"),Object(i.b)("br",{parentName:"p"}),"\n",Object(i.b)("inlineCode",{parentName:"p"},"filter:: Maybe a ~> (a -> Boolean) -> Maybe a"),Object(i.b)("br",{parentName:"p"}),"\n",Object(i.b)("inlineCode",{parentName:"p"},"(predicate: (value: T) => boolean)) => Maybe<T>")),Object(i.b)("p",null,"Takes a predicate function and returns a ",Object(i.b)("inlineCode",{parentName:"p"},"Maybe")," with either the value (if the predicate returns true) or ",Object(i.b)("inlineCode",{parentName:"p"},"Nothing"),"."),Object(i.b)("p",null,"Following rules are imposed by fantasy-land:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"predicate")," has to be a function. If ",Object(i.b)("inlineCode",{parentName:"li"},"predicate")," is not an function, the method's behavior is ",Object(i.b)("strong",{parentName:"li"},"unspecified"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"predicate")," must either return true or false otherwise the behavior is ",Object(i.b)("strong",{parentName:"li"},"unspecified"),".")),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Parameter"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"predicate")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"function"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"If the function returns true, the value of the ",Object(i.b)("inlineCode",{parentName:"td"},"Maybe")," is kept.",Object(i.b)("br",null)," Otherwise the result will be ",Object(i.b)("inlineCode",{parentName:"td"},"Nothing"),".")))),Object(i.b)("h4",{id:"example-7"},"Example"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"import { maybe } from '@chimidev/dreamic';\n\nconst aMaybe = maybe.of(10);\n\naMaybe.filter(x => x < 10); // Maybe.Nothing()\naMaybe.filter(x => x >= 10); // Maybe.Just(10)\n")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"maybeconcat"},"Maybe#concat"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Type Annotations"),Object(i.b)("br",{parentName:"p"}),"\n",Object(i.b)("inlineCode",{parentName:"p"},"concat:: Maybe a ~> Maybe a -> Maybe a"),Object(i.b)("br",{parentName:"p"}),"\n",Object(i.b)("inlineCode",{parentName:"p"},"(maybe: Maybe<T>) => Maybe<T>")),Object(i.b)("p",null,"Accepts a ",Object(i.b)("inlineCode",{parentName:"p"},"Maybe")," and concat it with given ",Object(i.b)("inlineCode",{parentName:"p"},"Maybe"),".",Object(i.b)("br",{parentName:"p"}),"\n","Concatenation depends on the inherent type of the ",Object(i.b)("inlineCode",{parentName:"p"},"Maybe"),":"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("em",{parentName:"li"},"number"),": Addition is invoked"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("em",{parentName:"li"},"object"),": Objects are merged together (existing values are overwritten by incoming ",Object(i.b)("inlineCode",{parentName:"li"},"Maybe"),")"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("em",{parentName:"li"},"string"),": Strings are simply chained together")),Object(i.b)("p",null,"Every other type (or uncompatible types) will result in a ",Object(i.b)("inlineCode",{parentName:"p"},"Nothing")," since there is no way to concat those values.",Object(i.b)("br",{parentName:"p"}),"\n","If you concat a ",Object(i.b)("inlineCode",{parentName:"p"},"Nothing")," with another Maybe that is not empty, you'll receive just the given Maybe."),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Parameter"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"maybe")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Maybe"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Instance to concat with.")))),Object(i.b)("h4",{id:"example-8"},"Example"),Object(i.b)(r.a,{defaultValue:"number",values:[{label:"Numbers",value:"number"},{label:"Strings",value:"string"},{label:"Objects",value:"object"},{label:"Empty",value:"empty"}],mdxType:"Tabs"},Object(i.b)(c.a,{value:"number",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"import { maybe } from '@chimidev/dreamic';\n\nconst aMaybe = maybe.of(10);\n\naMaybe.concat(15); // Maybe.Just(25)\naMaybe.concat('string'); // Maybe.Nothing()\n"))),Object(i.b)(c.a,{value:"string",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"import { maybe } from '@chimidev/dreamic';\n\nconst aMaybe = maybe.of('Hello ');\n\naMaybe.concat('Developer'); // Maybe.Just('Hello Developer')\naMaybe.concat(10); // Maybe.Nothing()\n"))),Object(i.b)(c.a,{value:"object",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"import { maybe } from '@chimidev/dreamic';\n\nconst aMaybe = maybe.of({aKey: 'aValue', anotherKey: false});\n\naMaybe.concat({addedKey: 'addedValue', anotherKey: true});\n//    ^Maybe.Just({aKey: 'aValue',  anotherKey: true, addedKey: 'addedValue'})\naMaybe.concat(10); // Maybe.Nothing()\n"))),Object(i.b)(c.a,{value:"empty",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"import { maybe } from '@chimidev/dreamic';\n\nconst aMaybe = maybe.of('string');\nconst emptyMaybe = maybe.empty();\nconst anotherMaybe = maybe.of(true);\n\naMaybe.concat(maybe.empty()); // Maybe.Just('string')\nemptyMaybe.concat(aMaybe); // Maybe.Just('string')\n\n// Booleans are not concatable.\nanotherMaybe.concat(false); // Maybe.Nothing()\n")))),Object(i.b)("hr",null),Object(i.b)("h3",{id:"maybeextend"},"Maybe#extend"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Type Annotations"),Object(i.b)("br",{parentName:"p"}),"\n",Object(i.b)("inlineCode",{parentName:"p"},"extend:: Maybe a ~> (Maybe a -> b) -> Maybe b"),Object(i.b)("br",{parentName:"p"}),"\n",Object(i.b)("inlineCode",{parentName:"p"},"<U>(fn:(value: Maybe<T>) => U) => Maybe<U>")),Object(i.b)("p",null,"Given function will be invoked with the used ",Object(i.b)("inlineCode",{parentName:"p"},"Maybe")," (",Object(i.b)("inlineCode",{parentName:"p"},"this"),"). Think of a reversed ",Object(i.b)("inlineCode",{parentName:"p"},"chain"),"."),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Parameter"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"fn")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"function"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Invoked with used ",Object(i.b)("inlineCode",{parentName:"td"},"Maybe (this)"),".",Object(i.b)("br",null),"Return value is used as value of new container.")))),Object(i.b)("h4",{id:"example-9"},"Example"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"import { maybe } from '@chimidev/dreamic';\n\nconst aMaybe = maybe.of('string');\n\naMaybe.extend(m => m.isJust() && 'new string'); // Maybe.Just('new string')\n")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"maybeextract"},"Maybe#extract"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Type Annotations"),Object(i.b)("br",{parentName:"p"}),"\n",Object(i.b)("inlineCode",{parentName:"p"},"join:: Maybe a ~> () -> a"),Object(i.b)("br",{parentName:"p"}),"\n",Object(i.b)("inlineCode",{parentName:"p"},"() => T")),Object(i.b)("p",null,"Used to retrieve the value of the ",Object(i.b)("inlineCode",{parentName:"p"},"Maybe")," container."),Object(i.b)("h4",{id:"example-10"},"Example"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"import { maybe } from '@chimidev/dreamic';\n\nconst aMaybe = maybe.of(10);\n\naMaybe.extract(); // 10\n")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"maybetostring"},"Maybe#toString"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Type Annotations"),Object(i.b)("br",{parentName:"p"}),"\n",Object(i.b)("inlineCode",{parentName:"p"},"toString:: Maybe a ~> () -> b"),Object(i.b)("br",{parentName:"p"}),"\n",Object(i.b)("inlineCode",{parentName:"p"},"() => string")),Object(i.b)("p",null,"Cast a monad to its string representation.",Object(i.b)("br",{parentName:"p"}),"\n","Only reason to use this would be while debugging an application."),Object(i.b)("h4",{id:"example-11"},"Example"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"import { maybe } from '@chimidev/dreamic';\n\nconst aMaybe = maybe.of(10);\n\nconsole.log(aMaybe.toString())\nconsole.log(aMaybe) // Dreamic implements a `inspect` for its monads. Will invoke toString().\n")))}d.isMDXComponent=!0},93:function(e,t,a){"use strict";var n=a(0),b=a.n(n),i=a(85),l=a(87);t.a=function(e){var t=Object(l.a)().isDarkTheme;return b.a.createElement("img",{src:t?Object(i.a)(e.darkMode):Object(i.a)(e.lightMode)})}},99:function(e,t,a){"use strict";var n=a(0),b=a.n(n),i=a(96),l=a(83),r=a(53),c=a.n(r),p=37,o=39;t.a=function(e){var t=e.block,a=e.children,r=e.defaultValue,m=e.values,j=e.groupId,d=Object(i.a)(),O=d.tabGroupChoices,u=d.setTabGroupChoices,s=Object(n.useState)(r),y=s[0],N=s[1],h=Object(n.useState)(!1),g=h[0],f=h[1];if(null!=j){var M=O[j];null!=M&&M!==y&&m.some((function(e){return e.value===M}))&&N(M)}var v=function(e){N(e),null!=j&&u(j,e)},C=[],T=function(e){e.metaKey||e.altKey||e.ctrlKey||f(!0)},x=function(){f(!1)};return Object(n.useEffect)((function(){window.addEventListener("keydown",T),window.addEventListener("mousedown",x)}),[]),b.a.createElement("div",null,b.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(l.a)("tabs",{"tabs--block":t})},m.map((function(e){var t=e.value,a=e.label;return b.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":y===t,className:Object(l.a)("tabs__item",c.a.tabItem,{"tabs__item--active":y===t}),style:g?{}:{outline:"none"},key:t,ref:function(e){return C.push(e)},onKeyDown:function(e){!function(e,t,a){switch(a.keyCode){case o:!function(e,t){var a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()}(e,t);break;case p:!function(e,t){var a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()}(e,t)}}(C,e.target,e),T(e)},onFocus:function(){return v(t)},onClick:function(){v(t),f(!1)},onPointerDown:function(){return f(!1)}},a)}))),b.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},n.Children.toArray(a).filter((function(e){return e.props.value===y}))[0]))}}}]);