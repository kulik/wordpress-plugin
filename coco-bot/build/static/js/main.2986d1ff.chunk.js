(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{52:function(e,t,n){e.exports=n(82)},57:function(e,t,n){},82:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(7),o=n.n(r),i=(n(57),n(14)),s=n(43),u=n(3),l=function(e){var t=e.children;return c.a.createElement("p",{style:{fontSize:"12px",paddingTop:"7px",margin:0}},t)},b=function(e){var t=e.children;return c.a.createElement("p",{style:{fontSize:"15px",paddingTop:"5px",paddingBottom:"7px",margin:0}},t)},f=function(e){return c.a.createElement("div",{onClick:e.onReset,style:{backgroundColor:"orange",color:"white",cursor:"pointer",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}},c.a.createElement(l,null,"Subgoal not achieved"),c.a.createElement(b,null,"RESET"))},d=function(e){return c.a.createElement("div",{onClick:e.onReset,style:{backgroundColor:"#00c853",color:"white",cursor:"pointer",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}},c.a.createElement(l,null,"Subgoal achieved"),c.a.createElement(b,null,"RESET"))},p=n(8),m=n(15),O=function(e){var t=Object(a.useState)(!!e.inputInvalid),n=Object(u.a)(t,2),r=n[0],o=n[1],i=Object(a.useState)(!!e.disabled),s=Object(u.a)(i,2),l=s[0],b=s[1],f=Object(a.useState)(!1),d=Object(u.a)(f,2),p=d[0],O=d[1];Object(a.useEffect)((function(){return b(!!e.disabled)}),[e.disabled]),Object(a.useEffect)((function(){return o(!!e.inputInvalid)}),[e.inputInvalid]);return c.a.createElement(m.ActionButton,{color:p?"#01a6e0":void 0,disabled:l,invalid:r,onTouchStart:function(t){O(!0),e.onDown(),t.preventDefault(),t.stopPropagation()},onTouchCancel:function(t){O(!1),p&&e.onUp(),t.preventDefault(),t.stopPropagation()},onTouchEnd:function(t){O(!1),e.onUp(),t.preventDefault(),t.stopPropagation()}},c.a.createElement("svg",{style:{height:"24px",width:"24px"},viewBox:"0 0 400 400"},c.a.createElement("g",null,c.a.createElement("path",{d:"M290.991,240.991c0,26.392-21.602,47.999-48.002,47.999h-11.529c-26.4,0-48.002-21.607-48.002-47.999V104.002   c0-26.4,21.602-48.004,48.002-48.004h11.529c26.4,0,48.002,21.604,48.002,48.004V240.991z"}),c.a.createElement("path",{d:"M342.381,209.85h-8.961c-4.932,0-8.961,4.034-8.961,8.961v8.008c0,50.26-37.109,91.001-87.361,91.001   c-50.26,0-87.109-40.741-87.109-91.001v-8.008c0-4.927-4.029-8.961-8.961-8.961h-8.961c-4.924,0-8.961,4.034-8.961,8.961v8.008   c0,58.862,40.229,107.625,96.07,116.362v36.966h-34.412c-4.932,0-8.961,4.039-8.961,8.971v17.922c0,4.923,4.029,8.961,8.961,8.961   h104.688c4.926,0,8.961-4.038,8.961-8.961v-17.922c0-4.932-4.035-8.971-8.961-8.971h-34.43v-36.966   c55.889-8.729,96.32-57.5,96.32-116.362v-8.008C351.342,213.884,347.303,209.85,342.381,209.85z"}))))},j=function(e){var t=Object(a.useState)(e.isFailed),n=Object(u.a)(t,2),r=n[0],o=n[1],i=Object(a.useState)(e.disabled),s=Object(u.a)(i,2),l=s[0],b=s[1];Object(a.useEffect)((function(){b(e.disabled)}),[e.disabled]);var j=Object(a.useState)(e.isSucceeded),h=Object(u.a)(j,2),g=h[0],v=h[1];Object(a.useEffect)((function(){o(e.isFailed)}),[e.isFailed]),Object(a.useEffect)((function(){v(e.isSucceeded)}),[e.isSucceeded]);var E=Object(a.useState)(e.state.isVoice),x=Object(u.a)(E,2),y=x[0],S=x[1];return Object(a.useEffect)((function(){return Object(p.autorun)((function(){return S(e.state.isVoice)}))}),[]),r?c.a.createElement(f,e):g?c.a.createElement(d,e):c.a.createElement(m.FooterInput,{actionButton:y?c.a.createElement(O,{onDown:e.onVoiceDown,onUp:e.onVoiceConfirm,disabled:l}):void 0,onChange:e.onChange,onSubmit:e.onSubmit,inputPlaceholder:"Type the message...",disabled:!!l})},h=function(e){return c.a.createElement("div",{onClick:e.onClick,style:{display:"flex",justifyContent:"flex-end",flexDirection:"column",marginLeft:"6px",marginBottom:"12px"}},c.a.createElement("div",{style:{display:"flex",color:"white",justifyContent:"center",alignItems:"center",backgroundColor:"#9c27b0",borderRadius:"50%",cursor:"pointer",width:"24px",height:"24px"}},c.a.createElement("svg",{style:{width:"17px",height:"17px"},viewBox:"0 0 24 24"},c.a.createElement("path",{fill:"white",d:"M5,3H7V5H5V10A2,2 0 0,1 3,12A2,2 0 0,1 5,14V19H7V21H5C3.93,20.73 3,20.1 3,19V15A2,2 0 0,0 1,13H0V11H1A2,2 0 0,0 3,9V5A2,2 0 0,1 5,3M19,3A2,2 0 0,1 21,5V9A2,2 0 0,0 23,11H24V13H23A2,2 0 0,0 21,15V19A2,2 0 0,1 19,21H17V19H19V14A2,2 0 0,1 21,12A2,2 0 0,1 19,10V5H17V3H19M12,15A1,1 0 0,1 13,16A1,1 0 0,1 12,17A1,1 0 0,1 11,16A1,1 0 0,1 12,15M8,15A1,1 0 0,1 9,16A1,1 0 0,1 8,17A1,1 0 0,1 7,16A1,1 0 0,1 8,15M16,15A1,1 0 0,1 17,16A1,1 0 0,1 16,17A1,1 0 0,1 15,16A1,1 0 0,1 16,15Z"}))))},g=function(e){var t=Object(a.useState)(!e.entry.isUser&&!e.entry.isLoading&&e.bubbleExtraParams&&e.bubbleExtraParams.isShowingJson),n=Object(u.a)(t,2),r=n[0],o=n[1];Object(a.useEffect)((function(){return Object(p.autorun)((function(){return o(!e.entry.isUser&&!e.entry.isLoading&&e.bubbleExtraParams&&e.bubbleExtraParams.isShowingJson)}))}),[]);var s=Object(a.useState)([]),l=Object(u.a)(s,2),b=l[0],f=l[1];return Object(a.useEffect)((function(){return Object(p.autorun)((function(){return f(e.entry.isUser||e.entry.isLoading||!e.bubbleExtraParams?[]:Object(i.a)(e.bubbleExtraParams.params.filter((function(t){return t.messageId===e.entry.id}))))}))}),[]),c.a.createElement(c.a.Fragment,null,c.a.createElement(m.ChatBubble,{entry:e.entry,endElement:r?c.a.createElement(h,{onClick:function(){e.bubbleExtraParams&&e.bubbleExtraParams.showDetails&&e.bubbleExtraParams.showDetails(e.entry.id)}}):void 0}),b.map((function(e){return c.a.createElement("p",{key:e.id,style:{margin:"0px",marginLeft:"52px",padding:0}},c.a.createElement("span",{style:{color:"#9c27b0"}},e.name,":"),c.a.createElement("span",{style:{color:"#01A6E0"}},e.value))})))},v=n(106),E=n(102),x=n(103),y=n(104),S=n(107),w=n(46),C=n.n(w),V=function(e){var t=Object(a.useState)(e.data),n=Object(u.a)(t,2),r=n[0],o=n[1];return Object(a.useEffect)((function(){return o(e.data)}),[e.data]),c.a.createElement(v.a,{open:!!r,onClose:e.onClose},c.a.createElement(E.a,null,"Json response"),c.a.createElement(x.a,null,r&&c.a.createElement(C.a,{src:r,name:!1,enableClipboard:!1,displayDataTypes:!1})),c.a.createElement(y.a,null,c.a.createElement(S.a,{onClick:e.onClose,color:"secondary"},"Close")))},A=n(17),k=n.n(A),D=n(22);function T(e){for(var t="",n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz ",a=n.length,c=0;c<e;c++)t+=n.charAt(Math.floor(Math.random()*a));return t}var P=T(8),I=function(){var e=Object(D.a)(k.a.mark((function e(t,n,a,c){var r,o,i,s;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=new Headers({"api-key":"master_key"}),c&&(P=c),e.prev=2,o=t.startsWith("http:")||t.startsWith("https:"),e.next=6,fetch(o?"".concat(t,"/").concat(P):"https://marketplace.conversationalcomponents.com"+"/api/exchange/".concat(t,"/").concat(P),{method:"POST",headers:r,body:JSON.stringify({user_input:n,flatten_context:!0,context:a.reduce((function(e,t){return e[t.name]=t.value,e}),{})})});case 6:return i=e.sent,e.next=9,i.json();case 9:return s=e.sent,e.abrupt("return",s);case 13:return e.prev=13,e.t0=e.catch(2),console.error(e.t0),e.abrupt("return",{error:e.t0});case 17:case"end":return e.stop()}}),e,null,[[2,13]])})));return function(t,n,a,c){return e.apply(this,arguments)}}(),U=function(){var e=Object(D.a)(k.a.mark((function e(t,n,a,c){var r;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I(t,a,n&&n.length>0?n:[]);case 2:r=e.sent,c(r);case 4:case"end":return e.stop()}}),e)})));return function(t,n,a,c){return e.apply(this,arguments)}}(),H=n(26),R=n(84),J=n(48),M=n.n(J),_=function(e){var t=Object(a.useState)(e.isOn),n=Object(u.a)(t,2),r=n[0],o=n[1];return Object(a.useEffect)((function(){return o(e.isOn)}),[e.isOn]),c.a.createElement("div",{style:{paddingRight:"8px",display:"flex"}},c.a.createElement(M.a,{height:18,width:42,onColor:"#9c27b0",onChange:e.onToggle,checked:r}),c.a.createElement(R.a,{variant:"caption",style:{paddingLeft:"4px"}},e.title))},B=function(e){var t=Object(a.useState)(e.title),n=Object(u.a)(t,2),r=n[0],o=n[1];Object(a.useEffect)((function(){o(e.title)}),[e.title]);var i=Object(a.useState)(e.state.isShowingJson),s=Object(u.a)(i,2),l=s[0],b=s[1];Object(a.useEffect)((function(){return Object(p.autorun)((function(){return b(e.state.isShowingJson)}))}),[]);var f=Object(a.useState)(e.state.isVoice),d=Object(u.a)(f,2),m=d[0],O=d[1];return Object(a.useEffect)((function(){return Object(p.autorun)((function(){return O(e.state.isVoice)}))}),[]),c.a.createElement("div",{style:{alignItems:"center",backgroundColor:"#01a6e0",color:"#fff",display:"flex",fill:"#fff",height:"56px",justifyContent:"space-between",padding:"0 10px"}},c.a.createElement(R.a,{style:{margin:0,fontSize:"17px"}},r),c.a.createElement("div",{style:{display:"flex"}},c.a.createElement(_,{onToggle:function(){return e.state.isShowingJson=!e.state.isShowingJson},isOn:l,title:"code"}),c.a.createElement(_,{onToggle:function(){return e.state.isVoice=!e.state.isVoice},isOn:m,title:"voice"})))},L=function(e){var t=Object(a.useState)(e.humanIdOrUrl),n=Object(u.a)(t,2),r=n[0],o=n[1];Object(a.useEffect)((function(){return o(e.humanIdOrUrl)}),[e.humanIdOrUrl]);var l=Object(a.useState)(e.inputParameters||[]),b=Object(u.a)(l,2),f=b[0],d=b[1];Object(a.useEffect)((function(){return d(e.inputParameters||[])}),[e.inputParameters]);var O=Object(a.useState)(e.name),h=Object(u.a)(O,2),v=h[0],E=h[1];Object(a.useEffect)((function(){return E(e.name)}),[e.name]);var x=Object(a.useState)(e.botGreeting||"Type anything to get started!"),y=Object(u.a)(x,2),S=y[0],w=y[1];Object(a.useEffect)((function(){w(e.botGreeting||"Type anything to get started!")}),[e.botGreeting]);var C=Object(a.useState)([]),A=Object(u.a)(C,2),I=A[0],R=A[1],J=Object(a.useState)(""),M=Object(u.a)(J,2),_=M[0],L=M[1],F=Object(a.useState)(""),z=Object(u.a)(F,2),G=z[0],W=z[1],N=Object(a.useState)(!1),Z=Object(u.a)(N,2),q=Z[0],K=Z[1],Q=Object(a.useState)(!1),X=Object(u.a)(Q,2),Y=X[0],$=X[1],ee=Object(a.useState)(""),te=Object(u.a)(ee,2),ne=te[0],ae=te[1],ce=Object(a.useState)({}),re=Object(u.a)(ce,2),oe=re[0],ie=re[1],se=Object(a.useState)(void 0),ue=Object(u.a)(se,2),le=ue[0],be=ue[1];Object(m.useUserTyping)(I,R,G,_);var fe=Object(m.useBotTyping)(I,R,_||S),de=function(e,t,n){var c=Object(a.useState)(),r=Object(u.a)(c,2),o=r[0],i=r[1];return Object(a.useEffect)((function(){n?U(e,t,n,i):i(void 0)}),[e,n]),[o,i]}(r,f||[],_),pe=Object(u.a)(de,2),me=pe[0],Oe=pe[1];Object(a.useEffect)((function(){S&&fe&&Oe({action_name:"greeting",response:S,component_done:!1,component_failed:!1,updated_context:{},confidence:1,idontknow:!1,raw_resp:{}})}),[S,fe]),Object(a.useEffect)((function(){fe&&me&&(w(""),ae(me.response),K(me.component_failed),$(me.component_done),ie(Object(s.a)({},me)),L(""),Oe(void 0))}),[me,fe]),Object(a.useEffect)((function(){if(ne){var e=I.length?I[I.length-1]:void 0;if(e&&!e.isUser&&e.isLoading){e.isLoading=!1,e.message=ne;var t=oe.updated_context||{};he.params=[].concat(Object(i.a)(he.params),Object(i.a)(Object.keys(t).reduce((function(n,a){return n.push({name:a,value:t[a],id:([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,(function(e){return((15&(e^crypto.getRandomValues(new Uint8Array(1))[0]))>>e/4).toString(16)})),messageId:e.id}),n}),[]))),he.rawRepliesData.push({messageId:e.id,data:oe})}}}),[ne,I,oe]);var je=Object(a.useState)(Object(p.observable)({isShowingJson:!0,isVoice:!1,params:[],rawRepliesData:[],showDetails:function(e){var t=he.rawRepliesData.find((function(t){return t.messageId===e}));t&&be(t.data)}})),he=Object(u.a)(je,1)[0],ge=Object(a.useState)(he.isVoice),ve=Object(u.a)(ge,2),Ee=ve[0],xe=ve[1];Object(a.useEffect)((function(){return Object(p.autorun)((function(){he.isVoice&&navigator.mediaDevices.getUserMedia({audio:!0}),xe(he.isVoice)}))}),[]),function(e,t){Object(a.useEffect)((function(){return function(){e&&t&&Object(H.narrate)(e,!0,"https://voice-server-dot-coco-235210.appspot.com/tts")}}),[e,t])}(ne,Ee);var ye=function(e){console.log("botGreeting is ".concat(S)),ae(""),L(e),W("")},Se=function(e){W(e)},we=function(e,t){var n=Object(a.useState)(),c=Object(u.a)(n,2),r=c[0],o=c[1];return Object(a.useEffect)((function(){Object(H.getRecorder)().then((function(e){o(e)}))}),[]),[Object(a.useCallback)((function(){r&&(r.start(),e("voice value"))}),[r]),Object(a.useCallback)(Object(D.a)(k.a.mark((function e(){var n,a,c;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,r.stop();case 4:return n=e.sent,e.next=7,Object(H.speechToMessage)("https://voice-server-dot-coco-235210.appspot.com/stt",n);case 7:return a=e.sent,e.next=10,a.json();case 10:c=e.sent,t(c.error||c.result);case 12:case"end":return e.stop()}}),e)}))),[r])]}(Se,ye),Ce=Object(u.a)(we,2),Ve=Ce[0],Ae=Ce[1];return c.a.createElement(c.a.Fragment,null,c.a.createElement(m.ChatWindow,{title:v,header:c.a.createElement(B,{title:v,state:he}),bubbleExtraParams:he,bubble:g,content:I,footer:c.a.createElement(j,{onVoiceDown:Ve,onVoiceConfirm:Ae,isFailed:q,onChange:Se,isSucceeded:Y,onReset:function(){R([]),P=T(8),K(!1),$(!1),ae(""),L(""),W(""),w(e.botGreeting||"")},onSubmit:ye,state:he,disabled:!fe})}),c.a.createElement(V,{data:le,onClose:function(){return be(void 0)}}))},F=n(105),z=n(49),G=function(){return c.a.createElement(F.a,{theme:Object(z.a)()},c.a.createElement("div",{style:{width:"250px",height:"500px",display:"flex"}},c.a.createElement("div",{style:{height:"100%",minWidth:"300px",display:"flex",flexDirection:"column"}},c.a.createElement(L,{name:"COCO BOT",humanIdOrUrl:"https://marketplace.conversationalcomponents.com/api/exchange/namer_vp3"}))))},W=document.getElementById("erw-root");W&&o.a.render(c.a.createElement(G,null),W)}},[[52,1,2]]]);
//# sourceMappingURL=main.2986d1ff.chunk.js.map