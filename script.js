* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Arial, sans-serif;
}

body {
  background: #0f172a;
  color: white;
}

nav {
  display: flex;
  justify-content: space-between;
  padding: 20px 50px;
  background: #020617;
  position: sticky;
  top: 0;
}

nav ul {
  list-style: none;
  display: flex;
  gap: 20px;
}

nav a {
  color: white;
  text-decoration: none;
}

.hero {
  text-align: center;
  padding: 80px 20px;
}

.hero img {
  width: 150px;
  border-radius: 50%;
  margin-bottom: 20px;
}

.hero span {
  color: #38bdf8;
}

.btn {
  display: inline-block;
  margin-top: 20px;
  padding: 10px 25px;
  background: #38bdf8;
  color: black;
  text-decoration: none;
  border-radius: 5px;
}

section {
  padding: 60px 80px;
}

h2 {
  text-align: center;
  margin-bottom: 40px;
}

.skill {
  margin-bottom: 20px;
}

.bar {
  background: #334155;
  height: 10px;
  border-radius: 5px;
}

.fill {
  height: 10px;
  background: #38bdf8;
  width: 0;
  border-radius: 5px;
}

.python { width: 90%; }
.sql { width: 80%; }
.powerbi { width: 75%; }
.html { width: 70%; }

.projects-container {
  display: flex;
  gap: 30px;
  justify-content: center;
  flex-wrap: wrap;
}

.project-card {
  background: #020617;
  padding: 15px;
  width: 250px;
  border-radius: 10px;
}

.project-card img {
  width: 100%;
  border-radius: 8px;
}

footer {
  text-align: center;
  padding: 20px;
  background: #020617;
}
