import './polyfills.server.mjs';
import{a as m}from"./chunk-ALZNOHOH.mjs";import{a as h,b as g,c}from"./chunk-7DPT6SHR.mjs";import{C as p,p as o,q as l}from"./chunk-XI4GD5BT.mjs";import{P as n,U as a}from"./chunk-W2FOEFF4.mjs";var U=(()=>{let s=class s{constructor(t,i,e,u,f){this.http=t,this.router=i,this.appService=e,this.notification=u,this.language=f,this.apiUrl=c.apiUrl,this.is_mobile_nav=!0,this.mobile_menu=!1,this.data={},this.page={}}hanlde_mobile_menu(){this.mobile_menu?this.mobile_menu=!1:this.mobile_menu=!0}list(){let t=`${this.apiUrl}/api/web/settings?lang=${this.language.lang}`;return this.http.get(t)}find(t){let i=`${this.apiUrl}/api/web/settings/${t}?lang=${this.language.lang}`;return this.http.get(i)}get_posts(t){let i=new o;for(let e in t)t.hasOwnProperty(e)&&(i=i.set(e,t[e]));return i=i.set("lang",this.language.lang),this.http.get(`${this.apiUrl}/api/web/posts`,{params:i})}post_by_year(){let t=`${this.apiUrl}/api/web/posts_by_year?type=post&lang=${this.language.lang}`;return this.http.get(t)}get_categories(){let t=`${this.apiUrl}/api/web/categories?lang=${this.language.lang}`;return this.http.get(t)}find1(){this.list().subscribe(t=>{let i=t.data;Object.keys(i).forEach(e=>{i[e]=JSON.parse(i[e])??""}),this.data=i})}setPage(t){this.find(t).subscribe({next:i=>{this.page=i.data[t]?JSON.parse(i.data[t]):{}},error:i=>{}})}};s.\u0275fac=function(i){return new(i||s)(a(l),a(p),a(g),a(h),a(m))},s.\u0275prov=n({token:s,factory:s.\u0275fac,providedIn:"root"});let r=s;return r})();export{U as a};
