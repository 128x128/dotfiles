"use strict";(("undefined"!=typeof self?self:global).webpackChunkopen=("undefined"!=typeof self?self:global).webpackChunkopen||[]).push([[5786],{22578:(e,t,a)=>{a.d(t,{$:()=>m});var n=a(67294),l=a(64593),r=a(96206),i=a(69691),c=a(8341),s=a(89952),o=a(51615),d=a(24183);function u(e){return e.includes("Spotify")?e:`Spotify – ${e}`}const m=({children:e,usePlayingItem:t})=>{let a=u(e);(e=>{const{mainLandmarkRef:t}=(0,d.Oh)(),a=(0,o.k6)(),l=a.location?.state?.preventMoveFocus,r=(0,n.useRef)(a.length<2);r.current=a.length<2,(0,n.useEffect)((()=>{const a=t.current;!l&&!r.current&&a&&e&&(a.setAttribute("aria-label",e),a.focus())}),[e,t,l])})(e);const{isPlaying:m}=(0,i.IK)(),f=(0,c.Y)((e=>e?.item));return f&&(m||t)&&((0,s.G_)(f)?a=[f.name,f.artists.map((e=>e.name)).join(r.ag.getSeparator())].join(" • "):(0,s.iw)(f)?a=[f.name,f.show.name].join(" • "):(0,s.k6)(f)&&(a=u(r.ag.get("ad-formats.advertisement")))),n.createElement(l.q,{defaultTitle:"Spotify",defer:!1},n.createElement("title",null,a))}},7279:(e,t,a)=>{a.r(t),a.d(t,{default:()=>L});var n=a(67294),l=a(51615),r=a(96206),i=a(42922),c=a(84242),s=a(22578),o=a(87462),d=a(62031),u=a(8498),m=a(11186),f=a(19480),g=a(94184),p=a.n(g),k=a(45464),y=a(33268),E=a(63996),b=a(80523),h=a(40525),P=a(99191),C=a(85592),I=a(54444);const S=e=>{const{onClick:t=(()=>{}),onContextMenu:a=(()=>{}),onTouchStart:l=(()=>{}),onTouchEnd:r=(()=>{}),delegatePlayback:i=!1,isPlaying:s,onPlay:o=(()=>{}),featureIdentifier:d,uri:u,renderCardImage:m,renderSubHeaderContent:f=(()=>null),isPlayable:g=!0,isDownloadable:S=!1,headerText:v,hasNewEpisodeIndicator:w=!1,className:L,playUri:N=u,albumURI:T,testId:x,ariaPlayLabel:U,ariaPauseLabel:Z,index:F,requestId:q}=e,M=T?`?highlight=${u}`:"",$=(0,P.O1)([u],v),{spec:j,logger:D,UBIFragment:H}=(0,I.fU)(k.createDesktopPlayandnavcardEventFactory,{data:{uri:u,position:F,reason:q??""}}),{isPlaying:z}=(0,c.n)({uri:N},{featureIdentifier:d});let B=z;i&&"boolean"==typeof s&&(B=s);const A=(0,n.useCallback)((()=>{o&&o(u,{})}),[o,u]),G=(0,I.Wi)(j);return n.createElement(H,{spec:j},n.createElement("div",{ref:G,className:p()(b.Z.card,L),onContextMenu:a,onTouchStart:l,onTouchEnd:r,"data-testid":x},n.createElement("div",{draggable:!0,onDragStart:$,className:b.Z.draggable},m(),n.createElement("div",{className:b.Z.cardMetadata},n.createElement(y.O,{to:T||u,search:M,onClick:t,isHero:!0,title:v,hasNewEpisodeIndicator:w},v),n.createElement(E.i,null,f(D,j))),S&&n.createElement(h.$,{uri:u,className:b.Z.DownloadStatusIndicator,size:16}),g&&n.createElement("div",{className:p()(b.Z.PlayButtonContainer,{[b.Z.PlayButtonContainerVisible]:B})},n.createElement(C.fh,{isPlaying:B,onClick:A,ariaPlayLabel:U,ariaPauseLabel:Z})),n.createElement("div",{onClick:t,className:b.Z.cardLink,"data-testid":"herocard-click-handler"}))))},v=({template:e,onPlay:t,index:a,onClick:l})=>n.createElement(S,{index:a,onClick:l,onPlay:()=>t?.(),headerText:"",featureIdentifier:"playlist",uri:e.parentTrackUri||"",isDownloadable:!0,renderCardImage:()=>n.createElement(u.x,{isHero:!0,images:[{url:e.image}],FallbackComponent:e=>n.createElement(d.U,(0,o.Z)({iconSize:64},e))}),renderSubHeaderContent:()=>n.createElement(n.Fragment,null,e.title,n.createElement(m.k,null,"A soundtrap game")),testId:"testId",requestId:"requestId"}),w=({templates:e,onClick:t,onPlay:a})=>{const l=(0,n.useMemo)((()=>e.map(((e,l)=>n.createElement(v,{key:e.id,onPlay:a,template:e,index:l,onClick:()=>t(e.templateProjectId)})))),[e,t,a]);return n.createElement(f.P,{title:"Games",onClickShelfTitle:()=>{},onClickShelfSeeAll:()=>{}},l)},L=n.memo((()=>{const e=(0,l.k6)(),[t,a]=(0,n.useState)([]),o=(0,n.useCallback)((async t=>{e.push(`/make-music/studio/${t}`)}),[e]);(0,n.useEffect)((()=>{(async()=>[{image:"https://i.scdn.co/image/ab67616d00001e02346d77e155d854735410ed18",title:"Blinding Lights",templateProjectId:"5Eclf4nGSei1LKbzVonHzw",id:"abc-123",parentTrackUri:"spotify:episode:3L9Fk8XmcdUylIq5rk5f90"}])().then(a)}),[]);const{togglePlay:d}=(0,c.n)({uri:"spotify:episode:3L9Fk8XmcdUylIq5rk5f90#asdasd"},{featureIdentifier:"debug"});return n.createElement(n.Fragment,null,n.createElement(s.$,null,r.ag.get("web-player.soundtrap.title")),n.createElement(i.ZP,{value:"make-music-page"},n.createElement("div",{className:"contentSpacing",id:"makeMusicPage"},n.createElement(n.Suspense,{fallback:null},n.createElement(w,{templates:t,onClick:o,onPlay:d})))))}))}}]);
//# sourceMappingURL=xpui-routes-make-music.js.map