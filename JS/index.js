
    console.log("index loaded");

    let main = document.getElementById("main");
    let title = document.createElement("h1");

    article = document.createElement("article");
    let section = document.createElement("section");

    main.append(article);
    article.append(title);
    article.append(section);
    section.classList.add("indexGrid");

    title.innerText = "Matipa's Internet Art Website";

    for(let i = 0; i < 2; i++)
    {
        let p = document.createElement("p")
        section.append(p);
        
        let paragraphContent;

        switch(i)
        {
            case 0:
                paragraphContent = "My website is about...(what i am building)";
                break;
            case 1:
                paragraphContent = "I wanted to create this because...";
                break;
            default:
                paragraphContent = "loading error";
        }
       
        p.innerText = paragraphContent;
    }

