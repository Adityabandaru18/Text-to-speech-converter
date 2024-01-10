let s= new SpeechSynthesisUtterance();
let v=[];
let voices=document.querySelector("select");
window.speechSynthesis.onvoiceschanged=()=>{
    v=window.speechSynthesis.getVoices();
    s.voice=v[0];
    v.forEach((voice,i)=>(voices.options[i]) = new Option(voice.name,i))
}
voices.addEventListener("change",()=>{
    s.voice=v[voices.value];
})
let b=document.querySelector("button");
b.addEventListener("click",()=>{
    s.text=document.querySelector("textarea").value;
    window.speechSynthesis.speak(s);
})