(this["webpackJsonpcharlesstover.com"]=this["webpackJsonpcharlesstover.com"]||[]).push([[5],{220:function(e,t,i){var a;window,e.exports=(a=i(0),function(e){var t={};function i(a){if(t[a])return t[a].exports;var n=t[a]={i:a,l:!1,exports:{}};return e[a].call(n.exports,n,n.exports,i),n.l=!0,n.exports}return i.m=e,i.c=t,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(a,n,function(t){return e[t]}.bind(null,n));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=0)}([function(e,t,i){e.exports=i(1)},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=i(2);t.default=a.default},function(e,t,i){"use strict";var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var n=a(i(3));t.default=function(e){var t=e.children,i=e.currency,a=e.currencyDisplay,r=e.locale,o=e.localeMatcher,c=e.maximumFractionDigits,s=e.maximumSignificantDigits,l=e.minimumFractionDigits,d=e.minimumIntegerDigits,_=e.minimumSignificantDigits,u=e.style,m=e.useGrouping,g=new Intl.NumberFormat(r,{currency:i,currencyDisplay:a,localeMatcher:o,maximumFractionDigits:c,maximumSignificantDigits:s,minimumFractionDigits:l,minimumIntegerDigits:d,minimumSignificantDigits:_,style:u,useGrouping:m}),b="string"==typeof t?parseFloat(t):t;return n.default.createElement(n.default.Fragment,null,g.format(b))}},function(e,t){e.exports=a}]))},221:function(e,t,i){"use strict";i.d(t,"a",(function(){return r}));var a=i(0),n=i(38);function r(e){var t=e.container,i=e.children,r=Object(a.useState)(null!==t&&void 0!==t?t:null),o=r[0],c=r[1];return Object(a.useLayoutEffect)((function(){if(!t){var e=document.createElement("div");return document.body.appendChild(e),c(e),function(){document.body.removeChild(e),c(null)}}c(t)}),[t]),o&&Object(n.createPortal)(i,o)}},222:function(e,t,i){},225:function(e,t,i){},226:function(e,t,i){"use strict";i.d(t,"a",(function(){return x}));var a=i(2),n=i(0),r=i.n(n),o=i(4),c=i(83),s=i.n(c),l=i(113),d=i(6);function _(e,t){for(var i=[],a=0;a<t;a++)i[a]=e;return i}i(222);var u={"column-layout":"_column-layout_vvxn7_g1kx8_3",grid:"_grid_vvxn7_g1kx8_13","grid-no-gutters":"_grid-no-gutters_vvxn7_g1kx8_16","grid-variant-text-grid":"_grid-variant-text-grid_vvxn7_g1kx8_19","grid-breakpoint-default":"_grid-breakpoint-default_vvxn7_g1kx8_25","grid-columns-1":"_grid-columns-1_vvxn7_g1kx8_28","grid-breakpoint-xxs":"_grid-breakpoint-xxs_vvxn7_g1kx8_28","grid-breakpoint-xs":"_grid-breakpoint-xs_vvxn7_g1kx8_31","grid-columns-2":"_grid-columns-2_vvxn7_g1kx8_34","grid-columns-3":"_grid-columns-3_vvxn7_g1kx8_40","grid-columns-4":"_grid-columns-4_vvxn7_g1kx8_46","grid-vertical-borders":"_grid-vertical-borders_vvxn7_g1kx8_59","grid-horizontal-borders":"_grid-horizontal-borders_vvxn7_g1kx8_89"},m=["default","xxs","xs"],g={1:{colspan:{default:12,xxs:12,xs:12}},2:{colspan:{default:12,xxs:6,xs:6}},3:{colspan:{default:12,xxs:6,xs:4}},4:{colspan:{default:12,xxs:6,xs:3}}},b=r.a.forwardRef((function(e,t){var i,n,c=e.columns,m=void 0===c?1:c,b=e.variant,f=void 0===b?"default":b,p=e.borders,v=void 0===p?"none":p,h=e.disableGutters,x=void 0!==h&&h,y=e.children,O=e.__breakpoint,j=Object(a.b)(e,["columns","variant","borders","disableGutters","children","__breakpoint"]),z=Object(d.a)(j),w="text-grid"===f,k=!w&&x,E=!w&&("horizontal"===v||"all"===v),N=!w&&("vertical"===v||"all"===v),S=s()(y);return r.a.createElement("div",Object(a.a)({},z,{className:Object(o.a)(z.className,u["column-layout"])}),r.a.createElement(l.a,{ref:t,disableGutters:!0,gridDefinition:_(null!==(n=g[m])&&void 0!==n?n:{},S.length),className:Object(o.a)(u.grid,u["grid-columns-"+m],u["grid-variant-"+f],(i={},i[u["grid-horizontal-borders"]]=E,i[u["grid-vertical-borders"]]=N,i[u["grid-no-gutters"]]=k,i)),breakpoint:O,responsiveClassName:function(e){return e&&u["grid-breakpoint-"+e]}},y))})),f=i(11),p=i(112),v=i(30),h=i(10);function x(e){var t=Object(a.b)(e,[]);Object(f.a)("ColumnLayout");var i=Object(v.a)(m),n=i[0],o=i[1],c=Object(p.a)(t);return r.a.createElement(b,Object(a.a)({},c,{__breakpoint:n,ref:o}))}Object(h.a)(x,"ColumnLayout")},227:function(e,t,i){"use strict";var a=i(2),n=i(4),r=i(0),o=i.n(r),c=(i(225),{"card-inner":"_card-inner_p8a6i_67z7i_3",root:"_root_p8a6i_67z7i_19",header:"_header_p8a6i_67z7i_34",list:"_list_p8a6i_67z7i_38","list-grid-1":"_list-grid-1_p8a6i_67z7i_46",card:"_card_p8a6i_67z7i_3","list-grid-2":"_list-grid-2_p8a6i_67z7i_49","list-grid-3":"_list-grid-3_p8a6i_67z7i_52","list-grid-4":"_list-grid-4_p8a6i_67z7i_55","list-grid-5":"_list-grid-5_p8a6i_67z7i_58","list-grid-6":"_list-grid-6_p8a6i_67z7i_61","list-grid-7":"_list-grid-7_p8a6i_67z7i_64","list-grid-8":"_list-grid-8_p8a6i_67z7i_67","list-grid-9":"_list-grid-9_p8a6i_67z7i_70","list-grid-10":"_list-grid-10_p8a6i_67z7i_73","list-grid-11":"_list-grid-11_p8a6i_67z7i_76","list-grid-12":"_list-grid-12_p8a6i_67z7i_79","list-grid-13":"_list-grid-13_p8a6i_67z7i_82","list-grid-14":"_list-grid-14_p8a6i_67z7i_85","list-grid-15":"_list-grid-15_p8a6i_67z7i_88","list-grid-16":"_list-grid-16_p8a6i_67z7i_91","list-grid-17":"_list-grid-17_p8a6i_67z7i_94","list-grid-18":"_list-grid-18_p8a6i_67z7i_97","list-grid-19":"_list-grid-19_p8a6i_67z7i_100","list-grid-20":"_list-grid-20_p8a6i_67z7i_103","selection-control":"_selection-control_p8a6i_67z7i_107",loading:"_loading_p8a6i_67z7i_116",empty:"_empty_p8a6i_67z7i_117","has-header":"_has-header_p8a6i_67z7i_124","card-header":"_card-header_p8a6i_67z7i_160","card-header-inner":"_card-header-inner_p8a6i_67z7i_164","card-selectable":"_card-selectable_p8a6i_67z7i_168","card-selected":"_card-selected_p8a6i_67z7i_171",section:"_section_p8a6i_67z7i_180","section-header":"_section-header_p8a6i_67z7i_186","section-content":"_section-content_p8a6i_67z7i_189"}),s=[1920,1400,1200,992,768].map((function(e,t,i){return{minWidth:e,cards:i.length+1-t}})),l=i(6),d=i(82),_=i(223),u=i(217),m=i(219),g=i(218),b=i(110),f=i(109),p=i(11),v=i(10),h=i(224),x=i(111),y=o.a.forwardRef((function(e,t){var i=e.items,u=void 0===i?[]:i,g=e.cardDefinition,v=e.cardsPerRow,y=void 0===v?[]:v,j=e.header,z=e.filter,w=e.pagination,k=e.preferences,E=e.empty,N=e.loading,S=e.loadingText,D=e.trackBy,T=e.selectedItems,P=e.selectionType,C=e.isItemDisabled,I=e.onSelectionChange,B=e.ariaLabels,W=e.visibleSections,F=e.stickyHeader,L=e.stickyHeaderVerticalOffset,A=Object(a.b)(e,["items","cardDefinition","cardsPerRow","header","filter","pagination","preferences","empty","loading","loadingText","trackBy","selectedItems","selectionType","isItemDisabled","onSelectionChange","ariaLabels","visibleSections","stickyHeader","stickyHeaderVerticalOffset"]);Object(p.a)("Cards");var M=Object(l.a)(A),R=Object(d.a)((function(e){return function(e,t){0===t.length&&(t=s);var i=1;return t.slice().map((function(e){return{minWidth:e.minWidth||0,cards:e.cards}})).sort((function(e,t){return t.minWidth-e.minWidth})).some((function(t){if(e>=t.minWidth)return i=t.cards,!0})),i}(e.width,y)}),[y]),H=R[0],G=R[1],V=Object(m.c)({items:u,trackBy:D,selectedItems:T,selectionType:P,isItemDisabled:C,onSelectionChange:I,ariaLabels:B}),J=V.isItemSelected,U=V.getItemSelectionProps,K=V.updateShiftToggle,q=j||z||w||k,Q=Object(r.useRef)(null),X=Object(h.b)(G,Q,1),Y=X.scrollToTop,Z=X.scrollToItem;F=Object(x.c)()&&F;var $;return Object(r.useImperativeHandle)(t,(function(){return{scrollToTop:function(){F&&Y()}}}),[F,Y]),N?$=o.a.createElement("div",{className:c.loading},o.a.createElement(f.a,{type:"loading"},S)):E&&!u.length&&($=o.a.createElement("div",{className:c.empty},E)),o.a.createElement("div",Object(a.a)({},M,{className:Object(n.a)(M.className,c.root),ref:G}),o.a.createElement(b.a,{header:q&&o.a.createElement("div",{className:Object(n.a)(c.header),ref:Q},o.a.createElement(_.a,{header:j,filter:z,pagination:w,preferences:k})),__stickyHeader:F,__stickyOffset:L,disableHeaderPaddings:!0,disableContentPaddings:!0,__disableContentBorders:!0},o.a.createElement("div",{className:Object(n.a)(q&&c["has-header"])},null!==$&&void 0!==$?$:o.a.createElement(O,{items:u,cardDefinition:g,trackBy:D,selectionType:P,columns:H,isItemSelected:J,getItemSelectionProps:U,visibleSections:W,updateShiftToggle:K,onFocus:function(e){F&&Z(e.currentTarget)}}))))})),O=(t.a=y,function(e){var t=e.items,i=e.cardDefinition,r=e.trackBy,s=e.selectionType,l=e.columns,d=e.isItemSelected,_=e.getItemSelectionProps,b=e.visibleSections,f=e.updateShiftToggle,p=e.onFocus,v=!!s,h=Object(m.b)(s,t.length),x=h.moveFocusDown,y=h.moveFocusUp,O=i.sections||[];return O=b?O.filter((function(e){return e.id&&-1!==b.indexOf(e.id)})):O,o.a.createElement("ol",Object(a.a)({className:Object(n.a)(c.list,c["list-grid-"+(l||1)])},m.a&&m.a.root),t.map((function(e,t){var s;return o.a.createElement("li",Object(a.a)({className:Object(n.a)(c.card,(s={},s[c["card-selectable"]]=v,s[c["card-selected"]]=v&&d(e),s)),key:Object(u.c)(r,e,t),onFocus:p},m.a&&m.a.item),o.a.createElement("div",{className:c["card-inner"]},o.a.createElement("div",{className:c["card-header"]},o.a.createElement("span",{className:c["card-header-inner"]},i.header?i.header(e):""),v&&o.a.createElement(g.a,Object(a.a)({className:c["selection-control"],rootTag:"div",onFocusDown:x,onFocusUp:y,onShiftToggle:f},_(e)))),O.map((function(t,i){var a=t.width,n=void 0===a?100:a,r=t.header,s=t.content,l=t.id;return o.a.createElement("div",{key:l||i,className:c.section,style:{width:n+"%"}},r?o.a.createElement("div",{className:c["section-header"]},r):"",s?o.a.createElement("div",{className:c["section-content"]},s(e)):"")}))))})))});Object(v.a)(y,"Cards")},242:function(e,t,i){},243:function(e,t,i){},251:function(e,t,i){"use strict";i.d(t,"a",(function(){return f}));var a=i(2),n=i(0),r=i.n(n),o=i(4),c=i(53),s=i(15),l=i(6),d=(i(242),{alert:"_alert_mx3cw_zznoo_3","awsui-motion-fade-in":"_awsui-motion-fade-in_mx3cw_zznoo_1",root:"_root_mx3cw_zznoo_25",hidden:"_hidden_mx3cw_zznoo_38",body:"_body_mx3cw_zznoo_60",header:"_header_mx3cw_zznoo_66",action:"_action_mx3cw_zznoo_70","action-button":"_action-button_mx3cw_zznoo_75","breakpoint-default":"_breakpoint-default_mx3cw_zznoo_79",message:"_message_mx3cw_zznoo_86",content:"_content_mx3cw_zznoo_92",dismiss:"_dismiss_mx3cw_zznoo_96","dismiss-button":"_dismiss-button_mx3cw_zznoo_101","dismiss-with-button":"_dismiss-with-button_mx3cw_zznoo_105",icon:"_icon_mx3cw_zznoo_109","type-error":"_type-error_mx3cw_zznoo_115","type-warning":"_type-warning_mx3cw_zznoo_123","type-success":"_type-success_mx3cw_zznoo_131","type-info":"_type-info_mx3cw_zznoo_139"}),_=i(8),u=i(30),m=i(11),g=i(10),b={error:"status-negative",warning:"status-warning",success:"status-positive",info:"status-info"};function f(e){var t,i,n=e.type,g=void 0===n?"info":n,f=e.visible,p=void 0===f||f,v=e.dismissible,h=e.dismissAriaLabel,x=e.children,y=e.header,O=e.buttonText,j=e.action,z=e.onDismiss,w=e.onButtonClick,k=Object(a.b)(e,["type","visible","dismissible","dismissAriaLabel","children","header","buttonText","action","onDismiss","onButtonClick"]);Object(m.a)("Alert");var E=Object(l.a)(k),N=y&&x?"big":"normal",S=Object(u.a)(["xs"]),D=S[0],T=S[1],P=j||r.a.createElement(c.a,{className:d["action-button"],onClick:function(){return Object(_.c)(w)},formAction:"none"},O),C=Boolean(j||O);return r.a.createElement("div",Object(a.a)({},E,{"aria-hidden":!p,className:Object(o.a)(d.root,(t={},t[d.hidden]=!p,t),E.className,d["breakpoint-"+D]),ref:T}),r.a.createElement("div",{className:Object(o.a)(d.alert,d["type-"+g])},r.a.createElement("div",{className:d.icon},r.a.createElement(s.a,{name:b[g],size:N})),r.a.createElement("div",{className:d.body},r.a.createElement("div",{className:d.message},y&&r.a.createElement("div",{className:d.header},y),r.a.createElement("div",{className:d.content},x)),C&&r.a.createElement("div",{className:d.action},P)),v&&r.a.createElement("div",{className:Object(o.a)(d.dismiss,(i={},i[d["dismiss-with-button"]]=C,i))},r.a.createElement(c.a,{className:d["dismiss-button"],variant:"icon",iconName:"close",formAction:"none",ariaLabel:h,onClick:function(){return Object(_.c)(z)}}))))}Object(g.a)(f,"Alert")},252:function(e,t,i){"use strict";i.d(t,"a",(function(){return _}));var a=i(2),n=i(0),r=i.n(n),o=i(6),c=i(4),s=(i(243),{badge:"_badge_1yjyg_1h0p1_3","badge-color-grey":"_badge-color-grey_1yjyg_1h0p1_19","badge-color-green":"_badge-color-green_1yjyg_1h0p1_22","badge-color-blue":"_badge-color-blue_1yjyg_1h0p1_25","badge-color-red":"_badge-color-red_1yjyg_1h0p1_28"}),l=i(11),d=i(10);function _(e){var t=e.color,i=void 0===t?"grey":t,n=e.children,d=Object(a.b)(e,["color","children"]);Object(l.a)("Badge");var _=Object(o.a)(d),u=Object(c.a)(_.className,s.badge,s["badge-color-"+i]);return r.a.createElement("span",Object(a.a)({},_,{className:u}),n)}Object(d.a)(_,"Badge")},253:function(e,t,i){"use strict";i.d(t,"a",(function(){return h}));var a=i(2),n=i(0),r=i.n(n),o=i(4),c=i(12),s=i(6),l=i(29),d=i(221),_=i(126),u=i(119),m=i(25),g=i(8),b=r.a.forwardRef((function(e,t){var i=e.position,b=void 0===i?"right":i,f=e.size,p=void 0===f?"medium":f,v=e.fixedWidth,h=void 0!==v&&v,x=e.triggerType,y=void 0===x?"text":x,O=e.dismissButton,j=void 0===O||O,z=e.dismissAriaLabel,w=e.children,k=e.header,E=e.content,N=e.renderWithPortal,S=void 0!==N&&N,D=e.__overflowVisible,T=e.__onOpen,P=Object(a.b)(e,["position","size","fixedWidth","triggerType","dismissButton","dismissAriaLabel","children","header","content","renderWithPortal","__overflowVisible","__onOpen"]),C=Object(s.a)(P),I=Object(l.a)(),B=Object(n.useRef)(null),W=Object(n.useRef)(null),F=Object(n.useRef)(null),L=Object(n.useState)(!1),A=L[0],M=L[1],R=Object(n.useCallback)((function(){Object(g.c)(T),M(!0)}),[T]),H=Object(n.useCallback)((function(){M(!1)}),[]),G=Object(n.useCallback)((function(e){e.keyCode!==c.a.tab&&e.keyCode!==c.a.escape||M(!1)}),[]);Object(n.useImperativeHandle)(t,(function(){return{dismissPopover:H}})),Object(n.useEffect)((function(){var e=function(e){var t,i,a=e.target;!a||(null===(t=W.current)||void 0===t?void 0:t.contains(a))||(null===(i=F.current)||void 0===i?void 0:i.contains(a))||M(!1)};return document.addEventListener("mousedown",e,{capture:!0}),function(){document.removeEventListener("mousedown",e,{capture:!0})}}),[]);var V={ref:B,onClick:R,onKeyDown:G,className:Object(o.a)(m.a.trigger,m.a["trigger-type-"+y])},J=r.a.createElement("span",{"aria-live":j?void 0:"polite","aria-atomic":!j||void 0,ref:F},A&&B.current&&r.a.createElement(_.a,{position:b,track:B.current,arrow:function(e){return r.a.createElement("div",{className:Object(o.a)(m.a.arrow,m.a["arrow-position-"+e])},r.a.createElement("div",{className:m.a["arrow-outer"]}),r.a.createElement("div",{className:m.a["arrow-inner"]}))}},r.a.createElement(u.a,{size:p,fixedWidth:h,dismissButton:j,dismissAriaLabel:z,header:k,onDismiss:H,overflowVisible:D?"both":void 0},E)));return r.a.createElement("span",Object(a.a)({},C,{className:Object(o.a)(m.a.root,C.className),ref:W}),"text"===y?r.a.createElement("button",Object(a.a)({},V,{type:"button","aria-haspopup":"dialog"},I),r.a.createElement("span",null,w)):r.a.createElement("span",Object(a.a)({},V),w),S?r.a.createElement(d.a,null,J):J)}));var f=i(11),p=i(112),v=i(10);function h(e){var t=e.position,i=void 0===t?"right":t,n=e.size,o=void 0===n?"medium":n,c=e.fixedWidth,s=void 0!==c&&c,l=e.triggerType,d=void 0===l?"text":l,_=e.dismissButton,u=void 0===_||_,m=e.renderWithPortal,g=void 0!==m&&m,v=Object(a.b)(e,["position","size","fixedWidth","triggerType","dismissButton","renderWithPortal"]);Object(f.a)("Popover");var h=Object(p.a)(v);return r.a.createElement(b,Object(a.a)({position:i,size:o,fixedWidth:s,triggerType:d,dismissButton:u,renderWithPortal:g},h))}Object(v.a)(h,"Popover")}}]);
//# sourceMappingURL=5.8adca55c.chunk.js.map