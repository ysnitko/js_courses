function consonantCount(str) {
    return(str.replace(/[(aeuio)(\s)(\d)(:;()@&-/.,?!_\|~#^*&$+)]/gi, '').split("").length);
}