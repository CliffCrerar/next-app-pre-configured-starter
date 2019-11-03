#  Software engineering

---

This will be the most definite and prominent responsibility, In summary it will involve translating requirements into a usable product. Key success factors will be the interpretation of requirements, designing the system architecture resulting in a system document. Delegating to a development team and to determine the most approprate approach to the solution in collaboration with management, whether outsourced or in-house, what technologies to use, while taking a preemptive approach to the resolution of unforeseen obstacles. A intensive requirements gathering phase will assist in reducing the risk of the unknown.

---

<div>
	<img class="img-fluid" src="static/img/coding.gif" alt="coding">  
</div>

---

> It is almost a certainty that the architecture and specification will undergo considerable updates during the implementation, even during the pilot and maintenance phase. The ability to adapt to change during these phases will impact the timeline and to time to market.

A RAD (rapid applications development) approach would be my choice and the method of execution would be Agile. Using cloud technology wherever possible as there are [many developer aids ](Building-Applications) provided as a cloud service.

## Requirements gathering

---

The main focus with requirements gathering phase is in essence to list all the user stories. User stories  usually begins something like **"when I do *something*, then *something* else must happen"**. 

The first tricky is to interpret the requirements, but considering the underlying need as opposed to just doing what is asked for, indeed what is asked for must be what is delivered, however consider the following analogy. In 1899 if you asked poeple that were part of the industrial revolution what they wanted, they would have said "faster horses", but what they needed was a car.

The second tricky part, and the part where management and development contend on quite a bit, is to define the **minimum viable product** 

## Minimum Viable Product

---

Version 1, what important features of the systems will be included in the first release and which of the features will be added later. Discussions around *MVP* also serve to sensitise management on the moving parts of the system that are transparent to the user but cannot be neglected, especially if the system is to be used by consumers at large.

---

<div>
	<img class="img-fluid" src="static/img/brainstorming.jpg" alt="brainstorming">  
</div>

## System document

---

