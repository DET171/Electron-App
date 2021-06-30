window.addEventListener('DOMContentLoaded', () => {
	var newItem = document.createElement('BUTTON');
	var textnode = document.createTextNode('Back');
	newItem.appendChild(textnode);
	const onclick = document.createAttribute('onclick');
	onclick.value = 'window.history.back()';
	newItem.setAttributeNode(onclick);
	var list = document.getElementsByTagName('BODY');
	list = list[0];
	list.insertBefore(newItem, list.childNodes[0]);
});
