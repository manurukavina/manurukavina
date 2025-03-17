---
title: What happened with e-Registrar?
hide_table_of_contents: true
custom_edit_class: narrow-text
---
<div class="e-reg-content-wrapper">

# What happened with e-Registrar?


The e-Registrar project was supposed to be a game-changer. The idea was simple but big: you type in a website’s URL, and it spits out everything you could possibly want to know about it—DNS records, WHOIS details, IP addresses, where the server’s located, who’s hosting it, how it’s changed over time, you name it. On top of that, it’d give you a trust score to tell you if the site was legit or shady. It was meant to be a one-stop shop for anyone—regular people shopping online, companies checking out business partners, or even tech folks hunting down sketchy sites. I was the one running the show, and I really thought we could pull it off. But looking back, it’s clear we bit off way more than we could chew. The whole thing fell apart because of bad code, dumb decisions I made, and some downright rotten behavior from people on the team. I messed up, and I owe it to everyone who cared about this project to explain what happened, take my share of the blame, and figure out what we can learn from the wreckage.

## The Plan: Digging Up Everything About a Website

The pitch for e-Registrar was straightforward. You’d toss in a URL, and we’d hand you a full rundown: the DNS stuff like name servers and TXT records, WHOIS info showing who owns the site and when it was registered, the IP address tied to it with details on where it’s hosted, plus extras like whether the SSL certificate checks out or how the site’s setup has shifted over time. Then we’d crunch all that into a trust score—something simple you could look at and say, “Yeah, this site’s probably fine,” or “Nope, steer clear.” It was a cool idea. People could use it to make sure an online store wasn’t a scam, businesses could size up competitors, and security types could spot troublemakers like phishing pages.

At first, it seemed like we were onto something. We got good vibes from the people we showed it to—folks liked how much info we could pull together and how handy it could be. We built some early versions that worked well enough to get us excited. But the cracks started showing pretty quick, and I didn’t see how deep they’d go until it was too late.

## The Tech Mess: Code That Couldn’t Keep Up

Here’s the thing: pulling all that data—DNS, WHOIS, IP, the works—and making sense of it in real time is a monster of a job. Our code just wasn’t up for it. What started as something we could manage turned into a total mess—sloppy scripts, slow queries, and a bunch of half-baked fixes that didn’t really fix anything. The site would choke on too many requests, freeze up, or spit out half-finished results. DNS lookups would crap out for no reason, WHOIS data would come back garbled, and IP locations were sometimes way off. The trust score, which was supposed to be the big selling point, was all over the place—sometimes it made no sense, and people couldn’t figure out why they should trust *it*.

I’ve got to own this one. I was in charge, and I didn’t crack the whip hard enough. I figured the developers would sort it out, but I didn’t make sure we had solid rules for writing code or double-checking it. We barely documented anything, and testing? Forget it—we’d slap something together and hope it held. It didn’t. I should’ve pushed for a cleaner setup, made sure we tested the heck out of it, and kept the junk from piling up. Instead, we ended up with a shaky mess that let down anyone who tried to use it.

## My Screw-Ups: Trying to Juggle Too Much

The tech wasn’t the only problem—I dropped the ball on running the show, too. We had this huge idea, but I didn’t give us enough time or people to make it work. I thought we could pull off miracles on a tight schedule with a small crew, and that was dumb. Deadlines kept slipping because I didn’t plan for how tricky it’d be to tie all those data pieces together or get the trust score right. We were always playing catch-up, rushing stuff out that wasn’t ready.

On top of that, I didn’t keep the team on the same page. People weren’t sure who was supposed to do what, so some stuff got done twice while other things got ignored. I’d tell the folks backing us that everything was fine when it wasn’t, just to keep them happy. I was too caught up in dreaming about what e-Registrar could be instead of focusing on the nitty-gritty of making it happen. I didn’t set up a clear plan or make sure everyone knew their job, and that left us scrambling.

## The Worst Part: People Taking Cash Under the Table

Then there’s the part that still makes me sick. Some of the team started taking money to fudge the trust scores. Yeah, you read that right—the thing that was supposed to tell people what sites to trust got rigged because a few people saw a chance to cash in. They’d bump up scores for sites that paid them, throwing the whole point of e-Registrar out the window. Users thought they were getting the real deal, but they were getting lied to.

Finding that out hit me hard. It’s on me that it even happened. I didn’t know about it at the time, but I should’ve had better checks in place—ways to see who was touching what and catch anything fishy. I trusted everyone to play fair, and that was a mistake. We didn’t have anything solid to stop it or spot it early, and by the time we figured it out, the damage was done. People stopped believing in us, and I can’t blame them.

## How It All Fell Apart

Put all that together—crappy code, my bad calls, and the backroom deals—and you’ve got a recipe for a train wreck. Users got fed up with glitchy results and trust scores they couldn’t rely on, so they bailed. The people who’d been cheering us on pulled back when they saw we couldn’t deliver and heard about the shady stuff. Inside the team, it was a mess—nobody was happy, and we started pointing fingers instead of fixing things. Money-wise, we were bleeding cash with nothing to show for it. Shutting it down was the only move left, even if it sucked to admit.

## What’s Next: Picking Up the Pieces

E-Registrar didn’t work out, but I’m not ready to call it a total loss. We screwed up big-time, but there’s stuff we can take from it. We’ve got to build things that don’t fall apart under pressure—code that’s solid and can grow. I need to get real about what we can pull off, keep everyone in the loop, and make sure we’re all pulling in the same direction. And we can’t let anyone pull stunts like that payoff crap again—there’s got to be rules and ways to catch it fast.

I feel awful about how this went down—for the users who got let down, the team that stuck with it, and the folks who believed in us. I’m sorry, plain and simple. But I’m not done yet. I want to take what we learned and do something better next time. People still need a way to figure out what’s legit online, and I’m set on figuring out how to give it to them—smarter and straighter this time.

--- 

e-Registrar in the background with the logo in front.
![Alt text](/ereg.png)

---

I feel awful about how this went down—for the users who got let down, the team that stuck with it, and the folks who believed in us. I’m sorry, plain and simple. But I’m not done yet. I want to take what we learned and do something better next time. People still need a way to figure out what’s legit online, and I’m set on figuring out how to give it to them—smarter and straighter this time.

</div>