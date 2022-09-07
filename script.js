fetch('https://fakestoreapi.com/products').then((data)=>{
    return data.json();
}).then((objectData)=>{
    console.log(objectData[0].title);
    let tableData = "";
    objectData.map((values)=>{
        tableData=`<h2>${values,title}</h2>`;
    })

})