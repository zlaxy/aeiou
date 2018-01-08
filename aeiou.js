// Global vars

var alphabetos = 'english';
var layout = 'linear';
var font = 'default';
var variant = 'default';

var lastSpoken = {};
lastSpoken["symbol"] = "";
lastSpoken["count"] = 0;

var tableAbcd = {};
tableAbcd["english"] = {};
tableAbcd["russian"] = {};
tableAbcd["russian-bulgarian"] = {};
tableAbcd["hebrew"] = {};
tableAbcd["greek"] = {};
tableAbcd["georgian"] = {};
tableAbcd["abjadi"] = {};
tableAbcd["runes"] = {};
tableAbcd["runes-bornholm"] = {};
tableAbcd["ugaritic"] = {};

// English Linear Table
tableAbcd["english"]["linear"] = '<tr>\
<td><button style="color:red" onclick="showLetter(\'a\'); new Audio(\'sounds/english/a_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="aPre"></div><div id="aLetter">A</div><div id="aUnder"></div><div id="aPost"></div></div></button></td>\
<td><button style="color:blue" onclick="showLetter(\'b\'); new Audio(\'sounds/english/b_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="bPre"></div><div id="bLetter">B</div><div id="bUnder"></div><div id="bPost"></div></div></button></td>\
<td><button style="color:black" onclick="showLetter(\'c\'); new Audio(\'sounds/english/c_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="cPre"></div><div id="cLetter">C</div><div id="cUnder"></div><div id="cPost"></div></div></button></td>\
<td><button style="color:black" onclick="showLetter(\'d\'); new Audio(\'sounds/english/d_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="dPre"></div><div id="dLetter">D</div><div id="dUnder"></div><div id="dPost"></div></div></button></td>\
<td></td><td></td></tr><tr>\
<td><button style="color:red" onclick="showLetter(\'e\'); new Audio(\'sounds/english/e_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="ePre"></div><div id="eLetter">E</div><div id="eUnder"></div><div id="ePost"></div></div></button></td>\
<td><button style="color:blue" onclick="showLetter(\'f\'); new Audio(\'sounds/english/f_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="fPre"></div><div id="fLetter">F</div><div id="fUnder"></div><div id="fPost"></div></div></button></td>\
<td><button style="color:black" onclick="showLetter(\'g\'); new Audio(\'sounds/english/g_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="gPre"></div><div id="gLetter">G</div><div id="gUnder"></div><div id="gPost"></div></div></button></td>\
<td><button style="color:black" onclick="showLetter(\'h\'); new Audio(\'sounds/english/h_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="hPre"></div><div id="hLetter">H</div><div id="hUnder"></div><div id="hPost"></div></div></button></td>\
</tr><tr>\
<td><button style="color:red" onclick="showLetter(\'i\'); new Audio(\'sounds/english/i_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="iPre"></div><div id="iLetter">I</div><div id="iUnder"></div><div id="iPost"></div></div></button></td>\
<td><button style="color:black" onclick="showLetter(\'j\'); new Audio(\'sounds/english/j_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="jPre"></div><div id="jLetter">J</div><div id="jUnder"></div><div id="jPost"></div></div></button></td>\
<td><button style="color:black" onclick="showLetter(\'k\'); new Audio(\'sounds/english/k_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="kPre"></div><div id="kLetter">K</div><div id="kUnder"></div><div id="kPost"></div></div></button></td>\
<td><button style="color:black" onclick="showLetter(\'l\'); new Audio(\'sounds/english/l_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="lPre"></div><div id="lLetter">L</div><div id="lUnder"></div><div id="lPost"></div></div></button></td>\
<td><button style="color:blue" onclick="showLetter(\'m\'); new Audio(\'sounds/english/m_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="mPre"></div><div id="mLetter">M</div><div id="mUnder"></div><div id="mPost"></div></div></button></td>\
<td><button style="color:black" onclick="showLetter(\'n\'); new Audio(\'sounds/english/n_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="nPre"></div><div id="nLetter">N</div><div id="nUnder"></div><div id="nPost"></div></div></button></td>\
</tr><tr>\
<td><button style="color:red" onclick="showLetter(\'o\'); new Audio(\'sounds/english/o_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="oPre"></div><div id="oLetter">O</div><div id="oUnder"></div><div id="oPost"></div></div></button></td>\
<td><button style="color:blue" onclick="showLetter(\'p\'); new Audio(\'sounds/english/p_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="pPre"></div><div id="pLetter">P</div><div id="pUnder"></div><div id="pPost"></div></div></button></td>\
<td><button style="color:black" onclick="showLetter(\'q\'); new Audio(\'sounds/english/q_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="qPre"></div><div id="qLetter">Q</div><div id="qUnder"></div><div id="qPost"></div></div></button></td>\
<td><button style="color:black" onclick="showLetter(\'r\'); new Audio(\'sounds/english/r_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="rPre"></div><div id="rLetter">R</div><div id="rUnder"></div><div id="rPost"></div></div></button></td>\
<td><button style="color:black" onclick="showLetter(\'s\'); new Audio(\'sounds/english/s_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="sPre"></div><div id="sLetter">S</div><div id="sUnder"></div><div id="sPost"></div></div></button></td>\
<td><button style="color:black" onclick="showLetter(\'t\'); new Audio(\'sounds/english/t_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="tPre"></div><div id="tLetter">T</div><div id="tUnder"></div><div id="tPost"></div></div></button></td>\
</tr><tr>\
<td><button style="color:red" onclick="showLetter(\'u\'); new Audio(\'sounds/english/u_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="uPre"></div><div id="uLetter">U</div><div id="uUnder"></div><div id="uPost"></div></div></button></td>\
<td><button style="color:blue" onclick="showLetter(\'v\'); new Audio(\'sounds/english/v_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="vPre"></div><div id="vLetter">V</div><div id="vUnder"></div><div id="vPost"></div></div></button></td>\
<td><button style="color:blue" onclick="showLetter(\'w\'); new Audio(\'sounds/english/w_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="wPre"></div><div id="wLetter">W</div><div id="wUnder"></div><div id="wPost"></div></div></button></td>\
<td><button style="color:black" onclick="showLetter(\'x\'); new Audio(\'sounds/english/x_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="xPre"></div><div id="xLetter">X</div><div id="xUnder"></div><div id="xPost"></div></div></button></td>\
<td><button style="color:red" onclick="showLetter(\'y\'); new Audio(\'sounds/english/y_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="yPre"></div><div id="yLetter">Y</div><div id="yUnder"></div><div id="yPost"></div></div></button></td>\
<td><button style="color:black" onclick="showLetter(\'z\'); new Audio(\'sounds/english/z_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="zPre"></div><div id="zLetter">Z</div><div id="zUnder"></div><div id="zPost"></div></div></button></td>\
</tr></table>';

// English Axial Table
tableAbcd["english"]["axial"] = '<tr>\
<td colspan="7" align="center"><button style="color:red" onclick="showLetter(\'a\'); new Audio(\'sounds/english/a_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="aPre"></div><div id="aLetter">A</div><div id="aUnder"></div><div id="aPost"></div></div></button></td>\
</tr><tr><td colspan="2"></td><td colspan="3" align="center">\
<button style="color:black" onclick="showLetter(\'b\'); new Audio(\'sounds/english/b_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="bPre"></div><div id="bLetter">B</div><div id="bUnder"></div><div id="bPost"></div></div></button>\
<button style="color:black" onclick="showLetter(\'c\'); new Audio(\'sounds/english/c_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="cPre"></div><div id="cLetter">C</div><div id="cUnder"></div><div id="cPost"></div></div></button>\
</td><td colspan="2"></td></tr><tr><td colspan="2"></td>\
<td><button style="color:black" onclick="showLetter(\'d\'); new Audio(\'sounds/english/d_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="dPre"></div><div id="dLetter">D</div><div id="dUnder"></div><div id="dPost"></div></div></button></td>\
<td><button style="color:red" onclick="showLetter(\'e\'); new Audio(\'sounds/english/e_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="ePre"></div><div id="eLetter">E</div><div id="eUnder"></div><div id="ePost"></div></div></button></td>\
<td><button style="color:black" onclick="showLetter(\'f\'); new Audio(\'sounds/english/f_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="fPre"></div><div id="fLetter">F</div><div id="fUnder"></div><div id="fPost"></div></div></button></td>\
<td colspan="2"></td></tr><tr>\
<td></td><td><button style="color:black" onclick="showLetter(\'g\'); new Audio(\'sounds/english/g_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="gPre"></div><div id="gLetter">G</div><div id="gUnder"></div><div id="gPost"></div></div></button></td>\
<td><button style="color:black" onclick="showLetter(\'h\'); new Audio(\'sounds/english/h_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="hPre"></div><div id="hLetter">H</div><div id="hUnder"></div><div id="hPost"></div></div></button></td>\
<td><button style="color:red" onclick="showLetter(\'i\'); new Audio(\'sounds/english/i_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="iPre"></div><div id="iLetter">I</div><div id="iUnder"></div><div id="iPost"></div></div></button></td>\
<td><button style="color:black" onclick="showLetter(\'j\'); new Audio(\'sounds/english/j_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="jPre"></div><div id="jLetter">J</div><div id="jUnder"></div><div id="jPost"></div></div></button></td>\
<td><button style="color:black" onclick="showLetter(\'k\'); new Audio(\'sounds/english/k_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="kPre"></div><div id="kLetter">K</div><div id="kUnder"></div><div id="kPost"></div></div></button></td>\
<td></td></tr><tr>\
<td><button style="color:black" onclick="showLetter(\'l\'); new Audio(\'sounds/english/l_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="lPre"></div><div id="lLetter">L</div><div id="lUnder"></div><div id="lPost"></div></div></button></td>\
<td><button style="color:black" onclick="showLetter(\'m\'); new Audio(\'sounds/english/m_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="mPre"></div><div id="mLetter">M</div><div id="mUnder"></div><div id="mPost"></div></div></button></td>\
<td><button style="color:black" onclick="showLetter(\'n\'); new Audio(\'sounds/english/n_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="nPre"></div><div id="nLetter">N</div><div id="nUnder"></div><div id="nPost"></div></div></button></td>\
<td><button style="color:red" onclick="showLetter(\'o\'); new Audio(\'sounds/english/o_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="oPre"></div><div id="oLetter">O</div><div id="oUnder"></div><div id="oPost"></div></div></button></td>\
<td><button style="color:black" onclick="showLetter(\'p\'); new Audio(\'sounds/english/p_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="pPre"></div><div id="pLetter">P</div><div id="pUnder"></div><div id="pPost"></div></div></button></td>\
<td><button style="color:black" onclick="showLetter(\'q\'); new Audio(\'sounds/english/q_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="qPre"></div><div id="qLetter">Q</div><div id="qUnder"></div><div id="qPost"></div></div></button></td>\
<td><button style="color:black" onclick="showLetter(\'r\'); new Audio(\'sounds/english/r_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="rPre"></div><div id="rLetter">R</div><div id="rUnder"></div><div id="rPost"></div></div></button></td>\
</tr><tr>\
<td></td><td><button style="color:black" onclick="showLetter(\'s\'); new Audio(\'sounds/english/s_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="sPre"></div><div id="sLetter">S</div><div id="sUnder"></div><div id="sPost"></div></div></button></td>\
<td><button style="color:black" onclick="showLetter(\'t\'); new Audio(\'sounds/english/t_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="tPre"></div><div id="tLetter">T</div><div id="tUnder"></div><div id="tPost"></div></div></button></td>\
<td><button style="color:red" onclick="showLetter(\'u\'); new Audio(\'sounds/english/u_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="uPre"></div><div id="uLetter">U</div><div id="uUnder"></div><div id="uPost"></div></div></button></td>\
<td><button style="color:black" onclick="showLetter(\'v\'); new Audio(\'sounds/english/v_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="vPre"></div><div id="vLetter">V</div><div id="vUnder"></div><div id="vPost"></div></div></button></td>\
<td><button style="color:black" onclick="showLetter(\'w\'); new Audio(\'sounds/english/w_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="wPre"></div><div id="wLetter">W</div><div id="wUnder"></div><div id="wPost"></div></div></button></td>\
<td></td></tr><tr><td colspan="2"></td>\
<td><button style="color:black" onclick="showLetter(\'x\'); new Audio(\'sounds/english/x_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="xPre"></div><div id="xLetter">X</div><div id="xUnder"></div><div id="xPost"></div></div></button></td>\
<td><button style="color:red" onclick="showLetter(\'y\'); new Audio(\'sounds/english/y_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="yPre"></div><div id="yLetter">Y</div><div id="yUnder"></div><div id="yPost"></div></div></button></td>\
<td><button style="color:black" onclick="showLetter(\'z\'); new Audio(\'sounds/english/z_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="zPre"></div><div id="zLetter">Z</div><div id="zUnder"></div><div id="zPost"></div></div></button></td>\
</tr></table>';

// English Sound Correspondence
tableAbcd["english"]["sound"] = {};
tableAbcd["english"]["sound"]["a"] = [ "a", "a", "a", "a", "c", " ", "c", "c", "t", "pe", "r", "ll", "", "", "", "" ];
tableAbcd["english"]["sound"]["b"] = [ "b", "b", "b", " ", "la", "lam", "ee", " ", " ", "", "", "" ];
tableAbcd["english"]["sound"]["c"] = [ "c", "c", "c", " ", " ", " ", "ity", "at", "hip", "", "", "" ];
tableAbcd["english"]["sound"]["d"] = [ "d", "d", " ", " ", "o", "eep", "", "" ];
tableAbcd["english"]["sound"]["e"] = [ "e", "e", "e", "e", "e", "e", "e", "e", "e", "b", "b", "s", "s", "sw", "sw", "hom", "d", "d", " ", "t", "e", "a", "et", "at", " ", "ar", "al", "", "", "", "", "", "", "", "", "" ];
tableAbcd["english"]["sound"]["f"] = [ "f", "f", " ", " ", "eel", "ly", "", "" ];
tableAbcd["english"]["sound"]["g"] = [ "g", "g", "g", " ", " ", "bri", "ood", "ene", "ht", "", "", "" ];
tableAbcd["english"]["sound"]["h"] = [ "h", "h", " ", " ", "igh", "ot", "", "" ];
tableAbcd["english"]["sound"]["i"] = [ "i", "i", "b", "b", "t", "te", "", "" ];
tableAbcd["english"]["sound"]["j"] = [ "j", " ", "oy", "" ];
tableAbcd["english"]["sound"]["k"] = [ "k", "k", " ", " ", "id", "night", "", "" ];
tableAbcd["english"]["sound"]["l"] = [ "l", "l", "l", " ", " ", "he", "ive", "ive", "lo", "", "", "" ];
tableAbcd["english"]["sound"]["m"] = [ "m", "m", " ", " ", "ama", "e", "", "" ];
tableAbcd["english"]["sound"]["n"] = [ "n", "n", "n", " ", " ", "k", "ew", "o", "ow", "", "", "" ];
tableAbcd["english"]["sound"]["o"] = [ "o", "o", "o", "o", "o", "d", "d", "g", "h", "d", "g", " ", "od", "me", "me", "", "", "", "", "" ];
tableAbcd["english"]["sound"]["p"] = [ "p", "p", "p", " ", " ", " ", "ut", "ick", "hone", "", "", "" ];
tableAbcd["english"]["sound"]["q"] = [ "q", "q", "q", " ", " ", " ", "ueen", "uit", "uick", "", "", "" ];
tableAbcd["english"]["sound"]["r"] = [ "r", "r", " ", "a", "ock", "c", "", "" ];
tableAbcd["english"]["sound"]["s"] = [ "s", "s", "s", "s", " ", " ", " ", " ", "aw", "ow", "ee", "he", "", "", "", "" ];
tableAbcd["english"]["sound"]["t"] = [ "t", "t", "t", " ", " ", " ", "ake", "ip", "his", "", "", "" ];
tableAbcd["english"]["sound"]["u"] = [ "u", "u", " ", "b", "se", "s", "", "" ];
tableAbcd["english"]["sound"]["v"] = [ "v", "v", " ", "lo", "ow", "e", "", "" ];
tableAbcd["english"]["sound"]["w"] = [ "w", "w", "w", "w", " ", " ", "ho", "ne", "hat", "ho", " ", " ", "", "", "", "" ];
tableAbcd["english"]["sound"]["x"] = [ "x", "x", "e", " ", " ", "enos", "", "" ];
tableAbcd["english"]["sound"]["y"] = [ "y", "y", "y", "y", "y", "y", " ", "jo", "e", "wh", "ver", "var", "ou", " ", "e", " ", " ", " ", "", "", "", "", "", "" ];
tableAbcd["english"]["sound"]["z"] = [ "z", "z", " ", "wi", "ip", " ", "", "" ];

