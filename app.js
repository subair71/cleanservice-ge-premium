const services=[
['ავეჯის ქიმწმენდა | რბილი ავეჯის ქიმწმენდა','ავეჯის, დივნის, სავარძლებისა და რბილი ზედაპირების პროფესიონალური ქიმწმენდა.'],
['პოსტ-სარემონტო დასუფთავება','რემონტის შემდეგ მტვრის, საღებავისა და სამშენებლო ნარჩენების სიღრმისეული მოცილება.'],
['გენერალური დასუფთავება','ბინის, ოფისისა და კომერციული სივრცის სრულყოფილი გენერალური დასუფთავება.'],
['იატაკის წმენდა','ღრმა წმენდა, დეზინფექცია, პოლირება და ზედაპირის აღდგენა.'],
['ვიტრაჟების წმენდა','ფანჯრებისა და ვიტრაჟების პროფესიონალური წმენდა თბილისში და საქართველოს მასშტაბით.'],
['აუზის წმენდა / გასუფთავება','აუზის ყოველდღიური, სეზონური და გენერალური წმენდა.'],
['აუზის გენერალური და გეგმიური წმენდა / მოვლა','წყლის ბალანსი, ფილტრაცია და სრული მოვლა.'],
['კარკასული აუზის მოვლა','კარკასული აუზის წმენდა, წყლის კონტროლი და სეზონური მოვლა.'],
['ბაღის მოვლა და დასუფთავება','ბაღისა და ეზოს მოვლა, დასუფთავება და მოწესრიგება.'],
['სარწყავი სისტემის მოწყობა','სარწყავი სისტემების დაგეგმვა და მოწყობა.'],
['მცენარეების მოვლა და კვება','მცენარეების პროფესიონალური მოვლა და კვება.'],
['სპეციალური სერვისები','სხვადასხვა ტიპის სპეციალიზებული დასუფთავება და მოვლა.'],
['ბალახის რულონების დაგება-დათესვა','გაზონის მოწყობა, დაგება და დათესვა.'],
['დეკორატიული ეზოს მოწყობა','ეზოს დეკორატიული დაგეგმარება და მოწყობა.'],
['ეზოს მაღალი წნევით რეცხვა','ეზოსა და გარე ზედაპირების მაღალი წნევით წმენდა.'],
['პარკინგისა და საპარკინგე სივრცის დასუფთავება','პარკინგებისა და დიდი სივრცეების პროფესიონალური დასუფთავება.'],
['მიწისქვეშა პარკინგის დასუფთავება','მიწისქვეშა პარკინგის ღრმა წმენდა.'],
['პარკინგის იატაკის წმენდა','ინდუსტრიული ტექნიკით პარკინგის იატაკის წმენდა.'],
['საწყობის დასუფთავება','საწყობებისა და ინდუსტრიული სივრცეების დასუფთავება.'],
['საწყობის იატაკის წმენდა','საწყობის იატაკის ღრმა და მანქანური წმენდა.'],
['ალპინისტური მომსახურება','სიმაღლეზე სამუშაოები და გარე ზედაპირების უსაფრთხო წმენდა.'],
['მზის პანელების მოვლა და წმენდა','მზის პანელების უსაფრთხო და ეფექტური წმენდა.'],
['სამშენებლო მასალის მიტანა','სამშენებლო მასალების მიწოდება.'],
['სამშენებლო ნარჩენების გატანა','შეფუთვა, დატვირთვა, გატანა და ტერიტორიის საბოლოო დასუფთავება.']
];
const englishServices = [
['Upholstery & furniture cleaning','Professional cleaning for sofas, armchairs and upholstered surfaces.'],
['Post-renovation cleaning','Thorough removal of dust, paint and construction residue after renovation.'],
['General cleaning','Complete cleaning for apartments, offices and commercial spaces.'],
['Floor cleaning','Deep cleaning, disinfection, polishing and surface restoration.'],
['Window cleaning','Professional window and glass cleaning in Tbilisi and across Georgia.'],
['Pool cleaning','Daily, seasonal and deep cleaning for swimming pools.'],
['Pool maintenance','Water balance, filtration and comprehensive pool care.'],
['Above-ground pool care','Cleaning, water quality checks and seasonal care.'],
['Garden maintenance & cleaning','Care, cleaning and upkeep for gardens and outdoor areas.'],
['Irrigation system installation','Planning and installation of irrigation systems.'],
['Plant care & nutrition','Professional care and feeding for plants.'],
['Specialist services','Specialised cleaning and maintenance for a range of needs.'],
['Turf laying & grass seeding','Lawn preparation, turf installation and seeding.'],
['Decorative landscaping','Garden design and decorative landscaping.'],
['Outdoor pressure washing','High-pressure cleaning for outdoor surfaces and yards.'],
['Car park cleaning','Professional cleaning for parking areas and large spaces.'],
['Underground parking cleaning','Deep cleaning for underground car parks.'],
['Car park floor cleaning','Industrial machine cleaning for car park floors.'],
['Warehouse cleaning','Cleaning for warehouses and industrial spaces.'],
['Warehouse floor cleaning','Deep and machine cleaning for warehouse floors.'],
['Rope-access services','Work at height and safe cleaning of exterior surfaces.'],
['Solar panel care & cleaning','Safe and effective solar panel cleaning.'],
['Construction material delivery','Delivery of construction materials.'],
['Construction waste removal','Packing, loading, removal and final site cleaning.']
];
const isEnglish = document.documentElement.lang === 'en';
const data = isEnglish ? englishServices : services;
const currentFile = location.pathname.split('/').pop() || 'index.html';
const baseFile = currentFile === 'en.html' ? 'index.html' : currentFile.replace('-en.html','.html');
const pageName = (base, english=isEnglish) => english ? (base==='index'?'en.html':base+'-en.html') : base+'.html';
const params = new URLSearchParams(location.search);
let serviceIndex = Number(params.get('id'));
if(!params.has('id')) serviceIndex = params.has('title') ? services.findIndex(s=>s[0]===params.get('title')) : 2;
if(!Number.isInteger(serviceIndex)||serviceIndex<0||serviceIndex>=services.length) serviceIndex=2;
const serviceList = document.querySelector('[data-services]');
if(serviceList) data.forEach((item,i)=>{
 const a=document.createElement('a');a.className='service-link';a.href=pageName('service')+'?id='+i;
 const n=document.createElement('span');n.className='num';n.textContent=String(i+1).padStart(2,'0');
 const title=document.createElement('span');title.textContent=item[0];
 const small=document.createElement('small');small.textContent=item[1];a.append(n,title,small);serviceList.append(a);
});
if(document.querySelector('[data-service-title]')){
 document.querySelector('[data-service-title]').textContent=data[serviceIndex][0];
 document.querySelector('[data-service-desc]').textContent=data[serviceIndex][1];
 document.title=data[serviceIndex][0]+' | Cleanservice';
}
const nav=document.querySelector('.navin');
if(nav){
 const navlinks=nav.querySelector('.navlinks');navlinks.id='navigation';
 navlinks.querySelectorAll('a').forEach(a=>{if(a.getAttribute('href')===currentFile||(baseFile==='index.html'&&a.getAttribute('href')===pageName('index')))a.setAttribute('aria-current','page');});
 const languages=document.createElement('div');languages.className='language-switch';languages.setAttribute('aria-label','Language');
 [false,true].forEach(english=>{const a=document.createElement('a');a.textContent=english?'EN':'GE';a.lang=english?'en':'ka';a.setAttribute('aria-label',english?'English':'ქართული');a.href=pageName(baseFile.replace('.html',''),english)+(baseFile==='service.html'?'?id='+serviceIndex:'');if(english===isEnglish)a.setAttribute('aria-current','true');languages.append(a);});
 nav.append(languages);
 const button=document.createElement('button');button.className='menu-toggle';button.type='button';button.setAttribute('aria-expanded','false');button.setAttribute('aria-controls','navigation');button.setAttribute('aria-label',isEnglish?'Toggle navigation':'მენიუ');button.innerHTML='<span></span><span></span><span></span>';
 button.addEventListener('click',()=>{const open=button.getAttribute('aria-expanded')!=='true';button.setAttribute('aria-expanded',String(open));navlinks.classList.toggle('is-open',open);});nav.append(button);
 document.addEventListener('keydown',e=>{if(e.key==='Escape'){button.setAttribute('aria-expanded','false');navlinks.classList.remove('is-open');}});
}
const hero=document.querySelector('.hero-actions');
if(hero){const note=document.createElement('div');note.className='hero-note';note.textContent=isEnglish?'Karcher equipment  ·  7 days a week  ·  Across Georgia':'Karcher ტექნიკა  ·  კვირაში 7 დღე  ·  საქართველო';hero.after(note);}
if(!document.querySelector('.footer')){
 const footer=document.createElement('footer');footer.className='footer compact-footer';
 footer.innerHTML='<div class="container"><a class="brand" href="'+pageName('index')+'"><img src="https://cleanservice.ge/wp-content/uploads/2024/03/C-LOGO-sm.png" alt="Cleanservice"><span>cleanservice.ge</span></a><p>'+(isEnglish?'Professional care for your everyday spaces.':'პროფესიონალური დასუფთავების სრული სერვისი.')+'</p><a href="tel:+995591484844">+995 591 484 844</a><a href="mailto:info@cleanservice.ge">info@cleanservice.ge</a><div class="copyright">© 2026 Cleanservice.ge · '+(isEnglish?'Redesign demo':'დიზაინის დემო')+'</div></div>';document.body.append(footer);
}
const form=document.querySelector('.form');
if(form){
 const fields=form.querySelectorAll('input,select,textarea');
 fields.forEach((field,i)=>{field.id='enquiry-'+i;field.name=['name','email','phone','service','message'][i];const label=document.createElement('label');label.htmlFor=field.id;label.textContent=field.placeholder||field.options?.[0]?.textContent;field.before(label);});
 fields[0].autocomplete='name';fields[1].autocomplete='email';fields[2].type='tel';fields[2].autocomplete='tel';
 const note=document.createElement('p');note.className='form-note';note.textContent=isEnglish?'This demo opens your email app with your enquiry. Nothing is sent automatically.':'ეს დემო გახსნის თქვენს ელფოსტის აპს. შეტყობინება ავტომატურად არ იგზავნება.';form.append(note);
 form.addEventListener('submit',event=>{event.preventDefault();const text=Array.from(fields).map(f=>(f.previousElementSibling?.textContent||f.name)+': '+f.value).join('\n');location.href='mailto:info@cleanservice.ge?subject='+encodeURIComponent(isEnglish?'Cleaning service enquiry':'დასუფთავების მოთხოვნა')+'&body='+encodeURIComponent(text);});
}
document.querySelectorAll('.grid3 .card').forEach((card,i)=>{const title=card.querySelector('h3');if(!title)return;const a=document.createElement('a');a.href=pageName(card.closest('.rental')||baseFile==='rentals.html'?'contact':'services');a.textContent=isEnglish?'Explore service →':'ვრცლად →';a.className='card-link';card.querySelector('.card-body')?.append(a);});
if(!matchMedia('(prefers-reduced-motion: reduce)').matches && 'IntersectionObserver' in window){const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('in-view');observer.unobserve(entry.target);}}),{threshold:.06});document.querySelectorAll('.card,.feature,.blog-card,.service-link,.cta-box').forEach(el=>{el.classList.add('reveal');observer.observe(el);});}
