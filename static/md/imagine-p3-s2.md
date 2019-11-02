> It is noteworthy that the opportunity of applying IaaS considerably reduces the risk of availability, safegaurding of assets, loss of data and need to implement disaster recovery measures, in contrast recklessness in the application thereof could have a dire impact on capital.

## About Cloud Networking

---

- a Virtual network by default provides strong security.
- Static IP (internet protocol) addresses are available on request, you only pay for static IP's **NOT** in use. (Static IP's are required for hosting online assets like websites / applications etc.)
- As you will see in the cloud architecture diagram above, the VPC (Virtual private cloud network) is divided up into subnets. Subnets seperates the publicly accessed network from the intranet, in this example, employee access a stricter governed subnet that is seperate, albeit connected, the access to the "internal subnet" will be stricter than the access to the public subnet.
- The cloud architecture diagram has support in its own subnet, to seperate all the concerns, subnets generally available at additional cost.
- For productivity users will access [worspaces](#workspaces) as Desktop as as service (DaaS) located behind a security group and accessed via [single sign (SSO)](#singe-sign-on) on credentials provided via a cloud directory service.
- Access to any virtual servers can be restricted per IP address, these are mere IP filters. For AWS EC2 servers can only be accessed if you have a security key (asymetric encryption). Google is much more relaxed on this front. As for Azure I have only used serverless in that cloud.

{class="rn-list"}

---

<div>
	<img class="img-fluid" src="static/img/banner.png" alt="networking banner">  
</div>

---

## Operations and policies {class="align-left"}

---

As the business grows various roles will be established, employees almost at all levels require access to proctivity applications which are usually at least Microsoft's products like word, excel and powerpoint. Although there are other, arguably better options available; Microsoft productivity applications are an institution. 

Expecting employees to use alternatives could have an impact on morale. In my experience the most effective plug for this gap would be to acquire a office 365 license per employee thereby access to the desired productivity applications by default, and cloud space. That being said, desktop as a service could  resolve this problem.

Policies would typically be related to acceptable use and the protection of the firms intellectual property. 

## The role of technology and social media related to marketing strategy.

---

This mainly involves the companie's strategic position in terms of social media, and because the company will start with minimal staff, I can volunteer in this area. The idea is not so much about selling as it is about awareness and a strong presence online. That being said, very much a role involving colaboration with sales. 

Setting up the correct social media pages, registering the business with the right portals, like google business, linkedIn companies etc. Publishing information sites, email campaigns and the right tech for the job, conducting webinars, availing all kinds of online content. 

Publishing privacy policies, terms of use, disclaimers. Implementing controls to receive notifications when someone mentions the company. Managing the companie's reputation online. Applying search engine optimisation and automating social media posts to increase **SEO**. Analysing the results of campaigns to launch more effective campaigns. 

Attempt to get users attention by the possibility of an incentive, so to drop cookies in the right place.  User profiling to better understand the target market. Finding software to manage all of this centrally, (A package I know of named Pardot is extremely effective, also has a hefty price tag.)

# Support 

---

From a perspective of Chief Technology Officer there are two distinct groups of user that will require support. The **consumer** of the product / software and the **employees** of the business. The support required here will have different objectives that must be considered.

---



<div>
	<img class="img-fluid" src="static/img/tech-support.jpg" alt="tech-support">  
</div>

## Employee

---

Did you turn it off and on? The days it being the fix for everything are long gone, still an effective solution to many device problems (Joking aside). Users are become smarter, users that work in offices are by default knowledge workers, often can troubleshoot their own problems. That being said I worked in dev teams, so maybe not a fair assumption. But still as long as offices are at a single premise and employee count less than twenty, it will be a one man show.

## Customers / Users 

---

This however may definitly not be a one man show, but it will be a show of user support automation. Cloud services offer [Machine Learning as a Service (MLaaS)](#Machine-learning-powering-business). Machines already having some degree of training. I pick up where the cloud developers left off and teach it to handle and resolve user queries. Queries it can't resolve are forwarded to me, once resolved, the support bot receives some training and in future should be able to resolve a similar case on its own. The nature of ML is also an evolution. The more queries it handles the faster it learns. 

It will require a ticketing system to integrate with the support bot and carefully monitored to determine the effectiveness and efficiency. This also very much in the realm of possibility. An example of such a system currently is [Intercom](https://www.intercom.com/dr/sponsor-biz?utm_source=google&utm_medium=sem&utm_campaign=2047452426&utm_term=intercom&utm_ad_collection=79229079744&_bt=385151934172&_bg=79229079744&utm_ad=385151934172&offer=sponsoredbybiz&utm_campaign_name=go_evg_acq_trial_b-a-rlsa_generic_bld_row_en&utm_ad_collection_name=gen-p_intercom&utm_ad_name=sponsoredbybiz_text_20q3&gclid=Cj0KCQjwoqDtBRD-ARIsAL4pviBLYAVRsYpQrRaJvrb-A06L7gEE98NohktV9dVlY07_GQsh_cKCjg0aAm0REALw_wcB).

# Disaster Recovery

---

It is difficult to say not knowing what the technology stack would be. Reliance on mainly Iaas and PaaS makes it very easy to implement and automate efficiently while eliminating a considerable amount of risk in the process. 

User desktops will be templates and from my experience will only be disrupted by a break in connection to the internet. Using cloud directory services along with single sign on means that users will have one set of credentials to access everything, adding two factor authentication to the mix means that if a troll acquires credentials it is worthless if he does not have access to a users smart device. Furthermore, workspaces can be supplemented by workdocs. 

This is agreat solution because it uses storage that is version aware, unlike windows NTFS file system from windows and HPFS on a Mac. Cloud storage block allows you to see what was in your excel spreadsheet last week, last month, last year. To setup disaster recovery is as easy as buying ice-cream.

I will not elaborate further on this topic as it only becomes a serious discussion for on premise hardware and file storage.