// Russian Linear Table
tableAbcd["russian"]["linear"] = '<tr>\
<td><button style="color:red" onclick="showLetter(\'а\'); new Audio(\'sounds/russian/а_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="аPre"></div><div id="аLetter">А</div><div id="аUnder"></div><div id="аPost"></div></div></button></td>\
<td><button style="color:blue" onclick="showLetter(\'б\'); new Audio(\'sounds/russian/б_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="бPre"></div><div id="бLetter">Б</div><div id="бUnder"></div><div id="бPost"></div></div></button></td>\
<td><button style="color:blue" onclick="showLetter(\'в\'); new Audio(\'sounds/russian/в_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="вPre"></div><div id="вLetter">В</div><div id="вUnder"></div><div id="вPost"></div></div></button></td>\
<td><button style="color:black" onclick="showLetter(\'г\'); new Audio(\'sounds/russian/г_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="гPre"></div><div id="гLetter">Г</div><div id="гUnder"></div><div id="гPost"></div></div></button></td>\
<td><button style="color:black" onclick="showLetter(\'д\'); new Audio(\'sounds/russian/д_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="дPre"></div><div id="дLetter">Д</div><div id="дUnder"></div><div id="дPost"></div></div></button></td>\
</tr><tr>\
<td><button style="color:red" onclick="showLetter(\'е\'); new Audio(\'sounds/russian/е_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="еPre"></div><div id="еLetter">Е</div><div id="еUnder"></div><div id="еPost"></div></div></button></td>\
<td><button style="color:red" onclick="showLetter(\'ё\'); new Audio(\'sounds/russian/ё_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="ёPre"></div><div id="ёLetter">Ё</div><div id="ёUnder"></div><div id="ёPost"></div></div></button></td>\
<td><button style="color:black" onclick="showLetter(\'ж\'); new Audio(\'sounds/russian/ж_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="жPre"></div><div id="жLetter">Ж</div><div id="жUnder"></div><div id="жPost"></div></div></button></td>\
<td><button style="color:black" onclick="showLetter(\'з\'); new Audio(\'sounds/russian/з_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="зPre"></div><div id="зLetter">З</div><div id="зUnder"></div><div id="зPost"></div></div></button></td>\
</tr><tr>\
<td><button style="color:red" onclick="showLetter(\'и\'); new Audio(\'sounds/russian/и_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="иPre"></div><div id="иLetter">И</div><div id="иUnder"></div><div id="иPost"></div></div></button></td>\
<td><button style="color:black" onclick="showLetter(\'й\'); new Audio(\'sounds/russian/й_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="йPre"></div><div id="йLetter">Й</div><div id="йUnder"></div><div id="йPost"></div></div></button></td>\
<td><button style="color:black" onclick="showLetter(\'к\'); new Audio(\'sounds/russian/к_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="кPre"></div><div id="кLetter">К</div><div id="кUnder"></div><div id="кPost"></div></div></button></td>\
<td><button style="color:black" onclick="showLetter(\'л\'); new Audio(\'sounds/russian/л_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="лPre"></div><div id="лLetter">Л</div><div id="лUnder"></div><div id="лPost"></div></div></button></td>\
<td><button style="color:blue" onclick="showLetter(\'м\'); new Audio(\'sounds/russian/м_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="мPre"></div><div id="мLetter">М</div><div id="мUnder"></div><div id="мPost"></div></div></button></td>\
<td><button style="color:black" onclick="showLetter(\'н\'); new Audio(\'sounds/russian/н_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="нPre"></div><div id="нLetter">Н</div><div id="нUnder"></div><div id="нPost"></div></div></button></td>\
</tr><tr>\
<td><button style="color:red" onclick="showLetter(\'о\'); new Audio(\'sounds/russian/о_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="оPre"></div><div id="оLetter">О</div><div id="оUnder"></div><div id="оPost"></div></div></button></td>\
<td><button style="color:blue" onclick="showLetter(\'п\'); new Audio(\'sounds/russian/п_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="пPre"></div><div id="пLetter">П</div><div id="пUnder"></div><div id="пPost"></div></div></button></td>\
<td><button style="color:black" onclick="showLetter(\'р\'); new Audio(\'sounds/russian/р_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="рPre"></div><div id="рLetter">Р</div><div id="рUnder"></div><div id="рPost"></div></div></button></td>\
<td><button style="color:black" onclick="showLetter(\'с\'); new Audio(\'sounds/russian/с_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="сPre"></div><div id="сLetter">С</div><div id="сUnder"></div><div id="сPost"></div></div></button></td>\
<td><button style="color:black" onclick="showLetter(\'т\'); new Audio(\'sounds/russian/т_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="тPre"></div><div id="тLetter">Т</div><div id="тUnder"></div><div id="тPost"></div></div></button></td>\
</tr><tr>\
<td><button style="color:red" onclick="showLetter(\'у\'); new Audio(\'sounds/russian/у_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="уPre"></div><div id="уLetter">У</div><div id="уUnder"></div><div id="уPost"></div></div></button></td>\
<td><button style="color:blue" onclick="showLetter(\'ф\'); new Audio(\'sounds/russian/ф_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="фPre"></div><div id="фLetter">Ф</div><div id="фUnder"></div><div id="фPost"></div></div></button></td>\
<td><button style="color:black" onclick="showLetter(\'х\'); new Audio(\'sounds/russian/х_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="хPre"></div><div id="хLetter">Х</div><div id="хUnder"></div><div id="хPost"></div></div></button></td>\
<td><button style="color:black" onclick="showLetter(\'ц\'); new Audio(\'sounds/russian/ц_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="цPre"></div><div id="цLetter">Ц</div><div id="цUnder"></div><div id="цPost"></div></div></button></td>\
<td><button style="color:black" onclick="showLetter(\'ч\'); new Audio(\'sounds/russian/ч_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="чPre"></div><div id="чLetter">Ч</div><div id="чUnder"></div><div id="чPost"></div></div></button></td>\
<td><button style="color:black" onclick="showLetter(\'ш\'); new Audio(\'sounds/russian/ш_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="шPre"></div><div id="шLetter">Ш</div><div id="шUnder"></div><div id="шPost"></div></div></button></td>\
<td><button style="color:black" onclick="showLetter(\'щ\'); new Audio(\'sounds/russian/щ_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="щPre"></div><div id="щLetter">Щ</div><div id="щUnder"></div><div id="щPost"></div></div></button></td>\
</tr><tr>\
<td><button style="color:grey" onclick="showLetter(\'ъ\'); new Audio(\'sounds/russian/ъ_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="ъPre"></div><div id="ъLetter">Ъ</div><div id="ъUnder"></div><div id="ъPost"></div></div></button></td>\
<td><button style="color:red" onclick="showLetter(\'ы\'); new Audio(\'sounds/russian/ы_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="ыPre"></div><div id="ыLetter">Ы</div><div id="ыUnder"></div><div id="ыPost"></div></div></button></td>\
<td><button style="color:grey" onclick="showLetter(\'ь\'); new Audio(\'sounds/russian/ь_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="ьPre"></div><div id="ьLetter">Ь</div><div id="ьUnder"></div><div id="ьPost"></div></div></button></td>\
<td><button style="color:red" onclick="showLetter(\'э\'); new Audio(\'sounds/russian/э_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="эPre"></div><div id="эLetter">Э</div><div id="эUnder"></div><div id="эPost"></div></div></button></td>\
<td><button style="color:red" onclick="showLetter(\'ю\'); new Audio(\'sounds/russian/ю_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="юPre"></div><div id="юLetter">Ю</div><div id="юUnder"></div><div id="юPost"></div></div></button></td>\
<td><button style="color:red" onclick="showLetter(\'я\'); new Audio(\'sounds/russian/я_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="яPre"></div><div id="яLetter">Я</div><div id="яUnder"></div><div id="яPost"></div></div></button></td>\
</tr></table>';

// Russian Axial Table
tableAbcd["russian"]["axial"] = '<tr>\
<td colspan="9" align="center"><button style="color:red" onclick="showLetter(\'а\'); new Audio(\'sounds/russian/а_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="аPre"></div><div id="аLetter">А</div><div id="аUnder"></div><div id="аPost"></div></div></button></td>\
</tr><tr><td colspan="3"></td><td colspan="3" align="center">\
<button style="color:black" onclick="showLetter(\'б\'); new Audio(\'sounds/russian/б_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="бPre"></div><div id="бLetter">Б</div><div id="бUnder"></div><div id="бPost"></div></div></button>\
<button style="color:black" onclick="showLetter(\'в\'); new Audio(\'sounds/russian/в_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="вPre"></div><div id="вLetter">В</div><div id="вUnder"></div><div id="вPost"></div></div></button>\
</td><td colspan="3"></td></tr><tr><td colspan="2"></td>\
<td><button style="color:black" onclick="showLetter(\'г\'); new Audio(\'sounds/russian/г_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="гPre"></div><div id="гLetter">Г</div><div id="гUnder"></div><div id="гPost"></div></div></button></td>\
<td><button style="color:black" onclick="showLetter(\'д\'); new Audio(\'sounds/russian/д_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="дPre"></div><div id="дLetter">Д</div><div id="дUnder"></div><div id="дPost"></div></div></button></td>\
<td><button style="color:red" onclick="showLetter(\'е\'); new Audio(\'sounds/russian/е_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="еPre"></div><div id="еLetter">Е</div><div id="еUnder"></div><div id="еPost"></div></div></button></td>\
<td><button style="color:red" onclick="showLetter(\'ё\'); new Audio(\'sounds/russian/ё_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="ёPre"></div><div id="ёLetter">Ё</div><div id="ёUnder"></div><div id="ёPost"></div></div></button></td>\
<td><button style="color:black" onclick="showLetter(\'ж\'); new Audio(\'sounds/russian/ж_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="жPre"></div><div id="жLetter">Ж</div><div id="жUnder"></div><div id="жPost"></div></div></button></td>\
<td colspan="2"></td></tr><tr><td colspan="3"></td>\
<td><button style="color:black" onclick="showLetter(\'з\'); new Audio(\'sounds/russian/з_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="зPre"></div><div id="зLetter">З</div><div id="зUnder"></div><div id="зPost"></div></div></button></td>\
<td><button style="color:red" onclick="showLetter(\'и\'); new Audio(\'sounds/russian/и_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="иPre"></div><div id="иLetter">И</div><div id="иUnder"></div><div id="иPost"></div></div></button></td>\
<td><button style="color:black" onclick="showLetter(\'й\'); new Audio(\'sounds/russian/й_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="йPre"></div><div id="йLetter">Й</div><div id="йUnder"></div><div id="йPost"></div></div></button></td>\
<td colspan="3"></td></tr><tr>\
<td><button style="color:black" onclick="showLetter(\'к\'); new Audio(\'sounds/russian/к_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="кPre"></div><div id="кLetter">К</div><div id="кUnder"></div><div id="кPost"></div></div></button></td>\
<td><button style="color:black" onclick="showLetter(\'л\'); new Audio(\'sounds/russian/л_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="лPre"></div><div id="лLetter">Л</div><div id="лUnder"></div><div id="лPost"></div></div></button></td>\
<td><button style="color:black" onclick="showLetter(\'м\'); new Audio(\'sounds/russian/м_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="мPre"></div><div id="мLetter">М</div><div id="мUnder"></div><div id="мPost"></div></div></button></td>\
<td><button style="color:black" onclick="showLetter(\'н\'); new Audio(\'sounds/russian/н_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="нPre"></div><div id="нLetter">Н</div><div id="нUnder"></div><div id="нPost"></div></div></button></td>\
<td><button style="color:red" onclick="showLetter(\'о\'); new Audio(\'sounds/russian/о_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="оPre"></div><div id="оLetter">О</div><div id="оUnder"></div><div id="оPost"></div></div></button></td>\
<td><button style="color:black" onclick="showLetter(\'п\'); new Audio(\'sounds/russian/п_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="пPre"></div><div id="пLetter">П</div><div id="пUnder"></div><div id="пPost"></div></div></button></td>\
<td><button style="color:black" onclick="showLetter(\'р\'); new Audio(\'sounds/russian/р_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="рPre"></div><div id="рLetter">Р</div><div id="рUnder"></div><div id="рPost"></div></div></button></td>\
<td><button style="color:black" onclick="showLetter(\'с\'); new Audio(\'sounds/russian/с_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="сPre"></div><div id="сLetter">С</div><div id="сUnder"></div><div id="сPost"></div></div></button></td>\
<td><button style="color:black" onclick="showLetter(\'т\'); new Audio(\'sounds/russian/т_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="тPre"></div><div id="тLetter">Т</div><div id="тUnder"></div><div id="тPost"></div></div></button></td>\
</tr><tr>\
<td colspan="9" align="center"><button style="color:red" onclick="showLetter(\'у\'); new Audio(\'sounds/russian/у_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="уPre"></div><div id="уLetter">У</div><div id="уUnder"></div><div id="уPost"></div></div></button></td>\
</tr><tr><td></td><td colspan="7" align="center">\
<button style="color:black" onclick="showLetter(\'ф\'); new Audio(\'sounds/russian/ф_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="фPre"></div><div id="фLetter">Ф</div><div id="фUnder"></div><div id="фPost"></div></div></button>\
<button style="color:black" onclick="showLetter(\'х\'); new Audio(\'sounds/russian/х_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="хPre"></div><div id="хLetter">Х</div><div id="хUnder"></div><div id="хPost"></div></div></button>\
<button style="color:black" onclick="showLetter(\'ц\'); new Audio(\'sounds/russian/ц_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="цPre"></div><div id="цLetter">Ц</div><div id="цUnder"></div><div id="цPost"></div></div></button>\
<button style="color:black" onclick="showLetter(\'ч\'); new Audio(\'sounds/russian/ч_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="чPre"></div><div id="чLetter">Ч</div><div id="чUnder"></div><div id="чPost"></div></div></button>\
<button style="color:black" onclick="showLetter(\'ш\'); new Audio(\'sounds/russian/ш_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="шPre"></div><div id="шLetter">Ш</div><div id="шUnder"></div><div id="шPost"></div></div></button>\
<button style="color:black" onclick="showLetter(\'щ\'); new Audio(\'sounds/russian/щ_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="щPre"></div><div id="щLetter">Щ</div><div id="щUnder"></div><div id="щPost"></div></div></button>\
</td><td></td></tr><tr><td colspan="3"></td>\
<td><button style="color:black" onclick="showLetter(\'ъ\'); new Audio(\'sounds/russian/ъ_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="ъPre"></div><div id="ъLetter">Ъ</div><div id="ъUnder"></div><div id="ъPost"></div></div></button></td>\
<td><button style="color:red" onclick="showLetter(\'ы\'); new Audio(\'sounds/russian/ы_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="ыPre"></div><div id="ыLetter">Ы</div><div id="ыUnder"></div><div id="ыPost"></div></div></button></td>\
<td><button style="color:black" onclick="showLetter(\'ь\'); new Audio(\'sounds/russian/ь_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="ьPre"></div><div id="ьLetter">Ь</div><div id="ьUnder"></div><div id="ьPost"></div></div></button></td>\
<td colspan="3"></td></tr><tr><td colspan="3"></td>\
<td><button style="color:red" onclick="showLetter(\'э\'); new Audio(\'sounds/russian/э_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="эPre"></div><div id="эLetter">Э</div><div id="эUnder"></div><div id="эPost"></div></div></button></td>\
<td><button style="color:red" onclick="showLetter(\'ю\'); new Audio(\'sounds/russian/ю_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="юPre"></div><div id="юLetter">Ю</div><div id="юUnder"></div><div id="юPost"></div></div></button></td>\
<td><button style="color:red" onclick="showLetter(\'я\'); new Audio(\'sounds/russian/я_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="яPre"></div><div id="яLetter">Я</div><div id="яUnder"></div><div id="яPost"></div></div></button></td>\
<td colspan="3"></td></tr></table>';

