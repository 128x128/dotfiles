"use strict";(("undefined"!=typeof self?self:global).webpackChunkopen=("undefined"!=typeof self?self:global).webpackChunkopen||[]).push([[375],{10375:(e,t,a)=>{a.r(t),a.d(t,{EPISODE_SPONSOR_NOW_PLAYING_BAR_HAT_CALL_TO_ACTION_BUTTON_TEST_ID:()=>p,EPISODE_SPONSOR_NOW_PLAYING_BAR_HAT_WRAPPER_TEST_ID:()=>v,EpisodeSponsorNowPlayingBarHatWrapper:()=>S,default:()=>N});var n=a(67294),o=a(94184),r=a.n(o),s=a(85404),d=a(94613),c=a(48015),i=a(85392);function l({adEvent:e,ad:t}){const a=function({adEvent:e,ad:t}){return(0,n.useMemo)((()=>(("true"===e?.ad.metadata.useAdvertiserImage?e?.ad.cover_art?.find((({url:e})=>e)):void 0)||t?.images.find((({url:e})=>e)))?.url),[e,t])}({adEvent:e,ad:t}),[o,r]=(0,n.useState)(),s=(0,n.useMemo)((()=>o instanceof Error?void 0:o?.colorDark.toCSS(c.j.RGB)),[o]);return(0,n.useEffect)((function(){r(void 0),a&&(0,i.b)(a).then(r).catch((()=>r(new Error("color not extracted successfully for episode NPB hat"))))}),[a]),{extractedColor:s}}const u="KBWjEPwPWicEtomdeiQs",m="coMbiwYB6lxQzLWA6nWG",E="G4GY06xd0E2ykUuFqSRh",f="c2Zkum6BT3Rk002Qm3of",_="RjFjCFusDtSD_UHF5Fma",v="episode-sponsor-now-playing-bar-hat-wrapper",p="episode-sponsor-now-playing-bar-hat-call-to-action-button";function S({adEvent:e,hidingHat:t,ad:a,postClickEvent:o}){const{extractedColor:c}=l({adEvent:e,ad:a}),{tagline:i,buttonMessage:S}=e.ad.metadata,N="true"===e.ad.metadata.useClickURL?e.ad.click_url:void 0;return n.createElement("div",{className:r()(c?m:u,{[E]:t}),style:{backgroundColor:c},"data-testid":v},n.createElement(d.S,{className:f},i),S&&N&&n.createElement("div",{className:_},n.createElement(s.K,{href:N,"data-testid":p,onClick:o},S)))}const N=S},85404:(e,t,a)=>{a.d(t,{K:()=>l});var n=a(87462),o=a(67294),r=a(94184),s=a.n(r),d=a(99450),c=a(28760);const i="G8b_VGQSxRwZSatAhUTd";function l({children:e,"data-testid":t,className:a,...r}){return o.createElement("div",{className:s()(i,a),"data-testid":t},o.createElement(d.D,(0,n.Z)({},r,{buttonSize:r.buttonSize||d.D.sm}),o.createElement(c.Dy,{variant:"mestoBold"},e)))}},94613:(e,t,a)=>{a.d(t,{S:()=>i});var n=a(87462),o=a(67294),r=a(94184),s=a.n(r),d=a(28760);const c="eaiLXk0FzOrdfkM6O8jp";function i(e){return o.createElement(d.Dy,(0,n.Z)({},e,{variant:e.variant||"mesto",className:s()(c,e.className)}))}}}]);
//# sourceMappingURL=375.js.map