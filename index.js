

var link=document.getElementById('link');
var btn=document.getElementById('btn');
let linkarray=[]




btn.addEventListener('click', ()=>{
  if(link.value!=''){
    document.getElementById('error').style.display='none';

    link.style.border=`none`

let urllink=link.value;
let preloader=`
<div class="preloader-wrapper big active">
<div class="spinner-layer spinner-blue">
  <div class="circle-clipper left">
    <div class="circle"></div>
  </div><div class="gap-patch">
    <div class="circle"></div>
  </div><div class="circle-clipper right">
    <div class="circle"></div>
  </div>
</div>
`
document.querySelector('.link-list-container').innerHTML=preloader;
createShortLink(urllink);

  }else{
console.log('error');
link.style.cssText=`border:2px solid hsl(0, 87%, 67%);`
document.getElementById('error').style.display='block';
  }

})

function createShortLink(link){
  axios.post(`https://api.shrtco.de/v2/shorten?url=${link}`).then((response) => {
    console.log(response.data.result)
    let result = response.data.result;
    let shortlink= result.short_link;
    console.log('shortlink',shortlink);
    
     linkarray.push({mainlink:link,shortlink:shortlink});
     console.log(linkarray)
    let linkcode=``

      linkarray.forEach((item) => {
        linkcode+=`
        <div class="link-list">
        <h6>${item.mainlink}</h6>
    <div id="short-url">
    <span >${item.shortlink}</span>
    <button id="copy" onclick="changecontent(this)">Copy</button>
    </div>
    
      </div>
        `
      })

      document.querySelector('.link-list-container').innerHTML=linkcode;
}).catch((error) =>console.log(error))
}


function changecontent(ele){
  ele.innerHTML='Copied!';
ele.style.cssText=`background-color:hsl(257, 27%, 26%) !important;`
setTimeout(()=>{
  ele.innerHTML='Copy';
ele.style.cssText=`background-color:hsl(180, 66%, 49%); !important;`
},5000)
}