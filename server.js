let phonebooks = [];

const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/phonebook", function (req, res) {
  req.params.id;
  phonebooks.push({ ...req.body, id: Date.now() });
  res.json(req.body);
});

app.put("/phonebook/:id", function (req, res) {
  const idOfUser = parseInt(req.params.id);
  let notFound = true;
  phonebooks = phonebooks.map((phonebook) => {
    if (phonebook.id === idOfUser) {
      notFound = false;
      return { ...phonebook, ...req.body };
    }

    return phonebook;
  });

  if (notFound) res.status(404).send();

  res.json(phonebooks);
});

app.get("/phonebook", function (req, res) {
  res.json(phonebooks);
});

app.delete("/phonebook/:id", function (req, res) {
  const idOfUser = parseInt(req.params.id);
  phonebooks = phonebooks.filter((phonebook) => phonebook.id !== idOfUser);

  res.json(phonebooks);
});

app.listen(3050, () => console.log(`App listening at port 3000`));
