var insert=function insert() {
    let row = document.createElement('tr');
    let col1 = document.createElement('td');
    let col2 = document.createElement('td');
    let col3 = document.createElement('td');
    let col4 = document.createElement('td');
    row.appendChild(col1);
    row.appendChild(col2);
    row.appendChild(col3);
    row.appendChild(col4);
    let a=document.getElementById('roll').value;
    let b=document.getElementById('name').value;
    let c=document.getElementById('year').value;
    let d=document.getElementById('stream').value;
    col1.innerHTML = a;
    col2.innerHTML = b;
    col3.innerHTML = c;
    col4.innerHTML = d;
   const roll = ()=> 
   { 
   alert(`Please enter rollno.`);
   }; 
   if(a == "")
   {
   roll();
   return false;
   }
    const name = ()=> 
   { 
   alert(`Please enter Name`);
   }; 
   if(b == "")
   {
   name();
   return false;
   }
   const year = ()=> 
   { 
   alert(`Please enter year`);
   }; 
   if(c == "")
   {
   year();
   return false;
   }
   const stream = ()=> 
   { 
   alert(`Please enter stream`);
   }; 
   if(d == "")
   {
   stream();
   return false;
   }
   
    if(/[^0-9]/.test(a))
     {
        alert(`Rollnumber should be a numeric value`);
     }
     else if( /[^a-zA-Z]/.test( b ) ) 
     {
        alert('Enter correct format for name');
     }
     else if(/[^0-9]/.test(c))
     {
        alert('Year should be a numeric value'); 
     }
    else if(/[^a-zA-Z]/.test( d ))
     {
        alert('Input is not a valid stream'); 
     }
     else
    {
        const table = document.getElementById("table");
        table.appendChild(row);
        document.getElementById('roll').value="";
        document.getElementById('name').value="";
        document.getElementById('year').value="";
        document.getElementById('stream').value="";
    }       
}

var Delete=function Delete() {
    const i = prompt("enter the row number which you want to delete ");
    let t = document.getElementsByTagName('tr');
    if(i<1 || i>t.length)
    alert('No such row no. exists');
    else
    document.getElementById("table").deleteRow(i);
}

var edit=function edit() {
    let roll = prompt("Enter the roll number you want to edit");
    let t = document.getElementsByTagName('tr');
    let i = 0;
    for (let j of t  ) {

        if (j.children[0].innerHTML == roll) 
        {
            let m = prompt("Enter rollno.");
            let n=  prompt("Enter name");
            let o = prompt("Enter passing year");
            let q = prompt("Enter stream");
            if(m=="" || n==""  || o== "" || q=="")
            {
                return;
            }
            if(/[^0-9]/.test(m))
            {
               alert(`Rollnumber should be a numeric value`);
               return;
            }
            else if( /[^a-zA-Z]/.test( n ) ) 
            {
               alert('Enter correct format for name');
               return;
            }
            else if(/[^0-9]/.test(o))
            {
               alert('Year should be a numeric value'); 
               return;
            }
            else if(/[^a-zA-Z]/.test( q ))
            {
               alert('Input is not a valid stream');
               return; 
            } 
            else
            {
           
              j.children[0].innerHTML = m;
              j.children[1].innerHTML = n; 
              j.children[2].innerHTML = o;
              j.children[3].innerHTML = q;
              return;
            }
            
        }
                      i++;
    }
    if (i == t.length) {
        alert("No such rollno. exists");
        return;
    }
}