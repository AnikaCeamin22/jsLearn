let work;

const start = ()=>{
if(typeof(Worker)!='undefined'){
  if(typeof(work)=='undefined'){
    work = new Worker('Worker_post.js');
  }
  work.onmessage = (event)=>{
    document.getElementById('id1').innerHTML=event.data;
  };
}
else{
  alert(`Dose not support Worker API`);
}
}

const end = ()=>{
  work.terminate();
  work = undefined;
}

