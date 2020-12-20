# contact_list

## About project

The application does not have a database;
App.vue contains the global scss for the entire application;
All components has scoped scss styles;
The app has 2 pages:

#### Contact list

On this page user can:

- View existing contacts;
- Delete unnecessary contacts;
- Add a new contact;
- Go to detailed view;

#### Detailed view

On this page user can:

- Edit contact data;
- Delete unnecessary fields;
- Add new fields;

### Api

---

#### **Header.vue**

A simple component used for navigation on all pages.

#### **ContactList.vue**

Displays the full list of contacts.
**Data:**

```
contactToDelete: <string>
```

Id of the contact to delete.

```
contacts: <array of objects>
```

List contacts from store.

**Methods:**

```
openAddContactForm(){}
```

Displaying a form for adding a new contact.

```
delContact(e){}
```

Displaying a popup for confirmation and recording the user id for deletion

```
confirm(e){}
```

Method passed as a property to the confirm popup component. After a positive response, commit is performed and the form is closed.

#### **ConfirmPopUp.vue**

Popup to confirm the action.

**Data:**

```
additionalClass: <String>
```

Property for an additional class.

```
popUpText: <String>
```

Property for displaying text.

```
withField: <String>
```

Property for displaying text.

```
confirm: <Function>
```

Method passed to the component to process the response.

#### **AddContactForm.vue**

Form for add new contact.

**Data:**

```
name: <String>,
surname: <String>,
phone: <String>,
email: <String>,
```

To store the entered values.

**Methods:**

```
onSubmit(){}
```

Saving the entered data to the storage, closing the form and clearing the fields.

```
closeForm(){}
```

Closing the form to add a contact.

#### **AddFieldForm.vue**

A small form for adding a new field to a contact.

**Data:**

```
contactId: <String>
```

Id of the contact to add the field to.

```
contactData: <Object>
```

Contact Details.

```
setLastAction: <Function>
```

Passed as a property to record the last user action.

```
fieldName: <String>
fieldValue: <String>
```

To store the entered values.

```
error: <String>
```

To store the error text.

**Methods:**

```
displayError(){}
```

Error display.

```
addField(){}
```

If the entered name has passed verification, the data will be sent to the storage.

```
closeForm(e){}
```

To close the form.

#### **EditingForm.vue**

Сomponent for working with contact data. It contains all the main methods for data processing.

**Data:**

```
contactData: <Object>
contactId: <String>
```

Contact data.

```
changedContactData: <Object>
```

Data changed by the user.

```
userLastAction: <Object>
```

Information about the last change made by the user.

```
fieldToDelete: <String>
```

Name of the field to be deleted.

```
mode: <String>

```

Application mode for displaying information. (static, edit, del).

```
lastAction: <Object>
```

Data about the last user action from the storage.

```
sortedContactData: <Object>
```

Sorted data to display.

**Methods:**

```
stepBack(){}
```

Sends data to roll back the last action.

```
setLastAction(actionType,actionData){}
```

Sending data to the storage.

```
confirmСancellation(e){}
```

Confirmation for to exit edit mode.

```
setNewContactData(e){}
```

Save the changed user data in the storage.
If the user has saved the changes they will be sent to the storage, if he cancels the changes the form will be closed.

```
changeFieldValue(e){}
```

Local recording of user-modified data in edit mode.

```
allowChangeData(e){}
```

Changing the mode.

```
openAddFieldForm(){}
```

Opening a form to add new fields.

```
deleteField(e){}
```

Sets the name of the field to delete and open the form for confirmation.

```
confirm(e){}
```

Method passed as a property to the confirm popup component. After a positive response, commit is performed and the form is closed. Also sends data about the user's last action.

### The structure of the project

```
@/components/
```

Сontains all the components used.

```
@/router/
```

Contains files for routing.

```
@/store/
```

Contains files for Vuex.

```
@/views/
```

Contains root component for every path.

```
@/assets/js/
```

Scripts that can be used in a variety of components.

### Compiles and hot-reloads for development

```
npm run serve
```
