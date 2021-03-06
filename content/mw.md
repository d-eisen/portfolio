---
# This determines what shows up first, lower weight = shows up first
weight: 3

# This is what appears as the tab's title
title: "UX Design"

# This is the description in the <head> tag
description: "I set a direction for the re-design of the product and crafted and tested a functioning prototype for development."

# This the heading of the navigation at the top of the case study
nav_heading: "UX Design"

# This is what appears in the case studies section, place this image at the /static/img folder
thumbnail: "MWMobileMockup.jpg"

# This is the title of the case study in the case studies section
case_short_title: "UX Design"

# This is the title of the case study in the case study page
case_title: "UX Design"

# This is the subtitle of the case study in the case studies section and the case study page
case_subtitle: "MedWater"

# This is the case description in the case studies section
case_description: "User experience research and design focused on developing a streamlined process for user to donate while adding functionality for challenging others to give using social media."

# This is the featured image of the case, place this image at /post_title_here/img folder
# e.g. /mypost/img
case_feature_img: "MWMobileMockup@2x.jpg"

# This is the case summary in the case itself
case_summary: "MedWater is a humanitarian nongovernmental organization (NGO) focused on empowering communities to manage their public health infrastructure. Their primary operations are in the Amazon Basin and in the United States. The site is focused on supporting the organization's social media channels as well as serving as a landing page for the organization. I developed a prototype that allows users to donate to the organization in a streamlined process.  Additionally I added functions allowing users to raise funds for the organization by challenging other people by leveraging social media."

# Your team members
team: ["David Eisenmenger"]

# Roles of your team members
roles: ["UX Researcher", "Information Architect", "UI Designer"]

# Methods your team members used
methods: ["Surveying and Interviewing", "Sketching", "Wireframing", "Prototyping"]

# Links at the bottom of the case study and where they link to
# img is the svg that's part of the button. You can use eyeball.svg or download.svg
# Place your custom svgs into /static/svg
button_links:
    - link: "https://balsamiq.cloud/su8bkvt/ppctiyo/r2278?f=N4IgUiBcAMA0IDkpxAYWfAMlAjPAQhiALJEBaRA0lANoC6AvkA%3D%3D"
      img: "EyeballWH.svg"
      text: "View Lo Fi Prototype"
    # - link: "http://copenow.co/"
    #   img: "EyeballWH.svg"
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
testimonial_subtitle: "Co-founder, MedWater"

date: 2019-07-18T17:48:35-04:00
draft: false

# Write the content of your case study below the three dashed lines. You can use markdown and raw HTML.
---
# The Design Challenge
A non governmental organization (NGO) named MedWater asked me to redesign their current website. The organization’s goal was to increase giving and engagement through their site. Based on user research, we found that two ways that users report most frequently interacting with organization online is to give financially and to share on social media. I designed a mobile-first prototype that streamlines the giving process and leverages social media to allow users to challenge others to give to the organization.

# Roles and Responsibilities
I served as a user experience team of one. Working with the client, I initiated research, synthesized the results, ideated and developed initial designs. I developed an initial prototype and performed usability testing.


# Scope and Constraints
Although the initial proposal from the organization was focused on a redesign of their website, the scope of the project was narrowed to focus on developing a prototype that would help the client to test the donation process.

# The Process
## Research: Survey and Interviews
### Survey: Participant involvement in organizations had mixed results
I began with user research. Our hypothesis was that user giving and engagement could be increased by leveraging people's connection to the organization. I performed qualitative primary research using an online survey and in-person interviews. 

I wanted to interview people who were currently involved with NGOs. A survey was completed by 16 participants who reported being involved with at least one nonprofit organization as a supporter or volunteer at some time in the last twelve months.

In the survey I asked people to indicate the particular ways that they have been involved with organizations over the last three to six months. Those surveyed reported that the top activities that they perform with an organization are: **give financially**, **volunteer their time**, **share on social media**, and **promote a campaign**.

![Chart NGO Involvement Vector](/mw/img/NonprofitInvolvmentV8.svg "Chart: NGO Involvement")

From these findings, we observed that "giving financially" and "sharing about the organization on social media" were among the most frequent ways that people reported being involved with an organization.

Based on these findings, the research seemed to signal that **leveraging social media** could serve as a means to **expand giving.** My thought process followed that if we knew that users were likely to give to an organization and also likely to share an organization's content on social media, perhaps there was a way to directly bridge these two activities.

One finding from the survey that was potentially concerning was related to seeming **low interest** in developing **new involvements** with organizations. 

