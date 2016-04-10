/**
 * Created by Just Nasko on 4/7/2016.
 */

var domElement = {
    init: function (type) {
        this._type = type;
        return this;
    },
    content: function (content) {
        this.content = content;
        return this;
    },
    addAtribute: function (key, value) {

        this.dict = [];
        this.dict.push.call(this, {
            key: key,
            value: value
        });
        return this;
    },
    appendChild: function (child) {

        this.addElement = [];
        var currentChild = child;
        this.addElement.push.call(this, currentChild);
        return this;
    },
    get innerHTML() {
        var result = this;
        var final = "";
        var parentElement;
        final = checkForFirstElement(result, final);
        parentElement = final;
        final = checkForChildren(result, final);

        var closeTag = '/';
        var output = [parentElement.slice(0, 1), closeTag, parentElement.slice(1)].join('');
        final += ">" + output;
        return final;
    }
};

var meta = Object.create(domElement)
    .init('meta')
    .addAtribute('charset', 'utf-8');

var head = Object.create(domElement)
    .init('head')
    .appendChild(meta)

var div = Object.create(domElement)
    .init('div')
    .addAtribute('style', 'font-size: 42px');

div.content = 'Hello, world!';

var body = Object.create(domElement)
    .init('body')
    .addAtribute('id', 'myid')
    .addAtribute('bgcolor', '#012345')
    .appendChild(div);

var root = Object.create(domElement)
    .init('html')
    .appendChild(head)
    .appendChild(body);

console.log(root.innerHTML);