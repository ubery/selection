# selection
```javascript
import { selectionRange, rangeContent } from 'selection.min'

const range = selectionRange()
const content = rangeContent(range)

content.forEach(item => ...)
```

### range `Object`

```javascript
editable                   // Boolean indicating whether the common ancestor is an editable element
collapsed                  // Boolean indicating whether the range's start and end are the same position
commonAncestorContainer    // the deepest node that contains the start and end nodes
startContainer             // the node within which the range starts
startOffset                // a Number representing where in the startContainer the range starts
endContainer               // the node within which the range ends
endOffset                  // a Number representing where in the endContainer the range ends
```

### content item `Object`

```javascript
node                       // the node in the range
startOffset                // a Number representing where in the node the range starts
endOffset                  // a Number representing where in the node the range ends
text                       // [getter] a String value of the node
selectedText               // [getter|setter] a substring of text between offsets
```

## Methods 
```javascript
.setSelection(node[, start = 0][, end = 0])
.selectionRange([window][, document])
.rangeContent(range)
```

## Examples 
```javascript
import { selectionRange, rangeContent, setValue } from 'selection.min'

const range = selectionRange()
const content = rangeContent(range)

// get selected text
let text = content.reduce((value, item) => value + item.selectedText, '')

// change selected text
content.forEach(item => item.selectedText = item.selectedText.toUpperCase())
```

## Browser compatibility
IE9+, Firefox, Chrome, Safari, Opera
