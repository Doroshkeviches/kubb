export function DeleteOrder() {
  const href = '/store/order/:orderId'

  return (
    <div className="test">
      hello world
      <a href={href}>Open delete</a>
      <button type="button" onClick={(e) => console.log(e)}>
        Submit
      </button>
    </div>
  )
}