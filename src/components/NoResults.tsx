import rickAndMorty from "../assets/rick-and-morty.jpg"

export default function NoResults() {
  return (
    <div>
      <img src={rickAndMorty} style={{ width: "70%", maxWidth: 400 }} />
      <h1>No results!</h1>
    </div>
  )
}