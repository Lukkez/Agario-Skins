// ==UserScript==
// @name         Agario Skins+
// @namespace    https://github.com/Lukkez/Agario-Skins/
// @version      1.0.0
// @description  My extension
// @author       Lukkez
// @license      MIT
// @match        http://agar.io/
// @run-at       document-start
// @grant        none
// ==/UserScript==
 
//waits for the page to load
 
window.onload = function() {
    var ctx = document.getElementById("canvas").getContext("2d")
 
    //replaces title
    //h2 selects all h2 elements
    $("h2").replaceWith('<h2>Agar.io Skins+</h2>');
 
    //zoom
    window.agar.minScale = -30;
 
 
    //sets dark theme to true on extension load
    setDarkTheme(true);
    //sets show mass to true on extension load
    setShowMass(true);
    
    
    image = new Image()
    image.crossOrigin = 'anonymous'
    image.src = 'http://i.imgur.com/GBpr1JR.png' //link
    window.agar.hooks.cellSkin = function(cell, old_skin) {
        for (i = 0; i < window.agar.myCells.length; i++) {
            if(cell.id == window.agar.myCells[i]) return image;
        }
    }
   
    window.agar.hooks.drawCellMass = function(cell, old_draw) {
     if(cell.size > 20) return cell;  
    }
 
    //Show other players mass text
    window.agar.hooks.cellMassTextScale = function(cell, old_scale) {
    }
 
 
}