// Russian Sound Correspondence
tableAbcd["russian"]["sound"] = {};
tableAbcd["russian"]["sound"]["а"] = [ "а", "а", "а", "а", "д", " ", "б", "б", " ", "рка", "за", "с", "yes, and, duh", "arch", "base", "bass" ];
tableAbcd["russian"]["sound"]["б"] = [ "б", "б", "б", "б", "б", " ", " ", " ", " ", " ", "ыть", "ить", "оты", "ровь", "рат", "to be", "to beat", "boots bots", "brow", "brother" ];
tableAbcd["russian"]["sound"]["в"] = [ "в", "в", "в", " ", " ", " ", "ижу", "ода", "дова", "I see, I visualize", "water", "widow" ];
tableAbcd["russian"]["sound"]["г"] = [ "г", "г", "г", "г", "г", " ", " ", " ", " ", "че", "лаз", "усь", "ад", "рунт", "о", "eye", "goose", "snake", "ground", "(say) wha" ];
tableAbcd["russian"]["sound"]["д"] = [ "д", "д", "д", "д", " ", " ", " ", " ", "ери", "а", "ва", "но", "(do) tear", "yes, and, duh", "two", "bottom" ];
tableAbcd["russian"]["sound"]["е"] = [ "е", "е", "е", "е", " ", " ", "н", " ", "сть", "да", " ", "ль", "is, to eat", "food", "no", "fir" ];
tableAbcd["russian"]["sound"]["ё"] = [ "ё", "ё", "ё", "л", " ", " ", "н", "ж", "лка", "linen", "hedgehog", "fir" ];
tableAbcd["russian"]["sound"]["ж"] = [ "ж", "ж", "ж", "ж", "ж", " ", "ло", "ло", "ля", "ля", "ук", "а", "ь", "ь", "ка", "bug", "lodge", "(it's a) lie, lay", "lie (down)", "thigh (leg)" ];
tableAbcd["russian"]["sound"]["з"] = [ "з", "з", " ", "берё", "нать", "а", "knights, to know", "birch" ];
tableAbcd["russian"]["sound"]["и"] = [ "и", "и", " ", " ", " ", "мя", "and", "name" ];
tableAbcd["russian"]["sound"]["й"] = [ "й", "й", "й", " ", " ", "мо", "ог", "од", " ", "yogi", "iodine", "my, wash" ];
tableAbcd["russian"]["sound"]["к"] = [ "к", "к", " ", " ", "от", "лей", "cat", "glue" ];
tableAbcd["russian"]["sound"]["л"] = [ "л", "л", "л", "л", " ", " ", "со", "ба", "ев", "ево", "нце", " ", "lion", "left", "sun", "ball (dance)" ];
tableAbcd["russian"]["sound"]["м"] = [ "м", "м", "м", "м", "м", " ", " ", " ", " ", " ", "ама", "ир", "ного", "ох", "ал", "mama", "world, peace", "much, many", "moss", "small" ];
tableAbcd["russian"]["sound"]["н"] = [ "н", "н", "н", "н", "н", "н", " ", " ", "ли", "с", "во", "во", "ос", "ас", "ия", "ег", " ", "ь", "nose", "us", "(any) line", "snow", "yon, out!", "pong, stench" ];
tableAbcd["russian"]["sound"]["о"] = [ "о", "о", "о", "о", " ", "молок", "х", "б", "дин", " ", "лод", "рода", "one", "milk", "cold", "beard" ];
tableAbcd["russian"]["sound"]["п"] = [ "п", "п", "п", " ", " ", " ", "апа", "лыть", "ламя", "papa", "to fleet", "flame" ];
tableAbcd["russian"]["sound"]["р"] = [ "р", "р", "р", "жа", "зе", " ", "а", "но", "ама", "heat", "corn, grain", "frame" ];
tableAbcd["russian"]["sound"]["с"] = [ "с", "с", "с", "с", "с", "с", " ", " ", " ", " ", " ", " ", "естра", "ын", "кули", "ии", "иди", "ел", "sister", "son", "squeal", "the", "cd, seat", "sat" ];
tableAbcd["russian"]["sound"]["т"] = [ "т", "т", "т", " ", " ", "смер", "от", "ри", "ь", "that", "three, rub", "death" ];
tableAbcd["russian"]["sound"]["у"] = [ "у", "у", "у", "у", " ", " ", "кл", "л", "хо", "ха", "бок", "на", "ear", "fish soup", "clew", "moon" ];
tableAbcd["russian"]["sound"]["ф"] = [ "ф", "ф", "ф", "ф", " ", " ", " ", " ", "ильм", "иле", "ляга", "ляжка", "film (movie)", "fillet", "(big) flask", "(small) flask" ];
tableAbcd["russian"]["sound"]["х"] = [ "х", "х", "х", " ", " ", " ", "леб", "олод", "ек", "hlaf (bread)", "cold", "hake" ];
tableAbcd["russian"]["sound"]["ц"] = [ "ц", "ц", "ц", " ", " ", " ", "ирк", "ерковь", "ена", "circus", "church", "price" ];
tableAbcd["russian"]["sound"]["ч"] = [ "ч", "ч", "ч", " ", "по", " ", "ай", "та", "адо", "tea", "post, mail", "child" ];
tableAbcd["russian"]["sound"]["ш"] = [ "ш", "ш", "ш", "ш", " ", " ", " ", " ", "ар", "арм", "арф", "орты", "ball (sphere)", "charm", "scarf", "shorts" ];
tableAbcd["russian"]["sound"]["щ"] = [ "щ", "щ", " ", " ", "ека", "ель", "cheek", "slit" ];
tableAbcd["russian"]["sound"]["ъ"] = [ "ъ", "ъ", "ъ", "ъ", "ъ", "с", "с", "с", "с", "с", "ем", "ешь", "ест", "езд", "ел", "(I) will have eaten", "eat it, (you) will eat it", "(he, she, it) will have eaten", "congress", "have eaten" ];
tableAbcd["russian"]["sound"]["ы"] = [ "ы", "ы", "ы", "м", "в", "т", " ", " ", " ", "we", "you", "thee" ];
tableAbcd["russian"]["sound"]["ь"] = [ "ь", "ь", "ь", "ь", "л", "ос", "ноч", "ден", "вы", " ", " ", " ", "lions", "axis", "night", "day" ];
tableAbcd["russian"]["sound"]["э"] = [ "э", "э", "э", " ", " ", " ", "то", "хо", "ра", "it", "echo", "era" ];
tableAbcd["russian"]["sound"]["ю"] = [ "ю", "ю", "ю", "кл", "кр", "тр", "ч", "к", "к", "key", "crook, hook", "trick" ];
tableAbcd["russian"]["sound"]["я"] = [ "я", "я", "я", "я", " ", " ", " ", "вол", " ", "рость", "ркость", " ", "I", "wrath", "brightness", "will" ];

// Bulgarian Linear Table
tableAbcd["russian-bulgarian"]["linear"] = '<tr>\
<td><button style="color:red" onclick="showLetter(\'а\'); new Audio(\'sounds/russian-bulgarian/а_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="аPre"></div><div id="аLetter">А</div><div id="аUnder"></div><div id="аPost"></div></div></button></td>\
<td><button style="color:blue" onclick="showLetter(\'б\'); new Audio(\'sounds/russian-bulgarian/б_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="бPre"></div><div id="бLetter">Б</div><div id="бUnder"></div><div id="бPost"></div></div></button></td>\
<td><button style="color:blue" onclick="showLetter(\'в\'); new Audio(\'sounds/russian-bulgarian/в_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="вPre"></div><div id="вLetter">В</div><div id="вUnder"></div><div id="вPost"></div></div></button></td>\
<td><button style="color:black" onclick="showLetter(\'г\'); new Audio(\'sounds/russian-bulgarian/г_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="гPre"></div><div id="гLetter">Г</div><div id="гUnder"></div><div id="гPost"></div></div></button></td>\
<td><button style="color:black" onclick="showLetter(\'д\'); new Audio(\'sounds/russian-bulgarian/д_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="дPre"></div><div id="дLetter">Д</div><div id="дUnder"></div><div id="дPost"></div></div></button></td>\
</tr><tr>\
<td><button style="color:red" onclick="showLetter(\'е\'); new Audio(\'sounds/russian-bulgarian/е_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="еPre"></div><div id="еLetter">Е</div><div id="еUnder"></div><div id="еPost"></div></div></button></td>\
<td><button style="color:black" onclick="showLetter(\'ж\'); new Audio(\'sounds/russian-bulgarian/ж_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="жPre"></div><div id="жLetter">Ж</div><div id="жUnder"></div><div id="жPost"></div></div></button></td>\
<td><button style="color:black" onclick="showLetter(\'з\'); new Audio(\'sounds/russian-bulgarian/з_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="зPre"></div><div id="зLetter">З</div><div id="зUnder"></div><div id="зPost"></div></div></button></td>\
</tr><tr>\
<td><button style="color:red" onclick="showLetter(\'и\'); new Audio(\'sounds/russian-bulgarian/и_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="иPre"></div><div id="иLetter">И</div><div id="иUnder"></div><div id="иPost"></div></div></button></td>\
<td><button style="color:black" onclick="showLetter(\'й\'); new Audio(\'sounds/russian-bulgarian/й_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="йPre"></div><div id="йLetter">Й</div><div id="йUnder"></div><div id="йPost"></div></div></button></td>\
<td><button style="color:black" onclick="showLetter(\'к\'); new Audio(\'sounds/russian-bulgarian/к_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="кPre"></div><div id="кLetter">К</div><div id="кUnder"></div><div id="кPost"></div></div></button></td>\
<td><button style="color:black" onclick="showLetter(\'л\'); new Audio(\'sounds/russian-bulgarian/л_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="лPre"></div><div id="лLetter">Л</div><div id="лUnder"></div><div id="лPost"></div></div></button></td>\
<td><button style="color:blue" onclick="showLetter(\'м\'); new Audio(\'sounds/russian-bulgarian/м_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="мPre"></div><div id="мLetter">М</div><div id="мUnder"></div><div id="мPost"></div></div></button></td>\
<td><button style="color:black" onclick="showLetter(\'н\'); new Audio(\'sounds/russian-bulgarian/н_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="нPre"></div><div id="нLetter">Н</div><div id="нUnder"></div><div id="нPost"></div></div></button></td>\
</tr><tr>\
<td><button style="color:red" onclick="showLetter(\'о\'); new Audio(\'sounds/russian-bulgarian/о_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="оPre"></div><div id="оLetter">О</div><div id="оUnder"></div><div id="оPost"></div></div></button></td>\
<td><button style="color:blue" onclick="showLetter(\'п\'); new Audio(\'sounds/russian-bulgarian/п_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="пPre"></div><div id="пLetter">П</div><div id="пUnder"></div><div id="пPost"></div></div></button></td>\
<td><button style="color:black" onclick="showLetter(\'р\'); new Audio(\'sounds/russian-bulgarian/р_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="рPre"></div><div id="рLetter">Р</div><div id="рUnder"></div><div id="рPost"></div></div></button></td>\
<td><button style="color:black" onclick="showLetter(\'с\'); new Audio(\'sounds/russian-bulgarian/с_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="сPre"></div><div id="сLetter">С</div><div id="сUnder"></div><div id="сPost"></div></div></button></td>\
<td><button style="color:black" onclick="showLetter(\'т\'); new Audio(\'sounds/russian-bulgarian/т_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="тPre"></div><div id="тLetter">Т</div><div id="тUnder"></div><div id="тPost"></div></div></button></td>\
</tr><tr>\
<td><button style="color:red" onclick="showLetter(\'у\'); new Audio(\'sounds/russian-bulgarian/у_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="уPre"></div><div id="уLetter">У</div><div id="уUnder"></div><div id="уPost"></div></div></button></td>\
<td><button style="color:blue" onclick="showLetter(\'ф\'); new Audio(\'sounds/russian-bulgarian/ф_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="фPre"></div><div id="фLetter">Ф</div><div id="фUnder"></div><div id="фPost"></div></div></button></td>\
<td><button style="color:black" onclick="showLetter(\'х\'); new Audio(\'sounds/russian-bulgarian/х_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="хPre"></div><div id="хLetter">Х</div><div id="хUnder"></div><div id="хPost"></div></div></button></td>\
<td><button style="color:black" onclick="showLetter(\'ц\'); new Audio(\'sounds/russian-bulgarian/ц_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="цPre"></div><div id="цLetter">Ц</div><div id="цUnder"></div><div id="цPost"></div></div></button></td>\
<td><button style="color:black" onclick="showLetter(\'ч\'); new Audio(\'sounds/russian-bulgarian/ч_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="чPre"></div><div id="чLetter">Ч</div><div id="чUnder"></div><div id="чPost"></div></div></button></td>\
<td><button style="color:black" onclick="showLetter(\'ш\'); new Audio(\'sounds/russian-bulgarian/ш_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="шPre"></div><div id="шLetter">Ш</div><div id="шUnder"></div><div id="шPost"></div></div></button></td>\
<td><button style="color:black" onclick="showLetter(\'щ\'); new Audio(\'sounds/russian-bulgarian/щ_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="щPre"></div><div id="щLetter">Щ</div><div id="щUnder"></div><div id="щPost"></div></div></button></td>\
</tr><tr>\
<td><button style="color:red" onclick="showLetter(\'ъ\'); new Audio(\'sounds/russian-bulgarian/ъ_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="ъPre"></div><div id="ъLetter">Ъ</div><div id="ъUnder"></div><div id="ъPost"></div></div></button></td>\
<td><button style="color:grey" onclick="showLetter(\'ь\'); new Audio(\'sounds/russian-bulgarian/ь_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="ьPre"></div><div id="ьLetter">Ь</div><div id="ьUnder"></div><div id="ьPost"></div></div></button></td>\
<td><button style="color:red" onclick="showLetter(\'ю\'); new Audio(\'sounds/russian-bulgarian/ю_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="юPre"></div><div id="юLetter">Ю</div><div id="юUnder"></div><div id="юPost"></div></div></button></td>\
<td><button style="color:red" onclick="showLetter(\'я\'); new Audio(\'sounds/russian-bulgarian/я_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="яPre"></div><div id="яLetter">Я</div><div id="яUnder"></div><div id="яPost"></div></div></button></td>\
</tr></table>';

// Bulgarian Axial Table
tableAbcd["russian-bulgarian"]["axial"] = '<tr>\
<td colspan="7" align="center"><button style="color:red" onclick="showLetter(\'а\'); new Audio(\'sounds/russian-bulgarian/а_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="аPre"></div><div id="аLetter">А</div><div id="аUnder"></div><div id="аPost"></div></div></button></td>\
</tr><tr><td colspan="2"></td><td colspan="3" align="center">\
<button style="color:black" onclick="showLetter(\'б\'); new Audio(\'sounds/russian-bulgarian/б_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="бPre"></div><div id="бLetter">Б</div><div id="бUnder"></div><div id="бPost"></div></div></button>\
<button style="color:black" onclick="showLetter(\'в\'); new Audio(\'sounds/russian-bulgarian/в_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="вPre"></div><div id="вLetter">В</div><div id="вUnder"></div><div id="вPost"></div></div></button>\
</td><td colspan="2"></td></tr><tr><td></td>\
<td><button style="color:black" onclick="showLetter(\'г\'); new Audio(\'sounds/russian-bulgarian/г_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="гPre"></div><div id="гLetter">Г</div><div id="гUnder"></div><div id="гPost"></div></div></button></td>\
<td><button style="color:black" onclick="showLetter(\'д\'); new Audio(\'sounds/russian-bulgarian/д_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="дPre"></div><div id="дLetter">Д</div><div id="дUnder"></div><div id="дPost"></div></div></button></td>\
<td><button style="color:red" onclick="showLetter(\'е\'); new Audio(\'sounds/russian-bulgarian/е_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="еPre"></div><div id="еLetter">Е</div><div id="еUnder"></div><div id="еPost"></div></div></button></td>\
<td><button style="color:black" onclick="showLetter(\'ж\'); new Audio(\'sounds/russian-bulgarian/ж_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="жPre"></div><div id="жLetter">Ж</div><div id="жUnder"></div><div id="жPost"></div></div></button></td>\
<td><button style="color:black" onclick="showLetter(\'з\'); new Audio(\'sounds/russian-bulgarian/з_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="зPre"></div><div id="зLetter">З</div><div id="зUnder"></div><div id="зPost"></div></div></button></td>\
<td></td></tr><tr><td colspan="3"></td>\
<td><button style="color:red" onclick="showLetter(\'и\'); new Audio(\'sounds/russian-bulgarian/и_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="иPre"></div><div id="иLetter">И</div><div id="иUnder"></div><div id="иPost"></div></div></button></td>\
<td colspan="3"></td></tr><tr><td></td><td colspan="5" align="center">\
<button style="color:black" onclick="showLetter(\'й\'); new Audio(\'sounds/russian-bulgarian/й_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="йPre"></div><div id="йLetter">Й</div><div id="йUnder"></div><div id="йPost"></div></div></button>\
<button style="color:black" onclick="showLetter(\'к\'); new Audio(\'sounds/russian-bulgarian/к_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="кPre"></div><div id="кLetter">К</div><div id="кUnder"></div><div id="кPost"></div></div></button>\
<button style="color:black" onclick="showLetter(\'л\'); new Audio(\'sounds/russian-bulgarian/л_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="лPre"></div><div id="лLetter">Л</div><div id="лUnder"></div><div id="лPost"></div></div></button>\
<button style="color:black" onclick="showLetter(\'м\'); new Audio(\'sounds/russian-bulgarian/м_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="мPre"></div><div id="мLetter">М</div><div id="мUnder"></div><div id="мPost"></div></div></button>\
</td><td></td></tr><tr><td colspan="2"></td>\
<td><button style="color:black" onclick="showLetter(\'н\'); new Audio(\'sounds/russian-bulgarian/н_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="нPre"></div><div id="нLetter">Н</div><div id="нUnder"></div><div id="нPost"></div></div></button></td>\
<td><button style="color:red" onclick="showLetter(\'о\'); new Audio(\'sounds/russian-bulgarian/о_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="оPre"></div><div id="оLetter">О</div><div id="оUnder"></div><div id="оPost"></div></div></button></td>\
<td><button style="color:black" onclick="showLetter(\'п\'); new Audio(\'sounds/russian-bulgarian/п_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="пPre"></div><div id="пLetter">П</div><div id="пUnder"></div><div id="пPost"></div></div></button></td>\
</td><td colspan="2"></tr><tr>\
<td><button style="color:black" onclick="showLetter(\'р\'); new Audio(\'sounds/russian-bulgarian/р_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="рPre"></div><div id="рLetter">Р</div><div id="рUnder"></div><div id="рPost"></div></div></button></td>\
<td><button style="color:black" onclick="showLetter(\'с\'); new Audio(\'sounds/russian-bulgarian/с_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="сPre"></div><div id="сLetter">С</div><div id="сUnder"></div><div id="сPost"></div></div></button></td>\
<td><button style="color:black" onclick="showLetter(\'т\'); new Audio(\'sounds/russian-bulgarian/т_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="тPre"></div><div id="тLetter">Т</div><div id="тUnder"></div><div id="тPost"></div></div></button></td>\
<td><button style="color:red" onclick="showLetter(\'у\'); new Audio(\'sounds/russian-bulgarian/у_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="уPre"></div><div id="уLetter">У</div><div id="уUnder"></div><div id="уPost"></div></div></button></td>\
<td><button style="color:black" onclick="showLetter(\'ф\'); new Audio(\'sounds/russian-bulgarian/ф_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="фPre"></div><div id="фLetter">Ф</div><div id="фUnder"></div><div id="фPost"></div></div></button></td>\
<td><button style="color:black" onclick="showLetter(\'х\'); new Audio(\'sounds/russian-bulgarian/х_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="хPre"></div><div id="хLetter">Х</div><div id="хUnder"></div><div id="хPost"></div></div></button></td>\
<td><button style="color:black" onclick="showLetter(\'ц\'); new Audio(\'sounds/russian-bulgarian/ц_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="цPre"></div><div id="цLetter">Ц</div><div id="цUnder"></div><div id="цPost"></div></div></button></td>\
</tr><tr><td colspan="2"></td><td colspan="3" align="center">\
<button style="color:black" onclick="showLetter(\'ч\'); new Audio(\'sounds/russian-bulgarian/ч_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="чPre"></div><div id="чLetter">Ч</div><div id="чUnder"></div><div id="чPost"></div></div></button>\
<button style="color:black" onclick="showLetter(\'ш\'); new Audio(\'sounds/russian-bulgarian/ш_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="шPre"></div><div id="шLetter">Ш</div><div id="шUnder"></div><div id="шPost"></div></div></button>\
</td><td colspan="2"></td></tr><tr><td colspan="2"></td>\
<td><button style="color:black" onclick="showLetter(\'щ\'); new Audio(\'sounds/russian-bulgarian/щ_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="щPre"></div><div id="щLetter">Щ</div><div id="щUnder"></div><div id="щPost"></div></div></button></td>\
<td><button style="color:red" onclick="showLetter(\'ъ\'); new Audio(\'sounds/russian-bulgarian/ъ_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="ъPre"></div><div id="ъLetter">Ъ</div><div id="ъUnder"></div><div id="ъPost"></div></div></button></td>\
<td><button style="color:black" onclick="showLetter(\'ь\'); new Audio(\'sounds/russian-bulgarian/ь_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="ьPre"></div><div id="ьLetter">Ь</div><div id="ьUnder"></div><div id="ьPost"></div></div></button></td>\
</td><td colspan="2"></tr><tr>\
<td colspan="7" align="center"><button style="color:red" onclick="showLetter(\'ю\'); new Audio(\'sounds/russian-bulgarian/ю_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="юPre"></div><div id="юLetter">Ю</div><div id="юUnder"></div><div id="юPost"></div></div></button></td>\
</tr><tr>\
<td colspan="7" align="center"><button style="color:red" onclick="showLetter(\'я\'); new Audio(\'sounds/russian-bulgarian/я_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="яPre"></div><div id="яLetter">Я</div><div id="яUnder"></div><div id="яPost"></div></div></button></td>\
</tr></table>';

