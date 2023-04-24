
let main = document.getElementById("main");
let title = document.createElement("h1");


article = document.createElement("article");

main.append(article);
article.append(title);

title.innerText = "Blog Posts";

let blogSection = document.createElement("section")

article.append(blogSection);

//sketch image arrays
let BlogImgArray = ["BlogPost3.jpg", "BlogPost4.jpg", "MHome.png", "InternetArt.png",];
// let pages = ["W3", "W4", "W5", "W6", "W7", "UI", "Wireframes"];
let pages = ["W3", "W4", "UI", "Wireframes"];

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
    img.src = pathPrefix+ BlogImgArray[i];

    switch(i)
    {
        case 0:
            subheading.innerText = "Week 3 Relection";

            break;
        case 1:
            subheading.innerText = "Week 4 Relection";
            break;
        // case 2:
        //     subheading.innerText = "Week 5 Relection";
        //     break;
        // case 3:
        //     subheading.innerText = "Week 6 Relection";
        //     break;
        // case 4:
        //     subheading.innerText = "Week 7 Relection";
        //     break;
        case 2:
            subheading.innerText = "UI/UX Critical Analysis";
            break;
        case 3:
            subheading.innerText = "Internet Art Esssay";
            break;
    }
    console.log(i);

    btn.onclick = function()
    {
        location.href = pages[i]+".html";
    }
    
   
}

citeArr = ["Redirect notice (no date) Google. Google. Available at: https://www.google.com/url?sa=i (Accessed: April 24, 2023). ",
"MyBib Contributors (2019). Harvard Referencing Generator – FREE – (updated for 2019). [online] MyBib. Available at: https://www.mybib.com/tools/harvard-referencing-generator."]

for(let i=0; i<citeArr.length; i++)
{
    let cite = document.createElement("cite");
    cite.innerText = citeArr[i];
    main.append(cite);
}

createFooter();



