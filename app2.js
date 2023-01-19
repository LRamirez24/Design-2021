const postList = document.querySelector('#posts-collection');
const form = document.querySelector('#blog-form');




// create element and render blog posts
function renderPosts(doc) {
    let div = document.createElement("div");
    div.setAttribute("class", "blog-info");
    let h2 = document.createElement("h2");
    let p = document.createElement("p");
    let h3 = document.createElement("h3");
    let img = document.createElement('img');
    img.src = "https://lh3.googleusercontent.com/_zrToQXhmAQGJabbj3pnwX4SIMYwNftbKN-NrZ7ehSjOpbFIrdAmjEjfcusQmIvV7S3UgMC7qHINyWvI4D9IdDhMTWMau8NF3z3kf7cUo0u4vDqC7HYQ8cy3Uve12uOWlH85SCsw1zOFxYrgTUZgEGDJjKLQQu4UXYZ3-L8uL8tI0wGGiPf69qB4yCAdGVpl0EGU9d469hXerPp0uo0zMkfur6BA2hSa3jTqzxQaaSn72RPYm75GOsAJZTcrzB0tWfT29wK8vvPYrsnYqKZ22iH_02CpvsYYt7XAkLhwsTTpiEJOwgGxsx3iL0qcNZhRCjZPL9oGREm9uysOWBUCXCmf8xthbX55CvCGJiEhzVQLQDOpCKthm00408TRz3xzxa4bDr2XyFJpCEhBL6PXP83xZlWN8Pq5WNrlOsAtyZ32G3iUGIszrUlZCiSRsjL3g-cpZwzMRW4vzJZ2o5aSE6Llv1W3a-1lWGQLUxcys1itk5keu6T1O8oRZ2wRDmW_3tilzZ3GluNMeo9AwSIp_osXgWSKyxHaq5epMLHhYJAwhz1yweqmR8_IRX4G-53TcILzj2JVNh262NXQw-He60Ryiha4F339B-q4bCAzfD47LnWPz5QRKI9GOHEhtXlldM1OWbin8Bd4vEHwMfSjU339fL4Sb8R-4L4CDSBvLCuQkgMUVYNra_eBvWLaJGKU0TOPFEYlrzuXFF_aNfc95tH0mEV54CHgDz0E1pFG9fglVfZmG922ZxcRdWvmaZJqkAo3liWVd9E3iADJrthRY6jO6DEvVXrxq6Spk7irWLYyYM4yeXx-vPy8eO1D8o1umwuue8H2XUAhXBJA-9eorSQTCOHMRuwD8ox1p-tYfuKzG28PskyoQmPsWi4AaJAXY4-83EnYmSc5D_jZKE9qn_bipp7CYKNoDBkCMCs=w1920-h1024-no?authuser=0";
   

    
    // img.setAttribute("src");
    // img.setAttribute("width", "400");
    // img.setAttribute("height", "400");
    img.setAttribute("alt", "The blog images");

    div.setAttribute('data-id', doc.id);
    h2.textContent = doc.data().postName;
    p.textContent = doc.data().postContent;
    h3.textContent = doc.data().createdAt;

    div.appendChild(h2);
    div.appendChild(h3);
    div.appendChild(p);
    div.appendChild(img);
    

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

form.addEventListener('submit', (e) => {
 e.preventDefault();
db.collection('posts').add({
 author: form.author.value,
postName: form.postTitle.value,
postContent: form.postContent.value,
createdAt: form.postDate.value
});
 form.author.value = '';
 form.postTitle.value = '';
 form.postContent.value = '';
 form.postDate.value = '';
});