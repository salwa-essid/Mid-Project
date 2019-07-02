$(document).ready(function(){
    $(".wave-box").ripple({
      width   : 250,
      height  : 250,
      duration: 2000,
      color: "rgba(203, 237, 137, 0.5)",
      event:"mousemove"
      });
    });

function a()
{
  let x =document.querySelectorAll('input')
  let num=document.querySelectorAll('#number')
  for (i=0;i<x.length-1;i++)
    if (x[i].value=="")
    {
          alert(`ce champ ${x[i].name} est vide`);
          return
    
    }
    for (i=0;i<num.length-1;i++)
    if ((num[i].value)<0)
    { 
      alert('donner une valeur positif');
      return
    }


}

    
  //  let x =document.querySelectorAll('input')
  //   document.getElementById("demo").innerHTML = function ();
    // function a() {
   
    // for (i=0;i<x.length-1;i++)
    // if (x[i].value=="")
    // {
    //       alert("ce champ est vide");
    
    // }
    // document.getElementById("demo").innerHTML = function (a)
