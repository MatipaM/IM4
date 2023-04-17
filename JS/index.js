
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
                paragraphContent = "Welcome to my internet art website. This website contains weekly reflections on class lectures, as well as the process behind my internet artwork and how I created it.";
                break;
            case 1:
                paragraphContent = "The internet artwork I created relies heavily on user interaction, therefore please engage with it, as much as you would like :).";
                break;
            default:
                paragraphContent = "loading error";
        }
       
        p.innerText = paragraphContent;
    }

