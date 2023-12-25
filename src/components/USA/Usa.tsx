import { Link } from "react-router-dom"
import { UsaArray } from "../../constants"


export const Usa = () => {
  return (
    <div className="brands">
        {UsaArray.map((item) => (
            <div className="brand" key={item.title}>
                <Link to={item.url}><div style={{width: "50px", height: "50px"}}>{item.logo}</div></Link>
            </div>
        ))}
    </div>
  )
}
