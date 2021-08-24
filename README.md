Run `yarn build` and `firebase deploy` to deploy the app to: presstamfg.web.app

ToDo:
- Link to the xometry profile on the site. Have their logo/banner to redirect
- Get a better pic of the welded part
- Put in payment methods accepted somewhere???
- get part pics from the PDF deck sent to stu (should be in google drive)
- Go through unused copy in src/copy.json
- What would the user story be for someone coming in at any point of the cycle and what does our "consulting service" hourly/weekly/etc. get billed out as.
- make it so you can go directly to the different page URLs (server vs client side routing)
- remove un-needed pics


- Every page
  - make sure images are under 1mb
  - try playing around with a greyscale blueprint in the background for some accenting

- Header
  - check the navbar height on other browsers

- Home Page:
  - start swapping out pics for non-xometry jobs
  - find some way to convey that keeping the production in-house leads to discovering/improving problems early on and the difference between product modifications and complete reworks (both able to happen more effectively in-house)
  - maybe skip out on the last pic by classifications and certifications. Would look odd though
  - should there be padding/margin around the pictures to make them a good proportion?

- Design - update the notes here!
  - Maybe instead of having a seperate "Design" page break the flow up so it's more of the first half of egineering: i.e. inspiration --> ideation --> implementation, repeat. Ideation and refinement would both fall under engineering. inspiration works well but it's hard to make into distinct categories
  - pics of juice press pump/belt drive stuff?
  - make images all the same aspect ratio
  - make it less clunky in the md size. maybe a larger offset
- Manufacturing:
  - make cards have the title text all at the same level, center the images and figure out buttons after that
  - all of the sub pages need to be better laid out. There should be a picture with a sample of laser cut, CNCed, 3d prtined etc parts on each of those pages
  - Machining:
    - material color icons are set slightly low and the one with aluminum shouldn't pop on top with page resize. figure out min width for that card using "em" or something

  - Contact:
    - update form so it's using reactstrap instead of bootstrap