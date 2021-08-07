function add_user(){
    player1_name=document.getElementById("player_one_input").value;
    player2_name= document.getElementById("player_two_input").value;

    localStorage.setItem("player1", player1_name);
    localStorage.setItem("player2", player2_name);

    window.location="game_page.html";
}