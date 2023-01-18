function addUser()
{
    player_1_name=document.getElementById("Player1_nameinput").value;
    player_2_name=document.getElementById("Player2_nameinput").value;
    localStorage.setItem("player1_name",player_1_name);
    localStorage.setItem("player2_name",player_2_name);
    window.location.replace("game_page.html");
}