// Bulgarian Sound Correspondence
tableAbcd["russian-bulgarian"]["sound"] = {};
tableAbcd["russian-bulgarian"]["sound"]["а"] = [ "а", "а", "а", "а", "а", " ", "д", " ", "б", "б", "з", " ", "рка", "за", "с", "I", "yes, and, duh", "arch", "base", "bass" ];
tableAbcd["russian-bulgarian"]["sound"]["б"] = [ "б", "б", "б", "б", "б", "б", " ", " ", " ", " ", " ", " ", "уки", "ъде", "ия", "отуши", "рат", "ебе", "beeches", "to be", "to beat", "boots", "brother", "baby" ];
tableAbcd["russian-bulgarian"]["sound"]["в"] = [ "в", "в", "в", " ", " ", " ", "ижте", "ода", "дова", "see, visualize", "water", "widow" ];
tableAbcd["russian-bulgarian"]["sound"]["г"] = [ "г", "г", "г", "г", " ", " ", " ", " ", "ама", "ъеска", "ад", "рунд", "gamma, gamut", "goose", "snake", "ground" ];
tableAbcd["russian-bulgarian"]["sound"]["д"] = [ "д", "д", "д", "д", " ", " ", " ", " ", "а", "ва", "ен", "ъно", "yes, and, duh", "two", "day", "bottom" ];
tableAbcd["russian-bulgarian"]["sound"]["е"] = [ "е", "е", " ", "н", " ", " ", "is", "no" ];
tableAbcd["russian-bulgarian"]["sound"]["ж"] = [ "ж", "ж", "ж", " ", "ло", "лъ", "акет", "а", "а", "jacket", "lodge", "lie" ];
tableAbcd["russian-bulgarian"]["sound"]["з"] = [ "з", "з", " ", "бре", "ахар", "а", "sugar", "birch" ];
tableAbcd["russian-bulgarian"]["sound"]["и"] = [ "и", "и", " ", " ", " ", "ме", "and", "name" ];
tableAbcd["russian-bulgarian"]["sound"]["й"] = [ "й", "й", "й", " ", " ", "мо", "ог", "од", " ", "yogi", "iodine", "my, wash" ];
tableAbcd["russian-bulgarian"]["sound"]["к"] = [ "к", "к", " ", " ", "отка", "ей", "cat", "quai" ];
tableAbcd["russian-bulgarian"]["sound"]["л"] = [ "л", "л", "л", "л", " ", " ", "с", "ба", "ъв", "яво", "ънцето", " ", "lion", "left", "sun", "ball (dance)" ];
tableAbcd["russian-bulgarian"]["sound"]["м"] = [ "м", "м", "м", "м", "м", "м", " ", " ", " ", " ", " ", " ", "ама", "ир", "ир", "ного", "ъх", "е", "mama", "world", "peace", "much, many", "moss", "me" ];
tableAbcd["russian-bulgarian"]["sound"]["н"] = [ "н", "н", "н", "н", "н", "н", " ", " ", "ли", "с", "въ", "во", "ос", "ас", "ия", "яг", " ", "я", "nose", "us", "(any) line", "snow", "yon, out!", "pong, stench" ];
tableAbcd["russian-bulgarian"]["sound"]["о"] = [ "о", "о", "о", " ", " ", " ", "вес", "тец", "гън", "oats", "father", "fire" ];
tableAbcd["russian-bulgarian"]["sound"]["п"] = [ "п", "п", " ", " ", "лувам", "ламък", "float, swim", "flame" ];
tableAbcd["russian-bulgarian"]["sound"]["р"] = [ "р", "р", "р", "жа", "зъ", " ", " ", "но", "ама", "fire, heat", "corn, grain", "frame" ];
tableAbcd["russian-bulgarian"]["sound"]["с"] = [ "с", "с", "с", "с", " ", " ", " ", " ", "естра", "ин", "едни", "еднах", "sister", "son", "seat", "sat" ];
tableAbcd["russian-bulgarian"]["sound"]["т"] = [ "т", "т", "т", "т", " ", " ", " ", "смър", "е", "ези", "ри", " ", "thee, they", "these", "three", "death" ];
tableAbcd["russian-bulgarian"]["sound"]["у"] = [ "у", "у", "у", "у", " ", " ", " ", " ", " ", "тро", "тре", "хо", "in", "morning", "tomorrow", "ear" ];
tableAbcd["russian-bulgarian"]["sound"]["ф"] = [ "ф", "ф", "ф", " ", " ", " ", "илм", "иле", "лакон", "film (movie)", "fillet", "flask" ];
tableAbcd["russian-bulgarian"]["sound"]["х"] = [ "х", "х", "х", " ", " ", " ", "ляб", "айде", "ек", "hlaf (bread)", "come on", "hake" ];
tableAbcd["russian-bulgarian"]["sound"]["ц"] = [ "ц", "ц", "ц", " ", " ", " ", "ирк", "ърква", "ена", "circus", "church", "price" ];
tableAbcd["russian-bulgarian"]["sound"]["ч"] = [ "ч", "ч", "ч", "ч", " ", "ве", " ", " ", "ай", "е", "едо", "ар", "tea", "yet, more", "child", "charm" ];
tableAbcd["russian-bulgarian"]["sound"]["ш"] = [ "ш", "ш", "ш", "ш", "ш", " ", " ", "има", "види", " ", "анс", "ал", " ", " ", "орти", "chance", "scarf", "you have", "you see", "shorts" ];
tableAbcd["russian-bulgarian"]["sound"]["щ"] = [ "щ", "щ", "щ", "щ", "щ", "щ", " ", "за", "за", "не", "ни", "по", "о", "о", "ото", "о", "о", "а", "what", "why", "because", "something", "nothing", "post (mail)" ];
tableAbcd["russian-bulgarian"]["sound"]["ъ"] = [ "ъ", "ъ", "ъ", "п", "б", "п", "рво", "де", "т", "first", "to be", "path, time" ];
tableAbcd["russian-bulgarian"]["sound"]["ь"] = [ "ь", "ь", "ь", "шоф", "бул", "кан", "ор", "он", "он", "chauffeur", "bouillon", "canyon" ];
tableAbcd["russian-bulgarian"]["sound"]["ю"] = [ "ю", "ю", "ю", "ю", "кл", " ", "л", "н", "ч", "г", "бов", " ", "key", "south", "love", "new" ];
tableAbcd["russian-bulgarian"]["sound"]["я"] = [ "я", "я", "я", " ", " ", "ц", "сно", "вно", "л", "clear (fair, plain)", "obviously", "full" ];

// Hebrew Linear Table
tableAbcd["hebrew"]["linear"] = '<div id="underDevelopment">&nbsp;</div><tr>\
<tr><td colspan="3"></td>\
<td><button style="color:black" onclick="underDevelopment();">ד</button></td>\
<td><button style="color:black" onclick="underDevelopment();">ג</button></td>\
<td><button style="color:blue" onclick="underDevelopment();">ב</button></td>\
<td><button style="color:red" onclick="underDevelopment();">א‎</button></td>\
</tr><tr><td colspan="2"></td>\
<td><button style="color:black" onclick="underDevelopment();">ט</button></td>\
<td><button style="color:black" onclick="underDevelopment();">ח</button></td>\
<td><button style="color:black" onclick="underDevelopment();">ז</button></td>\
<td><button style="color:blue" onclick="underDevelopment();">ו</button></td>\
<td><button style="color:red" onclick="underDevelopment();">ה</button></td>\
</tr><tr><td></td>\
<td><button style="color:black" onclick="underDevelopment();">ס</button></td>\
<td><button style="color:black" onclick="underDevelopment();">נ</button></td>\
<td><button style="color:blue" onclick="underDevelopment();">מ</button></td>\
<td><button style="color:black" onclick="underDevelopment();">ל</button></td>\
<td><button style="color:black" onclick="underDevelopment();">כ</button></td>\
<td><button style="color:red" onclick="underDevelopment();">י</button></td>\
</tr><tr>\
<td><button style="color:black" onclick="underDevelopment();">ת</button></td>\
<td><button style="color:black" onclick="underDevelopment();">ש‎</button></td>\
<td><button style="color:black" onclick="underDevelopment();">ר</button></td>\
<td><button style="color:black" onclick="underDevelopment();">ק</button></td>\
<td><button style="color:black" onclick="underDevelopment();">צ</button></td>\
<td><button style="color:blue" onclick="underDevelopment();">פ</button></td>\
<td><button style="color:red" onclick="underDevelopment();">ע</button></td>\
</tr></table>';

// Hebrew Axial Table
tableAbcd["hebrew"]["axial"] = '<div id="underDevelopment">&nbsp;</div><tr>\
<td colspan="7" align="center"><button style="color:red" onclick="underDevelopment();">א</button></td>\
</tr><tr><td colspan="2"></td><td colspan="3" align="center">\
<button style="color:black" onclick="underDevelopment();">ג</button>\
<button style="color:black" onclick="underDevelopment();">ב</button>\
</td><td colspan="2"></td></tr><tr><td colspan="2"></td>\
<td><button style="color:black" onclick="underDevelopment();">ו</button></td>\
<td><button style="color:red" onclick="underDevelopment();">ה</button></td>\
<td><button style="color:black" onclick="underDevelopment();">ד</button></td>\
<td colspan="2"></td></tr><tr>\
<td><button style="color:black" onclick="underDevelopment();">מ</button></td>\
<td><button style="color:black" onclick="underDevelopment();">ל</button></td>\
<td><button style="color:black" onclick="underDevelopment();">כ</button></td>\
<td><button style="color:red" onclick="underDevelopment();">י</button></td>\
<td><button style="color:black" onclick="underDevelopment();">ט</button></td>\
<td><button style="color:black" onclick="underDevelopment();">ח</button></td>\
<td><button style="color:black" onclick="underDevelopment();">ז</button></td>\
</tr><tr><td></td>\
<td><button style="color:black" onclick="underDevelopment();">צ</button></td>\
<td><button style="color:black" onclick="underDevelopment();">פ</button></td>\
<td><button style="color:red" onclick="underDevelopment();">ע</button></td>\
<td><button style="color:black" onclick="underDevelopment();">ס</button></td>\
<td><button style="color:black" onclick="underDevelopment();">נ</button></td>\
<td></td></tr><tr><td></td><td colspan="5" align="center">\
<button style="color:black" onclick="underDevelopment();">ת</button>\
<button style="color:black" onclick="underDevelopment();">ש‎</button>\
<button style="color:black" onclick="underDevelopment();">ר</button>\
<button style="color:black" onclick="underDevelopment();">ק</button>\
</td><td></td></tr></table>';

// Greek Linear Table
tableAbcd["greek"]["linear"] = '<tr>\
<td><button style="color:red" onclick="showLetter(\'α\'); new Audio(\'sounds/greek/α_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="αPre"></div><div id="αLetter">Α</div><div id="αUnder"></div><div id="αPost"></div></div></button></td>\
<td><button style="color:blue" onclick="showLetter(\'β\'); new Audio(\'sounds/greek/β_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="βPre"></div><div id="βLetter">Β</div><div id="βUnder"></div><div id="βPost"></div></div></button></td>\
<td><button style="color:black" onclick="showLetter(\'γ\'); new Audio(\'sounds/greek/γ_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="γPre"></div><div id="γLetter">Γ</div><div id="γUnder"></div><div id="γPost"></div></div></button></td>\
<td><button style="color:black" onclick="showLetter(\'δ\'); new Audio(\'sounds/greek/δ_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="δPre"></div><div id="δLetter">Δ</div><div id="δUnder"></div><div id="δPost"></div></div></button></td>\
</tr><tr>\
<td><button style="color:red" onclick="showLetter(\'ε\'); new Audio(\'sounds/greek/ε_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="εPre"></div><div id="εLetter">Ε</div><div id="εUnder"></div><div id="εPost"></div></div></button></td>\
<td><button style="color:black" onclick="showLetter(\'ζ\'); new Audio(\'sounds/greek/ζ_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="ζPre"></div><div id="ζLetter">Ζ</div><div id="ζUnder"></div><div id="ζPost"></div></div></button></td>\
<td><button style="color:black" onclick="showLetter(\'η\'); new Audio(\'sounds/greek/η_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="ηPre"></div><div id="ηLetter">Η</div><div id="ηUnder"></div><div id="ηPost"></div></div></button></td>\
<td><button style="color:blue" onclick="showLetter(\'θ\'); new Audio(\'sounds/greek/θ_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="θPre"></div><div id="θLetter">Θ</div><div id="θUnder"></div><div id="θPost"></div></div></button></td>\
</tr><tr>\
<td><button style="color:red" onclick="showLetter(\'ι\'); new Audio(\'sounds/greek/ι_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="ιPre"></div><div id="ιLetter">Ι</div><div id="ιUnder"></div><div id="ιPost"></div></div></button></td>\
<td><button style="color:black" onclick="showLetter(\'κ\'); new Audio(\'sounds/greek/κ_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="κPre"></div><div id="κLetter">Κ</div><div id="κUnder"></div><div id="κPost"></div></div></button></td>\
<td><button style="color:black" onclick="showLetter(\'λ\'); new Audio(\'sounds/greek/λ_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="λPre"></div><div id="λLetter">Λ</div><div id="λUnder"></div><div id="λPost"></div></div></button></td>\
<td><button style="color:blue" onclick="showLetter(\'μ\'); new Audio(\'sounds/greek/μ_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="μPre"></div><div id="μLetter">Μ</div><div id="μUnder"></div><div id="μPost"></div></div></button></td>\
<td><button style="color:black" onclick="showLetter(\'ν\'); new Audio(\'sounds/greek/ν_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="νPre"></div><div id="νLetter">Ν</div><div id="νUnder"></div><div id="νPost"></div></div></button></td>\
<td><button style="color:black" onclick="showLetter(\'ξ\'); new Audio(\'sounds/greek/ξ_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="ξPre"></div><div id="ξLetter">Ξ</div><div id="ξUnder"></div><div id="ξPost"></div></div></button></td>\
</tr><tr>\
<td><button style="color:red" onclick="showLetter(\'ο\'); new Audio(\'sounds/greek/ο_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="οPre"></div><div id="οLetter">Ο</div><div id="οUnder"></div><div id="οPost"></div></div></button></td>\
<td><button style="color:blue" onclick="showLetter(\'π\'); new Audio(\'sounds/greek/π_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="πPre"></div><div id="πLetter">Π</div><div id="πUnder"></div><div id="πPost"></div></div></button></td>\
<td><button style="color:black" onclick="showLetter(\'ρ\'); new Audio(\'sounds/greek/ρ_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="ρPre"></div><div id="ρLetter">Ρ</div><div id="ρUnder"></div><div id="ρPost"></div></div></button></td>\
<td><button style="color:black" onclick="showLetter(\'σ\'); new Audio(\'sounds/greek/σ_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="σPre"></div><div id="σLetter">Σ</div><div id="σUnder"></div><div id="σPost"></div></div></button></td>\
<td><button style="color:black" onclick="showLetter(\'τ\'); new Audio(\'sounds/greek/τ_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="τPre"></div><div id="τLetter">Τ</div><div id="τUnder"></div><div id="τPost"></div></div></button></td>\
</tr><tr>\
<td><button style="color:red" onclick="showLetter(\'υ\'); new Audio(\'sounds/greek/υ_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="υPre"></div><div id="υLetter">Υ</div><div id="υUnder"></div><div id="υPost"></div></div></button></td>\
<td><button style="color:blue" onclick="showLetter(\'φ\'); new Audio(\'sounds/greek/φ_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="φPre"></div><div id="φLetter">Φ</div><div id="φUnder"></div><div id="φPost"></div></div></button></td>\
<td><button style="color:black" onclick="showLetter(\'χ\'); new Audio(\'sounds/greek/χ_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="χPre"></div><div id="χLetter">Χ</div><div id="χUnder"></div><div id="χPost"></div></div></button></td>\
<td><button style="color:black" onclick="showLetter(\'ψ\'); new Audio(\'sounds/greek/ψ_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="ψPre"></div><div id="ψLetter">Ψ</div><div id="ψUnder"></div><div id="ψPost"></div></div></button></td>\
<td><button style="color:red" onclick="showLetter(\'ω\'); new Audio(\'sounds/greek/ω_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="ωPre"></div><div id="ωLetter">Ω</div><div id="ωUnder"></div><div id="ωPost"></div></div></button></td>\
</tr></table>';

