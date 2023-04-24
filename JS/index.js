
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
                paragraphContent = "Welcome to my internet art website. This website contains weekly reflections on class lectures, as well as the process behind my internet artwork and how I created it. The internet artwork I created relies heavily on user interaction, therefore please engage with it, as much as you would like :).";
                break;
            case 1:
                paragraphContent = "As, the user navigates through the website, I want them to feel a sense of calm, hence why i used a midly saturaterd purple as a background colour throughout. I embraced a minimalistic aesthtic to avoid overwhelming the user with sesnory information and instead making it clear how they could possibly navigate through the site.";
                break;
            default:
                paragraphContent = "loading error";
        }
       
        p.innerText = paragraphContent;
    }

    let img = document.createElement("img");
    img.src = "Images/ArtCanvas.jpeg";
    img.classList.add("homeImg");
    main.append(img);

   createFooter();





