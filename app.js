function generatePlan() {

  let name = document.getElementById("name").value || "User";
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value / 100;
  let goal = document.getElementById("goal").value;
  let diet = document.getElementById("diet").value;

  if (!weight || !height || !goal || !diet) {
    alert("Fill all fields");
    return;
  }

  // SHOW LOADER
  document.getElementById("loader").classList.remove("hidden");

  setTimeout(() => {

    let bmi = (weight / (height * height)).toFixed(2);

    let status = "";
    let explanation = "";

    if (bmi < 18.5) {
      status = "Needs Improvement";
      explanation = "Your body requires more energy intake and balanced nutrition.";
    } 
    else if (bmi < 25) {
      status = "Good Condition";
      explanation = "Your body composition is balanced. Maintain your lifestyle.";
    } 
    else {
      status = "Health Risk";
      explanation = "A structured diet and regular activity can improve your fitness.";
    }

    // SUMMARY (AI STYLE)
    document.getElementById("summary").innerHTML = `
      <h2>👤 User Overview</h2>
      <p><b>Name:</b> ${name}</p>
      <p><b>Weight:</b> ${weight} kg</p>
      <p><b>Height:</b> ${height * 100} cm</p>
      <p><b>Status:</b> ${status}</p>
    `;

    // BMI EXPLANATION
    document.getElementById("bmiBox").innerHTML = `
      <h2>📊 Health Analysis</h2>
      <p><b>BMI:</b> ${bmi}</p>
      <p>${explanation}</p>
      <p><i>This analysis is based on standard body composition metrics.</i></p>
    `;

    // FOOD IMAGES
    let foods = {
      "Vegetarian": [
        {name:"Paneer", img:"https://source.unsplash.com/300x200/?paneer"},
        {name:"Fruits", img:"https://source.unsplash.com/300x200/?fruits"}
      ],
      "Non-Vegetarian": [
        {name:"Chicken", img:"https://source.unsplash.com/300x200/?chicken"},
        {name:"Eggs", img:"https://source.unsplash.com/300x200/?eggs"}
      ],
      "Vegan": [
        {name:"Tofu", img:"https://source.unsplash.com/300x200/?tofu"},
        {name:"Nuts", img:"https://source.unsplash.com/300x200/?nuts"}
      ],
      "Veg + Non-Veg": [
        {name:"Paneer", img:"https://source.unsplash.com/300x200/?paneer"},
        {name:"Chicken", img:"https://source.unsplash.com/300x200/?chicken"}
      ]
    };

    let results = document.getElementById("results");
    results.innerHTML = "";

    foods[diet].forEach(food => {
      results.innerHTML += `
        <div class="card">
          <img src="${food.img}">
          <div style="padding:10px">
            <h3>${food.name}</h3>
            <p>Ideal for ${goal}</p>
          </div>
        </div>
      `;
    });

    // HIDE LOADER
    document.getElementById("loader").classList.add("hidden");

  }, 1200);
}
