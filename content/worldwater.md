---
# This determines what shows up first, lower weight = shows up first
weight: 1

# This is what appears as the tab's title
title: "WorldWater | David Eisenmenger"

# This is the description in the <head> tag
description: "I set a direction for the re-design of the product and crafted and tested a functioning prototype for development."

# This the heading of the navigation at the top of the case study
nav_heading: "WorldWater Case Study"

# This is what appears in the case studies section, place this image at the /static/img folder
thumbnail: "WWLandingPgV3LG.png"

# This is the title of the case study in the case studies section
case_short_title: "WorldWater Mobile Site"

# This is the title of the case study in the case study page
case_title: "WorldWater Mobile Site"

# This is the subtitle of the case study in the case studies section and the case study page
case_subtitle: "Mobile App Design"

# This is the case description in the case studies section
case_description: "WorldWater.com is an informational website for a non governmental organization focused on water, sanitation, and hygiene for communities in Ecuador."

# This is the featured image of the case, place this image at /post_title_here/img folder
# e.g. /mypost/img
case_feature_img: "WWLandingPgV3LG.png"

# This is the case summary in the case itself
case_summary: "WorldWater.com is the home site for the WorldWater organization. WorldWater is a nongovernmental organization (NGO) that is focused on empowering communities to manage their public health infrastructure. Their primary operations are in the the Amazon Basin as well as in the United States. The site is focused on supporting its social media channels with information about the organization and features allowing users to donate as well as raise funds by challenging others using social media. The assets represented here have had the original company name replaced with a placeholder, WorldWater."

# Your team members
team: ["David Eisenmenger"]

# Roles of your team members
roles: ["Researcher", "Information Architect", "User Interface Designer"]

# Methods your team members used
methods: ["Surveys and Interviewing", "Sketching", "Wireframing", "Prototyping"]

# Links at the bottom of the case study and where they link to
# img is the svg that's part of the button. You can use eyeball.svg or download.svg
# Place your custom svgs into /static/svg
button_links:
    - link: "https://balsamiq.cloud/su8bkvt/ppctiyo/r2278?f=N4IgUiBcAMA0IDkpxAYWfAMlAjPAQhiALJEBaRA0lANoC6AvkA%3D%3D"
      img: "eyeball.svg"
      text: "View Lo Fi Prototype"
    # - link: "http://copenow.co/"
    #   img: "eyeball.svg"
    #   text: "View Landing Page"
    # - link: "cope.pdf"
    #   img: "download.svg"
    #   text: "Download Feature Sets"

# Testimonial text
testimonial: "David has helped us to realize our vision for this site. His work has been valuable from the start."

# Testimonial photo, place this at /post_title_here/img
# e.g. /mypost/img
# testimonial_photo: "john.jpg"

# Author of testimonial
testimonial_author: "Darrell Adams"

# Testimonial subtitle, usually position of the testimonial author
testimonial_subtitle: "Co-founder, WorldWater"

date: 2019-07-18T17:48:35-04:00
draft: false

# Write the content of your case study below the three dashed lines. You can use markdown and raw HTML.
---
# The Problem
A non governmental organization (NGO) named WorldWater asked me to redesign their current website. The organization's goal was to increase giving and engagement through their site and attract new users.  

# The Solution
I designed a minimal viable product utilizing mobile first design that streamlines the giving process and leverages social media to allow users to engage others in giving. This is accomplished through allowing users to initiate fundraising challenges via Facebook and Venmo.


# Research: Survey and Interviews
I began with user research. I performed primary research using an online survey and in person interviews. I wanted to speak with people who had already demonstrated interest in being involved with NGOs. A survey of was completed by 16 participants who reported being involved with an NGO’s as a supporter or volunteer in the last twelve months. 

I performed some market research reviewing the website of some organization with a similar mission WorldWater. My review of competing sites showed that similar organizations placed call to actions for giving very prominently on their sites.

Some of the key findings of the survey were that most users were involved in few organizations (less than five), however their primary activities with NGOs were well aligned with the goals of the site.  The participants key activities were reported as follows



One finding of the survey was potentially concerning. Survey participants reported being only 24% favorable to new involvements with organizations. This finding would be something to explore more deeply during user interviews.

<div>
![Chart NGO Involvement PNG](/worldwater/img/ChartNGOInvolvementV2.png "Chart: NGO Involvement")
![Chart NGO Involvement Vector](/worldwater/img/ChartNGOInvolvementV5.svg "Chart: NGO Involvement")
![Chart NGO Invovlement Vector2](/worldwater/img/NonprofitInvolvmentV7.svg "Chart: NGO Involvement")
![Chart Likelihood](/worldwater/img/LikelihoodV2.svg "Chart: Likelihood")
</div>

