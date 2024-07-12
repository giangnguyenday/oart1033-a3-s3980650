let a;
let b;
let c;


document.getElementById("randomizeButton").onclick=function(){

 // randomize number a b c
    a=Math.round(Math.random()*9);
    document.getElementById("randnoA").innerHTML=a;
    
    b=Math.round(Math.random()*9);
    document.getElementById("randnoB").innerHTML=b;
    
    c=Math.round(Math.random()*9);
    document.getElementById("randnoC").innerHTML=c;



      // randomize size for box a
      const boxaElement = document.getElementById("abox");

      // generate random width n height
      const minWidtha = 1;  
      const maxWidtha = 90; 
      const minHeighta = 1; 
      const maxHeighta = 80;

      const randomWidtha = Math.floor(Math.random() * (maxWidtha - minWidtha + 1)) + minWidtha;
      const randomHeighta = Math.floor(Math.random() * (maxHeighta - minHeighta + 1)) + minHeighta;

      // set the width and height of the box ele
      boxaElement.style.width = randomWidtha + "vw";
      boxaElement.style.height = randomHeighta + "vh";

      
      // same with box b
      const boxbElement = document.getElementById("bbox");

      const minWidthb = 1;  
      const maxWidthb = 90;   
      const minHeightb = 1;   
      const maxHeightb = 80;  

      const randomWidthb = Math.floor(Math.random() * (maxWidthb - minWidthb + 1)) + minWidthb;
      const randomHeightb = Math.floor(Math.random() * (maxHeightb - minHeightb + 1)) + minHeightb;

      boxbElement.style.width = randomWidthb + "vw";
      boxbElement.style.height = randomHeightb + "vh";


          // same with box c
      const boxcElement = document.getElementById("cbox");

      const minWidthc = 1;   
      const maxWidthc = 90; 
      const minHeightc = 1; 
      const maxHeightc = 80;  

      const randomWidthc = Math.floor(Math.random() * (maxWidthc - minWidthc + 1)) + minWidthc;
      const randomHeightc = Math.floor(Math.random() * (maxHeightc - minHeightc + 1)) + minHeightc;

      boxcElement.style.width = randomWidthc + "vw";
      boxcElement.style.height = randomHeightc + "vh";

      //when angel numbers appear:
      if (a==1 && b==1 && c==1) {document.querySelector("body").style.backgroundColor = "black"
      document.querySelector("body").style.color = "black"
      document.getElementById("angelnumbername").innerHTML="intuition"
      document.getElementById("details").innerHTML="trust your gut and listen to your heart."
      document.getElementById("rand").style.display = "none"
      document.getElementById("randomizeButton").style.backgroundColor = "transparent"
      document.getElementById("angelnumbername").style.display = "block"
      document.getElementById("angelnumbername").style.color = "black"
      document.getElementById("details").style.display = "block"
      document.getElementById("details").style.color = "black"
      document.getElementById("blackbackground").style.display = "block"
      document.getElementById("gradient1a").style.display = "block"
      document.getElementById("gradient1b").style.display = "block"
      document.getElementById("gradient1c").style.display = "block"
      document.getElementById("blurbackground").style.display = "block"
      document.getElementById("symbol111").style.display = "block"


document.getElementById("gradient2a").style.display = "none"
document.getElementById("gradient2b").style.display = "none"
document.getElementById("gradient2c").style.display = "none"
document.getElementById("gradient3a").style.display = "none"
document.getElementById("gradient3b").style.display = "none"
document.getElementById("gradient3c").style.display = "none"
document.getElementById("gradient4a").style.display = "none"
document.getElementById("gradient4b").style.display = "none"
document.getElementById("gradient4c").style.display = "none"
document.getElementById("gradient5a").style.display = "none"
document.getElementById("gradient5b").style.display = "none"
document.getElementById("gradient5c").style.display = "none"
document.getElementById("gradient6a").style.display = "none"
document.getElementById("gradient6b").style.display = "none"
document.getElementById("gradient6c").style.display = "none"
document.getElementById("gradient7a").style.display = "none"
document.getElementById("gradient7b").style.display = "none"
document.getElementById("gradient7c").style.display = "none"
document.getElementById("gradient8a").style.display = "none"
document.getElementById("gradient8b").style.display = "none"
document.getElementById("gradient8c").style.display = "none"
document.getElementById("gradient9a").style.display = "none"
document.getElementById("gradient9b").style.display = "none"
document.getElementById("gradient9c").style.display = "none"
    } 

    else if (a==2 && b==2 && c==2) {document.querySelector("body").style.backgroundColor = "black"
    document.querySelector("body").style.color = "black"
    document.getElementById("angelnumbername").innerHTML="alignment"
    document.getElementById("details").innerHTML="you are in the right place at the right time."
    document.getElementById("rand").style.display = "none"
    document.getElementById("randomizeButton").style.backgroundColor = "transparent"
    document.getElementById("angelnumbername").style.display = "block"
    document.getElementById("angelnumbername").style.color = "black"
document.getElementById("details").style.display = "block"
document.getElementById("details").style.color = "black"
document.getElementById("blackbackground").style.display = "block"
document.getElementById("gradient2a").style.display = "block"
document.getElementById("gradient2b").style.display = "block"
document.getElementById("gradient2c").style.display = "block"
document.getElementById("blurbackground").style.display = "block"
document.getElementById("symbol222").style.display = "block"


document.getElementById("gradient1a").style.display = "none"
document.getElementById("gradient1b").style.display = "none"
document.getElementById("gradient1c").style.display = "none"
document.getElementById("gradient3a").style.display = "none"
document.getElementById("gradient3b").style.display = "none"
document.getElementById("gradient3c").style.display = "none"
document.getElementById("gradient4a").style.display = "none"
document.getElementById("gradient4b").style.display = "none"
document.getElementById("gradient4c").style.display = "none"
document.getElementById("gradient5a").style.display = "none"
document.getElementById("gradient5b").style.display = "none"
document.getElementById("gradient5c").style.display = "none"
document.getElementById("gradient6a").style.display = "none"
document.getElementById("gradient6b").style.display = "none"
document.getElementById("gradient6c").style.display = "none"
document.getElementById("gradient7a").style.display = "none"
document.getElementById("gradient7b").style.display = "none"
document.getElementById("gradient7c").style.display = "none"
document.getElementById("gradient8a").style.display = "none"
document.getElementById("gradient8b").style.display = "none"
document.getElementById("gradient8c").style.display = "none"
document.getElementById("gradient9a").style.display = "none"
document.getElementById("gradient9b").style.display = "none"
document.getElementById("gradient9c").style.display = "none"

  } 

  else if (a==3 && b==3 && c==3) {document.querySelector("body").style.backgroundColor = "black"
  document.querySelector("body").style.color = "black"
  document.getElementById("angelnumbername").innerHTML="support"
  document.getElementById("details").innerHTML="your spirit guides are with you sending you love and support."
  document.getElementById("rand").style.display = "none"
  document.getElementById("randomizeButton").style.backgroundColor = "transparent"
  document.getElementById("angelnumbername").style.display = "block"
  document.getElementById("angelnumbername").style.color = "black"
  document.getElementById("details").style.display = "block"
  document.getElementById("details").style.color = "black"
  document.getElementById("blackbackground").style.display = "block"
  document.getElementById("gradient3a").style.display = "block"
  document.getElementById("gradient3b").style.display = "block"
  document.getElementById("gradient3c").style.display = "block"
  document.getElementById("blurbackground").style.display = "block"
  document.getElementById("symbol333").style.display = "block"


  document.getElementById("gradient1a").style.display = "none"
  document.getElementById("gradient1b").style.display = "none"
  document.getElementById("gradient1c").style.display = "none"
  document.getElementById("gradient2a").style.display = "none"
  document.getElementById("gradient2b").style.display = "none"
  document.getElementById("gradient2c").style.display = "none"
  document.getElementById("gradient4a").style.display = "none"
  document.getElementById("gradient4b").style.display = "none"
  document.getElementById("gradient4c").style.display = "none"
  document.getElementById("gradient5a").style.display = "none"
  document.getElementById("gradient5b").style.display = "none"
  document.getElementById("gradient5c").style.display = "none"
  document.getElementById("gradient6a").style.display = "none"
  document.getElementById("gradient6b").style.display = "none"
  document.getElementById("gradient6c").style.display = "none"
  document.getElementById("gradient7a").style.display = "none"
  document.getElementById("gradient7b").style.display = "none"
  document.getElementById("gradient7c").style.display = "none"
  document.getElementById("gradient8a").style.display = "none"
  document.getElementById("gradient8b").style.display = "none"
  document.getElementById("gradient8c").style.display = "none"
  document.getElementById("gradient9a").style.display = "none"
  document.getElementById("gradient9b").style.display = "none"
  document.getElementById("gradient9c").style.display = "none"
} 

else if (a==4 && b==4 && c==4) {document.querySelector("body").style.backgroundColor = "black"
document.querySelector("body").style.color = "black"
document.getElementById("angelnumbername").innerHTML="protection"
document.getElementById("details").innerHTML="the universe and your spirit guides are protecting you."
document.getElementById("rand").style.display = "none"
document.getElementById("randomizeButton").style.backgroundColor = "transparent"
document.getElementById("angelnumbername").style.display = "block"
document.getElementById("angelnumbername").style.color = "black"
document.getElementById("details").style.display = "block"
document.getElementById("details").style.color = "black"
document.getElementById("blackbackground").style.display = "block"
document.getElementById("gradient4a").style.display = "block"
document.getElementById("gradient4b").style.display = "block"
document.getElementById("gradient4c").style.display = "block"
document.getElementById("blurbackground").style.display = "block"
document.getElementById("symbol444").style.display = "block"


document.getElementById("gradient1a").style.display = "none"
document.getElementById("gradient1b").style.display = "none"
document.getElementById("gradient1c").style.display = "none"
document.getElementById("gradient2a").style.display = "none"
document.getElementById("gradient2b").style.display = "none"
document.getElementById("gradient2c").style.display = "none"
document.getElementById("gradient3a").style.display = "none"
document.getElementById("gradient3b").style.display = "none"
document.getElementById("gradient3c").style.display = "none"
document.getElementById("gradient5a").style.display = "none"
document.getElementById("gradient5b").style.display = "none"
document.getElementById("gradient5c").style.display = "none"
document.getElementById("gradient6a").style.display = "none"
document.getElementById("gradient6b").style.display = "none"
document.getElementById("gradient6c").style.display = "none"
document.getElementById("gradient7a").style.display = "none"
document.getElementById("gradient7b").style.display = "none"
document.getElementById("gradient7c").style.display = "none"
document.getElementById("gradient8a").style.display = "none"
document.getElementById("gradient8b").style.display = "none"
document.getElementById("gradient8c").style.display = "none"
document.getElementById("gradient9a").style.display = "none"
document.getElementById("gradient9b").style.display = "none"
document.getElementById("gradient9c").style.display = "none"
} 

else if ( a==5 && b==5 && c==5) {document.querySelector("body").style.backgroundColor = "black"
document.querySelector("body").style.color = "black"
document.getElementById("angelnumbername").innerHTML="change"
document.getElementById("details").innerHTML="something new is coming."
document.getElementById("rand").style.display = "none"
document.getElementById("randomizeButton").style.backgroundColor = "transparent"
document.getElementById("angelnumbername").style.display = "block"
document.getElementById("angelnumbername").style.color = "black"
document.getElementById("details").style.display = "block"
document.getElementById("details").style.color = "black"
document.getElementById("blackbackground").style.display = "block"
document.getElementById("gradient5a").style.display = "block"
document.getElementById("gradient5b").style.display = "block"
document.getElementById("gradient5c").style.display = "block"
document.getElementById("blurbackground").style.display = "block"
document.getElementById("symbol555").style.display = "block"
document.getElementById("symbol555").style.display = "block"

document.getElementById("gradient1a").style.display = "none"
document.getElementById("gradient1b").style.display = "none"
document.getElementById("gradient1c").style.display = "none"
document.getElementById("gradient2a").style.display = "none"
document.getElementById("gradient2b").style.display = "none"
document.getElementById("gradient2c").style.display = "none"
document.getElementById("gradient3a").style.display = "none"
document.getElementById("gradient3b").style.display = "none"
document.getElementById("gradient3c").style.display = "none"
document.getElementById("gradient4a").style.display = "none"
document.getElementById("gradient4b").style.display = "none"
document.getElementById("gradient4c").style.display = "none"
document.getElementById("gradient6a").style.display = "none"
document.getElementById("gradient6b").style.display = "none"
document.getElementById("gradient6c").style.display = "none"
document.getElementById("gradient7a").style.display = "none"
document.getElementById("gradient7b").style.display = "none"
document.getElementById("gradient7c").style.display = "none"
document.getElementById("gradient8a").style.display = "none"
document.getElementById("gradient8b").style.display = "none"
document.getElementById("gradient8c").style.display = "none"
document.getElementById("gradient9a").style.display = "none"
document.getElementById("gradient9b").style.display = "none"
document.getElementById("gradient9c").style.display = "none"
} 

else if (a==6 && b==6 && c==6) {document.querySelector("body").style.backgroundColor = "black"
document.querySelector("body").style.color = "black"
document.getElementById("angelnumbername").innerHTML="reflect"
document.getElementById("details").innerHTML="wake up to your higher spiritual self."
document.getElementById("rand").style.display = "none"
document.getElementById("randomizeButton").style.backgroundColor = "transparent"
document.getElementById("angelnumbername").style.display = "block"
document.getElementById("angelnumbername").style.color = "black"
document.getElementById("details").style.display = "block"
document.getElementById("details").style.color = "black"
document.getElementById("blackbackground").style.display = "block"
document.getElementById("gradient6a").style.display = "block"
document.getElementById("gradient6b").style.display = "block"
document.getElementById("gradient6c").style.display = "block"
document.getElementById("blurbackground").style.display = "block"
document.getElementById("symbol666").style.display = "block"

document.getElementById("gradient1a").style.display = "none"
document.getElementById("gradient1b").style.display = "none"
document.getElementById("gradient1c").style.display = "none"
document.getElementById("gradient2a").style.display = "none"
document.getElementById("gradient2b").style.display = "none"
document.getElementById("gradient2c").style.display = "none"
document.getElementById("gradient3a").style.display = "none"
document.getElementById("gradient3b").style.display = "none"
document.getElementById("gradient3c").style.display = "none"
document.getElementById("gradient4a").style.display = "none"
document.getElementById("gradient4b").style.display = "none"
document.getElementById("gradient4c").style.display = "none"
document.getElementById("gradient5a").style.display = "none"
document.getElementById("gradient5b").style.display = "none"
document.getElementById("gradient5c").style.display = "none"
document.getElementById("gradient7a").style.display = "none"
document.getElementById("gradient7b").style.display = "none"
document.getElementById("gradient7c").style.display = "none"
document.getElementById("gradient8a").style.display = "none"
document.getElementById("gradient8b").style.display = "none"
document.getElementById("gradient8c").style.display = "none"
document.getElementById("gradient9a").style.display = "none"
document.getElementById("gradient9b").style.display = "none"
document.getElementById("gradient9c").style.display = "none"
} 

else if (a==7 && b==7 && c==7) {document.querySelector("body").style.backgroundColor = "black"
document.querySelector("body").style.color = "black"
document.getElementById("angelnumbername").innerHTML="luck"
document.getElementById("details").innerHTML="wonderful things are about to happen."
document.getElementById("rand").style.display = "none"
document.getElementById("randomizeButton").style.backgroundColor = "transparent"
document.getElementById("angelnumbername").style.display = "block"
document.getElementById("angelnumbername").style.color = "black"
document.getElementById("details").style.display = "block"
document.getElementById("details").style.color = "black"
document.getElementById("blackbackground").style.display = "block"
document.getElementById("gradient7a").style.display = "block"
document.getElementById("gradient7b").style.display = "block"
document.getElementById("gradient7c").style.display = "block"
document.getElementById("blurbackground").style.display = "block"
document.getElementById("symbol777").style.display = "block"

document.getElementById("gradient1a").style.display = "none"
document.getElementById("gradient1b").style.display = "none"
document.getElementById("gradient1c").style.display = "none"
document.getElementById("gradient2a").style.display = "none"
document.getElementById("gradient2b").style.display = "none"
document.getElementById("gradient2c").style.display = "none"
document.getElementById("gradient3a").style.display = "none"
document.getElementById("gradient3b").style.display = "none"
document.getElementById("gradient3c").style.display = "none"
document.getElementById("gradient4a").style.display = "none"
document.getElementById("gradient4b").style.display = "none"
document.getElementById("gradient4c").style.display = "none"
document.getElementById("gradient5a").style.display = "none"
document.getElementById("gradient5b").style.display = "none"
document.getElementById("gradient5c").style.display = "none"
document.getElementById("gradient6a").style.display = "none"
document.getElementById("gradient6b").style.display = "none"
document.getElementById("gradient6c").style.display = "none"
document.getElementById("gradient8a").style.display = "none"
document.getElementById("gradient8b").style.display = "none"
document.getElementById("gradient8c").style.display = "none"
document.getElementById("gradient9a").style.display = "none"
document.getElementById("gradient9b").style.display = "none"
document.getElementById("gradient9c").style.display = "none"
} 

else if (a==8 && b==8 && c==8) {document.querySelector("body").style.backgroundColor = "black"
document.querySelector("body").style.color = "black"
document.getElementById("angelnumbername").innerHTML="balance"
document.getElementById("details").innerHTML="everything is falling into place as it’s meant to be."
document.getElementById("rand").style.display = "none"
document.getElementById("randomizeButton").style.backgroundColor = "transparent"
document.getElementById("angelnumbername").style.display = "block"
document.getElementById("angelnumbername").style.color = "black"
document.getElementById("details").style.display = "block"
document.getElementById("details").style.color = "black"
document.getElementById("blackbackground").style.display = "block"
document.getElementById("gradient8a").style.display = "block"
document.getElementById("gradient8b").style.display = "block"
document.getElementById("gradient8c").style.display = "block"
document.getElementById("blurbackground").style.display = "block"
document.getElementById("symbol888").style.display = "block"

document.getElementById("gradient1a").style.display = "none"
document.getElementById("gradient1b").style.display = "none"
document.getElementById("gradient1c").style.display = "none"
document.getElementById("gradient2a").style.display = "none"
document.getElementById("gradient2b").style.display = "none"
document.getElementById("gradient2c").style.display = "none"
document.getElementById("gradient3a").style.display = "none"
document.getElementById("gradient3b").style.display = "none"
document.getElementById("gradient3c").style.display = "none"
document.getElementById("gradient4a").style.display = "none"
document.getElementById("gradient4b").style.display = "none"
document.getElementById("gradient4c").style.display = "none"
document.getElementById("gradient5a").style.display = "none"
document.getElementById("gradient5b").style.display = "none"
document.getElementById("gradient5c").style.display = "none"
document.getElementById("gradient6a").style.display = "none"
document.getElementById("gradient6b").style.display = "none"
document.getElementById("gradient6c").style.display = "none"
document.getElementById("gradient7a").style.display = "none"
document.getElementById("gradient7b").style.display = "none"
document.getElementById("gradient7c").style.display = "none"
document.getElementById("gradient9a").style.display = "none"
document.getElementById("gradient9b").style.display = "none"
document.getElementById("gradient9c").style.display = "none"
} 

else if (a==9 && b==9 && c==9) {document.querySelector("body").style.backgroundColor = "black"
document.querySelector("body").style.color = "black"
document.getElementById("angelnumbername").innerHTML="release"
document.getElementById("details").innerHTML="let go of what’s no longer serving you."
document.getElementById("rand").style.display = "none"
document.getElementById("randomizeButton").style.backgroundColor = "transparent"
document.getElementById("angelnumbername").style.display = "block"
document.getElementById("angelnumbername").style.color = "black"
document.getElementById("details").style.display = "block"
document.getElementById("details").style.color = "black"
document.getElementById("blackbackground").style.display = "block"
document.getElementById("gradient9a").style.display = "block"
document.getElementById("gradient9b").style.display = "block"
document.getElementById("gradient9c").style.display = "block"
document.getElementById("blurbackground").style.display = "block"
document.getElementById("symbol999").style.display = "block"

document.getElementById("gradient1a").style.display = "none"
document.getElementById("gradient1b").style.display = "none"
document.getElementById("gradient1c").style.display = "none"
document.getElementById("gradient2a").style.display = "none"
document.getElementById("gradient2b").style.display = "none"
document.getElementById("gradient2c").style.display = "none"
document.getElementById("gradient3a").style.display = "none"
document.getElementById("gradient3b").style.display = "none"
document.getElementById("gradient3c").style.display = "none"
document.getElementById("gradient4a").style.display = "none"
document.getElementById("gradient4b").style.display = "none"
document.getElementById("gradient4c").style.display = "none"
document.getElementById("gradient5a").style.display = "none"
document.getElementById("gradient5b").style.display = "none"
document.getElementById("gradient5c").style.display = "none"
document.getElementById("gradient6a").style.display = "none"
document.getElementById("gradient6b").style.display = "none"
document.getElementById("gradient6c").style.display = "none"
document.getElementById("gradient7a").style.display = "none"
document.getElementById("gradient7b").style.display = "none"
document.getElementById("gradient7c").style.display = "none"
document.getElementById("gradient8a").style.display = "none"
document.getElementById("gradient8b").style.display = "none"
document.getElementById("gradient8c").style.display = "none"
} 

else if(a==0 && b==0 && c==0){document.querySelector("body").style.backgroundColor = "black"
document.querySelector("body").style.color = "white"
document.getElementById("angelnumbername").innerHTML="new beginnings"
document.getElementById("details").innerHTML="a reminder that you are the creator of your own destiny."
document.getElementById("rand").style.display = "none"
document.getElementById("randomizeButton").style.backgroundColor = "transparent"
document.getElementById("angelnumbername").style.display = "block"
document.getElementById("angelnumbername").style.color = "white"
document.getElementById("details").style.display = "block"
document.getElementById("details").style.color = "white"
document.getElementById("blackbackground").style.display = "block"
document.getElementById("symbol000").style.display = "block"

document.getElementById("gradient1a").style.display = "none"
document.getElementById("gradient1b").style.display = "none"
document.getElementById("gradient1c").style.display = "none"
document.getElementById("gradient2a").style.display = "none"
document.getElementById("gradient2b").style.display = "none"
document.getElementById("gradient2c").style.display = "none"
document.getElementById("gradient3a").style.display = "none"
document.getElementById("gradient3b").style.display = "none"
document.getElementById("gradient3c").style.display = "none"
document.getElementById("gradient4a").style.display = "none"
document.getElementById("gradient4b").style.display = "none"
document.getElementById("gradient4c").style.display = "none"
document.getElementById("gradient5a").style.display = "none"
document.getElementById("gradient5b").style.display = "none"
document.getElementById("gradient5c").style.display = "none"
document.getElementById("gradient6a").style.display = "none"
document.getElementById("gradient6b").style.display = "none"
document.getElementById("gradient6c").style.display = "none"
document.getElementById("gradient7a").style.display = "none"
document.getElementById("gradient7b").style.display = "none"
document.getElementById("gradient7c").style.display = "none"
document.getElementById("gradient8a").style.display = "none"
document.getElementById("gradient8b").style.display = "none"
document.getElementById("gradient8c").style.display = "none"
document.getElementById("gradient9a").style.display = "none"
document.getElementById("gradient9b").style.display = "none"
document.getElementById("gradient9c").style.display = "none"
document.getElementById("blurbackground").style.display = "none"

}

else{document.querySelector("body").style.backgroundColor = "white"
document.querySelector("body").style.color = "black"
document.getElementById("rand").style.display = "block"
document.getElementById("angelnumbername").style.display = "none"
document.getElementById("details").style.display = "none"
document.getElementById("blackbackground").style.display = "none"
document.getElementById("randomizeButton").style.backgroundColor = "black"
document.getElementById("gradient1a").style.display = "none"
document.getElementById("gradient1b").style.display = "none"
document.getElementById("gradient1c").style.display = "none"
document.getElementById("gradient2a").style.display = "none"
document.getElementById("gradient2b").style.display = "none"
document.getElementById("gradient2c").style.display = "none"
document.getElementById("gradient3a").style.display = "none"
document.getElementById("gradient3b").style.display = "none"
document.getElementById("gradient3c").style.display = "none"
document.getElementById("gradient4a").style.display = "none"
document.getElementById("gradient4b").style.display = "none"
document.getElementById("gradient4c").style.display = "none"
document.getElementById("gradient5a").style.display = "none"
document.getElementById("gradient5b").style.display = "none"
document.getElementById("gradient5c").style.display = "none"
document.getElementById("gradient6a").style.display = "none"
document.getElementById("gradient6b").style.display = "none"
document.getElementById("gradient6c").style.display = "none"
document.getElementById("gradient7a").style.display = "none"
document.getElementById("gradient7b").style.display = "none"
document.getElementById("gradient7c").style.display = "none"
document.getElementById("gradient8a").style.display = "none"
document.getElementById("gradient8b").style.display = "none"
document.getElementById("gradient8c").style.display = "none"
document.getElementById("gradient9a").style.display = "none"
document.getElementById("gradient9b").style.display = "none"
document.getElementById("gradient9c").style.display = "none"
document.getElementById("blurbackground").style.display = "none"

}


    }







    //hover on a symbol -> messages, name and angel numbers will change color
    document.getElementById("symbol111").onmouseenter=function(){
      if(a==1 && b==1 && c==1)
      {document.getElementById("angelnumbername").style.color = "#F4E1E5"
      document.getElementById("details").style.color = "#F4E1E5" 
      document.getElementById("randnoA").style.color = "#F4E1E5" 
      document.getElementById("randnoB").style.color = "#F4E1E5" 
      document.getElementById("randnoC").style.color = "#F4E1E5" 
    }
      document.getElementById("symbol111").style.width = "4vw"
      document.getElementById("symbol111").style.height = "4vw"
  }

    document.getElementById("symbol111").onmouseleave=function(){
      if(a==1 && b==1 && c==1)
      {document.getElementById("angelnumbername").style.color = "black"
      document.getElementById("details").style.color = "black"
      document.getElementById("randnoA").style.color = "black" 
      document.getElementById("randnoB").style.color = "black" 
      document.getElementById("randnoC").style.color = "black" 
    }
      document.getElementById("symbol111").style.width = "3vw"
      document.getElementById("symbol111").style.height = "3vw"
    }






    document.getElementById("symbol222").onmouseenter=function(){
      if(a==2 && b==2 && c==2)
      {document.getElementById("angelnumbername").style.color = "#FDF8E5"
      document.getElementById("details").style.color = "#FDF8E5"
      document.getElementById("randnoA").style.color = "#FDF8E5" 
      document.getElementById("randnoB").style.color = "#FDF8E5" 
      document.getElementById("randnoC").style.color = "#FDF8E5" 
    }
      document.getElementById("symbol222").style.width = "4vw"
      document.getElementById("symbol222").style.height = "4vw"
  }

    document.getElementById("symbol222").onmouseleave=function(){
      if(a==2 && b==2 && c==2)
      {document.getElementById("angelnumbername").style.color = "black"
      document.getElementById("details").style.color = "black"
      document.getElementById("randnoA").style.color = "black" 
      document.getElementById("randnoB").style.color = "black" 
      document.getElementById("randnoC").style.color = "black" 
    }
      document.getElementById("symbol222").style.width = "3vw"
      document.getElementById("symbol222").style.height = "3vw"
    }







    document.getElementById("symbol333").onmouseenter=function(){
      if(a==3 && b==3 && c==3)
      {document.getElementById("angelnumbername").style.color = "#CDCDFF"
      document.getElementById("details").style.color = "#CDCDFF"
      document.getElementById("randnoA").style.color = "#CDCDFF" 
      document.getElementById("randnoB").style.color = "#CDCDFF" 
      document.getElementById("randnoC").style.color = "#CDCDFF" 
    }
      document.getElementById("symbol333").style.width = "4vw"
      document.getElementById("symbol333").style.height = "4vw"
  }

    document.getElementById("symbol333").onmouseleave=function(){
      if(a==3 && b==3 && c==3)
      {document.getElementById("angelnumbername").style.color = "black"
      document.getElementById("details").style.color = "black"
      document.getElementById("randnoA").style.color = "black" 
      document.getElementById("randnoB").style.color = "black" 
      document.getElementById("randnoC").style.color = "black" 
    }
      document.getElementById("symbol333").style.width = "3vw"
      document.getElementById("symbol333").style.height = "3vw"
    }







    document.getElementById("symbol444").onmouseenter=function(){
      if(a==4 && b==4 && c==4)
      {document.getElementById("angelnumbername").style.color = "#F8C7EB"
      document.getElementById("details").style.color = "#F8C7EB"
      document.getElementById("randnoA").style.color = "#F8C7EB" 
      document.getElementById("randnoB").style.color = "#F8C7EB" 
      document.getElementById("randnoC").style.color = "#F8C7EB" 
    }
      document.getElementById("symbol444").style.width = "4vw"
      document.getElementById("symbol444").style.height = "4vw"
  }

    document.getElementById("symbol444").onmouseleave=function(){
      if(a==4 && b==4 && c==4)
      {document.getElementById("angelnumbername").style.color = "black"
      document.getElementById("details").style.color = "black"
      document.getElementById("randnoA").style.color = "black" 
      document.getElementById("randnoB").style.color = "black" 
      document.getElementById("randnoC").style.color = "black"
    }
      document.getElementById("symbol444").style.width = "3vw"
      document.getElementById("symbol444").style.height = "3vw"
    }






    document.getElementById("symbol555").onmouseenter=function(){
      if(a==5 && b==5 && c==5)
      {document.getElementById("angelnumbername").style.color = "#FFFA8B"
      document.getElementById("details").style.color = "#FFFA8B"
      document.getElementById("randnoA").style.color = "#FFFA8B" 
      document.getElementById("randnoB").style.color = "#FFFA8B" 
      document.getElementById("randnoC").style.color = "#FFFA8B" 
    }
      document.getElementById("symbol555").style.width = "4vw"
      document.getElementById("symbol555").style.height = "4vw"
  }

    document.getElementById("symbol555").onmouseleave=function(){
      if(a==5 && b==5 && c==5)
      {document.getElementById("angelnumbername").style.color = "black"
      document.getElementById("details").style.color = "black"
      document.getElementById("randnoA").style.color = "black" 
      document.getElementById("randnoB").style.color = "black" 
      document.getElementById("randnoC").style.color = "black"
    }
      document.getElementById("symbol555").style.width = "3vw"
      document.getElementById("symbol555").style.height = "3vw"
    }

  






    document.getElementById("symbol666").onmouseenter=function(){
      if(a==6 && b==6 && c==6)
      {document.getElementById("angelnumbername").style.color = "#06DCEB"
      document.getElementById("details").style.color = "#06DCEB"
      document.getElementById("randnoA").style.color = "#06DCEB" 
      document.getElementById("randnoB").style.color = "#06DCEB" 
      document.getElementById("randnoC").style.color = "#06DCEB" 
    }
      document.getElementById("symbol666").style.width = "4vw"
      document.getElementById("symbol666").style.height = "4vw"
  }

    document.getElementById("symbol666").onmouseleave=function(){
      if(a==6 && b==6 && c==6)
      {document.getElementById("angelnumbername").style.color = "black"
      document.getElementById("details").style.color = "black"
      document.getElementById("randnoA").style.color = "black" 
      document.getElementById("randnoB").style.color = "black" 
      document.getElementById("randnoC").style.color = "black"
    }
      document.getElementById("symbol666").style.width = "3vw"
      document.getElementById("symbol666").style.height = "3vw"
    }









    document.getElementById("symbol777").onmouseenter=function(){
      if(a==7 && b==7 && c==7)
      {document.getElementById("angelnumbername").style.color = "#FF98F2"
      document.getElementById("details").style.color = "#FF98F2"
      document.getElementById("randnoA").style.color = "#FF98F2" 
      document.getElementById("randnoB").style.color = "#FF98F2" 
      document.getElementById("randnoC").style.color = "#FF98F2" 
    }
      document.getElementById("symbol777").style.width = "4vw"
      document.getElementById("symbol777").style.height = "4vw"
  }

    document.getElementById("symbol777").onmouseleave=function(){
      if(a==7 && b==7 && c==7)
      {document.getElementById("angelnumbername").style.color = "black"
      document.getElementById("details").style.color = "black"
      document.getElementById("randnoA").style.color = "black" 
      document.getElementById("randnoB").style.color = "black" 
      document.getElementById("randnoC").style.color = "black"
    }
      document.getElementById("symbol777").style.width = "3vw"
      document.getElementById("symbol777").style.height = "3vw"
    }







    
    document.getElementById("symbol888").onmouseenter=function(){
      if(a==8 && b==8 && c==8)
      {document.getElementById("angelnumbername").style.color = "#BCE5AC"
      document.getElementById("details").style.color = "#BCE5AC"
      document.getElementById("randnoA").style.color = "#BCE5AC" 
      document.getElementById("randnoB").style.color = "#BCE5AC" 
      document.getElementById("randnoC").style.color = "#BCE5AC" 
    }
      document.getElementById("symbol888").style.width = "4vw"
      document.getElementById("symbol888").style.height = "4vw"
  }

    document.getElementById("symbol888").onmouseleave=function(){
      if(a==8 && b==8 && c==8)
      {document.getElementById("angelnumbername").style.color = "black"
      document.getElementById("details").style.color = "black"
      document.getElementById("randnoA").style.color = "black" 
      document.getElementById("randnoB").style.color = "black" 
      document.getElementById("randnoC").style.color = "black"
    }
      document.getElementById("symbol888").style.width = "3vw"
      document.getElementById("symbol888").style.height = "3vw"
    }






    

    document.getElementById("symbol999").onmouseenter=function(){
      if(a==9 && b==9 && c==9)
      {document.getElementById("angelnumbername").style.color = "#A6DBFA"
      document.getElementById("details").style.color = "#A6DBFA"
      document.getElementById("randnoA").style.color = "#A6DBFA" 
      document.getElementById("randnoB").style.color = "#A6DBFA" 
      document.getElementById("randnoC").style.color = "#A6DBFA" 
    }
      document.getElementById("symbol999").style.width = "4vw"
      document.getElementById("symbol999").style.height = "4vw"
  }

    document.getElementById("symbol999").onmouseleave=function(){
      if(a==9 && b==9 && c==9)
      {document.getElementById("angelnumbername").style.color = "black"
      document.getElementById("details").style.color = "black"
      document.getElementById("randnoA").style.color = "black" 
      document.getElementById("randnoB").style.color = "black" 
      document.getElementById("randnoC").style.color = "black"
    }
      document.getElementById("symbol999").style.width = "3vw"
      document.getElementById("symbol999").style.height = "3vw"
    }







    
    document.getElementById("symbol000").onmouseenter=function(){
      if(a==0 && b==0 && c==0)
      {document.getElementById("angelnumbername").style.color = "#FFFFFF"
      document.getElementById("details").style.color = "#FFFFFF"
      document.getElementById("randnoA").style.color = "#FFFFFF" 
      document.getElementById("randnoB").style.color = "#FFFFFF" 
      document.getElementById("randnoC").style.color = "#FFFFFF"
    }
      document.getElementById("symbol000").style.width = "4vw"
      document.getElementById("symbol000").style.height = "4vw"
  }

    document.getElementById("symbol000").onmouseleave=function(){
      if(a==0 && b==0 && c==0)
      {document.getElementById("angelnumbername").style.color = "#FFFFFF"
      document.getElementById("details").style.color = "#FFFFFF"
      document.getElementById("randnoA").style.color = "#FFFFFF" 
      document.getElementById("randnoB").style.color = "#FFFFFF" 
      document.getElementById("randnoC").style.color = "#FFFFFF"
    }
      document.getElementById("symbol000").style.width = "3vw"
      document.getElementById("symbol000").style.height = "3vw"
    }






















