$(function(){
    var popularNum=0;
    var popularCount =$(".popularWrap").children("a").children("figure").length;
    
    $(".mpRight").css("cursor","pointer").click(function(){
        popularNum++;
        if(popularNum<=popularCount-1){
            $(".popularWrap").animate({"left":-135*popularNum},500);
        }
        else if(popularNum>popularCount-1){
            popularNum=popularCount-1;
        }
    });
    $(".mpLeft").css("cursor","pointer").click(function(){
        popularNum--;
        if(popularNum>=0){
            $(".popularWrap").animate({"left":-135*popularNum},500);
        }
        else if(popularNum<0){
            popularNum=0;
        }
    });
});
