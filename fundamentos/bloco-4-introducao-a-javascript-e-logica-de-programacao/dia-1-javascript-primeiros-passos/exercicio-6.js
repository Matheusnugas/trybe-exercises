const piece = "King"


switch (piece.toLowerCase()) {
    case "pawn":
        console.log("The pawn moves in a straight line");
        break;
    case "bishop":
        console.log("The Bishop moves diagonally");
        break;
    case "knight":
        console.log("The Knight moves in a L");
        break;
    case "rook":
        console.log("The Rook moves multiple houses in a straight line");
        break;
    case "queen":
        console.log("The Queen moves multiple houses in a straight line or diagonally");
        break;
    case "king":
        console.log("The King moves a single house in a straight line or diagonally");
        break;
    default:
        console.log("Mistakes were made");
}