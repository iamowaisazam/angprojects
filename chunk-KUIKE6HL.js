import{a as j,n as k}from"./chunk-53CZCGSV.js";import{f as B,g as F}from"./chunk-57FAEB72.js";import{Ba as r,C as y,G as v,Ia as O,J as E,K as h,O as S,S as b,X as D,Z as M,f as C,g as f,ib as _,jb as U,ka as e,la as R,n as g,na as P,ra as I,t as u,tb as A,u as w}from"./chunk-TL672DAF.js";import{a as m,b as p}from"./chunk-4CLCTAJ7.js";var d=()=>{let n=typeof window<"u"?window:void 0;return n&&n.tinymce?n.tinymce:null},L=(()=>{class n{onBeforePaste=new e;onBlur=new e;onClick=new e;onCompositionEnd=new e;onCompositionStart=new e;onCompositionUpdate=new e;onContextMenu=new e;onCopy=new e;onCut=new e;onDblclick=new e;onDrag=new e;onDragDrop=new e;onDragEnd=new e;onDragGesture=new e;onDragOver=new e;onDrop=new e;onFocus=new e;onFocusIn=new e;onFocusOut=new e;onKeyDown=new e;onKeyPress=new e;onKeyUp=new e;onMouseDown=new e;onMouseEnter=new e;onMouseLeave=new e;onMouseMove=new e;onMouseOut=new e;onMouseOver=new e;onMouseUp=new e;onPaste=new e;onSelectionChange=new e;onActivate=new e;onAddUndo=new e;onBeforeAddUndo=new e;onBeforeExecCommand=new e;onBeforeGetContent=new e;onBeforeRenderUI=new e;onBeforeSetContent=new e;onChange=new e;onClearUndos=new e;onDeactivate=new e;onDirty=new e;onExecCommand=new e;onGetContent=new e;onHide=new e;onInit=new e;onInput=new e;onInitNgModel=new e;onLoadContent=new e;onNodeChange=new e;onPostProcess=new e;onPostRender=new e;onPreInit=new e;onPreProcess=new e;onProgressState=new e;onRedo=new e;onRemove=new e;onReset=new e;onResizeEditor=new e;onSaveContent=new e;onSetAttrib=new e;onObjectResizeStart=new e;onObjectResized=new e;onObjectSelected=new e;onSetContent=new e;onShow=new e;onSubmit=new e;onUndo=new e;onVisualAid=new e;static \u0275fac=function(t){return new(t||n)};static \u0275dir=M({type:n,outputs:{onBeforePaste:"onBeforePaste",onBlur:"onBlur",onClick:"onClick",onCompositionEnd:"onCompositionEnd",onCompositionStart:"onCompositionStart",onCompositionUpdate:"onCompositionUpdate",onContextMenu:"onContextMenu",onCopy:"onCopy",onCut:"onCut",onDblclick:"onDblclick",onDrag:"onDrag",onDragDrop:"onDragDrop",onDragEnd:"onDragEnd",onDragGesture:"onDragGesture",onDragOver:"onDragOver",onDrop:"onDrop",onFocus:"onFocus",onFocusIn:"onFocusIn",onFocusOut:"onFocusOut",onKeyDown:"onKeyDown",onKeyPress:"onKeyPress",onKeyUp:"onKeyUp",onMouseDown:"onMouseDown",onMouseEnter:"onMouseEnter",onMouseLeave:"onMouseLeave",onMouseMove:"onMouseMove",onMouseOut:"onMouseOut",onMouseOver:"onMouseOver",onMouseUp:"onMouseUp",onPaste:"onPaste",onSelectionChange:"onSelectionChange",onActivate:"onActivate",onAddUndo:"onAddUndo",onBeforeAddUndo:"onBeforeAddUndo",onBeforeExecCommand:"onBeforeExecCommand",onBeforeGetContent:"onBeforeGetContent",onBeforeRenderUI:"onBeforeRenderUI",onBeforeSetContent:"onBeforeSetContent",onChange:"onChange",onClearUndos:"onClearUndos",onDeactivate:"onDeactivate",onDirty:"onDirty",onExecCommand:"onExecCommand",onGetContent:"onGetContent",onHide:"onHide",onInit:"onInit",onInput:"onInput",onInitNgModel:"onInitNgModel",onLoadContent:"onLoadContent",onNodeChange:"onNodeChange",onPostProcess:"onPostProcess",onPostRender:"onPostRender",onPreInit:"onPreInit",onPreProcess:"onPreProcess",onProgressState:"onProgressState",onRedo:"onRedo",onRemove:"onRemove",onReset:"onReset",onResizeEditor:"onResizeEditor",onSaveContent:"onSaveContent",onSetAttrib:"onSetAttrib",onObjectResizeStart:"onObjectResizeStart",onObjectResized:"onObjectResized",onObjectSelected:"onObjectSelected",onSetContent:"onSetContent",onShow:"onShow",onSubmit:"onSubmit",onUndo:"onUndo",onVisualAid:"onVisualAid"}})}return n})(),N=["onActivate","onAddUndo","onBeforeAddUndo","onBeforeExecCommand","onBeforeGetContent","onBeforeRenderUI","onBeforeSetContent","onBeforePaste","onBlur","onChange","onClearUndos","onClick","onCompositionEnd","onCompositionStart","onCompositionUpdate","onContextMenu","onCopy","onCut","onDblclick","onDeactivate","onDirty","onDrag","onDragDrop","onDragEnd","onDragGesture","onDragOver","onDrop","onExecCommand","onFocus","onFocusIn","onFocusOut","onGetContent","onHide","onInit","onInput","onKeyDown","onKeyPress","onKeyUp","onLoadContent","onMouseDown","onMouseEnter","onMouseLeave","onMouseMove","onMouseOut","onMouseOver","onMouseUp","onNodeChange","onObjectResizeStart","onObjectResized","onObjectSelected","onPaste","onPostProcess","onPostRender","onPreProcess","onProgressState","onRedo","onRemove","onReset","onResizeEditor","onSaveContent","onSelectionChange","onSetAttrib","onSetContent","onShow","onSubmit","onUndo","onVisualAid"],l=(n,i,o)=>u(n,i).pipe(h(o)),G=(n,i,o)=>{$(n).forEach(s=>{let a=n[s];l(i,s.substring(2),o).subscribe(c=>{q(a)&&n.ngZone.run(()=>a.emit({event:c,editor:i}))})})},$=n=>{let i=x(n.ignoreEvents,[]);return x(n.allowedEvents,N).filter(t=>N.includes(t)&&!i.includes(t))},x=(n,i)=>typeof n=="string"?n.split(",").map(o=>o.trim()):Array.isArray(n)?n:i,K=0,Z=n=>{let o=new Date().getTime(),t=Math.floor(Math.random()*1e9);return K++,n+"_"+t+K+String(o)},T=n=>typeof n<"u"&&n.tagName.toLowerCase()==="textarea",z=n=>typeof n>"u"||n===""?[]:Array.isArray(n)?n:n.split(" "),H=(n,i)=>z(n).concat(z(i)),Y=()=>{},V=n=>n==null,q=n=>n.observed||n.observers?.length>0,J=()=>n=>n.pipe(y(),g(()=>{})),Q=()=>{let n=new f(null),i=n.pipe(w(Boolean),E(([o,t])=>{let s=o.createElement("script");return s.referrerPolicy="origin",s.type="application/javascript",s.src=t,o.head.appendChild(s),u(s,"load").pipe(J())}),v({bufferSize:1,refCount:!0}));return{load:(...o)=>(n.getValue()||n.next(o),i),reinitialize:()=>{n.next(null)}}},W=Q(),X=new b("TINYMCE_SCRIPT_SRC"),ee={provide:j,useExisting:S(()=>ne),multi:!0},ne=(()=>{class n extends L{cdRef;platformId;tinymceScriptSrc;cloudChannel="7";apiKey="no-api-key";licenseKey;init;id="";initialValue;outputFormat;inline;tagName;plugins;toolbar;modelEvents="change input undo redo";allowedEvents;ignoreEvents;set disabled(o){this._disabled=o,this._editor&&this._editor.initialized&&(typeof this._editor.mode?.set=="function"?this._editor.mode.set(o?"readonly":"design"):this._editor.setMode(o?"readonly":"design"))}get disabled(){return this._disabled}get editor(){return this._editor}ngZone;_elementRef;_element;_disabled;_editor;onTouchedCallback=Y;onChangeCallback;destroy$=new C;constructor(o,t,s,a,c){super(),this.cdRef=s,this.platformId=a,this.tinymceScriptSrc=c,this._elementRef=o,this.ngZone=t}writeValue(o){this._editor&&this._editor.initialized?this._editor.setContent(V(o)?"":o):this.initialValue=o===null?void 0:o}registerOnChange(o){this.onChangeCallback=o}registerOnTouched(o){this.onTouchedCallback=o}setDisabledState(o){this.disabled=o}ngAfterViewInit(){F(this.platformId)&&(this.id=this.id||Z("tiny-angular"),this.inline=this.inline!==void 0?this.inline!==!1:!!this.init?.inline,this.createElement(),d()!==null?this.initialise():this._element&&this._element.ownerDocument&&W.load(this._element.ownerDocument,this.getScriptSrc()).pipe(h(this.destroy$)).subscribe(this.initialise))}ngOnDestroy(){this.destroy$.next(),d()!==null&&d().remove(this._editor)}createElement(){let o=typeof this.tagName=="string"?this.tagName:"div";if(this._element=document.createElement(this.inline?o:"textarea"),this._element){let t=document.getElementById(this.id);t&&t!==this._elementRef.nativeElement&&console.warn(`TinyMCE-Angular: an element with id [${this.id}] already exists. Editors with duplicate Id will not be able to mount`),this._element.id=this.id,T(this._element)&&(this._element.style.visibility="hidden"),this._elementRef.nativeElement.appendChild(this._element)}}initialise=()=>{let o=p(m({},this.init),{selector:void 0,target:this._element,inline:this.inline,readonly:this.disabled,license_key:this.licenseKey,plugins:H(this.init&&this.init.plugins,this.plugins),toolbar:this.toolbar||this.init&&this.init.toolbar,setup:t=>{this._editor=t,l(t,"init",this.destroy$).subscribe(()=>{this.initEditor(t)}),G(this,t,this.destroy$),this.init&&typeof this.init.setup=="function"&&this.init.setup(t)}});T(this._element)&&(this._element.style.visibility=""),this.ngZone.runOutsideAngular(()=>{d().init(o)})};getScriptSrc(){return V(this.tinymceScriptSrc)?`https://cdn.tiny.cloud/1/${this.apiKey}/tinymce/${this.cloudChannel}/tinymce.min.js`:this.tinymceScriptSrc}initEditor(o){l(o,"blur",this.destroy$).subscribe(()=>{this.cdRef.markForCheck(),this.ngZone.run(()=>this.onTouchedCallback())}),l(o,this.modelEvents,this.destroy$).subscribe(()=>{this.cdRef.markForCheck(),this.ngZone.run(()=>this.emitOnChange(o))}),typeof this.initialValue=="string"&&this.ngZone.run(()=>{o.setContent(this.initialValue),o.getContent()!==this.initialValue&&this.emitOnChange(o),this.onInitNgModel!==void 0&&this.onInitNgModel.emit(o)})}emitOnChange(o){this.onChangeCallback&&this.onChangeCallback(o.getContent({format:this.outputFormat}))}static \u0275fac=function(t){return new(t||n)(r(P),r(R),r(A),r(I),r(X,8))};static \u0275cmp=D({type:n,selectors:[["editor"]],inputs:{cloudChannel:"cloudChannel",apiKey:"apiKey",licenseKey:"licenseKey",init:"init",id:"id",initialValue:"initialValue",outputFormat:"outputFormat",inline:"inline",tagName:"tagName",plugins:"plugins",toolbar:"toolbar",modelEvents:"modelEvents",allowedEvents:"allowedEvents",ignoreEvents:"ignoreEvents",disabled:"disabled"},standalone:!0,features:[_([ee]),O,U],decls:0,vars:0,template:function(t,s){},dependencies:[B,k],styles:["[_nghost-%COMP%]{display:block}"],changeDetection:0})}return n})();export{ne as a};
