function e(e,t,n,s){Object.defineProperty(e,t,{get:n,set:s,enumerable:!0,configurable:!0})}var t=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequireb4e2;t.register("7klBZ",(function(n,s){e(n.exports,"ErrorHandler",(()=>f));var r=t("96Y5O"),o=t("eAg8o"),i=t("dJulZ"),a=t("gw5WV");const f=e=>{const t=i.useToast(),[n,s]=o.useState(!1);return o.useEffect((()=>{(async()=>{})(),(async()=>{const e=a.default.on("error",(e=>{t({title:e.title,position:"top",description:e.message,status:"error",duration:2e4,isClosable:!0})}))})()}),[n]),r.jsx(r.Fragment,{})}})),t.register("gw5WV",(function(n,s){e(n.exports,"default",(()=>r));var r=t("aqf0U").createNanoEvents()})),t.register("aqf0U",(function(t,n){e(t.exports,"createNanoEvents",(()=>s));let s=()=>({events:{},emit(e,...t){(this.events[e]||[]).forEach((e=>e(...t)))},on(e,t){return(this.events[e]=this.events[e]||[]).push(t),()=>this.events[e]=(this.events[e]||[]).filter((e=>e!==t))}})}));