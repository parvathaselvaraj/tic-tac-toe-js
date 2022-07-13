import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";

const actionBtnStyle = {
  textDecoration: "underline",
  cursor: "pointer"
};

function ActionButton(props) {
  return (
    <span>
      <span> &nbsp; </span>
      <span
        className="button-text"
        onClick={props.action.onClick}
        style={{ ...actionBtnStyle }}
      >
        {props.action.text}
      </span>
    </span>
  );
}

function DismissButton(props) {
  return (
    <span
      className="lfm-close"
      style={{ position: "absolute", right: "12px" }}
      onClick={props.hideBanner}
    >{props.closeButtonText}</span>
  );
}

const defaultBannerStyle = {
  display: "flex",
  backgroundColor: "#FFA500",
  color: "#FFFFFF",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "11px",
  fontWeight: "400",
  height: "30px",
  position: "relative",
  width: "600px",
  borderRadius: "4px",
  margin: "10px"
};

class Banner extends React.Component {
  render() {
    const { hasAction, isVisible } = this.props;
    const { message, bannerStyle, className, hideBanner } = this.props;
    return isVisible ? (
      <div
        className={`${className}`}
        style={{ ...defaultBannerStyle, ...bannerStyle }}
      >
        {message}
        {hasAction ? <ActionButton {...this.props} /> : null}
        {!_.isNil(hideBanner) ? <DismissButton {...this.props} /> : null}
      </div>
    ) : (
      <div />
    );
  }
}

Banner.defaultProps = {
  isVisible: true,
  hasAction: false,
  closeButtonText: "x"
};

Banner.propTypes = {
  // optional props
  isVisible: PropTypes.bool,
  hideBanner: PropTypes.func,
  action: PropTypes.shape({
    text: PropTypes.string,
    onClick: PropTypes.func
  }),
  hasAction: PropTypes.bool,
  // required props
  message: PropTypes.node.isRequired,
  closeButtonText: PropTypes.string
};

export default Banner;