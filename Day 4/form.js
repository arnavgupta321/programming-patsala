// const firstNamechange=(e)=>{
//     // console.log('firstName');
//     console.log(e);
// }
// let fun1 = (e) => {
//     console.log(e.target.value);
//     if(e.target.value.length < 5){
//         e.target.style.border = "2px solid red";
//     }
//     else{
//         e.target.style.border = "2px solid green";
//     }
// }
// let submitForm = (e) => {
//     e.preventDefault();
//     let form = document.forms[0];
//     let data = new FormData(form);
//     let obj = {};
//     for(let [key, value] of data.entries()){
//         obj[key] = value;
//     }
//     console.log(obj);
// }
// const fun1 = (e)=>{
//     e.preventDefault();
//     console.log(e.target.value)
// }
// function submitForm(e){
//     e.preventDefault();
//     const t=e.target;
//     for(let i=0;i<i.length;i++){
//         const ty= t[i].type;
//         const v1=t[1].value;
//         console.log(ty,v1);
//         if(ty=='cheakbox'){
//             console.log(t[1].cheaked)
//         }

//     }
// }


// const firstNameChange = (e)=>{
//     console.log(e.target.value);
// }
// const firstNameChange = (e)=>{
//     console.log(e);
// }

const firstNameChange = (e)=>{
    const val = e.target.value;
    if(val.length>3){
        console.log('correct');
    }
}
const  submitForm = (e)=>{
    e.preventDefault();
  
    for(let i=0;i<e.target.length;i++)
    {
        const a = e.target;
        
        if(a[i].type == 'checkbox'){
            if(a[i].checked){
                console.log(a[i].name+"  "+a[i].value);
            }
        }
        else{
            console.log(a[i].name+"  "+a[i].value);
        }
    }
}