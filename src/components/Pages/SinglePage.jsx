import Recommended from "../Recomendet/Recommended"
import SingleBook from "../SingleBook/SingleBook"

const SinglePage = () => {
  return (
    <>
    <main>
        <div className="flex justify-center gap-[41px] max-[1180px]:flex-col">
      <SingleBook/>
      <Recommended/>
        </div>
    </main>
    </>
  )
}

export default SinglePage
