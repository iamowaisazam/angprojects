import{a as Q}from"./chunk-GN7VLED3.js";import{a as $}from"./chunk-XCC24VLG.js";import{a as J}from"./chunk-AZ3SLBW5.js";import"./chunk-OA5BMNMG.js";import{a as D}from"./chunk-KNK3ANK6.js";import{b as q,c as p,d as k,e as R,g as A,h as G,i as O,j as W,k as H,l as B,m as z,n as K,o as U}from"./chunk-OO4EHEJG.js";import{a as Y}from"./chunk-GWDSJW3V.js";import{a as V}from"./chunk-ZNQGM4JM.js";import"./chunk-E4T5XHJF.js";import{d as N,f as w,n as M,p as j,u as P}from"./chunk-FDMMK7UD.js";import{$a as f,Aa as a,Ba as u,Ma as v,Oa as s,Qa as E,Ra as C,Sa as y,Ta as I,Ua as o,Va as t,Wa as g,X as b,Za as F,_a as S,ea as _,eb as n,fa as h,fb as L,gb as c,kb as T}from"./chunk-2AQWV6M7.js";import{d as x}from"./chunk-4CLCTAJ7.js";function re(i,m){i&1&&(o(0,"p",15),n(1,"Loader"),t())}function ne(i,m){if(i&1&&(o(0,"div",37),n(1),t()),i&2){let r=f(2);a(),c(" ",r.myFormService.getErrorMessage(r.form.controls.title)," ")}}function ae(i,m){if(i&1&&(o(0,"option",26),n(1),t()),i&2){let r=m.$implicit;s("value",r.id),a(),L(r.title)}}function le(i,m){if(i&1&&(o(0,"div",37),n(1),t()),i&2){let r=f(2);a(),c(" ",r.myFormService.getErrorMessage(r.form.controls.category_id)," ")}}function de(i,m){if(i&1&&(o(0,"div",37),n(1),t()),i&2){let r=f(2);a(),c(" ",r.myFormService.getErrorMessage(r.form.controls.status)," ")}}function me(i,m){if(i&1&&(o(0,"div",37),n(1),t()),i&2){let r=f(2);a(),c(" ",r.myFormService.getErrorMessage(r.form.controls.featured)," ")}}function se(i,m){if(i&1&&(o(0,"div",37),n(1),t()),i&2){let r=f(2);a(),c(" ",r.myFormService.getErrorMessage(r.form.controls.thumbnail)," ")}}function ce(i,m){if(i&1&&(o(0,"div",37),n(1),t()),i&2){let r=f(2);a(),c(" ",r.myFormService.getErrorMessage(r.form.controls.short_description)," ")}}function pe(i,m){if(i&1&&(o(0,"div",37),n(1),t()),i&2){let r=f(2);a(),c(" ",r.myFormService.getErrorMessage(r.form.controls.long_description)," ")}}function fe(i,m){if(i&1){let r=F();o(0,"form",17),S("ngSubmit",function(){_(r);let d=f();return h(d.onSubmit())}),o(1,"div",18)(2,"div",19)(3,"div",20)(4,"label",21),n(5),t(),g(6,"input",22),v(7,ne,2,1,"div",23),t()(),o(8,"div",19)(9,"div",20)(10,"label",21),n(11),t(),o(12,"select",24)(13,"option",25),n(14,"Select Category"),t(),y(15,ae,2,2,"option",26,C),t(),v(17,le,2,1,"div",23),t()(),o(18,"div",19)(19,"div",20)(20,"label",21),n(21,"Status"),t(),o(22,"select",27)(23,"option",25),n(24,"Select Status"),t(),o(25,"option",28),n(26,"Enable"),t(),o(27,"option",29),n(28,"Disable"),t()(),v(29,de,2,1,"div",23),t()(),o(30,"div",19)(31,"div",20)(32,"label",21),n(33,"Is Featured"),t(),o(34,"select",30)(35,"option",25),n(36,"Select Featured"),t(),o(37,"option",28),n(38,"Yes"),t(),o(39,"option",29),n(40,"No"),t()(),v(41,me,2,1,"div",23),t()(),o(42,"div",19)(43,"div",20)(44,"label",21),n(45),t(),o(46,"app-img-uploader",31),S("imgHanle",function(d){_(r);let l=f();return h(l.form.controls.thumbnail.patchValue(d.path))}),t(),v(47,se,2,1,"div",23),t()(),o(48,"div",32)(49,"div",20)(50,"label",21),n(51),t(),g(52,"input",33),v(53,ce,2,1,"div",23),t()(),o(54,"div",32)(55,"div",20)(56,"label",21),n(57),t(),g(58,"editor",34),v(59,pe,2,1,"div",23),t()(),o(60,"div",35)(61,"button",36),n(62,"Submit"),t()()()()}if(i&2){let r,e=f();s("formGroup",e.form),a(5),c("Title (",e.lang.lang,")"),a(2),s("ngIf",e.form.controls.title.invalid&&(e.form.controls.title.dirty||e.form.controls.title.touched)),a(4),c("Category (",e.lang.lang,")"),a(4),I(e.categories),a(2),s("ngIf",e.form.controls.category_id.invalid&&(e.form.controls.category_id.dirty||e.form.controls.category_id.touched)),a(12),s("ngIf",e.form.controls.status.invalid&&(e.form.controls.status.dirty||e.form.controls.status.touched)),a(12),s("ngIf",e.form.controls.featured.invalid&&(e.form.controls.featured.dirty||e.form.controls.featured.touched)),a(4),c("Thumbnail (",e.lang.lang,")"),a(),s("image",(r=e.form.controls.thumbnail.value)!==null&&r!==void 0?r:""),a(),s("ngIf",e.form.controls.thumbnail.invalid&&(e.form.controls.thumbnail.dirty||e.form.controls.thumbnail.touched)),a(4),c("Short Description (",e.lang.lang,")"),a(2),s("ngIf",e.form.controls.short_description.invalid&&(e.form.controls.short_description.dirty||e.form.controls.short_description.touched)),a(4),c("Long Description (",e.lang.lang,")"),a(),s("init",e.init),a(),s("ngIf",e.form.controls.long_description.invalid&&(e.form.controls.long_description.dirty||e.form.controls.long_description.touched)),a(2),s("disabled",e.formLoader)}}var Le=(()=>{let m=class m{constructor(e,d,l,X,Z,ee,te,ie){this.fb=e,this.notification=d,this.myFormService=l,this.service=X,this.route=Z,this.router=ee,this.lang=te,this.websiteService=ie,this.formLoader=!1,this.editId="",this.init={menubar:!0,plugins:"lists link image table code help wordcount"},this.categories=[],this.form=this.fb.group({title:["",[p.required,p.maxLength(100)]],category_id:["",[p.required,p.maxLength(100)]],short_description:["",[p.required,p.maxLength(200)]],thumbnail:["",p.required],featured:["",p.required],status:["",p.required],long_description:["",[p.required,p.maxLength(1e4)]]}),this.websiteService.get_categories().subscribe(oe=>{this.categories=oe.data.data})}ngOnInit(){this.route.paramMap.subscribe(e=>{this.editId=e.get("id"),this.getRecord(this.editId)})}getRecord(e){return x(this,null,function*(){this.formLoader=!0,this.service.list({type:"post",id:Number(this.editId),limit:1}).subscribe({next:d=>{let l=d.data.data[0];this.form.patchValue({title:l.title,short_description:l.short_description,long_description:l.long_description,thumbnail:l.thumbnail,status:l.status,featured:l.is_featured,category_id:l.category_id}),this.notification.success(d.message),this.formLoader=!1},error:d=>{let l=d.error;l?l.errors?this.notification.error(Object.values(l.errors)[0]):this.notification.error(l.message):this.notification.error("Something Went Wrong"),this.formLoader=!1,this.router.navigate(["/admin/dashboard"])}})})}onSubmit(){return x(this,null,function*(){if(this.form.valid){let e=this.form.value;e.type="post",e.id=this.editId,this.formLoader=!0,this.service.update(e).subscribe({next:d=>{this.formLoader=!1,this.notification.success(d.message),this.getRecord(this.editId),this.formLoader=!1},error:d=>{let l=d.error;l?l.errors?this.notification.error(Object.values(l.errors)[0]):this.notification.error(l.message):this.notification.error("Something Went Wrong"),this.formLoader=!1}})}else this.formLoader=!1,this.form.markAllAsTouched(),this.notification.error("Validation Failed")})}};m.\u0275fac=function(d){return new(d||m)(u(z),u(P),u(Q),u(Y),u(M),u(j),u(V),u(D))},m.\u0275cmp=b({type:m,selectors:[["app-post-edit"]],standalone:!0,features:[T],decls:21,vars:1,consts:[[1,"row","page-titles"],[1,"col-md-5","align-self-center"],[1,"text-themecolor"],[1,"col-md-7","align-self-center","text-end"],[1,"d-flex","justify-content-end","align-items-center"],[1,"breadcrumb","justify-content-end"],[1,"breadcrumb-item"],["href","javascript:void(0)"],[1,"breadcrumb-item","active"],[1,"row"],[1,"col-lg-12"],[1,"card"],[1,"card-header","bg-info"],[1,"mb-0","text-white"],[1,"card-body"],[1,"text-center"],[3,"formGroup"],[3,"ngSubmit","formGroup"],[1,"row","pt-3"],[1,"col-md-6"],[1,"form-group"],[1,"form-label"],["formControlName","title","placeholder","Title",1,"form-control"],["class","text-danger",4,"ngIf"],["formControlName","category_id",1,"form-control"],["value",""],[3,"value"],["formControlName","status",1,"form-control"],["value","1"],["value","0"],["formControlName","featured",1,"form-control"],[3,"imgHanle","image"],[1,"col-md-12"],["formControlName","short_description","placeholder","Short Description",1,"form-control"],["formControlName","long_description","apiKey","k0xxzqob8133dq0xmi8vlaaxcmhpjisrkp7pmwtbdxwunkk9",3,"init"],[1,"col-md-12","text-center"],["type","submit",1,"btn","btn-info","text-white",3,"disabled"],[1,"text-danger"]],template:function(d,l){d&1&&(o(0,"div",0)(1,"div",1)(2,"h4",2),n(3,"Edit Destacados"),t()(),o(4,"div",3)(5,"div",4)(6,"ol",5)(7,"li",6)(8,"a",7),n(9,"Home"),t()(),o(10,"li",8),n(11,"Destacados"),t()()()()(),o(12,"div",9)(13,"div",10)(14,"div",11)(15,"div",12)(16,"h4",13),n(17,"Edit Destacados Form"),t()(),o(18,"div",14),v(19,re,2,0,"p",15)(20,fe,63,16,"form",16),t()()()()),d&2&&(a(19),E(l.formLoader?19:20))},dependencies:[w,N,U,A,H,B,q,W,k,R,G,O,$,K,J],encapsulation:2});let i=m;return i})();export{Le as PostEditComponent};