let products = ["iphone", "samsung", "sony"]

// display table
function display(){let data = "<table width='500px'>"
data += "<tr>"
data += "<th>STT</th>"
data += "<th>Product Name</th>"
data += "<th colspan='2' style='color: red'>"+ products.length +" products</th>"
data += "</tr>"
for (let i =0; i<products.length; i++){
    data +="<tr>"
    data += "<td>"+(i+1)+"</td>"
    data += "<td>"+products[i]+"</td>"
    data += "<td><button onclick='Edit("+i+")'>Edit</button></td>"
    data += "<td><button onclick='Delete("+i+")'>Delete</button></td>"
    data +="</tr>"
}
data += "</table>"
document.getElementById("table1").innerHTML = data}

display()

// nut Add
function Add(){
    let newproduct = document.getElementById('newproduct').value
    products.push(newproduct)
    display()
}

function Edit(a){
    let oldname = products[a]
    products[a] = prompt("Nhập vào tên mới của sản phẩm: " + oldname)
    display()
}

function Delete(a){
    products.splice(a,1)
    display()
}