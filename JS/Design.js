function loadDesign(){
    //clear main

    let main = document.getElementById("main");
    let title = document.createElement("h1");
    let subheading = document.createElement("h2");

    article = document.createElement("article");

    main.append(article);
    article.append(title);
    article.append(subheading);

    subheading.innerText = "Rough Sketches";
    title.innerText = "Design";

    let imageSection = document.createElement("section")

    article.append(imageSection);
    imgSrcArray = ["","",""];

    for(let i = 0; i < imgSrcArray.length; i++)
    {
        let img = document.createElement("img")
        imageSection.append(img);
        let pathPrefix = "Images/"
        img.src = pathPrefix+ imgSrcArray[i];
       
    }



}

function designWireframes(){
    let subheading2 = document.createElement("h2");
    subheading2.innerText = "Wireframes";


}