export function GetInventory() {
  const href = '/store/inventory'

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