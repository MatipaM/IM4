    console.log("loading wireframe");

    let slideNumber;
    let article = document.createElement("article");
    main.append(article);

    let wireframeSection = document.createElement("section");
    article.append(wireframeSection);
    wireframeSection.classList.add("wireframeSection")

    let h1 = document.createElement("h1");
    h1.innerText = "Wireframes";
    wireframeSection.append(h1);

    let h2 = document.createElement("h2");
    let h3 = document.createElement("h3");
    let img = document.createElement("img");

    switch(slideNumber)
    {
        case 0:
            h2.innerText = "";
            h3.innerText = "";
            break;
        case 1:
            h2.innerText = "";
            h3.innerText = "";
            break;
        case 2:
            h2.innerText = "";
            h3.innerText = "";
            break;
        case 3:
            h2.innerText = "";
            h3.innerText = "";
            break;
        case 4:
            h2.innerText = "";
            h3.innerText = "";
            break;
        case 5:
            h2.innerText = "";
            h3.innerText = "";
            break;
    }

    wireframeSection.append(h2);
    wireframeSection.append(h3);
    wireframeSection.append(img);

    let buttonSection = document.createElement("section");
    main.append(buttonSection);

    buttonSection.classList.add("buttonSection");
    for(let i=0; i<2; i++)
    {

        let button = document.createElement("a");
        button.classList.add("btnSection");
        let text;
        let iconSrc;

        switch (i){
            case 0:
                text = "Mobile Version";
                break;
            case 1:
                text = "Rough Sketches";
                iconSrc = "Images/Icons/LeftArrow.png"; 
                break;
        }

        button.innerText = text;
        buttonSection.append(button);
    }
