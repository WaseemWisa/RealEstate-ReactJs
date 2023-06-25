import './Heading.scss'
function Heading({title , label}) {
  return (
      <div className="heading">
        <span className="label">{title}</span>
        <h2 className="title">{title}</h2>
      </div>
  )
}

export default Heading