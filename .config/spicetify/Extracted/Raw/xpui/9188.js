"use strict";(("undefined"!=typeof self?self:global).webpackChunkopen=("undefined"!=typeof self?self:global).webpackChunkopen||[]).push([[9188],{85404:(e,t,a)=>{a.d(t,{K:()=>d});var n=a(87462),r=a(67294),s=a(94184),l=a.n(s),o=a(99450),i=a(28760);const c="G8b_VGQSxRwZSatAhUTd";function d({children:e,"data-testid":t,className:a,...s}){return r.createElement("div",{className:l()(c,a),"data-testid":t},r.createElement(o.D,(0,n.Z)({},s,{buttonSize:s.buttonSize||o.D.sm}),r.createElement(i.Dy,{variant:"mestoBold"},e)))}},49188:(e,t,a)=>{a.r(t),a.d(t,{MAX_SPONSORS_TO_DISPLAY_IN_PREVIEW_IF_SOME_ARE_HIDDEN:()=>y,ShowSponsorsPreviewWithData:()=>I,default:()=>D});var n=a(67294),r=a(28760),s=a(1486),l=a(8271),o=a(85404),i=a(74820),c=a(65013),d=a(94184),m=a.n(d),h=a(87462);const u="GoBUqE90bjUv_7ndH9Fw";function S(e){return n.createElement("span",(0,h.Z)({},e,{className:m()(u,e.className)}))}const E="RnqjezHOt23z2EKd7j_l",p="M33ItRKEoYWPnq4DwL8n",f="KfQ2IK1i8BYSRgl3VYf4",v="Re1JThkswwaLzRdqavcO",w="uvrjZps73BZs41Z_0JcP",g="w2tPVFzE6CB2GFDWFwlE";function _({thereIsOnlyASingleShowSponsor:e,firstShowSponsor:t,showSponsorsDataThatActuallyGetDisplayedInPreview:a,numberOfHiddenSponsors:s}){return n.createElement(r.Dy,{className:m()(p,{[v]:e})},"Sponsored by"," ",e?n.createElement(S,null,t.metadata.advertiser):n.createElement(n.Fragment,null,a.length>2?a.slice(0,-2).flatMap(((e,t)=>[n.createElement(S,{key:`advertiser ${e.metadata.creativeId||e.metadata.creative_id||e.metadata.advertiser} - ${t}`},e.metadata.advertiser),", "])):"",s?n.createElement(n.Fragment,null,n.createElement(S,null,a[a.length-2].metadata.advertiser),","," ",n.createElement(S,null,a[a.length-1].metadata.advertiser)," ","and more"):n.createElement(n.Fragment,null,n.createElement(S,null,a[a.length-2].metadata.advertiser)," ","and"," ",n.createElement(S,null,a[a.length-1].metadata.advertiser)),"."))}var k=a(73727);const y=5;function I(e){const t={...e,fireTrackingEvent:e.fireTrackingEvent??c.I},{showSponsorsData:a,showId:d}=t,u=(0,i.D)(d),S=(0,n.useMemo)((()=>a.length>6?a.length-y:0),[a]),p=(0,n.useMemo)((()=>a.slice(0,S?y:6)),[a,S]),v=1===p.length,I=p[0],D=(0,l.s4)();(0,n.useEffect)((function(){v&&p.forEach((({trackingEvents:e})=>e?.viewed.forEach(t.fireTrackingEvent)))}),[v,p,t.fireTrackingEvent]);const b=(0,n.useCallback)((async e=>D.send((0,s.$)({uri:t.uri,reason:"Show page",lineitem_id:p.map((e=>e.metadata.lineitemId)),...e}))),[t.uri,p,D]);(0,n.useEffect)((function(){b()}),[t.showSponsorsData,b]);const P=function({thereIsOnlyASingleShowSponsor:e,props:t,allShowSponsorsPathname:a,sendPodcastAdCtaCardEventForShowSponsorsPreview:r,firstShowSponsor:s}){return(0,n.useMemo)((()=>{const l=m()(E,{[f]:e}),o={"--max-sponsors-to-display-in-preview":6,"--logo-size":"38px"};return e?e=>n.createElement("a",(0,h.Z)({href:s.metadata.clickthroughUrl,className:l,style:o},e,{onClick:function(t){e.onClick?.(t),s.trackingEvents?.clicked?.forEach((e=>fetch(e))),r({ui_navigate:[s.clickthrough],navigate_to_external_uri:[!0]})}}),e.children):e=>n.createElement(k.rU,(0,h.Z)({className:l,style:o,to:{pathname:a,state:t}},e,{onClick:function(t){e.onClick?.(t),r({cta_card_see_all:!0})}}))}),[e,t,a,r,s])}({thereIsOnlyASingleShowSponsor:v,props:t,allShowSponsorsPathname:u,sendPodcastAdCtaCardEventForShowSponsorsPreview:b,firstShowSponsor:I});return n.createElement(P,null,p?.map(((e,t)=>n.createElement("img",{key:`logo image ${e.metadata.creativeId||e.metadata.creative_id||e.metadata.advertiser} - ${t}`,src:e.metadata.logoImage,alt:e.metadata.advertiser,width:38,height:38,className:w}))),S?n.createElement(r.Dy,{className:g},"+",S):null,n.createElement(_,{thereIsOnlyASingleShowSponsor:v,firstShowSponsor:I,showSponsorsDataThatActuallyGetDisplayedInPreview:p,numberOfHiddenSponsors:S}),v?n.createElement(o.K,null,I.metadata.buttonMessage):null)}const D=I},65013:(e,t,a)=>{a.d(t,{I:()=>n});const n=e=>fetch(e)}}]);
//# sourceMappingURL=9188.js.map