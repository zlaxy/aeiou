// Global vars
var language = 'english';
var layout = 'linear';
var font = 'default';

var tableAbcd = {};
tableAbcd["english"] = {};
tableAbcd["russian"] = {};
tableAbcd["hebrew"] = {};
tableAbcd["greek"] = {};
tableAbcd["georgian"] = {};
tableAbcd["abjadi"] = {};
tableAbcd["runes"] = {};
tableAbcd["ugaritic"] = {};


// ========================= temporary espeak =========================

var ctx = new (window.AudioContext || window.webkitAudioContext)();
var convolver = ctx.createConvolver();
convolver.connect(ctx.destination);
var espeak;
var pusher;

function stop() {
    if (pusher) {
        pusher.disconnect();
        pusher = null;
    }
}

function speak(preach, langToSpeak, textToSpeak) {
    stop();
    var samples_queue = [];
    espeak.set_rate(80);
    espeak.set_pitch(45);
    espeak.setVoice.apply(espeak, (langToSpeak.split(',')));
    var now = Date.now();
    pusher = new PushAudioNode(ctx,
        function() {
            console.log('started!', ctx.currentTime, pusher.startTime);
        },
        function() {
            console.log('ended!', ctx.currentTime - pusher.startTime);
        });
    if (preach)
        pusher.connect(convolver);
    else
        pusher.connect(ctx.destination);
    espeak.synth(textToSpeak,
        function(samples, events) {
            if (!samples) {
                pusher.close();
                return;
            }
            pusher.push(new Float32Array(samples));
            if (now) {
                console.log("latency:", Date.now() - now);
                now = 0;
            }
        });
}

// ========================= temporary espeak =========================


// English Linear Table
tableAbcd["english"]["linear"] = '<tr>\
<td><button style="color:red" onclick="speak(false, \'english,en-uk\', \'a\')">A</button></td>\
<td><button style="color:blue" onclick="speak(false, \'english,en-uk\', \'b\')">B</button></td>\
<td><button style="color:green" onclick="speak(false, \'english,en-uk\', \'c\')">C</button></td>\
<td><button style="color:green" onclick="speak(false, \'english,en-uk\', \'d\')">D</button></td>\
</tr><tr>\
<td><button style="color:red" onclick="speak(false, \'english,en-uk\', \'e\')">E</button></td>\
<td><button style="color:blue" onclick="speak(false, \'english,en-uk\', \'f\')">F</button></td>\
<td><button style="color:green" onclick="speak(false, \'english,en-uk\', \'g\')">G</button></td>\
<td><button style="color:green" onclick="speak(false, \'english,en-uk\', \'h\')">H</button></td>\
</tr><tr>\
<td><button style="color:red" onclick="speak(false, \'english,en-uk\', \'i\')">I</button></td>\
<td><button style="color:green" onclick="speak(false, \'english,en-uk\', \'j\')">J</button></td>\
<td><button style="color:green" onclick="speak(false, \'english,en-uk\', \'k\')">K</button></td>\
<td><button style="color:green" onclick="speak(false, \'english,en-uk\', \'l\')">L</button></td>\
<td><button style="color:blue" onclick="speak(false, \'english,en-uk\', \'m\')">M</button></td>\
<td><button style="color:green" onclick="speak(false, \'english,en-uk\', \'n\')">N</button></td>\
</tr><tr>\
<td><button style="color:red" onclick="speak(false, \'english,en-uk\', \'o\')">O</button></td>\
<td><button style="color:blue" onclick="speak(false, \'english,en-uk\', \'p\')">P</button></td>\
<td><button style="color:green" onclick="speak(false, \'english,en-uk\', \'q\')">Q</button></td>\
<td><button style="color:green" onclick="speak(false, \'english,en-uk\', \'r\')">R</button></td>\
<td><button style="color:green" onclick="speak(false, \'english,en-uk\', \'s\')">S</button></td>\
<td><button style="color:green" onclick="speak(false, \'english,en-uk\', \'t\')">T</button></td>\
</tr><tr>\
<td><button style="color:red" onclick="speak(false, \'english,en-uk\', \'u\')">U</button></td>\
<td><button style="color:blue" onclick="speak(false, \'english,en-uk\', \'v\')">V</button></td>\
<td><button style="color:blue" onclick="speak(false, \'english,en-uk\', \'w\')">W</button></td>\
<td><button style="color:green" onclick="speak(false, \'english,en-uk\', \'x\')">X</button></td>\
<td><button style="color:red" onclick="speak(false, \'english,en-uk\', \'y\')">Y</button></td>\
<td><button style="color:green" onclick="speak(false, \'english,en-uk\', \'z\')">Z</button></td>\
</tr></table>';

