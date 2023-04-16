
    
    loadIndex();
    
    const navPages = ["HomePage", "Design","Theory", "Internet Artwork", "References"];
    const navMenu = ["index.html", "References.html"];
   
    let header = document.getElementById("header");
    header.classList.add("h-card");

    let footer = document.getElementById("footer");
    footer.classList.add("h-card");

    let  nav = document.createElement("nav");
    header.append(nav);
    nav.classList.add("h-entry");
    nav.classList.add("#nav");

    let ul = document.createElement("ul");
    nav.append(ul);

    for(let i = 0; i < navPages.length; i++)
    {
        let li = document.createElement("li");
        let a = document.createElement("a");
        let iLink =  document.createElement("i");

        ul.append(li);
        li.append(a);
        a.append(iLink);

        a.classList.add("u-url");
        iLink.classList.add("fa-solid");

        let className;

        switch(i)
        {
            case 0:
                className = "fa-house-chimney";
                break;
            case 1:
                className = "fa-blog";
                break;
            case 2:
                className = "fa-blog";
                break;
            case 3:
                className = "fa-blog";
                break;
            case 4:
                className = "fa-blog";
                break;
        }

        iLink.classList.add(className);
        iLink.innerText = navPages[i];

        a.onclick = function()
        {
            loadPage(i);
        }
    }

    window.onresize = function(){ location.reload(); }

    //xampp server - download
    //mysql

    function loadPage(i)
    {
        article.remove();
        switch(i)
        {
            case 0:
                loadIndex();
                break;
            case 1:
                loadDesign();
                break;
            case 2:
                loadTheory();
                break;
            case 3:
                loadInternetArtwork();
                break;
            case 4:
                loadReferences();
                break;
        }
    }