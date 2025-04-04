/* Reset some default styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Arial, sans-serif;
  line-height: 1.6;
}

header {
  background-color: #333;
  color: #fff;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

header .logo h1 {
  font-size: 1.8rem;
}

header nav ul {
  list-style: none;
  display: flex;
}

header nav ul li {
  margin: 0 1rem;
}

header nav ul li a {
  color: #fff;
  text-decoration: none;
  font-size: 1rem;
}

#hero {
  background: #f4f4f4;
  padding: 2rem;
  text-align: center;
}

#hero .cta {
  display: inline-block;
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  background-color: #333;
  color: white;
  text-decoration: none;
  border-radius: 5px;
}

#about, #projects, #contact {
  padding: 2rem;
  text-align: center;
}

.project-cards {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
}

.project-card {
  width: 250px;
  background-color: #f9f9f9;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.project-card img {
  width: 100%;
  border-radius: 5px;
}

#contact-form {
  display: flex;
  flex-direction: column;
  max-width: 500px;
  margin: 0 auto;
}

#contact-form label {
  margin-top: 1rem;
}

#contact-form input, #contact-form textarea {
  padding: 0.8rem;
  margin-top: 0.3rem;
  border: 1px solid #ccc;
  border-radius: 5px;
}

button {
  margin-top: 1rem;
  padding: 0.8rem;
  background-color: #333;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #555;
}

footer {
  background-color: #333;
  color: white;
  text-align: center;
  padding: 1rem;
  margin-top: 2rem;
}