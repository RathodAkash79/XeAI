const btn = document.querySelector(".talk");
const content = document.querySelector(".content");
const textInput = document.getElementById("text-input");
const submitBtn = document.getElementById("submit-btn");

submitBtn.addEventListener("click", () => {
  const command = textInput.value.toLowerCase();
  takeCommand(command);
  textInput.value = "";
});

function speak(text) {
  document.getElementById("output-p").textContent = text;
  const text_speak = new SpeechSynthesisUtterance(text);

  text_speak.rate = 1;
  text_speak.volume = 1;
  text_speak.pitch = 1;
  window.speechSynthesis.speak(text_speak);
}

function wishMe() {
  var day = new Date();
  var hour = day.getHours();

  if (hour >= 0 && hour < 12) {
    speak("Good Morning Boss...");
  } else if (hour >= 12 && hour < 17) {
    speak("Good Afternoon boss...");
  } else {
    speak("Good Evening boss...");
  }
}

window.addEventListener("load", () => {
  speak("Initializing XeAI...");
  speak("welcome to the world of artificial intelligence");
  wishMe();
});

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onresult = (event) => {
  const currentIndex = event.resultIndex;
  const transcript = event.results[currentIndex][0].transcript;
  content.textContent = transcript;
  takeCommand(transcript.toLowerCase());
};

btn.addEventListener("click", () => {
  content.textContent = "Listening...";
  recognition.start();
});

submitBtn.addEventListener("click", () => {
  content.textContent = "Listening...";
  recognition.start();
});

function takeCommand(command) {
  if (command.includes("hey") || command.includes("hello")) {
    speak("Hello Sir, How May I Help You?");
    Event(() => {
      content.textContent = "Hello Sir, How May I Help You?";
      recognition.start();
    });
  } else if (command.includes("how are you")) {
    speak("I am fine. What about you?");
  } else if (command.includes("who is") || command.includes("what are")) {
    window.open(
      `https://www.google.com/search?q=${command.replace(" ", "+")}`,
      "_blank"
    );
    const finalText =
    "This is what I found on the internet regarding " + message;
    speak(finalText);
  } else if (command.includes("what's your name?")) {
    speak("My Name is XeAI");
  } else if (command.includes("who i am?")) {
    speak(" you are my boss");
  } else if (command.includes("say")) {
    const saymsg = command.replace("say", "")
    speak(saymsg);
  } else if (command.includes("who is your boss?")) {
    speak("Nova Brothers is My Boss ");
  } else if (command.includes("speak" + "words")) {
    speak("good, nope, yes, game, never, can, same , what, so, no, yeah, gg, minecraft, montage, capcut, really?, can, we, ust, for, nope, let's, hehe, this, is, lol, lmao, huh, that, keep, know, then, clap");
  } else if (command.includes(`tell me about you`)) {
    speak(
      `i am a Personal virtual assistant, who can talk with you. i can do things like open and close many website on just a single voice command, also you can give me text commands, for more details contact Nova Brothers`
    );
  } else if (command.includes("open my playlist")) {
    window.open("C:\Users\Lenovo\Music\___________________.xspf");
    speak("Opening your playlist...");
  } else if (command.includes("open github")) {
    window.open("https://github.com", "_blank");
    speak("Opening GitHub...");
  } else if (command.includes("open google")) {
    window.open("https://google.com", "_blank");
    speak("Opening Google...");
  } else if (command.includes("open youtube")) {
    window.open("https://youtube.com", "_blank");
    speak("Opening Youtube...");
  } else if (command.includes("open facebook")) {
    window.open("https://facebook.com", "_blank");
    speak("Opening Facebook...");
  } else if (command.includes("instagram")) {
    window.open(`https://instagram.com`, _blank);
    speak("Opening instagram...");
  } else if (command.includes("time")) {
    const time = new Date().toLocaleString(undefined, {
      hour: "numeric",
      minute: "numeric",
    });
    const finalText = "The current time is " + time;
    speak(finalText);
  } else if (command.includes("date")) {
    const date = new Date().toLocaleString(undefined, {
      month: "short",
      day: "numeric",
    });
    const finalText = "Today's date is " + date;
    speak(finalText);
  } else if (command.includes("calculator")) {
    window.open("Calculator:///");
    const finalText = "Opening Calculator";
    speak(finalText);
  } else if (command.includes(`shutdown`)) {
    window.open(
      `"C:\Users\Lenovo\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\shutdown.lnk"`
    );
  } else if (command.includes("open visual studio code")) {
  } else if (command.includes(`shutdown`)) {
    window.open(
      `"C:\Users\Lenovo\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\shutdown.lnk"`
    );
  } else if (command.includes("open visual studio code")) {
    window.open(
      "C:UsersLenovoAppDataRoamingMicrosoftWindowsStart MenuProgramsVisual Studio Code"
    );
    speak(`Opening vs code`);
  } else if (command.includes("wikipedia")) {
    window.open(
      `https://en.wikipedia.org/wiki/${command
        .replace("wikipedia", "")
        .trim()}`,
      "_blank"
    );

    const finalText = "This is what I found on Wikipedia regarding " + command;
    speak(finalText);
  } else {
    window.open(
      `https://www.google.com/search?q=${command.replace(" ", "+")}`,
      "_blank"
    );
    const finalText = "I found some information for " + command + " on Google";
    speak(finalText);
  }
}

