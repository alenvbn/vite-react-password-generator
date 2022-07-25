import { useState } from "react";
import "react-widgets/styles.css";

function Home() {
  const [uppercase, setUppercase] = useState(true);
  const [special, setSpecial] = useState(true);
  const [numbers, setNumbers] = useState(true);
  const [length, setLength] = useState(16);
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    let characters = "abcdefghijklmnopqrstuvwxyz";
    let generated_password = "";

    if (uppercase) {
      characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }

    if (special) {
      characters += "-_+!@#$%^&*()";
    }

    if (numbers) {
      characters += "123456789";
    }
    for (let i = 0; i < length; i++) {
      generated_password +=
        characters[Math.floor(Math.random() * characters.length)];
    }
    setPassword(generated_password);
  };
  return (
    <>
      <div className="col-md-4 offset-md-4">
        <form
          onSubmit={handleSubmit}
          style={{ backgroundColor: "#121212" }}
          className="p-5 card card-body"
        >
          <h1 className="h4">Password Generator</h1>
          <label htmlFor="length">Select the length of your password:</label>
          <select
            inde
            onChange={(e) =>
              setLength(
                parseInt(
                  e.nativeEvent.target[e.nativeEvent.target.selectedIndex].value
                )
              )
            }
            name="length"
            id="length"
            className="form-control"
          >
            <option value="8">8 characters</option>
            <option value="10">10 characters</option>
            <option value="12">12 characters</option>
            <option value="14">14 characters</option>
            <option value="16" selected>16 characters</option>
          </select>
          <div className="form-check form-switch my-2">
            <label htmlFor="uppercase" className="form-check-label">
              Uppercase
            </label>
            <input
              type="checkbox"
              name="uppercase"
              onChange={() => setUppercase(!uppercase)}
              checked={uppercase}
              className="form-check-input"
              id="uppercase"
            />
          </div>
          <div className="form-check form-switch my-2">
            <label htmlFor="special" className="form-check-label">
              Special Characters
            </label>
            <input
              type="checkbox"
              name="special"
              checked={special}
              onChange={() => setSpecial(!special)}
              id="special"
              className="form-check-input"
            />
          </div>
          <div className="form-check form-switch my-2">
            <label htmlFor="numbers" className="form-check-label">
              Numbers
            </label>
            <input
              type="checkbox"
              name="numbers"
              checked={numbers}
              onChange={() => setNumbers(!numbers)}
              id="numbers"
              className="form-check-input"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Generate Password
          </button>
        </form>
      </div>
      <br /> <br />
      <div class="col-md-4 offset-md-4">
        <div class="card card-body bg-dark bg-secondary text-center">
          <h1>Password</h1>
          <p>{password}</p>
        </div>
      </div>
    </>
  );
}

export default Home;
