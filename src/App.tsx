import { Text } from "./components/Text"

function App() {
  return (
    <>
      <Text as="h1" variant={"body-sm-bold"}>Hello</Text>
      <Text as="h2" variant={"body-md-bold"} className="text-green-dark">Hello</Text>
      <Text className="text-pink-light">Hello</Text>

    </>
  )
}
export default App
