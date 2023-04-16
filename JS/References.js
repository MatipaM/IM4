function loadReferences(){

    article = document.createElement("article");
  
    let main = document.getElementById("main");
    main.append(article);


    let title = document.createElement("h1");

    let referenceContainer = document.createElement("section");

    article.append(title);
    article.append(referenceContainer);

    referenceContainer.classList.add("referenceContainer");

    title.innerText = "References";

    ReferenceArray = ["Blog Post 1","", "Blog Post 2", ""];

    for(let i = 0; i < ReferenceArray.length; i++)
    {
        let p = document.createElement("p");
        referenceContainer.append(p);
        p.innerText =ReferenceArray[i];

        if(i==0 || i==2) //title
        {
            p.classList.add("referenceTitle");
        }
    }




}