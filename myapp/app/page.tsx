export default async function Page() {

  await new Promise((resolve) => setTimeout(resolve, 800));

  return (
    <div>
      <h1>Hello</h1>
    </div>
  )
}