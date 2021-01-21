
var articlesContainer = document.getElementById('articlesContainer');
var blogInput = document.getElementById('blogInput');
var blogSubmitButton = document.getElementById('blogSubmit');

var listArray = [];



(() => {
    fetch('/api/articles')
    .then(results => results.json())
    .then(data =>{
        console.log(data);
        data.forEach(item =>{
            articlesContainer.innerHTML += createItemDom(item.id, item.title, item.body, item.isPublished, item.authorID)
        })
    })

})()


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







