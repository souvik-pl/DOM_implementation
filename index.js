class DOMNode {
    constructor(name) {
        this.name = name;
        this.children = [];
        this.innerText = "";
    }

    appendChild(node) {
        this.children.push(node);
    }
}

class DocumentObject {
    constructor() {
        this.root = null;
    }

    createElement(name) {
        const node = new DOMNode(name);
        if (!this.root) {
            this.root = node;
        }
        return node;
    }

    render() {
        function printDOMTree(node, level) {
            const INDENT_SIZE = 4;
            const spaces = new Array(level*INDENT_SIZE).fill(" ").join("");
            // opening tag
            let output = `${spaces}<${node.name}>\n`;

            // handling innerText
            if (node.innerText) {
                const textIndent = new Array(INDENT_SIZE).fill(" ").join("");
                output += `${spaces}${textIndent}${node.innerText}\n`;
            }

            // loop for children
            for (let i = 0; i < node.children.length; i++) {
                output += printDOMTree(node.children[i], level + 1);
            }

            // closing tag
            output += `${spaces}</${node.name}>\n`;

            return output;
        }

        const tree = printDOMTree(this.root, 0);
        console.log(tree);
    }
}

const dom = new DocumentObject();
const html = dom.createElement("html");
const head = dom.createElement("head");
const body = dom.createElement("body");
const p = dom.createElement("p");
p.innerText = "Hello world";
const span = dom.createElement("span");
span.innerText = "Whats up";
p.appendChild(span);

html.appendChild(head);
html.appendChild(body);
body.appendChild(p);
dom.render();