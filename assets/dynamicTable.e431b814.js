import{_ as v,d as w,B as T,c as R,R as k,E as x,r as e,o as D,f as I,w as t,h as l,i as s,a5 as N,m as B,n as E,k as P,__tla as z}from"./index.b5253144.js";let i,C=Promise.all([(()=>{try{return z}catch{}})()]).then(async()=>{const o=a=>(B("data-v-eba3e0f4"),a=a(),E(),a),d={class:"header"},m=o(()=>s("span",null,"\u52A8\u6001\u8868\u683C",-1)),c={class:"tool"},p=P("\u67E5\u770B\u914D\u7F6E"),u=w({name:"dynamicTable",setup(a){let r=T();const b={title:"\u8868\u683C\u793A\u4F8B",rowKey:"uid",serialNumber:!0,multiple:!0,pagination:!0,props:{},operate:["remove","show","edit"],toolbar:["add","column","edit","remove","search","refresh"],remote:{url:"/api/test/getPageTableData",method:"get"},fields:[{label:"ID",name:"uid",type:"string",hide:!0,editable:{hide:!0}},{label:"\u5B57\u6BB5\u540D\u79F0",name:"fieldName",type:"string",order:2,props:{sortable:!0}},{label:"\u7EC4\u4EF6\u7C7B\u578B",name:"componentType",type:"string",order:1,editable:{component:{component:"el-radio",config:{options:[{label:"radio",value:"radio"}]}}}},{label:"\u6807\u9898",name:"title",type:"string"},{label:"\u5360\u4F4D\u7B26\u63D0\u793A",name:"placeholderTips",type:"string"},{label:"\u8868\u5355\u6805\u683C",name:"formGrid",type:"string"},{label:"\u6700\u5C0F\u884C\u6570",name:"minimum",type:"string"},{label:"\u6700\u5927\u884C\u6570",name:"maximum",type:"string"}]},n=R(()=>r.value?r.value.selectRows:[]);return k([n],()=>{x("select row watch",n.value)}),(F,G)=>{const f=e("iconify-icon"),g=e("el-button"),y=e("data-table"),h=e("el-card"),_=e("page-view");return D(),I(_,{class:"container",gutter:0,"bg-color":!1},{default:t(()=>[l(h,{class:"card-container"},{header:t(()=>[s("div",d,[l(f,{icon:"ant-design:table-outlined",size:18}),m,s("div",c,[l(g,{type:"primary"},{default:t(()=>[p]),_:1})])])]),default:t(()=>[l(y,N(b,{ref_key:"tableRef",ref:r}),null,16)]),_:1})]),_:1})}}});i=v(u,[["__scopeId","data-v-eba3e0f4"]])});export{C as __tla,i as default};
