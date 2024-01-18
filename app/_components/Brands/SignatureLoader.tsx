import Pattern from '../Pattern'

export default function SignatureLoader() {
  return (
    <div className="-mb-44 relative py-56">
      <div className="container mx-auto">
        <div className="flex">
          <div className="w-[445px] pr-3 flex-grow-0 shrink-0">
            <div className="ml-auto w-fit">
              <Pattern />
            </div>
          </div>
          <div className="w-full px-54">
            <span
              className={`bg-bej animate-pulse absolute top-0 left-[calc(50vw-(140px*2))] bottom-0 w-[100vw] select-none pointer-events-none`}
            ></span>
            <div className="relative text-white">
              <h3 className="text-2xl font-bold">Signature Delights</h3>
              <h5 className="text-xl font-light">
                {"Experience La Poire's Iconic"}
                <br />
                {" Dessert Creations"}
              </h5>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto pb-34">
        <div className="flex">
          <div className="w-[445px] pr-3 flex-grow-0 shrink-0" />
          <div className="w-full px-54">
            <div className="relative text-white">
              <div className="text-sm text-bej h-4"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
