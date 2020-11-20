var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

//form submit event 
form.addEventListener('submit', addItems);
//delete items
itemList.addEventListener('click', removeItem)
//filter event
filter.addEventListener('keyup', filterItems)
//function addItems
function addItems(e){
    e.preventDefault();
    //get input value
    var newItem = document.getElementById('item').value;
    
    //create new LI element 
    var li = document.createElement('li')
    //add class
    li.className ='list-group-item';
    //add tex node with input value 
    li.appendChild(document.createTextNode(newItem));

    //create delete button element 
    var deleteBtn = document.createElement('button')

    //add clsses to delete button
    deleteBtn.className = "btn btn-danger btn-sm float-right delete";
    //Append text node
    deleteBtn.appendChild(document.createTextNode('X'));

    //Append button to li
    li.appendChild(deleteBtn);
    //append lis to the itemlist
    itemList.appendChild(li); 
}
//function to remove items 
function removeItem(e){
    if(e.target.classList.contains('delete')){
        
        if(confirm("Selected item will be deleted?"))
        var li =  e.target.parentElement;
        itemList.removeChild(li);
    }
}
//function to filter items
function filterItems(e){
    //getinput and covert to lower case
    var text  = e.target.value.toLowerCase();
    var items = itemList.getElementsByTagName('li');
    //conver the item list to arrays 
    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent;
        console.log(itemName);
        if(itemName.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block';
        }
        else{
            item.style.display = 'none';
        }
    })

}