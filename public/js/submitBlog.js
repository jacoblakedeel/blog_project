var blogInput = document.getElementById('blogInput');
var blogSubmitButton = document.getElementById('blogSubmit');

var listArray = [];


blogSubmitButton.addEventListener('submit', (e) => {
    e.preventDefault();

    fetch('/api/articles', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            articleBody: blogInput.value
        })
    })
    .then(response => response.json())
    .then(data =>{
        blogInput.value = "";
        articlesContainer.innerHTML = "";
        data.forEach(article =>{
            articlesContainer.innerHTML += createItemDom(item.id, item.title, item.body, item.isPublished, item.authorID)
        })
    })
})


var createItemDom = (id, title, body, isPublished, authorID) =>{
    let listItem = `<li>
    
    <div class="row">
            <div class="col-10">
            <h2>${title}</h2>
            </div>
            <div class="col-1">
            ${body}
            </div>
        </div>
    </li><br>`
    return listItem
}