// English Axial Table
tableAbcd["english"]["axial"] = '<tr>\
<td colspan="7" align="center"><button style="color:red" onclick="speak(false, \'english,en-uk\', \'a\')">A</button></td>\
</tr><tr><td colspan="2"></td><td colspan="3" align="center">\
<button style="color:black" onclick="speak(false, \'english,en-uk\', \'b\')">B</button>\
<button style="color:black" onclick="speak(false, \'english,en-uk\', \'c\')">C</button>\
</td><td colspan="2"></td>\
</tr><tr><td colspan="2"></td>\
<td><button style="color:black" onclick="speak(false, \'english,en-uk\', \'d\')">D</button></td>\
<td><button style="color:red" onclick="speak(false, \'english,en-uk\', \'e\')">E</button></td>\
<td><button style="color:black" onclick="speak(false, \'english,en-uk\', \'f\')">F</button></td>\
<td colspan="2"></td></tr><tr>\
<td></td><td><button style="color:black" onclick="speak(false, \'english,en-uk\', \'g\')">G</button></td>\
<td><button style="color:black" onclick="speak(false, \'english,en-uk\', \'h\')">H</button></td>\
<td><button style="color:red" onclick="speak(false, \'english,en-uk\', \'i\')">I</button></td>\
<td><button style="color:black" onclick="speak(false, \'english,en-uk\', \'j\')">J</button></td>\
<td><button style="color:black" onclick="speak(false, \'english,en-uk\', \'k\')">K</button></td>\
<td></td></tr><tr>\
<td><button style="color:black" onclick="speak(false, \'english,en-uk\', \'l\')">L</button></td>\
<td><button style="color:black" onclick="speak(false, \'english,en-uk\', \'m\')">M</button></td>\
<td><button style="color:black" onclick="speak(false, \'english,en-uk\', \'n\')">N</button></td>\
<td><button style="color:red" onclick="speak(false, \'english,en-uk\', \'o\')">O</button></td>\
<td><button style="color:black" onclick="speak(false, \'english,en-uk\', \'p\')">P</button></td>\
<td><button style="color:black" onclick="speak(false, \'english,en-uk\', \'q\')">Q</button></td>\
<td><button style="color:black" onclick="speak(false, \'english,en-uk\', \'r\')">R</button></td>\
</tr><tr>\
<td></td><td><button style="color:black" onclick="speak(false, \'english,en-uk\', \'s\')">S</button></td>\
<td><button style="color:black" onclick="speak(false, \'english,en-uk\', \'t\')">T</button></td>\
<td><button style="color:red" onclick="speak(false, \'english,en-uk\', \'u\')">U</button></td>\
<td><button style="color:black" onclick="speak(false, \'english,en-uk\', \'v\')">V</button></td>\
<td><button style="color:black" onclick="speak(false, \'english,en-uk\', \'w\')">W</button></td>\
<td></td></tr><tr><td colspan="2"></td>\
<td><button style="color:black" onclick="speak(false, \'english,en-uk\', \'x\')">X</button></td>\
<td><button style="color:red" onclick="speak(false, \'english,en-uk\', \'y\')">Y</button></td>\
<td><button style="color:black" onclick="speak(false, \'english,en-uk\', \'z\')">Z</button></td>\
</tr></table>';

// Russian Linear Table
tableAbcd["russian"]["linear"] = '<tr>\
<td><button style="color:red" onclick="speak(false, \'russian,ru\', \'а\')">А</button></td>\
<td><button style="color:blue" onclick="speak(false, \'russian,ru\', \'б\')">Б</button></td>\
<td><button style="color:blue" onclick="speak(false, \'russian,ru\', \'в\')">В</button></td>\
<td><button style="color:black" onclick="speak(false, \'russian,ru\', \'г\')">Г</button></td>\
<td><button style="color:black" onclick="speak(false, \'russian,ru\', \'д\')">Д</button></td>\
</tr><tr>\
<td><button style="color:red" onclick="speak(false, \'russian,ru\', \'е\')">Е</button></td>\
<td><button style="color:red" onclick="speak(false, \'russian,ru\', \'ё\')">Ё</button></td>\
<td><button style="color:black" onclick="speak(false, \'russian,ru\', \'ж\')">Ж</button></td>\
<td><button style="color:black" onclick="speak(false, \'russian,ru\', \'з\')">З</button></td>\
</tr><tr>\
<td><button style="color:red" onclick="speak(false, \'russian,ru\', \'и\')">И</button></td>\
<td><button style="color:black" onclick="speak(false, \'russian,ru\', \'й\')">Й</button></td>\
<td><button style="color:black" onclick="speak(false, \'russian,ru\', \'к\')">К</button></td>\
<td><button style="color:black" onclick="speak(false, \'russian,ru\', \'л\')">Л</button></td>\
<td><button style="color:blue" onclick="speak(false, \'russian,ru\', \'м\')">М</button></td>\
<td><button style="color:black" onclick="speak(false, \'russian,ru\', \'н\')">Н</button></td>\
</tr><tr>\
<td><button style="color:red" onclick="speak(false, \'russian,ru\', \'о\')">О</button></td>\
<td><button style="color:blue" onclick="speak(false, \'russian,ru\', \'п\')">П</button></td>\
<td><button style="color:black" onclick="speak(false, \'russian,ru\', \'р\')">Р</button></td>\
<td><button style="color:black" onclick="speak(false, \'russian,ru\', \'с\')">С</button></td>\
<td><button style="color:black" onclick="speak(false, \'russian,ru\', \'т\')">Т</button></td>\
</tr><tr>\
<td><button style="color:red" onclick="speak(false, \'russian,ru\', \'у\')">У</button></td>\
<td><button style="color:blue" onclick="speak(false, \'russian,ru\', \'ф\')">Ф</button></td>\
<td><button style="color:black" onclick="speak(false, \'russian,ru\', \'х\')">Х</button></td>\
<td><button style="color:black" onclick="speak(false, \'russian,ru\', \'ц\')">Ц</button></td>\
<td><button style="color:black" onclick="speak(false, \'russian,ru\', \'ч\')">Ч</button></td>\
<td><button style="color:black" onclick="speak(false, \'russian,ru\', \'ш\')">Ш</button></td>\
<td><button style="color:black" onclick="speak(false, \'russian,ru\', \'щ\')">Щ</button></td>\
</tr><tr>\
<td><button style="color:grey" onclick="speak(false, \'russian,ru\', \'ъ\')">Ъ</button></td>\
<td><button style="color:red" onclick="speak(false, \'russian,ru\', \'ы\')">Ы</button></td>\
<td><button style="color:grey" onclick="speak(false, \'russian,ru\', \'ь\')">Ь</button></td>\
<td><button style="color:red" onclick="speak(false, \'russian,ru\', \'э\')">Э</button></td>\
<td><button style="color:red" onclick="speak(false, \'russian,ru\', \'ю\')">Ю</button></td>\
<td><button style="color:red" onclick="speak(false, \'russian,ru\', \'я\')">Я</button></td>\
</tr></table>';

