(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const t of i.addedNodes)t.tagName==="LINK"&&t.rel==="modulepreload"&&r(t)}).observe(document,{childList:!0,subtree:!0});function c(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=c(a);fetch(a.href,i)}})();const l=[{image:"/assets/step-1.svg",number:"Step 1",title:"Pick a kitchen",copy:"Forty kitchens from Westfield to Brusubi, with live opening hours and honest delivery times."},{image:"/assets/step-2.svg",number:"Step 2",title:"Build your order",copy:"Extra pepper, no onions, two spoons. Every kitchen readies your note before it starts cooking."},{image:"/assets/step-3.svg",number:"Step 3",title:"Track your rider",copy:"See the scooter on the map from the moment it leaves. Pay cash at the gate or by mobile money in the app."}],p=[{image:"/assets/dish-1.svg",name:"Benachin",kitchen:"Mama Binta's Kitchen",location:"Westfield",price:"D250",badge:"Popular"},{image:"/assets/dish-2.svg",name:"Domoda",kitchen:"Kairaba Corner",location:"Kololi",price:"D200",badge:"Popular"},{image:"/assets/dish-3.svg",name:"Chicken yassa",kitchen:"Senegambia Grill",location:"Kololi",price:"D350",badge:"Spicy"},{image:"/assets/dish-4.svg",name:"Afra",kitchen:"Afra Bantaba",location:"Bakau",price:"D400",badge:"Spicy"},{image:"/assets/dish-5.svg",name:"Superkanja",kitchen:"Aunty Haddy's",location:"Serrekunda",price:"D180",badge:"Vegetarian"},{image:"/assets/dish-6.svg",name:"Tapalapa and egg",kitchen:"Morning Bread",location:"Bakau",price:"D75",badge:"Breakfast"}],h=[{name:"Serrekunda",time:"25 min"},{name:"Bakau",time:"30 min"},{name:"Kololi",time:"30 min"},{name:"Brusubi",time:"40 min"},{name:"Banjul",time:"45 min"},{name:"Lamin",time:"45 min"}],d=document.querySelector("#app");if(!d)throw new Error("App root was not found");const u=l.map(e=>`
	<article class="step">
		<img src="${e.image}" alt="" class="step__image">
		<p class="step__number">${e.number}</p>
		<h3>${e.title}</h3>
		<p>${e.copy}</p>
	</article>
`).join(""),m=p.map(e=>`
	<article class="dish-card">
		<img src="${e.image}" alt="" class="dish-card__image">
		<div class="dish-card__body">
			<div class="dish-card__heading">
				<div>
					<h3>${e.name}</h3>
					<p>${e.kitchen} <span>·</span> ${e.location}</p>
				</div>
				${e.badge?`<span class="badge badge--${e.badge.toLowerCase()}">${e.badge}</span>`:""}
			</div>
			<div class="dish-card__footer">
				<strong>${e.price}</strong>
				<button class="add-button" type="button" data-dish="${e.name}">Add</button>
			</div>
		</div>
	</article>
`).join(""),g=h.map(e=>`
	<li class="area-row">
		<span>${e.name}</span>
		<span>${e.time}</span>
	</li>
`).join("");d.innerHTML=`
	<header class="site-header">
		<div class="container header-inner">
			<a class="brand" href="#top" aria-label="Chop Chop home">
				<img src="/assets/logo.svg" alt="" width="40" height="40">
				<span>Chop Chop</span>
			</a>
			<button class="menu-toggle" type="button" aria-controls="primary-navigation" aria-expanded="false">
				<span class="menu-toggle__icon" aria-hidden="true"><span></span><span></span><span></span></span>
				<span class="sr-only">Open menu</span>
			</button>
			<nav id="primary-navigation" aria-label="Primary navigation">
				<a href="#how-it-works">How it works</a>
				<a href="#popular">Popular</a>
				<a href="#areas">Areas</a>
				<a class="header-cta" href="#download">Get the app <span aria-hidden="true">↗</span></a>
			</nav>
		</div>
	</header>

	<main id="top">
		<section class="hero">
			<div class="container hero-grid">
				<div class="hero-copy">
					<p class="eyebrow">Now delivering in Serrekunda, Bakau and Brusubi</p>
					<h1>Dinner is one tap away.</h1>
					<p class="hero-lede">Benachin, domoda, afra, yassa. Order from forty kitchens across the Kombos, pay on delivery or by mobile money, and watch your rider all the way to the gate.</p>
					<div class="hero-actions">
						<a class="button button--primary" href="#download">Get the app</a>
						<a class="text-link" href="#popular">See what's popular <span aria-hidden="true">→</span></a>
					</div>
				</div>
				<div class="hero-visual">
					<img src="/assets/phone.svg" alt="A phone showing the Chop Chop app with kitchens and dishes" class="phone">
					<div class="stat-card"><strong>28 min</strong><span>average delivery</span></div>
				</div>
			</div>
		</section>

		<section class="section" id="how-it-works">
			<div class="container">
				<div class="section-heading">
					<h2>How it works</h2>
					<p>Three steps, and none of them is a phone call.</p>
				</div>
				<div class="steps-grid">${u}</div>
			</div>
		</section>

		<section class="section popular" id="popular">
			<div class="container">
				<div class="section-heading">
					<h2>Popular this week</h2>
					<p>What the Kombos ordered most in the last seven days.</p>
				</div>
				<div class="dish-grid">${m}</div>
			</div>
		</section>

		<section class="section" id="areas">
			<div class="container areas-layout">
				<div class="section-heading">
					<h2>Where we deliver</h2>
					<p>Typical time from the kitchen to your gate. Lamin and Banjul open at lunch and dinner only.</p>
				</div>
				<ul class="area-grid">${g}</ul>
			</div>
		</section>

		<section class="download" id="download">
			<div class="container download-inner">
				<div>
					<h2>Get Chop Chop on your phone</h2>
					<p>Free to install. Your first delivery is on us, anywhere from Bakau to Brusubi.</p>
				</div>
				<div class="download-actions">
					<a class="button button--light" href="#download"> <span>Download for iPhone</span></a>
					<a class="button button--outline" href="#download"><span>Download for Android</span></a>
				</div>
			</div>
		</section>
	</main>

	<footer class="site-footer">
		<div class="container footer-grid">
			<div class="footer-brand">
				<a class="brand brand--footer" href="#top"><img src="/assets/logo.svg" alt="" width="40" height="40"><span>Chop Chop</span></a>
				<p>Hot food from the Kombos, at your door. Built in Manjai Kunda.</p>
			</div>
			<div class="footer-links">
				<div><h3>Chop Chop</h3><a href="#how-it-works">How it works</a><a href="#areas">Delivery areas</a><a href="#download">Get the app</a></div>
				<div><h3>Kitchens</h3><a href="#download">Join as a kitchen</a><a href="#download">Ride with us</a></div>
				<div><h3>Help</h3><a href="#download">Contact</a><a href="#download">Terms</a></div>
			</div>
		</div>
		<div class="container copyright"><span>© 2026 Chop Chop. A fictional company, built for CS200.</span></div>
	</footer>
`;document.querySelectorAll(".add-button").forEach(e=>{e.addEventListener("click",()=>{const s=e.classList.toggle("is-added");e.textContent=s?"Added":"Add",e.setAttribute("aria-pressed",String(s))})});const o=document.querySelector(".menu-toggle"),n=document.querySelector("#primary-navigation");if(o&&n){const e=s=>{o.setAttribute("aria-expanded",String(s)),o.querySelector(".sr-only").textContent=s?"Close menu":"Open menu",n.classList.toggle("is-open",s)};o.addEventListener("click",()=>{e(o.getAttribute("aria-expanded")!=="true")}),n.querySelectorAll("a").forEach(s=>{s.addEventListener("click",()=>e(!1))}),document.addEventListener("keydown",s=>{s.key==="Escape"&&e(!1)})}
