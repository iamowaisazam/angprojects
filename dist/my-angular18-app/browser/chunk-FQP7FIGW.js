import{a as d}from"./chunk-UPMV7PW5.js";import{a as u}from"./chunk-2HKXIZ2N.js";import{h as a,i as p,j as h,p as c,s as l,t as m}from"./chunk-57FAEB72.js";import{P as s,U as r}from"./chunk-TL672DAF.js";var U=(()=>{let n=class n{constructor(i,t,e,g,f){this.http=i,this.router=t,this.appService=e,this.adminService=g,this.language=f,this.apiUrl=l.apiUrl,this.data=[]}list(i){let t=new p;for(let e in i)i.hasOwnProperty(e)&&(t=t.set(e,i[e]));return t=t.set("lang",this.language.lang),this.http.get(`${this.apiUrl}/api/admin/posts`,{params:t,headers:new a({Authorization:`Bearer ${this.adminService.token}`,"Content-Type":"application/json"})})}create(i){let t=`${this.apiUrl}/api/admin/posts?lang=${this.language.lang}`,e=i;return this.http.post(t,e,{headers:new a({Authorization:`Bearer ${this.adminService.token}`,"Content-Type":"application/json"})})}edit(i){let t=`${this.apiUrl}/api/admin/posts/${i}?lang=${this.language.lang}`;return this.http.get(t,{headers:new a({Authorization:`Bearer ${this.adminService.token}`,"Content-Type":"application/json"})})}update(i){let t=`${this.apiUrl}/api/admin/posts/${i.id}?lang=${this.language.lang}`,e=i;return this.http.put(t,e,{headers:new a({Authorization:`Bearer ${this.adminService.token}`,"Content-Type":"application/json"})})}delete(i){let t=`${this.apiUrl}/api/admin/posts/${i}`;return this.http.delete(t,{headers:new a({Authorization:`Bearer ${this.adminService.token}`,"Content-Type":"application/json"})})}};n.\u0275fac=function(t){return new(t||n)(r(h),r(c),r(m),r(u),r(d))},n.\u0275prov=s({token:n,factory:n.\u0275fac,providedIn:"root"});let o=n;return o})();export{U as a};