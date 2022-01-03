import React from "react";
//import ReactDOM from "react-dom";
//import ReactHtmlParser from "react-html-parser";
//import reactElementToJSXString from "react-element-to-jsx-string";
//import ReactDOMServer from "react-dom/server";
import ExecutionEnvironment from "exenv";

/*class Forward extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <div ref={this.props.fwdtwe} />;
  }
}*/

class Cable extends React.Component {
  constructor(props) {
    super(props);
    this.state = { limit: [], cache: null, mountsCount: 0, cacheStyle: "" };
    this.page = React.createRef();
    this.fwdtwe = React.createRef();
  }
  componentDidMount() {
    if (ExecutionEnvironment.canUseDOM) {
      this.setState({ go: true }, () => this.checkIfBetween());
    }
  }
  componentDidUpdate = (prevProps) => {
    if (this.state.go && this.props.scrolling !== prevProps.scrolling) {
      this.checkIfBetween();
    }
  };
  componentWillUnmount = () => {
    clearTimeout(this.setset);
  };
  checkIfBetween = () => {
    const { cache } = this.state;
    const { scrollTopAndHeight, scrollTop, girth, timeout } = this.props;
    var girt = girth ? girth : 1500;
    var timeou = timeout ? timeout : 1500;
    clearTimeout(this.setset);
    this.setset = setTimeout(() => {
      var page = this.page.current;
      var between =
        page.offsetTop - scrollTop > Number(`-${girt}`) &&
        scrollTopAndHeight - page.offsetTop > Number(`-${girt}`);
      if (between) {
        !this.state.mount && this.setState({ mount: between }, () => {});
      } else {
        var continuee = this.props.fwd.current;
        if (!continuee && !cache) return;
        this.setState(
          {
            cache: cache ? cache : continuee.outerHTML,
            cacheStyle: JSON.parse(
              (cache ? cache : continuee.outerHTML)
                .split(`style="`)[1]
                .split(`"`)[0]
                .replaceAll(";", `",`)
                .replaceAll(": ", `: "`)
            )
          },
          () => {
            if (!between) {
              return (page.innerHTML = "");
            } else {
              const children = [...page.children];
              if (
                continuee &&
                (children.length === 0 ||
                  !children.find((x) => x === this.state.cache))
              ) {
                console.log("replenishing, new scroll");
                return (page.innerHTML = this.state.cache);
              }
            }
          }
        );
      }
    }, timeou);
  };
  render() {
    const { mount, cacheStyle } = this.state;
    const { src, float, title, img } = this.props;
    //const limited = limit.find((x) => x === Object.keys(this.props.fwd));
    const onError = (e) => {
      //this.props.fwd.current.remove();
      this.props.onError(e);
    }; //ternaries remove the node and element; display removes the element, but not the node
    return (
      <div ref={this.page} style={{ cacheStyle }}>
        {!mount || src === "" ? (
          <span style={{ border: "1px gray solid" }}>{title}</span>
        ) : img ? (
          <img
            onError={onError}
            alt={title}
            style={{
              shapeOutside: "rect()",
              float,
              width: "200px",
              border: 0,
              ...this.props.style
            }}
            ref={this.props.fwd}
            src={src}
          />
        ) : (
          <iframe
            onError={onError}
            title={title}
            style={{
              shapeOutside: "rect()",
              float,
              width: "200px",
              border: 0,
              ...this.props.style
            }}
            ref={this.props.fwd}
            src={src}
          />
        )}
      </div>
    );
  }
}
export default React.forwardRef((props, ref) => <Cable fwd={ref} {...props} />);
