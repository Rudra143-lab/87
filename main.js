canvas=new fabric.Canvas("mycanvas");
player_x=10;
player_y=10;

part_width=30;
part_height=30;

var player_object="";
var part_object="";

function player_update() 
{ fabric.Image.fromURL("player.png", function(Img) 
{    player_object = Img; 
     player_object.scaleToWidth(150);
     player_object.scaleToHeight(140);
     player_object.set({ top:player_y, left:player_x });
     canvas.add(player_object);
     }); }

 function new_image(get_image) 
    { fabric.Image.fromURL(get_image, 

    function(Img) 
    {   part_object = Img; 
        part_object.scaleToWidth(part_width);
        part_object.scaleToHeight(part_height);
        part_object.set({ top:player_y, left:player_x });
        canvas.add(part_object); }); }

        window.addEventListener("keydown",mykeydown);

        function mykeydown(e)
        {
            keypress=e.keyCode

            if(e.shiftKey == true && keypress == "80")
            {
             part_width=part_width +10;
             part_height=part_height+10;
             console.log(part_height,part_width);
    
             document.getElementById("current_height").innerHTML=part_height;
             document.getElementById("current_width").innerHTML=part_width;
             
            }
    
            if(e.shiftKey == true && keypress == "77")
            {
             block_width=block_width -10;
             block_height=block_height-10;
             console.log(block_height,block_width);
    
             document.getElementById("current_height").innerHTML=part_height;
             document.getElementById("current_width").innerHTML=part_width;
             
             

            }
            if(keypress=="38")
            {
               up();
            }
    
            if(keypress=="40")
            {
               down();
            }
    
            if(keypress=="37")
            {
               left();
            }
    
            if(keypress=="39")
            {
               right();
            }
    
            if(keypress=="67")
            {
               new_image("captain_america_left_hand.png");
            }
    
            if(keypress=="68")
            {
               new_image("hulk_face.png");
            }
    
            if(keypress=="71")
            {
               new_image("hulk_left_hand.png");
            }
    
            if(keypress=="76")
            {
               new_image("hulk_right_hand.png");
            }
    
           
            if(keypress=="82")
            {
               new_image("hulkd_body.png");
            }
    
            if(keypress=="84")
            {
               new_image("ironman_body.png");
            }
    
            if(keypress=="85")
            {
               new_image("ironman_face.png");
            }
    
            if(keypress=="87")
            {
               new_image("ironman_legs.png");
            }
    
            if(keypress=="89")
            {
               new_image("ironman_right_hand.png");
            }  
          
            if(keypress=="88")
            {
               new_image("spiderman_body.png");
            } 
          
            if(keypress=="90")
            {
               new_image("spiderman_face.png");
            }  }

            function up()
            { if(player_y >=0)
                {   player_y = player_y - part_height;
                    console.log("Part image height = " + part_height);
                    console.log("When Up arrow key is pressed, X = " + player_x + " , Y = "+player_y);
                    canvas.remove(player_object); player_update();
                    } }
   
            function down()
            { if(player_y <=550)
                        {   player_y = player_y + part_height;
                            console.log("part image height = " + part_height);
                            console.log("When Down arrow key is pressed, X = " + player_x + " , Y = "+player_y);
                            canvas.remove(player_object); player_update();
                            } }
           
            function left()
             { if(player_x >=0)
                        {   player_x = player_x - part_width;
                            console.log("part image height = " + part_width);
                            console.log("When Left arrow key is pressed, X = " + player_x + " , Y = "+player_y);
                            canvas.remove(player_object); player_update();
                                    } }
       
            function right()
                { if(player_x <=850)
                {    player_x = player_x + part_width;
                     console.log("part image height = " + part_width);
                     console.log("When Left arrow key is pressed, X = " + player_x + " , Y = "+player_y);
                     canvas.remove(player_object); player_update();
                                                           } }
        
          
    