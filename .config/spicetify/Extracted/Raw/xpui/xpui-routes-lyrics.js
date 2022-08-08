"use strict";(("undefined"!=typeof self?self:global).webpackChunkopen=("undefined"!=typeof self?self:global).webpackChunkopen||[]).push([[6025],{22578:(e,t,r)=>{r.d(t,{$:()=>d});var a=r(67294),i=r(64593),n=r(96206),c=r(69691),s=r(8341),l=r(89952),o=r(51615),u=r(24183);function m(e){return e.includes("Spotify")?e:`Spotify – ${e}`}const d=({children:e,usePlayingItem:t})=>{let r=m(e);(e=>{const{mainLandmarkRef:t}=(0,u.Oh)(),r=(0,o.k6)(),i=r.location?.state?.preventMoveFocus,n=(0,a.useRef)(r.length<2);n.current=r.length<2,(0,a.useEffect)((()=>{const r=t.current;!i&&!n.current&&r&&e&&(r.setAttribute("aria-label",e),r.focus())}),[e,t,i])})(e);const{isPlaying:d}=(0,c.IK)(),g=(0,s.Y)((e=>e?.item));return g&&(d||t)&&((0,l.G_)(g)?r=[g.name,g.artists.map((e=>e.name)).join(n.ag.getSeparator())].join(" • "):(0,l.iw)(g)?r=[g.name,g.show.name].join(" • "):(0,l.k6)(g)&&(r=m(n.ag.get("ad-formats.advertisement")))),a.createElement(i.q,{defaultTitle:"Spotify",defer:!1},a.createElement("title",null,r))}},70369:(e,t,r)=>{r.d(t,{$:()=>a.$});var a=r(22578)},45253:(e,t,r)=>{r.r(t),r.d(t,{default:()=>he});var a=r(67294),i=r(91247),n=r(28216),c=r(69518),s=r.n(c),l=r(73012),o=r(87577),u=r(49207),m=r(31595),d=r(45106),g=r(8341),y=r(55799),v=r(49104),f=r(70369),p=r(10001),b=r(88767),E=r(96511),k=r(48015);var h=r(68120);function S(e,t,r){const{startTimeMs:a,words:i}=e,n=r[t+1];return{start:a||0,end:n&&n.startTimeMs?n.startTimeMs:1/0,text:i}}function L(e){const t=function(e){return{r:e>>16&255,g:e>>8&255,b:255&e}}(e);return k.I.fromRGB(t).toCSS(k.j.RGB)}const N=(e,t,r=!1)=>{const a=["lyrics",{uri:e,image:t,vocalRemoval:r}],{data:i,isLoading:n,isError:c}=(0,b.useQuery)(a,(async()=>e&&t&&s().isTrack(e)?await async function(e,t,r){try{const n=await(0,h.S)(e,t,r);return{hasLyrics:!0,isTimeSynced:(i=n.lyrics.syncType,"LINE_SYNCED"===i||"SYLLABLE_SYNCED"===i),syncType:n.lyrics.syncType,lyrics:n.lyrics.lines.map(S),colors:(a=n.colors,{text:L(a.text),activeText:L(a.highlightText),background:L(a.background)}),provider:n.lyrics.provider,providerDisplayName:n.lyrics.providerDisplayName,providerLyricsId:n.lyrics.providerLyricsId,hasVocalRemoval:n.hasVocalRemoval??!1}}catch(e){if(e instanceof E.m&&404===e.status)return{hasLyrics:!1};throw e}var a,i}(e,t,r):{hasLyrics:!1}),{cacheTime:18e5});return{data:i??null,loading:n,error:c}};var I=r(28760),w=r(96206),x=r(23716),T=r(52759),_=r(24643),D=r(8271);var B=r(70131),C=r(32648);const G="Q2RPoHcoxygOoPLXLMww",O="esRByMgBY3TiENAsbDHA",V="NHVfxGs2HwmI_fly2JC4",A="TDPh45khCfG51fNwNIiw",R="H2J92dVdr0ykdOX5azL1",F="E64X_eoy6xsJmDdKKHja",P="W_EplVEAbZrZURqfLiQC",Y="iq4cgi0YEKr6DGaTtzUj",H=a.memo((function({onObserve:e,text:t,lineNumber:r,activeLineIndex:n,isTimeSynced:c,handleLyricsClick:s}){const{ref:l,inView:o}=(0,B.YD)({threshold:0,triggerOnce:!0});(0,a.useEffect)((()=>{o&&e(t)}),[o,e,t]);const u=(0,a.useRef)(),m=(0,a.useRef)(!0),d=(0,a.useContext)(C.VX);return(0,a.useEffect)((()=>{if(c&&n===r||c&&0===r&&n<0){const e=u.current?.getBoundingClientRect().top,t=d.scrollNodeRef.current?.getBoundingClientRect().height,r=t/4;if((e<r||e>t-r)&&!m.current&&n>=0)return;const a=m.current?"auto":"smooth";u.current?.scrollIntoView({behavior:a,block:"center",inline:"center"})}m.current=!1}),[n,c,r,u,d]),a.createElement("div",{dir:"auto",className:(0,i.cx)(V,{[A]:n===r,[R]:n>r,[F]:!c}),"data-testid":"fullscreen-lyric",ref:e=>{l(e),u.current=e||void 0},onClick:e=>s(e,r)},t)})),M={start:0,end:1,text:""},W=a.memo((function({trackUri:e,data:t}){const{lyrics:r=[],provider:i,providerLyricsId:n,providerDisplayName:c,syncType:s,isTimeSynced:l}=t,[o]=(0,T.z)(500,(t=>t?.item?.uri===e)),u=(0,g.Y)((e=>e?.playbackId??void 0)),m=function(e){const{trackUri:t,format:r,provider:i,providerLyricsId:n,syncType:c,playbackId:s}=e,[l,o]=(0,a.useState)(!1),[u,m]=(0,a.useState)(0),d=(0,a.useMemo)((()=>(0,_.N)({lyrics_format:r,track_uri:t,provider:i,provider_lyrics_id:n,sync_type:c,playback_id:s})),[r,i,n,c,t,s]);(0,a.useEffect)((()=>{o(!1),m(0)}),[d]);const g=(0,D.s4)();return(0,a.useEffect)((()=>{l||u>=140&&(g.send(d),o(!0))}),[u,l,d,g]),m}({trackUri:e,format:"fullscreen",provider:i,providerLyricsId:n,syncType:s,playbackId:u}),d=(0,a.useCallback)((e=>{e.length>1&&m((t=>t+e.length))}),[m]),y=(0,a.useMemo)((()=>[M,M,...r].map(((e,t)=>({...e,lineNumber:t})))),[r]),v=l?y.findIndex((({start:e,end:t})=>o>=e&&o<t)):-1,f=(0,x.g)(),p=(e,t)=>{if(l){e.target.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),f.seekTo(y[t].start);const r=f.getState();r&&!r.isPaused||f.resume()}};return a.createElement("div",{className:G},a.createElement("div",{className:O},!l&&a.createElement(I.Dy,{as:"p",variant:"mesto",className:Y,dir:"auto"},w.ag.get("web-player.lyrics.unsynced")),y.map((({text:e,lineNumber:t})=>a.createElement(H,{key:t,text:e,lineNumber:t,activeLineIndex:v,isTimeSynced:l,onObserve:d,handleLyricsClick:p}))),c&&a.createElement(I.Dy,{as:"p",variant:"mesto",className:P,dir:"auto"},w.ag.get("web-player.lyrics.providedBy",c))))}));var z=r(38470);const U="hW9km7ku6_iggdWDR_Lg",J="IIFWQwWvkxpl3swKeHSx",q="ihTTWcgqNLcQ_cg7Bubg",K="T67LFP0PElpfkkLuegQt",Q="fSKBdxsPEB5WUAJWTYlh",j="YRcOaDMQH71HylItIhW6",$="EKdvOmPl7kNCDg_yuma8",X=a.memo((function({version:e}){const t=[w.ag.get("web-player.lyrics.noLyrics0"),w.ag.get("web-player.lyrics.noLyrics1"),w.ag.get("web-player.lyrics.noLyrics2"),w.ag.get("web-player.lyrics.noLyrics3")];let r;switch(e){case"ad":r=w.ag.get("web-player.lyrics.ad");break;case"error":r=w.ag.get("web-player.lyrics.error");break;case"unavailable":r=t[Math.floor(Math.random()*t.length)];break;default:(0,z.U)(e)}return a.createElement("div",{className:K},a.createElement("span",{className:$},r))}));var Z=r(94184),ee=r.n(Z),te=r(57518),re=r(7762),ae=r(27808),ie=r(26912),ne=r(62312),ce=r(41374),se=r(32626),le=r(30005),oe=r(36652),ue=r(21691),me=r(66587);const de="qnJd7AVNVGM33NxaibzG",ge="tPJJwfJAQV0WDsE9Kfmd",ye=[{volume:me.B.SING_ALONG_OFF,icon:a.createElement(te.D,{iconSize:16}),get label(){return w.ag.get("singalong.off")}},{volume:me.B.HIGH,icon:a.createElement(re.d,{iconSize:16}),get label(){return w.ag.get("singalong.more-vocal")}},{volume:me.B.LOW,icon:a.createElement(ae.J,{iconSize:16}),get label(){return w.ag.get("singalong.less-vocal")}}],ve=a.memo((function({currentTrackUri:e}){const{isSupported:t,volume:r,setVocalVolume:i}=(e=>{const t=(0,y.$)(),[r,i]=(0,a.useState)(me.B.SING_ALONG_OFF),{isSupported:n}=t.getCapabilities();return(0,a.useEffect)((()=>{t.setStatus(me.q.DISABLED).then((()=>{i(me.B.SING_ALONG_OFF)}))}),[e,t]),(0,a.useEffect)((()=>()=>{t.setStatus(me.q.DISABLED)}),[t]),{isSupported:n,volume:r,setVocalVolume:(0,a.useCallback)((async e=>{e===me.B.SING_ALONG_OFF?await t.setStatus(me.q.DISABLED):await t.setStatus(me.q.ENABLED),await t.setVocalVolume(e),i(e)}),[t])}})(e),n=(0,a.useCallback)((e=>{t&&i(e.volume)}),[t,i]);if(!t)return null;const c=ye.find((e=>e.volume===r)),s=c?.volume===me.B.SING_ALONG_OFF;return a.createElement(se.yj,{menu:a.createElement(le.v,null,a.createElement(oe.F,null,w.ag.get("singalong.title")),ye.map((e=>a.createElement(ue.s,{role:"menuitemradio","aria-checked":r===e.volume,"aria-label":e.label,key:e.volume,onClick:()=>n(e),icon:e.icon,iconPosition:"leading"},e.label))))},((e,t,r)=>a.createElement("button",{onClick:t,ref:r,type:"button",className:ee()(de,{[ge]:s})},s?a.createElement(a.Fragment,null,a.createElement(ie.r,{iconSize:16}),a.createElement(I.Dy,{variant:"mesto"},w.ag.get("singalong.button"))):a.createElement(a.Fragment,null,c.icon,a.createElement(I.Dy,{variant:"mesto"},c.label)),e?a.createElement(ne.U,{iconSize:16}):a.createElement(ce.i,{iconSize:16}))))})),fe=a.createElement("div",{className:q},a.createElement(p.H,null)),pe=a.createElement(X,{version:"error"}),be=a.createElement(X,{version:"ad"}),Ee=a.createElement(X,{version:"unavailable"}),ke={active:l.ixZ,inactive:l.Snx,background:l.tGJ,messaging:l.ixZ},he=()=>{const e=(0,y.$)(),{isSupported:t}=e.getCapabilities(),r=(0,o.W6)(u.cp)&&t,c=(0,d.O)(),l=(0,g.Y)((e=>e?.item),((e,t)=>e?.uri===t?.uri)),p=l?.uri||"",b=(0,v.o)(l?.images||void 0,{desiredLabel:"large",desiredSize:600}),{data:E,loading:k,error:h}=N(p,b||l?.images?.[0].url||"",r);let S=ke;E?.hasLyrics&&(S={active:E.colors.activeText,inactive:E.colors.text,background:E.colors.background,messaging:E.colors.text}),(0,m.Y)(S.background,ke.background);const L=(0,g.Y)((e=>e?.nextItems?.[0]),((e,t)=>e?.uri===t?.uri));N(L?.uri||"",L?.images?.[0]?.url||"",r);let I=fe,w=!1;if(p)if(s().isAd(p))I=be;else if(h)I=pe;else if(k)I=fe;else if(E)if(E.hasLyrics){const e=c.activeDevice?.isLocal??!1;w=r&&E.hasVocalRemoval&&e,I=a.createElement(W,{trackUri:p,data:E,key:p})}else I=Ee;const x=(0,n.v9)((e=>e.ads.leaderboard.isEnabled)),T={"--lyrics-color-active":S.active,"--lyrics-color-inactive":S.inactive,"--lyrics-color-background":S.background,"--lyrics-color-messaging":S.messaging};return a.createElement(a.Fragment,null,a.createElement(f.$,{usePlayingItem:!0},"Spotify"),a.createElement("div",{className:(0,i.cx)(U,{[J]:x}),style:T},a.createElement("div",{className:Q}),I,w?a.createElement("div",{className:j},a.createElement(ve,{currentTrackUri:p})):null))}}}]);
//# sourceMappingURL=xpui-routes-lyrics.js.map