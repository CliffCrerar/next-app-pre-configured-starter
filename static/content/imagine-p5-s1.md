# Development Operations

---

In my opinion, this is defined as governance of the software engineering process while constantly striving to minimise inefficiencies by maximising automation. Every new software development team will have to do things manually, although implementation of automation processes are absolutely crucial, the implementation of automation takes time, time that could be spent developing features. This is something that I am always mindful of because you cannot sell automation, however the implementation of effective automation does reduce the time to releases.

---

<div>
	<img class="img-fluid" src="static/img/dev-ops.gif" alt="development operation">  
</div>

---

## Devtools and Code Review

---

My eventual goal here will be to use effective devtools (software that aids developers to code faster), and reasonable and flexible code reviews (not all developers write code the same, to penelizing a developer because that is not what I would to is just daft, and wastes time redoing some thing that works just fine.) main focus being that code is coherent as well as cohesive (clean code) as well as appropriatly commented. The main objective the code review that I am describing will be to ensure that documentation can be automated successfully.

<div>
	<img class="img-fluid" src="static/img/working-it.gif" alt="working it">  
</div>

Because of the agile approach this will be crucial, ensuring that application documentation is updated as the application evolves.

Code reviews and bug reporting must be a blameless process, it does not matter who wrote the code, who made the error. This blameless approach goes a long way to help keep morale high.

## Functional Automated Testing

---

Functional testing will be the first process that must be automated, automated tests can run while developers are not working, automation does not get tired, does not need a salary nor children that get sick. The reason I say it is so crucial is because I have first hand experience of what happens when a manual testing process fails, and it is almost gaurenteed that there will be oversight.

In some cases it so happens that the implementation of a new feature on an existing application could break something that was working before, this is unfortunatly inevitable. The two main controls to avoid this is flexible but robust architecture as well as regression testing (retesting everything after a new feature is implemented).  

<div>
	<img class="img-fluid" src="static/img/man-or-machine.gif" alt="man or machine">  
</div>

> If a feature is due last week, a tester cannot afford to complete a manual regression test on a system that already sports a hundred and one features, and if he tries it could take a week. Because of pressure certian tests will be neglected. The last thing that any manager wants to hear from a customer is "but it was working before, why is it broken now?". 

Automated tests do not miss or neglect to complete tests, unless the test does not exist. They do not compromise and let some things slide. Automation does the regression testing in minutes.

## Load Testing

---

These tests have many variables and are difficult to simulate and automate, the up side is that they do not have to be carried out as often as functional testing. Implementing in a scalable cloud environment almost eliminates this risk completely. 

The most effective way to prevent a load failure is not by testing but by monitoring. The same data that will give a marketing exec figures of a target market or consumer demographic, gives a software engineer info to most optimally implement load balancing, data distribution and assists in determining an effective scalability strategy. 

### Test Driven Approach

---

- Bug detection usually has two sources; testing and users, bugs are an inevitability. There are varying degrees of bugs in the software. Bugs that are but a minor inconvenience to bugs that cause complete systems failure. Another very effective method of reducing this is by test driven development. Test driven development is where you write the test case for a certain part of the feature first before you implement it, automated testing is usually code that is written and executed by a computational device just like a feature of an application. 

- With test driven development, the automated test is actually inegrated into the application. This approach is greatly about opportunity cost. I concede the cost is a feature taking more time to implement (varies on the experience of the dev with TDD and the complexities of the feature), the benefit is that additional time spent developing automation is considerably reduced. Currently in practice this is the most popular approach especially with developers that use object orientation. (Java, C#)

## Releasing

---

With cloud technology it is not uncommon for releases to occur on a daily basis, the application runs in a central location and not on a user's machine. Consider the following scenario:

> A bug reported by a user at 9am, The case is handled by a support bot and automatically assigned to an appropriate developer. 
>
> The developer fixes the bug, completes white box testing and once he is satisfied the bug is fixed, pushes his code to a git repository where a bot picks up the update pulls it to a staging area and runs the tests.
>
> If all the tests are successful a manager is notified. Depending on how much faith he has in his machines approves it without extensive review, or even lets the machine decide. By and by 1am the bug is fixed and a new version of the application is released. 

This is the current practice. On projects where there are hundreds of developers this almost happens hourly and well within the realms of possibility. In practice it is called **Continues Integration / Continues Delivery or Deployment**.

<div>
<img class="img-fluid" src="static/img/globe-7.gif" alt="blowing it away">  
</div>

There is never really a point in time. An application is constantly evolving on a daily basis, no more lengthy lead times for features to be released. 

For example this very site, If you are reading it the same day I sent it, you could probably encounter some broken sentences, over user of the word "that" and all my bad writing habits because I have to self review it. I normally let it cool down and review it again. All my online material follow this CI/CD approach, if you are reading this two or three days after I sent it I might have ironed out all those "bugs" already.	