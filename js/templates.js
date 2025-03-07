function insertHeaderAndNav() {
 const headerHTML = `
     <header>
        <a href="/index.html"><img src="/assests/images/header_banner.jpg" alt="Header Banner"></a>
     </header>
 `;

 const navHTML = `
     <nav>
         <ul class="menu">
             <li class="dropdown">
                 <a href="/blog/blogarchive.html">Blog</a>
                 <ul class="submenu">
                     <li><a href="/blog/march2025.html">March 2025</a></li>
                 </ul>
             </li>
             <li class="dropdown">
                 <a href="/recipes/recipearchive.html">Recipes</a>
                 <ul class="submenu">
                     <li><a href="/recipes/march2025.html">March 2025</a></li>
                 </ul>
             </li>
             <li class="dropdown">
                 <a href="/recommendations/march2025.html">Recommendations</a>
                 <ul class="submenu">
                    
                     <li><a href="/myra-chatbot/frontend/index.html">Myra the Sassy Winebot</a></li>
                     <li><a href="/recommendations/march2025.html">March 2025</a></li>
                 </ul>
             </li>
             <li class="dropdown">
                 <a href="/wine-education-course/course.html">Wine Education Course</a>
                
             </li>
             <li><a href="https://www.youtube.com/@thepourchoice">YouTube</a></li>
         </ul>
     </nav>
 `;

 // Insert the header into the designated container
 document.getElementById("header-container").innerHTML = headerHTML;

 // Insert the navigation into the designated container
 document.getElementById("nav-container").innerHTML = navHTML;
}

// Run the function once the DOM is loaded
document.addEventListener("DOMContentLoaded", insertHeaderAndNav);

