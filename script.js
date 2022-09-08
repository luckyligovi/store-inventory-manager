fetch('https://fakestoreapi.com/products')
.then((apiData)=>{return apiData.json()})
.then((objectData)=>{
    console.log(objectData)
        let tableData = "";
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