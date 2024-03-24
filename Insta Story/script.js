const data = [
  {
    dp: "https://images.unsplash.com/photo-1596937098209-541d20a39ebd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2V4eSUyMGdpcmxzfGVufDB8fDB8fHww",
    story:
      "https://images.unsplash.com/photo-1596937098209-541d20a39ebd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHNleHklMjBnaXJscyUyMHBvcnRyYWl0c3xlbnwwfHwwfHx8MA%3D%3D",
    idx: 0,
  },
  {
    dp: "https://plus.unsplash.com/premium_photo-1661760184334-e0cba9163f80?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    story:
      "https://plus.unsplash.com/premium_photo-1668165257976-13771a2fea0e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2V4eSUyMGdpcmxzJTIwcG9ydHJhaXRzfGVufDB8fDB8fHww",
    idx: 1,
  },
  {
    dp: "https://plus.unsplash.com/premium_photo-1661295654759-ad0b6b012ff3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2V4eSUyMGdpcmxzfGVufDB8fDB8fHww",
    story:
      "https://images.unsplash.com/photo-1578067141755-c40d45e10124?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNleHklMjBnaXJscyUyMHBvcnRyYWl0c3xlbnwwfHwwfHx8MA%3D%3D",
    idx: 2,
  },
  {
    dp: "https://images.unsplash.com/photo-1583900985737-6d0495555783?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHNleHklMjBnaXJsc3xlbnwwfHwwfHx8MA%3D%3D",
    story:
      "https://images.unsplash.com/photo-1588372039338-f051d2b04d89?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fHNleHklMjBnaXJscyUyMHBvcnRyYWl0c3xlbnwwfHwwfHx8MA%3D%3D",
    idx: 3,
  },
  {
    dp: "https://images.unsplash.com/flagged/photo-1556151994-b611e5ab3675?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHNleHklMjBnaXJsc3xlbnwwfHwwfHx8MA%3D%3D",
    story:
      "https://images.unsplash.com/photo-1520065949650-380765513210?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fHNleHklMjBnaXJscyUyMHBvcnRyYWl0c3xlbnwwfHwwfHx8MA%3D%3D",
    idx: 4,
  },
];
const stories = document.querySelector(".stories");

let clutter = "";
data.forEach(function (elem, idx) {
  clutter += `
    <div class="story">
    <img id="${elem.idx}" src="${elem.dp}" alt="" />
    </div>
    `;
});
document.querySelector(".stories").innerHTML = clutter;

stories.addEventListener("click", function (dets) {
  let storyScreen = document.querySelector(".full-story");

  storyScreen.style.display = "block";
  storyScreen.style.backgroundImage = `url("${data[dets.target.id].story}")`;

  setTimeout(function () {
    storyScreen.style.display = "none";
  }, 2000);
});
