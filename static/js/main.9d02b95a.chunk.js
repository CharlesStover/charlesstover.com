(this["webpackJsonpcharlesstover.com"]=this["webpackJsonpcharlesstover.com"]||[]).push([[1],{106:function(e,t,n){e.exports={header:"spritesheet2gif_header__AQZm9",matte:"spritesheet2gif_matte__3X9SD"}},124:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n(203);function i(){const{data:e,error:t,isLoading:n,refetch:i}=Object(a.a)("npm",(async()=>{const e=await fetch(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_NPM_DOWNLOADS||"https://npm.cscdn.net/charlesstover.json");return await e.json()}));return{data:e,error:t,isLoading:n,refetch:i}}},131:function(e,t,n){e.exports={sideNavigation:"navigation_sideNavigation__tO8pZ"}},133:function(e){e.exports=JSON.parse('{"$count matches":"$count matches","$count packages":"$count packages","$n minutes":"$n minutes","1 match":"1 match","1 minute":"1 minute","About me":"About me","An error occurred.":"An error occurred.","Applications":"Applications","Avatar":"Avatar","Breadcrumbs":"Breadcrumbs","Cancel":"Cancel","Close navigation":"Close navigation","Close tools":"Close tools","Confirm":"Confirm","Connect with me":"Connect with me","Dark mode":"Dark mode","Dismiss":"Dismiss","Explicit downloads":"Explicit downloads","external":"external","Filter packages":"Filter packages","Front end: $n years":"Front end: $n years","Full stack: $n years":"Full stack: $n years","Home":"Home","Loading packages":"Loading packages","Loading publications":"Loading publications","Loading quotes":"Loading quotes","Loading spritesheet to GIF converter":"Loading spritesheet to GIF converter","More applications":"More applications","Navigation":"Navigation","No matches":"No matches","Notifications":"Notifications","Package name":"Package name","Package properties":"Package properties","Packages":"Packages","Portfolio":"Portfolio","Preferences":"Preferences","Projects":"Projects","Publication date":"Publication date","Publications":"Publications","Quotes":"Quotes","Reactions":"Reactions","Reactions/day":"Reactions/day","Reactions/view":"Reactions/view","Reactions per day":"Reactions per day","Reactions per view":"Reactions per view","Reading time":"Reading time","Retry":"Retry","RPG overworld engine":"RPG overworld engine","Select page size.":"Select page size.","Select to wrap lines and see all text.":"Select to wrap lines and see all text.","Select visible columns.":"Select visible columns.","Settings":"Settings","Sort by":"Sort by","Sprite sheet to GIF":"Sprite sheet to GIF","Toggle navigation":"Toggle navigation","Toggle tools":"Toggle tools","Tools":"Tools","Total downloads":"Total downloads","View r\xe9sum\xe9":"View r\xe9sum\xe9","Views":"Views","Views/day":"Views/day","Views per day":"Views per day","Wrap lines":"Wrap lines"}')},202:function(e,t,n){"use strict";n.r(t);var a=n(3),i=(n(152),n(214)),o=n(38),s=n(210),r=n(212),c=n(128),l=n(14),h=n(215),d=n(132),u=n(23),b=n(19),j=n(54),p=n(69),O=n(39),f=n(139),m=n(137),g=n(0),x=n(91);const v=[{text:"CharlesStover.com",href:"/"}];const A=Object.freeze([]);function w({children:e=A}){const{ariaLabel:t,handleFollow:n,items:i}=function(e){const{handleFollow:t}=Object(x.a)(),n=Object(l.c)(),a=Object(g.useMemo)((()=>[...v,...e]),[e]);return{ariaLabel:n("Breadcrumbs"),handleFollow:t,items:a}}(e);return Object(a.jsx)(m.a,{ariaLabel:t,items:i,onFollow:n})}var y=n(138),C=n(36);var k=n(121),S=new C.a(!0);function P(){return Object(C.b)(S)}function F(){const{checked:e,handleChange:t}=function(){const[e,t]=P();return{checked:e,handleChange:Object(g.useCallback)((e=>{t(e.detail.checked)}),[t])}}();return Object(a.jsx)(k.a,{checked:e,onChange:t,children:Object(a.jsx)(l.b,{children:"Dark mode"})})}var T,R=n(78);!function(e){e.Arabic="arabic",e.Cebuano="cebuano",e.English="english",e.Japanese="japanese"}(T||(T={}));var E=T;var D=[{label:"English",value:E.English},{label:"Arabic",value:E.Arabic},{label:"Cebuano",value:E.Cebuano}],U=new C.a(E.English);function B(){return Object(C.b)(U)}function L(){const{handleChange:e,selectedOption:t}=function(){const[e,t]=B();return{handleChange:Object(g.useCallback)((e=>{t(e.detail.selectedOption.value)}),[t]),selectedOption:Object(g.useMemo)((()=>D.find((({value:t})=>t===e))),[e])}}();return Object(a.jsx)(R.a,{onChange:e,options:D,selectedOption:t})}function I(){return Object(a.jsxs)(O.a,{direction:"vertical",size:"m",children:[Object(a.jsx)(F,{}),Object(a.jsx)(L,{})]})}const H=new C.a(new Map);function W(){const[e,t]=Object(C.b)(H),n=function(){const e=Object(l.c)();return Object(g.useMemo)((()=>[{href:"/",text:e("Home")||"...",type:"link"},{defaultExpanded:!0,text:e("Applications")||"...",type:"section",items:[{href:"/spritesheet2gif",text:e("Sprite sheet to GIF")||"...",type:"link"},{defaultExpanded:!1,text:e("More applications")||"...",type:"section",items:[{external:!0,href:"https://acealters.com/",text:"AceAlters.com",type:"link"},{external:!0,href:"https://charlesstover.github.io/3ds-tetris",text:"3DS Tetris",type:"link"},{external:!0,href:"https://dota2huds.com/",text:"Dota2HUDs.com",type:"link"},{external:!0,href:"https://mtgenius.github.io/planechase",text:"MTG Planechase",type:"link"},{external:!0,href:"https://quisido.com/",text:"Quisido.com",type:"link"},{external:!0,href:"https://charlesstover.github.io/rpg-overworld-engine/",text:e("RPG overworld engine")||"...",type:"link"}]}]},{defaultExpanded:!0,text:e("Portfolio")||"...",type:"section",items:[{href:"/packages",text:e("Packages")||"...",type:"link"},{href:"/publications",text:e("Publications")||"...",type:"link"},{href:"/quotes",text:e("Quotes")||"...",type:"link"}]},{defaultExpanded:!0,text:e("Connect with me")||"...",type:"section",items:[{external:!0,href:"https://github.com/CharlesStover",text:"GitHub",type:"link"},{external:!0,href:"https://www.linkedin.com/in/charles-stover/",text:"LinkedIn",type:"link"},{external:!0,href:"https://charles-stover.medium.com/",text:"Medium",type:"link"},{external:!0,href:"https://twitter.com/CharlesStover",text:"Twitter",type:"link"}]},{defaultExpanded:!1,text:e("Settings")||"...",type:"section",items:[{type:"link",text:"",href:"#settings",info:Object(a.jsx)(I,{})}]}]),[e])}(),{activeHref:i,handleFollow:o}=Object(x.b)(),s=Object(g.useCallback)((t=>{const n={...t};if(function(e){return Object.prototype.hasOwnProperty.call(e,"defaultExpanded")}(n)&&e.has(n.text)&&(n.defaultExpanded=e.get(n.text)),function(e){return Object.prototype.hasOwnProperty.call(e,"items")}(n)){const e=[];for(const t of n.items){const n=s(t);e.push(n)}n.items=e}return n}),[e]);return{activeHref:i,handleFollow:o,handleChange:Object(g.useCallback)((e=>{t((t=>{const n=new Map(t);return n.set(e.detail.item.text,e.detail.expanded),n}))}),[t]),items:Object(g.useMemo)((()=>n.map(s)),[n,s])}}var M=n(131),Q=n.n(M);function J(){const{activeHref:e,handleChange:t,handleFollow:n,items:i}=W();return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(b.a,{margin:"m",variant:"h2",children:Object(a.jsx)(l.b,{children:"Navigation"})}),Object(a.jsx)(y.a,{activeHref:e,className:Q.a.sideNavigation,items:i,onChange:t,onFollow:n})]})}var V=Object(g.memo)(J),N=n(140);function z({children:e}){return"undefined"===typeof e||0===e.length?null:Object(a.jsx)(N.a,{items:e})}var G=n(123);function K({Tools:e,breadcrumbs:t,children:n,contentType:i,notifications:o,onToolsChange:s,toolsHide:r,toolsOpen:c}){const{ariaLabels:h,handleNavigationChange:d,handleToolsChange:u,navigationOpen:b,ref:j,toolsOpen:p}=function({controlledToolsOpen:e,onToolsChange:t}){const n=Object(l.c)(),{handleNavigationChange:a,handleToolsChange:i,navigationOpen:o,toolsOpen:s}=Object(G.a)({defaultToolsOpen:!1}),r=Object(g.useRef)(null);return Object(g.useLayoutEffect)((()=>{null!==r.current&&r.current.scrollIntoView()}),[]),{handleNavigationChange:a,navigationOpen:o,ref:r,ariaLabels:Object(g.useMemo)((()=>({navigation:n("Navigation"),navigationToggle:n("Toggle navigation"),navigationClose:n("Close navigation"),notifications:n("Notifications"),tools:n("Tools"),toolsToggle:n("Toggle tools"),toolsClose:n("Close tools")})),[n]),handleToolsChange:"function"===typeof t?t:i,toolsOpen:"boolean"===typeof e?e:s}}({controlledToolsOpen:c,onToolsChange:s});return Object(a.jsx)("div",{ref:j,children:Object(a.jsx)(f.a,{ariaLabels:h,breadcrumbs:Object(a.jsx)(w,{children:t}),content:n,contentType:i,navigation:Object(a.jsx)(V,{}),navigationOpen:b,notifications:Object(a.jsx)(z,{children:o}),onNavigationChange:d,onToolsChange:u,tools:e&&Object(a.jsx)(e,{}),toolsHide:r,toolsOpen:p})})}var q=n(53);function X(){const{iconAlt:e}={iconAlt:Object(l.c)()("external")};return Object(a.jsx)(q.a,{href:"/resume/2021-05/charles-stover-resume.pdf",iconAlign:"right",iconAlt:e,iconName:"external",target:"_blank",variant:"primary",children:Object(a.jsx)(l.b,{children:"View r\xe9sum\xe9"})})}var Y=n(81),Z=n.n(Y);const _=(new Date).getFullYear(),$=_-2001,ee=_-2005;function te(){const{avatarAlt:e}={avatarAlt:Object(l.c)()("Avatar")};return Object(a.jsx)(K,{toolsHide:!0,children:Object(a.jsx)(O.a,{size:"l",children:Object(a.jsx)(j.a,{header:Object(a.jsx)(p.a,{actions:Object(a.jsx)(X,{}),children:Object(a.jsx)(l.b,{children:"About me"})}),children:Object(a.jsxs)(O.a,{className:Z.a.content,direction:"horizontal",size:"xxl",children:[Object(a.jsx)(b.a,{textAlign:"center",children:Object(a.jsx)("img",{alt:e,className:Z.a.avatar,height:100,src:"data:image/jpeg;base64,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",width:100})}),Object(a.jsxs)(O.a,{className:Z.a.p,direction:"vertical",size:"m",children:[Object(a.jsxs)(b.a,{variant:"p",children:["My name is ",Object(a.jsx)("strong",{children:"Charles Stover"}),". I am a"," ",Object(a.jsx)("strong",{children:"senior front end engineer"})," with a focus in"," ",Object(a.jsx)("strong",{children:"JavaScript and React"}),". My expertise is in leading projects for large teams, application monitoring, and"," ",Object(a.jsx)("abbr",{title:"user interface",children:"UI"}),"/",Object(a.jsx)("abbr",{title:"user experience",children:"UX"}),"."]}),Object(a.jsxs)("ul",{className:Z.a.list,children:[Object(a.jsx)("li",{children:Object(a.jsx)(l.b,{n:$,children:"Front end: $n years"})}),Object(a.jsx)("li",{children:Object(a.jsx)(l.b,{n:ee,children:"Full stack: $n years"})})]})]})]})})})})}var ne=n(35),ae=Object(g.lazy)((()=>Promise.all([n.e(0),n.e(4),n.e(8)]).then(n.bind(null,257))));function ie(){return Object(a.jsx)(g.Suspense,{fallback:Object(a.jsxs)(b.a,{textAlign:"center",children:[Object(a.jsx)(ne.a,{}),Object(a.jsx)(l.b,{children:"Loading packages"})]}),children:Object(a.jsx)(ae,{})})}var oe=n(124);function se(){const{breadcrumbs:e,notifications:t}=function(){const{error:e,refetch:t}=Object(oe.a)(),n=Object(l.c)();return{breadcrumbs:Object(g.useMemo)((()=>[{href:"/packages",text:n("Packages")||"..."}]),[n]),notifications:Object(g.useMemo)((()=>{const n=[];var i;return null!==e&&n.push({content:(i=e,"undefined"===typeof i||null===i?null:"number"===typeof i?i.toString():"string"===typeof i?i:i instanceof Error?i.message:JSON.stringify(i)),buttonText:Object(a.jsx)(l.b,{children:"Retry"}),dismissible:!0,header:Object(a.jsx)(l.b,{children:"An error occurred."}),onButtonClick(){t()},type:"error"}),n}),[e,t])}}();return Object(a.jsx)(K,{breadcrumbs:e,contentType:"table",notifications:t,toolsHide:!0,children:Object(a.jsx)(ie,{})})}var re=Object(g.lazy)((()=>Promise.all([n.e(0),n.e(5),n.e(7)]).then(n.bind(null,258))));function ce(){return Object(a.jsx)(g.Suspense,{fallback:Object(a.jsxs)(b.a,{textAlign:"center",children:[Object(a.jsx)(ne.a,{}),Object(a.jsx)(l.b,{children:"Loading publications"})]}),children:Object(a.jsx)(re,{})})}function le(){const{breadcrumbs:e}=function(){const e=Object(l.c)();return{breadcrumbs:Object(g.useMemo)((()=>[{href:"/publications",text:e("Publications")||"..."}]),[e])}}();return Object(a.jsx)(K,{breadcrumbs:e,toolsHide:!0,children:Object(a.jsx)(ce,{})})}var he=Object(g.lazy)((()=>Promise.all([n.e(0),n.e(6)]).then(n.bind(null,259))));function de(){return Object(a.jsx)(g.Suspense,{fallback:Object(a.jsxs)(b.a,{textAlign:"center",children:[Object(a.jsx)(ne.a,{}),Object(a.jsx)(l.b,{children:"Loading quotes"})]}),children:Object(a.jsx)(he,{})})}function ue(){const{breadcrumbs:e}=function(){const e=Object(l.c)();return{breadcrumbs:Object(g.useMemo)((()=>[{href:"/quotes",text:e("Quotes")||"..."}]),[e])}}();return Object(a.jsx)(K,{breadcrumbs:e,toolsHide:!0,children:Object(a.jsx)(de,{})})}var be=n(74),je=n(97),pe=n(79);function Oe({height:e,image:t,width:n}){const i=Object(g.useRef)(null);return Object(g.useEffect)((()=>{null!==i.current&&i.current.scrollIntoView()}),[t]),Object(a.jsx)(j.a,{header:Object(a.jsx)(p.a,{children:"Result"}),children:Object(a.jsx)(b.a,{textAlign:"center",children:Object(a.jsx)("img",{height:e,ref:i,src:t,width:n})})})}var fe,me=n(57);function ge(){return Object(a.jsxs)(me.a,{header:"Automatic dimension",children:[Object(a.jsx)(b.a,{variant:"p",children:"If the sprite sheet is wider than it is tall, the dimension represents the width of each sprite."}),Object(a.jsx)(b.a,{variant:"p",children:"If the sprite sheet is taller than it is wide, the dimension represents the height of each sprite."})]})}function xe(){return Object(a.jsxs)(me.a,{header:"Automatic direction",children:[Object(a.jsx)(b.a,{variant:"p",children:"If the sprite sheet is wider than it is tall, then the sprite's height will be equal to the height of the sprite sheet."}),Object(a.jsx)(b.a,{variant:"p",children:"If the sprite sheet is taller than it is wide, then the sprite's width will be equal to the width of the sprite sheet."})]})}function ve(){return Object(a.jsxs)(me.a,{header:"About",children:[Object(a.jsx)(b.a,{variant:"p",children:"You can convert your sprite sheet images to animated GIFs with this simple online tool."}),Object(a.jsxs)(b.a,{variant:"p",children:["To generate an animated GIF, browse your computer for a sprite sheet. GIF, JPEG, and PNG sprite sheets are supported. Select the desired options for your animation, then click ",Object(a.jsx)("em",{children:"Convert"}),"."]})]})}function Ae(){return Object(a.jsxs)(me.a,{header:"Matte",children:[Object(a.jsx)(b.a,{variant:"p",children:"If your sprite sheet has a red background color, you would want to use a red matte so that your animation is transparent."}),Object(a.jsxs)(b.a,{variant:"p",children:["If your sprite sheet uses a lot of red in the foreground, you would"," ",Object(a.jsx)("em",{children:"not"})," want to use a red matte. This would cause the red in the foreground to become transparent. An off-colored but similar alternative that does not appear in the sprite sheet would be a possible solution."]}),Object(a.jsx)(b.a,{variant:"p",children:"If your sprite sheet is already transparent, choose a color not present in the image."}),Object(a.jsx)(b.a,{variant:"p",children:"For translucent PNG sprite sheets, this is the background color your animated GIF will fade into, as if your PNG were placed on top of this color."})]})}!function(e){e.Automatic="automatic",e.Horizontal="horizontal",e.Vertical="vertical"}(fe||(fe={}));var we=fe;const ye=[{label:"Automatic",value:we.Automatic},{label:"Horizontal",value:we.Horizontal},{label:"Vertical",value:we.Vertical}],Ce=[{label:"total",value:"false"},{label:"per frame",value:"true"}];function ke(){const e=Object(g.useRef)(null),[t,n]=Object(g.useState)((()=>ve)),[a,i]=Object(g.useState)(null),[o,s]=Object(g.useState)(0),[r,c]=Object(g.useState)(we.Automatic),[l,h]=Object(g.useState)(80),[d,u]=Object(g.useState)(null),[b,j]=Object(g.useState)(!1),[p,O]=Object(g.useState)("#000000"),[f,m]=Object(g.useState)(!0),[x,v]=Object(g.useState)(null),[A,w]=Object(g.useState)(!1),y=Object(g.useMemo)((()=>"Use zero for square sprites."),[]),C=Object(g.useMemo)((()=>{switch(r){case we.Automatic:return"Sprite dimension in pixels";case we.Horizontal:return"Sprite width in pixels";case we.Vertical:return"Sprite height in pixels"}}),[r]),k=Object(g.useMemo)((()=>{const e=[];return null!==d&&e.push({content:d.message,dismissLabel:"Dismiss",dismissible:!0,header:"An error occurred.",type:"error",onDismiss(){u(null)}}),e}),[d]),S=Object(g.useMemo)((()=>{const e=ye.find((({value:e})=>e===r));if("undefined"===typeof e)throw new Error(`Cannot find direction: ${r}`);return e}),[r]),P=Object(g.useMemo)((()=>{const e=f?"true":"false",t=Ce.find((({value:t})=>t===e));if("undefined"===typeof t)throw new Error(`Cannot find per frame value: ${e}`);return t}),[f]),F=Object(g.useCallback)((async()=>{if(null===x)return;j(!0);const t=new FormData;t.append("dimension",o.toString()),t.append("direction",r),t.append("duration",l.toString()),t.append("matte",p),t.append("perFrame",f?"true":"false"),t.append("sheet",x);const n=fetch(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_SPRITESHEET2GIF||"https://api.charlesstover.com/spritesheet2gif",{body:t,cache:"no-cache",method:"POST",mode:"cors",redirect:"follow",referrer:"no-referrer"});e.current=n;try{const e=await n,t=await e.json();if((e=>Object.prototype.hasOwnProperty.call(e,"message"))(t))throw new Error(t.message);i(t),u(null)}catch(a){i(null),u(a)}finally{j(!1)}}),[o,r,l,p,f,x]),T=Object(g.useCallback)((e=>{const t=parseInt(e.detail.value,10);s(t>=0?t:0)}),[]),R=Object(g.useCallback)((()=>{switch(r){case we.Automatic:n((()=>ge)),w(!0)}}),[r]),E=Object(g.useCallback)((e=>{const n=e.detail.selectedOption.value;c(n),n===we.Automatic||t!==xe&&t!==ge||w(!1)}),[t]),D=Object(g.useCallback)((()=>{switch(r){case we.Automatic:n((()=>xe)),w(!0)}}),[r]),U=Object(g.useCallback)((e=>{const t=parseInt(e.detail.value,10);h(t>=0?t:0)}),[]),B=Object(g.useCallback)((()=>{n((()=>ve)),w(!0)}),[]),L=Object(g.useCallback)((e=>{O(e.detail.value)}),[]),I=Object(g.useCallback)((()=>{n((()=>Ae)),w(!0)}),[]),H=Object(g.useCallback)((e=>{m("true"===e.detail.selectedOption.value)}),[]),W=Object(g.useCallback)((e=>{null!==e.target.files?v(e.target.files[0]):v(null)}),[]),M=Object(g.useCallback)((e=>{w(e.detail.open)}),[]);return{Tools:t,apiGifResponse:a,asyncConvertEffect:e,dimension:o.toString(),dimensionDescription:y,dimensionLabel:C,directionOptions:ye,duration:l.toString(),handleConvertClick:F,handleDimensionChange:T,handleDimensionInfoFollow:R,handleDirectionChange:E,handleDirectionInfoFollow:D,handleDurationChange:U,handleHeaderInfoFollow:B,handleMatteChange:L,handleMatteInfoFollow:I,handlePerFrameChange:H,handleSpriteSheetImageFileChange:W,handleToolsChange:M,isConvertButtonLoading:b,isDimensionInfo:r===we.Automatic,isDirectionInfo:r===we.Automatic,matte:p,notifications:k,perFrameOptions:Ce,selectedDirectionOption:S,selectedPerFrameOption:P,toolsOpen:A}}var Se=n(106),Pe=n.n(Se);const Fe=[{href:"/spritesheet2gif",text:"Sprite sheet to GIF converter"}];function Te(){const{Tools:e,apiGifResponse:t,dimension:n,dimensionDescription:i,dimensionLabel:o,directionOptions:s,duration:r,handleConvertClick:c,handleDimensionChange:l,handleDimensionInfoFollow:h,handleDirectionChange:d,handleDirectionInfoFollow:u,handleDurationChange:b,handleHeaderInfoFollow:f,handleMatteChange:m,handleMatteInfoFollow:g,handlePerFrameChange:x,handleSpriteSheetImageFileChange:v,handleToolsChange:A,isConvertButtonLoading:w,isDimensionInfo:y,isDirectionInfo:C,matte:k,notifications:S,perFrameOptions:P,selectedDirectionOption:F,selectedPerFrameOption:T,toolsOpen:E}=ke();return Object(a.jsx)(K,{Tools:e,breadcrumbs:Fe,contentType:"wizard",notifications:S,onToolsChange:A,toolsHide:!1,toolsOpen:E,children:Object(a.jsxs)(O.a,{direction:"vertical",size:"m",children:[Object(a.jsx)(j.a,{footer:Object(a.jsx)(q.a,{loading:w,onClick:c,variant:"primary",children:"Convert"}),header:Object(a.jsxs)(p.a,{className:Pe.a.header,children:["Animate a sprite sheet"," ",Object(a.jsx)(pe.a,{ariaLabel:"Info",onFollow:f,variant:"info",children:"Info"})]}),children:Object(a.jsxs)(O.a,{direction:"vertical",size:"m",children:[Object(a.jsx)(be.a,{description:"Only GIF, JPEG, and PNG images are supported.",label:"Sprite sheet image file",children:Object(a.jsx)("input",{accept:"image/*",onChange:v,required:!0,type:"file"})}),Object(a.jsx)(be.a,{label:"Duration in milliseconds",children:Object(a.jsxs)(O.a,{direction:"horizontal",size:"m",children:[Object(a.jsx)(je.a,{onChange:b,type:"number",value:r}),Object(a.jsx)(R.a,{ariaLabel:"Total or per frame?",ariaRequired:!0,onChange:x,options:P,selectedAriaLabel:"selected",selectedOption:T})]})}),Object(a.jsx)(be.a,{description:"The matte color for the image will be transparent in the animated GIF.",info:Object(a.jsx)(pe.a,{ariaLabel:"Info",onFollow:g,variant:"info",children:"Info"}),label:"Matte",children:Object(a.jsx)(je.a,{className:Pe.a.matte,onChange:m,type:"color",value:k})}),Object(a.jsx)(be.a,{description:"Do the sprites stack horizontally or vertically?",info:C&&Object(a.jsx)(pe.a,{ariaLabel:"Info",onFollow:u,variant:"info",children:"Info"}),label:"Tile direction",children:Object(a.jsx)(R.a,{ariaLabel:"Tile direction",ariaRequired:!0,onChange:d,options:s,selectedAriaLabel:"selected",selectedOption:F})}),Object(a.jsx)(be.a,{description:i,info:y&&Object(a.jsx)(pe.a,{ariaLabel:"Info",onFollow:h,variant:"info",children:"Info"}),label:o,children:Object(a.jsx)(je.a,{onChange:l,type:"number",value:n})})]})}),t&&Object(a.jsx)(Oe,{...t})]})})}function Re(){return Object(a.jsxs)(u.d,{children:[Object(a.jsx)(u.b,{component:Ee,path:"/become-the-junior-developer-that-companies-want-to-hire/"}),Object(a.jsx)(u.b,{component:De,path:"/breathe"}),Object(a.jsx)(u.b,{component:Ue,path:"/electron-transitions"}),Object(a.jsx)(u.b,{component:se,path:"/packages"}),Object(a.jsx)(u.b,{component:Be,path:"/portfolio/articles"}),Object(a.jsx)(u.b,{component:Le,path:"/portfolio/npm"}),Object(a.jsx)(u.b,{component:le,path:"/publications"}),Object(a.jsx)(u.b,{component:ue,path:"/quotes"}),Object(a.jsx)(u.b,{component:Te,path:"/spritesheet2gif"}),Object(a.jsx)(u.b,{component:te})]})}function Ee(){return window.location.href="https://charles-stover.medium.com/become-the-junior-developer-that-companies-want-to-hire-c539f4c236d8",null}function De(){return window.location.href="https://charlesstover.github.io/meditative-breathing/",null}function Ue(){return window.location.href="https://charlesstover.github.io/electron-transition-calculator/",null}function Be(){return Object(a.jsx)(u.a,{to:"/publications"})}function Le(){return Object(a.jsx)(u.a,{to:"/packages"})}var Ie=n(44);var He=Object(Ie.a)(),We=n(133);var Me={[E.Arabic]:()=>n.e(9).then(n.t.bind(null,254,3)),[E.Cebuano]:()=>n.e(10).then(n.t.bind(null,255,3)),[E.English]:We,[E.Japanese]:()=>n.e(11).then(n.t.bind(null,256,3))};const Qe=new h.a;var Je=Object(r.a)((function(){const[e]=P(),[t]=B();return Object(a.jsx)(s.a,{fallback:"An error occurred.",children:Object(a.jsx)(c.a,{disabled:!e,root:"body",children:Object(a.jsx)(l.a,{fallbackLocale:E.English,locale:t,translations:Me,children:Object(a.jsx)(d.a,{client:Qe,children:Object(a.jsx)(u.c,{history:He,children:Object(a.jsx)(Re,{})})})})})})})),Ve=n(136),Ne=n(213),ze=Object(Ne.a)(He),Ge=new Ve.a.BrowserTracing({routingInstrumentation:ze});Object(i.a)({dsn:"https://a36b53fdd093405eb597a945f49a70f2@o592283.ingest.sentry.io/5740642",release:"charlesstover.com@"+Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).npm_package_version,tracesSampleRate:1,integrations:[Ge]}),Object(o.render)(Object(a.jsx)(Je,{}),document.getElementById("root"))},81:function(e,t,n){e.exports={avatar:"home_avatar__2p3xx",content:"home_content__3j1fg",list:"home_list__1bzUO",p:"home_p__1ilmb"}}},[[202,2,3]]]);
//# sourceMappingURL=main.9d02b95a.chunk.js.map