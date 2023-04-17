function loadTheory(slideNumber)
{

let slideNumber = 0;
let article = document.createElement("article");
main.append(article);


let TheoryImg = ["DHome", "DBlogPosts", "DTheory", "DWireframes", "DLogin", "DSignIn"];

let h1 = document.createElement("h1");
h1.innerText = "Theory";
article.append(h1);

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
        h2.innerText = "hello";
        p.innerText = "you";

        break;
    case 1:
        h2.innerText = "";
        p.innerText = "";
        break;
    case 2:
        h2.innerText = "";
        p.innerText = "";
        break;
    case 3:
        h2.innerText = "";
        p.innerText = "";
        break;
    case 4:
        h2.innerText = "";
        p.innerText = "";
        break;
    case 5:
        h2.innerText = "";
        p.innerText = "";
        break;
}

wireframeSection.append(img);
wireframeSection.append(h2);
wireframeSection.append(p);


img.src = "Images/Wireframes/"+TheoryImg[slideNumber]+".png"; //UPDATE
}

let buttonSection = document.createElement("section");
main.append(buttonSection);

buttonSection.classList.add("btnSection");
for(let i=0; i<3; i++)
{

    let button = document.createElement("a");
    let text;

    switch (i){
        case 0:
            text = "Prev. Blog";
            break;
        case 1:
            text = "Top";
            break;
        case 2:
            text = "Next Blog";
            break;
    }

    button.innerText = text;
    buttonSection.append(button);

    button.onclick = function()
    {
        if(i==0)
        {
            if(slideNumber<=0)
            {
                slideNumber=TheoryImg.length-1;
            } else{
                slideNumber--;
            }
    
            wireframeSection.remove();
            loadImages();
   
        } else if(i==1)
        {
            location.href = "Theory.html";
        }else if(i==2){

            if(slideNumber>=TheoryImg.length-1)
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
}


