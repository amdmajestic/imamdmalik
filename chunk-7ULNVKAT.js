import{$a as g,Ba as O,Ha as l,K as u,Ka as i,La as r,Ma as S,Qa as b,Ra as d,Sa as y,V as _,Va as M,W as j,_a as c,c as f,fa as P,jb as I,kb as D,na as C,pa as h,qa as a,ra as v,tb as U,wb as T,ya as x}from"./chunk-5T7DFWMV.js";var s=class n{indexField=["/","\\",""];$API_URL="";$ASSETS_PATH="assets";$_SI_PRODUCTS="PRODUCTS_DATA";ofApi(t){return this.$API_URL+t}ofAsset(t){return this.indexField.includes(t[0])&&(t=t.slice(1,t.length)),this.$ASSETS_PATH+"/"+t}static \u0275fac=function(e){return new(e||n)};static \u0275prov=u({token:n,factory:n.\u0275fac,providedIn:"root"})};function A(n,t){if(n&1){let e=b();i(0,"div",3),S(1,"img",4),i(2,"h3"),c(3),r(),i(4,"p"),c(5),r(),i(6,"button",5),d("click",function(){let m=_(e).$implicit,p=y();return j(p.viewProjectDetails(m))}),c(7,"View Details"),r()()}if(n&2){let e=t.$implicit;a(),M("alt",e.title),l("src",e.image,C),a(2),g(e.title),a(2),g(e.description)}}var k=class n{constructor(t){this.env=t;this.apiURL=P(t.ofAsset("/data/projects.json")),this.cachedProjects=sessionStorage.getItem(t.$_SI_PRODUCTS)}apiURL;cachedProjects=null;_projects=[];productDataSignal=D({request:()=>({propertyURL:this.apiURL()}),loader:e=>f(this,[e],function*({request:t}){return this.cachedProjects?Promise.resolve(JSON.parse(this.cachedProjects)):fetch(this.apiURL()).then(o=>o.json()).then(o=>o)})});productDataChange=I(()=>{this.projects?this.projects!=this.productDataSignal.value()&&(this.projects=this.productDataSignal.value()):this.projects=this.productDataSignal.value()});get projects(){return this._projects}set projects(t){sessionStorage.setItem(this.env.$_SI_PRODUCTS,JSON.stringify(t)),this.cachedProjects=JSON.stringify(t),this._projects=t}viewProjectDetails(t){console.log("View details for project:",t)}unloadNotification(){sessionStorage.removeItem(this.env.$_SI_PRODUCTS)}static \u0275fac=function(e){return new(e||n)(v(s))};static \u0275cmp=x({type:n,selectors:[["app-projects"]],hostBindings:function(e,o){e&1&&d("beforeunload",function(p){return o.unloadNotification(p)},!1,h)},decls:5,vars:1,consts:[[1,"projects-container"],[1,"projects-grid"],["class","project-card fade-in",4,"ngFor","ngForOf"],[1,"project-card","fade-in"],["loading","lazy",3,"src","alt"],[3,"click"]],template:function(e,o){e&1&&(i(0,"div",0)(1,"h2"),c(2,"My Projects"),r(),i(3,"div",1),O(4,A,8,4,"div",2),r()()),e&2&&(a(4),l("ngForOf",o.projects))},dependencies:[T,U],styles:[".project-card[_ngcontent-%COMP%]{display:flex;flex-direction:column}.project-card[_ngcontent-%COMP%]{background:#6200ea;-webkit-backdrop-filter:blur(15px);backdrop-filter:blur(15px);border-radius:10px;box-shadow:0 4px 10px #0000001a;padding:20px;transition:all .3s ease;border:1px solid rgba(255,255,255,.1)}.project-card[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background-color:#6200ea;color:#333;padding:10px 30px;border-radius:10px;font-size:16px;border:none;cursor:pointer;transition:transform .3s ease,background-color .3s}.project-card[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{transform:scale(1.05);background-color:#4d00b7}.fade-in[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_fadeIn 1s ease-in-out}.project-card[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_fadeIn 1s ease-in-out;transition:transform .3s ease}.project-card[_ngcontent-%COMP%]:hover{transform:scale(1.05)}@keyframes _ngcontent-%COMP%_fadeIn{0%{opacity:0}to{opacity:1}}[_nghost-%COMP%]{animation:_ngcontent-%COMP%_fadeIn 1s ease-in-out}.projects-container[_ngcontent-%COMP%]{padding:30px}.projects-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:20px}.project-card[_ngcontent-%COMP%]{padding:20px}.project-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:auto;border-radius:10px}.project-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#6200ea;margin-top:10px}.project-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:14px}.project-card[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-top:10px}"]})};export{k as ProjectsComponent};
