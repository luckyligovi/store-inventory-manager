fetch('https://fakestoreapi.com/products').then((data)=>{
    return data.json();
}).then((objectData)=>{
    console.log(objectData[0].title);
    let tableData = "";
    objectData.map((values)=>{
         tableData+=`   <tr>
         <td>Smart phone</td>
        <td>Samsung</td>
        <td>Ksh 15,000</td>
      </tr>
      <tr>
        <td>Smart phone</td>
        <td>Iphone</td>
        <td>Ksh 35,000</td>
      </tr>
      <tr>
        <td>cloth</td>
        <td>T-shirt</td>
        <td>Ksh 1,000</td>
      </tr>
      <td>Food</td>
      <td>Pizaa</td>
      <td>Ksh 1,200</td>
    </tr>`;
    })
    document.getElementById("t-body").innerHTML = tableData;

})