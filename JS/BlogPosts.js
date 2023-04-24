
let main = document.getElementById("main");
let title = document.createElement("h1");


article = document.createElement("article");

main.append(article);
article.append(title);

title.innerText = "Blog Posts";

let blogSection = document.createElement("section")

article.append(blogSection);

//sketch image arrays
let BlogImgArray = ["", "", "", "", "", "MHome", "InternetArt",];
let pages = ["W3", "W4", "W5", "W6", "W7", "UI", "Wireframes"];

for(let i = 0; i < BlogImgArray.length; i++)
{
    let btn = document.createElement("a");
    blogSection.append(btn);

    let subheading = document.createElement("h2");

    blogSection.classList.add("blogsGrid");
    let img = document.createElement("img")
    btn.append(subheading);
    btn.append(img); 
    let pathPrefix = "Images/Blogs/"
    img.src = pathPrefix+ BlogImgArray[i]+".jpg";

    switch(i)
    {
        case 0:
            subheading.innerText = "Week 3 Relection";

            break;
        case 1:
            subheading.innerText = "Week 4 Relection";
            break;
        case 2:
            subheading.innerText = "Week 5 Relection";
            break;
        case 3:
            subheading.innerText = "Week 6 Relection";
            break;
        case 4:
            subheading.innerText = "Week 7 Relection";
            break;
        case 5:
            subheading.innerText = "UI/UX Critical Analysis";
            break;
        case 6:
            subheading.innerText = "Internet Art Esssay";
            break;
        case 7:
            subheading.innerText = "Blog Post 8";
            break;

    }

    img.src = "Images/Blogs/"+BlogImgArray[i]+".png";
    console.log(i);

    btn.onclick = function()
    {
        location.href = pages[i]+".html";
    }
    
   
}


createFooter();



