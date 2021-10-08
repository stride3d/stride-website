---
layout: post
title: 'Community meeting October 2021'
author: 'Jorn Theunissen'
popular: true
---

It has been quite a while since we had a community meeting with the Stride community. On the 1st of October 2021 we had a good 2 hour chat about various topics on the Stride game engine. 

## Access rights ##
First topic was about clearing up access rights of the Stride source contributors and how this can be displayed better to the rest of the world. 

* Github features a teams option, which is now free for open source projects. Xen2 made sure that those contributing to the engine are now part of the team on Github: https://github.com/orgs/stride3d/teams/stride-contributors. These contributors can review and approve pull requests in to the various stride projects (engine, website, documentation). 
    * When changes are merged into the website project and specifically the 'release' branch, an automated process will trigger the website deployment.
    * Documentation is updated as well, although this is a manual process that needs to be triggered. Xen2 and Aggror will do some knowledge sharing in private, so that this process does not lie solely with xen2.
* Social media access
    * Youtube: xen2 and Aggror
    * Facebook: xen2 and M0TH
    * Twitter: xen2 and Aggror

## Roadmap ##
The roadmap on Github hasn't received an update in quite a while. The reason for this is that there simply is no capacity to pick up these kind of features like terrain editor, visual programming etc.
What we see in the community is that various contributors work on useful features for their own games, and as a result these kind of features and bug fixes and up being merged in to the Stride repository. 

* As a result it has now been decided that we no longer will use the roadmap on Github. At the moment of writing this blog, the roadmap has already been removed. If, in the future, we have more funding and capacity, we can re-introduce it again.
* Aggror will try to put out a blogpost once a month keeping the community up to date on features that community members are working on. This also requires some initiative from the community. So if you have something that you are working on, feel free to send a message to Aggror on Discord. That we can feature your screenshots, videos, PR's in a blogpost on the stride website.

## Funding ##
There were 2 ways to contribute to Stride financially: Patreon and Xen2 sponsorship on his Github account.

* Both these donation services didn’t really give a clear overview where the money was being spent on.
* Sponsoring Xen2 on Github would specifically and only go to Xen2. On top of that there is no easy way to use this as a marketing tool.
* Only Xen2 had access to Patreon, making it another responsibility for him to:
    * Post something interesting on Patreon (for which he has no time)
    * Do tax related activities and payments.
* Because of the above, Stride's Patreon page will soon close (or already might be at the time of posting blog)
* Aggror will look into setting up a more open way of viewing where money from donations is being spent on. The idea here is to have a look at [Open Collective](https://opencollective.com/how-it-works)
    * Aggror will present his findings to xen2. Once a decision has been made, the community will be informed.
* .NET foundation
    * Stride has joined the .NET foundation. The .NET foundation offers to host various services on their Azure subscriptions. That means that a majority of the costs when it comes to hosting is taken care of for us.
    * As a result of this, Xen will move various services from Digital ocean to Azure. This will reduce costs. Money that is gained from donations can be spent on bug bounties, features and documentation. Once we have a new donation mechanism in place, we will have another community meeting on how to distribute money.
    * Aggror will also be included in the communication with .Net foundation.
* Xen2 gave a nice summary on the operating costs for various (web related)services
    * Azure: used to be $50~$100 per month but now paid by .NET Foundation
    * StackPath (CDN): $10 per month, can be moved to Azure
    * Google Cloud Service: $5 per month
    * DigitalOcean: $30 per month (teamcity and forums server), can be moved to Azure
    * GitHub: $40 per month
        * Some demo's use LFS. If .NET foundation were to cover those costs too, we could add additional demo's.
    * SSL: used to be expensive but now free (auto renew let's encrypt or Azure)
    * Domains: cheap, $10 per year
* Applying for a grant with Epic, Microsoft etc.
    * Although this is something that we want to pursue, we first want to have a new donation service in place. The next community meeting will cover this topic again.

## Stride 4.1 ##
Stride 4.1 is on its way, but when exactly and what can we expect this year?

* Stride 4.1 BETA will include the upgrade to .NET 6
* Stride 4.1 targeted around november/december 2021
* Although full Linux support is not possible right now, we will look at having the Linux runtime working again with Stride 4.1
* Aggror will start collect info for the release notes

## Remaining topics ##
For the remaining topics, we ran out of time, so these will be picked up at another community meeting.