I conducted in person interviews with a set of users who were survey respondents. I wanted to dig more deeply on couple of important questions. What do organizations do that draw you in? What are the pain points associated with their experience of NGOS. From the survey, users said that they were reluctant to develop new involvements with organizations. This presented a potential barrier to the goals of the project. In the interviews, I asked users what motivates them to become involved with the organizations. 

Participants responded that they became involved with organizations through recommendations from people that they know. When I asked participants what organizations did that draws them in as volunteer or donors, they emphasized that alignment of their personal values with organization's values drew them in.

I also asked participants what are their pain points associated with being involved with organizations. The two pain points that users have were related to scheduling: users reported having difficulty being involved with organizations due to limited time, others reported feeling that organizations made poor use of their time.

# Discovery: Insights, Personas, Empathy Maps
A key insight from the research was is that users would most likely afford involvement with a new organization if they were 1.) referred by a personal connection and 2.) their experience with the organization's site would be as convenient and efficient in helping them meet their goals of supporting the organization. Based on these insignts, the requirements for the design would be likely to include seamless user flows related to giving to the organization that integrated with social media platforms to allow users to challenge others to involvement.

## Persona
I wanted to further synthesize the research that had been done and begin to develop a profile of the kind of person for who I was designing. Two lean personas were developed based on the surveys and interviews. The first persona, Linda, valued personal connection as a factor related to her involvement with organizations. Linda was generous with her time and was not a frequent user of mobile technology.
![Persona Linda](/worldwater/img/PersonaLinda.jpg "Lean Persona Linda")

The second persona, Shawn, valued personal connection as well. Shawn had less time to give than what he wanted. Shawn appreciated convenience as factor as it related to his interaction with an organization's website.
![Persona Shawn](/worldwater/img/PersonaShawn.jpg "Lean Persona Shawn")

## Empathy Maps
I also wanted to begin to predict how users might behave when using the site. To extend the reach of the personas, I developed Empathy maps were to project a more detailed view of each persona's behaviors and motivations.

![Empathy Map Linda](/worldwater/img/EmpathyMaps_Page_1.jpg "Empathy Map Linda")

![Empathy Map Shawn](/worldwater/img/EmpathyMaps_Page_2.jpg "Empathy Map Shawn")

# Information Architecture: Card Sort and Site Map
## Card Sort
Based upon insight from research, the personas, and the empathy maps, I wanted to learn what would be the most intuitive way to organize the site from the user's perspective. I engaged a card sort activity to help answer this question. An open card sort evaluates a website’s content strategy by asking participants in study to sort cards with tasks associated with the website into categories that make sense to the user. The results of the study including the categories, cards, and participant comments were analyzed and evaluated. 
<!-- ![Card Sort Report Cover](/worldwater/img/MedWaterCardSortReportV1_Page_1.jpg "Card Sort Report Cover") -->

The following similarity matrix (representing the combined participants) compares two cards and scores them based on how many participants agreed with the pair. Darker/higher numbers signify a stronger relationship between the card above the number and the card to the right of the number.  
![Card Sort Similarity Index](/worldwater/img/MedWaterCardSortSimilarityMatrixFinal.png "Card Sort Similarity Index")

There was some disagreement from the participants regarding the categorization of some cards. The type of sort used was an "open sort", meaning that participants were allowed to name the categories into which they placed the cards, rather than matching the card to a predetermined category. The participants came from a variety of backgrounds. Their different orientation to the activity was reflected in their varied responses. While some categories were not difficult to synthesize, others were more difficult to synthesize between responses.

## Site Map
I designed a site map based on the results of the card sort activity. I completed an initial hand drawn sketch of the site map to begin the design process. Since my directive was to develop a minimally viable product, I knew that the prototype would not necessarily need to have each section fully developed, however a sound content strategy would include a comprehensive site map.
![Site Map Low Fidelity](/worldwater/img/MwSiteMapLoFiCropped.png"Site Map Low Fidelity")

I moved quickly to develop a higher fidelity site map that included some early rendering of the screen flows associated with particular actions on the site. 

![Site Map High Fidelity](/worldwater/img/WWSiteMapFINAL.gif "Site Map High Fidelity")

# Design: User Flows, Sketching, and Wire framing

## User Stories and Flows
Following a LEAN methodology, I developed the content strategy based on users stories. The primary user stories that the research and the initial design problems were related to making a gift to the organization and connecting with others on social media related to their activity on the site. Based on these user stories I developed a simple user flows to reflect these processes. For example, a key user story was:
<ul>"As a user, I want to make a donation to the organization so that I can support the organization financially."</ul>
<p>Below is an example of a user flow based on this story. This flow takes the user from the landing page to a completed donation.</p>

![User Flow High Fidelity](/worldwater/img/WWUserFlowsHiFi_Page_2V2.png "User flow: From landing page to donation.")

