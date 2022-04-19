import { Slides } from "./slides"

export const Features = (props) => {
  return (
    <div id="features" className="text-center">
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <div style={{ width: "33.3%", padding: "1.5rem" }}>
            <div className="line"></div>
          </div>
          <div className="col-md-4 section-title">
            <h2>Skills</h2>
          </div>
          <div style={{ width: "33.3%", padding: "1.5rem" }}>
            <div className="line"></div>
          </div>
        </div>
        <Slides data={props} />
      </div>
    </div>
  )
}
