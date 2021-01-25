 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 var firebaseConfig = {
     apiKey: "AIzaSyC1Ai8ItWxjK25eaxVrXxvDVUdiykPISY4",
     authDomain: "luis-blog-7a638.firebaseapp.com",
     projectId: "luis-blog-7a638",
     storageBucket: "luis-blog-7a638.appspot.com",
     messagingSenderId: "26899044170",
     appId: "1:26899044170:web:0b1f78062c5bbacafd53b3",
     measurementId: "G-PE8ZFPV3C6"
 };
 // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
 firebase.analytics();


 let postCollection = document.querySelector("#posts-collection");

 const db = firebase.firestore();

 //create posts

 function createPost(title, time, content) {
     let div = document.createElement("div");
     div.setAttribute("class", "blog-info");

     let h2 = document.createElement("h2");
     let p = document.createElement("p");
     let p1 = document.createElement("p");

     h2.textContent = title;
     p1.textContent = time;
     p.textContent = content;

     div.appendChild(h2);
     div.appendChild(p1);
     div.appendChild(p);

     postCollection.appendChild(div);
 }

 // Get Posts
 function getPosts() {
     db.collection("posts")
         .get()
         .then(snapshot => {
             snapshot.docs.forEach(docs => {
                 createPost(
                     docs.data().postName,
                     docs.data().createdAt,
                     docs.data().postContent
                 );
             });
         })
         .catch(err => {
             console.log(err);
         });
 }

 getPosts();



 document.querySelector("#submitBtn").addEventListener("click", function() {
     let postAuthor = document.querySelector("#author").value;
     let postTitle = document.querySelector("#postTitle").value;
     let postContent = document.querySelector("#postContent").value;
     let postDate = document.querySelector("#postDate").value;

     if (
         postAuthor === "" ||
         postTitle === "" ||
         postContent === "" ||
         postDate === ""
     ) {
         alert("Fields Empty");
     } else {
         db.collection("posts")
             .doc()
             .set({
                 author: postAuthor,
                 createdAt: postDate,
                 postName: postTitle,
                 postContent: postContent
             });
     }
 });