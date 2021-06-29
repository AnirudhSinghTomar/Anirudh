
let arr =["p","button","li"];
let text =["Hey this is Anirudh Singh Tomar","Click to Know me","By"];
for(let i=0;i<arr.length;i++)
{
    var node = document.createElement(arr[i]);
    var textnode = document.createTextNode(text[i]);         // Create a text node
    node.appendChild(textnode); 
    var element = document.getElementById("body");
    element.appendChild(node); 
    console.log("Added a new node",arr[i]);                           // Append the text to <li>
    
}

// var list =document.getElementById("body");
// for(let  j=0;list[j];j++)
// {
//     console.log(list[j]);
// }
// var all = document.getElementsByTagName("body");

// for (var i=0, max=all.length; i < max; i++) {
//     console.log("Added element",all[i]);
// }