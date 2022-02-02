var fnamei=document.querySelector(".firstnamei");
var lnamei=document.querySelector(".lastnamei");
var maili=document.querySelector(".emaili");
var phonei=document.querySelector(".phonei");
var messagei=document.querySelector(".messagei");
var submit=document.querySelector(".send");
var count=1;
var detail=document.querySelector(".details")

submit.addEventListener("click", function(){
    var webi=document.querySelector('input[name="websitei"]:checked').value;
    if(webi==="")
    {
        webi="None";
    }
    if(phonei.value==="")
{
    phonei.value="NA";
}
if(messagei.value==="")
{
    messagei.value="NA";
}

    if(fnamei.value!==""&&lnamei.value!==""&&maili.value!=="")
{
    if(maili.value.includes("@"))
    {
    const para=document.createElement("p");
    const node =document.createTextNode("Message "+count+":      First Name :"+fnamei.value+";    Last Name :     "+lnamei.value+";    Email : "+maili.value+";   Phone :+91 "+phonei.value+";   Website Need : "+
    webi+";    Message : "+messagei.value);
    para.appendChild(node);
    detail.appendChild(para);
    count++;
    document.querySelector("form").reset();
    }
    else alert("Enter valid Mail");
}
else alert("Please Enter Required Fields");
})

