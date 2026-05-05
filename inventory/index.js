let addbtn = document.getElementById('addbtn')
let containertwo = document.getElementById('container-two')
let products =JSON.parse(localStorage.getItem("key")) || []
let addProduct = document.getElementById('addProductbtn')
let editIndex = null

  addbtn.addEventListener('click', () => {
    containertwo.classList.add('open')
  })
  
  document.getElementById('closebtn').addEventListener('click', () => {
    containertwo.classList.remove('open')
  })
  

addProduct.addEventListener("click", function(){

    let product = document.getElementById('product').value
    let category = document.getElementById('category').value
    let price = parseFloat( document.getElementById('price').value)
    let qty = Number(document.getElementById('qty').value)

    if (product !=="" && product !==null && !isNaN(price) && !isNaN(qty) && category !==null) {

        

        if(editIndex!==null){
            products[editIndex] = {pProd:product, pPrice: price, pCategory: category, pQty: qty}
            editIndex= null
            alert("Product Updated!")
        }
        else{
            products.push({
                pProd: product, pCategory: category,pPrice: price,pQty: qty
            })
        }

        localStorage.setItem("key", JSON.stringify(products))
        localStorage.getItem("key")
        JSON.parse(localStorage.getItem("key"))
        let result = JSON.parse(localStorage.getItem("key"))


        tableRender()
        console.log(result)
        alert("Product Added!")
        document.getElementById('product').value = ""
         document.getElementById('price').value = ""
        document.getElementById('qty').value = ""
        
    }
    else{
        alert("please input the fields")
    }
    
    
})


function tableRender(){
    let searchValue = document.getElementById('searchInput').value.toLowerCase()
    
    let filtered = products.filter(product => 
        product.pProd.toLowerCase().includes(searchValue) ||
        product.pCategory.toLowerCase().includes(searchValue)
    )
    
    renderFiltered(filtered)
    updatedcard()
}

function renderFiltered(filtered){
    let tbody = document.getElementById('tbody')
    
    if(filtered.length === 0){
        tbody.innerHTML = `<tr><td colspan="7" style="text-align:center; color: gray;">No products found</td></tr>`
        return
    }
    
    tbody.innerHTML = filtered.map((product, index) =>
`<tr>
    <td>${String(index + 1).padStart(2, '0')}</td>
    <td>${product.pProd}</td>
    <td>${product.pCategory}</td>
    <td>${product.pPrice}</td>
    <td>${product.pQty}</td>
    <td>
        <span class="${product.pQty === 0 ? 'badge-out' : product.pQty <= 5 ? 'badge-low' : 'badge-in'}">
        ${product.pQty === 0 ? "Out of Stock" : product.pQty <= 5 ? "Low Stock" : "In Stock"}
        </span>
    </td>
    <td class="del-edit">
        <button onclick="editProduct(${products.indexOf(product)})" class="greenbtn">Edit</button>
        <button onclick="deleteProduct(${products.indexOf(product)})">Delete</button>
    </td>
</tr>`).join("")
}

function deleteProduct(index){
    products = products.filter((product, i)=> i!==index)
    localStorage.setItem("key", JSON.stringify(products))
    tableRender()

}
function updatedcard(){
    let total = products.length
    let inStock = products.filter(product => product.pQty >5).length
    let lowStock = products.filter(product => product.pQty <=5).length
    let totalValue = products.reduce((sum, product) => sum + (product.pPrice * product.pQty), 0)
 
     document.getElementById('total').textContent = total
     document.getElementById('inStock').textContent = inStock
     document.getElementById('lowStock').textContent = lowStock
     document.getElementById('pirceValue').textContent = totalValue
}
document.getElementById('cancelbtn').addEventListener('click', () => {
    containertwo.classList.remove('open')
})

function editProduct(index){
    editIndex = index
    containertwo.classList.add('open')
    document.getElementById('product').value = products[editIndex].pProd
    document.getElementById('price').value = products[ editIndex].pPrice
    document.getElementById('qty').value = products[editIndex].pQty



}
document.getElementById('searchInput').addEventListener('input', function(){
    let searchValue = this.value.toLowerCase()
    
    let filtered = products.filter(product => 
        product.pProd.toLowerCase().includes(searchValue) ||
        product.pCategory.toLowerCase().includes(searchValue)
    )
    
    renderFiltered(filtered)
})





tableRender() 

