# Cleanservice.ge — Bilingual redesign demo

Live Georgian and English interface. Public interactions audited against cleanservice.ge on 30 September 2026.

## Implemented
- Nested menus for nine original service categories and equipment rental/sales.
- All 24 service routes, with original Georgian descriptions and native FAQ accordions.
- Catalogue of 18 products; rental, steam and sale filters; product pages, image lightbox, description/specification tabs and phone enquiries.
- Real article destinations and original archive pagination, media page, native promo video, gallery, source review carousel, Google review/map links and social links.
- Recruitment page and original live enquiry/application form in an embedded dialog with a new-tab fallback.
- English/Georgian switching keeps product/category/service selections; responsive menus and keyboard controls.

## Integration boundaries
- WordPress Contact Form 7 is not migrated. Enquiry and recruitment forms run on the original domain, with an explicit handoff. No automated enquiries or applications were sent during verification.
- Full blog articles and further archive pages open on cleanservice.ge. They are not copied into a local CMS.
- New product descriptions, original detailed service text/FAQs, review text and article titles retain Georgian. The existing English pages, navigation, service summaries, product names and specification labels remain translated.
- Reviews and catalogue data are a snapshot; live feed synchronization requires the original CMS/integration access. Social feed links open the original provider.
- This is not an independently hosted replica of the WordPress backend.

## Hosting
Publish the repository root on main using GitHub Pages.