![Chart Likelihood](/mw/img/LikelihoodV7.svg "Chart: Likelihood")

When asked the question, "In the next six months, how likely are you to be involved in another organization?"  only 26% of survey participants gave a response that would be categorized as a favorable response of "Extremely Likely" or "Very Likely". I was concerned that this could be a **potential barrier** to attracting new users. This finding would be something I would **explore** more deeply during **user interviews**. 
<!-- My thought process was "if there was some resistance to new involvements on the part of users, then perhaps something in the interviews would indicate what might afford users to override this perceived resistance and engage new involvements. -->

## Interviews: Personal Connections are Important to Users
I conducted in-person interviews with a group of people who were also survey respondents. I wanted to dig more deeply into a couple of important questions:<br>
1. What do organizations do that draw you in? 
2. What are the pain points associated with their experience of NGOS? 
From the survey, it was inferred that users may be reluctant to develop new involvements with organizations. In the interviews, I asked users what **draws** users to become involved with the organizations. I also asked users what were their **pain points** of being involved with organizations.

## Draws to Involvement
Participants responded that they became drawn initially to organizations through **recommendations from people that they know**. When I asked participants what organizations did to continue to draw them in as volunteer or donors, they emphasized that **alignment of their personal values** with **organization's values** drew them in.

## Pain Points
I also asked participants about their pain points associated with being involved with organizations. The two pain-points that users identified were related to time. Users reported having difficulty being involved with organizations due to **having limited time to give**, others reported feeling that in the past **organizations had made poor use of their time**.

## Competitive Analysis
I performed some brief competitive analysis reviewing the websites of some organizations with a similar mission to MedWater. Keeping in mind the findings that users frequently *gave financially to organizations* and that one of users paint points was related to *use of time*, I observed how competing sites responded to these needs. For example, competitors often place a call to action to donate in accessible location on that was persistent across pages. This feature met the users' need to donate and offered that opportunity with minimum cognitive load to find the feature.

## Discovery: Insights, Personas, Empathy Maps
As I reviewed the findings from the research as a whole, one of the key insights was that users may be likely to afford new involvement with a organization if: <br>
1. they were referred by a **personal connection**  
2. their experience with the organization's site would be **convenient and efficient** in helping users meet their goals.
<br>
Based on these insights, the requirements for the design would be likely to include efficient user flows related to giving to the organization that integrated with social media platforms to allow users to challenge others to involvement.

## Persona
I wanted to further synthesize the research that had been done and begin to develop a profile of the kind of person for who I was designing. Two lean personas were developed based on the surveys and interviews. The first persona, Linda, valued personal connection as a factor related to her involvement with organizations. Linda was generous with her time and was not a frequent user of mobile technology.
![Persona Linda](/mw/img/PersonaLindaV05.png "Lean Persona Linda")

The second persona, Shawn, valued personal connection as well. Shawn had less time to give than what he wanted. Shawn appreciated convenience as factor as it related to his interaction with an organization's website.
![Persona Shawn](/mw/img/PersonaShawnV05.png "Lean Persona Shawn")

## Empathy Maps
I also wanted to begin to predict how users might behave when using the site. To extend the reach of the personas, I developed empathy maps to project a more detailed view of each persona's behaviors and motivations.

![Empathy Map Linda](/mw/img/EmpathyMap01V5.png "Empathy Map Linda")

![Empathy Map Shawn](/mw/img/EmpathyMap02V5.png "Empathy Map Shawn")

## Information Architecture: Card Sort and Site Map
### Card Sort
Based upon insight from research, the personas, and the empathy maps, I wanted to learn what would be the most intuitive way to organize the site from the user's perspective. I engaged a card sort activity to help answer this question. An open card sort evaluates a website’s **content strategy** by asking participants in study to sort cards with tasks associated with the website into categories that make sense to the user. The results of the study including the categories, cards, and participant comments were analyzed and evaluated. 

### Site Map
I designed a site map based on the results of the card sort activity. I completed an initial hand drawn sketch of the site map to begin the design process. Since my directive was to develop a minimally viable product, I knew that the prototype would not necessarily need to have each section of the site fully developed, however a sound content strategy would include a comprehensive site map.

## Design: User Flows, Sketching, and Wire framing

