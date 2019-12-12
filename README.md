# Alfa Systems

## Description

	Implemented Task Index and Task Details screen.

	In the Task Index the user can :

	- View a set of tasks that pertain to a ​customer​. The information includes a summary of the task.
	- Shows the relevant ​customer​ against each task; a truncated line of the content and the creation date.
	- expand a task to view the content inline.

	In the Task Details the user can :

	- View the task information.
	- Displays a thread of “logs” associated with an event. Logs can be of type“General Note” or “Call note”.
	  Both have their own icon. Both consist of a large piece of text describing some event or custom interaction.
	- Add a general note or a call note. Both will allow for a“message” field.
	 If the addition is a call note, you should be able to log the call duration.

	Persistence data is available by using localStorage.

	A fake login page allows user to login and be redirected to Task Index page.
	- email: test@email.com
	- password: test

	This App has been tested using Jest.


## Prerequisite

- NodeJS: ([https://nodejs.org/en/download/](https://nodejs.org/en/download/))

## Technology

- React.js
- Html and CSS,
- Parcel JS (web application bundler): ([https://parceljs.org/](https://parceljs.org/))
- Jest (Unit Test)

## Installation

```bash
 git clone https://github.com/Gia1987/alfa-test.git
 npm install
```
## Usage

```bash
 npm run build  # the app will be available on /dist folder in the root
 npm run dev    # for localhost dev
```

## Testing

```bash
 npm run test  # for unit test
```
