export function UpdatePet() {
  const href = '/pet'

  return (
    <div className="test">
      hello world
      <a href={href}>Open put</a>
      <button type="button" onClick={(e) => console.log(e)}>
        Submit
      </button>
    </div>
  )
}