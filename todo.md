
====================
Just make etc map inactive, not delete it.

Should still popup in the search results but

Filter the search by filter active/ inactive.
------------
Show the option to pic active/ inactive when searching (save active or inactive mapId)
=========
After i rename the name of the map from the Map Settings,
It doesnt update the name on the orange header bar.

=========
On pick Data Attribute :
Still provide the Field Name.

=======================
======================
comment sequence number for expander.
======================
Route the NEW RECORD
---------------
when the new mapId is created from inside the create a brand new map
when the
dispatch ({  type: 'CREATE_CLIENT',   payload: response.data });

from the view i shoudl  route the NEW RECORD to /roecords/2389238034{newly created mampID}

======================
TOASTER  -

We can dispatch teh toaster actions like here:

https://react-redux.js.org/using-react-redux/connect-mapdispatch


const mapDispatchToProps = dispatch => {
  return {
    // dispatching plain actions
    increment: () => dispatch({ type: 'INCREMENT' }),
    decrement: () => dispatch({ type: 'DECREMENT' }),
    reset: () => dispatch({ type: 'RESET' })
  }
}




======================
 show none for - left / Right padding on create new form
 route.

============
make EDIT REcords heading as better.

========================================
After creating a new map, route to the /records/23433232423
 so that on that screen user can click new Record or new Field.

========================================
To do :  on start typoing the field name, it should create the field
so that we create it and save it and then we can populate the options.

To do : Same do the above for creating a new record.


TO do : it doesnt creat a new record from within the edit records route.
========================================

in edit records upon changing the dropdown we have to click save button to save actually ssave it but

In fields dropdown we dont have to do that. WTF

========================================
not receiving props inside the components/records/ pickmapselectRecords.js


Make sure it works for crate new field.

Make sure it works for crate new record.

========================================
Dispatch the snackbar from action.
or from the copmennot itself.

try calling the action from the actions itself.

======================================================

update the API for the backend,  i.e

for creting new record.
for updating the recodw with its values.


======================================================
upon cancel click in the expander, reload the page.

======================================================

get video files for observables :
http://ultramir.net/download/1897536-pluralsight_getting_started_with_reactive_programming_using_rxjs_2016_eng.html

======================================================
on saving the editrecords, it createa weird url,
have to eliminate it.
======================================================
implement loading ui using this:

https://codesandbox.io/s/black-wind-byilt

======================================================
hook up map fields options to get from the backend.
======================================================

======================================================

======================================================
on the search screen - we have to send the \_id but not show it on the
search results.
======================================

======================================================

===========================

================================

===========================

===========================

# ===========================

# when deleting the record / field , it shoudl dispaly its name on the top.

force update the MainWrapper with the map name change :

https://stackoverflow.com/questions/46240647/react-how-can-i-force-render-a-function-component

===========================

===========================

Header containing the nameMap :
check if the ls has the name, if yes put that in the header.

===========================

# NOW TODO = - on search it goes to records along with the ID passed.

implmenet local storage like this :
https://www.robinwieruch.de/local-storage-react
https://rangle.io/blog/simplifying-controlled-inputs-with-hooks/

===========================
mapActions is wrong, it should be map maps not clients.
================

==============

==============

grid system :
https://github.com/rebassjs/rebass

USE THIS TO FIX THE TOP BUTTONS ON ROUTE /
https://rebassjs.org/recipes/flexbox-grid
==============
Stepper from create from existing

https://material-ui.com/components/steppers/#stepper
https://codesandbox.io/s/yxll4

==============

start saving the data to Azure.

==============

implement the snack reducer the right way from here:
https://codesandbox.io/s/notistack-redux-example-vk9ik

=========================
on save of the Logic - redirect it back to

=========================
MAKE SURE WE MAKE A FRESH REQUEST TO GET THE FRESH DATA WHEN WE EXPAND THE DATA
SO THAT WE ALWAYS GET A FRESH DATA EVERYTIME WE OPEN THE EXPANDER.

=========================
replace the settimeout in records/index to reducer thingy.

show loading indicator

show a laoding UI until data is displayed on the
Fields place.

Lazy load other components and
https://web.dev/code-splitting-suspense/

Beat loader
http://www.davidhu.io/react-spinners/

https://github.com/Lemoncode/react-promise-tracker

https://www.basefactor.com/react-how-to-display-a-loading-indicator-on-fetch-calls

https://auth0.com/blog/creating-a-splash-screen-for-your-react-apps/

==========================

=========================
privde option to delete logics.

=========================
NExt: when the record is loaded in /text.
from there - load the data on the DropDown.
==============
snackBar -

https://github.com/TeamWertarbyte/material-ui-snackbar-provider

https://browntreelabs.com/snackbars-in-react-redux-and-material-ui/

=========================

issue with display list of fieldlists :

by using the posts video or
by using the old react native app at properties values.

========================================

https://codesandbox.io/embed/interesting-wave-yw9ht

=========================

=========================

=========================

Add logic / code - if credit/ debit view:

================
show loading / notifiction progress.

https://blog.logrocket.com/data-fetching-in-redux-apps-a-100-correct-approach-4d26e21750fc/

==========================
Create Crud operatoins for the Fieldslist items.

===================================
on Vid: 15:2
==========================
transformation rules
males to M

Overrides.

create profile avatar via :
https://codesandbox.io/s/0lc5x

================
save button not getting clickable when the data is good for validation.

================
on teh form, provide cancel button.
Proide more descriotion on plus sign, like add new field

===========
Dec 19 -
Ability to create multiple heaers and stuff under neath it.
===========

For search on selection pass - mapID & clientId to get the details of the MappDetails.

==============

==========

# ==========

LATER ->
Replace all return <div>s with Fragment.

==================
Add Profile Menu on top right.
https://material-ui.com/components/menus/

============================
Udemy - Modern React with Redux [2019 Update]
Memoization:

15-18
Do Lazy loding.
Do SSR.
Do Testing.
============================

============================

============================
BEAUTIFY -

1.  select the code.
2.  alt + shift + f
