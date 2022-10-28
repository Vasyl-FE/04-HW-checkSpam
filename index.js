let text = prompt("Enter your message");
let spamCheck = text.includes("free") || text.includes("Free");

if (spamCheck === true) {
    alert("You are a spammer! Shame on you!");
} else {
    alert("Thanks for your message");
}

console.log(spamCheck);