let quotes = [
    "Everything you can imagine is real. - Pablo Picasso", 
    "Do what you can, with what you have, where you are. - Theodore Roosevelt", 
    "No one can make you feel inferior without your consent. - Eleanor Roosevelt",
    "The way get started is to quit talking and begin doing. – Walt Disney",
    "The pessimist sees difficulty in every opportunity. The optimist sees opportunity in every difficulty. – Winston Churchill",
    "Don’t let yesterday take up too much of today. - Will Rogers",
    "You learn more from failure than from success. Don’t let it stop you. Failure builds character. - Unknown",
    "It’s not whether you get knocked down, it’s whether tou get up. - Vince Lombardi",
    "If you are working on something that you really care about, you don’t have to be pushed. The vision pulls you. - Steve Jobs",
    "People who are crazy enough to think they can change the world, are the ones who do. - Rob Siltanen",
    "Failure will never overtake me if my determination to succeed is strong enough. - Og Mandino",
    "Entrepreneurs are great at dealing with uncertainty and also very good at minimizing risk. That’s the classic entrepreneur. - Mohnish Pabrai",
    "We may encounter many defeats but we must not be defeated. - Maya Angelou",
    "Knowing is not enough; We must apply. Wishing is not enough; We must do. - Johann Wolfgang Von Goethe",
    "Imagine your life is perfect in every respect; What would it look like? - Brian Tracy",
    "“We generate fears while we sit. We overcome them by action.” - Dr. Henry Link",
    "Whether you think you can or think you can’t, you’re right. - Henry Ford",
    "Failure is simply the opportunity to begin again, this time more intelligently. - Henry Ford",
    "Security is mostly a superstition. Life is either a daring adventure or nothing. - Helen Keller",
    "The man who has confidence in himself gains the confidence of others. - Hasidic Proverb",
    "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
    "Creativity is intelligence having fun. - Albert Einstein",
    "What you lack in talent can be made up with desire, hustle and giving 110% all The Time. - Don Zimmer",
    "Do what you can with all you have, wherever you are. - Theodore Roosevelt",
    "Develop an attitude of gratitude. Say thank you to everyone you meet for everything they do for you. - Brian Tracy",
    "You are never too old to set another goal or to dream a new dream. - C.S. Lewis",
    "To see what is right and not doing it is a lack of courage. – Confucius",
    "Reading is to the mind, as exercise is to the body. – Brian Tracy",
    "Fake it until you make it! Act as if you had all the confidence you require until it becomes your reality. – Brian Tracy",
    "The future belongs to the competent. get good, get better, be the best! - Brian Tracy",
    "There is no substitute for hard work. - Thomas Edison",
    "Both optimists and pessimists contribute to our society. The optimist invents the airplane, and the pessimist the parachute. - Gil Stein",
    "The distance is nothing; it’s only the first step that is difficult. - Marquise du Deffand",
    "It doesn’t matter if I don’t succeed in something. What matters is if I learn from my mistakes. - Linda Evans",
    "If you don’t like something change it. If you can’t change it, change your attitude. Don’t complain. - Maya Angelou",
    "The grand essentials of happiness are: something to do, something to love, and something to hope for. - Allan K Chalmers",
    "Well done is better than well said. - Benjamin Franklin"
];

function generateQuotes() {
    let magicNumber = Math.floor(Math.random() * quotes.length);
    document.getElementById("display").textContent = quotes[magicNumber];
}



