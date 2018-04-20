const getSiblings = (elem) => {
	const siblings = [];
	let sibling = elem.parentNode.firstChild;
	const skipMe = elem;
	for (; sibling; sibling = sibling.nextSibling) {
		if (sibling.nodeType === 1 && sibling !== elem) {
			siblings.push(sibling);
		}
	}
	return siblings;
};

export default getSiblings;
