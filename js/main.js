// array of classes accordion
var accordion = document.getElementsByClassName("accordion"),
    i;

//for element in accordion array do :

for (i = 0; i < accordion.length ; i++){
    //console.log(accordion[i]);
    accordion[i].addEventListener("click",function(){
        
        //Remplace "+" with "-"
        this.classList.toggle("active");
        
        //get sibling div with class "description"
        var description = this.nextElementSibling;
        
        //check maxHeight
        if(description.style.maxHeight){
            //description.style.maxHeight =0;// "0px" --> str !!
            description.style.maxHeight = null;
        }else{
            //scrollheight: get height of element maxHeight : Xpx
            description.style.maxHeight = description.scrollHeight +"px";
        }
                                     
    });   
}