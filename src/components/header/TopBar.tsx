

const TopBar = () => {
  return (
    <div className="mt-[23px] py-[19px] px-[30px] bg-gray-100  text-sm text-gray-600 flex justify-between items-center">
      <div className="space-x-4">
        <span>15th Street, USA</span>
        <span>✉️ support@gamil.com</span>
      </div>
      <div className="space-x-2">
        <span>🌐 English</span>
        <span className="space-x-2">
          <a href="#">FB</a>
          <a href="#">X</a>
          <a href="#">In</a>
        </span>
      </div>
    </div>
  )
}

export default TopBar