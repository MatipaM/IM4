    const navPages = ["HomePage", "Design","Theory", "Internet Art"];
    const navMenu = ["index", "Sketch", "BlogPosts", "Art"];
   
    let header = document.getElementById("header");
    header.classList.add("h-card");

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
        let className2;

        switch(i)
        {
            case 0:
                className = "fa-house-chimney";
                break;
            case 1:
                className = "fa-brush";
                break;
            case 2:
                className = "fa-book-open";
                break;
            case 3:
                className = "fa-wifi";
                break;
        }

        iLink.classList.add(className);


        iLink.innerText = "   "+navPages[i];

        a.onclick = function()
        {
            console.log(i);
            location.href = navMenu[i]+".html"; 
        }
        

        if(window.location.href.includes(navMenu[i]))
        {
            className2 = "active";
            iLink.classList.add(className2);
        } 
    }

    window.onresize = function(){ location.reload(); }

    //xampp server - download
    //mysql

    // function loadPage(i)
    // {
    //     article.remove();
    //     let location = "";

    //     switch(i)
    //     {
    //         case 0:
    //             location = "index";
    //             //loadIndex();
    //             break;
    //         case 1:
    //             location = "Sketch";
    //             // loadDesign();
    //             break;
    //         case 2:
    //             location = "Theory";
    //             break;
    //         case 3:
    //             location = "art";
    //             break;
    //         case 4:
    //             location = "references";
    //             break;
    //     }

    //     location.href = location+".html";
    // }

    function createFooter()
    {
        let footer = document.createElement("footer");
        footer.classList.add("h-card");
        let div3 = document.createElement("div");
        div3.classList.add("p-contact");
        div3.innerText = "contact email: ocmatipa@gmail.com";

        footer.append(div3);
        main.append(footer);
    }