//click on a symbol -> gradients and messages will be displayed

    document.getElementById("symbol111").onclick=function(){
      a=1
      document.getElementById("randnoA").innerHTML=a;
      b=1
      document.getElementById("randnoB").innerHTML=b;
      c=1
      document.getElementById("randnoC").innerHTML=c;

      document.querySelector("body").style.backgroundColor = "black"
      document.querySelector("body").style.color = "black"
      document.getElementById("angelnumbername").innerHTML="intuition"
      document.getElementById("details").innerHTML="trust your gut and listen to your heart."
      document.getElementById("rand").style.display = "none"
      document.getElementById("randomizeButton").style.backgroundColor = "transparent"
      document.getElementById("angelnumbername").style.display = "block"
      document.getElementById("angelnumbername").style.color = "black"
      document.getElementById("details").style.display = "block"
      document.getElementById("details").style.color = "black"
      document.getElementById("blackbackground").style.display = "block"
      document.getElementById("gradient1a").style.display = "block"
      document.getElementById("gradient1b").style.display = "block"
      document.getElementById("gradient1c").style.display = "block"
      document.getElementById("blurbackground").style.display = "block"
      document.getElementById("symbol111").style.display = "block"


document.getElementById("gradient2a").style.display = "none"
document.getElementById("gradient2b").style.display = "none"
document.getElementById("gradient2c").style.display = "none"
document.getElementById("gradient3a").style.display = "none"
document.getElementById("gradient3b").style.display = "none"
document.getElementById("gradient3c").style.display = "none"
document.getElementById("gradient4a").style.display = "none"
document.getElementById("gradient4b").style.display = "none"
document.getElementById("gradient4c").style.display = "none"
document.getElementById("gradient5a").style.display = "none"
document.getElementById("gradient5b").style.display = "none"
document.getElementById("gradient5c").style.display = "none"
document.getElementById("gradient6a").style.display = "none"
document.getElementById("gradient6b").style.display = "none"
document.getElementById("gradient6c").style.display = "none"
document.getElementById("gradient7a").style.display = "none"
document.getElementById("gradient7b").style.display = "none"
document.getElementById("gradient7c").style.display = "none"
document.getElementById("gradient8a").style.display = "none"
document.getElementById("gradient8b").style.display = "none"
document.getElementById("gradient8c").style.display = "none"
document.getElementById("gradient9a").style.display = "none"
document.getElementById("gradient9b").style.display = "none"
document.getElementById("gradient9c").style.display = "none"

document.getElementById("angelllbg").style.display = "none"
document.getElementById("angelll").style.display = "none"
document.getElementById("blessedtext").style.display = "none"

    }







    document.getElementById("symbol222").onclick=function(){
      a=2
      document.getElementById("randnoA").innerHTML=a;
      b=2
      document.getElementById("randnoB").innerHTML=b;
      c=2
      document.getElementById("randnoC").innerHTML=c;

      document.querySelector("body").style.backgroundColor = "black"
      document.querySelector("body").style.color = "black"
      document.getElementById("angelnumbername").innerHTML="alignment"
      document.getElementById("details").innerHTML="you are in the right place at the right time."
      document.getElementById("rand").style.display = "none"
      document.getElementById("randomizeButton").style.backgroundColor = "transparent"
      document.getElementById("angelnumbername").style.display = "block"
      document.getElementById("angelnumbername").style.color = "black"
  document.getElementById("details").style.display = "block"
  document.getElementById("details").style.color = "black"
  document.getElementById("blackbackground").style.display = "block"
  document.getElementById("gradient2a").style.display = "block"
  document.getElementById("gradient2b").style.display = "block"
  document.getElementById("gradient2c").style.display = "block"
  document.getElementById("blurbackground").style.display = "block"
  document.getElementById("symbol222").style.display = "block"
  
  
  document.getElementById("gradient1a").style.display = "none"
  document.getElementById("gradient1b").style.display = "none"
  document.getElementById("gradient1c").style.display = "none"
  document.getElementById("gradient3a").style.display = "none"
  document.getElementById("gradient3b").style.display = "none"
  document.getElementById("gradient3c").style.display = "none"
  document.getElementById("gradient4a").style.display = "none"
  document.getElementById("gradient4b").style.display = "none"
  document.getElementById("gradient4c").style.display = "none"
  document.getElementById("gradient5a").style.display = "none"
  document.getElementById("gradient5b").style.display = "none"
  document.getElementById("gradient5c").style.display = "none"
  document.getElementById("gradient6a").style.display = "none"
  document.getElementById("gradient6b").style.display = "none"
  document.getElementById("gradient6c").style.display = "none"
  document.getElementById("gradient7a").style.display = "none"
  document.getElementById("gradient7b").style.display = "none"
  document.getElementById("gradient7c").style.display = "none"
  document.getElementById("gradient8a").style.display = "none"
  document.getElementById("gradient8b").style.display = "none"
  document.getElementById("gradient8c").style.display = "none"
  document.getElementById("gradient9a").style.display = "none"
  document.getElementById("gradient9b").style.display = "none"
  document.getElementById("gradient9c").style.display = "none"

  document.getElementById("angelllbg").style.display = "none"
document.getElementById("angelll").style.display = "none"
document.getElementById("blessedtext").style.display = "none"
    }






    document.getElementById("symbol333").onclick=function(){
      a=3
      document.getElementById("randnoA").innerHTML=a;
      b=3
      document.getElementById("randnoB").innerHTML=b;
      c=3
      document.getElementById("randnoC").innerHTML=c;

      document.querySelector("body").style.backgroundColor = "black"
      document.querySelector("body").style.color = "black"
      document.getElementById("angelnumbername").innerHTML="support"
      document.getElementById("details").innerHTML="your spirit guides are with you sending you love and support."
      document.getElementById("rand").style.display = "none"
      document.getElementById("randomizeButton").style.backgroundColor = "transparent"
      document.getElementById("angelnumbername").style.display = "block"
      document.getElementById("angelnumbername").style.color = "black"
      document.getElementById("details").style.display = "block"
      document.getElementById("details").style.color = "black"
      document.getElementById("blackbackground").style.display = "block"
      document.getElementById("gradient3a").style.display = "block"
      document.getElementById("gradient3b").style.display = "block"
      document.getElementById("gradient3c").style.display = "block"
      document.getElementById("blurbackground").style.display = "block"
      document.getElementById("symbol333").style.display = "block"
    
    
      document.getElementById("gradient1a").style.display = "none"
      document.getElementById("gradient1b").style.display = "none"
      document.getElementById("gradient1c").style.display = "none"
      document.getElementById("gradient2a").style.display = "none"
      document.getElementById("gradient2b").style.display = "none"
      document.getElementById("gradient2c").style.display = "none"
      document.getElementById("gradient4a").style.display = "none"
      document.getElementById("gradient4b").style.display = "none"
      document.getElementById("gradient4c").style.display = "none"
      document.getElementById("gradient5a").style.display = "none"
      document.getElementById("gradient5b").style.display = "none"
      document.getElementById("gradient5c").style.display = "none"
      document.getElementById("gradient6a").style.display = "none"
      document.getElementById("gradient6b").style.display = "none"
      document.getElementById("gradient6c").style.display = "none"
      document.getElementById("gradient7a").style.display = "none"
      document.getElementById("gradient7b").style.display = "none"
      document.getElementById("gradient7c").style.display = "none"
      document.getElementById("gradient8a").style.display = "none"
      document.getElementById("gradient8b").style.display = "none"
      document.getElementById("gradient8c").style.display = "none"
      document.getElementById("gradient9a").style.display = "none"
      document.getElementById("gradient9b").style.display = "none"
      document.getElementById("gradient9c").style.display = "none"

      document.getElementById("angelllbg").style.display = "none"
document.getElementById("angelll").style.display = "none"
document.getElementById("blessedtext").style.display = "none"
    }




    document.getElementById("symbol444").onclick=function(){
      a=4
      document.getElementById("randnoA").innerHTML=a;
      b=4
      document.getElementById("randnoB").innerHTML=b;
      c=4
      document.getElementById("randnoC").innerHTML=c;

      document.querySelector("body").style.backgroundColor = "black"
document.querySelector("body").style.color = "black"
document.getElementById("angelnumbername").innerHTML="protection"
document.getElementById("details").innerHTML="the universe and your spirit guides are protecting you."
document.getElementById("rand").style.display = "none"
document.getElementById("randomizeButton").style.backgroundColor = "transparent"
document.getElementById("angelnumbername").style.display = "block"
document.getElementById("angelnumbername").style.color = "black"
document.getElementById("details").style.display = "block"
document.getElementById("details").style.color = "black"
document.getElementById("blackbackground").style.display = "block"
document.getElementById("gradient4a").style.display = "block"
document.getElementById("gradient4b").style.display = "block"
document.getElementById("gradient4c").style.display = "block"
document.getElementById("blurbackground").style.display = "block"
document.getElementById("symbol444").style.display = "block"


document.getElementById("gradient1a").style.display = "none"
document.getElementById("gradient1b").style.display = "none"
document.getElementById("gradient1c").style.display = "none"
document.getElementById("gradient2a").style.display = "none"
document.getElementById("gradient2b").style.display = "none"
document.getElementById("gradient2c").style.display = "none"
document.getElementById("gradient3a").style.display = "none"
document.getElementById("gradient3b").style.display = "none"
document.getElementById("gradient3c").style.display = "none"
document.getElementById("gradient5a").style.display = "none"
document.getElementById("gradient5b").style.display = "none"
document.getElementById("gradient5c").style.display = "none"
document.getElementById("gradient6a").style.display = "none"
document.getElementById("gradient6b").style.display = "none"
document.getElementById("gradient6c").style.display = "none"
document.getElementById("gradient7a").style.display = "none"
document.getElementById("gradient7b").style.display = "none"
document.getElementById("gradient7c").style.display = "none"
document.getElementById("gradient8a").style.display = "none"
document.getElementById("gradient8b").style.display = "none"
document.getElementById("gradient8c").style.display = "none"
document.getElementById("gradient9a").style.display = "none"
document.getElementById("gradient9b").style.display = "none"
document.getElementById("gradient9c").style.display = "none"

document.getElementById("angelllbg").style.display = "none"
document.getElementById("angelll").style.display = "none"
document.getElementById("blessedtext").style.display = "none"
    }







    document.getElementById("symbol555").onclick=function(){
      a=5
      document.getElementById("randnoA").innerHTML=a;
      b=5
      document.getElementById("randnoB").innerHTML=b;
      c=5
      document.getElementById("randnoC").innerHTML=c;

      document.querySelector("body").style.backgroundColor = "black"
      document.querySelector("body").style.backgroundColor = "black"
      document.querySelector("body").style.color = "black"
      document.getElementById("angelnumbername").innerHTML="change"
      document.getElementById("details").innerHTML="something new is coming."
      document.getElementById("rand").style.display = "none"
      document.getElementById("randomizeButton").style.backgroundColor = "transparent"
      document.getElementById("angelnumbername").style.display = "block"
      document.getElementById("angelnumbername").style.color = "black"
      document.getElementById("details").style.display = "block"
      document.getElementById("details").style.color = "black"
      document.getElementById("blackbackground").style.display = "block"
      document.getElementById("gradient5a").style.display = "block"
      document.getElementById("gradient5b").style.display = "block"
      document.getElementById("gradient5c").style.display = "block"
      document.getElementById("blurbackground").style.display = "block"
      document.getElementById("symbol555").style.display = "block"
      document.getElementById("symbol555").style.display = "block"
      
      document.getElementById("gradient1a").style.display = "none"
      document.getElementById("gradient1b").style.display = "none"
      document.getElementById("gradient1c").style.display = "none"
      document.getElementById("gradient2a").style.display = "none"
      document.getElementById("gradient2b").style.display = "none"
      document.getElementById("gradient2c").style.display = "none"
      document.getElementById("gradient3a").style.display = "none"
      document.getElementById("gradient3b").style.display = "none"
      document.getElementById("gradient3c").style.display = "none"
      document.getElementById("gradient4a").style.display = "none"
      document.getElementById("gradient4b").style.display = "none"
      document.getElementById("gradient4c").style.display = "none"
      document.getElementById("gradient6a").style.display = "none"
      document.getElementById("gradient6b").style.display = "none"
      document.getElementById("gradient6c").style.display = "none"
      document.getElementById("gradient7a").style.display = "none"
      document.getElementById("gradient7b").style.display = "none"
      document.getElementById("gradient7c").style.display = "none"
      document.getElementById("gradient8a").style.display = "none"
      document.getElementById("gradient8b").style.display = "none"
      document.getElementById("gradient8c").style.display = "none"
      document.getElementById("gradient9a").style.display = "none"
      document.getElementById("gradient9b").style.display = "none"
      document.getElementById("gradient9c").style.display = "none"

      document.getElementById("angelllbg").style.display = "none"
document.getElementById("angelll").style.display = "none"
document.getElementById("blessedtext").style.display = "none"
    }






    document.getElementById("symbol666").onclick=function(){
      a=6
      document.getElementById("randnoA").innerHTML=a;
      b=6
      document.getElementById("randnoB").innerHTML=b;
      c=6
      document.getElementById("randnoC").innerHTML=c;

      document.querySelector("body").style.backgroundColor = "black"
document.querySelector("body").style.color = "black"
document.getElementById("angelnumbername").innerHTML="reflect"
document.getElementById("details").innerHTML="wake up to your higher spiritual self."
document.getElementById("rand").style.display = "none"
document.getElementById("randomizeButton").style.backgroundColor = "transparent"
document.getElementById("angelnumbername").style.display = "block"
document.getElementById("angelnumbername").style.color = "black"
document.getElementById("details").style.display = "block"
document.getElementById("details").style.color = "black"
document.getElementById("blackbackground").style.display = "block"
document.getElementById("gradient6a").style.display = "block"
document.getElementById("gradient6b").style.display = "block"
document.getElementById("gradient6c").style.display = "block"
document.getElementById("blurbackground").style.display = "block"
document.getElementById("symbol666").style.display = "block"

document.getElementById("gradient1a").style.display = "none"
document.getElementById("gradient1b").style.display = "none"
document.getElementById("gradient1c").style.display = "none"
document.getElementById("gradient2a").style.display = "none"
document.getElementById("gradient2b").style.display = "none"
document.getElementById("gradient2c").style.display = "none"
document.getElementById("gradient3a").style.display = "none"
document.getElementById("gradient3b").style.display = "none"
document.getElementById("gradient3c").style.display = "none"
document.getElementById("gradient4a").style.display = "none"
document.getElementById("gradient4b").style.display = "none"
document.getElementById("gradient4c").style.display = "none"
document.getElementById("gradient5a").style.display = "none"
document.getElementById("gradient5b").style.display = "none"
document.getElementById("gradient5c").style.display = "none"
document.getElementById("gradient7a").style.display = "none"
document.getElementById("gradient7b").style.display = "none"
document.getElementById("gradient7c").style.display = "none"
document.getElementById("gradient8a").style.display = "none"
document.getElementById("gradient8b").style.display = "none"
document.getElementById("gradient8c").style.display = "none"
document.getElementById("gradient9a").style.display = "none"
document.getElementById("gradient9b").style.display = "none"
document.getElementById("gradient9c").style.display = "none"

document.getElementById("angelllbg").style.display = "none"
document.getElementById("angelll").style.display = "none"
document.getElementById("blessedtext").style.display = "none"
    }










    document.getElementById("symbol777").onclick=function(){
      a=7
      document.getElementById("randnoA").innerHTML=a;
      b=7
      document.getElementById("randnoB").innerHTML=b;
      c=7
      document.getElementById("randnoC").innerHTML=c;

      document.querySelector("body").style.backgroundColor = "black"
      document.querySelector("body").style.backgroundColor = "black"
      document.querySelector("body").style.color = "black"
      document.getElementById("angelnumbername").innerHTML="luck"
      document.getElementById("details").innerHTML="wonderful things are about to happen."
      document.getElementById("rand").style.display = "none"
      document.getElementById("randomizeButton").style.backgroundColor = "transparent"
      document.getElementById("angelnumbername").style.display = "block"
      document.getElementById("angelnumbername").style.color = "black"
      document.getElementById("details").style.display = "block"
      document.getElementById("details").style.color = "black"
      document.getElementById("blackbackground").style.display = "block"
      document.getElementById("gradient7a").style.display = "block"
      document.getElementById("gradient7b").style.display = "block"
      document.getElementById("gradient7c").style.display = "block"
      document.getElementById("blurbackground").style.display = "block"
      document.getElementById("symbol777").style.display = "block"
      
      document.getElementById("gradient1a").style.display = "none"
      document.getElementById("gradient1b").style.display = "none"
      document.getElementById("gradient1c").style.display = "none"
      document.getElementById("gradient2a").style.display = "none"
      document.getElementById("gradient2b").style.display = "none"
      document.getElementById("gradient2c").style.display = "none"
      document.getElementById("gradient3a").style.display = "none"
      document.getElementById("gradient3b").style.display = "none"
      document.getElementById("gradient3c").style.display = "none"
      document.getElementById("gradient4a").style.display = "none"
      document.getElementById("gradient4b").style.display = "none"
      document.getElementById("gradient4c").style.display = "none"
      document.getElementById("gradient5a").style.display = "none"
      document.getElementById("gradient5b").style.display = "none"
      document.getElementById("gradient5c").style.display = "none"
      document.getElementById("gradient6a").style.display = "none"
      document.getElementById("gradient6b").style.display = "none"
      document.getElementById("gradient6c").style.display = "none"
      document.getElementById("gradient8a").style.display = "none"
      document.getElementById("gradient8b").style.display = "none"
      document.getElementById("gradient8c").style.display = "none"
      document.getElementById("gradient9a").style.display = "none"
      document.getElementById("gradient9b").style.display = "none"
      document.getElementById("gradient9c").style.display = "none"

      document.getElementById("angelllbg").style.display = "none"
document.getElementById("angelll").style.display = "none"
document.getElementById("blessedtext").style.display = "none"
    }








    document.getElementById("symbol888").onclick=function(){
      a=8
      document.getElementById("randnoA").innerHTML=a;
      b=8
      document.getElementById("randnoB").innerHTML=b;
      c=8
      document.getElementById("randnoC").innerHTML=c;

      document.querySelector("body").style.backgroundColor = "black"
      document.querySelector("body").style.color = "black"
      document.getElementById("angelnumbername").innerHTML="balance"
      document.getElementById("details").innerHTML="everything is falling into place as it’s meant to be."
      document.getElementById("rand").style.display = "none"
      document.getElementById("randomizeButton").style.backgroundColor = "transparent"
      document.getElementById("angelnumbername").style.display = "block"
      document.getElementById("angelnumbername").style.color = "black"
      document.getElementById("details").style.display = "block"
      document.getElementById("details").style.color = "black"
      document.getElementById("blackbackground").style.display = "block"
      document.getElementById("gradient8a").style.display = "block"
      document.getElementById("gradient8b").style.display = "block"
      document.getElementById("gradient8c").style.display = "block"
      document.getElementById("blurbackground").style.display = "block"
      document.getElementById("symbol888").style.display = "block"
      
      document.getElementById("gradient1a").style.display = "none"
      document.getElementById("gradient1b").style.display = "none"
      document.getElementById("gradient1c").style.display = "none"
      document.getElementById("gradient2a").style.display = "none"
      document.getElementById("gradient2b").style.display = "none"
      document.getElementById("gradient2c").style.display = "none"
      document.getElementById("gradient3a").style.display = "none"
      document.getElementById("gradient3b").style.display = "none"
      document.getElementById("gradient3c").style.display = "none"
      document.getElementById("gradient4a").style.display = "none"
      document.getElementById("gradient4b").style.display = "none"
      document.getElementById("gradient4c").style.display = "none"
      document.getElementById("gradient5a").style.display = "none"
      document.getElementById("gradient5b").style.display = "none"
      document.getElementById("gradient5c").style.display = "none"
      document.getElementById("gradient6a").style.display = "none"
      document.getElementById("gradient6b").style.display = "none"
      document.getElementById("gradient6c").style.display = "none"
      document.getElementById("gradient7a").style.display = "none"
      document.getElementById("gradient7b").style.display = "none"
      document.getElementById("gradient7c").style.display = "none"
      document.getElementById("gradient9a").style.display = "none"
      document.getElementById("gradient9b").style.display = "none"
      document.getElementById("gradient9c").style.display = "none"

      document.getElementById("angelllbg").style.display = "none"
document.getElementById("angelll").style.display = "none"
document.getElementById("blessedtext").style.display = "none"
    }








    document.getElementById("symbol999").onclick=function(){
      a=9
      document.getElementById("randnoA").innerHTML=a;
      b=9
      document.getElementById("randnoB").innerHTML=b;
      c=9
      document.getElementById("randnoC").innerHTML=c;

      document.querySelector("body").style.backgroundColor = "black"
document.querySelector("body").style.color = "black"
document.getElementById("angelnumbername").innerHTML="release"
document.getElementById("details").innerHTML="let go of what’s no longer serving you."
document.getElementById("rand").style.display = "none"
document.getElementById("randomizeButton").style.backgroundColor = "transparent"
document.getElementById("angelnumbername").style.display = "block"
document.getElementById("angelnumbername").style.color = "black"
document.getElementById("details").style.display = "block"
document.getElementById("details").style.color = "black"
document.getElementById("blackbackground").style.display = "block"
document.getElementById("gradient9a").style.display = "block"
document.getElementById("gradient9b").style.display = "block"
document.getElementById("gradient9c").style.display = "block"
document.getElementById("blurbackground").style.display = "block"
document.getElementById("symbol999").style.display = "block"

document.getElementById("gradient1a").style.display = "none"
document.getElementById("gradient1b").style.display = "none"
document.getElementById("gradient1c").style.display = "none"
document.getElementById("gradient2a").style.display = "none"
document.getElementById("gradient2b").style.display = "none"
document.getElementById("gradient2c").style.display = "none"
document.getElementById("gradient3a").style.display = "none"
document.getElementById("gradient3b").style.display = "none"
document.getElementById("gradient3c").style.display = "none"
document.getElementById("gradient4a").style.display = "none"
document.getElementById("gradient4b").style.display = "none"
document.getElementById("gradient4c").style.display = "none"
document.getElementById("gradient5a").style.display = "none"
document.getElementById("gradient5b").style.display = "none"
document.getElementById("gradient5c").style.display = "none"
document.getElementById("gradient6a").style.display = "none"
document.getElementById("gradient6b").style.display = "none"
document.getElementById("gradient6c").style.display = "none"
document.getElementById("gradient7a").style.display = "none"
document.getElementById("gradient7b").style.display = "none"
document.getElementById("gradient7c").style.display = "none"
document.getElementById("gradient8a").style.display = "none"
document.getElementById("gradient8b").style.display = "none"
document.getElementById("gradient8c").style.display = "none"

document.getElementById("angelllbg").style.display = "none"
document.getElementById("angelll").style.display = "none"
document.getElementById("blessedtext").style.display = "none"
    }









    document.getElementById("symbol000").onclick=function(){
      a=0
      document.getElementById("randnoA").innerHTML=a;
      b=0
      document.getElementById("randnoB").innerHTML=b;
      c=0
      document.getElementById("randnoC").innerHTML=c;

      document.querySelector("body").style.backgroundColor = "black"
      document.querySelector("body").style.color = "white"
      document.getElementById("angelnumbername").innerHTML="new beginnings"
      document.getElementById("details").innerHTML="a reminder that you are the creator of your own destiny."
      document.getElementById("rand").style.display = "none"
      document.getElementById("randomizeButton").style.backgroundColor = "transparent"
      document.getElementById("angelnumbername").style.display = "block"
      document.getElementById("angelnumbername").style.color = "white"
      document.getElementById("details").style.display = "block"
      document.getElementById("details").style.color = "white"
      document.getElementById("blackbackground").style.display = "block"
      document.getElementById("symbol000").style.display = "block"
      
      document.getElementById("gradient1a").style.display = "none"
      document.getElementById("gradient1b").style.display = "none"
      document.getElementById("gradient1c").style.display = "none"
      document.getElementById("gradient2a").style.display = "none"
      document.getElementById("gradient2b").style.display = "none"
      document.getElementById("gradient2c").style.display = "none"
      document.getElementById("gradient3a").style.display = "none"
      document.getElementById("gradient3b").style.display = "none"
      document.getElementById("gradient3c").style.display = "none"
      document.getElementById("gradient4a").style.display = "none"
      document.getElementById("gradient4b").style.display = "none"
      document.getElementById("gradient4c").style.display = "none"
      document.getElementById("gradient5a").style.display = "none"
      document.getElementById("gradient5b").style.display = "none"
      document.getElementById("gradient5c").style.display = "none"
      document.getElementById("gradient6a").style.display = "none"
      document.getElementById("gradient6b").style.display = "none"
      document.getElementById("gradient6c").style.display = "none"
      document.getElementById("gradient7a").style.display = "none"
      document.getElementById("gradient7b").style.display = "none"
      document.getElementById("gradient7c").style.display = "none"
      document.getElementById("gradient8a").style.display = "none"
      document.getElementById("gradient8b").style.display = "none"
      document.getElementById("gradient8c").style.display = "none"
      document.getElementById("gradient9a").style.display = "none"
      document.getElementById("gradient9b").style.display = "none"
      document.getElementById("gradient9c").style.display = "none"
      document.getElementById("blurbackground").style.display = "none"

      document.getElementById("angelllbg").style.display = "none"
document.getElementById("angelll").style.display = "none"
document.getElementById("blessedtext").style.display = "none"
    }
























    //if the user achieves all 10 angel symbols, illustrations will be displayed

