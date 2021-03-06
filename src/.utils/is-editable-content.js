function isEditableContent(node) {
    if (node == null) {
        return false
    }
    if (node.isContentEditable === undefined) {
        node = node.parentElement || node.parentNode
    }
    return node.isContentEditable
}

export default isEditableContent
