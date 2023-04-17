    let main = document.getElementById("main");
    let title = document.createElement("h1");
    let subheading = document.createElement("h2");

    article = document.createElement("article");

    main.append(article);
    article.append(title);
   

    subheading.innerText = "Rough Sketches";
    title.innerText = "Design";

    let h2 = document.createElement("h2");
    h2.innerText = "Style Guide";
    article.append(h2);

    let styleGrid = document.createElement("section");
    article.append(styleGrid);
    styleGrid.classList.add("styleGrid");

    let styleGuideArray = ["Black", "DarkBlue", "Purple", "White"];

    for(let a = 0; a < styleGuideArray.length; a++)
    {
        let img = document.createElement("img");
        img.src = "Images/StyleGuidePalette/"+ styleGuideArray[a]+".png";
        styleGrid.append(img);
    }

    let h1Ex = document.createElement("h1");
    let h2Ex = document.createElement("h2")
    let pEx = document.createElement("p")
    let btnEx = document.createElement("a");

    h1Ex.innerText = "Heading 1";
    h2Ex.innerText = "Heading 2";
    pEx.innerText = "Paragraph";
    btnEx.innerText = "Button";

    btnEx.classList.add("btnEx");

    let exArray = [h1Ex, h2Ex, pEx, btnEx]

    for(let c = 0; c < exArray.length; c++)
    {
        article.append(exArray[c]);
    }

    let criticalRHead = document.createElement("h2");
    criticalRHead.innerText = "Overall Critical UI/UX Reflection";
    article.append(criticalRHead);

    let pArray = ["The goal for my website was to create a minimalistic site which would be intuitive for users to navigate and interact with.","I used variations of white to draw the user to areas to important information. I then ensured that interactable elements such as buttons, became brighter on hover, to differentiate between important text and interactable elements. I used colour as my main visual indicator, as a result, I limited my colour palette to four main colours, in order to avoid overloading my user with too much sensory data. I wanted colour to become a significant way of communicating to the user what they should pay attention to on the page. Hence, I tried to create a large contrast between the darker blue backround and the whiter backgrounds on which the text overlaid. For paragraphs, I used rounded edges, as the background is quite bright and I wanted to soften the impact it would have on users reading the text. I did not want the paragrpahs to seem out of place on the pages, but rather wanted to seemlessly integrate them into the interface.", "The headings are emboldened to improved visibility, as the background makes it easy for black text to become hidden. I used uppercase for h1 headings, to draw the user's attention to them and then bold lowercase for the subheadings."];
    for(let b = 0; b < pArray.length; b++)
    {
        let p = document.createElement("p");
        p.innerText = pArray[b];
        article.append(p);
        //line break
    }

    article.append(subheading);
    let imageSketchSection = document.createElement("section");

    article.append(imageSketchSection);

    //sketch image arrays
    imgSketchArray = ["HomePage", "Design", "Theory", "References"];

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

    btnSection.append(button);

        button.onclick = function()
    {
        location.href = "Wireframes.html";
    }



