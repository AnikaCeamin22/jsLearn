const show = ()=>{
  if(navigator.geolocation){
     navigator.geolocation.getCurrentPosition(showPosition, showError);
  }
  else{
    document.getElementById('id1').innerHTML= `Does not support Geolocation`;
  }
}

const showPosition = (p)=>{
  document.getElementById('id1').innerHTML = "Latitude: " + p.coords.latitude +
  "<br>Longitude: " + p.coords.longitude;
}
const showError = (err)=>{
  console.log(err);  
}

