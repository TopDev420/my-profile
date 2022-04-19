export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro">
        <div id="starshine">
          <div class="template shine"></div>
        </div>
        <div className="overlay">
          <div className="row">
            <div className="col-md-12">
              <div className="border-up"></div>
              <h1>
                {props.data ? props.data.title : "Loading"}
                <span></span>
              </h1>
              <p>{props.data ? props.data.paragraph : "Loading"}</p>
              <div className="border-down"></div>
              <a href="#features" className="btn btn-custom page-scroll">
                <svg
                  width="180px"
                  height="60px"
                  viewBox="0 0 180 60"
                  class="border"
                >
                  <polyline
                    points="179,1 179,59 1,59 1,1 179,1"
                    class="bg-line"
                  />
                  <polyline
                    points="179,1 179,59 1,59 1,1 179,1"
                    class="hl-line"
                  />
                </svg>
                <span>Learn More</span>
              </a>{" "}
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
