<!-- Work Items -->
- [ ] Page template
- [ ] Explanation of technologies used, purpose of the website and relevant info
- [ ] Include SEO score, PageSpeed insights, and accessibility score
- [ ] Testimonial
  - [ ] Content:
      <!-- "Working with Sam was a pleasant and professional experience. Not
            only did he flawlessly implement all the features I had in mind, he
            took the initiative to propose pertinent features and revisions. You
            can rely on his expertise to help you make informed decisions
            regarding all the steps of building a website you can be proud of." -->

<!-- Certificates Page -->
- [ ] Image gallery
- [ ] Informational box on the right of screen with info about selected Cert/Class
  - [ ] How to switch info depending on selected image?
  - [ ] Get each certificate link
- [ ] Noble Desktop description/section
<!-- Piano performances page -->

<!-- Front page -->
- [x] Header
  - [x] Jump to content link
  - [x] Logo
    - [x] Optimize Images
    - [x] image circle
    - [ ] change circle color on hover
  - [x] Title
  - [x] Swoosh
  - [x] Make header hover match footer
  - [x] Filler
- [ ] Main
  - [x] Certificates, Skills & Language columns
    - [x] Animate columns ul
  - [x] Carousel
    - [x] Navigation buttons
    - [x] Close button
    - [x] Javascript
    - [x] Animation
    - [x] Disabled buttons should not animate on hover
    - [ ] Arrow navigation
    - [ ] Left Arrow focus visible not properly positioned
    - [ ] Close icon not padded correctly on big screens
  - [x] About me
    - [x] Image
    - [x] Content
    - [x] Swoosh 
      -[x] Remove fillers and position the svg better instead
    - [x] Position behind columns and use negative margins
    - [ ] Read more button for expanded content using image svg's top border to draw the button itself
  - [x] Recent Work
    - [x] Box style
    - [x] Overlay
    - [x] Animation
    - [x] Expand/Minimize button
    - [x] Update Images
    - [x] Animate coming from the side on scroll
    - [x] Resize images as screen size changes
    - [ ] Click me! thingy
  - [x] Why Hire a Developer?
    - [x] Content
    - [x] Style
  - [x] Contact
    - [x] Position halfway through footer
    - [x] Negative margin
    - [x] Fix button margin on small screens
    - [ ] Color change?
- [ ] Footer
  - [x] Top padding
  - [x] Copyright
  - [x] Useful links
  - [x] Link hover states
  - [x] Remove useful links title
  - [ ] Language section
    - [x] Dropdown
    - [x] Form style
    - [ ] Subdomain link change
    - [x] Flags
    - [x] Remove arrow class from button when closed
    - [x] Make it arrow navigable
    - [x] Aria labels
    - [ ] Aria expanded
    - [x] Match the style of the language selection to other footer items
<!-- Contact Page-->
- [ ] Synch Header
- [x] Form
  - [x] Use FormSubmit
  - [x] Custom dropdown
    - [x] Javascript
    - [x] Arrow navigation
    - [x] Icons
    - [x] Removing 'same as selected' class removes the class attribute instead of removing that specific class
    - [x] Aria labels when opened and closed
  - [x] Responsiveness
  - [x] Styling
  - [ ] Form validation
- [x] Animate submit button left and right on hover
- [ ] Footer
  - [ ] Synch after it's done
  - [ ] Similar box to Contact box on main page 
<!-- Bugs -->
- [ ] Hover over work items not working on safari
- [ ] First element animation error on chrome only
- [x] Setting minHeight to work items with javascript breaks mobile-view after resize, reset style after item has loaded?
- [x] Footer responsiveness broken
<!-- Deployment -->
- [ ] Optimize images
- [ ] Fix links
- [ ] Make copy of folder and remove unused css/javascript (only include minified versions)
- [ ] Consider moving all images to root folder and referencing them there all throughout the code. Sort of like webpack