### User Stories and Flows
Following a Lean methodology, I developed the content strategy based on **user stories**. User stories are a basic statement that indicates a users basic goals and motivation behind that goal. One of the primary user stories that were identified by the initial design problem and further clarified by research and insight activities were related to making a gift to the organization and connecting with others on social media. 
<ul>"As a user, I want to make a donation to the organization so that I can support the organization financially."</ul>
<p>Based on this user story I developed a few simple user flows that illustrate the process that user would follow on the site to reach their goal.

<p>Below is an example a user flow based on this story. This flow takes the user from the site's landing page to a completed donation.

![User Flow High Fidelity](/mw/img/MedWaterUserFlowsHiFi_Page_2.jpg "User flow: From landing page to donation.")

<!-- ![User Flow High Fidelity 1](/mw/img/MedWaterUserFlowsHiFi_Page_1.jpg "User Flow High Fidelity 1") *User flow high fidelity: Landing Page to Create Account* -->

### Wireframing
Based on my sketches I developed a low fidelity wireframe of the site. Using the Sketch application I began to sequence the screens into a few different flows based on the user story "As a user, I want to make a donation to the organization so that I can support the organization financially."
<br>
<br>
### Landing Page to Individual Donation
Here is the screen flow from the landing page to making an individual donation. This flow represents a user donating $50 to the organization via credit card in a one time gift.
![Wire Frame 1](/mw/img/Single1A.png "Wire Frame: Landing Page to Single Donation 1 of 3") 

![Wire Frame 2](/mw/img/Single1B.png  "Wire Frame: Landing Page to Single Donation 2 of 3") 

![Wire Frame 3](/mw/img/Single1C.png  "Wire Frame: Landing Page to Single Donation 3 of 3") 

## Development: Low Fidelity Prototype
I did some quick guerilla testing of the wireframes with a couple of users to screen for any major usability issues. Having received positive feedback from testers, I moved to developing a low fidelity prototype. The <a href="https://balsamiq.cloud/su8bkvt/ppctiyo/r2278?f=N4IgUiBcAMA0IDkpxAYWfAMlAjPAQhiALJEBaRA0lANoC6AvkA%3D%3D">prototype</a> was developed in Balsamiq and Sketch. It simulates the login process and various flows related to making donations and engaging the site's challenge features. Some areas of the site outside of the MVP have a placeholder that is clearly marked within the experience. The low fidelity version does not contain the full color pallette and styling of the site in order to allow users and testers to focus on the screen layout and process flow. 

[![Prototype](/mw/img/LandingPg.png)](https://balsamiq.cloud/su8bkvt/ppctiyo/r2278?f=N4IgUiBcAMA0IDkpxAYWfAMlAjPAQhiALJEBaRA0lANoC6AvkA%3D%3D)

## Iteration: Usability Study and Feedback
### Usability Study
I conducted in person usability tests using a prototype of the MedWater site accessed by the user on their laptop or mine. Participants were asked to complete four tasks using the clickable prototype. They were instructed to work independently on the assigned tasks, moving as close to completion as possible. While completing the tasks, users were asked to think aloud, sharing their process verbally. As participants completed the process, I recorded their comments and made note of their actions. Upon completion of the tests a report was completed and given to the client.

<!-- ![Usability Report Cover Page](/mw/img/MWUsabilityTestReport_Page_1.png "Usability Test Report") -->
# Outcomes and Lessons
### Feedback and Recommendations
As I evaluated the results of the usability tests some the following issues emerged related to the tasks assigned during the test: 
<ul>
<li>Some users found the prototype’s Facebook login sequence to have too many steps.</li>
<li>While making donations, some users missed the flow guidance that was offered by the alert window on the form.</li>
<li>Some users wanted to receive updates from the organization without having to create a full account.</li>
</ul>
Based on the findings of the study, the following recommendations were made regarding the above issues.
<ol>
<li>Streamline the Facebook login process as part of fundraising challenges</li>
<li>Improve the user guidance within the donation form using typography and color</li>
<li>Create options for receiving updates without creating a full account</li>
</ol> 
 
## Next Steps

The next steps are to build a high fidelity prototype. Following an additional round of user testing and rapid iteration will follow and the prototype will be ready for development. The next iteration of the site would likely include the site's blog content as well as a help section including frequently asked questions. 

The most significant challenge so far has been the integration with social media. Venmo currently provides limited access to its API, therefore seamless integration with the platform may be a challenge for development. 

An additional area for research and design may be to focus on the organization's use of map content related to the organization's partner communities in the Amazon Basin. This content expresses the core of the organization's work. With the donation process streamlined, additional sections of the site can be quickly updated according the organization's goals. 
