// Global vars

var language = 'english';
var layout = 'linear';
var font = 'default';

var lastSpoken = {};
lastSpoken["symbol"] = "";
lastSpoken["count"] = 0;

var tableAbcd = {};
tableAbcd["english"] = {};
tableAbcd["russian"] = {};
tableAbcd["hebrew"] = {};
tableAbcd["greek"] = {};
tableAbcd["georgian"] = {};
tableAbcd["abjadi"] = {};
tableAbcd["runes"] = {};
tableAbcd["ugaritic"] = {};

// English Linear Table
tableAbcd["english"]["linear"] = '<tr>\
<td><button style="color:red" onclick="speakLetter(\'a\')"><div class="relative"><div id="aPre"></div>A<div id="aUnder"></div><div id="aPost"></div></div></button></td>\
<td><button style="color:blue" onclick="speakLetter(\'b\')"><div class="relative"><div id="bPre"></div>B<div id="bUnder"></div><div id="bPost"></div></div></button></td>\
<td><button style="color:green" onclick="speakLetter(\'c\')"><div class="relative"><div id="cPre"></div>C<div id="cUnder"></div><div id="cPost"></div></div></button></td>\
<td><button style="color:green" onclick="speakLetter(\'d\')"><div class="relative"><div id="dPre"></div>D<div id="dUnder"></div><div id="dPost"></div></div></button></td>\
<td></td><td></td></tr><tr>\
<td><button style="color:red" onclick="speakLetter(\'e\')"><div class="relative"><div id="ePre"></div>E<div id="eUnder"></div><div id="ePost"></div></div></button></td>\
<td><button style="color:blue" onclick="speakLetter(\'f\')"><div class="relative"><div id="fPre"></div>F<div id="fUnder"></div><div id="fPost"></div></div></button></td>\
<td><button style="color:green" onclick="speakLetter(\'g\')"><div class="relative"><div id="gPre"></div>G<div id="gUnder"></div><div id="gPost"></div></div></button></td>\
<td><button style="color:green" onclick="speakLetter(\'h\')"><div class="relative"><div id="hPre"></div>H<div id="hUnder"></div><div id="hPost"></div></div></button></td>\
</tr><tr>\
<td><button style="color:red" onclick="speakLetter(\'i\')"><div class="relative"><div id="iPre"></div>I<div id="iUnder"></div><div id="iPost"></div></div></button></td>\
<td><button style="color:green" onclick="speakLetter(\'j\')"><div class="relative"><div id="jPre"></div>J<div id="jUnder"></div><div id="jPost"></div></div></button></td>\
<td><button style="color:green" onclick="speakLetter(\'k\')"><div class="relative"><div id="kPre"></div>K<div id="kUnder"></div><div id="kPost"></div></div></button></td>\
<td><button style="color:green" onclick="speakLetter(\'l\')"><div class="relative"><div id="lPre"></div>L<div id="lUnder"></div><div id="lPost"></div></div></button></td>\
<td><button style="color:blue" onclick="speakLetter(\'m\')"><div class="relative"><div id="mPre"></div>M<div id="mUnder"></div><div id="mPost"></div></div></button></td>\
<td><button style="color:green" onclick="speakLetter(\'n\')"><div class="relative"><div id="nPre"></div>N<div id="nUnder"></div><div id="nPost"></div></div></button></td>\
</tr><tr>\
<td><button style="color:red" onclick="speakLetter(\'o\')"><div class="relative"><div id="oPre"></div>O<div id="oUnder"></div><div id="oPost"></div></div></button></td>\
<td><button style="color:blue" onclick="speakLetter(\'p\')"><div class="relative"><div id="pPre"></div>P<div id="pUnder"></div><div id="pPost"></div></div></button></td>\
<td><button style="color:green" onclick="speakLetter(\'q\')"><div class="relative"><div id="qPre"></div>Q<div id="qUnder"></div><div id="qPost"></div></div></button></td>\
<td><button style="color:green" onclick="speakLetter(\'r\')"><div class="relative"><div id="rPre"></div>R<div id="rUnder"></div><div id="rPost"></div></div></button></td>\
<td><button style="color:green" onclick="speakLetter(\'s\')"><div class="relative"><div id="sPre"></div>S<div id="sUnder"></div><div id="sPost"></div></div></button></td>\
<td><button style="color:green" onclick="speakLetter(\'t\')"><div class="relative"><div id="tPre"></div>T<div id="tUnder"></div><div id="tPost"></div></div></button></td>\
</tr><tr>\
<td><button style="color:red" onclick="speakLetter(\'u\')"><div class="relative"><div id="uPre"></div>U<div id="uUnder"></div><div id="uPost"></div></div></button></td>\
<td><button style="color:blue" onclick="speakLetter(\'v\')"><div class="relative"><div id="vPre"></div>V<div id="vUnder"></div><div id="vPost"></div></div></button></td>\
<td><button style="color:blue" onclick="speakLetter(\'w\')"><div class="relative"><div id="wPre"></div>W<div id="wUnder"></div><div id="wPost"></div></div></button></td>\
<td><button style="color:green" onclick="speakLetter(\'x\')"><div class="relative"><div id="xPre"></div>X<div id="xUnder"></div><div id="xPost"></div></div></button></td>\
<td><button style="color:red" onclick="speakLetter(\'y\')"><div class="relative"><div id="yPre"></div>Y<div id="yUnder"></div><div id="yPost"></div></div></button></td>\
<td><button style="color:green" onclick="speakLetter(\'z\')"><div class="relative"><div id="zPre"></div>Z<div id="zUnder"></div><div id="zPost"></div></div></button></td>\
</tr></table>';

