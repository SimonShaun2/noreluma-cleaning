# Noreluma Cleaning

A plain HTML, CSS, and JavaScript website for Noreluma Cleaning. There is no CMS, build step, package manager, or server requirement.

## Run locally

Open `index.html` in a browser or serve this directory with any static file server. All asset links are relative, so the site can be hosted at a domain root or a subpath.

## Quote requests

The quote form posts directly to the Noreluma Zoho CRM Free Web to Lead form. Business name, contact name, email, phone, and city are required. Business type, frequency, size, and details are combined into the lead Description. The separate email button opens a message to `cleaningquotes3@gmail.com` as an alternative. The public Zoho form identifiers in `index.html` are embed identifiers, not private API credentials.

The sample images are AI generated illustrations of typical business spaces, not Noreluma customer jobs or testimonials. Keep that disclosure until real, authorized customer photos are available.

## Static hosting

- GitHub Pages: publish the repository root from the default branch. GitHub Free requires a public repository for Pages.
- Cloudflare Pages: connect this repository, choose no framework, use `exit 0` as the build command, and set the output directory to `.`.
- Any other static host: upload the contents of this directory as the site root.

The Zoho CRM account is owned by `cleaningquotes3@gmail.com`. Its Web to Lead form is named “Noreluma Cleaning Quote Request” and is restricted to the GitHub Pages URL above. If the website URL changes, update the Form Location URL in Zoho CRM and republish the form. This setup does not require a CMS, server, or private API key.