// Russian Axial Table
tableAbcd["russian"]["axial"] = '<tr>\
<td colspan="9" align="center"><button style="color:red" onclick="speak(false, \'russian,ru\', \'а\')">А</button></td>\
</tr><tr><td colspan="3"></td><td colspan="3" align="center">\
<button style="color:black" onclick="speak(false, \'russian,ru\', \'б\')">Б</button>\
<button style="color:black" onclick="speak(false, \'russian,ru\', \'в\')">В</button>\
</td><td colspan="3"></td></tr><tr><td colspan="2"></td>\
<td><button style="color:black" onclick="speak(false, \'russian,ru\', \'г\')">Г</button></td>\
<td><button style="color:black" onclick="speak(false, \'russian,ru\', \'д\')">Д</button></td>\
<td><button style="color:red" onclick="speak(false, \'russian,ru\', \'е\')">Е</button></td>\
<td><button style="color:red" onclick="speak(false, \'russian,ru\', \'ё\')">Ё</button></td>\
<td><button style="color:black" onclick="speak(false, \'russian,ru\', \'ж\')">Ж</button></td>\
<td colspan="2"></td></tr><tr><td colspan="3"></td>\
<td><button style="color:black" onclick="speak(false, \'russian,ru\', \'з\')">З</button></td>\
<td><button style="color:red" onclick="speak(false, \'russian,ru\', \'и\')">И</button></td>\
<td><button style="color:black" onclick="speak(false, \'russian,ru\', \'й\')">Й</button></td>\
<td colspan="3"></td></tr><tr>\
<td><button style="color:black" onclick="speak(false, \'russian,ru\', \'к\')">К</button></td>\
<td><button style="color:black" onclick="speak(false, \'russian,ru\', \'л\')">Л</button></td>\
<td><button style="color:black" onclick="speak(false, \'russian,ru\', \'м\')">М</button></td>\
<td><button style="color:black" onclick="speak(false, \'russian,ru\', \'н\')">Н</button></td>\
<td><button style="color:red" onclick="speak(false, \'russian,ru\', \'о\')">О</button></td>\
<td><button style="color:black" onclick="speak(false, \'russian,ru\', \'п\')">П</button></td>\
<td><button style="color:black" onclick="speak(false, \'russian,ru\', \'р\')">Р</button></td>\
<td><button style="color:black" onclick="speak(false, \'russian,ru\', \'с\')">С</button></td>\
<td><button style="color:black" onclick="speak(false, \'russian,ru\', \'т\')">Т</button></td>\
</tr><tr>\
<td colspan="9" align="center"><button style="color:red" onclick="speak(false, \'russian,ru\', \'у\')">У</button></td>\
</tr><tr><td></td><td colspan="7" align="center">\
<button style="color:black" onclick="speak(false, \'russian,ru\', \'ф\')">Ф</button>\
<button style="color:black" onclick="speak(false, \'russian,ru\', \'х\')">Х</button>\
<button style="color:black" onclick="speak(false, \'russian,ru\', \'ц\')">Ц</button>\
<button style="color:black" onclick="speak(false, \'russian,ru\', \'ч\')">Ч</button>\
<button style="color:black" onclick="speak(false, \'russian,ru\', \'ш\')">Ш</button>\
<button style="color:black" onclick="speak(false, \'russian,ru\', \'щ\')">Щ</button>\
</td><td></td></tr><tr><td colspan="3"></td>\
<td><button style="color:black" onclick="speak(false, \'russian,ru\', \'ъ\')">Ъ</button></td>\
<td><button style="color:red" onclick="speak(false, \'russian,ru\', \'ы\')">Ы</button></td>\
<td><button style="color:black" onclick="speak(false, \'russian,ru\', \'ь\')">Ь</button></td>\
<td colspan="3"></td></tr><tr><td colspan="3"></td>\
<td><button style="color:red" onclick="speak(false, \'russian,ru\', \'э\')">Э</button></td>\
<td><button style="color:red" onclick="speak(false, \'russian,ru\', \'ю\')">Ю</button></td>\
<td><button style="color:red" onclick="speak(false, \'russian,ru\', \'я\')">Я</button></td>\
<td colspan="3"></td></tr></table>';

// Hebrew Linear Table
tableAbcd["hebrew"]["linear"] = '<tr>\
<tr><td colspan="3"></td>\
<td><button style="color:black" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">ד</button></td>\
<td><button style="color:black" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">ג</button></td>\
<td><button style="color:blue" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">ב</button></td>\
<td><button style="color:red" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">א‎</button></td>\
</tr><tr><td colspan="2"></td>\
<td><button style="color:black" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">ט</button></td>\
<td><button style="color:black" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">ח</button></td>\
<td><button style="color:black" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">ז</button></td>\
<td><button style="color:blue" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">ו</button></td>\
<td><button style="color:red" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">ה</button></td>\
</tr><tr><td></td>\
<td><button style="color:black" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">ס</button></td>\
<td><button style="color:black" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">נ</button></td>\
<td><button style="color:blue" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">מ</button></td>\
<td><button style="color:black" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">ל</button></td>\
<td><button style="color:black" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">כ</button></td>\
<td><button style="color:red" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">י</button></td>\
</tr><tr>\
<td><button style="color:black" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">ת</button></td>\
<td><button style="color:black" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">ש‎</button></td>\
<td><button style="color:black" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">ר</button></td>\
<td><button style="color:black" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">ק</button></td>\
<td><button style="color:black" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">צ</button></td>\
<td><button style="color:blue" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">פ</button></td>\
<td><button style="color:red" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">ע</button></td>\
</tr></table>';

