Run `yarn build` and `firebase deploy` to deploy the app to: presstamfg.web.app

ToDo:
- justify all the pages with the same padding on the sides and have the header match
- Link to the xometry profile on the site. Have their logo/banner to redirect
- Get a better pic of the welded part
- Put in payment methods accepted somewhere???
- Crop and edit part pics from folder on the desktop
- get part pics from the PDF deck sent to stu (should be in google drive)
- change logo
- Add CAGE and DUNS
- Go through unused copy in src/copy.json
- What would the user story be for someone coming in at any point of the cycle and what does our "consulting service" hourly/weekly/etc. get billed out as.
- Does it make sense to have the images all hosted as files directly in firebase's content storage system? would that help load times/printability?

- Header
  - background color?

- Home Page:
  - find some way to convey that keeping the production in-house leads to discovering/improving problems early on and the difference between product modifications and complete reworks (both able to happen more effectively in-house)

- Design / Engineering
  - Maybe instead of having a seperate "Design" page break the flow up so it's more of the first half of egineering: i.e. inspiration --> ideation --> implementation, repeat. Ideation and refinement would both fall under engineering. inspiration works well but it's hard to make into distinct categories

- Manufacturing:
  - make cards have the title text all at the same level, center the images and figure out buttons after that
  - all sub categories still have the "Find out more" button. do I want to have that go back or get rid of the button?
  - Machining:
    - material color icons are set slightly low and the one with aluminum shouldn't pop on top with page resize. figure out min width for that card using "em" or something

  - Contact:
    - Figure out how to reduce the space between the "key" and "value" columns. possibly make the info on the left half only take up 1/3ish of the real estate
    - make the contact info into a grid so everything aligns properly
    - update form so it's using reactstrap instead of bootstrap