// Greek Axial Table
tableAbcd["greek"]["axial"] = '<tr>\
<td colspan="7" align="center"><button style="color:red" onclick="showLetter(\'α\'); new Audio(\'sounds/greek/α_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="αPre"></div><div id="αLetter">Α</div><div id="αUnder"></div><div id="αPost"></div></div></button></td>\
</tr><tr><td colspan="2"></td><td colspan="3" align="center">\
<button style="color:black" onclick="showLetter(\'β\'); new Audio(\'sounds/greek/β_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="βPre"></div><div id="βLetter">Β</div><div id="βUnder"></div><div id="βPost"></div></div></button>\
<button style="color:black" onclick="showLetter(\'γ\'); new Audio(\'sounds/greek/γ_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="γPre"></div><div id="γLetter">Γ</div><div id="γUnder"></div><div id="γPost"></div></div></button>\
</td><td colspan="2"></td></tr><tr><td colspan="2"></td>\
<td><button style="color:black" onclick="showLetter(\'δ\'); new Audio(\'sounds/greek/δ_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="δPre"></div><div id="δLetter">Δ</div><div id="δUnder"></div><div id="δPost"></div></div></button></td>\
<td><button style="color:red" onclick="showLetter(\'ε\'); new Audio(\'sounds/greek/ε_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="εPre"></div><div id="εLetter">Ε</div><div id="εUnder"></div><div id="εPost"></div></div></button></td>\
<td><button style="color:black" onclick="showLetter(\'ζ\'); new Audio(\'sounds/greek/ζ_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="ζPre"></div><div id="ζLetter">Ζ</div><div id="ζUnder"></div><div id="ζPost"></div></div></button></td>\
<td colspan="2"></td></tr><tr><td></td>\
<td><button style="color:black" onclick="showLetter(\'η\'); new Audio(\'sounds/greek/η_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="ηPre"></div><div id="ηLetter">Η</div><div id="ηUnder"></div><div id="ηPost"></div></div></button></td>\
<td><button style="color:black" onclick="showLetter(\'θ\'); new Audio(\'sounds/greek/θ_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="θPre"></div><div id="θLetter">Θ</div><div id="θUnder"></div><div id="θPost"></div></div></button></td>\
<td><button style="color:red" onclick="showLetter(\'ι\'); new Audio(\'sounds/greek/ι_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="ιPre"></div><div id="ιLetter">Ι</div><div id="ιUnder"></div><div id="ιPost"></div></div></button></td>\
<td><button style="color:black" onclick="showLetter(\'κ\'); new Audio(\'sounds/greek/κ_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="κPre"></div><div id="κLetter">Κ</div><div id="κUnder"></div><div id="κPost"></div></div></button></td>\
<td><button style="color:black" onclick="showLetter(\'λ\'); new Audio(\'sounds/greek/λ_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="λPre"></div><div id="λLetter">Λ</div><div id="λUnder"></div><div id="λPost"></div></div></button></td>\
<td></td></tr><tr>\
<td><button style="color:black" onclick="showLetter(\'μ\'); new Audio(\'sounds/greek/μ_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="μPre"></div><div id="μLetter">Μ</div><div id="μUnder"></div><div id="μPost"></div></div></button></td>\
<td><button style="color:black" onclick="showLetter(\'ν\'); new Audio(\'sounds/greek/ν_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="νPre"></div><div id="νLetter">Ν</div><div id="νUnder"></div><div id="νPost"></div></div></button></td>\
<td><button style="color:black" onclick="showLetter(\'ξ\'); new Audio(\'sounds/greek/ξ_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="ξPre"></div><div id="ξLetter">Ξ</div><div id="ξUnder"></div><div id="ξPost"></div></div></button></td>\
<td><button style="color:red" onclick="showLetter(\'ο\'); new Audio(\'sounds/greek/ο_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="οPre"></div><div id="οLetter">Ο</div><div id="οUnder"></div><div id="οPost"></div></div></button></td>\
<td><button style="color:black" onclick="showLetter(\'π\'); new Audio(\'sounds/greek/π_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="πPre"></div><div id="πLetter">Π</div><div id="πUnder"></div><div id="πPost"></div></div></button></td>\
<td><button style="color:black" onclick="showLetter(\'ρ\'); new Audio(\'sounds/greek/ρ_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="ρPre"></div><div id="ρLetter">Ρ</div><div id="ρUnder"></div><div id="ρPost"></div></div></button></td>\
<td><button style="color:black" onclick="showLetter(\'σ\'); new Audio(\'sounds/greek/σ_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="σPre"></div><div id="σLetter">Σ</div><div id="σUnder"></div><div id="σPost"></div></div></button></td>\
</tr><tr><td colspan="2"></td>\
<td><button style="color:black" onclick="showLetter(\'τ\'); new Audio(\'sounds/greek/τ_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="τPre"></div><div id="τLetter">Τ</div><div id="τUnder"></div><div id="τPost"></div></div></button></td>\
<td><button style="color:red" onclick="showLetter(\'υ\'); new Audio(\'sounds/greek/υ_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="υPre"></div><div id="υLetter">Υ</div><div id="υUnder"></div><div id="υPost"></div></div></button></td>\
<td><button style="color:black" onclick="showLetter(\'φ\'); new Audio(\'sounds/greek/φ_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="φPre"></div><div id="φLetter">Φ</div><div id="φUnder"></div><div id="φPost"></div></div></button></td>\
<td colspan="2"></td></tr><tr><td colspan="2"></td><td colspan="3" align="center">\
<button style="color:black" onclick="showLetter(\'χ\'); new Audio(\'sounds/greek/χ_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="χPre"></div><div id="χLetter">Χ</div><div id="χUnder"></div><div id="χPost"></div></div></button>\
<button style="color:black" onclick="showLetter(\'ψ\'); new Audio(\'sounds/greek/ψ_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="ψPre"></div><div id="ψLetter">Ψ</div><div id="ψUnder"></div><div id="ψPost"></div></div></button>\
</td><td colspan="2"></td></tr><tr>\
<td colspan="7" align="center"><button style="color:red" onclick="showLetter(\'ω\'); new Audio(\'sounds/greek/ω_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="ωPre"></div><div id="ωLetter">Ω</div><div id="ωUnder"></div><div id="ωPost"></div></div></button></td>\
</tr></table>';

// Greek Sound Correspondence
tableAbcd["greek"]["sound"] = {};
tableAbcd["greek"]["sound"]["α"] = [ "ἄ", "ἄ", "ἄ", "ἄ", "ἄ", " ", " ", " ", " ", " ", "βαξ", "λα", "λτ", "ν", "ρμα", "abacus", "alright", "halt", "if", "chariot" ];
tableAbcd["greek"]["sound"]["β"] = [ "β", "β", "β", " ", " ", " ", "άβα", "άτα", "ρέ", "granny", "cotton", "hey you!" ];
tableAbcd["greek"]["sound"]["γ"] = [ "γ", "γ", "γ", "γ", "γ", "γ", " ", " ", " ", "ἐ", "ἐ", " ", "άδος", "ειά", "ϰάζι", "γύς", "ώ", "ῆ", "cod", "hi", "gas, throttle", "near", "I", "earth" ];
tableAbcd["greek"]["sound"]["δ"] = [ "δ", "δ", "δ", " ", " ", " ", "άδα", "έ", "εῖ", "torch", "and, but", "should" ];
tableAbcd["greek"]["sound"]["ε"] = [ "ἔ", "ἔ", "ε", " ", " ", " ", "χω", "λα", "ἰ", "I have", "come!", "if" ];
tableAbcd["greek"]["sound"]["ζ"] = [ "ζ", "ζ", "ζ", " ", " ", " ", "ῆν", "άω", "ῶ", "to live", "I eat", "I live" ];
tableAbcd["greek"]["sound"]["η"] = [ "ἤ", "ἠ", "ἦ", " ", " ", " ", " ", "ώς", "χος", "or", "dawn", "sound" ];
tableAbcd["greek"]["sound"]["θ"] = [ "θ", "θ", "θ", " ", " ", " ", "έα", "εά", "έμα", "view", "goddess", "theme" ];
tableAbcd["greek"]["sound"]["ι"] = [ "ἰ", "ἰ", "ἰ", " ", " ", " ", "δού", "στός", "χϑύς", "take it", "mast", "fish" ];
tableAbcd["greek"]["sound"]["κ"] = [ "κ", "κ", "κ", "κ", " ", " ", " ", " ", "άδη", "αί", "ακά", "αλά", "bucket", "and", "bad", "good" ];
tableAbcd["greek"]["sound"]["λ"] = [ "λ", "λ", "λ", "λ", " ", " ", " ", " ", "άβα", "αιμά", "έω", "άκα", "lava", "neck", "I say", "lacquer" ];
tableAbcd["greek"]["sound"]["μ"] = [ "μ", "μ", "μ", "μ", "μ", " ", " ", " ", " ", " ", "ῆλο", "οῦ", "πρός", "ά", "άζα", "apple", "me", "forward", "but, however", "mass" ];
tableAbcd["greek"]["sound"]["ν"] = [ "ν", "ν", "ν", "ν", " ", " ", " ", " ", "αί", "οῦς", "τάμα", "το", "yes", "mind, nous", "lady, checkers", "note do, C, ut" ];
tableAbcd["greek"]["sound"]["ξ"] = [ "ξ", "ξ", "ξ", " ", " ", " ", "ύλο", "ηρά", "ανθή", "wood", "land", "blond, blonde" ];
tableAbcd["greek"]["sound"]["ο"] = [ "ὁ", "ο", "ο", "ό", "ὄ", " ", " ", " ", " ", " ", "δός", "ἶκος", "υχί", "χι", "ν", "street", "house, home", "no", "no, not, non", "being" ];
tableAbcd["greek"]["sound"]["π"] = [ "π", "π", "π", "π", " ", " ", " ", " ", "ιά", "ανί", "άλη", "έδη", "no more", "cloth", "fight", "fetters, clog" ];
tableAbcd["greek"]["sound"]["ρ"] = [ "ρ", "ρ", "ρ", " ", " ", "άγ", "έμα", "οῦς", "α", "stream", "flow", "hunt" ];
tableAbcd["greek"]["sound"]["σ"] = [ "σ", "σ", "σ", " ", " ", " ", "ύ", "ύν", "ούπα", "thou", "with", "soup" ];
tableAbcd["greek"]["sound"]["τ"] = [ "τ", "τ", "τ", " ", " ", "ά", "ρεῖς", "ί", "ι", "three", "what", "etc." ];
tableAbcd["greek"]["sound"]["υ"] = [ "ὑ", "ὐ", "ὕ", "ύ", "ὐ", "ὖ", " ", "ε", " ", "λ", "α", "ε", "πό", "ρύς", "δωρ", "σσα", "λή", " ", "under", "wide", "water", "rage", "court", "good" ];
tableAbcd["greek"]["sound"]["φ"] = [ "φ", "φ", "φ", " ", " ", " ", "άβα", "ήμη", "άκα", "peas", "fame, rumour", "trap" ];
tableAbcd["greek"]["sound"]["χ"] = [ "χ", "χ", "χ", "χ", " ", " ", " ", " ", "έρι", "αρά", "άρη", "θές", "hand", "joy", "grace", "yesterday" ];
tableAbcd["greek"]["sound"]["ψ"] = [ "ψ", "ψ", "ψ", "ψ", " ", " ", " ", " ", "άρι", "ωμί", "έμα", "ές", "fish", "bread", "lies", "last night" ];
tableAbcd["greek"]["sound"]["ω"] = [ "ὤ", "ὠ", "ὡ", " ", " ", " ", "ρα", "μά", "ς", "hour", "raw, blunt", "as" ];

// Georgian Linear Table
tableAbcd["georgian"]["linear"] = '<div id="underDevelopment">&nbsp;</div><tr>\
<td><button style="color:red" onclick="underDevelopment();">ა‎</button></td>\
<td><button style="color:blue" onclick="underDevelopment();">ბ</button></td>\
<td><button style="color:black" onclick="underDevelopment();">გ</button></td>\
<td><button style="color:black" onclick="underDevelopment();">დ</button></td>\
</tr><tr>\
<td><button style="color:red" onclick="underDevelopment();">ე</button></td>\
<td><button style="color:blue" onclick="underDevelopment();">ვ</button></td>\
<td><button style="color:black" onclick="underDevelopment();">ზ</button></td>\
<td><button style="color:black" onclick="underDevelopment();">თ</button></td>\
</tr><tr>\
<td><button style="color:red" onclick="underDevelopment();">ი</button></td>\
<td><button style="color:black" onclick="underDevelopment();">კ</button></td>\
<td><button style="color:black" onclick="underDevelopment();">ლ</button></td>\
<td><button style="color:blue" onclick="underDevelopment();">მ</button></td>\
<td><button style="color:black" onclick="underDevelopment();">ნ</button></td>\
</tr><tr>\
<td><button style="color:red" onclick="underDevelopment();">ო</button></td>\
<td><button style="color:blue" onclick="underDevelopment();">პ</button></td>\
<td><button style="color:black" onclick="underDevelopment();">ჟ</button></td>\
<td><button style="color:black" onclick="underDevelopment();">რ</button></td>\
<td><button style="color:black" onclick="underDevelopment();">ს</button></td>\
<td><button style="color:black" onclick="underDevelopment();">ტ</button></td>\
</tr><tr>\
<td><button style="color:red" onclick="underDevelopment();">უ</button></td>\
<td><button style="color:blue" onclick="underDevelopment();">ფ</button></td>\
<td><button style="color:black" onclick="underDevelopment();">ქ</button></td>\
<td><button style="color:black" onclick="underDevelopment();">ღ</button></td>\
<td><button style="color:black" onclick="underDevelopment();">ყ</button></td>\
<td><button style="color:black" onclick="underDevelopment();">შ</button></td>\
<td><button style="color:black" onclick="underDevelopment();">ჩ</button></td>\
<td><button style="color:black" onclick="underDevelopment();">ც</button></td>\
</tr><tr><td></td><td></td>\
<td><button style="color:black" onclick="underDevelopment();">ძ</button></td>\
<td><button style="color:black" onclick="underDevelopment();">წ</button></td>\
<td><button style="color:black" onclick="underDevelopment();">ჭ</button></td>\
<td><button style="color:black" onclick="underDevelopment();">ხ</button></td>\
<td><button style="color:black" onclick="underDevelopment();">ჯ</button></td>\
<td><button style="color:black" onclick="underDevelopment();">ჰ</button></td>\
</tr></table>';