// English Axial Table
tableAbcd["english"]["axial"] = '<tr>\
<td colspan="7" align="center"><button style="color:red" onclick="speakLetter(\'a\')"><div class="relative"><div id="aPre"></div>A<div id="aUnder"></div><div id="aPost"></div></div></button></td>\
</tr><tr><td colspan="2"></td><td colspan="3" align="center">\
<button style="color:black" onclick="speakLetter(\'b\')"><div class="relative"><div id="bPre"></div>B<div id="bUnder"></div><div id="bPost"></div></div></button>\
<button style="color:black" onclick="speakLetter(\'c\')"><div class="relative"><div id="cPre"></div>C<div id="cUnder"></div><div id="cPost"></div></div></button>\
</td><td colspan="2"></td>\
</tr><tr><td colspan="2"></td>\
<td><button style="color:black" onclick="speakLetter(\'d\')"><div class="relative"><div id="dPre"></div>D<div id="dUnder"></div><div id="dPost"></div></div></button></td>\
<td><button style="color:red" onclick="speakLetter(\'e\')"><div class="relative"><div id="ePre"></div>E<div id="eUnder"></div><div id="ePost"></div></div></button></td>\
<td><button style="color:black" onclick="speakLetter(\'f\')"><div class="relative"><div id="fPre"></div>F<div id="fUnder"></div><div id="fPost"></div></div></button></td>\
<td colspan="2"></td></tr><tr>\
<td></td><td><button style="color:black" onclick="speakLetter(\'g\')"><div class="relative"><div id="gPre"></div>G<div id="gUnder"></div><div id="gPost"></div></div></button></td>\
<td><button style="color:black" onclick="speakLetter(\'h\')"><div class="relative"><div id="hPre"></div>H<div id="hUnder"></div><div id="hPost"></div></div></button></td>\
<td><button style="color:red" onclick="speakLetter(\'i\')"><div class="relative"><div id="iPre"></div>I<div id="iUnder"></div><div id="iPost"></div></div></button></td>\
<td><button style="color:black" onclick="speakLetter(\'j\')"><div class="relative"><div id="jPre"></div>J<div id="jUnder"></div><div id="jPost"></div></div></button></td>\
<td><button style="color:black" onclick="speakLetter(\'k\')"><div class="relative"><div id="kPre"></div>K<div id="kUnder"></div><div id="kPost"></div></div></button></td>\
<td></td></tr><tr>\
<td><button style="color:black" onclick="speakLetter(\'l\')"><div class="relative"><div id="lPre"></div>L<div id="lUnder"></div><div id="lPost"></div></div></button></td>\
<td><button style="color:black" onclick="speakLetter(\'m\')"><div class="relative"><div id="mPre"></div>M<div id="mUnder"></div><div id="mPost"></div></div></button></td>\
<td><button style="color:black" onclick="speakLetter(\'n\')"><div class="relative"><div id="nPre"></div>N<div id="nUnder"></div><div id="nPost"></div></div></button></td>\
<td><button style="color:red" onclick="speakLetter(\'o\')"><div class="relative"><div id="oPre"></div>O<div id="oUnder"></div><div id="oPost"></div></div></button></td>\
<td><button style="color:black" onclick="speakLetter(\'p\')"><div class="relative"><div id="pPre"></div>P<div id="pUnder"></div><div id="pPost"></div></div></button></td>\
<td><button style="color:black" onclick="speakLetter(\'q\')"><div class="relative"><div id="qPre"></div>Q<div id="qUnder"></div><div id="qPost"></div></div></button></td>\
<td><button style="color:black" onclick="speakLetter(\'r\')"><div class="relative"><div id="rPre"></div>R<div id="rUnder"></div><div id="rPost"></div></div></button></td>\
</tr><tr>\
<td></td><td><button style="color:black" onclick="speakLetter(\'s\')"><div class="relative"><div id="sPre"></div>S<div id="sUnder"></div><div id="sPost"></div></div></button></td>\
<td><button style="color:black" onclick="speakLetter(\'t\')"><div class="relative"><div id="tPre"></div>T<div id="tUnder"></div><div id="tPost"></div></div></button></td>\
<td><button style="color:red" onclick="speakLetter(\'u\')"><div class="relative"><div id="uPre"></div>U<div id="uUnder"></div><div id="uPost"></div></div></button></td>\
<td><button style="color:black" onclick="speakLetter(\'v\')"><div class="relative"><div id="vPre"></div>V<div id="vUnder"></div><div id="vPost"></div></div></button></td>\
<td><button style="color:black" onclick="speakLetter(\'w\')"><div class="relative"><div id="wPre"></div>W<div id="wUnder"></div><div id="wPost"></div></div></button></td>\
<td></td></tr><tr><td colspan="2"></td>\
<td><button style="color:black" onclick="speakLetter(\'x\')"><div class="relative"><div id="xPre"></div>X<div id="xUnder"></div><div id="xPost"></div></div></button></td>\
<td><button style="color:red" onclick="speakLetter(\'y\')"><div class="relative"><div id="yPre"></div>Y<div id="yUnder"></div><div id="yPost"></div></div></button></td>\
<td><button style="color:black" onclick="speakLetter(\'z\')"><div class="relative"><div id="zPre"></div>Z<div id="zUnder"></div><div id="zPost"></div></div></button></td>\
</tr></table>';

// English Sound Correspondence
tableAbcd["english"]["sound"] = {};
tableAbcd["english"]["sound"]["a"] = [ "a", "c", " ", "c", "c", "t", "pe", "r", "ll", " ", " ", " ", " " ];
tableAbcd["english"]["sound"]["b"] = [ "b", " ", "la", "lam", "ee", " ", " ", " ", " ", " " ];
tableAbcd["english"]["sound"]["c"] = [ "c", " ", " ", " ", "ity", "at", "hip", " ", " ", " " ];
tableAbcd["english"]["sound"]["d"] = [ "d", " ", " ", "o", "eep", " ", " " ];
tableAbcd["english"]["sound"]["e"] = [ "e", "b", "b", "s", "s", "sw", "sw", "hom", "d", "d", " ", "t", "e", "a", "et", "at", " ", "ar", "al", " ", " ", " ", " ", " ", " ", " ", " ", " " ];
tableAbcd["english"]["sound"]["f"] = [ "f", " ", " ", "eel", "ly", " ", " " ];
tableAbcd["english"]["sound"]["g"] = [ "g", " ", " ", "bri", "ood", "ene", "ht", " ", " ", " " ];
tableAbcd["english"]["sound"]["h"] = [ "h", " ", " ", "igh", "ot", " ", " " ];
tableAbcd["english"]["sound"]["i"] = [ "i", "b", "b", "t", "te", " ", " " ];
tableAbcd["english"]["sound"]["j"] = [ "j", " ", "oy", " " ];
tableAbcd["english"]["sound"]["k"] = [ "k", " ", " ", "id", "night", " ", " " ];
tableAbcd["english"]["sound"]["l"] = [ "l", " ", " ", "he", "ive", "ive", "lo", " ", " ", " " ];
tableAbcd["english"]["sound"]["m"] = [ "m", " ", " ", "ama", "e", " ", " " ];
tableAbcd["english"]["sound"]["n"] = [ "n", " ", " ", "k", "ew", "o", "ow", " ", " ", " " ];
tableAbcd["english"]["sound"]["o"] = [ "o", "d", "d", "g", "h", "d", "g", " ", "od", "me", "me", " ", " ", " ", " ", " " ];
tableAbcd["english"]["sound"]["p"] = [ "p", " ", " ", " ", "ut", "ick", "hone", " ", " ", " " ];
tableAbcd["english"]["sound"]["q"] = [ "q", " ", " ", " ", "ueen", "uit", "uick", " ", " ", " " ];
tableAbcd["english"]["sound"]["r"] = [ "r", " ", "a", "ock", "c", " ", " " ];
tableAbcd["english"]["sound"]["s"] = [ "s", " ", " ", " ", " ", "aw", "ow", "ee", "he", " ", " ", " ", " " ];
tableAbcd["english"]["sound"]["t"] = [ "t", " ", " ", " ", "ake", "ip", "his", " ", " ", " " ];
tableAbcd["english"]["sound"]["u"] = [ "u", " ", "b", "se", "s", " ", " " ];
tableAbcd["english"]["sound"]["v"] = [ "v", " ", "lo", "ow", "e", " ", " " ];
tableAbcd["english"]["sound"]["w"] = [ "w", " ", " ", "ho", "ne", "hat", "ho", " ", " ", " ", " ", " ", " " ];
tableAbcd["english"]["sound"]["x"] = [ "x", "e", " ", " ", "enos", " ", " " ];
tableAbcd["english"]["sound"]["y"] = [ "y", " ", "jo", "e", "wh", "ver", "var", "ou", " ", "e", " ", " ", " ", " ", " ", " ", " ", " ", " " ];
tableAbcd["english"]["sound"]["z"] = [ "z", " ", "wi", "ip", " ", " ", " " ];

