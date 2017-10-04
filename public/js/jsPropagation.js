/**
 * Created by Jonathan on 7/12/2017.
 */

var phases = {
    1:'Capture',
    2:'Target',
    3:'Bubble'
};

var div = document.querySelector('div');
var p = document.querySelector('p');

div.addEventListener('click', callback, true);
p.addEventListener('click', callback, true);
div.addEventListener('click', callback, false);
p.addEventListener('click', callback, false);

function callback(event) {
    var tag = event.currentTarget.tagName;
    var phase = phases[event.eventPhase];
    console.log("Tag: '" + tag + "'.EventPhase: '" + phase + "'");
}