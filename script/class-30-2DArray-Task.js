function heightRunScorer(playersInfo){
    console.log(playersInfo);
    var heighScorer = playersInfo [0] [0]
    var heighScore = playersInfo [0] [1]
    for (var i = 1 ; i < playersInfo.length ; i++){
        if (heighScore < playersInfo[i] [1]){
            heighScore = playersInfo [i] [1]
            heighScorer = playersInfo [i] 
        }
    }
    return  heighScorer
}
var playersInfo = [
    ["Shakib" , 24 ] ,
    ["Mahmudullah" , 85] ,
    ["miraj" , 35] ,
    ["hridoy" , 46] ,
    ["Mushfiq" , 56]
]
var final = heightRunScorer(playersInfo)
console.log(final);
