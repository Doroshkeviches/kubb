export function UpdatePetWithForm() {
  const href = '/pet/:petId'

  return (
    <div className="test">
      hello world
      <a href={href}>Open post</a>
      <button type="button" onClick={(e) => console.log(e)}>
        Submit
      </button>
    </div>
  )
}