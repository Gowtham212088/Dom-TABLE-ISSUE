
// Element retrival.
// Already HTML elements are there, We need to retrive the elements.
//   1) Document.getElementById('');
// This will work only for Id.

function foo(){
    var inp = document.getElementById('main').value;
    console.log(inp);
    var inp1 = document.getElementById('main1').value;
    console.log(inp1); 
}


// It is used to retrive the single Element.
// Null will be the output if the Id is unavailable.

 // 2) Document.getElementsByClassname: It returns all the elements whose class name is Given class name,
 // , The return type is array.
function color(){
    var dcn = document.getElementsByClassName('google');
    for(i=0; i<dcn.length;i++){
        dcn[i].style.color="orange";
    }
    
}
// 3)document.getElementsByTagname : It returns all the elements whose tag name is div.
// Return type is an array
function tags (){
    var tag = document.getElementsByTagName('span');
    for(i=0;i<tag.length;i++){
       tag[i].style.backgroundColor="red"
        }
    }
// 4) Document.querySelector
// 5) Document.querySelectorAll

// 1) How to create Table dynamically along with the functions. 
/*
// Creating Bootstrap Table
var table = document.createElement('table');
table.setAttribute('class','table');


// Creating the thead.
var thead = document.createElement('thead');
thead.setAttribute('class','thead-dark')

// Create a row.
var tr = document.createElement('tr');

// Create a th tag ().
   
var th1 = createthtd('th','Firstname');

var th2 = createthtd('th','Secondnname');

var th3 = createthtd('th','Handle')

tr.append(th1, th2, th3);
thead.append(tr);
table.append(thead)


// Create the body tag of table.

var tbody = document.createElement('tbody');

// creating a tr element.
var tr1 =document.createElement('tr');

// Creating td element
var td1 = createthtd('td','guvi');
var td2 = createthtd('td','geek');

tr1.append(td1,td2);
tbody.append(tr1);
table.append(tbody);
document.body.append(table);

// <th> firstname</th>
// elementname -> <th>
//value -> firstname
function createthtd (elementname,value){
    var td  = document.createElement(elementname);

    td.innerHTML=value;
    return td;
}
*/
//  Table No 2

// Creating a table element

var table = document.createElement('table');
table.setAttribute("class","table table-hover table-dark");

//Creating a thead element.
var thead = document.createElement("thead");

// Creating tr element.
var tr = document.createElement("tr");

// Creating element th
var th = createthtd(th, No);
var th1 = createthtd(th, Firstname);
var th2 = createthtd(th, Lastname);
var th3 = createthtd(th, Handle);
tr.append(th,th1,th2,th3);
thead.append(tr);
table.append(thead);

// Creating Tbody
var tbody = document.createElement("tbody");

// creating Tr
var tr1 = document.createElement('tr');


// Creating th
var th5 = createthtd(th, 1);

// Creating TD
var td = createthtd(th, Mark);
var td1 = createthtd(td, Otto);
var td2 = createthtd(td, mdo);
th5.append(td,td1,td2);
tr1.append(th5);
tbody.append(tr1);
table.append(tbody);
document.body.append(table);

// Function for Th Td
function createthtd (elementname, value){
var  ele = document.createElement(elementname);
ele.innerHTML=value;
return ele;
}


























