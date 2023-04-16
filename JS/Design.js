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

    let imageSketchSection = document.createElement("section")

    article.append(imageSketchSection);

    //sketch image arrays
    imgSrcDArray = ["DBlogPosts","DHome","DLogin","DSignIn, DTheory", "DWireframes"];
    imgSrcMArray = ["MBlogPosts","MHome","MLogin","MSignUp, DTheory", "MWireframes"];



    for(let i = 0; i < imgSrcDArray.length; i++)
    {
        imageSketchSection.classList.add("designGridImg");
        let img = document.createElement("img")
        imageSketchSection.append(img);
        let pathPrefix = "Images/Wireframes/"
        img.src = pathPrefix+ imgSrcDArray[i]+".png";
       
    }



}

function designWireframes(){
    let subheading2 = document.createElement("h2");
    subheading2.innerText = "Wireframes";


}