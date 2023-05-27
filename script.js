let fah = document.getElementById("fah");
let cel = document.getElementById("cel");
let kel = document.getElementById("kel");
cel.addEventListener('input',function(){
    let c= this.value;
    let f = c * 9/5 + 32;
    let k = c + 273.15;
    if(!Number.isInteger(k,f)){
        k=k.toFixed(4);
        f=f.toFixed(4);
   }
    fah.value=f;
    kel.value=k;
});
fah.addEventListener('input',function(){
    let f= this.value;
    let c =(f-32) * 5/9;
    let k = ((f-32)*5/9) + 273.15;
    if(!Number.isInteger(c,k)){
        c=c.toFixed(4);
        k=k.toFixed(4);
   }
    cel.value=c;
    kel.value=k;
});
kel.addEventListener('input',function(){
    let k= this.value;
    let c = k - 273.15;
    let f = (k * 9/5) - 459.67;
    if(!Number.isInteger(c,f)){
         c=c.toFixed(4);
         f=f.toFixed(4);
    }
    cel.value=c;
    fah.value = f;
});

