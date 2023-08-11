var list1=[
    {"image":"../public/images/Leather%20mid-heel%20Sandals.jpg","color":"Brown","image2":"./public/images/Leather mid-heel Sandals1.jpg","desc":"Shoes","title":"Leather mid-heel Sandals","price":129.00,"stars":4},
    {"desc":"Dresses","title":"Cotton floral print Dress","color":"Pink","image2":"./public/images/product-6.jpg","price":40.00,"image":"./public/images/dress.jpg","stars":5},
    {"desc":"Shoes","image":"./public/images/shoes.jpg","color":"Blue","image2":"./public/images/product-122.jpg","title":"Leather Sneakers","price":85.00,"stars":3},
    {"desc":"Tops","image":"../public/images/tops.jpg","color":"White","image2":"./public/images/tops2.jpg","title":"Cropped cotton Top","price":29.00,"stars":4},
    {"image":"../public/images/dresses.jpg","color":"Yellow","image2":"./public/images/dresses2.jpg","desc":"Dresses","title":"Floral print midi Dress","price":50.00,"stars":3},
    {"image":"../public/images/bags.jpg","color":"Brown","image2":"./public/images/product-123.jpg","desc":"Bags","title":"Suede cross body Bag","price":49.00,"stars":5},
    {"image":"../public/images/skirts.jpg","color":"White-Black","image2":"./public/images/product-124.jpg","desc":"Skirts","title":"Printed A-line Skirt","price":79.00,"stars":4},
    {"image":"../public/images/shoes2.jpg","color":"Brown","image2":"./public/images/shoes2-1.jpg","desc":"Shoes","title":"Heel strappy Sandals","price":90.00,"stars":2}
];
function fastsize(value){
    document.getElementById("size").innerHTML=value;
}
function fastsize1(value){
    document.getElementById("size44").innerHTML=value;
}
function displaynonedown(x){
    switch(x){
        case 1:
            document.getElementById('ds').style='display:none;';
            break;
        case 2:
             document.getElementById('catlog').style='display:none';
             break;
        case 3:
            document.getElementById('pages').style='display:none';
            break;
        case 4:
            document.getElementById('blog').style='display:none';
            break;
        default:
            document.getElementById('ds').style='display:none;';
            document.getElementById('catlog').style='display:none';
            document.getElementById('pages').style='display:none';
            document.getElementById('blog').style='display:none';
    }
}
function displaydropdown(y){
    switch(y){
        case 1:
             document.getElementById('ds').style='display:block; position:absolute; top:60px;';
             break;
        case 2:
            document.getElementById('catlog').style='position:absolute; top:60px; left:0px; display:block;'; 
            break;
        case 3:
            document.getElementById('pages').style='display:block; position:absolute; top:60px;'; 
            break;
        case 4:
            document.getElementById('blog').style='display:block; position:absolute; top:60px;';
            break;
    }
}
function addside(cp){
    if(cp===1)
    {
        document.getElementById('coverwomen').style="margin-left:4px;";
    }
    else if(cp===2){
        document.getElementById('covermen').style="margin-left:4px;";
    }
    else if(cp===3){
        document.getElementById('coverkids').style="margin-left:4px;";
    }
    else {
        document.getElementById('ra').style="margin-left:4px;";
    }
}
function lessside(cp){
    if(cp===1){
        document.getElementById('coverwomen').style="margin-left:-4px;";
    }
    else if(cp===2){
        document.getElementById('covermen').style="margin-left:-4px;";
    }
    else if(cp===3){
        document.getElementById('coverkids').style="margin-left:-4px;";
    }
    else{
         document.getElementById('ra').style='margin-left:-4px;';
    }
}
function disapper(m){
    if(m===0){
        document.getElementById("searchbar").style="display:block;";
        document.getElementById("raj").style="display:none;";
    }
    else{
        document.getElementById("searchbar").style="display:none;";
        document.getElementById("raj").style="display:block;";
    }
}
function autocomplete(input, list) {
    //Add an event listener to compare the input value with all countries
    input.addEventListener('input', function () {
        //Close the existing list if it is open
        closeList();

        //If the input is empty, exit the function
        if (!this.value){
            return;
        }
        //Create a suggestions <div> and add it to the element containing the input field
        suggestions = document.createElement('div');
        suggestions.setAttribute('id', 'suggestions');
        this.parentNode.appendChild(suggestions);
        
        //Iterate through all entries in the list and find matches
        for (let i=0; i<list.length; i++) {
            if (list[i].desc.toUpperCase().includes(this.value.toUpperCase())) {
                //If a match is foundm create a suggestion <div> and add it to the suggestions <div>
                suggestion = document.createElement('ul');
                suggestion.style="list-style: none; margin: 0px 0px 2px -25px";
                suggestion.innerHTML = `
                    <li>
                        <a onclick="sdc(${i})">${list[i].title}</a>
                        <img src="${list[i].image}" width="30px" height="30px">
                    </li>
                `;
                suggestions.appendChild(suggestion);
            }
        }

    });
    function closeList() {
        let suggestions = document.getElementById('suggestions');
        if (suggestions)
            suggestions.parentNode.removeChild(suggestions);
    }
}
function sdc(s1){
    localStorage.setItem("item",s1);
    window.location.href='./cartpage.html';
    // document.getElementById(a.id).addEventListener("click",function(event){ 
    //     window.location.href="./cartpage.html";
    // })
}
