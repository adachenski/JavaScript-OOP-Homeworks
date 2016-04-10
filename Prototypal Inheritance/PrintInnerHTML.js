function checkForFirstElement(result, final) {

    for (var r in result) {
        if (r == "_type") {
            console.log(result[r]);
            final += "<" + result[r] + ">";
        }
    }
    return final;
}

function checkForChildren(result, final) {

    for (var r = 0; r < result.length; r++) {
        var attr = result[r];
        if (typeof attr === 'object') {

            for (var a in attr) {

                if (a === "key") {

                    final += attr[a] + "=";
                }
                else if (a === "value") {

                    final += '"' + attr[a] + '" ';
                }
                else if (a === "_type") {

                    var stringLength = final.length;
                    var lastChar = final.charAt(stringLength - 1);

                    if (lastChar != ">") {
                        final += ">";
                    }

                    final += "<" + attr[a] + " ";

                    final = checkForChildren(attr, final) + ">";

                    final += "</" + attr[a];

                }
                else if (a == "content") {
                    if (typeof attr[a] != "function") {

                        var closindTag = final.length - 5;
                        var contentMsg = attr[a];
                        var output = [final.slice(0, closindTag), contentMsg, final.slice(closindTag)].join('');
                        final = output;
                    }

                }
            }
        }
    }
    return final;
}