// Hebrew Axial Table
tableAbcd["hebrew"]["axial"] = '<tr>\
<td colspan="7" align="center"><button style="color:red" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">א</button></td>\
</tr><tr><td colspan="2"></td><td colspan="3" align="center">\
<button style="color:black" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">ג</button>\
<button style="color:black" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">ב</button>\
</td><td colspan="2"></td></tr><tr><td colspan="2"></td>\
<td><button style="color:black" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">ו</button></td>\
<td><button style="color:red" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">ה</button></td>\
<td><button style="color:black" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">ד</button></td>\
<td colspan="2"></td></tr><tr>\
<td><button style="color:black" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">מ</button></td>\
<td><button style="color:black" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">ל</button></td>\
<td><button style="color:black" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">כ</button></td>\
<td><button style="color:red" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">י</button></td>\
<td><button style="color:black" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">ט</button></td>\
<td><button style="color:black" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">ח</button></td>\
<td><button style="color:black" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">ז</button></td>\
</tr><tr><td></td>\
<td><button style="color:black" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">צ</button></td>\
<td><button style="color:black" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">פ</button></td>\
<td><button style="color:red" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">ע</button></td>\
<td><button style="color:black" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">ס</button></td>\
<td><button style="color:black" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">נ</button></td>\
<td></td></tr><tr><td></td><td colspan="5" align="center">\
<button style="color:black" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">ת</button>\
<button style="color:black" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">ש‎</button>\
<button style="color:black" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">ר</button>\
<button style="color:black" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">ק</button>\
</td><td></td></tr></table>';

// Greek Linear Table
tableAbcd["greek"]["linear"] = '<tr>\
<td><button style="color:red" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">Α‎</button></td>\
<td><button style="color:blue" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">Β</button></td>\
<td><button style="color:blue" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">Γ</button></td>\
<td><button style="color:green" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">Δ</button></td>\
</tr><tr>\
<td><button style="color:red" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">Ε</button></td>\
<td><button style="color:green" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">Ζ</button></td>\
<td><button style="color:blue" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">Η</button></td>\
<td><button style="color:blue" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">Θ</button></td>\
</tr><tr>\
<td><button style="color:red" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">Ι</button></td>\
<td><button style="color:blue" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">Κ</button></td>\
<td><button style="color:green" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">Λ</button></td>\
<td><button style="color:blue" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">Μ</button></td>\
<td><button style="color:green" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">Ν</button></td>\
<td><button style="color:green" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">Ξ</button></td>\
</tr><tr>\
<td><button style="color:red" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">Ο</button></td>\
<td><button style="color:blue" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">Π</button></td>\
<td><button style="color:blue" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">Ρ</button></td>\
<td><button style="color:green" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">Σ</button></td>\
<td><button style="color:green" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">Τ</button></td>\
</tr><tr>\
<td><button style="color:red" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">Υ</button></td>\
<td><button style="color:blue" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">Φ</button></td>\
<td><button style="color:blue" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">Χ</button></td>\
<td><button style="color:green" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">Ψ</button></td>\
<td><button style="color:red" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">Ω</button></td>\
</tr></table>';

// Greek Axial Table
tableAbcd["greek"]["axial"] = '<tr>\
<td colspan="7" align="center"><button style="color:red" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">Α‎</button></td>\
</tr><tr><td colspan="2"></td><td colspan="3" align="center">\
<button style="color:black" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">Β</button>\
<button style="color:black" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">Γ</button>\
</td><td colspan="2"></td></tr><tr><td colspan="2"></td>\
<td><button style="color:black" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">Δ</button></td>\
<td><button style="color:red" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">Ε</button></td>\
<td><button style="color:black" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">Ζ</button></td>\
<td colspan="2"></td></tr><tr><td></td>\
<td><button style="color:black" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">Η</button></td>\
<td><button style="color:black" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">Θ</button></td>\
<td><button style="color:red" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">Ι</button></td>\
<td><button style="color:black" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">Κ</button></td>\
<td><button style="color:black" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">Λ</button></td>\
<td></td></tr><tr>\
<td><button style="color:black" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">Μ</button></td>\
<td><button style="color:black" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">Ν</button></td>\
<td><button style="color:black" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">Ξ</button></td>\
<td><button style="color:red" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">Ο</button></td>\
<td><button style="color:black" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">Π</button></td>\
<td><button style="color:black" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">Ρ</button></td>\
<td><button style="color:black" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">Σ</button></td>\
</tr><tr><td colspan="2"></td>\
<td><button style="color:black" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">Τ</button></td>\
<td><button style="color:red" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">Υ</button></td>\
<td><button style="color:black" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">Φ</button></td>\
<td colspan="2"></td></tr><tr><td colspan="2"></td><td colspan="3" align="center">\
<button style="color:black" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">Χ</button>\
<button style="color:black" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">Ψ</button>\
</td><td colspan="2"></td></tr><tr>\
<td colspan="7" align="center"><button style="color:red" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">Ω</button></td>\
</tr></table>';