Very inappropriately named, the system document is more of a library than a document. The library describes the system in as much detail as necessary. A balance must be maintained per the [agile manifesto ](https://agilemanifesto.org/) *"functional code as opposed to documentation"*. 

It will encompass of the requirements of the system, what options are available to most efficiently implement the system. For example, is there a product that can be bought from "the shelf" that will fit the needs, is there a shelf product that we can modify, does the system require to be developed from scratch.

It will cover viability, feasibility and return on investment (although I have a strong suspicion that this has been done already, otherwise you would not be talking to me.). 

It makes reference to the technology stack that sets the platform and boundaries the the application runs in, which for modern web application mean cross-platform and progressive.

It will hold the architectural framework normally completed using Unified Modelling Language (UML) which is a standard practice for creating a blueprint of the application.

Just like a blueprint for a building informs the builder to complete the construction; where the columns must go and the load bearing structures. So does a components diagram, just as the name says lays out the components of the system. A sequence diagram shows how the user interactions with the system and how the system components interact with each other to fulfill the user's instruction. An Entity Relation Diagram defines the structure of the database, it lays out the tables of the database, how the tables are related and what the columns must be.

This part will very much be the architecture of the document. I mentioned before that the document or library will be constantly evolving, the architecture if done right will stand firm, Architecture is that part that should not change much throughout an applications lifecycle, although the app may change dramatically the manner in which it was designed will not. If it has to change drastically, it is an indication of weak architecture.

The above only describes some of the content that must go in a system document. It is not a once of documentation, it is a document or library that is not only completed by one person but all who are involved in the development of a system.

As a developer getting caught up in documentation is time spent that could have been spent completing a feature or fixing a bug, and that is a very reasonable argument. With modern development tools the process of documenting the application while it is under development can be automated all a developer must to do is comment his code appropriately, which is also a very reasonable expectation, and a bot will handle the rest. 

The only documentation that will be completed outside of a coding environment is the architectural designs and the application wire-frames.

## Wire-frames

---

When a designer draws out art boards that visually describes the User interface. These act as non-functional prototypes and also serve to test whether the requirements have been interpreted correctly. This is where most of the non-functional testing takes place, where the interpretation of requirements are evaluated. Doing wire-framing also saves time, because designing and interface that is functional, placing it before the user or management then to find out it is not what they where exprecting means a los of time becuase the code modules that control the features must also be refactored. Having management and user confortable with the look and feel before functional implementation saves back and forth changing things that work that could in some instances possibly destabilise the application. This must be avoided as far as possible.

---

<div>
<img class="img-fluid" src="static/img/design-page-flat.png" alt="wireframing"/>  
</div>

---

Here my priority will also be to ensure that appropriate UX design principles are followed and is designed for a great user experience, while at the same time ensuring the application conforms with the modern web. (At the moment the main trend in interface design is called "Material Design").

> #### MATERIAL DESIGN
>
> These are principles published by google in 2017 that describe how a user interface must be layed out, what colors to use to make user interfaces beautiful, enjoyable, functional and responsive. This is what the modern web has turned into since the publication.

## Cross-platform

---

In my opinion *Cross-platform* means building one application that runs on a Windows PC, a MAC, a Samsung Smart Phone an iPhone and a tablet. It is also a web application accessed through the browser as well as a desktop application that can be downloaded to a Windows PC or a MAC and runs like a native application on a mobile phone. It is not an impossible task.

This is why designing and implementation of a modern application is done according to the Model View Controller Architecture.

---

<div>
	<img class="img-fluid" src="static/img/cross-platform.png" alt="cross-platform">  
</div>

---

**MVC** Architecture separates the user view from the module controller and the data thus making it possible to use the same controller and data for different views, it greatly assist in developing one application for all platforms where only the layout of the user view may be different. Even more so creating a smart layouts and making it responsive and flexible means that one view can be used for display on a desktop as well as a smart phone.

<div>
<img class="img-fluid" src="static/img/responsive-layout.jpg" alt="responsive layout">  
</div>

## Agile Methodologies

---

As opposed to Systems Development Life Cycle (SDLC) or waterfall, which determines that a rigid plan is followed that would deliver software by a certain deadline and the a development phases strictly following one another, the agile approach focusses on short burst or sprints where the goal is to have a peice of work done within a two week sprint. 

<div>
	<img class="img-fluid" src="static/img/agileteam.jpg" alt="agile team">  
</div>

- #### ***Standups***

  Each morning a standup session is conducted lasting no longer than fifteen minutes, everyone states the work from the previous day, the work for today and whether any difficulties might have been encountered. This helps the manager excercise good controll over the team because he is constanly aware of what everyone is doing and if the yare on track or not. 

  Stand up is by no means a policing session, it must be a safe space where everyone get a chance to speak and everyone must listen.

- #### ***Sprint planning***

  Every two weeks the sprint is planned, the planned tasks are discussed and assigned. This is preceded by a retrospective session where the good, the bad and the ugly is reflected upon, thereby reducing the the likelyhood of the unknown while celebrating the wins and making the whole team aware of pitfalls.

  <div>
  	<img class="img-fluid" src="static/img/presenting.png" alt="presenting">  
  </div>

- #### ***Sprints***

  The agile development cycle is iterative meaning that all the phases of development, requirements gathering, implementation, testing and deployment is occuring in almost every cycle. However depending on the maturity of the project, some phases will be more prominent than others. For instance at the start of the project more requirements gathering and implementation will be prominent and later on testing and deployment at the same time as requirements gathering and implementation are still ongoing.

  <div>
	<img class="img-fluid" src="static/img/adlc.png" alt="presenting">  
  </div>

  > This is what it means to be agile, the ability to respond and adapt to an ever changing environment.

  ---
  
  - ##### **Mixed approach**
  
    This will be when a team mixes up the agile approach wit the waterfall approach. Determining the approach will be determined by the requirement, Software projects where failure could cause fatality usually tend to be more waterfall than agile. This is why the development approach for a space shuttle atmosperic reentry telemetry will greatly differ from the approach to develop candy crush.

