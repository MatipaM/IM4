    console.log("loading wireframe");

    let slideNumber = 0;
    let article = document.createElement("article");
    main.append(article);

    
    let DimgArray = ["DHome", "DBlogPosts", "DTheory", "DWireframes", "DLogin", "DSignIn"];
    let MimgArray = ["MHome", "MBlogPosts", "MTheory", "MWireframes", "MLogin", "MSignUp"];
    let chosenArray =  DimgArray;

    let h1 = document.createElement("h1");
    h1.innerText = "Wireframes";
    article.append(h1);
    
    console.log(chosenArray);

    let wireframeSection = document.createElement("section");
    wireframeSection.classList.add("wireframeGrid");
    loadImages();



    function loadImages()
{
    wireframeSection = document.createElement("section");
    wireframeSection.classList.add("wireframeGrid");
    article.append(wireframeSection);

    let h2 = document.createElement("h2");
    let p = document.createElement("p");
    let img = document.createElement("img");

    switch(slideNumber)
    {
        case 0:
            h2.innerText = "Home Page";
            p.innerText = "The Home Page contains a summary on what the user will see when they look through it. I used a white background for my paragraphs, because I did not want the blue background to hide the black text. I lowered the opacity of the background, so that the paragraph would not stand out too much on the background as to appear strange or out of place.";

            break;
        case 1:
            h2.innerText = "Blog Posts";
            p.innerText = "I made use of a grid so that the user could view all the blog posts at once and then navigate to the one they would like to view. Except for the smaller screen, where scrolling anticipated more highly and therefore scolling to view mroe information is more intiutive.";
            break;
        case 2:
            h2.innerText = "Theory";
            p.innerText = "I have the individual theory pages mimic those of the wireframe template because I liked how easy it was for the user to sort through information. I did, however intend to make the theory image smaller as it is not the main focus and instead leave room for the actual blog texts. ";
            break;
        case 3:
            h2.innerText = "Wireframes";
            p.innerText = "I included one wireframe per page as I wanted the user to focus on one page at a time. This allows me to display information without chunking in order to force everything to fit. There is a next button which allows users to sort through all the wireframes. I included both a previous and next page to make it easier for the user to cycle through the wireframes. I excluded a top button because I designed the pages to fit the screen so they should not have to scroll down on this page at all. ";
            break;
        case 4:
            h2.innerText = "Login";
            p.innerText = "I did not end up implementing the login page.";
            break;
        case 5:
            h2.innerText = "Sign Up";
            p.innerText = "I did not end up implementing the sign up page.";
            break;
    }

    wireframeSection.append(img);
    wireframeSection.append(h2);
    wireframeSection.append(p);


    img.src = "Images/Wireframes/"+chosenArray[slideNumber]+".png";
}

    let buttonSection = document.createElement("section");
    main.append(buttonSection);

    buttonSection.classList.add("btnSection");
    for(let i=0; i<4; i++)
    {

        let button = document.createElement("a");
        let icon = document.createElement("img");
        let text;
        let iconSrc;

        switch (i){
            case 0:
                text = "Mobile Version";
                iconSrc = "Images/Icons/RightArrow.png";
                break;
            case 1:
                text = "Rough Sketches";
                iconSrc = "Images/Icons/LeftArrow.png"; 
                break;
            case 2:
                text = "Prev. Wireframe";
                    // iconSrc = "Images/Icons/LeftArrow.png"; 
                break;
            case 3:
                text = "Next Wireframe";
                // iconSrc = "Images/Icons/LeftArrow.png"; 
                break;
        }

        icon.src = iconSrc;

        button.append(icon);
        button.innerText = text;
        buttonSection.append(button);

        button.onclick = function()
        {
            if(i==0)
            {
                let buttons = document.getElementsByTagName("a");
                //switch button text to desktop version
                if(chosenArray==DimgArray)
                {
                    chosenArray = MimgArray;
                    buttons[5].innerText = "Desktop Version";
                } 
                else{
                    chosenArray = DimgArray;
                    buttons[5].innerText = "Mobile Version";
                }
       
                wireframeSection.remove();
                loadImages();
            } else if(i==1)
            {
                location.href = "Sketch.html";
            }else if(i==2){
                if(slideNumber<=0)
                {
                    slideNumber=chosenArray.length-1;
                } else{
                    slideNumber--;
                }
        
                wireframeSection.remove();
                loadImages();
            }else if(i==3){

                if(slideNumber>=chosenArray.length-1)
                {
                    slideNumber=0;
                } else{
                    slideNumber++;
                }
        
                wireframeSection.remove();
                loadImages();
            }
        }
    }


