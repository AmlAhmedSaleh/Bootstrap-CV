var PersonalInfo = document.getElementById('PersonalInfo');
var Education = document.getElementById('Education');
var Experience = document.getElementById('Experience');
var Contact = document.getElementById('Contact');


var binfor = document.getElementById('Binfo');
var beduc = document.getElementById('Bedu');
var bexpe = document.getElementById('Bexp');
var bcont = document.getElementById('Bcont');


function DPersonalInfo(){
    PersonalInfo.style.transform="translateX(0)";
    Education.style.transform="translateX(350%)";
    Experience.style.transform="translateX(350%)";
    Contact.style.transform="translateX(350%)";
    
    PersonalInfo.style.transitionDelay=".4s";
    Education.style.transitionDelay="0s";
    Experience.style.transitionDelay="0s";
    Contact.style.transitionDelay="0s";
  

}
function DEducation(){
    PersonalInfo.style.transform="translateX(350%)";
    Education.style.transform="translateX(0)";
    Experience.style.transform="translateX(350%)";
    Contact.style.transform="translateX(350%)";
   
    PersonalInfo.style.transitionDelay="0s";
    Education.style.transitionDelay=".4s";
    Experience.style.transitionDelay="0s";
    Contact.style.transitionDelay="0s";
  
}
function DExperience(){
    PersonalInfo.style.transform="translateX(350%)";
    Education.style.transform="translateX(350%)";
    Experience.style.transform="translateX(0)";
    Contact.style.transform="translateX(350%)";
   
    PersonalInfo.style.transitionDelay="0s";
    Education.style.transitionDelay="0s";
    Experience.style.transitionDelay=".4s";
    Contact.style.transitionDelay="0s";
   
}
function DContact(){
    PersonalInfo.style.transform="translateX(350%)";
    Education.style.transform="translateX(350%)";
    Experience.style.transform="translateX(350%";
    Contact.style.transform="translateX(0)";
  
    PersonalInfo.style.transitionDelay="0s";
    Education.style.transitionDelay="0s";
    Experience.style.transitionDelay="0s";
    Contact.style.transitionDelay=".4s";
   
}
