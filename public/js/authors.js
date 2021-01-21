var authorContainer = document.getElementById('authorContainer');
var articlesContainer = document.getElementById('articlesContainer');
var blogInput = document.getElementById('blogInput');
var blogSubmitButton = document.getElementById('blogSubmit');

var listArray = [];



(() => {
    fetch('/api/authors')
    .then(results => results.json())
    .then(data =>{

        data.forEach(item =>{
            authorContainer.innerHTML += createDomItem(item.id, item.firstName, item.lastName, item.imgURL, item.bio, item.twitter)
            
        })
    })

})()



var createDomItem = (id, firstName, lastName, imgURL, bio, twitter) =>{
    let listItem = `<li>
    
    <div class="row">
            <div class="col-10">
            <h2>${firstName}&nbsp${lastName}</h2>
            </div>
            <div class="col-1">
            ${imgURL}
            </div>
            <div class="col-1">
            ${bio}<br>${twitter}
            </div>
        </div>
    </li><br>`
    return listItem
}