// Russian Linear Table
tableAbcd["russian"]["linear"] = '<tr>\
<td><button style="color:red" onclick="speakLetter(\'а\')"><div class="relative"><div id="аPre"></div>А<div id="аUnder"></div><div id="аPost"></div></div></button></td>\
<td><button style="color:blue" onclick="speakLetter(\'б\')"><div class="relative"><div id="бPre"></div>Б<div id="бUnder"></div><div id="бPost"></div></div></button></td>\
<td><button style="color:blue" onclick="speakLetter(\'в\')"><div class="relative"><div id="вPre"></div>В<div id="вUnder"></div><div id="вPost"></div></div></button></td>\
<td><button style="color:black" onclick="speakLetter(\'г\')"><div class="relative"><div id="гPre"></div>Г<div id="гUnder"></div><div id="гPost"></div></div></button></td>\
<td><button style="color:black" onclick="speakLetter(\'д\')"><div class="relative"><div id="дPre"></div>Д<div id="дUnder"></div><div id="дPost"></div></div></button></td>\
</tr><tr>\
<td><button style="color:red" onclick="speakLetter(\'е\')"><div class="relative"><div id="еPre"></div>Е<div id="еUnder"></div><div id="еPost"></div></div></button></td>\
<td><button style="color:red" onclick="speakLetter(\'ё\')"><div class="relative"><div id="ёPre"></div>Ё<div id="ёUnder"></div><div id="ёPost"></div></div></button></td>\
<td><button style="color:black" onclick="speakLetter(\'ж\')"><div class="relative"><div id="жPre"></div>Ж<div id="жUnder"></div><div id="жPost"></div></div></button></td>\
<td><button style="color:black" onclick="speakLetter(\'з\')"><div class="relative"><div id="зPre"></div>З<div id="зUnder"></div><div id="зPost"></div></div></button></td>\
</tr><tr>\
<td><button style="color:red" onclick="speakLetter(\'и\')"><div class="relative"><div id="иPre"></div>И<div id="иUnder"></div><div id="иPost"></div></div></button></td>\
<td><button style="color:black" onclick="speakLetter(\'й\')"><div class="relative"><div id="йPre"></div>Й<div id="йUnder"></div><div id="йPost"></div></div></button></td>\
<td><button style="color:black" onclick="speakLetter(\'к\')"><div class="relative"><div id="кPre"></div>К<div id="кUnder"></div><div id="кPost"></div></div></button></td>\
<td><button style="color:black" onclick="speakLetter(\'л\')"><div class="relative"><div id="лPre"></div><div id="лUnder"></div>Л<div id="лPost"></div></div></button></td>\
<td><button style="color:blue" onclick="speakLetter(\'м\')"><div class="relative"><div id="мPre"></div>М<div id="мUnder"></div><div id="мPost"></div></div></button></td>\
<td><button style="color:black" onclick="speakLetter(\'н\')"><div class="relative"><div id="нPre"></div>Н<div id="нUnder"></div><div id="нPost"></div></div></button></td>\
</tr><tr>\
<td><button style="color:red" onclick="speakLetter(\'о\')"><div class="relative"><div id="оPre"></div>О<div id="оUnder"></div><div id="оPost"></div></div></button></td>\
<td><button style="color:blue" onclick="speakLetter(\'п\')"><div class="relative"><div id="пPre"></div>П<div id="пUnder"></div><div id="пPost"></div></div></button></td>\
<td><button style="color:black" onclick="speakLetter(\'р\')"><div class="relative"><div id="рPre"></div>Р<div id="рUnder"></div><div id="рPost"></div></div></button></td>\
<td><button style="color:black" onclick="speakLetter(\'с\')"><div class="relative"><div id="сPre"></div>С<div id="сUnder"></div><div id="сPost"></div></div></button></td>\
<td><button style="color:black" onclick="speakLetter(\'т\')"><div class="relative"><div id="тPre"></div>Т<div id="тUnder"></div><div id="тPost"></div></div></button></td>\
</tr><tr>\
<td><button style="color:red" onclick="speakLetter(\'у\')"><div class="relative"><div id="уPre"></div>У<div id="уUnder"></div><div id="уPost"></div></div></button></td>\
<td><button style="color:blue" onclick="speakLetter(\'ф\')"><div class="relative"><div id="фPre"></div>Ф<div id="фUnder"></div><div id="фPost"></div></div></button></td>\
<td><button style="color:black" onclick="speakLetter(\'х\')"><div class="relative"><div id="хPre"></div>Х<div id="хUnder"></div><div id="хPost"></div></div></button></td>\
<td><button style="color:black" onclick="speakLetter(\'ц\')"><div class="relative"><div id="цPre"></div>Ц<div id="цUnder"></div><div id="цPost"></div></div></button></td>\
<td><button style="color:black" onclick="speakLetter(\'ч\')"><div class="relative"><div id="чPre"></div>Ч<div id="чUnder"></div><div id="чPost"></div></div></button></td>\
<td><button style="color:black" onclick="speakLetter(\'ш\')"><div class="relative"><div id="шPre"></div>Ш<div id="шUnder"></div><div id="шPost"></div></div></button></td>\
<td><button style="color:black" onclick="speakLetter(\'щ\')"><div class="relative"><div id="щPre"></div>Щ<div id="щUnder"></div><div id="щPost"></div></div></button></td>\
</tr><tr>\
<td><button style="color:grey" onclick="speakLetter(\'ъ\')"><div class="relative"><div id="ъPre"></div>Ъ<div id="ъUnder"></div><div id="ъPost"></div></div></button></td>\
<td><button style="color:red" onclick="speakLetter(\'ы\')"><div class="relative"><div id="ыPre"></div>Ы<div id="ыUnder"></div><div id="ыPost"></div></div></button></td>\
<td><button style="color:grey" onclick="speakLetter(\'ь\')"><div class="relative"><div id="ьPre"></div>Ь<div id="ьUnder"></div><div id="ьPost"></div></div></button></td>\
<td><button style="color:red" onclick="speakLetter(\'э\')"><div class="relative"><div id="эPre"></div>Э<div id="эUnder"></div><div id="эPost"></div></div></button></td>\
<td><button style="color:red" onclick="speakLetter(\'ю\')"><div class="relative"><div id="юPre"></div>Ю<div id="юUnder"></div><div id="юPost"></div></div></button></td>\
<td><button style="color:red" onclick="speakLetter(\'я\')"><div class="relative"><div id="яPre"></div>Я<div id="яUnder"></div><div id="яPost"></div></div></button></td>\
</tr></table>';

