---
title: 'Community Meeting November 2021'
author: jorn
tags: ['Meeting']
---

After a month on Open Collective, the Stride collective reached $1,984.31 USD and discussed funding for various projects. Plans for requesting an Epic grant are in progress. Ongoing development includes physics constraints, splines, and the upcoming release of version 4.1.

---

## Summary

November 29th we had another commmunity meeting. This blog post summarizes the topics we talked about.

[[TOC]]

## Sponsors

Started of with a thank you to all those who donated on the new sponsor platform: [Open collective](https://opencollective.com/stride3d). In particular a big thanks to:

* {% include sponsor-user.md key:'xen2' %}, who decided that he wanted to contribute some of the Patreon money back in to the community.
* {% include sponsor-org.md key:'ore' emoji:'💎' %}
* {% include sponsor-org.md key:'vvvv' emoji:'🥇' %}
* {% include sponsor-user.md key:'vaclav' emoji:'🥇' %}

{% img 'Ore Logo' '/images/sponsors/ore_system-next_gen_nfts_dark.png' %}

## A Month of Open Collective
After a month using the new sponsor platform, the Stride collective has reached a balance of **$1,984.31** USD. We started discussing how and where the money should be distributed to. We want to do this with the help of Open collective 'Projects'. These projects are listed on Stride's Open collective page, and have their own tiers, targets and description. Users can sponsor projects directly instead of the main Stride collective if they want to.

We have come up with several projects that need to be written out in more detail before we will add them to the Open collective page. All tickets below have a Github disscusion for more details.


* OC project: Bug bounties project
  * Before starting on an issue, make it known on Github and Discord that your are willing to tackle the issue. It would be a shame if multiple people try to solve the same issue.
  * Any PR to the Stride repo must be reviewed by a contributor and discussed if needed.
  * Once a PR is reviewed and merged to the Stride repo, the submitter 60% of the bounty.
  * The submitter receives the remaining 40% when stride release happens.
  * [Github Discussion](https://github.com/stride3d/stride/discussions/1204)
* OC project: .NET 6 platforms support
    * In order for proper support for macOs, we need hardware to test this on. Xen2 will look in to the hardware requirements for this.
    * [Github Discussion](https://github.com/stride3d/stride/discussions/1206)
* OC project: Shader system
    * Xen2 will gather info and budget requirements
    * [Github Discussion](https://github.com/stride3d/stride/discussions/1201)
* OC project: Linux/macOS support'
    * A rather large topic that require a lot of work is the the support for Linux and/or macOs. When worked out in more detail, it can be used in the plan for requesting an Epic grant. Subtopics to resolve:
        * Runtime/3d
        * Build tools (able to msbuild a Stride project and have the asset compiler work on it) requirement:  FBX/Assimp
        * Editor 
    * [Github Discussion](https://github.com/stride3d/stride/discussions/1202)


## Preparing Request Epic Grant
For a while now we have been wanting to pursue the option of requesting an Epig grant. In order to do so however, we need to come up with a proper plan. The endgoal is to have a proper document explaining what we want to do, and how we plan to spend any given budget.

AggrorJorn starts a github ticket where we gather info on the request to Epic. He will contact others for proof read and further info. [Github Discussion](https://github.com/stride3d/stride/discussions/1207)

Some of the topics mentioned:
- Shader system
- Editor rewrite
- Megascan Integration 
- ECS rewrite/Run Update() and Render() in parallel


## Other Action Items
- We close forum in December as there is almost no activity there. We want to utilize Discord and Github discussion for this. The forum will be read only but we will no longer refer to it from the website and Github.
- Use a Github project for remaining tasks: [Overview](https://github.com/orgs/stride3d/projects/3/views/1)
- Github ticket on a simple free community marketplace
    - [Github Discussion](https://github.com/stride3d/stride/issues/1197)
    -  A lot of people have made usefull components/utilities/art and other usefull assets for in Stride projects. Right now we don't have a quick and easy to import such assets in to an existing (editor) project. 
    - What we can do it is utilise the existing Nuget (tagging) system so that users can quickly add a component to their ongoing project in the editor. 
- Documentation on the stride source/new comers tutorial
    - YKA, Manio143 and Tebjan collect some info for a tutorial: [Github Discussion](https://github.com/stride3d/stride/discussions/1211) 


## Ongoing Development
- Manio143: finishing touches/documentation for Physics constraints
- AggrorJorn: Splines
    - Trying to finish the base splines which could be integrated in to the Stride source. Other Spline based components should be added later, so that we can have a milestone finished.
    - *Some tricky stuff with custom translation gizmo's for controlling tangents in the editor are currently holding me back. If this isn't resolved quickly I will make a PR without this (nice to have) feature*
- Release of 4.1 only held back by final .NET 6 related fixes. After that Xen2 will prepare release. AggrorJorn will aid in blogpost release notes
        