// Georgian Linear Table
tableAbcd["georgian"]["linear"] = '<tr>\
<td><button style="color:red" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">ა‎</button></td>\
<td><button style="color:blue" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">ბ</button></td>\
<td><button style="color:green" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">გ</button></td>\
<td><button style="color:green" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">დ</button></td>\
</tr><tr>\
<td><button style="color:red" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">ე</button></td>\
<td><button style="color:blue" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">ვ</button></td>\
<td><button style="color:green" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">ზ</button></td>\
<td><button style="color:green" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">თ</button></td>\
</tr><tr>\
<td><button style="color:red" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">ი</button></td>\
<td><button style="color:green" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">კ</button></td>\
<td><button style="color:green" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">ლ</button></td>\
<td><button style="color:blue" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">მ</button></td>\
<td><button style="color:green" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">ნ</button></td>\
</tr><tr>\
<td><button style="color:red" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">ო</button></td>\
<td><button style="color:blue" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">პ</button></td>\
<td><button style="color:green" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">ჟ</button></td>\
<td><button style="color:green" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">რ</button></td>\
<td><button style="color:green" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">ს</button></td>\
<td><button style="color:green" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">ტ</button></td>\
</tr><tr>\
<td><button style="color:red" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">უ</button></td>\
<td><button style="color:blue" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">ფ</button></td>\
<td><button style="color:green" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">ქ</button></td>\
<td><button style="color:green" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">ღ</button></td>\
<td><button style="color:green" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">ყ</button></td>\
<td><button style="color:green" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">შ</button></td>\
<td><button style="color:green" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">ჩ</button></td>\
<td><button style="color:green" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">ც</button></td>\
<td><button style="color:green" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">ძ</button></td>\
<td><button style="color:green" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">წ</button></td>\
<td><button style="color:green" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">ჭ</button></td>\
<td><button style="color:green" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">ხ</button></td>\
<td><button style="color:green" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">ჯ</button></td>\
<td><button style="color:green" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">ჰ</button></td>\
</tr></table>';

// Georgian Axial Table
tableAbcd["georgian"]["axial"] = '<tr>\
<td colspan="11" align="center"><button style="color:red" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">ა‎</button></td>\
</tr><tr><td colspan="4"></td><td colspan="3" align="center">\
<button style="color:black" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">ბ</button>\
<button style="color:black" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">გ</button>\
</td><td colspan="4"></td></tr><tr><td colspan="4"></td>\
<td><button style="color:black" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">დ</button></td>\
<td><button style="color:red" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">ე</button></td>\
<td><button style="color:black" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">ვ</button></td>\
<td colspan="4"></td></tr><tr><td colspan="3"></td>\
<td><button style="color:black" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">ზ</button></td>\
<td><button style="color:black" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">თ</button></td>\
<td><button style="color:red" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">ი</button></td>\
<td><button style="color:black" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">კ</button></td>\
<td><button style="color:black" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">ლ</button></td>\
<td colspan="3"></td></tr><tr><td colspan="3"></td>\
<td><button style="color:black" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">მ</button></td>\
<td><button style="color:black" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">ნ</button></td>\
<td><button style="color:red" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">ო</button></td>\
<td><button style="color:black" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">პ</button></td>\
<td><button style="color:black" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">ჟ</button></td>\
<td colspan="3"></td></tr><tr><td colspan="2">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>\
<td><button style="color:black" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">რ</button></td>\
<td><button style="color:black" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">ს</button></td>\
<td><button style="color:black" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">ტ</button></td>\
<td><button style="color:red" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">უ</button></td>\
<td><button style="color:black" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">ფ</button></td>\
<td><button style="color:black" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">ქ</button></td>\
<td><button style="color:black" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">ღ</button></td>\
<td colspan="2">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td></tr><tr><td colspan="11" align="center">\
<button style="color:black" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">ყ</button>\
<button style="color:black" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">შ</button>\
<button style="color:black" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">ჩ</button>\
<button style="color:black" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">ც</button>\
<button style="color:black" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">ძ</button>\
<button style="color:black" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">წ</button>\
<button style="color:black" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">ჭ</button>\
<button style="color:black" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">ხ</button>\
<button style="color:black" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">ჯ</button>\
<button style="color:black" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">ჰ</button>\
</td></tr></table>';

// Abjadi Linear Table
tableAbcd["abjadi"]["linear"] = '<tr>\
<td colspan="9"></td>\
<td><button style="color:black" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">د</button></td>\
<td><button style="color:black" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">ج</button></td>\
<td><button style="color:blue" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">ب</button></td>\
<td><button style="color:red" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">ا</button></td>\
</tr><tr><td colspan="8"></td>\
<td><button style="color:black" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">ط</button></td>\
<td><button style="color:black" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">ح</button></td>\
<td><button style="color:black" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">ز</button></td>\
<td><button style="color:red" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">و</button></td>\
<td><button style="color:grey" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">ه</button></td>\
</tr><tr><td colspan="7"></td>\
<td><button style="color:black" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">س</button></td>\
<td><button style="color:black" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">ن</button></td>\
<td><button style="color:blue" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">م</button></td>\
<td><button style="color:black" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">ل</button></td>\
<td><button style="color:black" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">ك</button></td>\
<td><button style="color:red" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">ي</button></td>\
</tr><tr>\
<td><button style="color:black" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">غ</button></td>\
<td><button style="color:black" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">ظ</button></td>\
<td><button style="color:black" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">ض</button></td>\
<td><button style="color:black" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">ذ</button></td>\
<td><button style="color:black" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">خ</button></td>\
<td><button style="color:black" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">ث</button></td>\
<td><button style="color:black" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">ت</button></td>\
<td><button style="color:black" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">ش</button></td>\
<td><button style="color:black" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">ر</button></td>\
<td><button style="color:black" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">ق</button></td>\
<td><button style="color:black" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">ص</button></td>\
<td><button style="color:blue" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">ف</button></td>\
<td><button style="color:red" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">ع</button></td>\
</tr></table>';

