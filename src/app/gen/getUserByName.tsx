export function GetUserByName() {
  const href = '/user/:username'

  return (
    <div className="test">
      hello world
      <a href={href}>Open get</a>
      <button type="button" onClick={(e) => console.log(e)}>
        Submit
      </button>
    </div>
  )
}