// Georgian Axial Table
tableAbcd["georgian"]["axial"] = '<div id="underDevelopment">&nbsp;</div><tr>\
<td colspan="11" align="center"><button style="color:red" onclick="underDevelopment();">ა‎</button></td>\
</tr><tr><td colspan="4"></td><td colspan="3" align="center">\
<button style="color:black" onclick="underDevelopment();">ბ</button>\
<button style="color:black" onclick="underDevelopment();">გ</button>\
</td><td colspan="4"></td></tr><tr><td colspan="4"></td>\
<td><button style="color:black" onclick="underDevelopment();">დ</button></td>\
<td><button style="color:red" onclick="underDevelopment();">ე</button></td>\
<td><button style="color:black" onclick="underDevelopment();">ვ</button></td>\
<td colspan="4"></td></tr><tr><td colspan="3"></td>\
<td><button style="color:black" onclick="underDevelopment();">ზ</button></td>\
<td><button style="color:black" onclick="underDevelopment();">თ</button></td>\
<td><button style="color:red" onclick="underDevelopment();">ი</button></td>\
<td><button style="color:black" onclick="underDevelopment();">კ</button></td>\
<td><button style="color:black" onclick="underDevelopment();">ლ</button></td>\
<td colspan="3"></td></tr><tr><td colspan="3"></td>\
<td><button style="color:black" onclick="underDevelopment();">მ</button></td>\
<td><button style="color:black" onclick="underDevelopment();">ნ</button></td>\
<td><button style="color:red" onclick="underDevelopment();">ო</button></td>\
<td><button style="color:black" onclick="underDevelopment();">პ</button></td>\
<td><button style="color:black" onclick="underDevelopment();">ჟ</button></td>\
<td colspan="3"></td></tr><tr><td colspan="2">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>\
<td><button style="color:black" onclick="underDevelopment();">რ</button></td>\
<td><button style="color:black" onclick="underDevelopment();">ს</button></td>\
<td><button style="color:black" onclick="underDevelopment();">ტ</button></td>\
<td><button style="color:red" onclick="underDevelopment();">უ</button></td>\
<td><button style="color:black" onclick="underDevelopment();">ფ</button></td>\
<td><button style="color:black" onclick="underDevelopment();">ქ</button></td>\
<td><button style="color:black" onclick="underDevelopment();">ღ</button></td>\
<td colspan="2">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td></tr><tr><td colspan="11" align="center">\
<button style="color:black" onclick="underDevelopment();">ყ</button>\
<button style="color:black" onclick="underDevelopment();">შ</button>\
<button style="color:black" onclick="underDevelopment();">ჩ</button>\
<button style="color:black" onclick="underDevelopment();">ც</button>\
<button style="color:black" onclick="underDevelopment();">ძ</button>\
<button style="color:black" onclick="underDevelopment();">წ</button>\
<button style="color:black" onclick="underDevelopment();">ჭ</button>\
<button style="color:black" onclick="underDevelopment();">ხ</button>\
<button style="color:black" onclick="underDevelopment();">ჯ</button>\
<button style="color:black" onclick="underDevelopment();">ჰ</button>\
</td></tr></table>';

// Abjadi Linear Table
tableAbcd["abjadi"]["linear"] = '<div id="underDevelopment">&nbsp;</div><tr>\
<td colspan="4"></td>\
<td><button style="color:black" onclick="underDevelopment();">د</button></td>\
<td><button style="color:black" onclick="underDevelopment();">ج</button></td>\
<td><button style="color:blue" onclick="underDevelopment();">ب</button></td>\
<td><button style="color:red" onclick="underDevelopment();">ا</button></td>\
</tr><tr><td colspan="3"></td>\
<td><button style="color:black" onclick="underDevelopment();">ط</button></td>\
<td><button style="color:black" onclick="underDevelopment();">ح</button></td>\
<td><button style="color:black" onclick="underDevelopment();">ز</button></td>\
<td><button style="color:red" onclick="underDevelopment();">و</button></td>\
<td><button style="color:grey" onclick="underDevelopment();">ه</button></td>\
</tr><tr><td colspan="2"></td>\
<td><button style="color:black" onclick="underDevelopment();">س</button></td>\
<td><button style="color:black" onclick="underDevelopment();">ن</button></td>\
<td><button style="color:blue" onclick="underDevelopment();">م</button></td>\
<td><button style="color:black" onclick="underDevelopment();">ل</button></td>\
<td><button style="color:black" onclick="underDevelopment();">ك</button></td>\
<td><button style="color:red" onclick="underDevelopment();">ي</button></td>\
</tr><tr><td></td>\
<td><button style="color:black" onclick="underDevelopment();">ت</button></td>\
<td><button style="color:black" onclick="underDevelopment();">ش</button></td>\
<td><button style="color:black" onclick="underDevelopment();">ر</button></td>\
<td><button style="color:black" onclick="underDevelopment();">ق</button></td>\
<td><button style="color:black" onclick="underDevelopment();">ص</button></td>\
<td><button style="color:blue" onclick="underDevelopment();">ف</button></td>\
<td><button style="color:red" onclick="underDevelopment();">ع</button></td>\
</tr><tr>\
<td><button style="color:black" onclick="underDevelopment();">غ</button></td>\
<td><button style="color:black" onclick="underDevelopment();">ظ</button></td>\
<td><button style="color:black" onclick="underDevelopment();">ض</button></td>\
<td><button style="color:black" onclick="underDevelopment();">ذ</button></td>\
<td><button style="color:black" onclick="underDevelopment();">خ</button></td>\
<td><button style="color:black" onclick="underDevelopment();">ث</button></td>\
</tr></table>';

// Abjadi Axial Table
tableAbcd["abjadi"]["axial"] = '<div id="underDevelopment">&nbsp;</div><tr>\
<td colspan="7" align="center"><button style="color:red" onclick="underDevelopment();">ا</button></td>\
</tr><tr><td colspan="2"></td><td colspan="3" align="center">\
<button style="color:black" onclick="underDevelopment();">ج</button>\
<button style="color:black" onclick="underDevelopment();">ب</button>\
</td><td colspan="2"></td></tr><tr><td colspan="2"></td>\
<td><button style="color:black" onclick="underDevelopment();">و</button></td>\
<td><button style="color:red" onclick="underDevelopment();">ه</button></td>\
<td><button style="color:black" onclick="underDevelopment();">د</button></td>\
</td><td colspan="2"></td></tr><tr>\
<td><button style="color:black" onclick="underDevelopment();">م</button></td>\
<td><button style="color:black" onclick="underDevelopment();">ل</button></td>\
<td><button style="color:black" onclick="underDevelopment();">ك</button></td>\
<td><button style="color:red" onclick="underDevelopment();">ي</button></td>\
<td><button style="color:black" onclick="underDevelopment();">ط</button></td>\
<td><button style="color:black" onclick="underDevelopment();">ح</button></td>\
<td><button style="color:black" onclick="underDevelopment();">ز</button></td>\
</tr><tr><td></td>\
<td><button style="color:black" onclick="underDevelopment();">ص</button></td>\
<td><button style="color:black" onclick="underDevelopment();">ف</button></td>\
<td><button style="color:red" onclick="underDevelopment();">ع</button></td>\
<td><button style="color:black" onclick="underDevelopment();">س</button></td>\
<td><button style="color:black" onclick="underDevelopment();">ن</button></td>\
<td></td></tr><tr><td></td><td colspan="5" align="center">\
<button style="color:black" onclick="underDevelopment();">ت</button>\
<button style="color:black" onclick="underDevelopment();">ش</button>\
<button style="color:black" onclick="underDevelopment();">ر</button>\
<button style="color:black" onclick="underDevelopment();">ق</button>\
</td><td></td></tr><tr><td colspan="7" align="center">\
<button style="color:black" onclick="underDevelopment();">غ</button>\
<button style="color:black" onclick="underDevelopment();">ظ</button>\
<button style="color:black" onclick="underDevelopment();">ض</button>\
<button style="color:black" onclick="underDevelopment();">ذ</button>\
<button style="color:black" onclick="underDevelopment();">خ</button>\
<button style="color:black" onclick="underDevelopment();">ث</button>\
</td></tr></table>';

// Runes Linear Table (younger futhark)
tableAbcd["runes"]["linear"] = '<tr>\
<td><button style="color:red" onclick="showLetter(\'ᛅ\'); new Audio(\'sounds/runes/ᛅ_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="ᛅPre"></div><div id="ᛅLetter">ᛅ</div><div id="ᛅUnder"></div><div id="ᛅPost"></div></div></button></td>\
<td><button style="color:blue" onclick="showLetter(\'ᛒ\'); new Audio(\'sounds/runes/ᛒ_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="ᛒPre"></div><div id="ᛒLetter">ᛒ</div><div id="ᛒUnder"></div><div id="ᛒPost"></div></div></button></td>\
<td><button style="color:black" onclick="showLetter(\'ᚦ\'); new Audio(\'sounds/runes/ᚦ_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="ᚦPre"></div><div id="ᚦLetter">ᚦ</div><div id="ᚦUnder"></div><div id="ᚦPost"></div></div></button></td>\
</tr><tr>\
<td><button style="color:red" onclick="showLetter(\'ᛁ\'); new Audio(\'sounds/runes/ᛁ_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="ᛁPre"></div><div id="ᛁLetter">ᛁ</div><div id="ᛁUnder"></div><div id="ᛁPost"></div></div></button></td>\
<td><button style="color:black" onclick="showLetter(\'ᚴ\'); new Audio(\'sounds/runes/ᚴ_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="ᚴPre"></div><div id="ᚴLetter">ᚴ</div><div id="ᚴUnder"></div><div id="ᚴPost"></div></div></button></td>\
<td><button style="color:black" onclick="showLetter(\'ᛚ\'); new Audio(\'sounds/runes/ᛚ_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="ᛚPre"></div><div id="ᛚLetter">ᛚ</div><div id="ᛚUnder"></div><div id="ᛚPost"></div></div></button></td>\
<td><button style="color:blue" onclick="showLetter(\'ᛘ\'); new Audio(\'sounds/runes/ᛘ_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="ᛘPre"></div><div id="ᛘLetter">ᛘ</div><div id="ᛘUnder"></div><div id="ᛘPost"></div></div></button></td>\
<td><button style="color:black" onclick="showLetter(\'ᚾ\'); new Audio(\'sounds/runes/ᚾ_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="ᚾPre"></div><div id="ᚾLetter">ᚾ</div><div id="ᚾUnder"></div><div id="ᚾPost"></div></div></button></td>\
</tr><tr>\
<td><button style="color:red" onclick="showLetter(\'ᚬ\'); new Audio(\'sounds/runes/ᚬ_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="ᚬPre"></div><div id="ᚬLetter">ᚬ</div><div id="ᚬUnder"></div><div id="ᚬPost"></div></div></button></td>\
<td><button style="color:brown" onclick="showLetter(\'ᛦ\'); new Audio(\'sounds/runes/ᛦ_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="ᛦPre"></div><div id="ᛦLetter">ᛦ</div><div id="ᛦUnder"></div><div id="ᛦPost"></div></div></button></td>\
<td><button style="color:black" onclick="showLetter(\'ᚱ\'); new Audio(\'sounds/runes/ᚱ_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="ᚱPre"></div><div id="ᚱLetter">ᚱ</div><div id="ᚱUnder"></div><div id="ᚱPost"></div></div></button></td>\
<td><button style="color:black" onclick="showLetter(\'ᛋ\'); new Audio(\'sounds/runes/ᛋ_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="ᛋPre"></div><div id="ᛋLetter">ᛋ</div><div id="ᛋUnder"></div><div id="ᛋPost"></div></div></button></td>\
<td><button style="color:black" onclick="showLetter(\'ᛏ\'); new Audio(\'sounds/runes/ᛏ_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="ᛏPre"></div><div id="ᛏLetter">ᛏ</div><div id="ᛏUnder"></div><div id="ᛏPost"></div></div></button></td>\
</tr><tr>\
<td><button style="color:purple" onclick="showLetter(\'ᚢ\'); new Audio(\'sounds/runes/ᚢ_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="ᚢPre"></div><div id="ᚢLetter">ᚢ</div><div id="ᚢUnder"></div><div id="ᚢPost"></div></div></button></td>\
<td><button style="color:blue" onclick="showLetter(\'ᚠ\'); new Audio(\'sounds/runes/ᚠ_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="ᚠPre"></div><div id="ᚠLetter">ᚠ</div><div id="ᚠUnder"></div><div id="ᚠPost"></div></div></button></td>\
<td><button style="color:black" onclick="showLetter(\'ᚼ\'); new Audio(\'sounds/runes/ᚼ_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="ᚼPre"></div><div id="ᚼLetter">ᚼ</div><div id="ᚼUnder"></div><div id="ᚼPost"></div></div></button></td>\
</tr><tr>\
</tr></table>';

// Runes Axial Table (younger futhark)
tableAbcd["runes"]["axial"] = '<tr>\
<td colspan="5" align="center"><button style="color:red" onclick="showLetter(\'ᛅ\'); new Audio(\'sounds/runes/ᛅ_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="ᛅPre"></div><div id="ᛅLetter">ᛅ</div><div id="ᛅUnder"></div><div id="ᛅPost"></div></div></button></td>\
</tr><tr>\
<td><button style="color:black" onclick="showLetter(\'ᛒ\'); new Audio(\'sounds/runes/ᛒ_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="ᛒPre"></div><div id="ᛒLetter">ᛒ</div><div id="ᛒUnder"></div><div id="ᛒPost"></div></div></button></td>\
<td><button style="color:black" onclick="showLetter(\'ᚦ\'); new Audio(\'sounds/runes/ᚦ_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="ᚦPre"></div><div id="ᚦLetter">ᚦ</div><div id="ᚦUnder"></div><div id="ᚦPost"></div></div></button></td>\
<td><button style="color:red" onclick="showLetter(\'ᛁ\'); new Audio(\'sounds/runes/ᛁ_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="ᛁPre"></div><div id="ᛁLetter">ᛁ</div><div id="ᛁUnder"></div><div id="ᛁPost"></div></div></button></td>\
<td><button style="color:black" onclick="showLetter(\'ᚴ\'); new Audio(\'sounds/runes/ᚴ_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="ᚴPre"></div><div id="ᚴLetter">ᚴ</div><div id="ᚴUnder"></div><div id="ᚴPost"></div></div></button></td>\
<td><button style="color:black" onclick="showLetter(\'ᛚ\'); new Audio(\'sounds/runes/ᛚ_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="ᛚPre"></div><div id="ᛚLetter">ᛚ</div><div id="ᛚUnder"></div><div id="ᛚPost"></div></div></button></td>\
</tr><tr>\
<td><button style="color:black" onclick="showLetter(\'ᛘ\'); new Audio(\'sounds/runes/ᛘ_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="ᛘPre"></div><div id="ᛘLetter">ᛘ</div><div id="ᛘUnder"></div><div id="ᛘPost"></div></div></button></td>\
<td><button style="color:black" onclick="showLetter(\'ᚾ\'); new Audio(\'sounds/runes/ᚾ_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="ᚾPre"></div><div id="ᚾLetter">ᚾ</div><div id="ᚾUnder"></div><div id="ᚾPost"></div></div></button></td>\
<td><button style="color:red" onclick="showLetter(\'ᚬ\'); new Audio(\'sounds/runes/ᚬ_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="ᚬPre"></div><div id="ᚬLetter">ᚬ</div><div id="ᚬUnder"></div><div id="ᚬPost"></div></div></button></td>\
<td><button style="color:black" onclick="showLetter(\'ᛦ\'); new Audio(\'sounds/runes/ᛦ_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="ᛦPre"></div><div id="ᛦLetter">ᛦ</div><div id="ᛦUnder"></div><div id="ᛦPost"></div></div></button></td>\
<td><button style="color:black" onclick="showLetter(\'ᚱ\'); new Audio(\'sounds/runes/ᚱ_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="ᚱPre"></div><div id="ᚱLetter">ᚱ</div><div id="ᚱUnder"></div><div id="ᚱPost"></div></div></button></td>\
</tr><tr>\
<td><button style="color:black" onclick="showLetter(\'ᛋ\'); new Audio(\'sounds/runes/ᛋ_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="ᛋPre"></div><div id="ᛋLetter">ᛋ</div><div id="ᛋUnder"></div><div id="ᛋPost"></div></div></button></td>\
<td><button style="color:black" onclick="showLetter(\'ᛏ\'); new Audio(\'sounds/runes/ᛏ_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="ᛏPre"></div><div id="ᛏLetter">ᛏ</div><div id="ᛏUnder"></div><div id="ᛏPost"></div></div></button></td>\
<td><button style="color:red" onclick="showLetter(\'ᚢ\'); new Audio(\'sounds/runes/ᚢ_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="ᚢPre"></div><div id="ᚢLetter">ᚢ</div><div id="ᚢUnder"></div><div id="ᚢPost"></div></div></button></td>\
<td><button style="color:black" onclick="showLetter(\'ᚠ\'); new Audio(\'sounds/runes/ᚠ_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="ᚠPre"></div><div id="ᚠLetter">ᚠ</div><div id="ᚠUnder"></div><div id="ᚠPost"></div></div></button></td>\
<td><button style="color:black" onclick="showLetter(\'ᚼ\'); new Audio(\'sounds/runes/ᚼ_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="ᚼPre"></div><div id="ᚼLetter">ᚼ</div><div id="ᚼUnder"></div><div id="ᚼPost"></div></div></button></td>\
</tr></table>';