// Abjadi Axial Table
tableAbcd["abjadi"]["axial"] = '<tr>\
<td colspan="7" align="center"><button style="color:red" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">ا</button></td>\
</tr><tr><td colspan="2"></td><td colspan="3" align="center">\
<button style="color:black" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">ج</button>\
<button style="color:black" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">ب</button>\
</td><td colspan="2"></td></tr><tr><td colspan="2"></td>\
<td><button style="color:black" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">و</button></td>\
<td><button style="color:red" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">ه</button></td>\
<td><button style="color:black" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">د</button></td>\
</td><td colspan="2"></td></tr><tr>\
<td><button style="color:black" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">م</button></td>\
<td><button style="color:black" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">ل</button></td>\
<td><button style="color:black" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">ك</button></td>\
<td><button style="color:red" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">ي</button></td>\
<td><button style="color:black" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">ط</button></td>\
<td><button style="color:black" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">ح</button></td>\
<td><button style="color:black" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">ز</button></td>\
</tr><tr><td></td>\
<td><button style="color:black" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">ص</button></td>\
<td><button style="color:black" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">ف</button></td>\
<td><button style="color:red" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">ع</button></td>\
<td><button style="color:black" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">س</button></td>\
<td><button style="color:black" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">ن</button></td>\
<td></td></tr><tr><td></td><td colspan="5" align="center">\
<button style="color:black" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">ت</button>\
<button style="color:black" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">ش</button>\
<button style="color:black" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">ر</button>\
<button style="color:black" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">ق</button>\
</td><td></td></tr><tr><td colspan="7" align="center">\
<button style="color:black" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">غ</button>\
<button style="color:black" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">ظ</button>\
<button style="color:black" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">ض</button>\
<button style="color:black" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">ذ</button>\
<button style="color:black" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">خ</button>\
<button style="color:black" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">ث</button>\
</td></tr></table>';


// Runes Linear Table
tableAbcd["runes"]["linear"] = '<tr>\
<td><button style="color:red" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">ᛆ</button></td>\
<td><button style="color:blue" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">ᛒ</button></td>\
<td><button style="color:black" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">ᚦ</button></td>\
</tr><tr>\
<td><button style="color:red" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">ᛂ</button></td>\
<td><button style="color:blue" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">ᚠ</button></td>\
<td><button style="color:black" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">ᚵ</button></td>\
<td><button style="color:black" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">ᚼ</button></td>\
</tr><tr>\
<td><button style="color:red" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">ᛁ</button></td>\
<td><button style="color:black" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">ᚴ</button></td>\
<td><button style="color:black" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">ᛚ</button></td>\
<td><button style="color:blue" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">ᛘ</button></td>\
<td><button style="color:black" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">ᚿ</button></td>\
</tr><tr>\
<td><button style="color:red" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">ᚮ</button></td>\
<td><button style="color:black" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">ᚱ</button></td>\
<td><button style="color:brown" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">ᛦ</button></td>\
<td><button style="color:black" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">ᛋ</button></td>\
<td><button style="color:black" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">ᛏ</button></td>\
<td><button style="color:blue" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">ᚢ</button></td>\
</tr></table>';

// Runes Axial Table
tableAbcd["runes"]["axial"] = '<tr>\
<td colspan="7" align="center"><button style="color:red" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">ᛆ</button></td>\
</tr><tr><td></td>\
<td><button style="color:black" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">ᛒ</button></td>\
<td><button style="color:black" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">ᚦ</button></td>\
<td><button style="color:red" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">ᛂ</button></td>\
<td><button style="color:black" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">ᚠ</button></td>\
<td><button style="color:black" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">ᚵ</button></td>\
<td></td></tr><tr><td colspan="2"></td>\
<td><button style="color:black" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">ᚼ</button></td>\
<td><button style="color:red" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">ᛁ</button></td>\
<td><button style="color:black" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">ᚴ</button></td>\
<td colspan="2"></td></tr><tr>\
<td><button style="color:black" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">ᛚ</button></td>\
<td><button style="color:black" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">ᛘ</button></td>\
<td><button style="color:black" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">ᚿ</button></td>\
<td><button style="color:red" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">ᚮ</button></td>\
<td><button style="color:black" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">ᚱ</button></td>\
<td><button style="color:black" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">ᛦ</button></td>\
<td><button style="color:black" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">ᛋ</button></td>\
</tr><tr><td colspan="2"></td><td colspan="3" align="center">\
<button style="color:black" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">ᛏ</button>\
<button style="color:black" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">ᚢ</button>\
</td><td colspan="2"></td></tr></table>';

