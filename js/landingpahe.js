//get all the sections of the document
var sections=document.querySelectorAll('section'); //section is array of all section classes
//get the navigation item list 
const list=document.querySelector('.naviagation-items');
// set the property of navigation list to flex to dispay them in the row
list.style.cssText="display:flex;";
let listItem;
let listLink=[];
for(let i=0;i<sections.length;i++)
{
    listLink.push(document.createElement('a'));

    //const listLink=document.createElement('a');
    listLink[i].setAttribute('href',`#${sections[i].getAttribute('id')}`);
    listItem=document.createElement('li');
    listLink[i].textContent=sections[i].children[1].textContent;
    listItem.appendChild(listLink[i]);
    list.appendChild(listItem);
}
setTimeout(scrollListner(),0);
function scrollListner()
{
window.addEventListener('scroll',function(e)
{
if(this.window.scrollY<300)
{
    listLink[0].style.cssText='background-color:white; color:black;padding:1rem';
    listLink[1].style.cssText='background-color:none; color:white';
    listLink[2].style.cssText='background-color:none; color:white';
    listLink[3].style.cssText='background-color:none; color:white';
}
else if(this.window.scrollY > 300 &&this.window.scrollY<600){
    listLink[1].style.cssText='background-color:white; color:black;padding:1rem';
    listLink[0].style.cssText='background-color:none; color:white';
    listLink[2].style.cssText='background-color:none; color:white';
    listLink[3].style.cssText='background-color:none; color:white';
}
else if(this.window.scrollY > 600 &&this.window.scrollY<900){
    listLink[2].style.cssText='background-color:white; color:black;padding:1rem';
    listLink[0].style.cssText='background-color:none; color:white';
    listLink[1].style.cssText='background-color:none; color:white';
    listLink[3].style.cssText='background-color:none; color:white';
}
else{
    listLink[3].style.cssText='background-color:white; color:black;padding:1rem';
    listLink[0].style.cssText='background-color:none; color:white';
    listLink[1].style.cssText='background-color:none; color:white';
    listLink[2].style.cssText='background-color:none; color:white';
}
});
}
