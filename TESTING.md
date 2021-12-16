# Testing

## Table of Contents

1. [Validation](#validation)
2. [Testing User Stories from User Experience (UX) Section](#user)
3. [Lighthouse Reports](#lighthouse )
4. [Further Testing](#ftesting)
5. [Known Bugs](#bugs)
------

## Validation <a id="validation"></a>

I used the W3C Markup and CSS Validator Service to ensure there was no syntax errors throughout my webpage.

W3C Mark up Validator
 * Home Page - [View](https://validator.w3.org/nu/?doc=https%3A%2F%2Fdeandodds.github.io%2Fmilestoneprojectone%2Findex.html)
 * Music/Video - [View](https://validator.w3.org/nu/?doc=https%3A%2F%2Fdeandodds.github.io%2Fmilestoneprojectone%2Fmedia.html)
 * Setlist - [View](https://validator.w3.org/nu/?doc=https%3A%2F%2Fdeandodds.github.io%2Fmilestoneprojectone%2Fsetlist.html) 
 * Events - [View](https://validator.w3.org/nu/?doc=https%3A%2F%2Fdeandodds.github.io%2Fmilestoneprojectone%2Fevents.html)
 * Contact Us - [View](https://validator.w3.org/nu/?doc=https%3A%2F%2Fdeandodds.github.io%2Fmilestoneprojectone%2Fcontacts.html)

W3C CSS Validator
 * [View](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fdeandodds.github.io%2Fmilestoneprojectone%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)

## Testing User Stories from User Experience (UX) Section <a id="user"></a>

   * ### First Time Visitor Goals
      1. As a first time visitor, I want to be able to understand the main purpose of the website.
       - When entering the site users can clearly see the navigation bar and the purpose of the site is very clear.
       - The users have clear options. Users can use the call to action button to make a booking or scroll untill they see the content that intrests them.

      2. As a first time vistor, I want to be able to navigate throughout the site and beb able to watch, listen and see the bands content easily.
       - Navigtion to content is clear. The links to this content are in the navigation bar and links from the home page.
   
      3.  As a first time vistor, I want to be able to easily connect with the band on social media.
       -  Links to this content is in the footer of every page.  

 * ### Returning Visitor Goals
      1. As a returning visitor, I want to be able to book and make an enquiry.
       - Users have lots of diffent options to get in touch with the band throughout the home page.

      2. As a returning visitor, I want to be able to find out where I can see the band in the future.
       - There are clear links in the navigation to an upto date list of events featuring the band. 
        
      3. As a returning visitor, I want to be able to see the band contact information.
      - the bands contact details are displayed in the footer of every page. 
 
 * ### * ### Website Creator goals
      1. As a website creator, I want to create a website that works on all platforms.
      - Website runs on all devices tested.

      2. As a website creator, I want to create a good user experience by having a clear navigation system.
      - Navigation system worked well during user testing. 

      3. As a website creator, I want my website load times to be low. I do not want users leaving the site before it has time to load.
      - Video elements running a little showly at present. I am considering hosting videos on and external webiste such as Youtube to speed up loading times.

      4. As a website creator, I want my website to be as accesible as possible.
      - Webpages all pass lighthouse accesibility testing.

## lighthouse testing. <a id="lighthouse"></a>

All my pages have went through google dev tools lighthouse analysis which are scored on:
      * Performance 
      * Accesibility
      * Best Practices
      * Search Engine Optimization (SEO)

  ### Home Page

  ![Home page lighthouse screen shot](wireframes/design/indexlighthousescreenshot.png)

  ### Music/Video Page

  ![Music/Video page lighthouse screen shot](wireframes/design/medialighthousescreenshot.png)

  ### Set List Page

  ![Set List page lighthouse screen shot](wireframes/design/setlistpagescreenshot.png)

  ### Events Page

  ![Events page lighthouse screen shot](wireframes/design/eventslighthouse.png)

  ### Contacts Page 

  ![Contacts Us page lighthouse screen shot](wireframes/design/contactuslighthousescreenshot.png)

## Further Testing <a id="ftesting"></a>

I have tested my project on a variety of browsers such as:
  ### Google Chrome 

  ![Screen shot of Google Chrome](wireframes/design/chrome-screenshot.png)


  ### Firefox 
  ![Screen shot of Firefox Browser ](wireframes/design/fireboxscreenshot.png)


  ### Safari

  ![Screen shot of Safari](wireframes/design/safari-screenshot.png)
  
  
I have also tested it on a range of devices such as:
  * Iphone 6
  * Iphone S
  * Laptop 
  * Desktop
  * Huawei T10 tablet

I have used the Chrome developer tools to test responsiveness on different device simulations and asked my friends and family to visit the website and report any problems they encounter. 

I have done a large amount of testing on all pages to ensure all:
  * links 
  * videos 
  * buttons  
are working correctly and fixed any broken links 

## Known Bugs <a id="bugs"></a>
* On older devices home page callout section spills over its container and the background image is too zoomed in. 
* On older devices home page showcase card links spill over the card container - fixed by reducing font size on small screens.
* On older devices contact page enquiry form overflows the container - fixed by adding height to form container.
* Slick slider jumps between last slide and first. This is a known error with the slick slider library and is awaiting bug fixes.