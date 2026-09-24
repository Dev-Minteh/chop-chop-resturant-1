(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const t of o.addedNodes)t.tagName==="LINK"&&t.rel==="modulepreload"&&r(t)}).observe(document,{childList:!0,subtree:!0});function c(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(a){if(a.ep)return;a.ep=!0;const o=c(a);fetch(a.href,o)}})();const l=[{image:"/assets/step-1.svg",number:"01",title:"Pick a kitchen",copy:"Browse local kitchens and find something you are craving."},{image:"/assets/step-2.svg",number:"02",title:"Choose your dish",copy:"Add a favourite to your basket and make it your own."},{image:"/assets/step-3.svg",number:"03",title:"We bring it",copy:"Your meal arrives hot, fresh, and ready to enjoy."}],p=[{image:"/assets/dish-1.svg",name:"Benachin",kitchen:"Awa’s Kitchen",location:"Sukuta",price:"D280"},{image:"/assets/dish-2.svg",name:"Domoda",kitchen:"Mama Sira’s",location:"Bakau",price:"D250",badge:"Vegetarian"},{image:"/assets/dish-3.svg",name:"Chicken Yassa",kitchen:"The Jollof Spot",location:"Fajara",price:"D320"},{image:"/assets/dish-4.svg",name:"Afra Platter",kitchen:"Grill House",location:"Serrekunda",price:"D350"},{image:"/assets/dish-5.svg",name:"Superkanja",kitchen:"Kaddy’s Kitchen",location:"Kololi",price:"D220",badge:"Vegetarian"},{image:"/assets/dish-6.svg",name:"Tapalapa & Egg",kitchen:"The Breakfast Club",location:"Kanifing",price:"D180"}],h=[{name:"Bakau",time:"20–30 min"},{name:"Fajara",time:"20–30 min"},{name:"Kololi",time:"25–35 min"},{name:"Serrekunda",time:"25–35 min"},{name:"Kanifing",time:"30–40 min"},{name:"Sukuta",time:"35–45 min"}],d=document.querySelector("#app");if(!d)throw new Error("App root was not found");const u=l.map(e=>`
	<article class="step">
		<img src="${e.image}" alt="" class="step__image">
		<p class="step__number">${e.number}</p>
		<h3>${e.title}</h3>
		<p>${e.copy}</p>
	</article>
`).join(""),g=p.map(e=>`
	<article class="dish-card">
		<img src="${e.image}" alt="" class="dish-card__image">
		<div class="dish-card__body">
			<div class="dish-card__heading">
				<div>
					<h3>${e.name}</h3>
					<p>${e.kitchen} <span>·</span> ${e.location}</p>
				</div>
				${e.badge?`<span class="badge">${e.badge}</span>`:""}
			</div>
			<div class="dish-card__footer">
				<strong>${e.price}</strong>
				<button class="add-button" type="button" data-dish="${e.name}">Add</button>
			</div>
		</div>
	</article>
`).join(""),m=h.map(e=>`
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
					<p class="eyebrow">Your city, served</p>
					<h1>Good food.<br><span>Good mood.</span></h1>
					<p class="hero-lede">Discover the best local kitchens in the Kombos and get something delicious delivered to your door.</p>
					<div class="hero-actions">
						<a class="button button--primary" href="#popular">Browse dishes <span aria-hidden="true">→</span></a>
						<a class="text-link" href="#how-it-works">See how it works <span aria-hidden="true">→</span></a>
					</div>
				</div>
				<div class="hero-visual">
					<img src="/assets/phone.svg" alt="A phone showing the Chop Chop app with kitchens and dishes" class="phone">
					<div class="stat-card"><strong>4.9/5</strong><span>from hungry locals</span></div>
				</div>
			</div>
		</section>

		<section class="section" id="how-it-works">
			<div class="container">
				<div class="section-heading">
					<p class="eyebrow">Simple by design</p>
					<h2>From craving to doorstep</h2>
					<p>Three easy steps stand between you and your next great meal.</p>
				</div>
				<div class="steps-grid">${u}</div>
			</div>
		</section>

		<section class="section popular" id="popular">
			<div class="container">
				<div class="section-heading">
					<p class="eyebrow">What’s cooking</p>
					<h2>Popular this week</h2>
					<p>Local favourites, ready when you are.</p>
				</div>
				<div class="dish-grid">${g}</div>
			</div>
		</section>

		<section class="section" id="areas">
			<div class="container areas-layout">
				<div class="section-heading">
					<p class="eyebrow">Coming your way</p>
					<h2>Where we deliver</h2>
					<p>We’re growing every day. Check if we’re already serving your neighbourhood.</p>
				</div>
				<ul class="area-grid">${m}</ul>
			</div>
		</section>

		<section class="download" id="download">
			<div class="container download-inner">
				<div>
					<p class="eyebrow">Dinner is one tap away</p>
					<h2>Bring the good stuff home.</h2>
					<p>Get Chop Chop on your phone and make every meal a little easier.</p>
				</div>
				<div class="download-actions">
					<a class="button button--light" href="#download"> <span>Download for iPhone</span></a>
					<a class="button button--outline" href="#download">▶ <span>Get it on Android</span></a>
				</div>
			</div>
		</section>
	</main>

	<footer class="site-footer">
		<div class="container footer-grid">
			<div class="footer-brand">
				<a class="brand brand--footer" href="#top"><img src="/assets/logo.svg" alt="" width="40" height="40"><span>Chop Chop</span></a>
				<p>Good food, delivered around the Kombos.</p>
			</div>
			<div class="footer-links">
				<div><h3>Explore</h3><a href="#how-it-works">How it works</a><a href="#popular">Popular dishes</a><a href="#areas">Delivery areas</a></div>
				<div><h3>Follow along</h3><a href="#download">Instagram</a><a href="#download">Facebook</a><a href="#download">TikTok</a></div>
			</div>
		</div>
		<div class="container copyright"><span>© 2024 Chop Chop</span><span>Made for the Kombos</span></div>
	</footer>
`;document.querySelectorAll(".add-button").forEach(e=>{e.addEventListener("click",()=>{const s=e.classList.toggle("is-added");e.textContent=s?"Added":"Add",e.setAttribute("aria-pressed",String(s))})});const i=document.querySelector(".menu-toggle"),n=document.querySelector("#primary-navigation");if(i&&n){const e=s=>{i.setAttribute("aria-expanded",String(s)),i.querySelector(".sr-only").textContent=s?"Close menu":"Open menu",n.classList.toggle("is-open",s)};i.addEventListener("click",()=>{e(i.getAttribute("aria-expanded")!=="true")}),n.querySelectorAll("a").forEach(s=>{s.addEventListener("click",()=>e(!1))}),document.addEventListener("keydown",s=>{s.key==="Escape"&&e(!1)})}
