import Dropzone from "./components/dropzone/Dropzone"

export default function Home() {
  return (
    <section className='section'> 
      <div className='container'>
        <h1 className='title text-3x1 font-bold'>Upload Files</h1>
        <Dropzone className='p-16 mt-10 border border-neutral-200'/>
      </div>
    </section>
  )
}
