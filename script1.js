
  function myTime(){
    var myDate = new Date();
    var min= (myDate.getMinutes()<10)?"0"+myDate.getMinutes():myDate.getMinutes();
    var sec =(myDate.getSeconds()<10)?"0"+myDate.getSeconds():myDate.getSeconds();
   var am = (myDate.getHours()>=12)?"PM":"AM";
  if(myDate.getHours()==0){
    hr=12;
  }
  else if(myDate.getHours()>12){
    hr=myDate.getHours()-12;
  }
  else{
    hr=myDate.getHours()
  }
  
  var currentime =hr+":"+min+":"+sec+":";
  document.getElementsByClassName("H")[0].innerHTML=currentime;
  document.getElementsByClassName("M")[0].innerHTML=am;
  
  var myDay =["sunday","monday","tuesday","wednusday","thursday","friday","saturday"],
   myMonth=["January","February","March","April","May","June","July","Agust","septembor","octobor","Novembor","December"],
  day =myDay[myDate.getDay()],
  month= myMonth[myDate.getMonth()],
  date =myDate.getDate();
  var currentDate =day+","+month+","+date+".";
  document.getElementsByClassName("date33")[0].innerHTML= currentDate;
  }
  myTime();
  setInterval(function(){
    myTime();
  },1000);
  




  