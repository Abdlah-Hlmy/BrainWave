import brackets from "../assets/svg/Brackets";

const TagLine = ({ className, children }) => {
  return (
    <div className={`tagline flex items-center ${className || ''}`}>
      {brackets('left')}
      <p className="mx-3 text-n-3">{children}</p>
      {brackets('right')}
    </div>
  )
}

export default TagLine
