function setBodyAttr(attr, value){
    if(document.body) eval("document.body." + attr + '="' + value + '"');
    else notSupported();
}