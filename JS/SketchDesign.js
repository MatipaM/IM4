
    console.log("design loaded");

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
    imgSketchArray = ["HomePage", "Design", "Theory", "References"];


    imgSrcDArray = ["DBlogPosts","DHome","DLogin","DSignIn, DTheory", "DWireframes"];
    imgSrcMArray = ["MBlogPosts","MHome","MLogin","MSignUp, DTheory", "MWireframes"];



    for(let i = 0; i < imgSketchArray.length; i++)
    {
        imageSketchSection.classList.add("designSketchGrid");
        let img = document.createElement("img")
        imageSketchSection.append(img); 
        let pathPrefix = "Images/Sketches/"
        img.src = pathPrefix+ imgSketchArray[i]+".jpg";
       
    }

    let btnSection = document.createElement("section");
    article.append(btnSection);

    btnSection.classList.add("btnSection");
    let button = document.createElement("a");
    button.innerText  ="Wireframes";

    let btnIcon = document.createElement("img");
    btnIcon.classList.add("btnIcon");
    btnIcon.src = "Images/Icons/RightArrow.png";
    button.append(btnIcon);

    btnSection.append(button);

        button.onclick = function()
    {
        location.href = "Wireframes.html";
    }



