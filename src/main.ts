import './style.css'
import { deliveryAreas, dishes, steps } from './data'

const app = document.querySelector<HTMLDivElement>('#app')

if (!app) {
	throw new Error('App root was not found')
}

const stepMarkup = steps.map((step) => `
	<article class="step">
		<img src="${step.image}" alt="" class="step__image">
		<p class="step__number">${step.number}</p>
		<h3>${step.title}</h3>
		<p>${step.copy}</p>
	</article>
`).join('')

const dishMarkup = dishes.map((dish) => `
	<article class="dish-card">
		<img src="${dish.image}" alt="" class="dish-card__image">
		<div class="dish-card__body">
			<div class="dish-card__heading">
				<div>
					<h3>${dish.name}</h3>
					<p>${dish.kitchen} <span>·</span> ${dish.location}</p>
				</div>
				${dish.badge ? `<span class="badge">${dish.badge}</span>` : ''}
			</div>
			<div class="dish-card__footer">
				<strong>${dish.price}</strong>
				<button class="add-button" type="button" data-dish="${dish.name}">Add</button>
			</div>
		</div>
	</article>
`).join('')

const areaMarkup = deliveryAreas.map((area) => `
	<li class="area-row">
		<span>${area.name}</span>
		<span>${area.time}</span>
	</li>
`).join('')

app.innerHTML = `
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
				<div class="steps-grid">${stepMarkup}</div>
			</div>
		</section>

		<section class="section popular" id="popular">
			<div class="container">
				<div class="section-heading">
					<p class="eyebrow">What’s cooking</p>
					<h2>Popular this week</h2>
					<p>Local favourites, ready when you are.</p>
				</div>
				<div class="dish-grid">${dishMarkup}</div>
			</div>
		</section>

		<section class="section" id="areas">
			<div class="container areas-layout">
				<div class="section-heading">
					<p class="eyebrow">Coming your way</p>
					<h2>Where we deliver</h2>
					<p>We’re growing every day. Check if we’re already serving your neighbourhood.</p>
				</div>
				<ul class="area-grid">${areaMarkup}</ul>
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
`

document.querySelectorAll<HTMLButtonElement>('.add-button').forEach((button) => {
	button.addEventListener('click', () => {
		const added = button.classList.toggle('is-added')
		button.textContent = added ? 'Added' : 'Add'
		button.setAttribute('aria-pressed', String(added))
	})
})

const menuToggle = document.querySelector<HTMLButtonElement>('.menu-toggle')
const primaryNavigation = document.querySelector<HTMLElement>('#primary-navigation')

if (menuToggle && primaryNavigation) {
	const setMenuOpen = (isOpen: boolean) => {
		menuToggle.setAttribute('aria-expanded', String(isOpen))
		menuToggle.querySelector('.sr-only')!.textContent = isOpen ? 'Close menu' : 'Open menu'
		primaryNavigation.classList.toggle('is-open', isOpen)
	}

	menuToggle.addEventListener('click', () => {
		setMenuOpen(menuToggle.getAttribute('aria-expanded') !== 'true')
	})

	primaryNavigation.querySelectorAll<HTMLAnchorElement>('a').forEach((link) => {
		link.addEventListener('click', () => setMenuOpen(false))
	})

	document.addEventListener('keydown', (event) => {
		if (event.key === 'Escape') setMenuOpen(false)
	})
}
