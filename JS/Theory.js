let article = document.createElement("article");
main.append(article);

theoryArr = ["W3, W4", "W5", "W6", "W7", "UI", "Wireframes"];

let h1 = document.createElement("h1");
h1.innerText = "Theory";
article.append(h1);



let pArray =[];
let blogNum;

for(let index =0; index<theoryArr.size; index++)
{
    if(window.location.href.includes(theoryArr[index]))
    {
        blogNum = index;
    } 
}

loadImages();

function loadImages()
{
let section = document.createElement("section");
main.append(section);

let h2 = document.createElement("h2");
let p = document.createElement("p");

let blog3 = ["I really enjoyed the lecture videos as I felt it provided a very detailed insight into the fundamentals of JavaScript. The videos were long, which I loved as concepts were not rushed and multiple examples as well as variations were provided. The only technical questions I have are related to ordering the blog posts from the mostly recently viewed to latest (as I tried to code along to replicate it but it did not work for me).",
`I love how broad web art is, I feel that it allows everyone to engage with a specific niche in a way that is both creative and specific to who they are. Areas, that most interest me, are those which include code art and software art as I think that is an area I would like to explore.  I was interested by how the readings explore how the movement from desktop to mobile device as the primary means for accessing the internet, as well as Apple's disregard for flash as the reason behind flash's downfall. An interesting point made by McNara, was how she hoped that our web history won’t be erased" (2020).  I found this interesting because the internet tends to be considered a place where nothing is erasable and everything you post is almost given an infinite lifespan. However, the demise of flash, has at the least shown people, that 'original' artworks may not always be supported on the internet. Instead we may only be able to rely on supported copies to get an essence of what the original was like.`,
"Another side to the way web history is recorded, is how files are organised and updated, Ann Armstrong, an architect battling with the upkeep and maintenance of architectural repositories suggests that records “should be organised with an archivist in mind” (Armstong, A., E., 2006). This implies that the ordinary user may not be able to find internet artworks as intuitively as they could before. However, the role of an archivist solely dedicated to the maintenance and safe online storage of internet artwork could be critical to ensuring that online equivalents to the ‘Mona Lisa’ are no longer damaged beyond repair due to bad upkeep."];
let blog3Ref = ["Art Documentation: Journal of the Art Libraries Society of North America, Vol. 25, No. 2 (Fall 2006), pp. 12-17 (6 pages)"];

let blog4 = ["Conventions do not lay out a set of rules for how one must live their life, but rather a set of expectations on how we view each other and act ourselves, in most aspects of everyday life. It “figures conspicuously in many of our activities” (Davidson, 1984:2). In Donald Davidson’s paper, ‘Communication and Convention’ (1984) , he focuses on the use of convention in language and how that relates to truth telling as well as how others decipher the speaker’s mood. In this mini-essay I will be using the same principles highlighted in Davidson’s paper and Mailloux’s, ‘Convention and Context’ (1983) to explore how convention is created and functions within the realm of software and website development.",
"The creation of a convention involves the critical process of repetition, in which a certain action is performed consistently until it is viewed as the norm. Prior to repetition, there is the “preconventional shock value”(Mailloux, 1983:399). This shock value causes disruption in the medium by presenting a new practice in place of a previous normality. An example of this in software development would be the use of Aritfical Intelligence (AI).  AI is defined as the ”simulation of human intelligence processes by machines, especially computer systems” (TechTarget, 2023). AI was initially seen as a tool for developers or engineers to speed up the process of development, gathering data and other professional engineering processes. However, over time through the mechanism of repetitive use, AI has become more accessible for the public. This accessibility can be seen in terms of cheaper prices and how much more user-friendly the presentation of AI has become. An example of the ordinary use of AI can be seen in the assistance of NotionAI. Notion was originally a note-taking website/application which has recently begun providing AI as a feature for users. This feature prompts users to insert a prompt, or ask AI to extend something they have already written or even ask it a question.",
"In conclusion, conventions cannot determine how one would act but rather lays down expectations for how one could act. The use of conventions is prevalent across all industries in every day life. However, the creation and sustenance of a convention is highly dependent on repetition regardless of where/what industry that convention is being implemented.",
"In terms of the technical lesson, I found it easy to code along, and did not have any issues implementing the provided API. "];
let blog4Ref = ["BURNS, Ed. (2023) What is Artificial Intelligence (AI) ?. Available at: https://www.techtarget.com/searchenterpriseai/definition/AI-Artificial-Intelligence (Accessed: 25 March 2023).",
"DAVIDSON, D. 1984. Communication and Convention. Springer 59 (1), April: 3-18. ",
"MAILLOUX, S. 2015. Convention and Context. The Johns Hopkins UNIVERSITY PRESS 14 (2), Winter: 399-408."];

// let blog5 = [];
// let blog5ref = [];


// let blog6 = [];
// let blog6Ref = [];

// let blog7 = [];
// let blog7Ref = [];

let art = ["My initial goal for my internet artwork was to create an online notepad, where users could draw via any type of input device. I wanted to create a space where the user could create their own digital art for free without the need of an expensive device. However, I do recognize that accessing the website via a drawing tablet and stylus would make interacting with a virtual notepad much easier than using a mouse and keyboard. Hence creating a different experience for various users, in which those without access to expensive equipment may not find the artwork has easy to engage with. ",
"My internet art returns the agency back to the user by allowing them to express how they feel instead of looking at a piece which may instruct or alter their emptions in any way. In the future, I plan to implement a system which allows users to leave their digital footprint for the next user, by saving their work and showing them to the next user who accesses the website. The internet artwork would both influence the user’s current emotions by presenting them with a partially filled canvas, but it would also empower the user by allowing them to respond.",
"For future improvements, I would like to save all previous users drawings in the database, so that they can continue working on a previous draft. Another idea I had was to only save one of the previous user’s drawings in order to prevent the canvas from being overfilled and preventing future users from wanting to add on. However, I feel that would mean I would have to have some sort of selection algorithm which would choose which user’s work to save in the database, in the event that two users had been drawing at the same time. Which can be invalidating for the user’s work who is not saved. As work would be saved on refresh, therefore users can see what has been saved. Instead, the user has a thick pain brush which they can use to create their own background for their work. That way part of the creation is allowing them to decide which work should be erased in order to make room for their own. Initially when planning this artwork, I wanted to include login/sign in pages so that the user’s art could be fetched from the database when they sign in. There is an offset between the cursor and the lines drawn which can be disorienting for users. I tried to tweak the settings to bring the stroke and cursor as close together as possible, but I struggled to fix the issue."];
let artRef = [];

let ui = ["I wanted my user to feel calm and relaxed as they navigated through the website. I used purple hues, as a non-highly saturated purple tends to be associated with creativity (verywellmind, 2023). I thought a stress-free website would fit in well with the theme of my internet art which is ‘drawing’ as it is an activity of self-expression. Drawing tends to calm people down, and help them work either through their thoughts or their emotions. Hence, I wanted to convey a sense of calm through my website to reflect the theme of my internet art which is a blank canvas on which the user can draw.",
"I kept my navigation bar static, in order to create a reference point for users navigating through my site. I also highlighted the site the user is currently on, to make it easier for my user to avoid attempting to access the same page thinking it may be something different. Certain pages have subsections which relate to the overall theme, such as the blogposts which are grouped together and the design which has the rough sketches as the first page, which then allows the user to progress to the wireframes. I thought this would be a better solution to not overwhelm the user as opposed placing every page on the navigation bar. Previously I had a tab for references, instead I remove this page and placed references on the relevant theory pages.",
"I tried to include more content on the homepage that would draw the user into traversing through the site. Therefore I included reasons for my user interface choices such as my background colour, a summary of what is on the site and a canvas to give the user a hint of what is to come if they visit the internet art section. It was important that my internet art was interactive because websites are interactive and that is an important factor of what makes them engaging. To allow a user to engage with a product shows that you value their input.",
"For future submissions, I would like to focus more on usability testing and behavioural research. This would involve user interviews, anonymous surveys (as these would allow users to be honest and not just tell me what I think I would like to hear about my website). I also would like to incorporate contextual inquiry as this would allow me to identify aspects of the website which may come off as confusing or difficult for users to navigate around (Arvola, 2018). ",
"I would also like to be more creative in terms of finding better methods of presenting information on my website that is outside of the normal yet still provides an intuitive and enjoyable experience for my user. A lot of the way text is displayed throughout my website is very static which can be boring for a user when they need to sort through a large variety of information. Static form of presenting information can be intuitive as a result of familiarity but at the expense of creativity (Early, B. A. & Zender, M., 2008). Therefore, I would like to incorporate movement in order to make my site more dynamic."];
let uiRef= ["Design Issues, Vol. 24, No. 3, Interaction Design Research in Human-Computer Interaction (Summer, 2008), pp. 85-107 (23 pages)",
"Design Issues, Vol. 24, No. 3, Interaction Design Research in Human-Computer Interaction (Summer, 2008), pp. 85-107 (23 pages)",
"Cherry, K. (2023) What does the Color Purple Mean? Available At https://www.verywellmind.com/the-color-psychology-of-purple-2795820 (Accessed 17 April 2023)"];

  

switch(blogNum)
{
    case 0:
        h2.innerText = "Blog Post - Week 3";
        pArray = blog3;
        pArrRef = blog3Ref;
        pArrRef = blog3Ref;
        break;
    case 1:
        h2.innerText = "Blog Post - Week 4";
        pArray = blog4;
        pArrRef = blog4Ref;
        break;
    case 2:
        h2.innerText = "Blog Post - Week 5";
        pArray = blog5;
        pArrRef = blog5Ref;
        break;
    case 3:
        h2.innerText = "Blog Post - Week 6";
        pArray = blog6;
        pArrRef = blog6Ref;
        break;
    case 4:
        h2.innerText = "Blog Post - Week 7";
        pArray = blog7;
        pArrRef = blog7Ref;
        break;
    case 5:
        h2.innerText = "Internet Art";
        pArray = art;
        pArrRef = artRef;
        break;
    case 6:
        h2.innerText = "User Interface and User Experience";
        pArray = ui;
        pArrRef = uiRef;
        break;
}

section.append(h2);

for(let a = 0; a<pArray.length; a++)
{    
    p = document.createElement("p");
    p.innerText = pArray[a]
    section.append(p);
}

let h3 = document.createElement("h3");
h3.innerText = "References";
section.append(h3);

for(let a = 0; a<pArrRef.length; a++){
    cite  = document.createElement("cite");
    cite.innerText = pArrRef[a];
    section.append(cite);
}

let buttonSection = document.createElement("section");
section.append(buttonSection);
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
            if(i<=0)
            {
                i=theoryArr.length-1;
            } else{
                blogNum--;
            }
    
            section.remove();
            loadImages();
   
        } else if(i==1)
        {
            i=theoryArr[blogNum];
        }else if(i==2){

            if(i>=theoryArr.length-1)
            {
                i=0;
            } else{
                blogNum++;
            }
    
            section.remove();
            loadImages();
        }
    }
}
}

createFooter();

