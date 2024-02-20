    window.onresize=function(){
        
        if(window.innerWidth>530){
            infsecResizebigger();
        }
        else{
           infosectionResizesmaller();
        }
        
    }
    $(document).ready(function(){

        
        if(window.innerWidth>530){
            infsecResizebigger();
        }
        else{
           infosectionResizesmaller();
        }
       
    }); 

    function infsecResizebigger(){
        const infsec2 = document.querySelector ('#infosectionP2');
        const infocontainer = document.querySelector('#info');
        var heightP2 = infsec2.offsetHeight;
        $('#info').css({ 
            height:heightP2
        });

        $('#infosectionP1').css({
            height:heightP2
        });
        console.log("HP2 "+heightP2);
    
    }
    function infosectionResizesmaller(){

            const infsec1 = document.querySelector ('#infosectionP1');
            const infdivinner = document.querySelector('#infosectionP1 div')
            const infsec2 = document.querySelector ('#infosectionP2');
            var height1 = infsec1.offsetHeight;
            var height2 = infsec2.offsetHeight;
            var height12 = height1 + height2;
            var innerheight = infdivinner.offsetHeight;
            

           $('infosectionP1').css({
                height:innerheight
           });
            $('#info').css({
                height:height12
           });  
           console.log("HP1 "+height1);
           console.log("HP2 "+height2);
           console.log("HP2 "+height12);
    }

   
    
    

    


