import{_ as l}from"./nuxt-link.3907012b.js";import{a as _}from"./axios.8f19e258.js";import{r as u,f as p,k as d,o as a,c as n,b as m,w as g,j as r,l as f}from"./entry.4e9406a9.js";function h(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var x=_;const y=h(x),k={class:"logocontainer"},j=["src"],v={__name:"Logo",props:{id:{type:Number,required:!0}},setup(o){const c=o,e=u({logo:[]});p(async()=>{try{const t=await y.get("/graphiques.json");e.logo=t.data}catch(t){console.log(t)}});const s=d(()=>e.logo.find(t=>t.id===c.id));return(t,w)=>{const i=l;return a(),n("div",k,[m(i,{to:"/agence"},{default:g(()=>[r(s)?(a(),n("img",{key:0,src:r(s).src,alt:"Big Five Solutions",class:"img-fluid"},null,8,j)):f("",!0)]),_:1})])}}},E=v;export{E as _,y as a};
