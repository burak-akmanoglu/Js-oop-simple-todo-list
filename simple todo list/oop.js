
var tdm,Nmbr,b;
class Addlist  {
constructor(td) {
      this.TD = td;
      this.foradd();

}
foradd() {
  var mission = document.createElement("div");
  mission.className = "mission";
  
  var divtd = document.createElement("div");
  divtd.className = "divKoordinat";
  divtd.innerText = this.TD.toString();
  mission.appendChild(divtd);

  var newbtn = document.createElement("button");
  newbtn.className="newbtn";
  newbtn.innerHTML="Clear me";
  mission.appendChild(newbtn);
  newbtn.onclick = function() 
  {
mission.remove();
  }

 if(b==1){ divMission.appendChild(mission);}
 else if(b==2){divMission2.appendChild(mission);}
 else{divMission3.appendChild(mission);
 }
 }
}

function loadpage() {
tdm = document.getElementById("tdmssn");
Nmbr = document.getElementById("nmbr");
}

function addmission() {
if(Nmbr.value==' ' || Nmbr.value=='' || tdm.value==""||tdm.value==" "){
 alert("There is an empty entry");
}
else{
var td = tdm.value;
b = Nmbr.value;
var abc = new Addlist(td);

}
}