function takeCommand(message) {
  if (message.includes("hey") || message.includes("hello")) {
    speak("Hello Sir, How May I Help You?");
  } else if (message.includes("how are you")) {
    speak("i am fine. what about you?");
  } else if (message.includes("what's your name?")) {
    speak("My name is XeAI");
  } else if (message.includes("who i am?")) {
    speak(" you are my boss");
  } else if (message.includes("say")) {
    const saymsg = message.replace("say", "")
    speak(saymsg);
  } else if (message.includes("speak",  "words")) {
    speak("good, nope, yes, game, never, can, same , what, so, no, yeah, gg, minecraft, montage, capcut, really?, can, we, use, have, left, kill, for, nope, let's, hehe, this, is, lol, lmao, huh, that, keep, know, then, clap");
  } else if (message.includes("who is your boss?")) {
    speak("Nova Brothers is My Boss ");
  } else if (message.includes(`tell me about you`)) {
    speak(
      `i am a Personal virtual assistant, who can talk with you. i can do things like open and close many website on just a single voice command, also you can give me text commands, for more details contact Nova Brothers `
    );
  } else if (message.includes("open my playlist")) {
    window.open("C:\Users\Lenovo\Music\___________________.xspf");
    speak("Opening Your Playlist...");
  } else if (message.includes("open spotify")) {
    window.open("C:\Users\Lenovo\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Spotify.lnk");
    speak("Opening Spotify...");
  } else if (message.includes("open google")) {
    window.open("https://google.com", "_blank");
    speak("Opening Google...");
  } else if (message.includes("open youtube")) {
    window.open("https://youtube.com", "_blank");
    speak("Opening Youtube...");
  } else if (message.includes("open facebook")) {
    window.open("https://facebook.com", "_blank");
    speak("Opening Facebook...");
  } else if (message.includes(`instagram`)) {
    window.open(`https://instagram.com`, "_blank");
    speak("Opening instagram...");
  } else if (
    message.includes("what is") ||
    message.includes("who is") ||
    message.includes("what are")
  ) {
    window.open(
      `https://www.google.com/search?q=${message.replace(" ", "+")}`,
      "_blank"
    );
    const finalText =
      "This is what I found on the internet regarding " + message;
    speak(finalText);
  } else if (message.includes("wikipedia")) {
    window.open(
      `https://en.wikipedia.org/wiki/${message
        .replace("wikipedia", "")
        .trim()}`,
      "_blank"
    );
    const finalText = "This is what I found on Wikipedia regarding " + message;
    speak(finalText);
  } else if (message.includes("time")) {
    const time = new Date().toLocaleString(undefined, {
      hour: "numeric",
      minute: "numeric",
    });
    const finalText = "The current time is " + time;
    speak(finalText);
  } else if (message.includes("date")) {
    const date = new Date().toLocaleString(undefined, {
      month: "short",
      day: "numeric",
    });
    const finalText = "Today's date is " + date;
    speak(finalText);
  } else if (message.includes("calculator") || command.includes("calculator")) {
    window.open("Calculator:///");
    const finalText = "Opening Calculator";
    speak(finalText);
  } else if (message.includes(`shutdown`)) {
    window.open(
      `"C:\Users\Lenovo\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\shutdown.lnk"`
    );
  } else if (message.includes("open vs code")) {
    window.open(
      "C:UsersLenovoAppDataRoamingMicrosoftWindowsStart MenuProgramsVisual Studio Code"
    );
    const finalText = "opening visual studio code";
    speak(finalText);
  } else {
    window.open(
      `https://www.google.com/search?q=${message.replace(" ", "+")}`,
      "_blank"
    );
    const finalText = "I found some information for " + message + " on Google";
    speak(finalText);
  }
}
