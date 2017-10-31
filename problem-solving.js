function getQuestionOne() {
	let answer = document.getElementById("answer-1");
	answer.innerHTML = "document.getElementById(elementName);";
}





//elementid: document.getElementById(elementName);
//use the .id property of the dom element: myDOMElement.id;

//h1 tag: var element = document.createElement('h1');

//add class to element:
//var element = document.getElementById("div1");
//element.classList.add("otherclass");

//add text inside some element: document.getElementById('id').appendChild(var newtext);

//create a paragraph tag:
//function addParagraphs() {
    //var p2 = "<p>paragraph 2</p>";
    //document.getElementById("p3").insertAdjacentHTML('beforebegin', p2);}

//remove the child of an element: var oldChild = node.removeChild(child);
//OR
//node.removeChild(child);
//child is the child node to be removed from the DOM.
//node is the parent node of child.
//oldChild holds a reference to the removed child node. oldChild === child.
