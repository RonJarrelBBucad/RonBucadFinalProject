body {
  font-family: Arial, sans-serif;
  background: #e6f9f3;
  margin: 0;
  padding: 0;
}

header {
  background: #00695c;
  color: white;
  padding: 20px;
}

nav a {
  margin: 10px;
  text-decoration: none;
  color: white;
}
nav a:hover {
  text-decoration: underline;
  background-color: #004d40;
  padding: 5px;
}

.logo {
  background: url('sprite.png') no-repeat 0 0;
  display: inline-block;
  width: 32px;
  height: 32px;
  vertical-align: middle;
}

img.banner {
  width: 100%;
  height: auto;
}

input:focus, textarea:focus {
  background: #fff9c4;
}

button {
  padding: 10px;
  background-color: #00796b;
  color: white;
  border: none;
  cursor: pointer;
  transition: transform 0.3s ease;
}

button:hover {
  transform: scale(1.05);
}

.error {
  color: red;
  font-size: 0.9em;
  margin-left: 5px;
}