const siteContent = {
	nav: {
		'nav-item-1': 'Services',
		'nav-item-2': 'Product',
		'nav-item-3': 'Vision',
		'nav-item-4': 'Features',
		'nav-item-5': 'About',
		'nav-item-6': 'Contact',
		'img-src': 'img/logo.png',
	},
	cta: {
		h1: 'DOM Is Awesome',
		button: 'Get Started',
		'img-src': 'img/header-img.png',
	},
	'main-content': {
		'features-h4': 'Features',
		'features-content':
			'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
		'about-h4': 'About',
		'about-content':
			'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
		'middle-img-src': 'img/mid-page-accent.jpg',
		'services-h4': 'Services',
		'services-content':
			'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
		'product-h4': 'Product',
		'product-content':
			'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
		'vision-h4': 'Vision',
		'vision-content':
			'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
	},
	contact: {
		'contact-h4': 'Contact',
		address: '123 Way 456 Street Somewhere, USA',
		phone: '1 (888) 888-8888',
		email: 'sales@greatidea.io',
	},
	footer: {
		copyright: 'Copyright Great Idea! 2018',
	},
};

// Example: Update the img src for the logo
let logo = document.getElementById('logo-img');
logo.setAttribute('src', siteContent['nav']['img-src']);

const services = document.getElementsByTagName('a')[0];
services.innerText = ('src', siteContent['nav']['nav-item-1']);
services.style.color = "green";

const product = document.getElementsByTagName('a')[1];
product.innerText = ('src', siteContent['nav']['nav-item-2']);
product.style.color = "green";

const vision = document.getElementsByTagName('a')[2];
vision.innerText = ('src', siteContent['nav']['nav-item-3']);
vision.style.color = "green";

const features = document.getElementsByTagName('a')[3];
features.innerText = ('src', siteContent['nav']['nav-item-4']);
features.style.color = "green";

const about = document.getElementsByTagName('a')[4];
about.innerText = ('src', siteContent['nav']['nav-item-5']);
about.style.color = "green";

const contact = document.getElementsByTagName('a')[5];
contact.innerText = ('src', siteContent['nav']['nav-item-6']);
contact.style.color = "green";

//append
const newNav = document.createElement('a');
const newNavText = document.createTextNode('Appended');
newNav.appendChild(newNavText);
contact.appendChild(newNav);
newNav.style.marginLeft = "5px";
newNav.style.color = "green";
//append

const preNav = document.createElement('a');
const preNavText = document.createTextNode('Prepended');
preNav.appendChild(preNavText);
services.prepend(preNav);
preNav.style.marginRight = "5px";
preNav.style.color = "green";

const headerOne = document.getElementsByTagName('h1')[0];
headerOne.innerText = siteContent['cta']['h1'];

const button = document.getElementsByTagName('button')[0];
button.innerText = siteContent['cta']['button'];

const headerImg = document.getElementById('cta-img');
headerImg.setAttribute('src', siteContent['cta']['img-src']);

const middleImg = document.getElementById('middle-img');
middleImg.setAttribute('src', 'img/mid-page-accent.jpg');

//

const featuresHeader4 = document.getElementsByTagName('h4')[0];
featuresHeader4.innerText = siteContent['main-content']['features-h4'];

const featuresContent = document.getElementsByTagName('p')[0];
featuresContent.innerText = siteContent['main-content']['features-content'];

const aboutHeader4 = document.getElementsByTagName('h4')[1];
aboutHeader4.innerText = siteContent['main-content']['about-h4'];

const aboutContent1 = document.getElementsByTagName('p')[1];
aboutContent1.innerText = siteContent['main-content']['about-content'];

const servicesHeader4 = document.getElementsByTagName('h4')[2];
servicesHeader4.innerText = siteContent['main-content']['services-h4'];

const servicesContent = document.getElementsByTagName('p')[2];
servicesContent.innerText = siteContent['main-content']['services-content'];

const productHeader4 = document.getElementsByTagName('h4')[3];
productHeader4.innerText = siteContent['main-content']['product-h4'];

const productContent = document.getElementsByTagName('p')[3];
productContent.innerText = siteContent['main-content']['product-content'];

const visionHeader4 = document.getElementsByTagName('h4')[4];
visionHeader4.innerText = siteContent['main-content']['vision-h4'];

const visionContent = document.getElementsByTagName('p')[4];
visionContent.innerText = siteContent['main-content']['vision-content'];

//

const contactHeader4 = document.getElementsByTagName('h4')[5];
contactHeader4.innerText = siteContent['contact']['contact-h4'];

let address = document.getElementsByTagName('p')[5];
address.innerText = siteContent['contact']['address'];

let phone = document.getElementsByTagName('p')[6];
phone.innerText = siteContent['contact']['phone'];

let email = document.getElementsByTagName('p')[7];
email.innerText = siteContent['contact']['email'];

//

let footer = document.getElementsByTagName('p')[8];
footer.innerText = siteContent['footer']['copyright'];
