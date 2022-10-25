(function(){"use strict";var t={946:function(t,s,e){var i=e(9242),a=e(3396);function o(t,s,e,i,o,n){return(0,a.wg)(),(0,a.j4)((0,a.LL)(o.component),{onRefresh:n.checkSession,key:o.key},null,40,["onRefresh"])}const n={class:"container-fluid bg-primary border-bottom"},l={key:0},r={class:"row p-1"},c={class:"col-10"},d=["src"],p=["src"],u={class:"col-2"};function h(t,s,e,i,o,h){const m=(0,a.up)("NewCardModal");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a._)("div",n,[o.open?((0,a.wg)(),(0,a.iD)("div",l,[(0,a.Wm)(m,{onCloseModal:h.onCloseModal,onCartaoCriado:h.onCartaoCriado},null,8,["onCloseModal","onCartaoCriado"])])):(0,a.kq)("",!0),(0,a._)("div",r,[(0,a._)("div",c,[(0,a._)("img",{class:"d-none d-md-inline",src:o.logo_jingleshopp,style:{width:"90px"}},null,8,d),(0,a._)("img",{src:o.logo_audiocard,style:{width:"120px"}},null,8,p),(0,a._)("button",{onClick:s[0]||(s[0]=t=>o.open=!0),class:"btn btn-dark mt-lg-1 ms-2"},"+ novo card")]),(0,a._)("div",u,[(0,a._)("button",{onClick:s[1]||(s[1]=(...t)=>h.sair&&h.sair(...t)),class:"btn btn-dark mt-lg-3",style:{float:"right"}},"sair")])])]),((0,a.wg)(),(0,a.j4)((0,a.LL)(o.component),{key:o.k}))],64)}const m={class:"container-fluid"},g=(0,a.uE)('<div class="row justify-content-center" style="margin-top:40px;" data-v-4cf9d7b6><div class="col-12 text-center pb-3" style="height:100px;" data-v-4cf9d7b6><div class="animation d-block mx-auto" data-v-4cf9d7b6><div class="load-i load-time1" data-v-4cf9d7b6></div><div class="load-i load-time2" data-v-4cf9d7b6></div><div class="load-i load-time3" data-v-4cf9d7b6></div></div></div></div>',1),_=[g];function v(t,s){return(0,a.wg)(),(0,a.iD)("div",m,_)}var f=e(89);const b={},y=(0,f.Z)(b,[["render",v],["__scopeId","data-v-4cf9d7b6"]]);var w=y,x=e(7139);const k={class:"container-fluid"},C={key:0},S={key:1},E={key:2},j={key:0},D=(0,a._)("div",{class:"row py-1 justify-content-center"},[(0,a._)("div",{class:"col-12 col-md-8 col-md-6 mt-3"},[(0,a._)("div",{class:"card shadow p-2 text-center"}," Nenhum cartão adicionado ")])],-1),O=[D],T={key:1},$={class:"row py-1"},L={class:"card shadow p-2"},q={class:"text-start py-0 my-0"},N=["src"],z={class:"text-start py-0 my-0"},F=["src"],U={class:"text-start py-0 my-0"},M=["src"],J={class:"text-start py-0 my-0"},P=["src"],V=["onClick"];function A(t,s,e,i,o,n){const l=(0,a.up)("OpenCardModal"),r=(0,a.up)("Loading");return(0,a.wg)(),(0,a.iD)("div",k,[o.open?((0,a.wg)(),(0,a.iD)("div",C,[((0,a.wg)(),(0,a.j4)(l,{key:o.k,card:o.card,onClosedCard:n.onClosedCard,onDeletedCard:n.onDeletedCard},null,8,["card","onClosedCard","onDeletedCard"]))])):(0,a.kq)("",!0),o.loading?((0,a.wg)(),(0,a.iD)("div",S,[(0,a.Wm)(r)])):((0,a.wg)(),(0,a.iD)("div",E,[0==o.cards.length?((0,a.wg)(),(0,a.iD)("div",j,O)):((0,a.wg)(),(0,a.iD)("div",T,[(0,a._)("div",$,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(o.cards,((t,s)=>((0,a.wg)(),(0,a.iD)("div",{class:"col-12 col-md-6 col-lg-3 text-center my-2",key:s},[(0,a._)("div",L,[(0,a._)("h4",null,(0,x.zw)(t.titulo),1),(0,a._)("p",q,[(0,a._)("img",{style:{width:"30px"},src:o.person_ic},null,8,N),(0,a._)("span",null,(0,x.zw)(t.pessoa),1)]),(0,a._)("p",z,[(0,a._)("img",{style:{width:"30px"},src:o.email_ic},null,8,F),(0,a._)("span",null,(0,x.zw)(t.email),1)]),(0,a._)("p",U,[(0,a._)("img",{style:{width:"30px"},src:o.audio_ic},null,8,M),(0,a._)("span",null,(0,x.zw)(t.total_files),1)]),(0,a._)("p",J,[(0,a._)("img",{style:{width:"30px"},src:o.version_ic},null,8,P),(0,a._)("span",null,(0,x.zw)(t.version),1)]),(0,a._)("p",{class:(0,x.C_)("text-start py-0 my-0 "+(1==t.email_enviado?"text-success":"text-danger"))},[(0,a._)("span",null,(0,x.zw)(1==t.email_enviado?"email enviado":"email não enviado"),1)],2),(0,a._)("button",{onClick:t=>n.openCard(s),class:"btn btn-primary"},"abrir",8,V)])])))),128))])]))]))])}const Z=t=>((0,a.dD)("data-v-5f1be23f"),t=t(),(0,a.Cn)(),t),H={class:"modal"},W={key:0},G={class:"alert alert-success text-center",role:"alert",style:{position:"fixed","z-index":"999999999",left:"20%",rigth:"20%",width:"60%",top:"1%"}},R={key:1},I={class:"alert bg-danger text-white text-center",role:"alert",style:{position:"fixed","z-index":"999999999",left:"20%",rigth:"20%",width:"60%",top:"1%"}},Y={key:2},B={class:"modal-content"},K={class:"container"},Q={class:"row"},X={class:"col-6"},tt={class:"col-6"},st={class:"container"},et={class:"row"},it=Z((()=>(0,a._)("div",{class:"col-12"},[(0,a._)("h5",null,"Dados:")],-1))),at={class:"col-12"},ot={class:"input-group mb-3"},nt={class:"input-group-text",id:"basic-addon1"},lt=["src"],rt={class:"input-group mb-3"},ct={class:"input-group-text",id:"basic-addon1"},dt=["src"],pt={class:"col-12 mt-4"},ut=Z((()=>(0,a._)("h5",null,"Arquivos:",-1))),ht={key:0},mt={class:"row"},gt={class:"card text-center p-2"},_t=["src"],vt={style:{width:"50px",padding:"10px","border-radius":"100px"},class:"btn btn-danger d-block mx-auto"},ft=["onClick","src"],bt={key:1},yt=Z((()=>(0,a._)("div",{class:"row"},[(0,a._)("div",{class:"col-12"},[(0,a._)("div",{class:"card text-center p-2"},[(0,a._)("h3",null,"0 arquivos")])])],-1))),wt=[yt],xt={class:"col-12 mt-2"},kt=Z((()=>(0,a._)("h5",null,"Ações:",-1))),Ct={class:"row border-bottom py-3"},St={class:"col-10"},Et={class:"mb-3"},jt=Z((()=>(0,a._)("label",{for:"formFileMultiple",class:"form-label"},"Adicionar Arquivos",-1))),Dt=["value"],Ot={class:"col-2 pt-4"},Tt={class:"row border-bottom py-3"},$t={class:"col-12"},Lt={class:"input-group mb-3"},qt={class:"row py-3 border-bottom"},Nt={class:"col-12"},zt=Z((()=>(0,a._)("label",{for:"formFileMultiple",class:"form-label"},"Alterar Versão",-1))),Ft={style:{width:"100px"},class:"input-group mb-3"},Ut={class:"row py-3"},Mt={key:0,class:"col-12"},Jt=Z((()=>(0,a._)("p",{class:"text-start py-0 my-0 text-success"},[(0,a._)("span",null,"email enviado")],-1))),Pt=[Jt],Vt={key:1,class:"col-12"},At=Z((()=>(0,a._)("p",{class:"text-start py-0 my-0 text-danger"},[(0,a._)("span",null,"email não enviado")],-1))),Zt=[At],Ht={class:"col-12"},Wt={class:"row py-3"},Gt={class:"col"},Rt={style:{width:"100px",padding:"10px","border-radius":"100px",float:"right"},class:"btn btn-danger"},It=["src"];function Yt(t,s,e,o,n,l){const r=(0,a.up)("LoadingModal");return(0,a.wg)(),(0,a.iD)("div",H,[n.alertSuccess?((0,a.wg)(),(0,a.iD)("div",W,[(0,a._)("div",G,(0,x.zw)(n.alertTextSuccess),1)])):(0,a.kq)("",!0),n.alertError?((0,a.wg)(),(0,a.iD)("div",R,[(0,a._)("div",I,(0,x.zw)(n.alertTextError),1)])):(0,a.kq)("",!0),n.actionStart?((0,a.wg)(),(0,a.iD)("div",Y,[(0,a.Wm)(r)])):(0,a.kq)("",!0),(0,a._)("div",B,[(0,a._)("div",K,[(0,a._)("div",Q,[(0,a._)("div",X,[(0,a._)("h2",null,(0,x.zw)(e.card.titulo),1)]),(0,a._)("div",tt,[(0,a._)("span",{onClick:s[0]||(s[0]=(...t)=>l.close&&l.close(...t)),class:"close text-end"},"×")])])]),(0,a._)("div",st,[(0,a._)("div",et,[it,(0,a._)("div",at,[(0,a._)("div",ot,[(0,a._)("span",nt,[(0,a._)("img",{src:n.person_ic,style:{width:"30px"}},null,8,lt)]),(0,a.wy)((0,a._)("input",{type:"text",class:"form-control","onUpdate:modelValue":s[1]||(s[1]=t=>n.nome=t),"aria-describedby":"basic-addon1"},null,512),[[i.nr,n.nome]])]),(0,a._)("div",rt,[(0,a._)("span",ct,[(0,a._)("img",{src:n.email_ic,style:{width:"30px"}},null,8,dt)]),(0,a.wy)((0,a._)("input",{type:"text",class:"form-control","onUpdate:modelValue":s[2]||(s[2]=t=>n.email=t),"aria-describedby":"basic-addon1"},null,512),[[i.nr,n.email]])]),(0,a._)("button",{onClick:s[3]||(s[3]=(...t)=>l.update&&l.update(...t)),class:"btn btn-success"},"Salvar Alterações")]),(0,a._)("div",pt,[ut,n.files.length>0?((0,a.wg)(),(0,a.iD)("div",ht,[(0,a._)("div",mt,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(n.files,((t,s)=>((0,a.wg)(),(0,a.iD)("div",{class:"col-12 col-md-6 col-lg-4 my-2",key:s},[(0,a._)("div",gt,[(0,a._)("img",{class:"mx-auto d-block",src:n.file_icon,style:{width:"50px"}},null,8,_t),(0,a._)("p",null,(0,x.zw)(t.nome),1),(0,a._)("button",vt,[(0,a._)("img",{onClick:s=>l.deleteFile(t.id),src:n.delete_ic,style:{width:"20px"},alt:""},null,8,ft)])])])))),128))])])):((0,a.wg)(),(0,a.iD)("div",bt,wt))]),(0,a._)("div",xt,[kt,(0,a._)("div",Ct,[(0,a._)("div",St,[(0,a._)("div",Et,[jt,(0,a._)("input",{value:n.val,accept:"audio/*",onChange:s[4]||(s[4]=(...t)=>l.setFiles&&l.setFiles(...t)),class:"form-control",type:"file",id:"formFileMultiple",multiple:""},null,40,Dt)])]),(0,a._)("div",Ot,[(0,a._)("button",{onClick:s[5]||(s[5]=(...t)=>l.uploadFiles&&l.uploadFiles(...t)),class:"btn btn-success mt-2"}," + ")])]),(0,a._)("div",Tt,[(0,a._)("div",$t,[(0,a._)("div",Lt,[(0,a._)("button",{onClick:s[6]||(s[6]=(...t)=>l.gerarLink&&l.gerarLink(...t)),class:"btn btn-success"}," gerar link "),(0,a.wy)((0,a._)("input",{"onUpdate:modelValue":s[7]||(s[7]=t=>n.linkGerado=t),type:"text",class:"form-control",readonly:""},null,512),[[i.nr,n.linkGerado]])])])]),(0,a._)("div",qt,[(0,a._)("div",Nt,[zt,(0,a._)("div",Ft,[(0,a.wy)((0,a._)("input",{type:"text",class:"form-control text-end","onUpdate:modelValue":s[8]||(s[8]=t=>n.version=t),readonly:""},null,512),[[i.nr,n.version]]),(0,a._)("button",{onClick:s[9]||(s[9]=(...t)=>l.changeVersion&&l.changeVersion(...t)),class:"btn btn-success"}," + ")])])]),(0,a._)("div",Ut,[n.statusEmail?((0,a.wg)(),(0,a.iD)("div",Mt,Pt)):((0,a.wg)(),(0,a.iD)("div",Vt,Zt)),(0,a._)("div",Ht,[(0,a._)("button",{onClick:s[10]||(s[10]=(...t)=>l.enviarEmail&&l.enviarEmail(...t)),class:"btn btn-success"}," Enviar e-mail ")])]),(0,a._)("div",Wt,[(0,a._)("div",Gt,[(0,a._)("button",Rt,[(0,a._)("img",{onClick:s[11]||(s[11]=t=>l.deleteCard()),src:n.delete_ic,style:{width:"40px"},alt:""},null,8,It)])])])])])])])])}e(7658),e(3408),e(4590);var Bt=e(5361);const Kt={class:"modal"},Qt={class:"modal-content"},Xt={class:"container-fluid"},ts={class:"row justify-content-center"},ss={class:"col-12 col-md-6"};function es(t,s,e,i,o,n){const l=(0,a.up)("LoadingComponent");return(0,a.wg)(),(0,a.iD)("div",Kt,[(0,a._)("div",Qt,[(0,a._)("div",Xt,[(0,a._)("div",ts,[(0,a._)("div",ss,[(0,a.Wm)(l)])])])])])}var is={components:{LoadingComponent:w}};const as=(0,f.Z)(is,[["render",es],["__scopeId","data-v-a883e620"]]);var os=as,ns={components:{LoadingModal:os},props:{open:Boolean,card:Object},created(){this.getFiles()},data(){return{changed:!1,alertSuccess:!1,alertError:!1,alertTextError:"",alertTextSuccess:"",statusEmail:1==this.card.email_enviado,version:this.card.version,nome:this.card.pessoa,email:this.card.email,linkGerado:"",val:"",filesToUp:[],files:[],actionStart:!1,file_icon:"/public/imagens/file_design_icon.jpg",delete_ic:"/public/imagens/delete_ic_white.png",person_ic:"/public/imagens/person_ic.png",audio_ic:"/public/imagens/audio_ic.png",email_ic:"/public/imagens/email_ic.png",version_ic:"/public/imagens/version_ic.png"}},methods:{async enviarEmail(){this.actionStart=!0;let t=await fetch("http://jingleshopp.com/api/mail/send/"+this.card.id,{method:"post",body:JSON.stringify({session:this.$get_session()})});200==t.status?(this.showSuccess("Email enviado com sucesso!"),this.statusEmail||(this.changed=!0,this.statusEmail=!0)):this.showError("Ocorreu um erro ao enviar o email. Error:"+t.status),this.actionStart=!1},async update(){this.actionStart=!0;let t=await fetch("http://jingleshopp.com/api/card/update/"+this.card.id,{method:"post",body:JSON.stringify({session:this.$get_session(),pessoa:this.nome,email:this.email})});200==t.status?(this.showSuccess("Dados alterados com sucesso"),this.changed=!0):this.showError("Ocorreu um erro ao tentar alterar os dados. Error:"+t.status),this.actionStart=!1},setFiles(t){this.filesToUp=t.target.files},showError(t){this.alertTextError=t,this.alertError=!0,setTimeout((()=>this.alertError=!1),3e3)},showSuccess(t){this.alertTextSuccess=t,this.alertSuccess=!0,setTimeout((()=>this.alertSuccess=!1),3e3)},async changeVersion(){this.actionStart=!0;let t=await fetch("http://jingleshopp.com/api/card/changeVersion/"+this.card.id,{method:"post",body:JSON.stringify({session:this.$get_session()})});200==t.status&&(this.showSuccess("Nova versão gerada"),this.linkGerado="",this.version++),this.actionStart=!1,this.changed=!0},async gerarLink(){this.actionStart=!0;let t=await fetch("http://jingleshopp.com/api/card/gerarLink/"+this.card.id,{method:"post",body:JSON.stringify({session:this.$get_session()})});200==t.status&&(this.linkGerado=(await t.json()).data),this.actionStart=!1},async deleteFile(t){this.actionStart=!0;let s=await fetch("http://jingleshopp.com/api/files/delete",{method:"post",body:JSON.stringify({session:this.$get_session(),file_id:t})});200==s.status&&await this.getFiles(),this.actionStart=!1,this.changed=!0},async getFiles(){this.actionStart=!0;let t=await fetch("http://jingleshopp.com/api/files/list_files_card",{method:"post",body:JSON.stringify({session:this.$get_session(),card_id:this.card.id})});this.files=(await t.json()).data,this.actionStart=!1},async uploadFiles(){if(0==this.filesToUp.length)return;this.actionStart=!0;const t=[];for(let s=0;s<this.filesToUp.length;s++){const e=this.filesToUp[s],i={};let a=e.name.split(".");i.mime=a[a.length-1],i.name=e.name.substring(0,e.name.length-(i.mime.length+1)),i.file="";const o=4799999;let n=0,l=e.size>o?o:e.size,r=!0,c=!0,d=!1,p=!0;await(async()=>{while(p)if(r){if(await new Promise((t=>setTimeout(t,1e3))),i.slug=await this.request____create_ghost_file(i),c=!1!==i.slug,!c)return void t.push(i.name);r=!1}else{if(c&&d)return c=await this.request____commit_file(i),void(c||t.push(i.name));await new Promise((t=>{const s=new FileReader;s.onerror=()=>{c=!1},s.onload=async s=>{const e=s.target.result,a=Bt.lW.alloc(e.byteLength),o=new Uint8Array(e);await new Promise((t=>setTimeout(t,1e3)));for(let t=0;t<a.length;++t)a[t]=o[t];let n=a.toString("base64");i.file=n;let l=await this.request____append_file(i);c=l,t()};let a=e.slice(n,l);s.readAsArrayBuffer(a)})),n=l,l+=o,l>=e.size&&(d=!0,l=e.size)}c||t.push(i.name)})()}t.length>0&&this.showError("Não foi possível adicionar um ou mais arquivos."),this.setFiles({target:{files:[]}}),await this.getFiles(),this.actionStart=!1,this.showSuccess("Arquivo inserido com sucesso."),this.changed=!0},async request____create_ghost_file(t){t.session=this.$get_session();let s=await fetch("http://jingleshopp.com/api/files/create",{method:"post",body:JSON.stringify(t)});return 200==s.status&&(console.log("create",s.status),(await s.json()).data.slug)},async request____append_file(t){t.session=this.$get_session();let s=await fetch("http://jingleshopp.com/api/files/append",{method:"post",body:JSON.stringify(t)});return console.log("append",s.status),200==s.status},async request____commit_file(t){t.session=this.$get_session(),t.card_id=this.card.id;let s=await fetch("http://jingleshopp.com/api/files/commit",{method:"post",body:JSON.stringify(t)});return console.log("commit",s.status),200==s.status},close(){this.$emit("closedCard",this.changed)},async deleteCard(){let t=await fetch("http://jingleshopp.com/api/card/delete/"+this.card.id,{method:"post",body:JSON.stringify({session:this.$get_session()})});200==t.status&&this.$emit("deletedCard")}}};const ls=(0,f.Z)(ns,[["render",Yt],["__scopeId","data-v-5f1be23f"]]);var rs=ls,cs={components:{OpenCardModal:rs,Loading:w},async created(){this.getCards()},data(){return{k:0,loading:!0,open:!1,cards:[],card:{},person_ic:"/public/imagens/person_ic.png",audio_ic:"/public/imagens/audio_ic.png",email_ic:"/public/imagens/email_ic.png",version_ic:"/public/imagens/version_ic.png"}},methods:{onClosedCard(t=!1){this.open=!1,t&&this.getCards()},onDeletedCard(){this.open=!1,this.getCards()},openCard(t){this.card=this.cards[t],this.k++,this.open=!0},async getCards(){this.loading=!0;let t=await fetch("http://jingleshopp.com/api/card/list_cards",{method:"post",body:JSON.stringify({session:this.$get_session()})});this.cards=(await t.json()).data,this.loading=!1}}};const ds=(0,f.Z)(cs,[["render",A]]);var ps=ds;const us=t=>((0,a.dD)("data-v-26c8dbe6"),t=t(),(0,a.Cn)(),t),hs={class:"modal"},ms={key:0},gs={class:"alert alert-error text-center bg-danger text-white",role:"alert",style:{position:"fixed","z-index":"999999999",left:"20%",rigth:"20%",width:"60%",top:"1%"}},_s={class:"modal-content"},vs={class:"container"},fs={class:"row"},bs=us((()=>(0,a._)("div",{class:"col-6"},[(0,a._)("h2",null,"Novo Card")],-1))),ys={class:"col-6"},ws={class:"row"},xs={class:"col-12"},ks={class:"input-group mb-3"},Cs=us((()=>(0,a._)("span",{class:"input-group-text",id:"basic-addon1"},"+",-1))),Ss={class:"input-group mb-3"},Es={class:"input-group-text",id:"basic-addon1"},js=["src"],Ds={class:"input-group mb-3"},Os={class:"input-group-text",id:"basic-addon1"},Ts=["src"];function $s(t,s,e,o,n,l){return(0,a.wg)(),(0,a.iD)("div",hs,[n.alertError?((0,a.wg)(),(0,a.iD)("div",ms,[(0,a._)("div",gs,(0,x.zw)(n.alertTextError),1)])):(0,a.kq)("",!0),(0,a._)("div",_s,[(0,a._)("div",vs,[(0,a._)("div",fs,[bs,(0,a._)("div",ys,[(0,a._)("span",{onClick:s[0]||(s[0]=(...t)=>l.close&&l.close(...t)),class:"close text-end"},"×")])])]),(0,a._)("div",ws,[(0,a._)("div",xs,[(0,a._)("div",ks,[Cs,(0,a.wy)((0,a._)("input",{"onUpdate:modelValue":s[1]||(s[1]=t=>n.titulo=t),type:"text",class:"form-control",placeholder:"titulo","aria-describedby":"basic-addon1"},null,512),[[i.nr,n.titulo]])]),(0,a._)("div",Ss,[(0,a._)("span",Es,[(0,a._)("img",{src:n.person_ic,style:{width:"30px"}},null,8,js)]),(0,a.wy)((0,a._)("input",{"onUpdate:modelValue":s[2]||(s[2]=t=>n.pessoa=t),type:"text",class:"form-control",placeholder:"nome da pessoa","aria-describedby":"basic-addon1"},null,512),[[i.nr,n.pessoa]])]),(0,a._)("div",Ds,[(0,a._)("span",Os,[(0,a._)("img",{src:n.email_ic,style:{width:"30px"}},null,8,Ts)]),(0,a.wy)((0,a._)("input",{"onUpdate:modelValue":s[3]||(s[3]=t=>n.email=t),type:"text",class:"form-control",placeholder:"email da pessoa","aria-describedby":"basic-addon1"},null,512),[[i.nr,n.email]])]),(0,a._)("button",{onClick:s[4]||(s[4]=(...t)=>l.salvar&&l.salvar(...t)),class:"btn btn-success"},"Salvar")])])])])}var Ls={data(){return{alertError:!1,alertTextError:"",titulo:"",pessoa:"",email:"",person_ic:"/public/imagens/person_ic.png",email_ic:"/public/imagens/email_ic.png"}},methods:{showError(t){this.alertError=!0,this.alertTextError=t,setTimeout((()=>{this.alertError=!1}),3e3)},close(){this.$emit("closeModal")},async salvar(){""!=this.titulo.trim()&&""!=this.pessoa.trim()&&""!=this.email.trim()||this.showError("Há campos vazios!");let t=await fetch("http://jingleshopp.com/api/card/create",{method:"post",body:JSON.stringify({session:this.$get_session(),titulo:this.titulo,pessoa:this.pessoa,email:this.email})});200==t.status&&this.$emit("cartaoCriado"),this.showError("Não foi possível salvar o cartão. Erro: "+t.status)}}};const qs=(0,f.Z)(Ls,[["render",$s],["__scopeId","data-v-26c8dbe6"]]);var Ns=qs,zs={components:{Loading:w,ListCardsComponents:ps,NewCardModal:Ns},data(){return{k:0,open:!1,component:"ListCardsComponents",logo_jingleshopp:"/public/imagens/logo_jingleshopp.png",logo_audiocard:"/public/imagens/audiocard_logo.png",logo_sotaque:"/public/imagens/logo_sotaque.png"}},methods:{onCloseModal(){this.open=!1},onCartaoCriado(){this.k++,this.open=!1},sair(){this.$close_session(),location.reload(!0)}}};const Fs=(0,f.Z)(zs,[["render",h]]);var Us=Fs;const Ms={class:"container-fluid bg-primary",style:{height:"1000px"}},Js={class:"row justify-content-center"},Ps=(0,a._)("div",{class:"col-8 col-md-2"},[(0,a._)("h5",{class:"p-3 bg-black text-center text-white"},"carregando...")],-1);function Vs(t,s,e,i,o,n){const l=(0,a.up)("Loading");return(0,a.wg)(),(0,a.iD)("div",Ms,[(0,a._)("div",Js,[(0,a.Wm)(l),Ps])])}var As={components:{Loading:w}};const Zs=(0,f.Z)(As,[["render",Vs]]);var Hs=Zs;const Ws={class:"container-fluid bg-primary",style:{height:"1000px"}},Gs={key:0},Rs=(0,a._)("div",{class:"alert bg-danger text-white text-center",role:"alert",style:{position:"fixed","z-index":"999999999",left:"20%",rigth:"20%",width:"60%",top:"1%"}}," Email e/ou senha estão incorretos ",-1),Is=[Rs],Ys={class:"row"},Bs={class:"col-12"},Ks=["src"],Qs={class:"col-12"},Xs=["src"],te={class:"row justify-content-center"},se={class:"col-11 col-md-6 col-lg-4 p-4 bg-black mt-4",style:{"border-radius":"20px"}},ee={class:"mb-3"},ie=(0,a._)("label",{for:"input1",class:"form-label"},[(0,a._)("span",{class:"text-white"},"Email:")],-1),ae={class:"mb-3"},oe=(0,a._)("label",{for:"input2",class:"form-label"},[(0,a._)("span",{class:"text-white"},"senha:")],-1),ne={class:"mb-3"},le={class:"row"},re=["src"];function ce(t,s,e,o,n,l){return(0,a.wg)(),(0,a.iD)("div",Ws,[n.alertError?((0,a.wg)(),(0,a.iD)("div",Gs,Is)):(0,a.kq)("",!0),(0,a._)("div",Ys,[(0,a._)("div",Bs,[(0,a._)("img",{class:"d-block mx-auto",src:n.logo_jingleshopp,alt:""},null,8,Ks)]),(0,a._)("div",Qs,[(0,a._)("img",{class:"d-block mx-auto",src:n.logo_audiocard,alt:""},null,8,Xs)])]),(0,a._)("div",te,[(0,a._)("div",se,[(0,a._)("div",ee,[ie,(0,a.wy)((0,a._)("input",{"onUpdate:modelValue":s[0]||(s[0]=t=>n.email=t),type:"email",class:"form-control bg-dark text-white",style:{border:"0px"},id:"input1",placeholder:"name@example.com"},null,512),[[i.nr,n.email]])]),(0,a._)("div",ae,[oe,(0,a.wy)((0,a._)("input",{"onUpdate:modelValue":s[1]||(s[1]=t=>n.senha=t),type:"password",class:"form-control bg-dark text-white",style:{border:"0px"},id:"input2",placeholder:"******"},null,512),[[i.nr,n.senha]])]),(0,a._)("div",ne,[(0,a._)("button",{onClick:s[2]||(s[2]=(...t)=>l.verify&&l.verify(...t)),class:"btn btn-primary mx-auto d-block"},"ENTRAR")])])]),(0,a._)("div",le,[(0,a._)("img",{style:{width:"300px"},class:"mx-auto d-block",src:n.logo_sotaque,alt:""},null,8,re)])])}var de={data(){return{alertError:!1,email:"",senha:"",logo_jingleshopp:"/public/imagens/logo_jingleshopp.png",logo_audiocard:"/public/imagens/audiocard_logo.png",logo_sotaque:"/public/imagens/logo_sotaque.png"}},methods:{async verify(){let t=await fetch("http://jingleshopp.com/api/auth/admin_login",{method:"post",body:JSON.stringify({email:this.email,senha:this.senha})});if(200==t.status){let s=(await t.json()).data.session;this.$set_session(s),this.$emit("refresh")}else this.alertError=!0,setTimeout((()=>{this.alertError=!1}),3e3)}}};const pe=(0,f.Z)(de,[["render",ce]]);var ue=pe,he={components:{HomePage:Us,LoadingPage:Hs,LoginPage:ue},data(){return{session:"",component:"LoadingPage",key:0}},async created(){this.checkSession()},methods:{checkSession(){this.$get_session()?this.component="HomePage":this.component="LoginPage"}}};const me=(0,f.Z)(he,[["render",o]]);var ge=me,_e={install:function(t){const s="session_admin_audiocard";let e=!1;function i(){document.cookie=`${s}=; Max-Age=-99999999; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`}function a(t=""){e||""!=t?function(){const i=new Date;i.setTime(i.getTime()+3456e7);let a="expires="+i.toUTCString();document.cookie=s+"="+(e||t)+";"+a+";path=/"}():i()}function o(){if(e)return e;const t=`; ${document.cookie}`,i=t.split(`; ${s}=`);return e=2===i.length&&i.pop().split(";").shift(),e}t.config.globalProperties.$set_session=t=>a(t),t.config.globalProperties.$close_session=()=>i(),t.config.globalProperties.$get_session=()=>o()}};(0,i.ri)(ge).use(_e).mount("#app")}},s={};function e(i){var a=s[i];if(void 0!==a)return a.exports;var o=s[i]={exports:{}};return t[i](o,o.exports,e),o.exports}e.m=t,function(){var t=[];e.O=function(s,i,a,o){if(!i){var n=1/0;for(d=0;d<t.length;d++){i=t[d][0],a=t[d][1],o=t[d][2];for(var l=!0,r=0;r<i.length;r++)(!1&o||n>=o)&&Object.keys(e.O).every((function(t){return e.O[t](i[r])}))?i.splice(r--,1):(l=!1,o<n&&(n=o));if(l){t.splice(d--,1);var c=a();void 0!==c&&(s=c)}}return s}o=o||0;for(var d=t.length;d>0&&t[d-1][2]>o;d--)t[d]=t[d-1];t[d]=[i,a,o]}}(),function(){e.n=function(t){var s=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(s,{a:s}),s}}(),function(){e.d=function(t,s){for(var i in s)e.o(s,i)&&!e.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:s[i]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,s){return Object.prototype.hasOwnProperty.call(t,s)}}(),function(){var t={143:0};e.O.j=function(s){return 0===t[s]};var s=function(s,i){var a,o,n=i[0],l=i[1],r=i[2],c=0;if(n.some((function(s){return 0!==t[s]}))){for(a in l)e.o(l,a)&&(e.m[a]=l[a]);if(r)var d=r(e)}for(s&&s(i);c<n.length;c++)o=n[c],e.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return e.O(d)},i=self["webpackChunkaudiocard_admin"]=self["webpackChunkaudiocard_admin"]||[];i.forEach(s.bind(null,0)),i.push=s.bind(null,i.push.bind(i))}();var i=e.O(void 0,[998],(function(){return e(946)}));i=e.O(i)})();
//# sourceMappingURL=app.ef233a13.js.map