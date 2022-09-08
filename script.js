let products = []

fetch('https://fakestoreapi.com/products')
.then((apiData)=>{return apiData.json()})
.then((objectData)=>{
        let tableData = "";
        products = objectData
        objectData.map((values)=>{
        tableData+=`
        <tr>
            <td>${values.title}</td>
            <td>${values.description}</td>
            <td>${values.price}</td>
            <td><img src="${values.image}"/</td>
        </tr>`;
    })

    document.getElementById("t-body").innerHTML = tableData;
}).catch((error)=>{
    console.log(error)
})


document.getElementById("myBtn").addEventListener("click", function() {
    alert("clothes,shoes and electrical gadjets");
  });
  function changeText(id) {
    id.innerHTML = "Store table";
  }


formObj = document.getElementById("search")
formObj.addEventListener("submit", myFunction);

inputValue = document.getElementById("input-value")

function myFunction(e) {
    e.preventDefault()
    const data = new FormData(e.target);
    console.log([...data.entries()]);
    
    const filteredProducts = products.filter(
        (product) => {
            const title = product.title.toLowerCase()
            const value = inputValue.value.toLowerCase()

            return title.includes(value)
    });
        
    console.log('>>>>>>>', filteredProducts)

    let tableData2 = ""

    filteredProducts.map((values)=>{
        tableData2 +=`
        <tr>
            <td>${values.title}</td>
            <td>${values.description}</td>
            <td>${values.price}</td>
            <td><img src="${values.image}"/</td>
        </tr>`;
    })

    document.getElementById("t-body").innerHTML = tableData2;

};