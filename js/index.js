var productNameInput=document.getElementById(productNameInput);
var productPriceInput=document.getElementById(productPriceInput);
var productCategoryInput=document.getElementById(productCategoryInput);
var productDescInput=document.getElementById(productDescInput);
var addBtn=document.getElementById(addProduct);
var products;
var mainIndex=0;
if(localStorage.getItem("products") != null){
    products=JSON.parse(localStorage.getItem("products"))
    displayPoducts()
}else{
    products=[]
}

function addProduct(){
    var product={
        name: productNameInput.value,
        price: productPriceInput.value,
        category:productCategoryInput.value,
        description: productDescInput.value
    } 
if(addBtn.innerHTML=="Add Product"){
    products.push(product)
}else{
    products.splice(mainIndex,1,product)
    addBtn.innerHTML="Add product"
}
localStorage.setItem("products",JSON.stringify(products))
displayPoducts()
}

function displayPoducts(){
    
var cartoona =""
for( var i=0; i<products.length;i++){
    cartoona +=` <tr>
    <td>${i}</td>
    <td>${products[i].name}</td> 
    <td>${products[i].price}</td> 
    <td>${products[i].category}</td> 
    <td>${products[i].description}</td>
    <td><button onclick="updateProduct(${i}) class="btn btn-outline-primary">Update</button></td>
    <td><button onclick="deleteProduct()" class="btn btn-outline-danger">Delete</button></td>
    
    </tr> `
}
document.getElementById("tableBody").innerHTML=cartoona;

}

function deleteProduct(index){
    mainIndex=index;
    products.splice(index,1)
    displayPoducts()
    localStorage.setItem("products",JSON.stringify(products))
}

function updateProduct(index){
productNameInput.value=products[index].name;
productPriceInput.value=products[index].price;
productCategoryInput.value=products[index].category;
productDescInput.value=products[index].description;
addBtn.innerHTML="Update Product"
 displayPoducts()
}
