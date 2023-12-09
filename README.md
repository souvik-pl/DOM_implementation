# Custom DOM Implementation
This repository contains a simple implementation of a custom DOM (Document Object Model) using JavaScript classes. The provided code includes a `DOMNode` class to represent individual nodes and a `DocumentObject` class to manage the entire document structure.

## Code Structure

### `DOMNode` Class
The `DOMNode` class represents a node in the DOM tree. Each node has a name, an array of children nodes, and inner text content.

**Methods**:

- `Constructor`:
    - _Parameters:_ `name` (string) - the name of the node.
    - _Properties:_
        - `name` (string): Node name.
        - `children` (array): Array of child nodes.
        - `innerText` (string): Inner text content of the node.
- `appendChild(node)`:
    - _Parameters_: `node` (DOMNode) - the node to be appended as a child.
    - _Description_: Appends a child node to the current node.

### `DocumentObject` Class
The `DocumentObject` class represents the entire DOM document. It contains methods for creating elements and rendering the DOM tree.

**Methods**:

- `Constructor`:
    - _Properties:_
        - root (DOMNode): The root of the DOM tree.
- `createElement(name)`:
    - _Parameters_: `name` (string) - the name of the element to be created.
    - _Description_: Creates a new DOMNode with the specified name. If no root exists, sets the newly created node as the root.
- `render()`:
    - _Description_: Renders the DOM tree starting from the root node. It prints the DOM tree structure to the console.


## Example Usage
```javascript
const dom = new DocumentObject();
const html = dom.createElement("html");
const head = dom.createElement("head");
const body = dom.createElement("body");
const p = dom.createElement("p");
p.innerText = "Hello world";

html.appendChild(head);
html.appendChild(body);
body.appendChild(p);
dom.render();
```

## Running the Code
1. Clone the repository: `git clone [repository-url]`
2. Navigate to the project folder: `cd [project-folder]`
3. Run the project: `node index`

Feel free to explore the code and use it as a starting point for building a more complex custom DOM implementation. The code currently supports basic DOM tree creation.