// Russian Axial Table
tableAbcd["russian"]["axial"] = '<tr>\
<td colspan="9" align="center"><button style="color:red" onclick="speakLetter(\'а\')"><div class="relative"><div id="аPre"></div>А<div id="аUnder"></div><div id="аPost"></div></div></button></td>\
</tr><tr><td colspan="3"></td><td colspan="3" align="center">\
<button style="color:black" onclick="speakLetter(\'б\')"><div class="relative"><div id="бPre"></div>Б<div id="бUnder"></div><div id="бPost"></div></div></button>\
<button style="color:black" onclick="speakLetter(\'в\')"><div class="relative"><div id="вPre"></div>В<div id="вUnder"></div><div id="вPost"></div></div></button>\
</td><td colspan="3"></td></tr><tr><td colspan="2"></td>\
<td><button style="color:black" onclick="speakLetter(\'г\')"><div class="relative"><div id="гPre"></div>Г<div id="гUnder"></div><div id="гPost"></div></div></button></td>\
<td><button style="color:black" onclick="speakLetter(\'д\')"><div class="relative"><div id="дPre"></div>Д<div id="дUnder"></div><div id="дPost"></div></div></button></td>\
<td><button style="color:red" onclick="speakLetter(\'е\')"><div class="relative"><div id="еPre"></div>Е<div id="еUnder"></div><div id="еPost"></div></div></button></td>\
<td><button style="color:red" onclick="speakLetter(\'ё\')"><div class="relative"><div id="ёPre"></div>Ё<div id="ёUnder"></div><div id="ёPost"></div></div></button></td>\
<td><button style="color:black" onclick="speakLetter(\'ж\')"><div class="relative"><div id="жPre"></div>Ж<div id="жUnder"></div><div id="жPost"></div></div></button></td>\
<td colspan="2"></td></tr><tr><td colspan="3"></td>\
<td><button style="color:black" onclick="speakLetter(\'з\')"><div class="relative"><div id="зPre"></div>З<div id="зUnder"></div><div id="зPost"></div></div></button></td>\
<td><button style="color:red" onclick="speakLetter(\'и\')"><div class="relative"><div id="иPre"></div>И<div id="иUnder"></div><div id="иPost"></div></div></button></td>\
<td><button style="color:black" onclick="speakLetter(\'й\')"><div class="relative"><div id="йPre"></div>Й<div id="йUnder"></div><div id="йPost"></div></div></button></td>\
<td colspan="3"></td></tr><tr>\
<td><button style="color:black" onclick="speakLetter(\'к\')"><div class="relative"><div id="кPre"></div>К<div id="кUnder"></div><div id="кPost"></div></div></button></td>\
<td><button style="color:black" onclick="speakLetter(\'л\')"><div class="relative"><div id="лPre"></div>Л<div id="лUnder"></div><div id="лPost"></div></div></button></td>\
<td><button style="color:black" onclick="speakLetter(\'м\')"><div class="relative"><div id="мPre"></div>М<div id="мUnder"></div><div id="мPost"></div></div></button></td>\
<td><button style="color:black" onclick="speakLetter(\'н\')"><div class="relative"><div id="нPre"></div>Н<div id="нUnder"></div><div id="нPost"></div></div></button></td>\
<td><button style="color:red" onclick="speakLetter(\'о\')"><div class="relative"><div id="оPre"></div>О<div id="оUnder"></div><div id="оPost"></div></div></button></td>\
<td><button style="color:black" onclick="speakLetter(\'п\')"><div class="relative"><div id="пPre"></div>П<div id="пUnder"></div><div id="пPost"></div></div></button></td>\
<td><button style="color:black" onclick="speakLetter(\'р\')"><div class="relative"><div id="рPre"></div>Р<div id="рUnder"></div><div id="рPost"></div></div></button></td>\
<td><button style="color:black" onclick="speakLetter(\'с\')"><div class="relative"><div id="сPre"></div>С<div id="сUnder"></div><div id="сPost"></div></div></button></td>\
<td><button style="color:black" onclick="speakLetter(\'т\')"><div class="relative"><div id="тPre"></div>Т<div id="тUnder"></div><div id="тPost"></div></div></button></td>\
</tr><tr>\
<td colspan="9" align="center"><button style="color:red" onclick="speakLetter(\'у\')"><div class="relative"><div id="уPre"></div>У<div id="уUnder"></div><div id="уPost"></div></div></button></td>\
</tr><tr><td></td><td colspan="7" align="center">\
<button style="color:black" onclick="speakLetter(\'ф\')"><div class="relative"><div id="фPre"></div>Ф<div id="фUnder"></div><div id="фPost"></div></div></button>\
<button style="color:black" onclick="speakLetter(\'х\')"><div class="relative"><div id="хPre"></div>Х<div id="хUnder"></div><div id="хPost"></div></div></button>\
<button style="color:black" onclick="speakLetter(\'ц\')"><div class="relative"><div id="цPre"></div>Ц<div id="цUnder"></div><div id="цPost"></div></div></button>\
<button style="color:black" onclick="speakLetter(\'ч\')"><div class="relative"><div id="чPre"></div>Ч<div id="чUnder"></div><div id="чPost"></div></div></button>\
<button style="color:black" onclick="speakLetter(\'ш\')"><div class="relative"><div id="шPre"></div>Ш<div id="шUnder"></div><div id="шPost"></div></div></button>\
<button style="color:black" onclick="speakLetter(\'щ\')"><div class="relative"><div id="щPre"></div>Щ<div id="щUnder"></div><div id="щPost"></div></div></button>\
</td><td></td></tr><tr><td colspan="3"></td>\
<td><button style="color:black" onclick="speakLetter(\'ъ\')"><div class="relative"><div id="ъPre"></div>Ъ<div id="ъUnder"></div><div id="ъPost"></div></div></button></td>\
<td><button style="color:red" onclick="speakLetter(\'ы\')"><div class="relative"><div id="ыPre"></div>Ы<div id="ыUnder"></div><div id="ыPost"></div></div></button></td>\
<td><button style="color:black" onclick="speakLetter(\'ь\')"><div class="relative"><div id="ьPre"></div>Ь<div id="ьUnder"></div><div id="ьPost"></div></div></button></td>\
<td colspan="3"></td></tr><tr><td colspan="3"></td>\
<td><button style="color:red" onclick="speakLetter(\'э\')"><div class="relative"><div id="эPre"></div>Э<div id="эUnder"></div><div id="эPost"></div></div></button></td>\
<td><button style="color:red" onclick="speakLetter(\'ю\')"><div class="relative"><div id="юPre"></div>Ю<div id="юUnder"></div><div id="юPost"></div></div></button></td>\
<td><button style="color:red" onclick="speakLetter(\'я\')"><div class="relative"><div id="яPre"></div>Я<div id="яUnder"></div><div id="яPost"></div></div></button></td>\
<td colspan="3"></td></tr></table>';

