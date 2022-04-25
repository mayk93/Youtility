# Youtility
Test for Youtility

---

You can check the deployed app [here](https://whispering-scrubland-43202.herokuapp.com/) 👈

In terms of approach, it seems to me the main purpose of the task is to consume the API.

That's way, I started with that. I made it a priority to establish communication with the server.
To that end, establishing server communication was my number one task.

1. I used `create-react-app` to create the app.
2. Used boilerplate from an older repo of mine to quickly setup sagas.
3. I wrote a super simple untested and unsafe API call to the GET endpoint.

The API call in point 3 had a hard coded library id that I got by running the API in sweagger and checking the response.

At this point, the way the setup worked is this.  The `componentDidMount` lifecycle method of `App.js`, which runs immediately
after a component is mounted, [dispatches a redux action](https://github.com/mayk93/Youtility/blob/main/src/App.js#L16).
This redux action is [seen by the saga watcher](https://github.com/mayk93/Youtility/blob/main/src/components/Libraries/sagas.js#L22).
Upon seeing this action, the saga begins running. Its job is to talk to the API. When a response is received,
[a different redux action is dispatched and the response from the API is deposited in the redux state](https://github.com/mayk93/Youtility/blob/main/src/components/Libraries/sagas.js#L8),
thus being made immediately available to any component in need of it.

I rant into the CORS issue though. I cannot consume an external API, so I used [a CORS proxy,](https://cors-anywhere.herokuapp.com/corsdemo) and it worked.

I received a reply from the server which made me happy because communication with the server was established.

But, it was a short-lived happiness.

---

In order to integrate the rest of the endpoints, I added a button: 

```<button onClick={() => postLibraries()}>Create a new library</button>```

Only, I made a tiny mistake. I didn't write that the first time. I wrote:

```<button onClick={postLibraries()}>Create a new library</button>```

Every time I rendered the app, the function call in the buttons `onClick` ran, triggering a `POST` request to the proxy server.
Not only that, the way the saga is set up, [after a POST, a new FETCH with the new id is triggered](https://github.com/mayk93/Youtility/blob/main/src/components/Libraries/sagas.js#L13).
What this effetely meant was I created an infinite loop.

```Render -> post via on click -> post request -> fetch request -> re-render```

This immediately consumed my CORS server quota. I guess I need to self-host my own CORS proxy server 🤷‍♂️

I did that and my app could now use the proxy server without worrying about a quota.

---

I did some refactors and polishing, and I also did the [integration with the POST books endpoint](https://github.com/mayk93/Youtility/blob/main/src/components/Libraries/sagas.js#L17).
But I ran into a problem. The reply from the server came back as.

```System.InvalidOperationException: Record type 'Library.Models.Book' has validation metadata defined on property 'Authors' that will be ignored. 'Authors' is a parameter in the record primary constructor and validation metadata must be associated with the constructor parameter.```

It seems to me I am sending the right data. For example:

```{isbn: "1234", title: "My new Book", authors: ["Mr. Author"]}
authors: ["Mr. Author"]
isbn: "1234"
title: "My new Book"
```

On double-checking the API, the swagger API does the same.

Am I missing something? 🤔

---
Towards the end I [refactored the library data, now mapping the library id to it's books](https://github.com/mayk93/Youtility/blob/main/src/components/Libraries/reducer.js#L10).

I started to add `ReactProps` to increase quality.

I also added some basic CSS styling for book cards - For this purpose I got three Creative Commons licensed pictures to randomly add to book cards.

---

Obviously there are still a lot of issues. Tests and incomplete, there are no end-to-end tests done with cypress for example, a lot of the CSS is put in `index.css`,
the modal doesn't close when clicking outside, there are no loading spinners, etc.

Looking forward to discussing the app in more detail with you!