// Runes Sound Correspondence (younger futhark)
tableAbcd["runes"]["sound"] = {};
tableAbcd["runes"]["sound"]["ᛅ"] = [ "ᛅ", " ", "ᚱ", "ar (year, oar)" ];
tableAbcd["runes"]["sound"]["ᛒ"] = [ "ᛒ", " ", "ᛦᚬᚱᚴ", "björk (birch)" ];
tableAbcd["runes"]["sound"]["ᚦ"] = [ "ᚦ", " ", "ᚬᚱᚾ", "thorn (thorn, thor)" ];
tableAbcd["runes"]["sound"]["ᛁ"] = [ "ᛁ", " ", "ᛋ", "is (ice)" ];
tableAbcd["runes"]["sound"]["ᚴ"] = [ "ᚴ", " ", "ᚢᚾᚦ", "kynd (heat)" ];
tableAbcd["runes"]["sound"]["ᛚ"] = [ "ᛚ", " ", "ᚬᚴᚱ", "lögr (liquid)" ];
tableAbcd["runes"]["sound"]["ᛘ"] = [ "ᛘ", " ", "ᛅᚦᚱ", "mathr (man)" ];
tableAbcd["runes"]["sound"]["ᚾ"] = [ "ᚾ", " ", "ᛦᚬᛏᛅ", "njota (enjoy)" ];
tableAbcd["runes"]["sound"]["ᚬ"] = [ "ᚬ", "ᚬ", " ", " ", "ᚴ", "ᚴᛋᚢᛚ", "ok (and)", "öxull (axis, axle)" ];
tableAbcd["runes"]["sound"]["ᛦ"] = [ "ᛦ", " ", "ᚢ", "yew (yew)" ];
tableAbcd["runes"]["sound"]["ᚱ"] = [ "ᚱ", " ", "ᛁᚦᛅ", "riða (ride)" ];
tableAbcd["runes"]["sound"]["ᛋ"] = [ "ᛋ", " ", "ᚬᛚ", "sól (sun)" ];
tableAbcd["runes"]["sound"]["ᛏ"] = [ "ᛏ", " ", "ᚢᚱ", "týr (tyr)" ];
tableAbcd["runes"]["sound"]["ᚢ"] = [ "ᚢ", " ", "ᚱ", "úr (from)" ];
tableAbcd["runes"]["sound"]["ᚠ"] = [ "ᚠ", " ", "ᛁ", "fé (funds)" ];
tableAbcd["runes"]["sound"]["ᚼ"] = [ "ᚼ", " ", "ᛅᚴᛚ", "hagl (hail)" ];

// Runes Linear Table (bornholm)
tableAbcd["runes-bornholm"]["linear"] = '<tr>\
<td><button style="color:red" onclick="showLetter(\'ᛆ\'); new Audio(\'sounds/runes-bornholm/ᛆ_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="ᛆPre"></div><div id="ᛆLetter">ᛆ</div><div id="ᛆUnder"></div><div id="ᛆPost"></div></div></button></td>\
<td><button style="color:blue" onclick="showLetter(\'ᛒ\'); new Audio(\'sounds/runes-bornholm/ᛒ_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="ᛒPre"></div><div id="ᛒLetter">ᛒ</div><div id="ᛒUnder"></div><div id="ᛒPost"></div></div></button></td>\
<td><button style="color:black" onclick="showLetter(\'ᚦ\'); new Audio(\'sounds/runes-bornholm/ᚦ_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="ᚦPre"></div><div id="ᚦLetter">ᚦ</div><div id="ᚦUnder"></div><div id="ᚦPost"></div></div></button></td>\
</tr><tr>\
<td><button style="color:red" onclick="showLetter(\'ᛂ\'); new Audio(\'sounds/runes-bornholm/ᛂ_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="ᛂPre"></div><div id="ᛂLetter">ᛂ</div><div id="ᛂUnder"></div><div id="ᛂPost"></div></div></button></td>\
<td><button style="color:blue" onclick="showLetter(\'ᚠ\'); new Audio(\'sounds/runes-bornholm/ᚠ_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="ᚠPre"></div><div id="ᚠLetter">ᚠ</div><div id="ᚠUnder"></div><div id="ᚠPost"></div></div></button></td>\
<td><button style="color:black" onclick="showLetter(\'ᚵ\'); new Audio(\'sounds/runes-bornholm/ᚵ_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="ᚵPre"></div><div id="ᚵLetter">ᚵ</div><div id="ᚵUnder"></div><div id="ᚵPost"></div></div></button></td>\
<td><button style="color:black" onclick="showLetter(\'ᚼ\'); new Audio(\'sounds/runes-bornholm/ᚼ_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="ᚼPre"></div><div id="ᚼLetter">ᚼ</div><div id="ᚼUnder"></div><div id="ᚼPost"></div></div></button></td>\
</tr><tr>\
<td><button style="color:red" onclick="showLetter(\'ᛁ\'); new Audio(\'sounds/runes-bornholm/ᛁ_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="ᛁPre"></div><div id="ᛁLetter">ᛁ</div><div id="ᛁUnder"></div><div id="ᛁPost"></div></div></button></td>\
<td><button style="color:black" onclick="showLetter(\'ᚴ\'); new Audio(\'sounds/runes-bornholm/ᚴ_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="ᚴPre"></div><div id="ᚴLetter">ᚴ</div><div id="ᚴUnder"></div><div id="ᚴPost"></div></div></button></td>\
<td><button style="color:black" onclick="showLetter(\'ᛚ\'); new Audio(\'sounds/runes-bornholm/ᛚ_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="ᛚPre"></div><div id="ᛚLetter">ᛚ</div><div id="ᛚUnder"></div><div id="ᛚPost"></div></div></button></td>\
<td><button style="color:blue" onclick="showLetter(\'ᛘ\'); new Audio(\'sounds/runes-bornholm/ᛘ_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="ᛘPre"></div><div id="ᛘLetter">ᛘ</div><div id="ᛘUnder"></div><div id="ᛘPost"></div></div></button></td>\
<td><button style="color:black" onclick="showLetter(\'ᚿ\'); new Audio(\'sounds/runes-bornholm/ᚿ_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="ᚿPre"></div><div id="ᚿLetter">ᚿ</div><div id="ᚿUnder"></div><div id="ᚿPost"></div></div></button></td>\
</tr><tr>\
<td><button style="color:red" onclick="showLetter(\'ᚮ\'); new Audio(\'sounds/runes-bornholm/ᚮ_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="ᚮPre"></div><div id="ᚮLetter">ᚮ</div><div id="ᚮUnder"></div><div id="ᚮPost"></div></div></button></td>\
<td><button style="color:black" onclick="showLetter(\'ᚱ\'); new Audio(\'sounds/runes-bornholm/ᚱ_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="ᚱPre"></div><div id="ᚱLetter">ᚱ</div><div id="ᚱUnder"></div><div id="ᚱPost"></div></div></button></td>\
<td><button style="color:brown" onclick="showLetter(\'ᛦ\'); new Audio(\'sounds/runes-bornholm/ᛦ_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="ᛦPre"></div><div id="ᛦLetter">ᛦ</div><div id="ᛦUnder"></div><div id="ᛦPost"></div></div></button></td>\
<td><button style="color:black" onclick="showLetter(\'ᛋ\'); new Audio(\'sounds/runes-bornholm/ᛋ_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="ᛋPre"></div><div id="ᛋLetter">ᛋ</div><div id="ᛋUnder"></div><div id="ᛋPost"></div></div></button></td>\
<td><button style="color:black" onclick="showLetter(\'ᛏ\'); new Audio(\'sounds/runes-bornholm/ᛏ_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="ᛏPre"></div><div id="ᛏLetter">ᛏ</div><div id="ᛏUnder"></div><div id="ᛏPost"></div></div></button></td>\
<td><button style="color:purple" onclick="showLetter(\'ᚢ\'); new Audio(\'sounds/runes-bornholm/ᚢ_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="ᚢPre"></div><div id="ᚢLetter">ᚢ</div><div id="ᚢUnder"></div><div id="ᚢPost"></div></div></button></td>\
</tr></table>';

// Runes Axial Table (bornholm)
tableAbcd["runes-bornholm"]["axial"] = '<tr>\
<td colspan="7" align="center"><button style="color:red" onclick="showLetter(\'ᛆ\'); new Audio(\'sounds/runes-bornholm/ᛆ_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="ᛆPre"></div><div id="ᛆLetter">ᛆ</div><div id="ᛆUnder"></div><div id="ᛆPost"></div></div></button></td>\
</tr><tr><td></td>\
<td><button style="color:black" onclick="showLetter(\'ᛒ\'); new Audio(\'sounds/runes-bornholm/ᛒ_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="ᛒPre"></div><div id="ᛒLetter">ᛒ</div><div id="ᛒUnder"></div><div id="ᛒPost"></div></div></button></td>\
<td><button style="color:black" onclick="showLetter(\'ᚦ\'); new Audio(\'sounds/runes-bornholm/ᚦ_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="ᚦPre"></div><div id="ᚦLetter">ᚦ</div><div id="ᚦUnder"></div><div id="ᚦPost"></div></div></button></td>\
<td><button style="color:red" onclick="showLetter(\'ᛂ\'); new Audio(\'sounds/runes-bornholm/ᛂ_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="ᛂPre"></div><div id="ᛂLetter">ᛂ</div><div id="ᛂUnder"></div><div id="ᛂPost"></div></div></button></td>\
<td><button style="color:black" onclick="showLetter(\'ᚠ\'); new Audio(\'sounds/runes-bornholm/ᚠ_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="ᚠPre"></div><div id="ᚠLetter">ᚠ</div><div id="ᚠUnder"></div><div id="ᚠPost"></div></div></button></td>\
<td><button style="color:black" onclick="showLetter(\'ᚵ\'); new Audio(\'sounds/runes-bornholm/ᚵ_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="ᚵPre"></div><div id="ᚵLetter">ᚵ</div><div id="ᚵUnder"></div><div id="ᚵPost"></div></div></button></td>\
<td></td></tr><tr><td colspan="2"></td>\
<td><button style="color:black" onclick="showLetter(\'ᚼ\'); new Audio(\'sounds/runes-bornholm/ᚼ_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="ᚼPre"></div><div id="ᚼLetter">ᚼ</div><div id="ᚼUnder"></div><div id="ᚼPost"></div></div></button></td>\
<td><button style="color:red" onclick="showLetter(\'ᛁ\'); new Audio(\'sounds/runes-bornholm/ᛁ_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="ᛁPre"></div><div id="ᛁLetter">ᛁ</div><div id="ᛁUnder"></div><div id="ᛁPost"></div></div></button></td>\
<td><button style="color:black" onclick="showLetter(\'ᚴ\'); new Audio(\'sounds/runes-bornholm/ᚴ_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="ᚴPre"></div><div id="ᚴLetter">ᚴ</div><div id="ᚴUnder"></div><div id="ᚴPost"></div></div></button></td>\
<td colspan="2"></td></tr><tr>\
<td><button style="color:black" onclick="showLetter(\'ᛚ\'); new Audio(\'sounds/runes-bornholm/ᛚ_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="ᛚPre"></div><div id="ᛚLetter">ᛚ</div><div id="ᛚUnder"></div><div id="ᛚPost"></div></div></button></td>\
<td><button style="color:black" onclick="showLetter(\'ᛘ\'); new Audio(\'sounds/runes-bornholm/ᛘ_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="ᛘPre"></div><div id="ᛘLetter">ᛘ</div><div id="ᛘUnder"></div><div id="ᛘPost"></div></div></button></td>\
<td><button style="color:black" onclick="showLetter(\'ᚿ\'); new Audio(\'sounds/runes-bornholm/ᚿ_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="ᚿPre"></div><div id="ᚿLetter">ᚿ</div><div id="ᚿUnder"></div><div id="ᚿPost"></div></div></button></td>\
<td><button style="color:red" onclick="showLetter(\'ᚮ\'); new Audio(\'sounds/runes-bornholm/ᚮ_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="ᚮPre"></div><div id="ᚮLetter">ᚮ</div><div id="ᚮUnder"></div><div id="ᚮPost"></div></div></button></td>\
<td><button style="color:black" onclick="showLetter(\'ᚱ\'); new Audio(\'sounds/runes-bornholm/ᚱ_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="ᚱPre"></div><div id="ᚱLetter">ᚱ</div><div id="ᚱUnder"></div><div id="ᚱPost"></div></div></button></td>\
<td><button style="color:black" onclick="showLetter(\'ᛦ\'); new Audio(\'sounds/runes-bornholm/ᛦ_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="ᛦPre"></div><div id="ᛦLetter">ᛦ</div><div id="ᛦUnder"></div><div id="ᛦPost"></div></div></button></td>\
<td><button style="color:black" onclick="showLetter(\'ᛋ\'); new Audio(\'sounds/runes-bornholm/ᛋ_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="ᛋPre"></div><div id="ᛋLetter">ᛋ</div><div id="ᛋUnder"></div><div id="ᛋPost"></div></div></button></td>\
</tr><tr><td colspan="2"></td><td colspan="3" align="center">\
<button style="color:black" onclick="showLetter(\'ᛏ\'); new Audio(\'sounds/runes-bornholm/ᛏ_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="ᛏPre"></div><div id="ᛏLetter">ᛏ</div><div id="ᛏUnder"></div><div id="ᛏPost"></div></div></button>\
<button style="color:black" onclick="showLetter(\'ᚢ\'); new Audio(\'sounds/runes-bornholm/ᚢ_\'+ lastSpoken[\'count\'] +\'.mp3\').play(); return false;"><div class="relative"><div id="ᚢPre"></div><div id="ᚢLetter">ᚢ</div><div id="ᚢUnder"></div><div id="ᚢPost"></div></div></button>\
</td><td colspan="2"></td></tr></table>';

// Runes Sound Correspondence (bornholm)
tableAbcd["runes-bornholm"]["sound"] = {};
tableAbcd["runes-bornholm"]["sound"]["ᛆ"] = [ "ᛆ", " ", "ᚱ", "ar (year, oar)" ];
tableAbcd["runes-bornholm"]["sound"]["ᛒ"] = [ "ᛒ", " ", "ᛦᚮᚱᚴ", "björk (birch)" ];
tableAbcd["runes-bornholm"]["sound"]["ᚦ"] = [ "ᚦ", " ", "ᚮᚱᚿ", "thorn (thorn, thor)" ];
tableAbcd["runes-bornholm"]["sound"]["ᛂ"] = [ "ᛂ", "ᚠ", " ", "fé (funds)" ];
tableAbcd["runes-bornholm"]["sound"]["ᚠ"] = [ "ᚠ", " ", "ᛂ", "fé (funds)" ];
tableAbcd["runes-bornholm"]["sound"]["ᚵ"] = [ "ᚵ", "ᚼᛆ", "ᛚ", "hagl (hail)" ];
tableAbcd["runes-bornholm"]["sound"]["ᚼ"] = [ "ᚼ", " ", "ᛆᚵᛚ", "hagl (hail)" ];
tableAbcd["runes-bornholm"]["sound"]["ᛁ"] = [ "ᛁ", " ", "ᛋ", "is (ice)" ];
tableAbcd["runes-bornholm"]["sound"]["ᚴ"] = [ "ᚴ", " ", "ᚢᚿᚦ", "kynd (heat)" ];
tableAbcd["runes-bornholm"]["sound"]["ᛚ"] = [ "ᛚ", " ", "ᚮᚴᚱ", "lögr (liquid)" ];
tableAbcd["runes-bornholm"]["sound"]["ᛘ"] = [ "ᛘ", " ", "ᛆᚦᚱ", "mathr (man)" ];
tableAbcd["runes-bornholm"]["sound"]["ᚿ"] = [ "ᚿ", " ", "ᛦᚮᛏᛆ", "njota (enjoy)" ];
tableAbcd["runes-bornholm"]["sound"]["ᚮ"] = [ "ᚮ", "ᚮ", " ", " ", "ᚴ", "ᚴᛋᚢᛚ", "ok (and)", "öxull (axis, axle)" ];
tableAbcd["runes-bornholm"]["sound"]["ᚱ"] = [ "ᚱ", "ᚱ", " ", " ", "ᛂᛁᚦ", "ᛁᚦᛆ", "reið (angry)", "riða (ride)" ];
tableAbcd["runes-bornholm"]["sound"]["ᛦ"] = [ "ᛦ", " ", "ᚢ", "yew (yew)" ];
tableAbcd["runes-bornholm"]["sound"]["ᛋ"] = [ "ᛋ", " ", "ᚮᛚ", "sól (sun)" ];
tableAbcd["runes-bornholm"]["sound"]["ᛏ"] = [ "ᛏ", " ", "ᚢᚱ", "týr (tyr)" ];
tableAbcd["runes-bornholm"]["sound"]["ᚢ"] = [ "ᚢ", " ", "ᚱ", "úr (from)" ];

