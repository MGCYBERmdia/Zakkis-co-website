const searchbox = document.getElementById('search-input');
const products = document.querySelectorAll("#productlist .container-li");
const searchicon = document.getElementById("search-icon");
searchicon.addEventListener('click' , () =>{
    searchbox.focus();
});
searchbox.addEventListener('input', () => {
    const searchtext = searchbox.value.toLowerCase();
    products.forEach((product =>{
        const productname  = product.querySelector('p').textContent.toLowerCase();
        if(productname.includes(searchtext)){
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }
    }));
});


const navbartoggle = document.querySelector(".responsive-icon");
const navilinks = document.querySelector(".naviga-links ")

navbartoggle.addEventListener('click' ,() =>{
    navbartoggle.classList.toggle('active');
    navilinks.classList.toggle('active');
})