// Ugaritic Linear Table
tableAbcd["ugaritic"]["linear"] = '<tr>\
<td><button style="color:red" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">𐎀</button></td>\
<td><button style="color:blue" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">𐎁</button></td>\
<td><button style="color:black" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">𐎂</button></td>\
<td><button style="color:black" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">𐎃</button></td>\
<td><button style="color:black" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">𐎄</button></td>\
</tr><tr>\
<td><button style="color:red" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">𐎅</button></td>\
<td><button style="color:blue" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">𐎆</button></td>\
<td><button style="color:black" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">𐎇</button></td>\
<td><button style="color:black" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">𐎈</button></td>\
<td><button style="color:black" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">𐎉</button></td>\
</tr><tr>\
<td><button style="color:red" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">𐎊</button></td>\
<td><button style="color:black" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">𐎋</button></td>\
<td><button style="color:black" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">𐎌</button></td>\
<td><button style="color:black" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">𐎍</button></td>\
<td><button style="color:blue" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">𐎎</button></td>\
<td><button style="color:black" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">𐎏</button></td>\
<td><button style="color:black" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">𐎐</button></td>\
<td><button style="color:black" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">𐎑</button></td>\
<td><button style="color:black" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">𐎒</button></td>\
</tr><tr>\
<td><button style="color:red" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">𐎓</button></td>\
<td><button style="color:blue" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">𐎔</button></td>\
<td><button style="color:black" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">𐎕</button></td>\
<td><button style="color:black" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">𐎖</button></td>\
<td><button style="color:black" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">𐎗</button></td>\
<td><button style="color:black" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">𐎘</button></td>\
<td><button style="color:black" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">𐎙</button></td>\
<td><button style="color:black" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">𐎚</button></td>\
</tr><tr>\
<td><button style="color:red" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">𐎛</button></td>\
<td><button style="color:blue" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">𐎜</button></td>\
<td><button style="color:black" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">𐎝</button></td>\
<td><button style="color:black" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">𐎟</button></td>\
</tr></table>';

// Ugaritic Axial Table
tableAbcd["ugaritic"]["axial"] = '<tr>\
<td colspan="13" align="center"><button style="color:red" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">𐎀</button></td>\
</tr><tr><td colspan="5"></td><td colspan="3" align="center">\
<button style="color:black" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">𐎁</button>\
<button style="color:black" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">𐎂</button>\
</td><td colspan="5"></td></tr><tr><td colspan="4"></td>\
<td><button style="color:black" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">𐎃</button></td>\
<td><button style="color:black" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">𐎄</button></td>\
<td><button style="color:red" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">𐎅</button></td>\
<td><button style="color:black" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">𐎆</button></td>\
<td><button style="color:black" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">𐎇</button></td>\
<td colspan="4"></td></tr><tr><td colspan="4"></td>\
<td><button style="color:black" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">𐎈</button></td>\
<td><button style="color:black" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">𐎉</button></td>\
<td><button style="color:red" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">𐎊</button></td>\
<td><button style="color:black" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">𐎋</button></td>\
<td><button style="color:black" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">𐎌</button></td>\
<td colspan="4"></td></tr><tr>\
<td><button style="color:black" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">𐎍</button></td>\
<td><button style="color:black" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">𐎎</button></td>\
<td><button style="color:black" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">𐎏</button></td>\
<td><button style="color:black" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">𐎐</button></td>\
<td><button style="color:black" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">𐎑</button></td>\
<td><button style="color:black" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">𐎒</button></td>\
<td><button style="color:red" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">𐎓</button></td>\
<td><button style="color:black" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">𐎔</button></td>\
<td><button style="color:black" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">𐎕</button></td>\
<td><button style="color:black" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">𐎖</button></td>\
<td><button style="color:black" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">𐎗</button></td>\
<td><button style="color:black" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">𐎘</button></td>\
<td><button style="color:black" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">𐎙</button></td>\
</tr><tr><td colspan="5"></td>\
<td><button style="color:black" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">𐎚</button></td>\
<td><button style="color:red" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">𐎛</button></td>\
<td><button style="color:black" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">𐎜</button></td>\
<td colspan="5"></td></tr><tr><td colspan="5"></td><td colspan="3" align="center">\
<button style="color:black" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">𐎝</button>\
<button style="color:black" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">𐎟</button>\
</td><td colspan="5"></td></tr></table>';

var tablePrefix = '<table align = "center">\
<tr><td align="center">\
<table>\
<tr>\
<td>';

var tableAfix = '</td>\
</tr>\
</table>\
</td></tr>\
<tr>\
<td>';

var tablePostfix = '</td>\
<td>\
<table>\
<tr><td><button class="controlButton" onclick="makeAeiou(\'english\', layout, \'default\')">ABCD</button></td></tr>\
<tr><td><button class="controlButton" onclick="makeAeiou(\'russian\', layout, \'default\')">АБВГ</button></td></tr>\
<tr><td><button class="controlButton" onclick="makeAeiou(\'hebrew\', layout, \'hebrew\')"><font style="font-family: \'Noto Sans Hebrew\', sans-serif;">אבגד</font></button></td></tr>\
<tr><td><button class="controlButton" onclick="makeAeiou(\'greek\', layout, \'default\')">ΑΒΓΔ</button></td></tr>\
<tr><td><button class="controlButton" onclick="makeAeiou(\'georgian\', layout, \'georgian\')"><font style="font-family: \'Noto Sans Georgian\', serif;">აბგდ</font></button></td></tr>\
<tr><td><button class="controlButton" onclick="makeAeiou(\'abjadi\', layout, \'abjadi\')"><font style="font-family: \'Mirza\', cursive;">دجبا</font></button></td></tr>\
<tr><td><button class="controlButton" onclick="makeAeiou(\'runes\', layout, \'runes\')"><font style="font-family: \'Noto Sans Runic\', sans-serif;">ᛆᛒᚦᛂ</font></button></td></tr>\
<tr><td><button class="controlButton" onclick="makeAeiou(\'ugaritic\', layout, \'ugaritic\')"><font style="font-family: \'Noto Sans Ugaritic\', sans-serif;">𐎀𐎁𐎂𐎃</font></button></td></tr>\
</table>\
</td>\
</tr>\
<tr><td align="center">\
<table>\
<tr><td><button class="controlButton" onclick="makeAeiou(language, \'linear\')">=</button></td>\
<td><button class="controlButton" onclick="makeAeiou(language, \'axial\')">-|-</button></td></tr>\
</table>\
</td></tr>\
</table>';

