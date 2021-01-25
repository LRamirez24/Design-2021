const postList = document.querySelector('#posts-collection');
const form = document.querySelector('#blog-form');




// create element and render blog posts
function renderPosts(doc) {
    let div = document.createElement("div");
    div.setAttribute("class", "blog-info");
    let h2 = document.createElement("h2");
    let p = document.createElement("p");
    let p1 = document.createElement("p");

    //let img = document.createElement("IMG");
    //img.setAttribute("src");
    //img.setAttribute("width", "400");
    //img.setAttribute("height", "400");
    //img.setAttribute("alt", "The blog images");

    div.setAttribute('data-id', doc.id);
    h2.textContent = doc.data().postName;
    p.textContent = doc.data().postContent;
    p1.textContent = doc.data().createdAt;

    div.appendChild(h2);
    div.appendChild(p1);
    div.appendChild(p);

    postList.appendChild(div);

}

//getting data
db.collection('posts').orderBy('createdAt', 'desc', "postName").get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
        renderPosts(doc);
    })
});

//saving data 
//not using rn because of dont need clients to post only me rn

//form.addEventListener('submit', (e) => {
//  e.preventDefault();
//db.collection('posts').add({
//  author: form.author.value,
// postName: form.postTitle.value,
// postContent: form.postContent.value,
//  createdAt: form.postDate.value
// });
//   form.author.value = '';
//  form.postTitle.value = '';
//  form.postContent.value = '';
//  form.postDate.value = '';
//})