var path_left = "";
var path_right = "";
var height = window.innerHeight;
var totalHeight = $(window).height();
var width = window.innerWidth;
var mag = 30;
var displacement = width/2;
var increment = 20;
var time = 0;
var x1p, x2p;
var x1n, x2n;
var line;
var offset = 0;
var colorTop = 'gray';
var colorBottom = '#193e53';

function makeSVG(tag, attrs) {
    var el= document.createElementNS('http://www.w3.org/2000/svg', tag);
    for (var k in attrs)
        el.setAttribute(k, attrs[k]);
    return el;
}

$('#grad1').css('stop-color', colorTop);
$('#grad2').css('stop-color', colorBottom);

for (var i = 0; i < height + increment; i+=increment) {
    x1p = displacement + mag * Math.sin(i * (Math.PI/180));
    x2p = displacement + mag * Math.sin(i * (Math.PI/180) + Math.PI);
    x1n = displacement + mag * Math.sin((i + increment) * (Math.PI/180));
    x2n = displacement + mag * Math.sin((i + increment) * (Math.PI/180) + Math.PI);

    line = makeSVG('line', {x1: x1p, y1: i, x2: x1n, y2: i + increment, 'stroke-width': 6, 'stroke-linecap': 'round'});
    line.id = 'strandLeft_' + i;
    document.getElementById('main_dna').appendChild(line);

    line = makeSVG('line', {x1: x2p, y1: i, x2: x2n, y2: i + increment, 'stroke-width': 6, 'stroke-linecap': 'round'});
    line.id = 'strandRight_' + i;
    document.getElementById('main_dna').appendChild(line);

    line = makeSVG('line', {x1: x1p - offset, y1: i, x2: x2p - offset, y2: i, 'stroke-width': 3});
    line.id = 'line_' + i;
    document.getElementById('main_dna').appendChild(line);
}

$('.dna').attr('width', width);
$('.dna').attr('height', height);

setInterval(updateDNA, 16);

function updateDNA() {
    var path_left = "";
    var path_right = "";
    height = window.innerHeight;
    width = window.innerWidth;
    totalHeight = $(window).height();
    displacement = width/2;

    var scroll  = $(document).scrollTop();
    var percentage = height * ((scroll * 1.0) / (totalHeight - height));
   
    for (var i = 0; i < height + increment; i+=increment) {
        if(!$('#line_' + i).length) {
            line = makeSVG('line', {x1: x1p - offset, y1: i, x2: x2p - offset, y2: i, 'stroke-width': 2});
            line.id = 'line_' + i;
            document.getElementById('main_dna').appendChild(line);
        }
        x1p = displacement + mag * Math.sin(time + i * (Math.PI/180));
        x2p = displacement + mag * Math.sin(time + i * (Math.PI/180) + Math.PI);
        x1n = displacement + mag * Math.sin(time + (i + increment) * (Math.PI/180));
        x2n = displacement + mag * Math.sin(time + (i + increment) * (Math.PI/180) + Math.PI);

        $('#strandLeft_' + i).attr('x1', x1p).attr('x2', x1n);
        $('#strandRight_' + i).attr('x1', x2p).attr('x2', x2n);
        $('#line_' + i).attr('x1', x1p - offset).attr('x2', x2p);
        
        if ( i < percentage) {
            $('#strandLeft_' + i).css('stroke', colorTop);
            $('#strandRight_' + i).css('stroke', colorTop);
            $('#line_' + i).css('stroke', colorTop);
        } else if (i - increment < percentage) {
            $('#strandLeft_' + i).css('stroke', 'url(#grad)');
            $('#strandRight_' + i).css('stroke', 'url(#grad)');
            $('#line_' + i).css('stroke', colorTop);
        } else {
            $('#strandLeft_' + i).css('stroke', colorBottom);
            $('#strandRight_' + i).css('stroke', colorBottom);
            $('#line_' + i).css('stroke', colorBottom);
        }
    }
    
    time = time + 0.01;
}