function makeAeiou(languageTransmitted, layoutTransmitted, fontTransmitted) {
    if (languageTransmitted === undefined) {
        languageTransmitted = language;
    }
    if (layoutTransmitted === undefined) {
        layoutTransmitted = layout;
    }
    if (fontTransmitted === undefined) {
        fontTransmitted = font;
    }
    language = languageTransmitted;
    layout = layoutTransmitted;
    font = fontTransmitted;
    var result = '<p align="center">';
    switch(language) {
        case 'english':
            result += '<a href="https://en.wikipedia.org/wiki/English_alphabet" target="_blank">english alphabet</a>';
            break;
        case 'russian':
            result += '<a href="https://en.wikipedia.org/wiki/Russian_alphabet" target="_blank">russian alphabet</a>';
            break;
        case 'hebrew':
            result += '<a href="https://en.wikipedia.org/wiki/Hebrew_alphabet" target="_blank">hebrew alphabet</a>';
            break;
        case 'greek':
            result += '<a href="https://en.wikipedia.org/wiki/Greek_alphabet" target="_blank">greek alphabet</a>';
            break;
        case 'georgian':
            result += '<a href="https://en.wikipedia.org/wiki/Georgian_scripts" target="_blank">georgian scripts</a>';
            break;
        case 'abjadi':
            result += '<a href="https://en.wikipedia.org/wiki/Arabic_alphabet" target="_blank">arabic abjad</a>';
            break;
        case 'runes':
            result += '<a href="https://en.wikipedia.org/wiki/Runes" target="_blank">nordic runes</a>';
            break;
        case 'ugaritic':
            result += '<a href="https://en.wikipedia.org/wiki/Ugaritic_alphabet" target="_blank">ugaritic alphabet</a>';
            break;
    }
    result += "</p>";
    result += tablePrefix;

    switch(language) {
        case 'english':
            result += '<button class="controlButton" onclick="makeAeiou(language, layout, \'default\')">ABCD</button></td><td><button class="controlButton" onclick="makeAeiou(language, layout, \'lowercase\')">abcd</button></td><td><button class="controlButton" onclick="makeAeiou(language, layout, \'enhandwritten\')"><font style="font-family: \'alsscrp\', cursive">ABCD</font></button></td><td><button class="controlButton" onclick="makeAeiou(language, layout, \'enlowerhand\')"><font style="font-family: \'alsscrp\', cursive">abcd</font></button>';
            break;
        case 'russian':
            result += '<button class="controlButton" onclick="makeAeiou(language, layout, \'default\')">АБВГ</button></td><td><button class="controlButton" onclick="makeAeiou(language, layout, \'lowercase\')">абвг</button></td><td><button class="controlButton" onclick="makeAeiou(language, layout, \'ruhandwritten\')"><font style="font-family: \'Marck Script\', cursive">АБВГ</font></button></td><td><button class="controlButton" onclick="makeAeiou(language, layout, \'rulowerhand\')"><font style="font-family: \'Marck Script\', cursive">абвг</font></button>';
            break;
        case 'hebrew':
            result += '<button class="controlButton" onclick="makeAeiou(language, layout, \'hebrew\')"><font style="font-family: \'Noto Sans Hebrew\', sans-serif">אבגד</font></button></td><td><button class="controlButton" onclick="makeAeiou(language, layout, \'hehandwritten\')"><font style="font-family: \'YOAVCB\', cursive">אבגד</font></button>';
            break;
        case 'greek':
            result += '<button class="controlButton" onclick="makeAeiou(language, layout, \'default\')">ΑΒΓΔ</button></td><td><button class="controlButton" onclick="makeAeiou(language, layout, \'lowercase\')">αβγδ</button>';
            break;
        case 'georgian':
            break;
        case 'abjadi':
            break;
        case 'runes':
            break;
        case 'ugaritic':
            break;
    }

    result += tableAfix;

    switch(font) {
        case 'default':
            result += '<table class="abcdTable default upper">';
            break;
        case 'lowercase':
            result += '<table class="abcdTable default lower">';
            break;
        case 'handwritten':
            result += '<table class="abcdTable handwritten upper">';
            break;
        case 'enhandwritten':
            result += '<table class="abcdTable enhandwritten upper">';
            break;
        case 'ruhandwritten':
            result += '<table class="abcdTable ruhandwritten upper">';
            break;
        case 'hehandwritten':
            result += '<table class="abcdTable hehandwritten">';
            break;
        case 'lowerhand':
            result += '<table class="abcdTable handwritten lower">';
            break;
        case 'enlowerhand':
            result += '<table class="abcdTable enhandwritten lower">';
            break;
        case 'rulowerhand':
            result += '<table class="abcdTable ruhandwritten lower">';
            break;
        case 'hebrew':
            result += '<table class="abcdTable hebrew">';
            break;
        case 'georgian':
            result += '<table class="abcdTable georgian">';
            break;
        case 'abjadi':
            result += '<table class="abcdTable abjadi">';
            break;
        case 'runes':
            result += '<table class="abcdTable runes">';
            break;
        case 'ugaritic':
            result += '<table class="abcdTable ugaritic">';
            break;
    }

    result += tableAbcd[language][layout];

    result += tablePostfix;

    document.getElementById("aeiou").innerHTML = result;
}


// ========================= temporary play sound file =========================

function playSoundFile(letter) {
  var audio = new Audio();
    if (letter == 'A') { audio.src = 'test1.mp3'; }
    if (letter == 'B') { audio.src = 'test2.mp3'; }
  audio.autoplay = true;
}

// ========================= temporary play sound file =========================
