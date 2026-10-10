const searchbar2 = document.querySelector("#searchbar2");
const searchitem = document.querySelectorAll("#search-item .li-img");
const rings = document.querySelector("#ring .ring-img")
searchbar2.addEventListener("input" , ()=>{
    const searchtext = 
    searchbar2.value.toLowerCase();

    searchitem.forEach(product =>{
        const productname =
        product.querySelector("#name").textContent.toLowerCase();

        if(productname.includes(searchtext)){
            product.style.display = "";
        }else{
            product.style.display = "none";
        }
    });
});