// Ugaritic Linear Table
tableAbcd["ugaritic"]["linear"] = '<div id="underDevelopment">&nbsp;</div><tr>\
<td><button style="color:red" onclick="underDevelopment();">𐎀</button></td>\
<td><button style="color:blue" onclick="underDevelopment();">𐎁</button></td>\
<td><button style="color:black" onclick="underDevelopment();">𐎂</button></td>\
<td><button style="color:black" onclick="underDevelopment();">𐎃</button></td>\
<td><button style="color:black" onclick="underDevelopment();">𐎄</button></td>\
</tr><tr>\
<td><button style="color:red" onclick="underDevelopment();">𐎅</button></td>\
<td><button style="color:blue" onclick="underDevelopment();">𐎆</button></td>\
<td><button style="color:black" onclick="underDevelopment();">𐎇</button></td>\
<td><button style="color:black" onclick="underDevelopment();">𐎈</button></td>\
<td><button style="color:black" onclick="underDevelopment();">𐎉</button></td>\
</tr><tr>\
<td><button style="color:red" onclick="underDevelopment();">𐎊</button></td>\
<td><button style="color:black" onclick="underDevelopment();">𐎋</button></td>\
<td><button style="color:black" onclick="underDevelopment();">𐎌</button></td>\
<td><button style="color:black" onclick="underDevelopment();">𐎍</button></td>\
<td><button style="color:blue" onclick="underDevelopment();">𐎎</button></td>\
<td><button style="color:black" onclick="underDevelopment();">𐎏</button></td>\
<td><button style="color:black" onclick="underDevelopment();">𐎐</button></td>\
<td><button style="color:black" onclick="underDevelopment();">𐎑</button></td>\
<td><button style="color:black" onclick="underDevelopment();">𐎒</button></td>\
</tr><tr>\
<td><button style="color:red" onclick="underDevelopment();">𐎓</button></td>\
<td><button style="color:blue" onclick="underDevelopment();">𐎔</button></td>\
<td><button style="color:black" onclick="underDevelopment();">𐎕</button></td>\
<td><button style="color:black" onclick="underDevelopment();">𐎖</button></td>\
<td><button style="color:black" onclick="underDevelopment();">𐎗</button></td>\
<td><button style="color:black" onclick="underDevelopment();">𐎘</button></td>\
<td><button style="color:black" onclick="underDevelopment();">𐎙</button></td>\
<td><button style="color:black" onclick="underDevelopment();">𐎚</button></td>\
</tr><tr>\
<td><button style="color:red" onclick="underDevelopment();">𐎛</button></td>\
<td><button style="color:blue" onclick="underDevelopment();">𐎜</button></td>\
<td><button style="color:black" onclick="underDevelopment();">𐎝</button></td>\
<td><button style="color:black" onclick="underDevelopment();">𐎟</button></td>\
</tr></table>';

// Ugaritic Axial Table
tableAbcd["ugaritic"]["axial"] = '<div id="underDevelopment">&nbsp;</div><tr>\
<td colspan="13" align="center"><button style="color:red" onclick="underDevelopment();">𐎀</button></td>\
</tr><tr><td colspan="5"></td><td colspan="3" align="center">\
<button style="color:black" onclick="underDevelopment();">𐎁</button>\
<button style="color:black" onclick="underDevelopment();">𐎂</button>\
</td><td colspan="5"></td></tr><tr><td colspan="4"></td>\
<td><button style="color:black" onclick="underDevelopment();">𐎃</button></td>\
<td><button style="color:black" onclick="underDevelopment();">𐎄</button></td>\
<td><button style="color:red" onclick="underDevelopment();">𐎅</button></td>\
<td><button style="color:black" onclick="underDevelopment();">𐎆</button></td>\
<td><button style="color:black" onclick="underDevelopment();">𐎇</button></td>\
<td colspan="4"></td></tr><tr><td colspan="4"></td>\
<td><button style="color:black" onclick="underDevelopment();">𐎈</button></td>\
<td><button style="color:black" onclick="underDevelopment();">𐎉</button></td>\
<td><button style="color:red" onclick="underDevelopment();">𐎊</button></td>\
<td><button style="color:black" onclick="underDevelopment();">𐎋</button></td>\
<td><button style="color:black" onclick="underDevelopment();">𐎌</button></td>\
<td colspan="4"></td></tr><tr>\
<td><button style="color:black" onclick="underDevelopment();">𐎍</button></td>\
<td><button style="color:black" onclick="underDevelopment();">𐎎</button></td>\
<td><button style="color:black" onclick="underDevelopment();">𐎏</button></td>\
<td><button style="color:black" onclick="underDevelopment();">𐎐</button></td>\
<td><button style="color:black" onclick="underDevelopment();">𐎑</button></td>\
<td><button style="color:black" onclick="underDevelopment();">𐎒</button></td>\
<td><button style="color:red" onclick="underDevelopment();">𐎓</button></td>\
<td><button style="color:black" onclick="underDevelopment();">𐎔</button></td>\
<td><button style="color:black" onclick="underDevelopment();">𐎕</button></td>\
<td><button style="color:black" onclick="underDevelopment();">𐎖</button></td>\
<td><button style="color:black" onclick="underDevelopment();">𐎗</button></td>\
<td><button style="color:black" onclick="underDevelopment();">𐎘</button></td>\
<td><button style="color:black" onclick="underDevelopment();">𐎙</button></td>\
</tr><tr><td colspan="5"></td>\
<td><button style="color:black" onclick="underDevelopment();">𐎚</button></td>\
<td><button style="color:red" onclick="underDevelopment();">𐎛</button></td>\
<td><button style="color:black" onclick="underDevelopment();">𐎜</button></td>\
<td colspan="5"></td></tr><tr><td colspan="5"></td><td colspan="3" align="center">\
<button style="color:black" onclick="underDevelopment();">𐎝</button>\
<button style="color:black" onclick="underDevelopment();">𐎟</button>\
</td><td colspan="5"></td></tr></table>';

// HTML table formating

var tablePrefix = '<table align = "center">\
<tr><td></td><td align="center">\
<table>\
<tr>\
<td>';

var tableAfix = '</td>\
</tr>\
</table>\
</td></tr>\
<tr>\
<td>';

var tableBfix = '</td><td>';

var tablePostfix = '</td>\
<td>\
<table>\
<tr><td><button class="controlButton" onclick="makeAeiou(\'english\', layout, \'default\', \'default\')">ABCD</button></td></tr>\
<tr><td><button class="controlButton" onclick="makeAeiou(\'greek\', layout, \'default\', \'default\')">ΑΒΓΔ</button></td></tr>\
<tr><td><button class="controlButton" onclick="makeAeiou(\'russian\', layout, \'default\', \'default\')">АБВГ</button></td></tr>\
<tr><td><button class="controlButton" onclick="makeAeiou(\'abjadi\', layout, \'abjadi\', \'default\')"><font style="font-family: \'Mirza\', cursive;">دجبا</font></button></td></tr>\
<tr><td><button class="controlButton" onclick="makeAeiou(\'hebrew\', layout, \'hebrew\', \'default\')"><font style="font-family: \'Noto Sans Hebrew\', sans-serif;">אבגד</font></button></td></tr>\
<tr><td><button class="controlButton" onclick="makeAeiou(\'georgian\', layout, \'georgian\', \'default\')"><font style="font-family: \'Noto Sans Georgian\', serif;">აბგდ</font></button></td></tr>\
<tr><td><button class="controlButton" onclick="makeAeiou(\'runes\', layout, \'runes\', \'default\')"><font style="font-family: \'Noto Sans Runic\', sans-serif;">ᛅᛒᚦᛁ</font></button></td></tr>\
<tr><td><button class="controlButton" onclick="makeAeiou(\'ugaritic\', layout, \'ugaritic\', \'default\')"><font style="font-family: \'Noto Sans Ugaritic\', sans-serif;">𐎀𐎁𐎂𐎃</font></button></td></tr>\
</table>\
</td>\
</tr>\
<tr><td></td><td align="center">\
<table>\
<tr><td><button class="controlButton" onclick="makeAeiou(alphabetos, \'linear\')">=</button></td>\
<td><button class="controlButton" onclick="makeAeiou(alphabetos, \'axial\')">-|-</button></td></tr>\
</table>\
</td></tr>\
</table>';

// Functions

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Visual part of onclick action handler and lastSpoken variable counter
function showLetter(letter) {
    if (variant == 'default') speakLanguage = alphabetos;
        else speakLanguage = alphabetos + '-' + variant;

    if (lastSpoken["symbol"] == letter) { lastSpoken["count"]++;
        if (lastSpoken["count"] > (tableAbcd[speakLanguage]["sound"][letter].length / 4)) lastSpoken["count"] = 1 ;
    } else { lastSpoken["count"] = 1 }
    lastSpoken["symbol"] = letter;

    var leftPre = ((((tableAbcd[speakLanguage]["sound"][letter][((tableAbcd[speakLanguage]["sound"][letter].length / 4) - 1) + lastSpoken["count"]].length - 1) * 15) + 5) * (-1));
    var leftPost = 30;

    // English view fix:
    if (alphabetos == "english" && variant == "default" && letter == "g") {
        leftPre = -20;
    }
    if ((font == "enhandwritten" || font == "enlowerhand") && alphabetos == "english" && variant == "default") {
        leftPre = ((((tableAbcd[speakLanguage]["sound"][letter][((tableAbcd[speakLanguage]["sound"][letter].length / 4) - 1) + lastSpoken["count"]].length - 1) * 5) + 1) * (-1));
        leftPost = 33;
    }

    switch(lastSpoken["count"]) {
        case lastSpoken["count"]:
            if (font == "enhandwritten" || font == "enlowerhand" || font == "ruhandwritten" || font == "rulowerhand" || font == "grhandwritten" || font == "grlowerhand") textstroke = 0;
                else if (alphabetos == "runes") textstroke = 1;
                    else textstroke = 2;
            document.getElementById(letter + "Pre").innerHTML = '<div style="position: absolute; text-transform: lowercase; left: ' + leftPre + 'px; top: 0px; font-weight: 900; color: gray; -webkit-text-fill-color: gray; -webkit-text-stroke-width: ' + textstroke + 'px; -webkit-text-stroke-color: white; z-index: 10;">' + tableAbcd[speakLanguage]["sound"][letter][((tableAbcd[speakLanguage]["sound"][letter].length / 4) - 1) + lastSpoken["count"]] + '</div>';
            document.getElementById(letter + "Letter").innerHTML = tableAbcd[speakLanguage]["sound"][letter][lastSpoken["count"] - 1];
            document.getElementById(letter + "Post").innerHTML = '<div style="position: absolute; text-transform: lowercase; left: ' + leftPost + 'px; top: 0px; font-weight: 900; color: gray; -webkit-text-fill-color: gray; -webkit-text-stroke-width: ' + textstroke + 'px; -webkit-text-stroke-color: white; z-index: 10;">' + ( tableAbcd[speakLanguage]["sound"][letter][lastSpoken["count"] + (((tableAbcd[speakLanguage]["sound"][letter].length / 4) * 2) - 1)] ) + '</div>';
            if (tableAbcd[speakLanguage]["sound"][letter][((tableAbcd[speakLanguage]["sound"][letter].length / 4) * 3) - 1 + lastSpoken["count"]].length > 0) {
                var bracketLeft = "(";
                var bracketRight = ")";
                var underLeft = ( tableAbcd[speakLanguage]["sound"][letter][((tableAbcd[speakLanguage]["sound"][letter].length / 4) * 3) - 1 + lastSpoken["count"]].length ) * -2;
                if (textstroke == 0) var underText = ""; else var underText = "-webkit-text-stroke-width: 1px; -webkit-text-stroke-color: white;";
                document.getElementById(letter + "Under").innerHTML = '<div style="position: absolute; white-space: nowrap; font-size: 16px; text-transform: none; left: ' + underLeft + 'px; top: 30px; font-weight: 900; color: gray; ' + underText + ' z-index: 10;">' + bracketLeft + ( tableAbcd[speakLanguage]["sound"][letter][((tableAbcd[speakLanguage]["sound"][letter].length / 4) * 3) - 1 + lastSpoken["count"]] ) + bracketRight + '</div>';
            }
            sleep(500 + ((tableAbcd[speakLanguage]["sound"][letter][((tableAbcd[speakLanguage]["sound"][letter].length / 4) - 1) + lastSpoken["count"]].length + tableAbcd[speakLanguage]["sound"][letter][lastSpoken["count"] + (((tableAbcd[speakLanguage]["sound"][letter].length / 4) * 2) - 1)].length + 1) * 100)).then(() => {
                document.getElementById(letter + "Pre").innerHTML = "";
                document.getElementById(letter + "Letter").innerHTML = letter;
                document.getElementById(letter + "Post").innerHTML = "";
                document.getElementById(letter + "Under").innerHTML = "";
            });
            break;
    }
}

// Under Development notification
function underDevelopment() {
    document.getElementById("underDevelopment").innerHTML = "under development";
    sleep(1234).then(() => {
        document.getElementById("underDevelopment").innerHTML = "&nbsp;";
    });
}

// Main function, HTML table generating
function makeAeiou(alphabetosTransmitted, layoutTransmitted, fontTransmitted, variantTransmitted) {
    if (alphabetosTransmitted === undefined) {
        alphabetosTransmitted = alphabetos;
    }
    if (layoutTransmitted === undefined) {
        layoutTransmitted = layout;
    }
    if (fontTransmitted === undefined) {
        fontTransmitted = font;
    }
    if (variantTransmitted === undefined) {
        variantTransmitted = variant;
    }
    alphabetos = alphabetosTransmitted;
    layout = layoutTransmitted;
    font = fontTransmitted;
    variant = variantTransmitted;
    var result = '<p align="center">';
    switch(alphabetos) {
        case 'english':
            result += '<a href="https://en.wikipedia.org/wiki/English_alphabet" target="_blank">english alphabet</a>';
            break;
        case 'russian':
            switch (variant) {
                case 'default':
                    result += '<a href="https://en.wikipedia.org/wiki/Russian_alphabet" target="_blank">russian alphabet</a>';
                    break;
                case 'bulgarian':
                    result += '<a href="https://en.wikipedia.org/wiki/Bulgarian_alphabet" target="_blank">bulgarian alphabet</a>';
                    break;
            }
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
            switch (variant) {
                case 'default':
                    result += '<a href="https://en.wikipedia.org/wiki/Younger_Futhark" target="_blank">younger futhark</a>';
                    break;
                case 'bornholm':
                    result += '<a href="https://en.wikipedia.org/wiki/Runes" target="_blank">bornholm</a>';
                    break;
            }
            break;
        case 'ugaritic':
            result += '<a href="https://en.wikipedia.org/wiki/Ugaritic_alphabet" target="_blank">ugaritic alphabet</a>';
            break;
    }
    result += "</p>";
    result += tablePrefix;

    switch(alphabetos) {
        case 'english':
            result += '<button class="controlButton" onclick="makeAeiou(alphabetos, layout, \'default\')">ABCD</button></td><td><button class="controlButton" onclick="makeAeiou(alphabetos, layout, \'lowercase\')">abcd</button></td><td><button class="controlButton" onclick="makeAeiou(alphabetos, layout, \'enhandwritten\')"><font style="font-family: \'alsscrp\', cursive">ABCD</font></button></td><td><button class="controlButton" onclick="makeAeiou(alphabetos, layout, \'enlowerhand\')"><font style="font-family: \'alsscrp\', cursive">abcd</font></button>';
            break;
        case 'russian':
            result += '<button class="controlButton" onclick="makeAeiou(alphabetos, layout, \'default\')">АБВГ</button></td><td><button class="controlButton" onclick="makeAeiou(alphabetos, layout, \'lowercase\')">абвг</button></td><td><button class="controlButton" onclick="makeAeiou(alphabetos, layout, \'ruhandwritten\')"><font style="font-family: \'Marck Script\', cursive">АБВГ</font></button></td><td><button class="controlButton" onclick="makeAeiou(alphabetos, layout, \'rulowerhand\')"><font style="font-family: \'Marck Script\', cursive">абвг</font></button>';
            break;
        case 'hebrew':
            result += '<button class="controlButton" onclick="makeAeiou(alphabetos, layout, \'hebrew\')"><font style="font-family: \'Noto Sans Hebrew\', sans-serif">אבגד</font></button></td><td><button class="controlButton" onclick="makeAeiou(alphabetos, layout, \'hehandwritten\')"><font style="font-family: \'YOAVCB\', cursive">אבגד</font></button>';
            break;
        case 'greek':
            result += '<button class="controlButton" onclick="makeAeiou(alphabetos, layout, \'default\')">ΑΒΓΔ</button></td><td><button class="controlButton" onclick="makeAeiou(alphabetos, layout, \'lowercase\')">αβγδ</button><button class="controlButton" onclick="makeAeiou(alphabetos, layout, \'grhandwritten\')"><font style="font-family: \'VAGHandWritten\', cursive">ΑΒΓΔ</font></button></td><td><button class="controlButton" onclick="makeAeiou(alphabetos, layout, \'grlowerhand\')"><font style="font-family: \'VAGHandWritten\', cursive">αβγδ</font></button>';
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

    switch(alphabetos) {
        case 'english':
            break;
        case 'russian':
            result += '<button class="controlButton" onclick="makeAeiou(alphabetos, layout, font, \'default\')">russian alphabet</button><br><button class="controlButton" onclick="makeAeiou(alphabetos, layout, font, \'bulgarian\')">bulgarian alphabet</button>';
            break;
        case 'hebrew':
            break;
        case 'greek':
            break;
        case 'georgian':
            break;
        case 'abjadi':
            break;
        case 'runes':
            result += '<button class="controlButton" onclick="makeAeiou(alphabetos, layout, font, \'default\')">younger futhark</button><br><button class="controlButton" onclick="makeAeiou(alphabetos, layout, font, \'bornholm\')">bornholm</button>';
            break;
        case 'ugaritic':
            break;
    }

    result += tableBfix;

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
        case 'grhandwritten':
            result += '<table class="abcdTable grhandwritten upper">';
            break;
        case 'grlowerhand':
            result += '<table class="abcdTable grhandwritten lower">';
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

    if (variant == 'default') {
        result += tableAbcd[alphabetos][layout];
    } else {
        result += tableAbcd[alphabetos+'-'+variant][layout];
    }

    result += tablePostfix;

    document.getElementById("aeiou").innerHTML = result;
}