// Russian Sound Correspondence
tableAbcd["russian"]["sound"] = {};
tableAbcd["russian"]["sound"]["а"] = [ "а", "д", " ", "б", "б", " ", "рка", "за", "с", "yes, and, duh", "arch", "base", "bass" ];
tableAbcd["russian"]["sound"]["б"] = [ "б", " ", " ", " ", " ", " ", "ыть", "ить", "оты", "ровь", "рат", "to be", "to beat", "boots bots", "brow", "brother" ];
tableAbcd["russian"]["sound"]["в"] = [ "в", " ", " ", " ", "ижу", "ода", "дова", "I see, I visualize", "water", "widow" ];
tableAbcd["russian"]["sound"]["г"] = [ "г", " ", " ", " ", " ", "че", "лаз", "усь", "ад", "рунт", "о", "eye", "goose", "snake", "ground", "(say) wha" ];
tableAbcd["russian"]["sound"]["д"] = [ "д", " ", " ", " ", " ", "ери", "а", "ва", "но", "(do) tear", "yes, and, duh", "two", "bottom" ];
tableAbcd["russian"]["sound"]["е"] = [ "е", " ", " ", "н", " ", "сть", "да", " ", "ль", "is, to eat", "food", "no", "fir" ];
tableAbcd["russian"]["sound"]["ё"] = [ "ё", "л", " ", " ", "н", "ж", "лка", "linen", "hedgehog", "fir" ];
tableAbcd["russian"]["sound"]["ж"] = [ "ж", " ", "ло", " ", "ло", "ля", "ля", "ук", "а", "ид", "ь", "ь", "ка", "bug", "lodge", "jude", "(it's a) lie, lay", "lie (down)", "thigh (leg)" ];
tableAbcd["russian"]["sound"]["з"] = [ "з", " ", "берё", "нать", "а", "knights, to know", "birch" ];
tableAbcd["russian"]["sound"]["и"] = [ "и", " ", " ", " ", "мя", "and", "name" ];
tableAbcd["russian"]["sound"]["й"] = [ "й", " ", " ", "мо", "ог", "од", " ", "yogi", "iodine", "my, wash" ];
tableAbcd["russian"]["sound"]["к"] = [ "к", " ", " ", "от", "лей", "cat", "glue" ];
tableAbcd["russian"]["sound"]["л"] = [ "л", " ", " ", "со", "ба", "ев", "ево", "нце", " ", "lion", "left", "sun", "ball (dance)" ];
tableAbcd["russian"]["sound"]["м"] = [ "м", " ", " ", " ", " ", " ", "ама", "ир", "ного", "ох", "ал", "mama", "world, peace", "much, many", "moss", "small" ];
tableAbcd["russian"]["sound"]["н"] = [ "н", " ", " ", "ли", "с", "во", "во", "ос", "ас", "ия", "ег", " ", "ь", "nose", "us", "(any) line", "snow", "yon, out!", "pong, stench" ];
tableAbcd["russian"]["sound"]["о"] = [ "о", " ", "молок", "х", "б", "дин", " ", "лод", "рода", "one", "milk", "cold", "beard" ];
tableAbcd["russian"]["sound"]["п"] = [ "п", " ", " ", " ", "апа", "лыть", "ламя", "papa", "to fleet", "flame" ];
tableAbcd["russian"]["sound"]["р"] = [ "р", "жа", "зе", " ", "а", "но", "ама", "heat", "corn, grain", "frame" ];
tableAbcd["russian"]["sound"]["с"] = [ "с", " ", " ", " ", " ", " ", " ", "естра", "ын", "кули", "ии", "иди", "ел", "sister", "son", "squeal", "the", "cd, seat", "sat" ];
tableAbcd["russian"]["sound"]["т"] = [ "т", " ", " ", "смер", "от", "ри", "ь", "that", "three, rub", "death" ];
tableAbcd["russian"]["sound"]["у"] = [ "у", " ", " ", "кл", "л", "хо", "ха", "бок", "на", "ear", "fish soup", "clew", "moon" ];
tableAbcd["russian"]["sound"]["ф"] = [ "ф", " ", " ", " ", " ", "ильм", "иле", "ляга", "ляжка", "film (movie)", "fillet", "(big) flask", "(small) flask" ];
tableAbcd["russian"]["sound"]["х"] = [ "х", " ", " ", " ", "леб", "олод", "ек", "hlaf (bread)", "cold", "hake" ];
tableAbcd["russian"]["sound"]["ц"] = [ "ц", " ", " ", " ", "ирк", "ерковь", "ена", "circus", "church", "price" ];
tableAbcd["russian"]["sound"]["ч"] = [ "ч", " ", "по", " ", "ай", "та", "адо", "tea", "post, mail", "child" ];
tableAbcd["russian"]["sound"]["ш"] = [ "ш", " ", " ", " ", " ", "ар", "арм", "арф", "орты", "ball (sphere)", "charm", "scarf", "shorts" ];
tableAbcd["russian"]["sound"]["щ"] = [ "щ", " ", " ", "ека", "ель", "cheek", "slit" ];
tableAbcd["russian"]["sound"]["ъ"] = [ "ъ", "с", "с", "с", "с", "с", "ем", "ешь", "ест", "езд", "ел", "(I) will have eaten", "eat it, (you) will eat it", "(he, she, it) will have eaten", "congress", "have eaten" ];
tableAbcd["russian"]["sound"]["ы"] = [ "ы", "м", "в", "т", " ", " ", " ", "we", "you", "thee" ];
tableAbcd["russian"]["sound"]["ь"] = [ "ь", "л", "ос", "ноч", "ден", "вы", " ", " ", " ", "lions", "axis", "night", "day" ];
tableAbcd["russian"]["sound"]["э"] = [ "э", " ", " ", " ", "то", "хо", "ра", "it", "echo", "era" ];
tableAbcd["russian"]["sound"]["ю"] = [ "ю", "кл", "кр", "тр", "ч", "к", "к", "key", "crook, hook", "trick" ];
tableAbcd["russian"]["sound"]["я"] = [ "я", " ", " ", " ", "вол", " ", "рость", "ркость", " ", " I ", "wrath", "brightness", "will" ];

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
<td><button style="color:green" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">Γ</button></td>\
<td><button style="color:green" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">Δ</button></td>\
</tr><tr>\
<td><button style="color:red" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">Ε</button></td>\
<td><button style="color:green" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">Ζ</button></td>\
<td><button style="color:green" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">Η</button></td>\
<td><button style="color:blue" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">Θ</button></td>\
</tr><tr>\
<td><button style="color:red" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">Ι</button></td>\
<td><button style="color:green" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">Κ</button></td>\
<td><button style="color:green" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">Λ</button></td>\
<td><button style="color:blue" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">Μ</button></td>\
<td><button style="color:green" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">Ν</button></td>\
<td><button style="color:green" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">Ξ</button></td>\
</tr><tr>\
<td><button style="color:red" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">Ο</button></td>\
<td><button style="color:blue" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">Π</button></td>\
<td><button style="color:green" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">Ρ</button></td>\
<td><button style="color:green" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">Σ</button></td>\
<td><button style="color:green" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">Τ</button></td>\
</tr><tr>\
<td><button style="color:red" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">Υ</button></td>\
<td><button style="color:blue" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">Φ</button></td>\
<td><button style="color:green" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">Χ</button></td>\
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
</tr><tr><td></td><td></td>\
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
<td colspan="4"></td>\
<td><button style="color:black" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">د</button></td>\
<td><button style="color:black" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">ج</button></td>\
<td><button style="color:blue" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">ب</button></td>\
<td><button style="color:red" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">ا</button></td>\
</tr><tr><td colspan="3"></td>\
<td><button style="color:black" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">ط</button></td>\
<td><button style="color:black" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">ح</button></td>\
<td><button style="color:black" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">ز</button></td>\
<td><button style="color:red" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">و</button></td>\
<td><button style="color:grey" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">ه</button></td>\
</tr><tr><td colspan="2"></td>\
<td><button style="color:black" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">س</button></td>\
<td><button style="color:black" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">ن</button></td>\
<td><button style="color:blue" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">م</button></td>\
<td><button style="color:black" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">ل</button></td>\
<td><button style="color:black" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">ك</button></td>\
<td><button style="color:red" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">ي</button></td>\
</tr><tr><td></td>\
<td><button style="color:black" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">ت</button></td>\
<td><button style="color:black" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">ش</button></td>\
<td><button style="color:black" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">ر</button></td>\
<td><button style="color:black" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">ق</button></td>\
<td><button style="color:black" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">ص</button></td>\
<td><button style="color:blue" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">ف</button></td>\
<td><button style="color:red" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">ع</button></td>\
</tr><tr>\
<td><button style="color:black" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">غ</button></td>\
<td><button style="color:black" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">ظ</button></td>\
<td><button style="color:black" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">ض</button></td>\
<td><button style="color:black" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">ذ</button></td>\
<td><button style="color:black" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">خ</button></td>\
<td><button style="color:black" onclick="speak(false, \'english,en-uk\', \'a, e, i, o, u\')">ث</button></td>\
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
<td><button style="color:red" onclick="speakLetter(\'ᛅ\')"><div class="relative"><div id="ᛅPre"></div>ᛅ<div id="ᛅUnder"></div><div id="ᛅPost"></div></div></button></td>\
<td><button style="color:black" onclick="speakLetter(\'ᛒ\')"><div class="relative"><div id="ᛒPre"></div>ᛒ<div id="ᛒUnder"></div><div id="ᛒPost"></div></div></button></td>\
<td><button style="color:black" onclick="speakLetter(\'ᚦ\')"><div class="relative"><div id="ᚦPre"></div>ᚦ<div id="ᚦUnder"></div><div id="ᚦPost"></div></div></button></td>\
</tr><tr>\
<td><button style="color:red" onclick="speakLetter(\'ᛁ\')"><div class="relative"><div id="ᛁPre"></div>ᛁ<div id="ᛁUnder"></div><div id="ᛁPost"></div></div></button></td>\
<td><button style="color:black" onclick="speakLetter(\'ᚴ\')"><div class="relative"><div id="ᚴPre"></div>ᚴ<div id="ᚴUnder"></div><div id="ᚴPost"></div></div></button></td>\
<td><button style="color:black" onclick="speakLetter(\'ᛚ\')"><div class="relative"><div id="ᛚPre"></div>ᛚ<div id="ᛚUnder"></div><div id="ᛚPost"></div></div></button></td>\
<td><button style="color:black" onclick="speakLetter(\'ᛘ\')"><div class="relative"><div id="ᛘPre"></div>ᛘ<div id="ᛘUnder"></div><div id="ᛘPost"></div></div></button></td>\
<td><button style="color:black" onclick="speakLetter(\'ᚾ\')"><div class="relative"><div id="ᚾPre"></div>ᚾ<div id="ᚾUnder"></div><div id="ᚾPost"></div></div></button></td>\
</tr><tr>\
<td><button style="color:red" onclick="speakLetter(\'ᚬ\')"><div class="relative"><div id="ᚬPre"></div>ᚬ<div id="ᚬUnder"></div><div id="ᚬPost"></div></div></button></td>\
<td><button style="color:black" onclick="speakLetter(\'ᛦ\')"><div class="relative"><div id="ᛦPre"></div>ᛦ<div id="ᛦUnder"></div><div id="ᛦPost"></div></div></button></td>\
<td><button style="color:black" onclick="speakLetter(\'ᚱ\')"><div class="relative"><div id="ᚱPre"></div>ᚱ<div id="ᚱUnder"></div><div id="ᚱPost"></div></div></button></td>\
<td><button style="color:black" onclick="speakLetter(\'ᛋ\')"><div class="relative"><div id="ᛋPre"></div>ᛋ<div id="ᛋUnder"></div><div id="ᛋPost"></div></div></button></td>\
<td><button style="color:black" onclick="speakLetter(\'ᛏ\')"><div class="relative"><div id="ᛏPre"></div>ᛏ<div id="ᛏUnder"></div><div id="ᛏPost"></div></div></button></td>\
</tr><tr>\
<td><button style="color:red" onclick="speakLetter(\'ᚢ\')"><div class="relative"><div id="ᚢPre"></div>ᚢ<div id="ᚢUnder"></div><div id="ᚢPost"></div></div></button></td>\
<td><button style="color:black" onclick="speakLetter(\'ᚠ\')"><div class="relative"><div id="ᚠPre"></div>ᚠ<div id="ᚠUnder"></div><div id="ᚠPost"></div></div></button></td>\
<td><button style="color:black" onclick="speakLetter(\'ᚼ\')"><div class="relative"><div id="ᚼPre"></div>ᚼ<div id="ᚼUnder"></div><div id="ᚼPost"></div></div></button></td>\
</tr><tr>\
</tr></table>';

// Runes Axial Table
tableAbcd["runes"]["axial"] = '<tr>\
<td colspan="5" align="center"><button style="color:red" onclick="speakLetter(\'ᛅ\')"><div class="relative"><div id="ᛅPre"></div>ᛅ<div id="ᛅUnder"></div><div id="ᛅPost"></div></div></button></td>\
</tr><tr>\
<td><button style="color:black" onclick="speakLetter(\'ᛒ\')"><div class="relative"><div id="ᛒPre"></div>ᛒ<div id="ᛒUnder"></div><div id="ᛒPost"></div></div></button></td>\
<td><button style="color:black" onclick="speakLetter(\'ᚦ\')"><div class="relative"><div id="ᚦPre"></div>ᚦ<div id="ᚦUnder"></div><div id="ᚦPost"></div></div></button></td>\
<td><button style="color:red" onclick="speakLetter(\'ᛁ\')"><div class="relative"><div id="ᛁPre"></div>ᛁ<div id="ᛁUnder"></div><div id="ᛁPost"></div></div></button></td>\
<td><button style="color:black" onclick="speakLetter(\'ᚴ\')"><div class="relative"><div id="ᚴPre"></div>ᚴ<div id="ᚴUnder"></div><div id="ᚴPost"></div></div></button></td>\
<td><button style="color:black" onclick="speakLetter(\'ᛚ\')"><div class="relative"><div id="ᛚPre"></div>ᛚ<div id="ᛚUnder"></div><div id="ᛚPost"></div></div></button></td>\
</tr><tr>\
<td><button style="color:black" onclick="speakLetter(\'ᛘ\')"><div class="relative"><div id="ᛘPre"></div>ᛘ<div id="ᛘUnder"></div><div id="ᛘPost"></div></div></button></td>\
<td><button style="color:black" onclick="speakLetter(\'ᚾ\')"><div class="relative"><div id="ᚾPre"></div>ᚾ<div id="ᚾUnder"></div><div id="ᚾPost"></div></div></button></td>\
<td><button style="color:red" onclick="speakLetter(\'ᚬ\')"><div class="relative"><div id="ᚬPre"></div>ᚬ<div id="ᚬUnder"></div><div id="ᚬPost"></div></div></button></td>\
<td><button style="color:black" onclick="speakLetter(\'ᛦ\')"><div class="relative"><div id="ᛦPre"></div>ᛦ<div id="ᛦUnder"></div><div id="ᛦPost"></div></div></button></td>\
<td><button style="color:black" onclick="speakLetter(\'ᚱ\')"><div class="relative"><div id="ᚱPre"></div>ᚱ<div id="ᚱUnder"></div><div id="ᚱPost"></div></div></button></td>\
</tr><tr>\
<td><button style="color:black" onclick="speakLetter(\'ᛋ\')"><div class="relative"><div id="ᛋPre"></div>ᛋ<div id="ᛋUnder"></div><div id="ᛋPost"></div></div></button></td>\
<td><button style="color:black" onclick="speakLetter(\'ᛏ\')"><div class="relative"><div id="ᛏPre"></div>ᛏ<div id="ᛏUnder"></div><div id="ᛏPost"></div></div></button></td>\
<td><button style="color:red" onclick="speakLetter(\'ᚢ\')"><div class="relative"><div id="ᚢPre"></div>ᚢ<div id="ᚢUnder"></div><div id="ᚢPost"></div></div></button></td>\
<td><button style="color:black" onclick="speakLetter(\'ᚠ\')"><div class="relative"><div id="ᚠPre"></div>ᚠ<div id="ᚠUnder"></div><div id="ᚠPost"></div></div></button></td>\
<td><button style="color:black" onclick="speakLetter(\'ᚼ\')"><div class="relative"><div id="ᚼPre"></div>ᚼ<div id="ᚼUnder"></div><div id="ᚼPost"></div></div></button></td>\
</tr></table>';

// Runesx Sound Correspondence
tableAbcd["runes"]["sound"] = {};
tableAbcd["runes"]["sound"]["ᛅ"] = [ "ᛅ", " ", "ᚱ", "ar (year, oar)" ];
tableAbcd["runes"]["sound"]["ᛒ"] = [ "ᛒ", " ", "ᛦᚬᚱᚴ", "björk (birch)" ];
tableAbcd["runes"]["sound"]["ᚦ"] = [ "ᚦ", " ", "ᚬᚱᚾ", "thorn (thorn, thor)" ];
tableAbcd["runes"]["sound"]["ᛁ"] = [ "ᛁ", " ", "ᛋ", "is (ice)" ];
tableAbcd["runes"]["sound"]["ᚴ"] = [ "ᚴ", " ", "ᚢᚾᚦ", "kynd (heat)" ];
tableAbcd["runes"]["sound"]["ᛚ"] = [ "ᛚ", " ", "ᚬᚴᚱ", "lögr (liquid)" ];
tableAbcd["runes"]["sound"]["ᛘ"] = [ "ᛘ", " ", "ᛅᚦᚱ", "mathr (man)" ];
tableAbcd["runes"]["sound"]["ᚾ"] = [ "ᚾ", " ", "ᛦᚬᛏᛅ", "njota (enjoy)" ];
tableAbcd["runes"]["sound"]["ᚬ"] = [ "ᚬ", " ", " ", "ᚴ", "ᚴᛋᚢᛚ", "ok (and)", "öxull (axis, axle)" ];
tableAbcd["runes"]["sound"]["ᛦ"] = [ "ᛦ", " ", "ᚢ", "yew (yew)" ];
tableAbcd["runes"]["sound"]["ᚱ"] = [ "ᚱ", " ", "ᛁᚦᛅ", "riða (ride)" ];
tableAbcd["runes"]["sound"]["ᛋ"] = [ "ᛋ", " ", "ᚬᛚ", "sól (sun)" ];
tableAbcd["runes"]["sound"]["ᛏ"] = [ "ᛏ", " ", "ᚢᚱ", "týr (tyr)" ];
tableAbcd["runes"]["sound"]["ᚢ"] = [ "ᚢ", " ", "ᚱ", "úr (from)" ];
tableAbcd["runes"]["sound"]["ᚠ"] = [ "ᚠ", " ", "ᛁ", "fé (funds)" ];
tableAbcd["runes"]["sound"]["ᚼ"] = [ "ᚼ", " ", "ᛅᚴᛚ", "hagl (hail)" ];

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

// HTML table formating

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
<tr><td><button class="controlButton" onclick="makeAeiou(\'runes\', layout, \'runes\')"><font style="font-family: \'Noto Sans Runic\', sans-serif;">ᛅᛒᚦᛁ</font></button></td></tr>\
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

// Functions

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

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
            result += '<a href="https://en.wikipedia.org/wiki/Younger_Futhark" target="_blank">younger futhark</a>';
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

function speakLetter(letter) {
    if (lastSpoken["symbol"] == letter) { lastSpoken["count"]++;
        if (lastSpoken["count"] > (tableAbcd[language]["sound"][letter].length / 3)) lastSpoken["count"] = 1 ;
    } else { lastSpoken["count"] = 1 }
    lastSpoken["symbol"] = letter;

    var audio = new Audio();
    file = 'sounds/'+ language + '/' + letter + '_' + lastSpoken["count"] + '.mp3';
    audio.src = file;
    audio.autoplay = true;

    switch(lastSpoken["count"]) {
        case lastSpoken["count"]:
            if (font == "enhandwritten" || font == "enlowerhand" || font == "ruhandwritten" || font == "rulowerhand" ) textstroke = 0;
                else if (language == "runes") textstroke = 1;
                    else textstroke = 2;
            document.getElementById(letter + "Pre").innerHTML = '<div style="position: absolute; text-transform: lowercase; left: -' + (((tableAbcd[language]["sound"][letter][lastSpoken["count"]].length - 1) * 15) + 5) + 'px; top: 0px; font-weight: 900; color: gray; -webkit-text-fill-color: gray; -webkit-text-stroke-width: ' + textstroke + 'px; -webkit-text-stroke-color: white; z-index: 10;">' + tableAbcd[language]["sound"][letter][lastSpoken["count"]] + '</div>';
            document.getElementById(letter + "Post").innerHTML = '<div style="position: absolute; text-transform: lowercase; left: 30px; top: 0px; font-weight: 900; color: gray; -webkit-text-fill-color: gray; -webkit-text-stroke-width: ' + textstroke + 'px; -webkit-text-stroke-color: white; z-index: 10;">' + ( tableAbcd[language]["sound"][letter][lastSpoken["count"] + ((tableAbcd[language]["sound"][letter].length - 1) / 3)] ) + '</div>';
            if (tableAbcd[language]["sound"][letter][lastSpoken["count"] + ((tableAbcd[language]["sound"][letter].length - 1) / 3) * 2].length > 1) {
                var bracketLeft = "(";
                var bracketRight = ")";
                var underLeft = ( tableAbcd[language]["sound"][letter][lastSpoken["count"] + ((tableAbcd[language]["sound"][letter].length - 1) / 3) * 2].length ) * -2;
                if (textstroke == 0) var underText = ""; else var underText = "-webkit-text-stroke-width: 1px; -webkit-text-stroke-color: white;";
                document.getElementById(letter + "Under").innerHTML = '<div style="position: absolute; white-space: nowrap; font-size: 16px; text-transform: none; left: ' + underLeft + 'px; top: 30px; font-weight: 900; color: gray; ' + underText + ' z-index: 10;">' + bracketLeft + ( tableAbcd[language]["sound"][letter][lastSpoken["count"] + ((tableAbcd[language]["sound"][letter].length - 1) / 3) * 2] ) + bracketRight + '</div>';
            }
            sleep(500 + ((tableAbcd[language]["sound"][letter][lastSpoken["count"]].length + tableAbcd[language]["sound"][letter][lastSpoken["count"] + ((tableAbcd[language]["sound"][letter].length - 1) / 3)].length + 1) * 100)).then(() => {
                document.getElementById(letter + "Pre").innerHTML = "";
                document.getElementById(letter + "Post").innerHTML = "";
                document.getElementById(letter + "Under").innerHTML = "";
            });
            break;
    }
}

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
    lastSpoken["symbol"] = textToSpeak;
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
