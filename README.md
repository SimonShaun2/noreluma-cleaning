# Noreluma Cleaning

A plain HTML, CSS, and JavaScript website for Noreluma Cleaning. There is no CMS, build step, package manager, or server requirement.

## Run locally

Open `index.html` in a browser or serve this directory with any static file server. All asset links are relative, so the site can be hosted at a domain root or a subpath.

## Quote requests

The current quote form validates the required fields and opens a prepared email draft addressed to `cleaningquotes3@gmail.com`. The visitor must review and send the email. This is a fallback, not an automated CRM submission.

The sample images are AI generated illustrations of typical business spaces, not Noreluma customer jobs or testimonials. Keep that disclosure until real, authorized customer photos are available.

## Static hosting

- GitHub Pages: publish the repository root from the default branch. GitHub Free requires a public repository for Pages.
- Cloudflare Pages: connect this repository, choose no framework, use `exit 0` as the build command, and set the output directory to `.`.
- Any other static host: upload the contents of this directory as the site root.

The site can be public while the email fallback is in place. Before changing to a CRM form, configure it in the selected Noreluma account, verify its required email and phone fields, and test a submission. A HubSpot form can be embedded without a CMS or a private API key.