function blessed(){
  if (
    window.getComputedStyle(document.getElementById("symbol000")).display !== "none" &&
    window.getComputedStyle(document.getElementById("symbol111")).display !== "none" &&
    window.getComputedStyle(document.getElementById("symbol222")).display !== "none" &&
    window.getComputedStyle(document.getElementById("symbol333")).display !== "none" &&
    window.getComputedStyle(document.getElementById("symbol444")).display !== "none" &&
    window.getComputedStyle(document.getElementById("symbol555")).display !== "none" &&
    window.getComputedStyle(document.getElementById("symbol666")).display !== "none" &&
    window.getComputedStyle(document.getElementById("symbol777")).display !== "none" &&
    window.getComputedStyle(document.getElementById("symbol888")).display !== "none" &&
    window.getComputedStyle(document.getElementById("symbol999")).display !== "none"
  ) 
  {
    document.getElementById("angelllbg").classList.remove("hidden");
    document.getElementById("angelll").classList.remove("hidden");
    document.getElementById("blessedtext").classList.remove("hidden")
    }
    else{ 
      document.getElementById("angelllbg").classList.add("hidden");
      document.getElementById("angelll").classList.add("hidden");
      document.getElementById("blessedtext").classList.add("hidden");
    }
      

    }

    blessed();
















