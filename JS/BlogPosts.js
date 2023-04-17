
let main = document.getElementById("main");
let title = document.createElement("h1");


article = document.createElement("article");

main.append(article);
article.append(title);

title.innerText = "Blog Posts";

let blogSection = document.createElement("section")

article.append(blogSection);

//sketch image arrays
let BlogImgArray = ["HomePage", "Design", "Theory", "References"];

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
            subheading.innerText = "Blog Post 1";
            loadPage = "Blog1";
            break;
        case 1:
            subheading.innerText = "Blog Post 2";
            loadPage = "Blog2";
            break;
        case 2:
            subheading.innerText = "Blog Post 3";
            loadPage = "Blog3";
            break;
        case 3:
            subheading.innerText = "Blog Post 4";
            loadPage = "Blog4";
            break;
        case 4:
            subheading.innerText = "Blog Post 5";
            loadPage = "Blog5";
            break;
        case 5:
            subheading.innerText = "Blog Post 6";
            loadPage = "Blog6";
            break;
        case 6:
            subheading.innerText = "Blog Post 7";
            loadPage = "Blog7";
            break;
        case 7:
            subheading.innerText = "Blog Post 8";
            loadPage = ""; //UPDATE NAME
            break;

    }

    btn.onclick = function()
    {
        location.href = loadPage+".html";
    }
    
   
}