<!-- ![User Flow Low Fidelity](/worldwater/img/UserFlowLoFi_Page_2.jpg "User Flow Low Fidelity") *User flow sketch: Landing Page to Create Account* -->

<!-- Based on these sketches and additional study of the research material, higher fidelity renderings of the user flows were completed. -->

<!-- ![User Flow High Fidelity 1](/worldwater/img/MedWaterUserFlowsHiFi_Page_1.jpg "User Flow High Fidelity 1") *User flow high fidelity: Landing Page to Create Account* -->


## Sketching
Having conceptualized the basic architecture of the the flow. I began hand-sketching how the donation user flow would look. 
![Sketch: Landing Page to Donation](/worldwater/img/WWDonate01v3.png "Landing Page to Donation")

<!-- ![Sketch: Landing Page to Login2](/worldwater/img/01MWLandingPagetoLogin_Page_2.jpg "Landing Page to Login 2") *Screen design sketch: Landing Page to Create Account 2* -->

## Wireframing
Based on my sketches I developed a low fidelity wireframe. Here is the screen flow from the landing page to making an individual donation.


![Wire Frame 1](/worldwater/img/LandingPgToDonate.png "Wire Frame: Landing Page to Login 1") 

![Wire Frame 2](/worldwater/img/LandingPgToDonate2.png "Wire Frame: Landing Page to Login 2") 

![Wire Frame 3](/worldwater/img/LandingPgToDonate3.png "Wire Frame: Landing Page to Login 3") 

![Wire Frame 4](/worldwater/img/LandingPgToDonate4.png "Wire Frame: Landing Page to Login 4") 

![Wire Frame 5](/worldwater/img/LandingPgToDonate5.png "Wire Frame: Landing Page to Login 5") 


# Development: Low Fidelity Prototype
I did some quick guerilla testing of the wireframes with a couple of users to screen for any major usability issues. Having received positive feedback from testers, I moved to developing a low fidelity prototype. The <a href="https://balsamiq.cloud/su8bkvt/ppctiyo/r2278?f=N4IgUiBcAMA0IDkpxAYWfAMlAjPAQhiALJEBaRA0lANoC6AvkA%3D%3D">prototype</a> was developed in Balsamiq. It simulates the login process and various flows related to making donations and engaging the site's challenge features. Some areas of the site outside of the MVP have a placeholder that is clearly marked within the experience. The low fidelity version does not contain the full color pallette and styling of the site in order to allow users and testers to focus on the screen layout and process flow.

[![Prototype](/worldwater/img/LandingPg.png)](https://balsamiq.cloud/su8bkvt/ppctiyo/r2278?f=N4IgUiBcAMA0IDkpxAYWfAMlAjPAQhiALJEBaRA0lANoC6AvkA%3D%3D)

# Iteration: Usability Study and Feedback
## Usability Study
I conducted in person usability tests using a prototype of the WorldWater site accessed by the user on their laptop or mine. Participants were asked to complete four tasks using the clickable prototype. They were instructed to work independently on the assigned tasks, moving as close to completion as possible. While completing the tasks, users were asked to think aloud, sharing their process verbally. As participants completed the process, I recorded their comments and made note of their actions. Upon completion of the tests a report was completed and given to the client.

<!-- ![Usability Report Cover Page](/worldwater/img/MWUsabilityTestReport_Page_1.png "Usability Test Report") -->

## Feedback and Recommendations
As I evaluated the results of the usability tests some the following issues emerged related to the tasks assigned during the test: 
<ul>
<li>Some users found the prototype’s Facebook login sequence to have too many steps.</li>
<li>While making donations, some users missed the flow guidance that was offered by the alert window on the form.</li>
<li>Some users wanted to receive updates from the organization without creating a full account.</li>
</ul>
Based on the findings of the study, the the following recommendations were made regarding the above issues.
<ol>
<li>Streamline the Facebook login process as part of fundraising challenges</li>
<li>Improve the user guidance within the donation form using typography and color</li>
<li>Create options for receiving updates without creating a full account</li>
</ol>


# Style Guide
In preparation for a higher fidelity prototype a style was developed. Font pairs were selected that reflect the values of integrity and community that were significant themes in the initial user research. A color palette was selected based on the organization's current color scheme with additional colors added to reﬂect some of the tones found in the region of Amazon basin where the organization's operations are based. The green shades in particular reﬂect the mood of growth and optimism that the site conveys.


# Next Steps

The next steps are to build a high fidelity prototype in InVision to simulate the micro interactions. An additional round of user testing and rapid iteration will follow and the prototype will be ready for developer handoff. The site's blog content will be added as well as help section with faqs. 

The most significant challenge so far has been the challenge integration with social. As Venmo had limited access to it's API, another challenge is found in selecting the right front end and back end framework for development.

Additional areas for research and design are related to an update of the organizations blog structure and their map content with the organization's partner communities in the Amazon basin.
