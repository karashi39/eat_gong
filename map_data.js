const PLAYER = "😳"
const WORLD_DICT = {a: "🟩", b: "🗻", c: "🟦", d: "🌲", e: "🟫", f: "🟨", h: "🟧", m: "🏠", w:"🟪", y:"🍙", x: "🟦"}
const WORLD_EVT = {a: "e", b: "x", c: "x", d: "e", e: "e", f: "e", h: "e", m: "m", w: "d", y: "y", x: "x"}
const WORLD_MAP = [
    "cccccccccccccccccccccccccccccccccccccccccccccccccccccccccc"+"x",
    "cccccccccccccccccccccccccccccccccccccccccccccccccccccccccc"+"x",
    "cccccccccccccccccccccccccccccccccccccccccccccccccccccccccc"+"x",
    "cccccccccccccccccccccccccccccccccccccccccccccccccccccccccc"+"x",
    "cccccccaaaaaccccccccccccaaaaaaacccccccccccccccaaaaaaaacccc"+"x",
    "cccccaaaddddaaccccccccaaaaaaaaaaacccccccccccaaaaaaeeeeeeee"+"x",
    "ccccammmdddddaacccccaaaaaadddddaaacccccccccaaaaaadddddeeee"+"x",
    "ccccadddddddddaaaaaaaaaaadddddddddaccccccccaaaaaddddddddde"+"x",
    "ccccddddddeeeeebbbaaaaaaddddddddddaaccccccaaaaadddddddddde"+"x",
    "ccccdddddeeeeebbbbbaaaaaddddddddddaaaaccaaaaadddddcccddddd"+"x",
    "ccccdddeeeeebbbbbbbbaaadddddddddddddaaaaaaaaaddddcccccddde"+"x",
    "cccceeeeeebbbbbddddbbbbddddddddddddaaaaaaaaaddddddccceeeee"+"x",
    "cccceeeebbbbdddddddddbbbdddddddddddddaaaaaaddddddcccceeeee"+"x",
    "cccceeeebbddddddddddddbbddddddffffdddddaaaaadddddddeeeeeee"+"x",
    "cccceeaaaddddddddddddbbbdddddffffffddddddaaaaaddddddeeeeee"+"x",
    "ccccccaaaaddddddddddddbbbdddffffffffddddddaaaaadddddddeeec"+"x",
    "cccccccaaaaaddddddddddbbbbddffffyfffdddddaaaaaadddddddeeee"+"x",
    "ccccccccaaaaaaaadddddddbbbbddfffffffddddddaaaaaadddddddeee"+"x",
    "cccccccccddddaaaaaddddddbbbbdddffffddddddddaaaaddddddddeee"+"x",
    "ccccccccdddddaaaaaadddddddbbbdddddddddddddaaaaaaddddddddee"+"x",
    "ccccccccccddaaaaaaaddddddaaaadddddddddddddaaaaadddddddddda"+"x",
    "cccccccddddddaaaaaaaddddaaaaaddddddddddddaaaaaddddddddddaa"+"x",
    "ccccccdddddddddaaaaaaaaaaaaadddddddddddddaaaaaaddddddddaaa"+"x",
    "ccccccdddddddddaaaaaaaaaaaaaddddddddddddddaaaaaaddddddaaaa"+"x",
    "cccccdddddddddddaaaaaaaaaaaaaaddddddddddddaaaaaaadddaaaaaa"+"x",
    "ccccddddddddddddaaaaaaaaaaaaaaaddddddddddaaaaaaaaaaaaaaaaa"+"x",
    "ccccdddddddddddddaaaaaaaaaaaaeeeedddddddaaaaaaaaaaaaaaaaaa"+"x",
    "ccccddddddddddddddaaaaaaaccceeeeeeeddddaaaaaaaaaaaaaaadddd"+"x",
    "ccccdddddddddddddddaaaaccccccceeeeeeddddaaaaaaaaaadddddddd"+"x",
    "ccccddddddddddddddddaaccccccccceeeeeddddaaaaaaaadddddddddd"+"x",
    "ccccdddddddddddddddddcccccccccceeeeddddaaaaaaaadddddddddde"+"x",
    "ccccccdddddddddddddddcccccccccbbbddddddaaaaaaaddddddddddee"+"x",
    "cccccccdddddddddddddcccccccccbbbbbbbddaaaaaaddddddddddddee"+"x",
    "ccccccccccccdddddddccccccbbbbbbbbbbbbaaaaaaaddddddddddddde"+"x",
    "ccccccceeeccccddddcccccbbbbbbbbbbbbbbbaaaaddddddddddbbbbbb"+"x",
    "cccccceeeeeehddccccbbbbbbbbbbbbbbbbbaaaaaaaddddddbbbbbbbbb"+"x",
    "cccccceeeeeeeccccceeeebbbbbbbbbbbbaaaaaaaaadddbbbbbeeeebbb"+"x",
    "cccccceeeeeeeeeeeeeeeeeeebbbbbbbaaaaaaaaaaaabbbbeeeeeeeeee"+"x",
    "cccccceeeeeeeeeeeeeeeeeeeeebbbbaaaaaaaaaaaabbbbeeeeeeeeeee"+"x",
    "ccccccceeeeeeeeeeaaaaeeeeeeebbaaaaaaaaaaaaaaeeeeeeeeeeeeee"+"x",
    "cccccccceeeddddaaaaaaaaeeeeeccaaaaaaaaaaaaddddddddeeeeeeee"+"x",
    "ccccccddddddddaaaaaaaaaaeeeccccaaaaaaaaadddddddddddddeeeee"+"x",
    "cccccdddddddaaaaaaaaaaaeeeeccccaaaaaaaadddddddddddddddeeee"+"x",
    "ccccdddddddaaaaaaaaaadddddccccaaaaaaaaadddddddddddddaaaaae"+"x",
    "ccccdddddaaaaaaaaadddddddcccccaaaaaaaadddddddddaaaaaaaaaaa"+"x",
    "ccccddddaaaaaaaddddddddccccccccaaaaaaaadddddddddaaammmaaaa"+"x",
    "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"+"x",
    //"ccccdddddaaaaadddddccccccccc"+""+"x",
    //"cccccdddddaaaddddccccccccccc"+""+"x",
    //"ccccccddddddddddcccccccccaaa"+""+"x",
    //"ccccccdddddddddcccccccccdddd"+""+"x",
    //"ccccccccdddddddddccccccddddd"+""+"x",
    //"cccccccdddddddddddccccccccdd"+""+"x",
    //"ccccccdddddddddddddccccccccd"+""+"x",
    //"cccccccdddddddddddcccccccccc"+""+"x",
    //"cccccccddddddddddbbbbcccccdd"+""+"x",
    //"cccccccccddddddbbbbbbbbbbbbb"+""+"x",
    //"ccccccccaaddbbbbbbbbbbbbbbbb"+""+"x",
    //"ccccccaaaabbbbbbbbbbbbbbbbbb"+""+"x",
    //"cccccaaaabbbbdddddddbbbbbbbb"+""+"x",
    //"ccccaaaabbbddddddddddbbbbbbb"+""+"x",
    //"ccccaaaadddddddwwwwddddbbbbb"+""+"x",
    //"ccccaaaddddddwwwwwwwdddddbbb"+""+"x",
    //"ccccaaaaddddwwwwwwwwddddddaa"+""+"x",
    //"ccccaaaddddddwwwwwwdddddddaa"+""+"x",
    //"ccccaaadddddddwwwwdddddddaaa"+""+"x",
    //"ccccaaadddddddddddddddddbbbb"+""+"x",
    //"ccccaaaaddddddddddddddbbbbbb"+""+"x",
    //"cccccaaaadddddddddeeebbbbbbd"+""+"x",
    //"cccccccaaadddddddeeeeeebbbdd"+""+"x",
    //"cccccccccaaaddddddddeeeeeddd"+""+"x",
    //"ccccccccccaaaadddddddeeeeeed"+""+"x",
    //"cccccccccccaaaaaddddddeeeddd"+""+"x",
    //"ccccccccccccaaaaaadddddddddd"+""+"x",
    //"ccccccccccccccaaaaaddddddddd"+""+"x",
    //"ccccccccccccccccaaaaaddddddd"+""+"x",
    //"cccccccccccccccccaaaaaaddddd"+""+"x",
    //"cccccccccccccccccccaaaaadddd"+""+"x",
]

const world_map = [];
const world_evt = [];
function initMap() {
    console.log('init map');
    for (row of WORLD_MAP) {
        const result = [];
        const e_result = [];
        for (c of row) {
            result.push(WORLD_DICT[c]);
            e_result.push(WORLD_EVT[c]);
        }
        world_map.push(result);
        world_evt.push(e_result);
    }
}
