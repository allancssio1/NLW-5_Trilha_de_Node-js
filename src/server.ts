import express from   "express"

const app = express()

app.get("/", (req, res) => {
  return res.json({
    message: "NLW#05"
  })
})
app.post("/users", (req, res) => {
  return res.json({
    message: "usuário salvo com sucesso"
  })
})

app.listen(3333, () => console.log('Server running on port 3333'))