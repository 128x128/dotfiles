"use strict";(("undefined"!=typeof self?self:global).webpackChunkopen=("undefined"!=typeof self?self:global).webpackChunkopen||[]).push([[2307],{37338:(e,t,n)=>{n.d(t,{T:()=>u});var a=n(67294),r=n(99191),l=n(25678),o=n(33732),i=n(42273),s=n(22023);const c="Ws8Ec3GREpT5PAUesr9b",d="kHu_FTRgoBLSLeAJtyKY",u=function({onClick:e,name:t,images:n,canEdit:u,placeholderType:m,shape:g=i.Kc.SQUARE,dragUri:p=""}){const[E,C]=(0,o.RH)(n),y=(0,l.VO)(E,C)===l.KO.loaded,k=(0,r.O1)([p],t);return a.createElement("div",{className:c,"data-testid":`${m}-image`,draggable:!!p,onDragStart:k},a.createElement(i.Oe,{loading:"eager",name:t,images:n,placeholderType:m,shape:g}),u&&a.createElement("div",{className:d},a.createElement(s.F,{overlay:y,onClick:e,rounded:g===i.Kc.CIRCLE})))}},35213:(e,t,n)=>{n.d(t,{l:()=>E});var a=n(67294),r=n(96206),l=n(95289),o=n(78462),i=n(73785);const s={"custom-order":o.HI,title:{column:i.Q.TITLE,order:i.k.ASC},artist:{column:i.Q.TITLE,order:i.k.SECONDARY_ASC},"added-by":{column:i.Q.ADDED_BY,order:i.k.ASC},"added-at":{column:i.Q.ADDED_AT,order:i.k.ASC},duration:{column:i.Q.DURATION,order:i.k.ASC},album:{column:i.Q.ALBUM,order:i.k.ASC},"album-or-podcast":{column:i.Q.ALBUM_OR_PODCAST,order:i.k.ASC},"album-or-show":{column:i.Q.ALBUM_OR_SHOW,order:i.k.ASC}},c={title:i.Q.TITLE,artist:i.Q.TITLE,"added-by":i.Q.ADDED_BY,"added-at":i.Q.ADDED_AT,duration:i.Q.DURATION,album:i.Q.ALBUM,"album-or-podcast":i.Q.ALBUM_OR_PODCAST,"album-or-show":i.Q.ALBUM_OR_SHOW},d={[i.k.NONE]:i.k.NONE,[i.k.ASC]:i.k.DESC,[i.k.DESC]:i.k.ASC,[i.k.SECONDARY_ASC]:i.k.SECONDARY_DESC,[i.k.SECONDARY_DESC]:i.k.SECONDARY_ASC},u={[i.Q.INDEX]:{key:"custom-order",get value(){return r.ag.get("sort.custom-order")}},[i.Q.TITLE]:{key:"title",get value(){return r.ag.get("sort.title")}},[i.Q.ARTIST]:{key:"artist",get value(){return r.ag.get("sort.artist")}},[i.Q.ADDED_BY]:{key:"added-by",get value(){return r.ag.get("sort.added-by")}},[i.Q.ADDED_AT]:{key:"added-at",get value(){return r.ag.get("sort.date-added")}},[i.Q.DURATION]:{key:"duration",get value(){return r.ag.get("sort.duration")}},[i.Q.EVENT_DATE]:null,[i.Q.ALBUM]:{key:"album",get value(){return r.ag.get("sort.album")}},[i.Q.ALBUM_OR_PODCAST]:{key:"album-or-podcast",get value(){return r.ag.get("sort.album-or-podcast")}},[i.Q.ALBUM_OR_SHOW]:{key:"album-or-show",get value(){return r.ag.get("sort.album-or-show")}},[i.Q.PLAYS]:null,[i.Q.RELEASE_DATE]:null,[i.Q.ADD]:null,[i.Q.ACTIONS]:null};var m=n(28248),g=n(1838);function p(e){return!!e}const E=({columns:e,disabled:t,onSort:n})=>{const E=[...e];E.splice(2,0,m.QD.ARTIST);const{sortState:C,setSortState:y}=(0,a.useContext)(o.Gb),k=function(e){return null===e.column?u[m.QD.INDEX]:(0,g.cB)(e.column,e.order)?u[m.QD.ARTIST]:u[e.column]}(C),h=(0,a.useCallback)((e=>{n?.(),y(((e,t,n)=>e?t!==c[e]||"artist"===e&&[i.k.ASC,i.k.DESC].includes(n)||"title"===e&&[i.k.SECONDARY_ASC,i.k.SECONDARY_DESC].includes(n)?s[e]:{column:c[e],order:d[n]}:o.HI)(e,C.column,C.order))}),[n,y,C.column,C.order]),b=(0,a.useCallback)((()=>null!==C.column),[C.column]),S=E.map((e=>u[e])).filter(p);return a.createElement(l.A,{options:S,onSelect:h,selected:k,isSelectionChanged:b,sortOrder:C.order,heading:r.ag.get("drop_down.sort_by"),disabled:t})}},34813:(e,t,n)=>{n.d(t,{v:()=>k});var a=n(87462),r=n(67294),l=n(94184),o=n.n(l),i=n(2603),s=n(24209),c=n(38910),d=n(96206),u=n(83692),m=n(54444),g=n(45287),p=n(63962);const E="I3oc8sxg8Duq4kYUGnMo",C="LEZf9K5hG4hfCKfgr5Xo",y=e=>r.createElement(i.e,(0,a.Z)({semanticColor:"textPositive"},e)),k=({uri:e,...t})=>{const{isEnhanced:n,toggleIsEnhanced:l}=(0,g.U)(e),{spec:i,logger:k}=(0,m.fU)(c.createDesktopEnhanceButtonEventFactory,{data:{uri:e}}),h=r.createElement(u.w,{label:n?d.ag.get("web-player.enhance.button_aria_label_enhanced"):d.ag.get("web-player.enhance.button_aria_label_not_enhanced")},r.createElement(s.P,(0,a.Z)({buttonSize:"sm",className:o()(E,{[C]:n})},t,{iconLeading:n?y:void 0,onClick:()=>{k.logInteraction(n?i.hitUnenhanceContext({contextToBeUnenhanced:e}):i.hitEnhanceContext({contextToBeEnhanced:e})),l()}}),n?d.ag.get("web-player.enhance.button_text_enhanced"):d.ag.get("web-player.enhance.button_text_not_enhanced")));return n?h:r.createElement(p.T,{id:"enhance-button",bodyText:d.ag.get("web-player.enhance.onboarding.enhance-playlist")},h)}},63962:(e,t,n)=>{n.d(t,{T:()=>g});var a=n(67294),r=n(73935),l=n(55914),o=n(28760),i=n(73012),s=n(99450),c=n(32648),d=n(5229);const u="iW5kFTiudWn9ItsTvZmz",m="OfNgl_iK7pi63fAi8USM",g=function({id:e,title:t,bodyText:n,buttonText:g,shouldScrollIntoView:p,children:E}){const[C,y]=(0,d.z)(`onboarding-dismissed:${e}`,!1),{scrollNodeRef:k}=(0,a.useContext)(c.VX),[h,b]=(0,a.useState)(null),[S,A]=(0,a.useState)(null),T=(0,a.useRef)(!1);(0,a.useEffect)((()=>{p&&S&&!T.current&&(T.current=!0,S.scrollIntoView({behavior:"smooth",block:"center"}))}),[p,S]);const w=(0,a.useCallback)((()=>y(!0)),[y]);(0,a.useEffect)((()=>{if(C)return()=>{};const e=e=>{"Escape"===e.key&&w()},t=e=>{e.target instanceof Node&&!S?.contains(e.target)&&w()};return window.addEventListener("keydown",e,!0),window.addEventListener("click",t,!0),()=>{window.removeEventListener("keydown",e,!0),window.removeEventListener("click",t,!0)}}),[C,w,S]);const D=k.current?.getBoundingClientRect(),_=h?.getBoundingClientRect();return a.createElement(a.Fragment,null,a.createElement("span",{ref:b},E),!C&&_&&(0,r.createPortal)(a.createElement("div",{className:u,style:{top:(_?.top??0)-((D?.top??0)-(k.current?.scrollTop??0)),left:(_?.left??0)-((D?.left??0)-(k.current?.scrollLeft??0)),width:_?.width,height:_?.height},ref:A},a.createElement(l.J,{popoverTitle:t,arrow:l.J.bottom,colorSet:"announcement",className:m},a.createElement(o.Dy,{as:"p",paddingBottom:g&&i.g4V},n),g&&a.createElement(s.D,{buttonSize:"sm",colorSet:"invertedLight",onClick:w},g))),k.current||document.body))}},61412:(e,t,n)=>{n.d(t,{v:()=>a.v});var a=n(34813)},12498:(e,t,n)=>{n.d(t,{v:()=>a.v});var a=n(27333)},40786:(e,t,n)=>{n.d(t,{s:()=>w});var a=n(67294),r=n(87577),l=n(96206),o=n(35410),i=n(37338),s=n(42273),c=n(59482),d=n(72907),u=n(67892),m=n(55120),g=n(2751),p=n(24172),E=n(49207),C=n(55911),y=n(18261),k=n(58548),h=n(51802),b=n(46457);function S(e){return e.user||null}function A(e){return!!e}function T(e,t=!1){return{id:e.username,uri:e.uri,name:e.username,displayName:e.displayName||void 0,images:e.images,isMadeFor:t}}const w=function({metadata:e,isPlaying:t,togglePlay:n,backgroundColor:w,spec:D}){const{uri:_,name:v,description:f="",images:R,totalLength:I,totalLikes:O,duration:L,owner:x,isOwnedBySelf:Q=!1,isCollaborative:N=!1,formatListData:U,madeFor:B=null,collaborators:P}=e,M=U?.attributes||{},F=M.header_image_url_desktop||M.image_url||null,Y=null!==F?[{url:F,width:null,height:null}]:[],K=(0,r.W6)(E.G8),W=(0,r.W6)(E.bM),X=K&&Q,G=(0,h.$)(),Z=(0,a.useMemo)((()=>function(e,t,n=[],a){return e?[T(e,!0)]:n.length>1&&a?n.map(S).filter(A).map((e=>T(e))):[T(t)]}(B,x,P?.items,W)),[B,x,P?.items,W]),z=(0,a.useContext)(p.zy),J=(0,a.useContext)(b.S7),H=(0,a.useCallback)((()=>{if(D){const e=D.ownerFactory().hitUiReveal();G.logInteraction(e)}J({type:"open",uri:_})}),[J,_,D,G]),V=(0,a.useCallback)((e=>{if(D){const e=D?.descriptionTextFactory().hitUiReveal();G.logInteraction(e)}z({type:"open",playlistDetails:{name:v,description:f,image:R[0],uri:_},focusedElement:e})}),[D,z,v,f,R,_,G]),j=(0,a.useCallback)((()=>{if(D){const e=D.coverArtFactory().hitUiReveal();G.logInteraction(e)}z({type:"openWithImagePicker",playlistDetails:{name:v,description:f,image:R[0],uri:_}})}),[z,v,f,R,_,G,D]),q=(0,a.useCallback)(((e,t)=>{if(D){const e=D.ownerFactory().hitUiNavigate({destination:t.uri});G.logInteraction(e)}}),[G,D]),$=W&&e.permissions?e.permissions?.isPrivate?l.ag.get("private_playlist"):l.ag.get("public_playlist"):N?l.ag.get("sidebar.collaborative_playlist"):l.ag.get("playlist");return a.createElement(s.gF,{backgroundColor:w,backgroundImages:Y},a.createElement(c.W,null,a.createElement(m.$,{size:C.qE.sm,onClick:n,isPlaying:t,uri:_}),a.createElement(d.i,{text:v,dragUri:_,dragLabel:v})),F?null:a.createElement(y._,{menu:a.createElement(o.X,{uri:_})},a.createElement("div",{className:g.Z.playlistImageContainer},a.createElement(i.T,{canEdit:X,name:v,images:R,onClick:j,placeholderType:"playlist",dragUri:_}))),a.createElement(s.sP,null,a.createElement(s.dy,{small:!0,uppercase:!0},$),a.createElement(y._,{menu:a.createElement(o.X,{uri:_})},a.createElement(s.xd,{canEdit:X,onClick:()=>{if(D){const e=D.titleFactory().hitUiReveal();G.logInteraction(e)}V(p.w.TITLE)},dragUri:_,dragLabel:v,ariaLabel:l.ag.get("playlist.edit-details.button",v)},v)),f&&a.createElement(s.dy,{bold:!1,gray:!0,canEdit:X,onClick:e=>(e=>{e.target.href||V(p.w.DESCRIPTION)})(e)},a.createElement(k.kf,{paragraphClassName:g.Z.playlistDescription,source:f,LinkComponent:u.r})),a.createElement(s.QS,{creators:Z,onPiledCreatorsClick:H,onCreatorClick:q,totalTracks:I,totalLikes:O??0,durationMilliseconds:L?.milliseconds,isEstimatedDuration:L?.isEstimate,newEntries:parseInt(M.new_entries_count||"0",10)})))}},2751:(e,t,n)=>{n.d(t,{Z:()=>a});const a={xs:"(min-width: 0px)",xsOnly:"(min-width: 0px) and (max-width: 767px)",sm:"(min-width: 768px)",smOnly:"(min-width: 768px) and (max-width: 1023px)",md:"(min-width: 1024px)",mdOnly:"(min-width: 1024px) and (max-width: 1279px)",lg:"(min-width: 1280px)",lgOnly:"(min-width: 1280px) and (max-width: 1919px)",xl:"(min-width: 1920px)",playlist:"dZ3U5sTGUTdanNamXe1z",searchBoxContainer:"KodyK77Gzjb8NqPGpcgw",recommendedTrackList:"kwe0I8sSNMv3gYBjkRYP",playlistContent:"rezqw3Q4OEPB1m4rmwfw",playlistDescription:"fUYMR7LuRXv0KJWFvRZA",top:"PZkwbwJD1afoCmJkGt8w",header:"yP3JLuwUNDIQHxRFilK3",subtitle:"NCKSUYdZaTMrobq8ilkc",refreshButton:"QmGi2oa43BTcEZ5MCr9T",playlistImageContainer:"oq1ci28WPaRsWkvRiB_J",playlistInlineCurationSection:"Ykd_JWqkR9gSLHISDBwP",playlistInlineCurationTitle:"SMJIXlalPk_TESlyt2pC",playlistInlineCurationWrapper:"g9xHCCSXDR8S5NvTbfwL",playlistInlineCurationCloseButton:"FC40AOSbVM9LXjVi7bjO",playlistInlineCurationBackButton:"hVcUafGrnsA6nD1dJzc5",artistResultListTitle:"rARdlCShKVQsvuXamFOX",seeMore:"STDuzt77yRCueC4Ohenl",emptyStateContainer:"Bl_kg24BjWgcXPokgEKy",searchResultListContainer:"sAPXlA_oxu_8x1Cn0NTC",emptySearchTermContainer:"_Z2TnFjt8GB5ryOtvyti",icon:"tzeKawjOOKFw1KfQ34mG"}}}]);
//# sourceMappingURL=2307.js.map