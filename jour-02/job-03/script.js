function myDisplayText() {
    const input = document.getElementById("input-text").value;
    document.getElementById("text-displayer").textContent = input;
}

function myTurnBold() {
    const paragraph = document.getElementById("text-displayer");
    paragraph.style.fontWeight = "bold";
}

function myTurnItalic() {
    const paragraph = document.getElementById("text-displayer");
    paragraph.style.fontStyle = "italic";
}

function myClearText() {
    const paragraph = document.getElementById("text-displayer");
    paragraph.textContent = "";
    paragraph.style.fontWeight = "normal";
    paragraph.style.fontStyle = "normal";
}

document.getElementById("input-text").addEventListener("input", myDisplayText);
document.getElementById("turn-text-bold").addEventListener("click", myTurnBold);
document.getElementById("turn-text-italic").addEventListener("click", myTurnItalic);
document.getElementById("clear-text").addEventListener("click", myClearText);
