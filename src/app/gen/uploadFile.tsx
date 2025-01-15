export function UploadFile() {
  const href = '/pet/:petId/uploadImage'

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