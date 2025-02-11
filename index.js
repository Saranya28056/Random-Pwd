const box=document.getElementById("pwd");
const trigger=()=>{
    let tot=0;
    let a='123456789';
    let b='abcdefghijklmnopqrstuvwxyz';
    let c='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let d=["-","_","%","#","@"];
    let bran=Math.floor(Math.random()*b.length);
    let aran=Math.floor(Math.random()*a.length);
    let cran=Math.floor(Math.random()*c.length);
    let dran=Math.floor(Math.random()*d.length);
      let pawd=a[aran]+b[bran]+c[cran]+d[dran];
      box.value=pawd;
      box.value.style.color=green; 
    
    

};
