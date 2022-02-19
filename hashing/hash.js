/*
    Test -> xdrty
    Test -> 1234134
 */


function hash(string)
{
    let hashing = "";
    for(let i = 0; i<string.length;i++)
    {
        hashing += string.charCodeAt(i);
    }
    return hashing;
}

console.log(hash("test"));
//ouput : 116 101 115 116
//116 101 115 116 -> test